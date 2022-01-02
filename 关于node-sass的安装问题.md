## 关于node-sass的安装问题

最近自己搭项目的时候，发现安装node-sass很容易出问题，所以在此记录一下（环境是**node v16.13.1**）：



先说结论：**node-sass的版本跟node版本有关的；node环境v16.13.1，webpack 4.44.2，最后安装`node-sass@v6.0.1`是可以正常运行的**。

github上官方文档给的对应关系截取部分如下：

| NodeJS  | Supported node-sass version |
| ------- | :-------------------------- |
| Node 17 | 7.0+                        |
| Node 16 | 6.0+                        |
| Node 15 | 5.0+, <7.0                  |
| Node 14 | 4.14+                       |
| Node 12 | 4.12+                       |

- Node 16环境，支持的node-sass版本是6.0+
- Node 14环境，支持的node-sass版本是4.14+

所以，是啥环境，就安装对应的版本吧，不然会报错。



最开始装的`node-sass@7.0.1`，发现 跟 `webpack@4.44.2` 版本不兼容，所以我想去降级node-sass，看了下npm的官方版本，我发现`node-sass@4.14.1`版本下载的最多，所以安装此版本`yarn add node-sass@4.14.1`，但是一直报错，所以我加上 `--verbose `参数（可以打印出安装详情）看了具体情况，发现是去github下载`https://github.com/sass/node-sass/releases/download/v4.14.1/linux-x64-93_binding.node`报404了（其实就是因为版本不对），

```js
node-pre-gyp WARN Using request for node-pre-gyp https download 
Cannot download "https://github.com/sass/node-sass/releases/download/v4.14.1/linux-x64-93_binding.node": 

HTTP error 404 Not Found

Hint: If github.com is not accessible in your location
      try setting a proxy via HTTP_PROXY, e.g. 

      export HTTP_PROXY=http://example.com:1234
```

于是我去node-sass的github仓库的release页面看了下，发现确实没有`linux-x64-93_binding.node`这个版本，只有`-83`的版本；我换成`node-sass@5.0.0`版本，也是报错，于是我去issue里面搜了下，发现已经有人提过这个问题了，结论就是：**对于 node 16环境，node-sass的支持6.0+版本**。



另外，**node-sass的GitHub官方文档有个Warning，这个库被废弃了，不会添加新功能了**，新库叫 [Dart Sass](https://sass-lang.com/dart-sass)。希望以后新库安装依赖能简单点，我只想躺平，不想折腾这么多了😭

