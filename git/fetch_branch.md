# 拉取远程分支



查看远程分支
```
git branch -r
```
拉取并且换到该分支
```
git checkout -b 本地分支名x origin/远程分支名x
```
只拉取
```
git fetch origin 远程分支名x:本地分支名x
``` 