---
sidebar_position: 3
last_update:
  date: 2023/1/24
title: Flex、Grid
description: Flex、Grid
keywords: [css, flex, grid]
---

### Grid

- `grid-auto-flow: column`：橫式的排列顯示或直接寫 `grid-template-columns`
  - 預設 `grid-auto-flow: row` 由上到下排序
  - 後面可以多寫 `dense` 參數讓網格優先考慮填滿，而不是依據原本的順序
- `grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))`：定義每一欄寬，讓內容自己以適合的數量顯示

  - repeat 裡面可以寫 `auto-fit`、`auto-fill`，差別在於 `auto-fit` 會填滿 container，但 `auto-fill` 不會（[範例](https://2l81wr.csb.app/)）；或直接寫數字代表重複幾次 `repeat(3, 1fr)`，定義每一列寬，讓網格限定重複 3 次，每個都是一等份，也可以寫成 `repeat(3, 20px 10px 30px)` 就會先顯示 20px → 10px → 30px → 20px….
  - 後者參數寫 `minmax(100px, 1fr)` 代表最小寬度為 100px，最大則為一等分；minmax(100px, auto) 限定最小為 100px，最大則是 auto
    :::info
    fr 為 fraction 中文是分數的意思，用在 grid 裡可以想成是幾等份
    :::
  - `grid-template-columns: 20px repeat(3, 1fr) 20px` 代表最左及最右是分別 20px 的欄位，中間則平均分配 3 等份的欄位
  - `grid-template-columns: 75px 3fr 2fr` 代表第一欄位佔 75px 寬，後面剩餘寬度平均分成 5 等分，分別佔據 3 等分及 2 等分

- `grid-template-rows` 定義每一列行高
- `grid-template` 為縮寫，例如 `grid-template: repeat(3, 1fr) / repeat(3, 1fr)` 前者代表 `grid-template-rows`；後者代表 `grid-template-columns`
- `grid-auto-columns: 100px` 讓網格寬 100px
- `grid-auto-rows: 100px` 讓網格長 100px
- `grid-template-areas` 定義每格的名稱，一行一個字串，用空白區隔
- `grid-column: span 2` 代表此欄位佔據兩格
  - 為 `grid-column-start` 及 `grid-column-end` 的縮寫
  - 可直接用 `grid-column: auto / span 2` 分別寫，前者代表 `grid-column-start` 後者為 `grid-column-end`，如果只寫一個參數就代表是 `grid-column-start`，另外 `grid-column-end` 則為 auto
  - `grid-column: 1 / 3` 代表從 1 開始顯示到 2 的位置
  - 寫 -1 代表從最後開始
- `grid-area` 可以填寫四個數值，分別代表 `grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-row-start`，用 / 分隔開，例如 `grid-area: 1 / 1 / 1 / 1`;
- `gap` 設定間距，分別為 `column-gap` 和 `row-gap` 的縮寫，例如 `gap: 10px 20px`，讓左右間距為 10px；上下間距為 20px
- `justify-content` 設定行的左右位置，可填入 `start`、`end`、`center`、`left`、`right`、`space-between`、`space-evenly`、`space-around`；`align-items` 設定行的上下位置，可填入 `baseline`、`start`、`end`、`stretch`、`center`，
- `order` 數值越大排序越後面，預設 `order: 0`，0 會排在 1 前面

```css
.container {
  grid-template-areas:
    "a b c d e"
    "f g h i j"
    "k l m n o";
}
```

- [練習 Grid](https://codesandbox.io/s/grid-dp7wzg?file=/index.html)

### Flex

- 子層設定 margin 後會將剩餘空間分配到 margin 去，所以可以 `margin-left: auto` 讓項目置右
- 子層設定的 margin 會大於父層設定的 `justify-content` 或 `align-items`

### 參考資料

- [探秘 flex 上下文中神奇的自动 margin](https://www.cnblogs.com/coco1s/p/10910588.html)
- [最全～ Grid vs Flex](https://zhuanlan.zhihu.com/p/46757975)
- [Top 10 Advanced CSS Responsive Design Concepts You Should Know](https://www.youtube.com/watch?v=TUD1AWZVgQ8&ab_channel=WebDevSimplified)
- [[Day19] grid-template 屬性之 rows/columns](https://ithelp.ithome.com.tw/articles/10248418)
- [[Day20] grid-template 屬性之 areas](https://ithelp.ithome.com.tw/articles/10248937)
- [[Day21] grid-auto 屬性之 flow](https://ithelp.ithome.com.tw/articles/10249124)
- [[Day22] grid-auto 屬性之 rows/columns](https://ithelp.ithome.com.tw/articles/10249146)
- [[Day24] grid gap 相關屬性](https://ithelp.ithome.com.tw/articles/10250694)
- [[Day25] grid 容器對齊屬性](https://ithelp.ithome.com.tw/articles/10251608)
- [GRID GARDEN](https://cssgridgarden.com/#zh-tw)
- [MDN - grid-template](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)
- [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
