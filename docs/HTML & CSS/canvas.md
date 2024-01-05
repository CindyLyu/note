---
last_update:
  date: 2023/03/10
title: Canvas
description: Canvas
keywords: [canvas]
---

# Canvas

```html
<canvas id="mycanvas"></canvas>
```

```js
let canvas = document.getElementById("mycanvas”) // 製作一塊畫布名為 canvas
let ctx = canvas.getContext('2d')

// 設定畫布尺寸，之後 ctx 的內容就會畫在裡面
canvas.width = 400
canvas.height = 400
ctx.beginPath() // 開始繪圖
ctx.moveTo(100, 100) // 代表畫筆開始的位置
ctx.lineTo(300, 100) // 要畫去哪裡的內容，相較於原點的距離代表 x 軸及 y 軸
ctx.lineTo(300, 300)
ctx.lineTo(100, 300)
ctx.closePath()
ctx.fill() // fill 就無需 closePath，會自己連接起來，stroke 就需要 closePath 或是最後一條線 lineTo
// ctx.stroke()
// ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
// 改變 stroke 的顏色
// 改變 stroke 的粗細就是用 ctx.lineWidth = 15
```

:::info
如果沒有 `beginPath()` 就會延續上一個最後畫的點開始連接
:::

- 畫一個圓

```jsx
ctx.arc(200, 200, 100, 0, 2 * Math.PI);
// 中心點的位置 X, 中心點的位置 Y, 半徑, 從哪開始, 哪裡結束(Math.PI 半圓)
// 2*Math.PI 就是 360 度
// 預設都是從逆時針開始畫，如果需要改為順時針就是寫第六個參數為 true，預設為 false
```

:::info
180 度等於 𝛑
:::

- 畫一個方形

```jsx
ctx.rect(300, 300, 50, 50);
// x 位置, y 位置, 長, 寬
```

- 在隔線旁邊顯示文字

```jsx
ctx.fillText(text, x, y);
// 參數分別為要填入的文字、x 軸位置、ｙ軸位置
```

- 使用 fillRect 直接創建一個填滿的正方形（一般會先填色在畫線，不然框線會被蓋到）

```jsx
ctx.fillRect(300, 300, 50, 50);
// 跟畫一個正方形一樣 （x 位置, y 位置, 寬, 高）
// 也可以用 strokeRect 來畫一個框線的正方形
ctx.strokeRect(300, 300, 50, 50);
```

- 將原本的繪製清除

```jsx
ctx.clearRect(0, 0, 400, 400);
// x 位置, y 位置, 寬, 高

// 也可以用留著殘影的方式來取代完全清除
ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
ctx.fillRect(0, 0, 400, 400);
```

- requestAnimationFrame()：優化版的 setTimeout
- ctx.save()：將當前狀態存入 stack
- ctx.restore()：針對 ctx.translate()、ctx.scale()、ctx.rotate() 的動作還原到上一個步驟，以 stack 的方式，先進後出
- 可以將內容寫在 `ctx.save()` 和 `ctx.restore()` 中間，之後寫的東西就不會被這中間的東西給影響（例如將 `ctx.translate()` 去移動位置並寫在 `ctx.save()` 和 `ctx.restore()` 中間，接下來 `ctx.restore()` 後面寫的東西就不會被 `ctx.translate()` 給影響）
- 在 canvas 中的座標系跟一般認知不同，canvas 是 x 軸往右及 y 軸往下越大（正向），反之亦然
- [練習的 codepen 內容](https://codepen.io/Cindylyu/pen/xxPOyYa)
- [待讀](https://ithelp.ithome.com.tw/articles/10198687)

### 參考資料

- [動畫互動網頁特效入門（JS/CANVAS）](https://hahow.in/courses/586fae97a8aae907000ce721/discussions)
- [弧度](https://zh.wikipedia.org/wiki/%E5%BC%A7%E5%BA%A6)
