# scripts

[https://github.com/vuejs/vuepress/blob/v0.14.4/package.json](https://github.com/vuejs/vuepress/blob/v0.14.4/package.json)

```json
  "scripts": {
    "dev": "node bin/vuepress dev docs",
    "build": "node bin/vuepress build docs",
    "lint": "eslint --fix --ext .js,.vue bin/ lib/ test/",
    "prepublishOnly": "conventional-changelog -p angular -r 2 -i CHANGELOG.md -s",
    "release": "/bin/bash scripts/release.sh",
    "test": "node test/prepare.js && jest --config test/jest.config.js"
  },
```
## dev
```
node bin/vuepress dev docs
```
和其他通过 Vuepress 构建的站点开发时一样。
## build

## lint

## test