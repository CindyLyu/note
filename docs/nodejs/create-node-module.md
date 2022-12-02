---
sidebar_position: 1
---

# 製作 Node.js Package

- 在 `package.json` 新增 `"bin": <file-path>`：讓之後安裝此套件後執行的檔案
- 安裝後套件在 `package.json` 新增 scripts，寫 `"test": <package-name>`

#### 其他

- `pnpm run dev` 時不會去執行 `predev`，可以在檔案 `.npmrc` 中寫上 `enable-pre-post-scripts=true` 即可解決。

### 參考資料

- [Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)
- [pnpm Defferences with npm run](https://pnpm.io/cli/run#differences-with-npm-run)
