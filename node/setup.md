---
# sidebar: auto
# navbar: false
---
# Node 环境安装
## Windows
### nvm
* 下载安装
[download link](https://github.com/coreybutler/nvm-windows/releases)
* 查看可用版本
```
>> nvm list available

|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|   10.10.0    |    8.12.0    |   0.12.18    |   0.11.16    |
|    10.9.0    |    8.11.4    |   0.12.17    |   0.11.15    |
|    10.8.0    |    8.11.3    |   0.12.16    |   0.11.14    |
|    10.7.0    |    8.11.2    |   0.12.15    |   0.11.13    |
|    10.6.0    |    8.11.1    |   0.12.14    |   0.11.12    |
|    10.5.0    |    8.11.0    |   0.12.13    |   0.11.11    |
|    10.4.1    |    8.10.0    |   0.12.12    |   0.11.10    |
|    10.4.0    |    8.9.4     |   0.12.11    |    0.11.9    |
|    10.3.0    |    8.9.3     |   0.12.10    |    0.11.8    |
|    10.2.1    |    8.9.2     |    0.12.9    |    0.11.7    |
|    10.2.0    |    8.9.1     |    0.12.8    |    0.11.6    |
|    10.1.0    |    8.9.0     |    0.12.7    |    0.11.5    |
|    10.0.0    |    6.14.4    |    0.12.6    |    0.11.4    |
|    9.11.2    |    6.14.3    |    0.12.5    |    0.11.3    |
|    9.11.1    |    6.14.2    |    0.12.4    |    0.11.2    |
|    9.11.0    |    6.14.1    |    0.12.3    |    0.11.1    |
|    9.10.1    |    6.14.0    |    0.12.2    |    0.11.0    |
|    9.10.0    |    6.13.1    |    0.12.1    |    0.9.12    |
|    9.9.0     |    6.13.0    |    0.12.0    |    0.9.11    |
|    9.8.0     |    6.12.3    |   0.10.48    |    0.9.10    |

This is a partial list. For a complete list, visit https://nodejs.org/download/release
```
* 可以安装最新的 LTS 版本
```
nvm install 8.12.0
```
* 切换至安装的版本
```
nvm use 8.12.0
```

### yarn
* 下载安装
[download link](https://yarnpkg.com/en/docs/install#windows-stable)
* 设置源
```
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org
```
也可以使用 [verdaccio](https://github.com/verdaccio/verdaccio) 搭建本地缓存源在离线情况下安装依赖构建工程。