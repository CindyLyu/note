---
last_update:
  date: 2025/04/01
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

- `+` 可以轉成 number

```javascript
const a = "5";
typeof a; // "string"
const c = +a;
typeof c; // "number"
```

- for loop 中的 `continue` 後面可以寫 label 代表要跳到哪個迴圈去執行

```javascript
outer: for (const line of lines) {
  for (const word of line) {
    if (word === "hello") {
      continue outer; // 跳到 outer 迴圈
    }
  }
}
```

- 用 `.split()` 時可以同時命名變數，之後可以直接使用這個變數

```javascript
const [a, b] = "1,2".split(",");

// 解構也可以用於迴圈中
const a = [[1], [3, 5]];

for (const [c, b] of a) {
  console.log(c, b); // 1 undefined, 3 5
}
```

- `JSON.stringify()` 預設會忽略 function 及 RegExp 的內容，但可以自己寫 replacer 來處理 <sup>[6]</sup>

```javascript
const obj = {
  a: 1,
  b: 2,
  c: function () {
    console.log("hello");
  },
};

JSON.stringify(obj); // "{"a":1,"b":2}"

JSON.stringify(obj, (key, value) => {
  if (typeof value === "function" || value instanceof RegExp) {
    return value.toString();
  }
  return value;
}); // "{"a":1,"b":2,"c":"function () {\n    console.log(\"hello\");\n  }"}"
```

- 設計模式原則 - 里氏替換原則：疊加新的邏輯上去，之後要抽掉也可以不影響基礎的邏輯 <sup>[7-22]</sup>
- 讓一個元素點擊後不要被 focus：元素上新增 `onMouseDown` 事件，內容為 `event.preventDefault()`（click 行爲是 mouseDown + mouseUp 的行為，而 focus 會在 mouseDown 時發生，所以要在 mouseDown 時阻止預設行為）<sup>[8]</sup>

### 參考資料

1. [JavaScript 之旅 (25)：Nullish Coalescing Operator ( ?? 運算子)](https://ithelp.ithome.com.tw/articles/10251710)
2. [[教學] 深入淺出 JavaScript ES6 Class (類別)](https://shubo.io/javascript-class/)
3. [【學習筆記】TypeScript 基礎入門：從型別談起](https://hackmd.io/@Heidi-Liu/typescript#%E5%88%97%E8%88%89%E5%9E%8B%E5%88%A5-enum)
4. [getBoundingClientRect() is returning zero in XUL](https://stackoverflow.com/questions/4576295/getboundingclientrect-is-returning-zero-in-xul)
5. [why Object.prototype.toString return [object Object]](https://stackoverflow.com/questions/27731303/why-object-prototype-tostring-return-object-object)
6. [[Vite 原始碼解讀] Dependency Pre-Bundling part 2](https://ithelp.ithome.com.tw/articles/10326348)
7. [JavaScript 設計模式學習手冊讀書會簡報](https://kuro.tw/slides/js-design-pattern-00)
8. [Prevent firing focus event when clicking on div](https://stackoverflow.com/questions/8735764/prevent-firing-focus-event-when-clicking-on-div)
