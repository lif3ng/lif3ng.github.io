# SSH

查看 `~/.ssh`下是否有可用密钥，有的话直接复制 `x.pub` 中的内容加入 Github 或 Bitbucket 账号设置中的ssh。

windows 可以安装 cmder、babun

## 常见问题
- SSH 设置后每次 push 还需要输入 username、password
  
  由于克隆时使用了 HTTPS 的 URL 而没有使用 ssh 的 URL, 可以修改 `.git/config` 中的URL。