"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[125],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(y,p(p({ref:t},c),{},{components:n})):a.createElement(y,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(2962),r=(n(9496),n(9613));const i={sidebar_position:1,last_update:{date:"2023/03/03"},title:"TypeScript",description:"TypeScript",keywords:["TypeScript"]},p=void 0,l={unversionedId:"TypeScript/index",id:"TypeScript/index",title:"TypeScript",description:"TypeScript",source:"@site/docs/TypeScript/index.md",sourceDirName:"TypeScript",slug:"/TypeScript/",permalink:"/note/docs/TypeScript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/TypeScript/index.md",tags:[],version:"current",lastUpdatedAt:1677772800,formattedLastUpdatedAt:"Mar 2, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,last_update:{date:"2023/03/03"},title:"TypeScript",description:"TypeScript",keywords:["TypeScript"]},sidebar:"myAutogeneratedSidebar",previous:{title:"Next.js",permalink:"/note/docs/Other/nextjs"},next:{title:"Regular Expression",permalink:"/note/docs/"}},o={},s=[{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enum \u985e\u4f3c\u5229\u7528 JavaScript \u5b9a\u7fa9\u5e38\u6578\u7684\u6982\u5ff5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6cdb\u578b\uff1a\u5f9e\u547c\u53eb function \u6216 class \u6642\u4f86\u898f\u7bc4\u578b\u614b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function print<T>(data: T) {\n  console.log("data", data);\n}\n\nprint<number>123;\n\n// class \u7528\u6cd5\nclass Print<T> {\n  data: T;\n  constructor(d: T) {\n    this.data = d;\n  }\n}\n\nconst p = new Print<number>(123);\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u7528\u65bc function \u56de\u50b3\u7d50\u679c\u7684\u5b9a\u7fa9\uff08\u5b9a\u7fa9\u56de\u50b3\u7d50\u679c\u9663\u5217\u4e2d\u7684\u5167\u5bb9\u662f string \u985e\u578b\uff09")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u4e5f\u53ef\u4ee5\u70ba\u6cdb\u578b\u5b9a\u5b9a\u7fa9\u9810\u8a2d\u7684\u578b\u5225\uff0c\u4f8b\u5982 function createArray<T = string>(length: number, value: T): Array<T> {...}\uff0c\u5982\u679c\u5728\u547c\u53eb\u9019\u500b function \u7684\u53c3\u6578\u7121\u6cd5\u5f9e\u53c3\u6578\u81ea\u52d5\u63a8\u5c0e\u51fa\u578b\u5225\u7684\u8a71\uff0c\u9019\u500b\u9810\u8a2d\u578b\u5225\u5c31\u6703\u8d77\u4f5c\u7528\nfunction createArray<T>(length: number, value: T): Array<T> {\n  let result: T[] = [];\n\n  for (let i = 0; i < length; i++) {\n    result[i] = value;\n  }\n  return result;\n}\n\ncreateArray<string>(5, "x"); // \u9019\u908a\u7684 <string> \u4e5f\u53ef\u4ee5\u4e0d\u5beb\uff0c\u8b93\u578b\u5225\u63a8\u8ad6\u81ea\u52d5\u63a8\u5c0e\u51fa\u4f86\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d04\u675f\u6cdb\u578b\uff1a\u53ea\u5141\u8a31\u8b93\u50b3\u5165\u7684\u53c3\u6578\u6709 length \u9019\u500b\u5c6c\u6027")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"interface Lengthwise {\n  length: number;\n}\n\nfunction loggingIdentity<T extends Lengthwise>(arg: T): T {\n  return arg;\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  type Person = {\n    name: string;\n    id: number;\n  };\n\n  function getValue<T, U extends keyof T>(obj: T, key: U) {\n    return obj[key];\n  };\n\n  getValue<Person, "id">(obj, "id");\n  // \u9650\u5236\u53ea\u80fd\u5f9e Person \u53d6\u5f97 id \u7684 key\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type \u8ddf interface \u5dee\u5225\u5dee\u5728 interface \u53ef\u4ee5\u64f4\u5145\uff0ctype \u4e0d\u884c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"interface Card {\n  id: string;\n  name: string;\n}\n\ninterface Card {\n  desc: string;\n}\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"interface \u4e4b\u9593\u4e5f\u53ef\u4ee5\u662f\u7e7c\u627f\u7684\u95dc\u4fc2")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"interface Alarm {\n  alert();\n}\n\ninterface LightableAlarm extends Alarm {\n  lightOn();\n  lightOff();\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"union"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let a: string;\na = "123";\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'type Data = string;\n\nlet a: Data = "123";\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"class \u7684 implements")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"interface CarPops {\n  name: string;\n}\nclass Car implements CarPops {\n  name: string;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"utility\uff1atypescript \u63d0\u4f9b\u7684\u4e00\u4e9b\u65b9\u6cd5\uff0c\u53ef\u53c3\u8003",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html"},"\u5b98\u7db2")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Record<Keys, Type>\uff1a\u9664\u4e86\u7528\u65bc\u5b9a\u7fa9 object \u5167\u5bb9")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'interface CatInfo {\n  age: number;\n  breed: string;\n}\n\ntype CatName = "miffy" | "boris" | "mordred";\n\n// \u7b2c\u4e00\u500b\u53c3\u6578 CatName \u662f key name\uff0c\u7b2c\u4e8c\u500b\u53c3\u6578\u662f\u7269\u4ef6\u5167\u5bb9\nconst cats: Record<CatName, CatInfo> = {\n  miffy: { age: 10, breed: "Persian" },\n  boris: { age: 5, breed: "Maine Coon" },\n  mordred: { age: 16, breed: "British Shorthair" },\n};\n\n// \u4e5f\u53ef\u4ee5\u7528\u65bc\u4ee5\u4e0b\uff0c\u8b93\u7269\u4ef6\u5167\u5bb9\u90fd\u662f string \u6216 boolean\nconst object1: Record<string, boolean> = {\n  name: true,\n  id: "123",\n};\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"class\uff1a\u5206\u70ba public\u3001private\u3001protected\uff0c\u4f46\u53ea\u4fb7\u9650\u5728 typescript \u6703\u63d0\u793a\u932f\u8aa4\uff0c\u4f46\u5be6\u969b JavaScript \u9084\u662f\u53ef\u4ee5\u57f7\u884c\u7684"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class Live {\n  public roomName: string; // \u9810\u8a2d public\uff0c\u4e0d\u9650\u5236\u5404\u5730\u65b9\u5b58\u53d6\n  private id: string; // \u4e0d\u80fd\u5728\u5b50\u985e\u5225\u5b58\u53d6\uff0c\u5ba3\u544a\u7684\u5730\u65b9\u4e5f\u4e0d\u80fd\u53bb\u66f4\u6539\u4ed6\n  protected name: string; // \u5141\u8a31\u5728\u5b50\u985e\u5225\u4e2d\u5b58\u53d6\n  constructor(roomName1: string, id1: string, name1: string) {\n    this.roomName = roomName1;\n    this.id = id1;\n    this.name = name1;\n  }\n}\n\nclass CarLive extends Live {\n  constructor(roomName1: string, id1: string, name1: string) {\n    super(roomName1, id1, name1)\n  };\n\n  start() {\n    console.log(super.name)\n  }\n}\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"!")," \u9a5a\u5606\u865f\uff1a\u8868\u793a\u9019\u500b\u503c\u4e0d\u662f null \u6216\u662f undefined")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 React \u4e2d\u5b9a\u7fa9 TypeScript \u53ef\u53c3\u8003\u9019\u7bc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typescript-cheatsheets/react/blob/main/README.md#function-components"},"React Typescript CheatSheet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"keyof"),"\uff1a\u53d6\u51fa\u7269\u4ef6\u7684 key \u7576\u4f5c type\uff08\u5f8c\u9762\u63a5\u7684\u503c\u8981\u662f typescript \u7684\u578b\u5225\uff09"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'type Person = {\n  firstName: string;\n  lastName: string;\n}\n\ntype PersonKey = keyof Person; // \u7528\u4ee5\u53d6\u4ee3\u9700\u8981\u5beb "firstName" | "lastName" \u4ee5\u53ca\u907f\u514d\u4e4b\u5f8c Person \u65b0\u589e key\nconst personKey: PersonKey = "lastName"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"as const"),"\uff1a\u5c07\u7269\u4ef6\u8f49\u6210\u5df2\u8b80\u5c6c\u6027")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const tabItem = [\n  {\n    name: "\u63a8\u85a6",\n    key: "recommend",\n  },\n  {\n    name: "\u904b\u52d5",\n    key: "sport"\n  },\n  {\n    name: "\u98df\u7269",\n    key: "food"\n  },\n] as const;\n\n// \u6e38\u6a19\u79fb\u4e0a\u53bb const \u5c31\u6703\u986f\u793a\u4ee5\u4e0b\u7684 type\ntype const = readonly[{\n  readonly name: "\u63a8\u85a6";\n  readonly key: "recommend";\n},\n{\n  readonly name: "\u904b\u52d5";\n  readonly key: "sport";\n},\n{\n  readonly name: "\u98df\u7269";\n  readonly key: "food";\n}]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typeof"),"\uff1a\u5c07\u8b8a\u6578\u8b8a\u6210\u578b\u5225")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const obj = {\n  name: "cindy",\n  id: 1,\n}\n\ntype Person = typeof obj\n// type Person \u6703\u7b49\u65bc\u4ee5\u4e0b\ntype Person = {\n  name: string;\n  id: number;\n}\n\n// \u5982\u679c\u9700\u8981\u4f7f\u7528\u5230\u9663\u5217\u4e2d\u7684\u7269\u4ef6\u7684 value \u53ef\u4ee5\u5beb\u6210\u4ee5\u4e0b\nconst tabItem = [\n  {\n    name: "\u63a8\u85a6",\n    key: "recommend",\n  },\n  {\n    name: "\u904b\u52d5",\n    key: "sport"\n  },\n  {\n    name: "\u98df\u7269",\n    key: "food"\n  },\n] as const;\n\ntype Key = typeof tabItem[number]["key"]\n// Key \u5c31\u6703\u662f\u53ea\u80fd\u4f7f\u7528 recommend\u3001sport\u3001food\n')),(0,r.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%96%84%E7%94%A8-enum-%E6%8F%90%E9%AB%98%E7%A8%8B%E5%BC%8F%E7%9A%84%E5%8F%AF%E8%AE%80%E6%80%A7-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-feat-javascript-b20d6bbbfe00"},"TypeScript | \u5584\u7528 Enum \u63d0\u9ad8\u7a0b\u5f0f\u7684\u53ef\u8b80\u6027 - \u57fa\u672c\u7528\u6cd5 feat. JavaScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=GinkGJZBHIY&ab_channel=%E5%B8%83%E9%AD%AF%E6%96%AF%E5%89%8D%E7%AB%AF"},"\u3010\u524d\u7aef\u901f\u6210\u3011TypeScript TS \u5feb\u901f\u5165\u9580\uff5c Tiktok \u5de5\u7a0b\u5e2b\u5e36\u4f60\u5165\u9580\u524d\u7aef\uff5c\u5e03\u9b6f\u65af\u524d\u7aef")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10269471"},"[Day07] TS\uff1a\u4ec0\u9ebc\u662f Utility Types\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://willh.gitbook.io/typescript-tutorial/advanced/class"},"\u985e\u5225")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://willh.gitbook.io/typescript-tutorial/advanced/generics"},"\u6cdb\u578b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10306859?sc=iThelpR"},"Day 27 | \u3010TypeScript\u3011\u985e\u578b\u65b7\u8a00 &\u300c!?\u300d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10267302"},"[Day04] TS\uff1a\u5982\u4f55\u628a\u7269\u4ef6\u578b\u5225\u7684\u6240\u6709\u5c6c\u6027\u540d\u7a31\u53d6\u51fa\u8b8a\u6210 union type\uff1f\u8a66\u8a66\u770b keyof \u5427\uff01")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10274229"},"[Day13] TS\uff1a\u4ec0\u9ebc\uff01\u9019\u500b typeof \u548c\u6211\u60f3\u7684\u4e0d\u4e00\u6a23\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10268780"},"[Day06] TS\uff1a\u6574\u5408\u524d\u5e7e\u5929\u6240\u5b78\uff0c\u4f86\u5beb\u500b Generic Functions \u5427\uff01")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903848939634696"},"\u6740\u624b\u7ea7\u7684 TypeScript \u529f\u80fd\uff1aconst \u65ad\u8a00"))))}m.isMDXComponent=!0}}]);