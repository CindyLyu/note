---
sidebar_position: 4
last_update:
  date: 2023/02/11
title: Next.js
description: Next.js
keywords: [nextjs]
---

- next.config.js 的 rewrites，如下範例，代表 about 頁面會顯示 / 頁面內容

```javascript
module.exports = {
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
    ];
  },
};
```

### 參考資料

- [Rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites)
