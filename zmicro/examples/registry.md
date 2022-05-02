---
sidebar_position: 5
---

# 服务注册与发现

## 源码地址

https://github.com/iobrother/zmicro/tree/master/examples/greeter

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

	"github.com/iobrother/zmicro"
	"github.com/iobrother/zmicro/core/log"
	"github.com/iobrother/zmicro/examples/proto"
	"github.com/smallnest/rpcx/server"
)

func main() {
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

	fmt.Println("kkkkk")
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
  // 客户端，不需要指定服务器地址，但需要指定etcd地址
	c := client.NewClient(
		client.WithServiceName("Greeter"),
		client.BasePath("/zmicro"),
		client.EtcdAddr([]string{"127.0.0.1:2379"}),
	)
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
