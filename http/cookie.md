# Cookie

## HTTP读写
通过 `Cookie` 请求头发送

通过 `Set-Cookie` 响应头写入

## Attribute
secure
- true 只能通过 HTTPS 发送
- false HTTP 和 HTTPS 都能发送

之前使用 selenium add_cookie 向 chrome 写入 cookie 时，发现如果当前页面是 `https` 的页面，不少cookie的secure会被设置为 true，Firefox没有这个问题。通过访问一个其他域 `http` 的页面写入目标域的 cookie，解决了这个问题。

## rfc
[rfc6265](https://tools.ietf.org/html/rfc6265)