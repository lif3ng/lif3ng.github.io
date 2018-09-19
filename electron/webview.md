# Webview

`<webview>` 是一个神奇的标签，类似于 iframe 标签，用于加载一个嵌入页面，与 iframe 不同的是 webview 通过 shadow-root 来加载页面。

## 事件

### new-window

与 BrowserWindow 不同的是，webview 中的 new-window 事件在当前页面跳转时也会被触发，而且缺省行为不会有跳转发生，此时可以通过为 webview 重新设置 src 来达到其中页面跳转的效果。
```js
webview.addEventListener('new-window', ({url})=>{
    webview.setAttribute('src',url)
})