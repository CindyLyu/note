---
sidebar_position: 3
last_update:
  date: 2023/02/03
title: Turborepo
description: Turborepo
keywords: [turborepo]
---

# Turborepo

### 架構

- `turbo.json` 設定個指令的規範，檔案中的 pipeline 會對應到 apps 底下的各個專案 package.json 中的 scripts，例如 pipeline 有 dev 的內容，在執行 `pnpm dev` 指令時就會去使用到 `turbo.json` 的規範
- `packages` 資料夾為專案共用的東西
- `apps` 各專案放置的地方
- 專案需要使用到共用的 `packages` 可以在 package.json 寫

```json {6}
{
  "dependencies": {
    "next": "^13.1.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "ui": "workspace:*"
  }
}
```

### 其他

- 執行特定 project `pnpm --filter <project> run dev`
- 安裝套件到特定的 project `pnpm --filter <project> add <module>`，或直接到該專案路徑底下 `pnpm add <module>`
- 安裝套件到 root 層 `pnpm -w -D add <module>`

### 參考資料

- [淺談 Monorepo 帶來的效益：以 Turborepo 為例](https://medium.com/starbugs/%E6%B7%BA%E8%AB%87-monorepo-%E5%B8%B6%E4%BE%86%E7%9A%84%E6%95%88%E7%9B%8A-%E4%BB%A5-turborepo-%E7%82%BA%E4%BE%8B-615fb4af5ebd)
- [Getting started with Turborepo](https://www.youtube.com/watch?v=mxLLIwZ93nY&ab_channel=HamedBahram)
