---
sidebar_position: 4
---

# 同时启动http与rpc服务

这一篇介绍一个服务端同时启动 http 服务 与 rpc 服务

## 源码地址

https://github.com/iobrother/zmicro/tree/master/examples/multi

## rpc proto文件

```
syntax = "proto3";

option go_package = "github.com/iobrother/zmicro/examples/proto";

package proto;

// The greeting service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}
```

生成代码
```bash
protoc -I. \
  --gofast_out=. --gofast_opt=paths=source_relative \
  --rpcx_out=. --rpcx_opt=paths=source_relative *.proto
```

上述命令生成了 hello.pb.go 与 hello.rpcx.pb.go 两个文件。 hello.pb.go 文件是由protoc-gen-gofast插件生成的， 当然你也可以选择官方的protoc-gen-go插件来生成。 hello.rpcx.pb.go 是由protoc-gen-rpcx插件生成的，它包含服务端的一个骨架， 以及客户端的代码。

## http proto文件

```
syntax = "proto3";

option go_package = "github.com/iobrother/zmicro/examples/gin/api/api";

package github.com.iobrother.zmicro.examples.gin.api.api;

import "google/api/annotations.proto";
import "gogoproto/gogo.proto";

service Greeter {
  rpc SayHello(HelloRequest) returns (HelloReply) {
    option (google.api.http) = {
      get: "/hello/{name}"
    };
  }
}

message HelloRequest {
  string name = 1 [(gogoproto.moretags) = 'uri:"name"'];
}

message HelloReply {
  string message = 1;
}
```

生成代码

```bash
cd zmicro/examples/multi/server
protoc \
    -I. \
    -I../../third_party \
    --gofast_out=. \
    --gofast_opt paths=source_relative \
    --zmicro-gin_out=. \
    --zmicro-gin_opt paths=source_relative \
    --zmicro-gin_opt allow_empty_patch_body=true \
    hello.proto
```

或者执行 generate.sh 脚本

```
cd zmicro/examples/multi/server
./generate.sh
```


上述命令生成了 hello.pb.go 与 hello.gin.pb.go 两个文件。 hello.pb.go 文件是由protoc-gen-gofast插件生成的， 当然你也可以选择官方的protoc-gen-go插件来生成。 hello.gin.pb.go 是由 protoc-gen-zmicro-gin 插件生成的，它包含服务骨架代码以及路由注册代码。

## 服务端配置文件

```yaml
app:
  name: "example"
http:
  addr: ":5180"
  mode: "debug"
rpc:
  addr: ":5188"

```

## 服务端代码

```go
package main

import (
	"context"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/iobrother/zmicro"
	"github.com/iobrother/zmicro/core/log"
	zgin "github.com/iobrother/zmicro/core/transport/http"
	"github.com/iobrother/zmicro/examples/multi/server/api"
	"github.com/iobrother/zmicro/examples/proto"
	"github.com/smallnest/rpcx/server"
)

func main() {
	// 同时启动 http 服务与 rpc 服务
	app := zmicro.New(
		zmicro.InitRpcServer(InitRpcServer),
		zmicro.InitHttpServer(InitHttpServer),
	)

	if err := app.Run(); err != nil {
		log.Fatal(err.Error())
	}
}

func InitRpcServer(s *server.Server) error {
	if err := s.RegisterName("Greeter", &GreeterImpl{}, ""); err != nil {
		return err
	}
	return nil
}

type GreeterImpl struct{}

func (s *GreeterImpl) SayHello(ctx context.Context, req *proto.HelloRequest, rsp *proto.HelloReply) error {
	*rsp = proto.HelloReply{
		Message: fmt.Sprintf("hello %s!", req.Name),
	}

	return nil
}

func InitHttpServer(r *gin.Engine) error {
	gin.DisableBindValidation()

	g := r.Group("/")
	api.RegisterGreeterHTTPServer(g, &HttpGreeter{})

	return nil
}

type HttpGreeter struct {
	zgin.Implemented
}

// 接口实现，我们发现，这里的接口与rpcx接口风格是完全一样的。
func (s *HttpGreeter) SayHello(ctx context.Context, req *api.HelloRequest, rsp *api.HelloReply) error {
	*rsp = api.HelloReply{
		Message: fmt.Sprintf("hello %s!", req.Name),
	}

	return nil
}
```

## 启动服务器

```bash
go run server.go
```

## 运行`curl`

```bash
curl http://localhost:5180/hello/zmicro
```

输出

```
{"message":"hello zmicro!"}
```

## 启动客户端

```bash
go run client.go
```

输出

```
{"level":"info","ts":"2022-05-02T18:04:21.803+0800","caller":"log/log.go:59","msg":"reply: hello zmicro!"}
```
