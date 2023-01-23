---
sidebar_position: 1
slug: /
last_update:
  date: 2022/11/04
title: Regular Expression
description: Regular Expression
keywords: [regular expression]
---

# Regular Expression

- js 寫法用 / 包起來（例如：`const re = /xyz/`)
- `/[0-9]/.test('string')`

| 符號      | 範例            | 說明                                                                                                                                                                                                             |
| --------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .         |                 | 代表任意字元                                                                                                                                                                                                     |
| \*        | .\*             | 符合任意字且 0 ~ 無限的數量                                                                                                                                                                                      |
| \         | \.              | 因為 . 代表任意字元，但希望第一個字是 . 就需要用 \ 來跳脫字元，沒有寫 \ 就會代表任意字元開頭都符合                                                                                                               |
| [^]       | \[^a]bc         | 代表不符合括弧內的開頭都是，例如這個範例符合任一字元開頭除了 a 以及 bc 的字元                                                                                                                                    |
| [ ]       | [abc]           | 放在 [ ]  裡面的只要有符合都是，此範例只要有 a、b、c 都符合                                                                                                                                                      |
|           | [0-9]           | 代表搜尋 0~9 的數字                                                                                                                                                                                              |
|           | [a-z]           | 代表搜尋小寫 a~z 的字                                                                                                                                                                                            |
|           | [A-Z]           | 代表搜尋大寫 A~Z 的字                                                                                                                                                                                            |
|           | [0-9a-zA-Z]     |                                                                                                                                                                                                                  |
| \d        |                 | d 代表 digit 表示一個數字                                                                                                                                                                                        |
| \D        |                 | 不是數字，與上行反義                                                                                                                                                                                             |
| \w        |                 | w 代表 word 表示一個字(等同於 [A-Za-z0-9_]                                                                                                                                                                       |
| \W        |                 | 不是  [A-Za-z0-9_] 任一                                                                                                                                                                                          |
| ^         |                 | 代表字串開頭                                                                                                                                                                                                     |
| $         |                 | 代表字串結尾                                                                                                                                                                                                     |
| {n}       | {8}             | 代表重複幾次 n 為次數                                                                                                                                                                                            |
|           | {8,}            | 代表重複 8 次以上                                                                                                                                                                                                |
|           | {8, 10}         | 8~10 個都可以                                                                                                                                                                                                    |
| i         | /xyz/i          | 猜測代表 ignore test，忽視大小寫                                                                                                                                                                                 |
| g         | /王.名/g        | g 代表 global 會配對到多個字串都抓取出來                                                                                                                                                                         |
| +         | \d+             | 代表一個以上，此範例代表一個以上的數字都符合，或者是 aa+ 代表兩個 a 以上都符合                                                                                                                                   |
| ()        | (\w+ (\d+))     | capturing groups，把符合這模式的都抓取出來，並記憶起來，如果有兩個內容，像是 () () 就可以在 replace 用 $1 和 $2 去取到。範例代表會有兩個 group，例如輸入 JUN 1987，第一個 group 是 JUN 1987 第二個 group 是 1987 |
| \s        |                 | 可以配對到任何空白、tab 或換行                                                                                                                                                                                   |
| \S        |                 | 剔除空白、tab 或換行                                                                                                                                                                                             |
| ?         |                 | 匹配 0~1 次與 {0, 1} 一樣                                                                                                                                                                                        |
| \|        | /green\|red/    | 或，此範例會匹配 green 或 red 的字串                                                                                                                                                                             |
| \x21-\x7e |                 | i.e. all printable, non-whitespace ASCII characters including punctuation, upper and lower case letters and numbers                                                                                              |
| $         | test$           | 最後一個字要比對到                                                                                                                                                                                               |
| ?:        | (\d+)(?:x)(\d+) | (non-capturing group) 排除群組，如果是 1280x720 代表會排除 x 然後組出兩個組為 1280 和 720（其實可以直接寫成 (\d+)x(\d+) ）                                                                                       |

### 參考資料

- [RegexOne](https://regexone.com/)
- [regex101](https://regex101.com/)
- [What is a non-capturing group in regular expressions?](https://stackoverflow.com/questions/3512471/what-is-a-non-capturing-group-in-regular-expressions)
