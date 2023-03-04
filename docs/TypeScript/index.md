---
sidebar_position: 1
last_update:
  date: 2023/03/03
title: TypeScript
description: TypeScript
keywords: [TypeScript]
---

- Enum 類似利用 JavaScript 定義常數的概念
- 泛型：從呼叫 function 或 class 時來規範型態

  ```javascript
  function print<T>(data: T) {
    console.log("data", data);
  }

  print<number>123;

  // class 用法
  class Print<T> {
    data: T;
    constructor(d: T) {
      this.data = d;
    }
  }

  const p = new Print<number>(123);
  ```

  - 也可用於 function 回傳結果的定義（定義回傳結果陣列中的內容是 string 類型）

  ```javascript
  // 也可以為泛型定定義預設的型別，例如 function createArray<T = string>(length: number, value: T): Array<T> {...}，如果在呼叫這個 function 的參數無法從參數自動推導出型別的話，這個預設型別就會起作用
  function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];

    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }

  createArray<string>(5, "x"); // 這邊的 <string> 也可以不寫，讓型別推論自動推導出來
  ```

  - 約束泛型：只允許讓傳入的參數有 length 這個屬性

  ```javascript
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    return arg;
  }
  ```

  ```javascript
    type Person = {
      name: string;
      id: number;
    };

    function getValue<T, U extends keyof T>(obj: T, key: U) {
      return obj[key];
    };

    getValue<Person, "id">(obj, "id");
    // 限制只能從 Person 取得 id 的 key
  ```

- type 跟 interface 差別差在 interface 可以擴充，type 不行

  ```javascript
  interface Card {
    id: string;
    name: string;
  }

  interface Card {
    desc: string;
  }
  ```

  - interface 之間也可以是繼承的關係

  ```javascript
  interface Alarm {
    alert();
  }

  interface LightableAlarm extends Alarm {
    lightOn();
    lightOff();
  }
  ```

- union

```javascript
let a: string;
a = "123";
```

- type

```javascript
type Data = string;

let a: Data = "123";
```

- class 的 implements

```javascript
interface CarPops {
  name: string;
}
class Car implements CarPops {
  name: string;
}
```

- utility：typescript 提供的一些方法，可參考[官網](https://www.typescriptlang.org/docs/handbook/utility-types.html)

  - Record<Keys, Type>：除了用於定義 object 內容

  ```javascript
  interface CatInfo {
    age: number;
    breed: string;
  }

  type CatName = "miffy" | "boris" | "mordred";

  // 第一個參數 CatName 是 key name，第二個參數是物件內容
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };

  // 也可以用於以下，讓物件內容都是 string 或 boolean
  const object1: Record<string, boolean> = {
    name: true,
    id: "123",
  };
  ```

- class：分為 public、private、protected，但只侷限在 typescript 會提示錯誤，但實際 JavaScript 還是可以執行的

```javascript
class Live {
  public roomName: string; // 預設 public，不限制各地方存取
  private id: string; // 不能在子類別存取，宣告的地方也不能去更改他
  protected name: string; // 允許在子類別中存取
  constructor(roomName1: string, id1: string, name1: string) {
    this.roomName = roomName1;
    this.id = id1;
    this.name = name1;
  }
}

class CarLive extends Live {
  constructor(roomName1: string, id1: string, name1: string) {
    super(roomName1, id1, name1)
  };

  start() {
    console.log(super.name)
  }
}

```

- `!` 驚嘆號：表示這個值不是 null 或是 undefined
- 在 React 中定義 TypeScript 可參考這篇 [React Typescript CheatSheet](https://github.com/typescript-cheatsheets/react/blob/main/README.md#function-components)

- `keyof`：取出物件的 key 當作 type（後面接的值要是 typescript 的型別）

```javascript
type Person = {
  firstName: string;
  lastName: string;
}

type PersonKey = keyof Person; // 用以取代需要寫 "firstName" | "lastName" 以及避免之後 Person 新增 key
const personKey: PersonKey = "lastName"
```

- `as const`：將物件轉成已讀屬性

```javascript
const tabItem = [
  {
    name: "推薦",
    key: "recommend",
  },
  {
    name: "運動",
    key: "sport"
  },
  {
    name: "食物",
    key: "food"
  },
] as const;

// 游標移上去 const 就會顯示以下的 type
type const = readonly[{
  readonly name: "推薦";
  readonly key: "recommend";
},
{
  readonly name: "運動";
  readonly key: "sport";
},
{
  readonly name: "食物";
  readonly key: "food";
}]
```

- `typeof`：將變數變成型別

```javascript
const obj = {
  name: "cindy",
  id: 1,
}

type Person = typeof obj
// type Person 會等於以下
type Person = {
  name: string;
  id: number;
}

// 如果需要使用到陣列中的物件的 value 可以寫成以下
const tabItem = [
  {
    name: "推薦",
    key: "recommend",
  },
  {
    name: "運動",
    key: "sport"
  },
  {
    name: "食物",
    key: "food"
  },
] as const;

type Key = typeof tabItem[number]["key"]
// Key 就會是只能使用 recommend、sport、food
```

### 參考資料

- [TypeScript | 善用 Enum 提高程式的可讀性 - 基本用法 feat. JavaScript](https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%96%84%E7%94%A8-enum-%E6%8F%90%E9%AB%98%E7%A8%8B%E5%BC%8F%E7%9A%84%E5%8F%AF%E8%AE%80%E6%80%A7-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-feat-javascript-b20d6bbbfe00)
- [【前端速成】TypeScript TS 快速入門｜ Tiktok 工程師帶你入門前端｜布魯斯前端](https://www.youtube.com/watch?v=GinkGJZBHIY&ab_channel=%E5%B8%83%E9%AD%AF%E6%96%AF%E5%89%8D%E7%AB%AF)
- [[Day07] TS：什麼是 Utility Types？](https://ithelp.ithome.com.tw/articles/10269471)
- [類別](https://willh.gitbook.io/typescript-tutorial/advanced/class)
- [泛型](https://willh.gitbook.io/typescript-tutorial/advanced/generics)
- [Day 27 | 【TypeScript】類型斷言 &「!?」](https://ithelp.ithome.com.tw/articles/10306859?sc=iThelpR)
- [[Day04] TS：如何把物件型別的所有屬性名稱取出變成 union type？試試看 keyof 吧！](https://ithelp.ithome.com.tw/articles/10267302)
- [[Day13] TS：什麼！這個 typeof 和我想的不一樣？](https://ithelp.ithome.com.tw/articles/10274229)
- [[Day06] TS：整合前幾天所學，來寫個 Generic Functions 吧！](https://ithelp.ithome.com.tw/articles/10268780)
- [杀手级的 TypeScript 功能：const 断言](https://juejin.cn/post/6844903848939634696)
