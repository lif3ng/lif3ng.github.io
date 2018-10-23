# yarn、npm 比较

## 命令

|                         | npm                              | yarn                        |
| ----------------------- | -------------------------------- | --------------------------- |
| init                    | `npm init`                       | `yarn init`                 |
| install global          | `npm install --global [package]` | `yarn global add [package]` |
| to dependencies         | default `[--save-prod/-P]`       | `yarn add [package]`        |
| to devDependencies      | `--save-dev/-D`                  | `--dev/-D`                  |
| to peerDependencies     |                                  | `--peer/-P`                 |
| to optionalDependencies | `--save-optional/-O`             | `--optional/-O`             |
| install version         | `[<@scope>/]<name>@<version>`    | `[package]@[version]`       |
| uninstall               | `npm uninstall [package]`        | `yarn remove [package]`     |
|                         | alias: remove, rm, r, un, unlink |                             |
| update                  | `npm update [-g] [<pkg>...]`     | `yarn upgrade [package]`    |

## 修改 registry

```
npm config set registry https://registry.npm.taobao.org/
yarn config set registry https://registry.npm.taobao.org/
```

## 参考ß

- [yarn usage](https://yarnpkg.com/en/docs/usage)
- [yarn cli docs](https://yarnpkg.com/en/docs/cli/)
- [npm-install](https://docs.npmjs.com/cli/install)
