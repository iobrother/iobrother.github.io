---
sidebar_position: 2
---

# gin代码生成

这一篇介绍 http 服务的 API 接口如何用 proto 文件来描述，并生成符合框架要求的 gin 代码，gin 代码的生成插件是 protoc-gen-zmicro-gin

## 源码地址

https://github.com/zmicro-team/zmicro/tree/master/examples/gin/api

## proto文件

```
syntax = "proto3";

option go_package = "github.com/zmicro-team/zmicro/examples/gin/api/api";

package github.com.zmicro.team.zmicro.examples.gin.api.api;

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

## 安装代码生成插件

```bash
go install github.com/gogo/protobuf/protoc-gen-gofast@latest
go install github.com/zmicro-team/zmicro/tree/master/cmd/protoc-gen-zmicro-gin@latest
```

生成代码

```bash
cd zmicro/examples/gin/api
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
cd zmicro/examples/gin/api
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
```

## 服务端代码

```go
package main

import (
	"context"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/zmicro-team/zmicro"
	"github.com/zmicro-team/zmicro/core/log"
	zgin "github.com/zmicro-team/zmicro/core/transport/http"
	"github.com/zmicro-team/zmicro/examples/gin/api/api"
)

// curl http://127.0.0.1:5180/hello/zmicro
func main() {
	app := zmicro.New(zmicro.InitHttpServer(InitHttpServer))

	if err := app.Run(); err != nil {
		log.Fatal(err)
	}
}

func InitHttpServer(r *gin.Engine) error {
	gin.DisableBindValidation()

	g := r.Group("/")
	api.RegisterGreeterHTTPServer(g, &GreeterImpl{})

	return nil
}

type GreeterImpl struct {
	zgin.Implemented
}

func (s *GreeterImpl) SayHello(ctx context.Context, req *api.HelloRequest, rsp *api.HelloReply) error {
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

## 并运行`curl`

```bash
curl http://localhost:5180/hello/zmicro
```

输出

```
{"message":"hello zmicro!"}
```
