---
last_update:
  date: 2023/07/02
title: JavaScript
description: JavaScript
keywords: [javascript]
---

- `??` 跟 `||` 比較差在 `??` 會將 `""`、`false`、`0` 當作結果
- element.getBoundingClientRect() 內容都為 0 的話有可能是該 element 一開始為 display: none <sup>[4]</sup>
- `toString`：當需要印出字串時，但變數為 object 就會自動去呼叫 `toString()`

  ```javascript
  const name = {
    id: 1,
    toString: () => "Cindy",
  };
  console.log(`Hello ${name}`); // Hello Cindy
  ```

  但如果沒有 `toString` 這個 function，就會印出 `Hello [object object]`，因為 ECMAScript 定義的 `toString()` 方式讓他變成這樣<sup>[5]</sup>

### 參考資料

1. [JavaScript 之旅 (25)：Nullish Coalescing Operator ( ?? 運算子)](https://ithelp.ithome.com.tw/articles/10251710)
2. [[教學] 深入淺出 JavaScript ES6 Class (類別)](https://shubo.io/javascript-class/)
3. [【學習筆記】TypeScript 基礎入門：從型別談起](https://hackmd.io/@Heidi-Liu/typescript#%E5%88%97%E8%88%89%E5%9E%8B%E5%88%A5-enum)
4. [getBoundingClientRect() is returning zero in XUL](https://stackoverflow.com/questions/4576295/getboundingclientrect-is-returning-zero-in-xul)
5. [why Object.prototype.toString return [object Object]](https://stackoverflow.com/questions/27731303/why-object-prototype-tostring-return-object-object)
