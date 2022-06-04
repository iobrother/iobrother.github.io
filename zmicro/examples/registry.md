---
sidebar_position: 5
---

# 服务注册与发现

## 源码地址

https://github.com/zmicro-team/zmicro/tree/master/examples/greeter

## 服务端配置文件

```yaml
app:
  name: "example"
registry:
  basePath: "/zmicro"
  updateInterval: 30
  etcdAddr:
    - "127.0.0.1:2379"
```

## 服务端代码

```go
package main

import (
	"context"
	"fmt"

	"github.com/smallnest/rpcx/server"
	"github.com/zmicro-team/zmicro"
	"github.com/zmicro-team/zmicro/core/log"
	"github.com/zmicro-team/zmicro/examples/proto"
)

func main() {
	app := zmicro.New(zmicro.InitRpcServer(InitRpcServer))

	if err := app.Run(); err != nil {
		log.Fatal(err)
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

	"github.com/zmicro-team/zmicro/core/log"
	"github.com/zmicro-team/zmicro/core/transport/rpc/client"
	"github.com/zmicro-team/zmicro/examples/proto"
)

func main() {
	c, err := client.NewClient(
		client.WithServiceName("Greeter"),
		client.BasePath("/zmicro"),
		client.EtcdAddr([]string{"127.0.0.1:2379"}),
	)
	if err != nil {
		log.Error(err)
		return
	}
	cli := proto.NewGreeterClient(c.GetXClient())

	req := &proto.HelloRequest{
		Name: "zmicro",
	}

	rsp, err := cli.SayHello(context.Background(), req)
	if err != nil {
		log.Error(err)
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
