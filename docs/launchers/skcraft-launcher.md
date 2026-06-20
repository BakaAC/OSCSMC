# SKCraft Launcher

SKCraft Launcher 是由 SKCraft 维护的开源 Minecraft 整合包启动器平台，主要面向需要自行定制、构建并分发带品牌启动器的整合包作者。

![SKCraft Launcher](https://raw.githubusercontent.com/SKCraft/Launcher/master/readme/launcher.png)

> 信息更新时间：2026-06-20

| 特性       | 详情                                  |
| -------- | ----------------------------------- |
| 认证方式     | Microsoft 账户 / 离线账户                 |
| 支持的模组加载器 | Forge / Fabric / LiteLoader / Quilt |
| 支持平台     | Windows / macOS / Linux             |

## 下载地址

[SKCraft Launcher GitHub 仓库](https://github.com/SKCraft/Launcher)。

[源码 ZIP](https://github.com/SKCraft/Launcher/archive/master.zip)。

官方仓库目前没有提供 GitHub Releases 二进制包。官方 Wiki 建议下载源码后构建，Windows 用户可运行 `build.bat`，Linux 和 macOS 用户可运行 `./build.sh`，也可以使用 `./gradlew clean build`；构建产物位于各子项目的 `build/libs/` 目录。

## 特色功能

- 支持为启动器替换自己的 Logo、品牌和新闻源
- 支持把多个整合包作为集合分发
- 支持通过密钥隐藏部分整合包
- 提供图形化整合包制作工具和命令行构建工具
- 支持断点续传、增量更新和文件去重
- 支持自更新 Bootstrapper 和便携模式
- 支持可选 Mods / Features，并可从 Git 或其他 VCS 结合 CI 生成整合包

## 开源协议

SKCraft Launcher 本体基于 [GNU Lesser General Public License v3](https://github.com/SKCraft/Launcher/blob/master/LICENSE.txt) 发布。官方说明中还要求第三方贡献同时按 `LICENSE.txt` 中列出的 LGPL-3.0 和 3-clause BSD 条款授权。
