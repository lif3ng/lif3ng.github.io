# yarn、npm 比较

## 命令

|                  | npm                                    | yarn                                |
| ---------------- | -------------------------------------- | ----------------------------------- |
| init             | ```npm init```                         | ```yarn init```                     |
| install global   | ```npm install --global [package]```   | ```yarn global add [package]```     |
| install save     | ```npm install --save [package]```     | ```yarn add [package]```            |
| install save dev | ```npm install --save-dev [package]``` | ```yarn add [package] [--dev/-D]``` |
| install version  |                                        | ```yarn add [package]@[version]```  |
|                  |                                        | ```yarn add [package]@[tag]```      |
| uninstall        |                                        |                                     |
| update           | ```npm update [-g] [<pkg>...]```       | ```yarn upgrade [package]```        |



## 参考
- [yarn usage](https://yarnpkg.com/en/docs/usage)
- [yarn cli docs](https://yarnpkg.com/en/docs/cli/)
- [npm-install](https://docs.npmjs.com/cli/install)
