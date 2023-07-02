---
sidebar_position: 1
last_update:
  date: 2023/04/21
title: TypeScript
description: TypeScript
keywords: [TypeScript]
---

- Enum 類似利用 JavaScript 定義常數的概念
  ```javascript
  enum Animal {
    DOG = "dog",
    CAT = "cat",
  }

  const a = Animal.DOG
  ```
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
  - 如果後面要接 JavaScript 的型別，可以用 `keyof typeof` 來取代

```javascript
type Person = {
  firstName: string;
  lastName: string;
}

type PersonKey = keyof Person; // 用以取代需要寫 "firstName" | "lastName" 以及避免之後 Person 新增 key
const personKey: PersonKey = "lastName"
```


```javascript
enum MANUFACTURE {
  APPLE = 'apple',
  SAMSUNG = 'samsung',
  GOOGLE = 'google',
  SONY = 'sony',
}

type ManufactureKeys = keyof typeof MANUFACTURE; // 'APPLE' | 'SAMSUNG' | 'GOOGLE' | 'SONY'
type ManufactureValues = `${MANUFACTURE}`; // 'apple' | 'samsung' | 'google' | 'sony'

```
```javascript
const object = {
  name: "cindy",
  id: 1,
}

type Test = typeof object;  // { name: string; id: number; }
type Test2 = keyof typeof object; // "name" | "id"
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

- `readonly`：將物件轉成唯讀屬性，一但被宣告後就不能再被更改

```javascript
interface Person {
  readonly id: number;
  name: string;
  age: number;
}

const person: Person = {
  id: 1,
  name: "cindy",
  age: 30,
}

// 之後就沒辦法使用 person.id 來去更改 id
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

- Mapped Type：就不用多寫另一個對應的 type

```javascript
type SupportedEvent = {
  click: string;
  change: string;
  keyup: string;
  keydown: string;
};

type HandledEvent = {
  [K in keyof SupportedEvent]: () => void; // key 會包含 SupportedEvent 的 key，例如有 click、change、keyup、keydown
};
```

- &：交集


```javascript
type Animal = {
  name: string;
  age: number;
  5: string;
};

type AnimalKeys = string & keyof Animal; // 只能是 string 且 Animal 的 key，所以會是 name、age

```

- 修改 key 值

```javascript
type SupportedEvent = {
  click: string;
  change: string;
  keyup: string;
  keydown: string;
  5: number;
};

type MappedValuesToFunction<T> = {
  [K in keyof T]: () => void;
};
type HandledEvent = MappedValuesToFunction<SupportedEvent>;

type HandledEventKeys = keyof HandledEvent & string;  // "click" | "change" | "keyup" | "keydown"

type ToEventHandler<T> = {
  [K in keyof T as `handle${Capitalize<string & K>}`]: T[K];
};
// 上面的 key 就會是 handleClick | handleChange | handleKeyup | handleKeydown

type EventHandler = ToEventHandler<HandledEvent>;
```

- 泛型參數的預設值：可以讓使用者不用一定要傳入泛型參數，使用方式跟 JavaScript 的 object 預設值很像，也是用 `=` 來做


```javascript
type Animal<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
// 如果沒有寫 = keyof T，就必須要傳入 K，不然會報錯
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
- [[Day14] TS：什麼！TypeScript 中還有迴圈的概念 - 用 Mapped Type 操作物件型別](https://ithelp.ithome.com.tw/articles/10274801)
- [[Day15] TS：在 Mapped Type 中使用 Template Literal 來改物件型別中的所有 key](https://ithelp.ithome.com.tw/articles/10275512)
- [[Day19] TS：什麼！泛型的參數還能有預設值？](https://ithelp.ithome.com.tw/articles/10277647)
- [第一週第四天：物件型別之介面與陣列型別](https://blog.anna-yufeng.com/typescript-week1-day4-interfaces-array-types)
