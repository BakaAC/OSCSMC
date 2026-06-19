# 貢獻指南

感謝您願意為 OSCSMC 補充 Minecraft 相關資料。這個專案使用 VitePress 構建靜態文件站，貢獻內容以 Markdown 文件為主。

## 本地開發

請先 [Fork](https://github.com/BakaInstitute/OSCSMC/fork) 本倉庫，然後在自己的分支中修改文件。

```bash
npm ci
npm run docs:dev
```

構建檢查：

```bash
npm run docs:build
```

本地預覽構建產物：

```bash
npm run docs:preview
```

## 文件目錄

| 目錄 | 說明 |
| ---- | ---- |
| `docs/` | 簡體中文文件 |
| `docs/en/` | 英文文件 |
| `docs/zht/` | 繁體中文文件 |
| `docs/.vitepress/config/` | VitePress 導航、側邊欄和多語言配置 |

新增頁面後，請同步檢查對應語言的側邊欄配置，確保使用者能從導航中進入頁面。

## 內容規範

 - 優先引用官方站點、官方倉庫、官方文件和官方下載頁
 - 不確定的資訊請寫明狀態或更新時間，避免把猜測寫成事實
 - 中文、英文單詞和阿拉伯數字混排時，請在它們之間添加空格
 - 斜線兩側請添加空格，例如 `Windows / macOS / Linux`
 - 產品名、專案名、協議名請保持官方寫法，例如 `Minecraft`、`OptiFine`、`GPL-3.0-only`
 - 不要提交只包含 `# ::WIP` 的頁面；如果內容尚未完整，請用 `::: warning` 說明缺口
 - 截圖優先使用專案官方截圖，並確認圖片連結可以正常訪問

## 提交前檢查

 - 頁面標題、下載連結和專案狀態已經核對
 - 新增外鏈盡量來自官方來源
 - 沒有遺留 `# ::WIP`
 - `npm run docs:build` 可以通過
 - 如果修改了頁面結構或大量內容，建議本地打開站點檢查渲染效果

## Pull Request

請在 Pull Request 中說明：

 - 修改了哪些頁面
 - 資訊來源或核對方式
 - 本地執行過的檢查命令

如果您維護或開發某個啟動器，也可以在 PR 中說明身份和希望更正的具體條目，我們會優先核對官方資料。
