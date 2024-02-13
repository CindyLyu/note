---
last_update:
  date: 2023/12/22
title: Vue
description: vue
keywords: [vue]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vue

- Vue 可以直接在 HTML 引入 script 來使用，例如

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">{{ message }}</div>

    <script type="module">
      const { createApp, ref } = Vue;
      createApp({
        setup() {
          const message = ref("Hello vue!");
          return {
            message,
          };
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

- 寫成 vue 檔案的話會是以下

```html
<script setup>
  import { ref } from "vue";
  const message = ref("Hello vue!");
</script>

<template>{{ message }}</template>
```

- attribute 的寫法用 `v-bind`，例如 `v-bind:id`，也可以直接省略 `v-bind`

```html
<template>
  <h1 :class="title">Hello</h1>
</template>
<!-- 就會讓這個元素上面有個 class 為 title -->
```

- 事件的寫法用 `v-on`，例如 `v-on:click`，也可以直接省略 `v-on`

```html
<template>
  <button @click="increment">click</button>
</template>
```

- 讓兩個元素的內容綁定用 `v-model`，以下方式在 input 輸入內容時，`<p>` 也會同時出現輸入的內容

```html
<script setup>
  import { ref } from "vue";
  const text = ref("");
</script>
<template>
  <input v-model="text" />
  <p>{{text}}</p>
</template>
```

- 用 `v-if` 來寫判斷是，以下範例，當 `awesome` 是 truthy 時就會渲染 Awesome 這個元素

```html
<script setup>
  import { ref } from "vue";
  const awesome = ref(true);
</script>
<template>
  <h1 v-if="awesome">Awesome</h1>
</template>
```

- 要顯示一個陣列的內容用 `v-for`

```html
<script setup>
  import { ref } from "vue";
  const todos = ref([
    { id: id++, text: "123" },
    { id: id++, text: "456" },
    { id: id++, text: "461" },
  ]);
</script>
<template>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</template>
```

- 也可以直接用 v-for 寫條件是，`computed()` 用於計算 `ref`

```html
<script setup>
  import { ref, computed } from "vue";
  const todos = ref([
    { id: id++, text: "123", done: true },
    { id: id++, text: "456", done: false },
    { id: id++, text: "461", done: true },
  ]);
  const filteredTodos = computed(() => {
    return todos.value.filter((t) => t.done);
  });
</script>
<template>
  <li v-for="todo in filteredTodos" :key="todo.id">{{ todo.text }}</li>
</template>
```

- 當元件 mounted 完後會執行 `onMounted`，其他情況可使用 `onUpdated` 或 `onUnmounted`

```html
<script setup>
  import { ref, onMounted } from "vue";

  const pElementRef = ref(null);
  onMounted(() => {
    pElementRef.value.textContent = "onMounted";
  });
</script>

<template>
  <p ref="pElementRef">hello</p>
</template>
```

- 偵測變數有變化時觸發 `watch()`

```js
watch(variable, callback);
```

- 引入 child component，如果是用 HTML 來寫會是 kebab-case 的名稱方式來寫；而使用 Single File Component（SFC）就是用 Camel Case 駝峰的方式來寫名稱，需注意用 HTML 的方式會需要再 createApp 多寫使用到的 child component

<Tabs>
<TabItem value="js" label="JavaScript">

```html
<script type="module">
  import { createApp } from "vue";
  import ChildComp from "./ChildComp.js";

  createApp({
    components: {
      ChildComp,
    },
    // register component
  }).mount("#app");
</script>

<div id="app">
  <!-- render child component -->
  <child-comp></child-comp>
</div>
```

</TabItem>
<TabItem value="sfc" label="SFC">

```html
<script setup>
  import ChildComp from "./ChildComp.vue";
</script>
<template>
  <!-- render child component -->
  <ChildComp />
</template>
```

</TabItem>
</Tabs>

- 傳遞變數給 child component，用 `:msg="variable"`

```html
<ChildComp :msg="greeting" />
```

- 需要在 child component 定義 props

<Tabs>
<TabItem value='html' label='HTML'>

```js
export default {
  props: { msg: String },
  template: `
    <h2>{{ msg || 'No props passed yet' }}</h2>
    `,
};
```

</TabItem>

<TabItem value='sfc' label='SFC'>

```html
<script setup>
  const props = defineProps({
    msg: String,
  });
</script>

<template>
  <h2>{{ msg || 'No props passed yet' }}</h2>
</template>
```

</TabItem>

</Tabs>

- 傳遞變數給 parent component，使用 `@response`

<Tabs groupId="parent-component">
<TabItem value='html' label='HTML'>

```html title="index.html"
<div id="app">
  <child-comp @response="(msg) => childMsg = msg"></child-comp>
  <p>{{ childMsg }}</p>
</div>
```

</TabItem>
<TabItem value="sfc" label="SFC">

```html title="App.vue"
<template>
  // msg 就會接收到 "hello from child"
  <ChildComp @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>
```

</TabItem>
</Tabs>

<Tabs groupId="parent-component">
<TabItem value='html' label='HTML'>

```js title="ChildComp.js"
export default {
  emits: ["response"],
  setup(props, { emit }) {
    emit("response", "hello from child");
    return {};
  },
};
```

</TabItem>
<TabItem value="sfc" label="SFC">

```html title="ChildComp.vue"
<script setup>
  const emit = defineEmits(["response"]);

  // 第一個參數是事件名稱，後面則是要傳遞的變數
  emit("response", "hello from child");
</script>

<template>
  <h2>Child component</h2>
</template>
```

</TabItem>

</Tabs>

- 父層的 component 傳遞內容下去，而子 component 使用 `<slot></slot>` 來顯示父層傳遞的內容

```html
<!-- App.vue -->
<template>
  <ChildComp>{{ msg }}</ChildComp>
</template>

<!-- ChildComp.vue -->
<template>
  <slot>Fallback content</slot>
</template>
```

- `nextTick(callback)`：在下次 DOM 更新之後執行 <sup>[1]</sup>
- `toRefs` 將響應式內容轉為普通物件 變成 ref，解構後同時保有響應式並同步，可以用於從父層傳遞進來的 ref 變數，就可以在 isShow 變動時觸發 watch

```javascript
const { isShow } = toRefs(props);

watch(isShow, () => {
  // ...
});

// 也等於以下，上面的方式可以在多個地方使用到 isShow 時使用

watch(
  () => props.isShow,
  () => {
    // ...
  }
);
```

### 參考資料

1. [nextTick()](https://vuejs.org/api/general.html#nexttick)
2. [Vue 教學](https://cn.vuejs.org/tutorial/#step-1)
