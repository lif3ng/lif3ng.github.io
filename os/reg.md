# 注册表

通过 Regshot 可以给注册表进行快照，进行一些操作后比较 diff。

比如修改了 Internet 选项中的代理设置，通过搜索关键字，可以找到区别

```
HKU\S-1-5-21-477239232-1422395831-2897349576-1000\Software\Microsoft\Windows\CurrentVersion\Internet Settings\ProxyEnable: 0x00000000
HKU\S-1-5-21-477239232-1422395831-2897349576-1000\Software\Microsoft\Windows\CurrentVersion\Internet Settings\ProxyEnable: 0x00000001
HKU\S-1-5-21-477239232-1422395831-2897349576-1000\Software\Microsoft\Windows\CurrentVersion\Internet Settings\ProxyServer: "origin:55555"
HKU\S-1-5-21-477239232-1422395831-2897349576-1000\Software\Microsoft\Windows\CurrentVersion\Internet Settings\ProxyServer: "target:12345"

HKLM\SYSTEM\CurrentControlSet\Services\iphlpsvc\Parameters\ProxyMgr\{1B3D2E12-EB3E-439E-9A2A-D9FEF5203306}\StaticProxy: "origin:55555"
HKLM\SYSTEM\CurrentControlSet\Services\iphlpsvc\Parameters\ProxyMgr\{1B3D2E12-EB3E-439E-9A2A-D9FEF5203306}\StaticProxy: "target:12345"
HKLM\SYSTEM\CurrentControlSet\Services\iphlpsvc\Parameters\ProxyMgr\{1B3D2E12-EB3E-439E-9A2A-D9FEF5203306}\LastUseTime:  55 0D DA C2 E8 5E D4 01
HKLM\SYSTEM\CurrentControlSet\Services\iphlpsvc\Parameters\ProxyMgr\{1B3D2E12-EB3E-439E-9A2A-D9FEF5203306}\LastUseTime:  6F F0 4D 5A 73 5F D4 01
```