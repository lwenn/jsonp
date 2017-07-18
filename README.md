## jsonp 实现

### 原理
jsonp 是为了解决跨域问题而存在的。

前后端分离后，我们经常遇到一些跨域的情况。只要协议、域名、端口有任何一个不同，就会出现跨域。

当我们使用`ajax`发送请求时，js 中的`XMLHttpRequest`是受跨域限制的，而引入 js 是不受跨域限制的，所以 jsonp 可以使用这个特性来实现。

### 缺点
由于 jsonp 使用`<script>`实现的，所以只能发送`GET`请求。

### How to Use
页面中引入`jsonp.js`，使用`Jsonp.get()`方法。
注册了一个全局变量`Jsonp`，只包含一个方法`get`。

#### API
`Jsonp.get(url, data, success)`

* `url`(String): 请求的地址
* `data`(String|Object): 请求参数
* `success`(Function): 请求响应后的回调函数

### Demo
下载源码后，命令行运行`npm run test`。

注：需要`nodejs`环境。