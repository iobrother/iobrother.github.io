---
sidebar_position: 1
---

# gin示例

这一篇介绍zmicro使用gin提供http服务

## 源码地址

https://github.com/iobrother/zmicro/tree/master/examples/gin/simple

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
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/iobrother/zmicro"
	"github.com/iobrother/zmicro/core/log"
)

// curl http://127.0.0.1:5180/hello/zmicro
func main() {
  	// zmicro.InitHttpServer 功能选项表示开启http服务器
	app := zmicro.New(zmicro.InitHttpServer(InitHttpServer))

	if err := app.Run(); err != nil {
		log.Fatal(err.Error())
	}
}

func InitHttpServer(r *gin.Engine) error {
	r.GET("/hello/:name", func(c *gin.Context) {
		c.String(http.StatusOK, fmt.Sprintf("hello %s!", c.Param("name")))
	})

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
hello zmicro!
```
