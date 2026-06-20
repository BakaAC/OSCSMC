# SKCraft Launcher

SKCraft Launcher 是由 SKCraft 維護的開源 Minecraft 整合包啟動器平台，主要面向需要自行定制、構建並分發帶品牌啟動器的整合包作者。

![SKCraft Launcher](https://raw.githubusercontent.com/SKCraft/Launcher/master/readme/launcher.png)

> 資訊更新時間：2026-06-20

| 特性       | 詳情                                  |
| -------- | ----------------------------------- |
| 認證方式     | Microsoft 帳戶 / 離線帳戶                 |
| 支援的模組載入器 | Forge / Fabric / LiteLoader / Quilt |
| 支援平台     | Windows / macOS / Linux             |

## 下載地址

[SKCraft Launcher GitHub 倉庫](https://github.com/SKCraft/Launcher)。

[原始碼 ZIP](https://github.com/SKCraft/Launcher/archive/master.zip)。

官方倉庫目前沒有提供 GitHub Releases 二進位包。官方 Wiki 建議下載原始碼後構建，Windows 使用者可執行 `build.bat`，Linux 和 macOS 使用者可執行 `./build.sh`，也可以使用 `./gradlew clean build`；構建產物位於各子專案的 `build/libs/` 目錄。

## 特色功能

- 支援為啟動器替換自己的 Logo、品牌和新聞源
- 支援把多個整合包作為集合分發
- 支援透過密鑰隱藏部分整合包
- 提供圖形化整合包製作工具和命令列構建工具
- 支援斷點續傳、增量更新和檔案去重
- 支援自更新 Bootstrapper 和便攜模式
- 支援可選 Mods / Features，並可從 Git 或其他 VCS 結合 CI 生成整合包

## 開源協議

SKCraft Launcher 本體基於 [GNU Lesser General Public License v3](https://github.com/SKCraft/Launcher/blob/master/LICENSE.txt) 發布。官方說明中還要求第三方貢獻同時按 `LICENSE.txt` 中列出的 LGPL-3.0 和 3-clause BSD 條款授權。
