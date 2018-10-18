# input回填

在使用 Meteor 时，看到 console 中有如下内容：
```
[DOM] Input elements should have autocomplete attributes (suggested: "current-password"): (More info: https://goo.gl/9p2vKq)
```
就顺着链接去了解了下：
- https://www.chromium.org/developers/design-documents/create-amazing-password-forms
- https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands
- https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill
- https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls%3A-the-autocomplete-attribute

看起来规则还不少。。。。

简单的概括一下就是：表单有一些规范，按规范编写可以让浏览器和密码管理器自动填入表单内容。


