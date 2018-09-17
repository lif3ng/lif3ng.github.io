# import & export

## CommonJS (Node.js modules)

### export

通过为 exports 下属性赋值

```js
exports.foo = (arg) => { ... }
```

通过给 exports 赋值

```js
modele.exports = class Foo {}
modele.exports = {}
modele.exports = () => {}
```

### require

依次寻找 `.js`、`.json`、`.node` 文件

绝对路径的模块以 `/` 打头，相对路径的模块以 `./`、`../` 打头，其他的除了自带模块就是 node_modules 导入的模块

## ES6

todo

- [Node.js Modules](https://nodejs.org/dist/latest-v8.x/docs/api/modules.html)
- [CommonJS](http://www.commonjs.org/specs/modules/1.0/)