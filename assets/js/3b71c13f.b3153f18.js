"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[928],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(2962),o=(n(9496),n(9613));const r={sidebar_position:1},s="You Might Not Need an Effect",l={unversionedId:"react/you-might-not-need-an-effect",id:"react/you-might-not-need-an-effect",title:"You Might Not Need an Effect",description:"\u672c\u7bc7\u5167\u5bb9\u53c3\u8003 You Might Not Need an Effect",source:"@site/docs/react/you-might-not-need-an-effect.md",sourceDirName:"react",slug:"/react/you-might-not-need-an-effect",permalink:"/note/docs/react/you-might-not-need-an-effect",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/you-might-not-need-an-effect.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"React",permalink:"/note/docs/category/react"},next:{title:"Tutorial - Extras",permalink:"/note/docs/category/tutorial---extras"}},i={},u=[{value:"\u66f4\u65b0 state \u7684\u4f9d\u64da\u4f86\u81ea state \u6216 props \u6642",id:"\u66f4\u65b0-state-\u7684\u4f9d\u64da\u4f86\u81ea-state-\u6216-props-\u6642",level:3},{value:"\u5c07\u8907\u96dc\u7684\u8a08\u7b97\u7528 Cache \u53d6\u4ee3",id:"\u5c07\u8907\u96dc\u7684\u8a08\u7b97\u7528-cache-\u53d6\u4ee3",level:3},{value:"\u9700\u8981\u66f4\u65b0\u6240\u6709\u7684 state \u6642",id:"\u9700\u8981\u66f4\u65b0\u6240\u6709\u7684-state-\u6642",level:3},{value:"\u7576 props \u6539\u8b8a\u6642\u9700\u8981\u8abf\u6574\u90e8\u5206\u7684 state",id:"\u7576-props-\u6539\u8b8a\u6642\u9700\u8981\u8abf\u6574\u90e8\u5206\u7684-state",level:3},{value:"\u90e8\u5206\u60c5\u6cc1\u7684\u908f\u8f2f\u61c9\u5beb\u5728 event handler \u88e1\u9762",id:"\u90e8\u5206\u60c5\u6cc1\u7684\u908f\u8f2f\u61c9\u5beb\u5728-event-handler-\u88e1\u9762",level:3},{value:"\u767c\u51fa POST \u7684\u8acb\u6c42",id:"\u767c\u51fa-post-\u7684\u8acb\u6c42",level:3},{value:"useEffect \u93c8\uff08\u539f\u6587\u662f Chains of computations\uff09",id:"useeffect-\u93c8\u539f\u6587\u662f-chains-of-computations",level:3},{value:"\u521d\u59cb\u5316 APP",id:"\u521d\u59cb\u5316-app",level:3},{value:"state \u63d0\u5347\u5230\u7236\u5c64",id:"state-\u63d0\u5347\u5230\u7236\u5c64",level:3},{value:"useSyncExternalStore",id:"usesyncexternalstore",level:3},{value:"\u53d6\u5f97\u6578\u64da",id:"\u53d6\u5f97\u6578\u64da",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"you-might-not-need-an-effect"},"You Might Not Need an Effect"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u672c\u7bc7\u5167\u5bb9\u53c3\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect"},"You Might Not Need an Effect"))),(0,o.kt)("p",null,"\u522a\u9664\u4e0d\u5fc5\u8981\u7684 Effect \u53ef\u4ee5\u8b93\u7a0b\u5f0f\u78bc\u66f4\u5bb9\u6613\u7406\u89e3\u3001\u904b\u4f5c\u901f\u5ea6\u66f4\u5feb\u4e5f\u4e0d\u6703\u6709 bug\u3002"),(0,o.kt)("h3",{id:"\u66f4\u65b0-state-\u7684\u4f9d\u64da\u4f86\u81ea-state-\u6216-props-\u6642"},"\u66f4\u65b0 state \u7684\u4f9d\u64da\u4f86\u81ea state \u6216 props \u6642"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5-8}","{5-8}":!0},'function Form() {\n  const [firstName, setFirstName] = useState("Taylor");\n  const [lastName, setLastName] = useState("Swift");\n\n  const [fullName, setFullName] = useState("");\n  useEffect(() => {\n    setFullName(firstName + " " + lastName);\n  }, [firstName, lastName]);\n  // ...\n}\n')),(0,o.kt)("p",null,"\u61c9\u8a72\u76f4\u63a5\u5beb\u6210"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},'function Form() {\n  const [firstName, setFirstName] = useState("Taylor");\n  const [lastName, setLastName] = useState("Swift");\n  const fullName = firstName + " " + lastName;\n  // ...\n}\n')),(0,o.kt)("p",null,"\u56e0\u70ba\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"setFirstName")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"setLastName")," \u6642\u6703\u89f8\u767c re-render\uff0c\u6240\u4ee5\u8b8a\u6578 ",(0,o.kt)("inlineCode",{parentName:"p"},"fullName")," \u4e5f\u6703\u4e00\u4f75\u66f4\u65b0\u5230\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5c07\u8907\u96dc\u7684\u8a08\u7b97\u7528-cache-\u53d6\u4ee3"},"\u5c07\u8907\u96dc\u7684\u8a08\u7b97\u7528 Cache \u53d6\u4ee3"),(0,o.kt)("p",null,"\u7576 state \u6539\u8b8a\u4e14\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u88e1\u9762\u91cd\u65b0\u8a08\u7b97\u53e6\u4e00\u500b state \u6642\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-7}","{4-7}":!0},'function TodoList({ todos, filter }) {\n  const [newTodo, setNewTodo] = useState("");\n\n  const [visibleTodos, setVisibleTodos] = useState([]);\n  useEffect(() => {\n    setVisibleTodos(getFilteredTodos(todos, filter));\n  }, [todos, filter]);\n\n  // ...\n}\n')),(0,o.kt)("p",null,"\u53ef\u4ee5\u6539\u5beb\u6210\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},'function TodoList({ todos, filter }) {\n  const [newTodo, setNewTodo] = useState("");\n  // \u4f46\u9019\u53ea\u9069\u7528\u65bc getFilterTodos() \u53ef\u4ee5\u5f88\u5feb\u901f\u7684\u57f7\u884c\u5b8c\u7562\u6642\n  const visibleTodos = getFilteredTodos(todos, filter);\n  // ...\n}\n')),(0,o.kt)("p",null,"\u4f46\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"getFilterTodos()")," \u662f\u500b\u8f03\u8907\u96dc\u7684\u8a08\u7b97\u4e14 ",(0,o.kt)("inlineCode",{parentName:"p"},"todos")," \u503c\u8f03\u591a\u6703\u62c9\u9577 ",(0,o.kt)("inlineCode",{parentName:"p"},"getFilterTodos()")," \u7684\u5b8c\u6210\u901f\u5ea6\u6642\uff0c\u53ef\u4ee5\u6539\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5-7}","{5-7}":!0},'import { useMemo, useState } from "react";\n\nfunction TodoList({ todos, filter }) {\n  const [newTodo, setNewTodo] = useState("");\n  const visibleTodos = useMemo(\n    () => getFilteredTodos(todos, filter),\n    [todos, filter]\n  );\n  // ...\n}\n')),(0,o.kt)("p",null,"\u4f46\u9019\u53ea\u9069\u7528\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"getFilteredTodos()")," \u662f Pure function \u7684\u60c5\u6cc1\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u9700\u8981\u66f4\u65b0\u6240\u6709\u7684-state-\u6642"},"\u9700\u8981\u66f4\u65b0\u6240\u6709\u7684 state \u6642"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-6}","{4-6}":!0},'export default function ProfilePage({ userId }) {\n  const [comment, setComment] = useState("");\n\n  // \u7576 userId \u6539\u8b8a\u6642\u9700\u8981\u6e05\u7a7a\u9019\u500b component \u7684\u6240\u6709 state \u6642\n  useEffect(() => {\n    setComment("");\n  }, [userId]);\n  // ...\n}\n')),(0,o.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u6539\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," \u8b93 React \u91cd\u65b0\u6e32\u67d3\u9019\u500b component\uff0cReact \u767c\u73fe ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," \u4e0d\u540c\u6642\u5c31\u6703\u91cd\u65b0\u7522\u751f DOM \u4e26\u91cd\u7f6e state\uff0c\u6240\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"comment")," \u9019\u500b state \u4e5f\u6703\u88ab\u91cd\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2-3}","{2-3}":!0},'export default function ProfilePage({ userId }) {\n  // \u65b0\u589e key={userId}\n  return <Profile userId={userId} key={userId} />;\n}\n\nfunction Profile({ userId }) {\n  const [comment, setComment] = useState("");\n  // ...\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u7576-props-\u6539\u8b8a\u6642\u9700\u8981\u8abf\u6574\u90e8\u5206\u7684-state"},"\u7576 props \u6539\u8b8a\u6642\u9700\u8981\u8abf\u6574\u90e8\u5206\u7684 state"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes"},"Adjusting some state when a prop changes")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u90e8\u5206\u60c5\u6cc1\u7684\u908f\u8f2f\u61c9\u5beb\u5728-event-handler-\u88e1\u9762"},"\u90e8\u5206\u60c5\u6cc1\u7684\u908f\u8f2f\u61c9\u5beb\u5728 event handler \u88e1\u9762"),(0,o.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u7bc4\u4f8b\uff0c\u5e0c\u671b\u5728\u7522\u54c1\u88ab\u52a0\u9032\u8cfc\u7269\u8eca\u6642\u986f\u793a\u901a\u77e5\uff0c\u6240\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u88e1\u9762\u5beb\u5224\u65b7\u5f0f\uff0c\u5982\u679c\u7522\u54c1\u88ab\u52a0\u9032\u8cfc\u7269\u8eca\u6642\uff0c\u624d\u6703\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"showNotification()"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-7}","{4-7}":!0},'function ProductPage({ product, addToCart }) {\n  useEffect(() => {\n    if (product.isInCart) {\n      showNotification(`Added ${product.name} to the shopping cart!`);\n    }\n  }, [product]);\n\n  function handleBuyClick() {\n    addToCart(product);\n  }\n\n  function handleCheckoutClick() {\n    addToCart(product);\n    navigateTo("/checkout");\n  }\n  // ...\n}\n')),(0,o.kt)("p",null,"\u4f46\u9019\u6a23\u7684\u5beb\u6cd5\u6709\u53ef\u80fd\u6703\u9020\u6210 bug\uff0c\u4f8b\u5982\u9801\u9762\u518d\u91cd\u65b0\u6574\u7406\u6642\u6709\u8a18\u61b6\u4e86\u7522\u54c1\u52a0\u5165\u8cfc\u7269\u8eca\uff0c\u6240\u4ee5\u7576\u52a0\u5165\u8cfc\u7269\u8eca\u5f8c\u91cd\u65b0\u6574\u7406\u9801\u9762\u6703\u518d\u6b21\u8df3\u51fa\u901a\u77e5\uff0c\u8b8a\u6210\u8aaa\u5f8c\u7e8c\u91cd\u65b0\u6574\u7406\u9801\u9762\u90fd\u6703\u89f8\u767c\u518d\u6b21\u8df3\u51fa\u901a\u77e5\uff0c\u56e0\u70ba\u6bcf\u6b21\u90fd\u6703\u57f7\u884c\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u88e1\u9762\u7684\u5224\u65b7\u5f0f\uff0c\u4e26\u57f7\u884c\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"showNotification()"),"\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u9019\u7a2e\u60c5\u6cc1\u5c31\u61c9\u8a72\u628a\u986f\u793a\u901a\u77e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"showNotification()")," \u5beb\u5728\u7522\u54c1\u88ab\u52a0\u9032\u8cfc\u7269\u8eca\u7684\u7576\u4e0b\uff0c\u7a0b\u5f0f\u78bc\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},'function ProductPage({ product, addToCart }) {\n  function buyProduct() {\n    addToCart(product);\n    showNotification(`Added ${product.name} to the shopping cart!`);\n  }\n\n  function handleBuyClick() {\n    buyProduct();\n  }\n\n  function handleCheckoutClick() {\n    buyProduct();\n    navigateTo("/checkout");\n  }\n  // ...\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u767c\u51fa-post-\u7684\u8acb\u6c42"},"\u767c\u51fa POST \u7684\u8acb\u6c42"),(0,o.kt)("p",null,"\u8ddf\u4e0a\u9762\u4f8b\u5b50\u6709\u9ede\u985e\u4f3c\uff0c\u6b64\u60c5\u6cc1\u7684\u9700\u6c42\u662f\u5e0c\u671b\u5728\u9019\u500b mount \u9019\u500b component \u4ee5\u53ca\u63d0\u4ea4\u8868\u55ae\u7684\u6642\u5019\u767c\u51fa POST \u8acb\u6c42\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5-8,10-16}","{5-8,10-16}":!0},'function Form() {\n  const [firstName, setFirstName] = useState("");\n  const [lastName, setLastName] = useState("");\n\n  // \u5beb\u5728\u9019\u908a\u662f ok \u7684\uff0c\u56e0\u70ba\u9019\u6bb5\u908f\u8f2f\u53ea\u6703\u5728\u7576\u6b64 component \u51fa\u73fe\u6642\u57f7\u884c\n  useEffect(() => {\n    post("/analytics/event", { eventName: "visit_form" });\n  }, []);\n\n  // \ud83d\udd34 Avoid: Event-specific logic inside an Effect\n  const [jsonToSubmit, setJsonToSubmit] = useState(null);\n  useEffect(() => {\n    if (jsonToSubmit !== null) {\n      post("/api/register", jsonToSubmit);\n    }\n  }, [jsonToSubmit]);\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    setJsonToSubmit({ firstName, lastName });\n  }\n  // ...\n}\n')),(0,o.kt)("p",null,"\u61c9\u8a72\u5beb\u6210\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{12-13}","{12-13}":!0},'function Form() {\n  const [firstName, setFirstName] = useState("");\n  const [lastName, setLastName] = useState("");\n\n  // \u539f\u672c\u7684\u7dad\u6301\u4e0d\u8b8a\n  useEffect(() => {\n    post("/analytics/event", { eventName: "visit_form" });\n  }, []);\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    // \u6539\u5beb\u9032 event handler \u88e1\u9762\n    post("/api/register", { firstName, lastName });\n  }\n  // ...\n}\n')),(0,o.kt)("p",null,"\u5982\u679c\u9019\u500b\u908f\u8f2f\u662f\u7531\u7279\u5b9a\u7684\u884c\u70ba\u7522\u751f\uff0c\u5c31\u61c9\u8a72\u5beb\u5728 event handler \u88e1\u9762\uff1b\u4f46\u5982\u679c\u662f\u8981\u8b93\u4f7f\u7528\u8005\u770b\u5230\u5728 UI \u4e0a\u7684\u8b8a\u5316\uff0c\u5c31\u8981\u5beb\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4e2d\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If it\u2019s caused by the user seeing the component on the screen, keep it in the Effect.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"useeffect-\u93c8\u539f\u6587\u662f-chains-of-computations"},"useEffect \u93c8\uff08\u539f\u6587\u662f Chains of computations\uff09"),(0,o.kt)("p",null,"\u67d0\u4e9b\u60c5\u6cc1\u53ef\u80fd\u6703\u9700\u8981\u7b49\u4e00\u500b state \u6539\u5b8c\u5f8c\u63a5\u8005\u6539\u5176\u4ed6\u7684 state\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{7-30}","{7-30}":!0},'function Game() {\n  const [card, setCard] = useState(null);\n  const [goldCardCount, setGoldCardCount] = useState(0);\n  const [round, setRound] = useState(1);\n  const [isGameOver, setIsGameOver] = useState(false);\n\n  // \u8981\u907f\u514d\u66f4\u65b0 state \u89f8\u767c\u8d77\u4e00\u9023\u4e32\u7684\u66f4\u65b0 state\n  useEffect(() => {\n    if (card !== null && card.gold) {\n      setGoldCardCount((c) => c + 1);\n    }\n  }, [card]);\n\n  useEffect(() => {\n    if (goldCardCount > 3) {\n      setRound((r) => r + 1);\n      setGoldCardCount(0);\n    }\n  }, [goldCardCount]);\n\n  useEffect(() => {\n    if (round > 5) {\n      setIsGameOver(true);\n    }\n  }, [round]);\n\n  useEffect(() => {\n    alert("Good game!");\n  }, [isGameOver]);\n\n  function handlePlaceCard(nextCard) {\n    if (isGameOver) {\n      throw Error("Game already ended.");\n    } else {\n      setCard(nextCard);\n    }\n  }\n\n  // ...\n}\n')),(0,o.kt)("p",null,"\u9019\u6bb5\u7a0b\u5f0f\u78bc\u6703\u9020\u6210\u6c92\u6548\u7387\uff0c\u4f8b\u5982\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"handlePlaceCard()")," function \u6642\u6703\u57f7\u884c\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"setCard(nextCard)")," -> render -> \u89f8\u767c ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7136\u5f8c\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"setGoldCardCount")," -> render -> \u89f8\u767c ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7136\u5f8c\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"setRound")," -> render -> \u89f8\u767c ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7136\u5f8c\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"setIsGameOver"),"\uff0c\u9019\u6a23\u7684\u5beb\u6cd5\u4e0d\u592a\u597d\uff0c\u7576\u7a0b\u5f0f\u78bc\u4e00\u591a\u5c31\u6703\u5f88\u96e3\u5feb\u901f\u770b\u51fa\u5f7c\u6b64\u5f71\u97ff\u7684\u9806\u5e8f\u3002"),(0,o.kt)("p",null,"\u6bd4\u8f03\u597d\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6-7,14-26}","{6-7,14-26}":!0},"function Game() {\n  const [card, setCard] = useState(null);\n  const [goldCardCount, setGoldCardCount] = useState(0);\n  const [round, setRound] = useState(1);\n\n  // \u2705 \u5728 rendering \u7684\u671f\u9593\u8a08\u7b97\n  const isGameOver = round > 5;\n\n  function handlePlaceCard(nextCard) {\n    if (isGameOver) {\n      throw Error('Game already ended.');\n    }\n\n    // \u2705 \u5c07\u66f4\u65b0 state \u7684\u79fb\u9032 event handler \u88e1\u9762\n    setCard(nextCard);\n    if (nextCard.gold) {\n      if (goldCardCount <= 3) {\n        setGoldCardCount(goldCardCount + 1);\n      } else {\n        setGoldCardCount(0);\n        setRound(round + 1);\n        if (round === 5) {\n          alert('Good game!');\n        }\n      }\n    }\n  }\n  ...\n}\n")),(0,o.kt)("p",null,"\u9019\u6a23\u4e0d\u4f46\u53ef\u4ee5\u63d0\u9ad8\u6548\u7387\uff0c\u4e5f\u53ef\u4ee5\u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"handlePlaceCard")," function \u76f4\u63a5\u62c9\u51fa\u53bb\u7d66\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u4f46\u5728\u90e8\u5206\u60c5\u6cc1\u4e0b\uff0c\u6703\u7121\u6cd5\u5f9e event handler \u4e2d\u62ff\u5230\u4e0b\u4e00\u500b state \u7684\u503c\uff0c\u4f8b\u5982\u6709\u4e00\u500b\u4e0b\u62c9\u5f0f\u9078\u55ae\uff0c\u9078\u55ae\u4e2d\u8981\u5448\u73fe\u7684\u4e0b\u4e00\u5c64\u5167\u5bb9\u53d6\u6c7a\u65bc\u7576\u524d\u6240\u9078\u7684\u503c\uff0c\u9019\u500b\u6642\u5019\u5c31\u9700\u8981\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4f86\u540c\u6b65\u66f4\u65b0 state\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u521d\u59cb\u5316-app"},"\u521d\u59cb\u5316 APP"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect#initializing-the-application"},"Initializing the application")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"state-\u63d0\u5347\u5230\u7236\u5c64"},"state \u63d0\u5347\u5230\u7236\u5c64"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect#notifying-parent-components-about-state-changes"},"Notifying parent components about state changes"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect#passing-data-to-the-parent"},"Passing data to the parent")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usesyncexternalstore"},"useSyncExternalStore"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect#subscribing-to-an-external-store"},"Subscribing to an external store")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u53d6\u5f97\u6578\u64da"},"\u53d6\u5f97\u6578\u64da"),(0,o.kt)("p",null,"\u901a\u5e38\u6703\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4f86\u53d6\u5f97\u6578\u64da\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5-10}","{5-10}":!0},"function SearchResults({ query }) {\n  const [results, setResults] = useState([]);\n  const [page, setPage] = useState(1);\n\n  useEffect(() => {\n    // \ud83d\udd34 \u6c92\u6709\u8ca0\u8cac\u6e05\u7406\u7684\u908f\u8f2f\n    fetchResults(query, page).then((json) => {\n      setResults(json);\n    });\n  }, [query, page]);\n\n  function handleNextPageClick() {\n    setPage(page + 1);\n  }\n  // ...\n}\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7a0b\u5f0f\u78bc\u6709\u53ef\u80fd\u9020\u6210 race condition\uff0c\u4f8b\u5982\u5206\u5225\u8f38\u5165\u300ch\u300d->\u300che\u300d->\u300chel\u300d->\u300chell\u300d->\u300chello\u300d\uff0c\u6bcf\u6b21\u8f38\u5165\u90fd\u6703\u547c\u53eb API \u4f86\u53d6\u5f97\u7d50\u679c\uff0c\u4f46\u5982\u679c\u6700\u5f8c\u662f\u641c\u5c0b\u300chello\u300d\u6642\u4f46 \u300che\u300d\u7684\u7d50\u679c\u6700\u5f8c\u624d\u56de\u4f86\uff0c\u4e26\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"setResults")," \u5132\u5b58\u300che\u300d\u641c\u5c0b\u7d50\u679c\u7684\u503c\uff0c\u5c31\u6703\u5728\u756b\u9762\u4e0a\u986f\u793a\u932f\u7684\u7d50\u679c\uff0c\u56e0\u70ba\u5be6\u969b\u662f\u8981\u641c\u5c0b\u300chello\u300d\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5229\u7528\u65b0\u589e\u4e00\u500b\u6e05\u7406\u7684\u908f\u8f2f\u4f86\u4fee\u6b63\u6b64\u554f\u984c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5,7,9,11-13}","{5,7,9,11-13}":!0},"function SearchResults({ query }) {\n  const [results, setResults] = useState([]);\n  const [page, setPage] = useState(1);\n  useEffect(() => {\n    let ignore = false;\n    fetchResults(query, page).then((json) => {\n      if (!ignore) {\n        setResults(json);\n      }\n    });\n    return () => {\n      ignore = true;\n    };\n  }, [query, page]);\n\n  function handleNextPageClick() {\n    setPage(page + 1);\n  }\n  // ...\n}\n")),(0,o.kt)("p",null,"\u9019\u6a23\u5c31\u53ef\u4ee5\u78ba\u5b9a\u641c\u5c0b\u7d50\u679c\u70ba\u6700\u5f8c\u4e00\u6b21\u8f38\u5165\u7684\u5167\u5bb9\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u6700\u5f8c\u518d\u63d0\u4e00\u6b21\uff0c\u8d8a\u5c11 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u5c31\u53ef\u4ee5\u8b93\u7a0b\u5f0f\u78bc\u66f4\u597d\u7dad\u8b77\uff0c\u770b\u5b8c\u9019\u7bc7\u6703\u89ba\u5f97\u6709\u4e9b\u883b\u7406\u6240\u7576\u7136\u7684\uff0c\u4f46\u7576\u9047\u5230\u6bd4\u8f03\u8907\u96dc\u4e00\u9ede\u7684\u5c08\u6848\uff0c\u6216\u662f\u5728\u5225\u4eba\u958b\u767c\u904e\u7684\u5167\u5bb9\u4e0a\u589e\u52a0\u65b0\u529f\u80fd\u9084\u771f\u7684\u5c31\u767c\u751f\u904e\u4e0a\u9762\u7684\u554f\u984c\uff0c\u5c0e\u81f4 bug \u51fa\u73fe\u3002"),(0,o.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10308365"},"\u6211\u8b80\u4f60\u770b - You Might Not Need an Effect: Part1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect"},"You Might Not Need an Effect"))))}d.isMDXComponent=!0}}]);