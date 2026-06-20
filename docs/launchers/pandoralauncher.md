# PandoraLauncher

PandoraLauncher (简称 Pandora) 是一款现代化的 Minecraft 启动器，采用 Rust 语言编写（基于 GPUI 框架）。它旨在平衡易用性与强大的实例管理功能，特别针对多实例用户提供了独特的文件同步和模组管理方案。

![PandoraLauncher](https://raw.githubusercontent.com/Moulberry/PandoraLauncher/refs/heads/master/screenshots/instance.png)

> 信息更新时间：2026-06-20

| 特性       | 详情                                |
| -------- | --------------------------------- |
| 认证方式     | Microsoft 账户 / 离线账户               |
| 支持的模组加载器 | Forge / NeoForge / Fabric         |
| 支持平台     | Windows / macOS / Linux           |

## 下载地址

[GitHub Releases](https://github.com/Moulberry/PandoraLauncher/releases)。

## 特色功能

- 支持在不同实例间同步选项 (options)、存档 (saves) 等文件
- 通过硬链接技术管理文件，大幅减少相同模组的磁盘空间占用
- 使用系统级密钥链安全存储账户凭据
- 内置 Modrinth 浏览器，支持直接在启动器内搜索并下载模组
- 日志安全脱敏，上传或查看日志时会自动隐藏访问令牌等敏感信息
- 提供美化的游戏输出窗口用于监控游戏实时日志
- 具备针对多实例独有的模组包管理与同步配合逻辑

## 开源协议

[MIT](https://github.com/Moulberry/PandoraLauncher/blob/master/LICENSE)。