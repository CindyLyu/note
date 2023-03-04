---
sidebar_position: 2
last_update:
  date: 2023/02/17
title: React
description: react
keywords: [react, react-router-dom]
---

- React 的 state 改變是用 `Object.is()` 去判斷是否跟原本的 state 一樣，如果不一樣才會重新 render
- 重新繪製 Virtual DOM 在 React 中通常會稱作為 re-render
- 將產生的 Virtual DOM Tree 與舊的比較，抓取出更新的部分更新到實際的 DOM Tree 上在 React 中被稱為 Reconciliation
- 利用 `react-dom` 來管理真實的 DOM Tree，當發現有需要更新的時候就會 Renderer
- function component 執行順序：render（DOM 的更新及繪製畫面） -> 上一個 useEffect 的 cleanup function -> useEffect
  :::info
  除了該 render 是被 React 18 提供的 `flushSync` 所包著的 `setState` 所觸發，才會是在畫面的排版與繪製之前就先執行
  :::
- 當 component 被移除時也會執行 useEffect 的 cleanup function
- 寫 `useEffect()` 時應該將該 dependencies 視為效能優化的考量，代表就算沒寫 dependencies 讓每次 render 都執行時應該也要是正確的邏輯及結果，而不是將商業邏輯寫在 dependencies 當作判斷，否則可能導致在非預期的情況下執行了 `useEffect`

### StrictMode

- StrictMode 讓你在開發模式下找到 bug
  - React 會預設為 pure component 並 re-render 兩次來查看是否有 side effect
  - 讓 useEffect 執行多次來查看是否有沒有清除（unmounts）到的 effect
  - 幫忙檢查是否使用到已被淘汰的 API

### batch update

- 在一個事件中同時呼叫多次 setState 只會觸發一次 re-render，就叫做 batch update（React 18 開始全面啟用這個機制）
- `flushSync()` 可以讓每次 setState 觸發 re-render，而不啟用 batch update 機制，但在同個事件中拿到的 state 值還會是舊的

```javascript
function app() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    flushSync(() => {
      setCount(1)
    })
    // 上面會觸發 re-render 且更新實際的 DOM，但這邊拿到的 count 值還會是原本的 0，因為這個事件被建立的 closure 時候拿到的 count 值就是 0

    flushSync(() => {
      setCount(2)
    })
  }

  ...
}

```

### functional updater

- `setState()` 裡面除了傳一值，還可以傳 updater function，並且可以取得最新的值

```javascript
function app() {
  const [count, setCount] = useSate(0);
  const handleClick = () => {
    setCount(count + 1);
    // 下面的 c 參數就可以取到最新的值
    setCount((c) => c + 1)
    // 第一次點擊後的 count 就會是 2
  }
  ...
}

```

:::info
React 教學提供的練習我覺得不會很難又很有趣可以加深對 functional updater 的印象，[連結](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates#recap) 往下滑點擊挑戰 2。
:::

### immutable update

- 由於更新 React 的 state 都必須要是 immutable，如果遇到 state 是 object 或 array 且有多層巢狀的結構時，例如以下內容

  ```javascript
  const [person, setPerson] = useState([
    { id: 1, name: "cindy" },
    { id: 2, name: "gary" },
  ]);
  ```

如果使用原本 [Spread syntax](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 的方式複製一份成新的內容出來時，其實第二層的內容還會是以 reference 的方式指向原本的變數，Spread 屬於 shallow clone，所以遇到多層結構可以依靠第三方套件，例如 Lodash，將整個物件或陣列完整的複製出來，或是利用 Spread 複製需要更新的那一層內容出來。

### react-router-dom

- 用 `<Router>` 切換路徑，如果要共用頁面部分的內容（例如 header 或 footer），可使用以下方式（[codesandbox 連結](https://codesandbox.io/s/hashrouter-xm2y4m))

```jsx
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <main className="blog">
        <nav className="blog__nav">
          <Link className="blog__nav-list" to="/" exact="true">
            List
          </Link>
          <Link className="blog__nav-about" to="/about">
            About
          </Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<div>/list</div>} />
          <Route path="/about" element={<div>/about</div>} />
          <Route path="*" element={<div>*</div>} />
        </Routes>
      </main>
    </Router>
  );
}
```

- `useNavigate()` 需要使用於 Router 內（[stackoverflow](https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component))

### 參考資料

- [[Day 06] Render React elements](https://ithelp.ithome.com.tw/articles/10295277)
- [[Day 10] React 畫面更新的核心機制（上）：一律重繪渲染策略](https://ithelp.ithome.com.tw/articles/10298007)
- [[Day 11] React 畫面更新的核心機制（下）：Reconciliation](https://ithelp.ithome.com.tw/articles/10298053)
- [[React] Keeping Components Pure - Part 1](https://www.youtube.com/watch?v=6U0p2EmlHSw&ab_channel=PJCHENder)
- [<StrictMode&gt;](https://beta.reactjs.org/reference/react/StrictMode#usage)
- [[Day 13] 深入理解 batch update](https://ithelp.ithome.com.tw/articles/10300091)
- [[Day 14] 以 functional updater 來呼叫 setState](https://ithelp.ithome.com.tw/articles/10300743)
- [[Day 15] 維持 React 資料流可靠性的核心關鍵：Immutable state](https://ithelp.ithome.com.tw/articles/10301603)
- [[Day 17] Immutable update 的 nested reference clone 誤解](https://ithelp.ithome.com.tw/articles/10303033)
- [[Day 21] useEffect 其實不是 function component 的生命週期 API](https://ithelp.ithome.com.tw/articles/10305220)
