---
sidebar_position: 1
---

# You Might Not Need an Effect

:::note
本篇內容參考 [You Might Not Need an Effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect)
:::
刪除不必要的 Effect 可以讓程式碼更容易理解、運作速度更快也不會有 bug。

### 更新 state 的依據來自 state 或 props 時

例如：

```js {5-8}
function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  const [fullName, setFullName] = useState("");
  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);
  // ...
}
```

應該直接寫成

```js {4}
function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");
  const fullName = firstName + " " + lastName;
  // ...
}
```

因為在 `setFirstName` 或 `setLastName` 時會觸發 re-render，所以變數 `fullName` 也會一併更新到。

---

### 將複雜的計算用 Cache 取代

當 state 改變且需要在 `useEffect` 裡面重新計算另一個 state 時，

```js {4-7}
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");

  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  // ...
}
```

可以改寫成：

```js {3}
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");
  // 但這只適用於 getFilterTodos() 可以很快速的執行完畢時
  const visibleTodos = getFilteredTodos(todos, filter);
  // ...
}
```

但如果 `getFilterTodos()` 是個較複雜的計算且 `todos` 值較多會拉長 `getFilterTodos()` 的完成速度時，可以改用 `useMemo`。

```jsx {5-7}
import { useMemo, useState } from "react";

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");
  const visibleTodos = useMemo(
    () => getFilteredTodos(todos, filter),
    [todos, filter]
  );
  // ...
}
```

但這只適用於 `getFilteredTodos()` 是 Pure function 的情況。

---

### 需要更新所有的 state 時

```js {4-6}
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState("");

  // 當 userId 改變時需要清空這個 component 的所有 state 時
  useEffect(() => {
    setComment("");
  }, [userId]);
  // ...
}
```

可以直接改用 `key` 讓 React 重新渲染這個 component，React 發現 `key` 不同時就會重新產生 DOM 並重置 state，所以 `comment` 這個 state 也會被重置。

```js {2-3}
export default function ProfilePage({ userId }) {
  // 新增 key={userId}
  return <Profile userId={userId} key={userId} />;
}

function Profile({ userId }) {
  const [comment, setComment] = useState("");
  // ...
}
```

---

### 當 props 改變時需要調整部分的 state

[Adjusting some state when a prop changes](https://beta.reactjs.org/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes)

---

### 部分情況的邏輯應寫在 event handler 裡面

例如以下範例，希望在產品被加進購物車時顯示通知，所以在 `useEffect` 裡面寫判斷式，如果產品被加進購物車時，才會執行 `showNotification()`。

```js {4-7}
function ProductPage({ product, addToCart }) {
  useEffect(() => {
    if (product.isInCart) {
      showNotification(`Added ${product.name} to the shopping cart!`);
    }
  }, [product]);

  function handleBuyClick() {
    addToCart(product);
  }

  function handleCheckoutClick() {
    addToCart(product);
    navigateTo("/checkout");
  }
  // ...
}
```

但這樣的寫法有可能會造成 bug，例如頁面再重新整理時有記憶了產品加入購物車，所以當加入購物車後重新整理頁面會再次跳出通知，變成說後續重新整理頁面都會觸發再次跳出通知，因為每次都會執行到 `useEffect` 裡面的判斷式，並執行到 `showNotification()`。

所以這種情況就應該把顯示通知 `showNotification()` 寫在產品被加進購物車的當下，程式碼如下：

```js {4}
function ProductPage({ product, addToCart }) {
  function buyProduct() {
    addToCart(product);
    showNotification(`Added ${product.name} to the shopping cart!`);
  }

  function handleBuyClick() {
    buyProduct();
  }

  function handleCheckoutClick() {
    buyProduct();
    navigateTo("/checkout");
  }
  // ...
}
```

---

### 發出 POST 的請求

跟上面例子有點類似，此情況的需求是希望在這個 mount 這個 component 以及提交表單的時候發出 POST 請求。

```jsx {5-8,10-16}
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // 寫在這邊是 ok 的，因為這段邏輯只會在當此 component 出現時執行
  useEffect(() => {
    post("/analytics/event", { eventName: "visit_form" });
  }, []);

  // 🔴 Avoid: Event-specific logic inside an Effect
  const [jsonToSubmit, setJsonToSubmit] = useState(null);
  useEffect(() => {
    if (jsonToSubmit !== null) {
      post("/api/register", jsonToSubmit);
    }
  }, [jsonToSubmit]);

  function handleSubmit(e) {
    e.preventDefault();
    setJsonToSubmit({ firstName, lastName });
  }
  // ...
}
```

應該寫成：

```jsx {12-13}
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // 原本的維持不變
  useEffect(() => {
    post("/analytics/event", { eventName: "visit_form" });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // 改寫進 event handler 裡面
    post("/api/register", { firstName, lastName });
  }
  // ...
}
```

如果這個邏輯是由特定的行為產生，就應該寫在 event handler 裡面；但如果是要讓使用者看到在 UI 上的變化，就要寫在 `useEffect` 中。

> If it’s caused by the user seeing the component on the screen, keep it in the Effect.

---

### useEffect 鏈（原文是 Chains of computations）

某些情況可能會需要等一個 state 改完後接者改其他的 state。

```jsx {7-30}
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  // 要避免更新 state 觸發起一連串的更新 state
  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount((c) => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound((r) => r + 1);
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    alert("Good game!");
  }, [isGameOver]);

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error("Game already ended.");
    } else {
      setCard(nextCard);
    }
  }

  // ...
}
```

這段程式碼會造成沒效率，例如執行 `handlePlaceCard()` function 時會執行到 `setCard(nextCard)` -> render -> 觸發 `useEffect` 然後執行 `setGoldCardCount` -> render -> 觸發 `useEffect` 然後執行 `setRound` -> render -> 觸發 `useEffect` 然後執行 `setIsGameOver`，這樣的寫法不太好，當程式碼一多就會很難快速看出彼此影響的順序。

比較好的方式如下：

```jsx {6-7,14-26}
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  // ✅ 在 rendering 的期間計算
  const isGameOver = round > 5;

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.');
    }

    // ✅ 將更新 state 的移進 event handler 裡面
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          alert('Good game!');
        }
      }
    }
  }
  ...
}
```

這樣不但可以提高效率，也可以將 `handlePlaceCard` function 直接拉出去給其他地方使用。

但在部分情況下，會無法從 event handler 中拿到下一個 state 的值，例如有一個下拉式選單，選單中要呈現的下一層內容取決於當前所選的值，這個時候就需要用 `useEffect` 來同步更新 state。

---

### 初始化 APP

[Initializing the application](https://beta.reactjs.org/learn/you-might-not-need-an-effect#initializing-the-application)

---

### state 提升到父層

[Notifying parent components about state changes](https://beta.reactjs.org/learn/you-might-not-need-an-effect#notifying-parent-components-about-state-changes)
[Passing data to the parent](https://beta.reactjs.org/learn/you-might-not-need-an-effect#passing-data-to-the-parent)

---

### useSyncExternalStore

[Subscribing to an external store](https://beta.reactjs.org/learn/you-might-not-need-an-effect#subscribing-to-an-external-store)

---

### 取得數據

通常會用 `useEffect` 來取得數據，例如：

```jsx {5-10}
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 🔴 沒有負責清理的邏輯
    fetchResults(query, page).then((json) => {
      setResults(json);
    });
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
```

上面程式碼有可能造成 race condition，例如分別輸入「h」->「he」->「hel」->「hell」->「hello」，每次輸入都會呼叫 API 來取得結果，但如果最後是搜尋「hello」時但 「he」的結果最後才回來，並透過 `setResults` 儲存「he」搜尋結果的值，就會在畫面上顯示錯的結果，因為實際是要搜尋「hello」。

可以利用新增一個清理的邏輯來修正此問題。

```jsx {5,7,9,11-13}
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then((json) => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
```

這樣就可以確定搜尋結果為最後一次輸入的內容。

---

最後再提一次，越少 `useEffect` 就可以讓程式碼更好維護，看完這篇會覺得有些蠻理所當然的，但當遇到比較複雜一點的專案，或是在別人開發過的內容上增加新功能還真的就發生過上面的問題，導致 bug 出現。

### 參考資料

- [我讀你看 - You Might Not Need an Effect: Part1](https://ithelp.ithome.com.tw/articles/10308365)
- [You Might Not Need an Effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect)
