---
sidebar_position: 1
last_update:
  date: 2023/1/14
---

# Top 10 Advanced CSS Responsive Design Concepts You Should Know

:::note
本篇內容主要參考 [Top 10 Advanced CSS Responsive Design Concepts You Should Know](https://www.youtube.com/watch?v=TUD1AWZVgQ8&ab_channel=WebDevSimplified)
:::

### Viewport Meta Tag

- 在 html 寫是為了讓頁面在其他裝置上可以依比例縮放

```html
<meta
  name="viewport"
  content="width=device-width, height=device-height, initial-scale=1.0"
/>
```

### Media Query

- css 的 media query 除了可以寫寬度（min-width、max-width）還可以寫以下內容

  - `orientation` 為 `landscape` 當螢幕寬度大於高度，或 `portrait` 高度大於寬度。

  ```css {7}
  .box {
    background: blue;
    width: 200px;
    height: 200px;
  }

  @media (orientation: portrait) {
    .box {
      background: red;
    }
  }

  /* 代表當螢幕高度大於寬度時，box 會是紅色的 */
  ```

  - `min-aspect-ratio`：螢幕的比例，例如 1:1 就是 1 / 1

  ```css {1}
  @media (orientation: portrait) {
    .box {
      background: red;
    }
  }

  /* 當螢幕寬為 1:1 時 box 會是紅色的 */
  ```

  - `width >= 300px` 其實等於 `min-width: 300px`，但前者會比較易讀（也可以寫範圍 100px <= width >= 300px）
    :::caution
    目前 2022/1/13 Safari 還不支援（[caniuse](https://caniuse.com/css-media-range-syntax)）
    :::

  ```css {1}
  @media (width >= 300px) {
    .box {
      background: red;
    }
  }
  ```

- 將 media query 的 break point 寫成變數

```css
@custom-media --small (width >= 400px);

@media (--small) {
  /* css */
}

@media (--small) {
  /* css */
}
```

### Container Queries

- css 除了可以寫 Media Queries 也可以寫 Container Queries，Media Queries 是針對視窗；Container Queries 既然是 container 就是針對元素了，詳細可參考 [範例](https://of8e6e.csb.app/)
  :::caution
  目前 2022/1/14 瀏覽器支援度 76% [caniuse](https://caniuse.com/css-container-queries)
  :::

```css
.main,
.sidebar {
  container-type: inline-size;
}

@container (width >= 600) {
  .box {
    background: red;
  }
}
```

### CSS Grid

- `grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))`：讓內容自己以適合的數量顯示

  - repeat 裡面可以寫 `auto-fit`、`auto-fill`，差別在於 `auto-fit` 會填滿 container，但 `auto-fill` 不會（[範例](https://2l81wr.csb.app/)）
  - 後者參數寫 `minmax(100px, 1fr)` 代表最小寬度為 100px 且被配置到一等份

### Clamp

- clamp(): 寫入最小值、最大值、以及當前的值（大部分瀏覽器已支援）

```css
.font {
  font-size: clamp(0.5rem, 3.5vw, 10rem);
}

/* 0.5rem 代表最小的字體大小；3.5vw 為當前的字體大小；10rem 為最大值 */
```

### Viewport Unit

- `svh`：最小的高度，s 代表 small，viewport 的高度扣掉上或下面的搜尋 input
- `dvh`：d 代表 dynamic viewport 高度跟 `svh` 類似，差在他會動態改變，像是滑動頁面後且搜尋 input 會自己隱藏時與尚未滑動之前的高度會不一樣
- `lvh`：最大的高度，l 代表 large，viewport 最大的高度

### 參考資料

- [MDN - orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation)
- [看图说话，新 CSS 单位 “svh” “dvh” 原来如此](https://juejin.cn/post/7172332295058751496)
- [介绍 2022 最期待且已正式支持的 CSS container 容器查询](https://www.zhangxinxu.com/wordpress/2022/09/css-container-rule/)
