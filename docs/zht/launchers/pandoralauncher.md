# PandoraLauncher

PandoraLauncher (簡稱 Pandora) 是一款現代化的 Minecraft 啟動器，採用 Rust 語言編寫（基於 GPUI 框架）。它旨在平衡易用性與強大的實例管理功能，特別針對多實例用戶提供了獨特的檔案同步和模組管理方案。

![PandoraLauncher](https://raw.githubusercontent.com/Moulberry/PandoraLauncher/refs/heads/master/screenshots/instance.png)

> 資訊更新時間：2026-06-20

| 特性       | 詳情                                |
| -------- | --------------------------------- |
| 認證方式     | Microsoft 帳戶 / 離線帳戶               |
| 支援的模組載入器 | Forge / NeoForge / Fabric         |
| 支援平台     | Windows / macOS / Linux           |

## 下載地址

[GitHub Releases](https://github.com/Moulberry/PandoraLauncher/releases)。

## 特色功能

- 支援在不同實例間同步選項 (options)、存檔 (saves) 等檔案
- 透過硬連結技術管理檔案，大幅減少相同模組的磁碟空間佔用
- 使用系統級鑰匙圈安全儲存帳戶憑證
- 內建 Modrinth 瀏覽器，支援直接在啟動器內搜尋並下載模組
- 日誌安全脫敏，上傳或查看日誌時會自動隱藏存取權杖等敏感資訊
- 提供美化的遊戲輸出視窗用於監控遊戲即時日誌
- 具備針對多實例獨有的模組包管理與同步配合邏輯

## 開源協議

[MIT](https://github.com/Moulberry/PandoraLauncher/blob/master/LICENSE)。