---
sidebar_position: 2
---

# 快速开始

## 源码地址

https://github.com/iobrother/zmicro/tree/master/examples/greeter

## proto文件

```protobuf
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

## 安装代码生成插件

```bash
go install github.com/gogo/protobuf/protoc-gen-gofast@latest
go install github.com/rpcxio/protoc-gen-rpcx@latest
```

protoc-gen-rpcx以上方法安装不成功，是因为作者还没发布新版本，请直接下载代码，编译安装

```bash
protoc -I. -I${GOPATH}/src \
  --gofast_out=. --gofast_opt=paths=source_relative \
  --rpcx_out=. --rpcx_opt=paths=source_relative *.proto
```

## 服务端配置文件

```yaml
app:
  name: "example"
rpc:
  addr: ":5188"
```

## 服务端代码

```go
package main

import (
	"context"
	"fmt"

	"github.com/iobrother/zmicro"
	"github.com/iobrother/zmicro/core/log"
	"github.com/iobrother/zmicro/examples/proto"
	"github.com/smallnest/rpcx/server"
)

func main() {
	// zmicro.InitRpcServer 功能选项表示开启rpc服务器
	app := zmicro.New(zmicro.InitRpcServer(InitRpcServer))

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

```

## 客户端代码

```go
package main

import (
	"context"

	"github.com/iobrother/zmicro/core/log"
	"github.com/iobrother/zmicro/core/transport/rpc/client"
	"github.com/iobrother/zmicro/examples/proto"
)

func main() {
	c := client.NewClient(client.WithServiceName("Greeter"), client.WithServiceAddr("127.0.0.1:5188"))
	cli := proto.NewGreeterClient(c.GetXClient())

	req := &proto.HelloRequest{
		Name: "zmicro",
	}

	rsp, err := cli.SayHello(context.Background(), req)
	if err != nil {
		log.Error(err.Error())
		return
	}
	log.Infof("reply: %s", rsp.Message)
}
```

## 启动服务器

```bash
go run server.go
```

## 启动客户端

```bash
go run client.go
```

输出

```
{"level":"info","ts":"2022-05-02T16:34:17.754+0800","caller":"log/log.go:59","msg":"reply: hello zmicro!"}
```
