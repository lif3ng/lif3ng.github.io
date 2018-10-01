# 命令入口 bin/vuepress.js

[https://github.com/vuejs/vuepress/blob/v0.14.4/bin/vuepress.js](https://github.com/vuejs/vuepress/blob/v0.14.4/bin/vuepress.js)

## 判断 node 版本

```js
const chalk = require('chalk')
const semver = require('semver')
const requiredVersion = require('../package.json').engines.node

if (!semver.satisfies(process.version, requiredVersion)) {
  console.log(chalk.red(
    `\n[vuepress] minimum Node version not met:` +
    `\nYou are using Node ${process.version}, but VuePress ` +
    `requires Node ${requiredVersion}.\nPlease upgrade your Node version.\n`
  ))
  process.exit(1)
}
```

[chalk](https://www.npmjs.com/package/chalk) 是用于在终端环境格式化样式输出的包，这里在 Node 版本不匹配时输出了红色的提示文字。

[semver](https://www.npmjs.com/package/semver) (semantic versioner 语义化版本处理器) 是 npm 官方的版本字符串处理工具类。 <br>  
这里用于验证 node 版本是否匹配。
```js
// semver.satisfies(实际node版本, '>=8')
semver.satisfies(process.version, requiredVersion)
```

## 输出命令提示 解析参数

```js
const program = require('commander')

program
  .version(require('../package.json').version)
  .usage('<command> [options]')
```

[Commander.js](https://www.npmjs.com/package/commander) 为 node.js 可执行程序提供了完整的解决方案。
