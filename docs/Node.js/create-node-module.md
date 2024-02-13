---
last_update:
  date: 2023/06/30
title: 製作 Node.js Package
description: 製作 Node.js Package
keywords: [nodejs]
---

# 製作 Node.js Package

- 檔案開頭新增 `#!/usr/bin/env node` 代表會告訴系統可以在 PATH 目錄中查詢 node 的路徑（因為不同的用戶 node 路徑可能不同）
- 在 `package.json` 新增 `"bin": <file-path>`：讓之後安裝此套件後執行的檔案
- 安裝後套件在 `package.json` 新增 scripts，寫 `"test": <package-name>`

#### 其他

- `pnpm run dev` 時不會去執行 `predev`，可以在檔案 `.npmrc` 中寫上 `enable-pre-post-scripts=true` 即可解決。
- `pnpm add <module>@<url>` 安裝特定 url 的套件
- `pnpm link -g` 將此套件變成全域的套件，可以在其他專案中使用 `pnpm link -g <package-name>` 來連結此套件 <sup>[4]</sup>

### 參考資料

1. [#!/usr/bin/env node 到底是什么？](https://juejin.cn/post/6844903826344902670)
2. [Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)
3. [pnpm Defferences with npm run](https://pnpm.io/cli/run#differences-with-npm-run)
4. [[Vite 原始碼解讀] 如何追原始碼？](https://ithelp.ithome.com.tw/articles/10332272)
