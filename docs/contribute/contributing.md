# 贡献指南

感谢您愿意为 OSCSMC 补充 Minecraft 相关资料。这个项目使用 VitePress 构建静态文档站，贡献内容以 Markdown 文档为主。

## 本地开发

请先 [Fork](https://github.com/BakaInstitute/OSCSMC/fork) 本仓库，然后在自己的分支中修改文档。

```bash
npm ci
npm run docs:dev
```

构建检查：

```bash
npm run docs:build
```

本地预览构建产物：

```bash
npm run docs:preview
```

## 文档目录

| 目录 | 说明 |
| ---- | ---- |
| `docs/` | 简体中文文档 |
| `docs/en/` | 英文文档 |
| `docs/zht/` | 繁体中文文档 |
| `docs/.vitepress/config/` | VitePress 导航、侧边栏和多语言配置 |

新增页面后，请同步检查对应语言的侧边栏配置，确保用户能从导航中进入页面。

## 内容规范

 - 优先引用官方站点、官方仓库、官方文档和官方下载页
 - 不确定的信息请写明状态或更新时间，避免把猜测写成事实
 - 中文、英文单词和阿拉伯数字混排时，请在它们之间添加空格
 - 斜杠两侧请添加空格，例如 `Windows / macOS / Linux`
 - 产品名、项目名、协议名请保持官方写法，例如 `Minecraft`、`OptiFine`、`GPL-3.0-only`
 - 不要提交只包含 `# ::WIP` 的页面；如果内容尚未完整，请用 `::: warning` 说明缺口
 - 截图优先使用项目官方截图，并确认图片链接可以正常访问

## 提交前检查

 - 页面标题、下载链接和项目状态已经核对
 - 新增外链尽量来自官方来源
 - 没有遗留 `# ::WIP`
 - `npm run docs:build` 可以通过
 - 如果修改了页面结构或大量内容，建议本地打开站点检查渲染效果

## Pull Request

请在 Pull Request 中说明：

 - 修改了哪些页面
 - 信息来源或核对方式
 - 本地运行过的检查命令

如果您维护或开发某个启动器，也可以在 PR 中说明身份和希望更正的具体条目，我们会优先核对官方资料。
