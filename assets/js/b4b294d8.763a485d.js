"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[574],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7622),r=(n(9496),n(9613));const o={sidebar_position:2,last_update:{date:"2023/08/29"},title:"React",description:"react",keywords:["react","react-router-dom"]},l=void 0,i={unversionedId:"React/index",id:"React/index",title:"React",description:"react",source:"@site/docs/React/index.md",sourceDirName:"React",slug:"/React/",permalink:"/note/docs/React/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/index.md",tags:[],version:"current",lastUpdatedAt:1693238400,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,last_update:{date:"2023/08/29"},title:"React",description:"react",keywords:["react","react-router-dom"]},sidebar:"myAutogeneratedSidebar",previous:{title:"Regular Expression",permalink:"/note/docs/"},next:{title:"You Might Not Need an Effect",permalink:"/note/docs/React/you-might-not-need-an-effect"}},u={},c=[{value:"StrictMode",id:"strictmode",level:3},{value:"batch update",id:"batch-update",level:3},{value:"functional updater",id:"functional-updater",level:3},{value:"immutable update",id:"immutable-update",level:3},{value:"react-router-dom",id:"react-router-dom",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],p={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React \u7684 state \u6539\u8b8a\u662f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Object.is()")," \u53bb\u5224\u65b7\u662f\u5426\u8ddf\u539f\u672c\u7684 state \u4e00\u6a23\uff0c\u5982\u679c\u4e0d\u4e00\u6a23\u624d\u6703\u91cd\u65b0 render"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u7e6a\u88fd Virtual DOM \u5728 React \u4e2d\u901a\u5e38\u6703\u7a31\u4f5c\u70ba re-render"),(0,r.kt)("li",{parentName:"ul"},"\u5c07\u7522\u751f\u7684 Virtual DOM Tree \u8207\u820a\u7684\u6bd4\u8f03\uff0c\u6293\u53d6\u51fa\u66f4\u65b0\u7684\u90e8\u5206\u66f4\u65b0\u5230\u5be6\u969b\u7684 DOM Tree \u4e0a\u5728 React \u4e2d\u88ab\u7a31\u70ba Reconciliation"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"react-dom")," \u4f86\u7ba1\u7406\u771f\u5be6\u7684 DOM Tree\uff0c\u7576\u767c\u73fe\u6709\u9700\u8981\u66f4\u65b0\u7684\u6642\u5019\u5c31\u6703 Renderer"),(0,r.kt)("li",{parentName:"ul"},"function component \u57f7\u884c\u9806\u5e8f\uff1arender\uff08DOM \u7684\u66f4\u65b0\u53ca\u7e6a\u88fd\u756b\u9762\uff09 -> \u4e0a\u4e00\u500b useEffect \u7684 cleanup function -> useEffect",(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u8a72 render \u662f\u88ab React 18 \u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"flushSync")," \u6240\u5305\u8457\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," \u6240\u89f8\u767c\uff0c\u624d\u6703\u662f\u5728\u756b\u9762\u7684\u6392\u7248\u8207\u7e6a\u88fd\u4e4b\u524d\u5c31\u5148\u57f7\u884c"))),(0,r.kt)("li",{parentName:"ul"},"\u57f7\u884c cleanup function \u6642\u6a5f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7576 component \u88ab\u79fb\u9664\u6642"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u7684 re-render ",(0,r.kt)("sup",null,"[1]")))),(0,r.kt)("li",{parentName:"ul"},"\u5beb ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect()")," \u6642\u61c9\u8a72\u5c07\u8a72 dependencies \u8996\u70ba\u6548\u80fd\u512a\u5316\u7684\u8003\u91cf\uff0c\u4ee3\u8868\u5c31\u7b97\u6c92\u5beb dependencies \u8b93\u6bcf\u6b21 render \u90fd\u57f7\u884c\u6642\u61c9\u8a72\u4e5f\u8981\u662f\u6b63\u78ba\u7684\u908f\u8f2f\u53ca\u7d50\u679c\uff0c\u800c\u4e0d\u662f\u5c07\u5546\u696d\u908f\u8f2f\u5beb\u5728 dependencies \u7576\u4f5c\u5224\u65b7\uff0c\u5426\u5247\u53ef\u80fd\u5c0e\u81f4\u5728\u975e\u9810\u671f\u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect"))),(0,r.kt)("h3",{id:"strictmode"},"StrictMode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"StrictMode \u8b93\u4f60\u5728\u958b\u767c\u6a21\u5f0f\u4e0b\u627e\u5230 bug",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"React \u6703\u9810\u8a2d\u70ba pure component \u4e26 re-render \u5169\u6b21\u4f86\u67e5\u770b\u662f\u5426\u6709 side effect"),(0,r.kt)("li",{parentName:"ul"},"\u8b93 useEffect \u57f7\u884c\u591a\u6b21\u4f86\u67e5\u770b\u662f\u5426\u6709\u6c92\u6709\u6e05\u9664\uff08unmounts\uff09\u5230\u7684 effect"),(0,r.kt)("li",{parentName:"ul"},"\u5e6b\u5fd9\u6aa2\u67e5\u662f\u5426\u4f7f\u7528\u5230\u5df2\u88ab\u6dd8\u6c70\u7684 API")))),(0,r.kt)("h3",{id:"batch-update"},"batch update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e00\u500b\u4e8b\u4ef6\u4e2d\u540c\u6642\u547c\u53eb\u591a\u6b21 setState \u53ea\u6703\u89f8\u767c\u4e00\u6b21 re-render\uff0c\u5c31\u53eb\u505a batch update\uff08React 18 \u958b\u59cb\u5168\u9762\u555f\u7528\u9019\u500b\u6a5f\u5236\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flushSync()")," \u53ef\u4ee5\u8b93\u6bcf\u6b21 setState \u89f8\u767c re-render\uff0c\u800c\u4e0d\u555f\u7528 batch update \u6a5f\u5236\uff0c\u4f46\u5728\u540c\u500b\u4e8b\u4ef6\u4e2d\u62ff\u5230\u7684 state \u503c\u9084\u6703\u662f\u820a\u7684")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function app() {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    flushSync(() => {\n      setCount(1)\n    })\n    // \u4e0a\u9762\u6703\u89f8\u767c re-render \u4e14\u66f4\u65b0\u5be6\u969b\u7684 DOM\uff0c\u4f46\u9019\u908a\u62ff\u5230\u7684 count \u503c\u9084\u6703\u662f\u539f\u672c\u7684 0\uff0c\u56e0\u70ba\u9019\u500b\u4e8b\u4ef6\u88ab\u5efa\u7acb\u7684 closure \u6642\u5019\u62ff\u5230\u7684 count \u503c\u5c31\u662f 0\n\n    flushSync(() => {\n      setCount(2)\n    })\n  }\n\n  ...\n}\n\n")),(0,r.kt)("h3",{id:"functional-updater"},"functional updater"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setState()")," \u88e1\u9762\u9664\u4e86\u50b3\u4e00\u503c\uff0c\u9084\u53ef\u4ee5\u50b3 updater function\uff0c\u4e26\u4e14\u53ef\u4ee5\u53d6\u5f97\u6700\u65b0\u7684\u503c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function app() {\n  const [count, setCount] = useSate(0);\n  const handleClick = () => {\n    setCount(count + 1);\n    // \u4e0b\u9762\u7684 c \u53c3\u6578\u5c31\u53ef\u4ee5\u53d6\u5230\u6700\u65b0\u7684\u503c\n    setCount((c) => c + 1)\n    // \u7b2c\u4e00\u6b21\u9ede\u64ca\u5f8c\u7684 count \u5c31\u6703\u662f 2\n  }\n  ...\n}\n\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"React \u6559\u5b78\u63d0\u4f9b\u7684\u7df4\u7fd2\u6211\u89ba\u5f97\u4e0d\u6703\u5f88\u96e3\u53c8\u5f88\u6709\u8da3\u53ef\u4ee5\u52a0\u6df1\u5c0d functional updater \u7684\u5370\u8c61\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/queueing-a-series-of-state-updates#recap"},"\u9023\u7d50")," \u5f80\u4e0b\u6ed1\u9ede\u64ca\u6311\u6230 2\u3002")),(0,r.kt)("h3",{id:"immutable-update"},"immutable update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7531\u65bc\u66f4\u65b0 React \u7684 state \u90fd\u5fc5\u9808\u8981\u662f immutable\uff0c\u5982\u679c\u9047\u5230 state \u662f object \u6216 array \u4e14\u6709\u591a\u5c64\u5de2\u72c0\u7684\u7d50\u69cb\u6642\uff0c\u4f8b\u5982\u4ee5\u4e0b\u5167\u5bb9"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const [person, setPerson] = useState([\n  { id: 1, name: "cindy" },\n  { id: 2, name: "gary" },\n]);\n')))),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u539f\u672c ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"Spread syntax")," \u7684\u65b9\u5f0f\u8907\u88fd\u4e00\u4efd\u6210\u65b0\u7684\u5167\u5bb9\u51fa\u4f86\u6642\uff0c\u5176\u5be6\u7b2c\u4e8c\u5c64\u7684\u5167\u5bb9\u9084\u6703\u662f\u4ee5 reference \u7684\u65b9\u5f0f\u6307\u5411\u539f\u672c\u7684\u8b8a\u6578\uff0cSpread \u5c6c\u65bc shallow clone\uff0c\u6240\u4ee5\u9047\u5230\u591a\u5c64\u7d50\u69cb\u53ef\u4ee5\u4f9d\u9760\u7b2c\u4e09\u65b9\u5957\u4ef6\uff0c\u4f8b\u5982 Lodash\uff0c\u5c07\u6574\u500b\u7269\u4ef6\u6216\u9663\u5217\u5b8c\u6574\u7684\u8907\u88fd\u51fa\u4f86\uff0c\u6216\u662f\u5229\u7528 Spread \u8907\u88fd\u9700\u8981\u66f4\u65b0\u7684\u90a3\u4e00\u5c64\u5167\u5bb9\u51fa\u4f86\u3002"),(0,r.kt)("h3",{id:"react-router-dom"},"react-router-dom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"<Router>")," \u5207\u63db\u8def\u5f91\uff0c\u5982\u679c\u8981\u5171\u7528\u9801\u9762\u90e8\u5206\u7684\u5167\u5bb9\uff08\u4f8b\u5982 header \u6216 footer\uff09\uff0c\u53ef\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\uff08",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/hashrouter-xm2y4m"},"codesandbox \u9023\u7d50"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";\n\nexport default function App() {\n  return (\n    <Router>\n      <main className="blog">\n        <nav className="blog__nav">\n          <Link className="blog__nav-list" to="/" exact="true">\n            List\n          </Link>\n          <Link className="blog__nav-about" to="/about">\n            About\n          </Link>\n        </nav>\n        <Routes>\n          <Route exact path="/" element={<div>/list</div>} />\n          <Route path="/about" element={<div>/about</div>} />\n          <Route path="*" element={<div>*</div>} />\n        </Routes>\n      </main>\n    </Router>\n  );\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate()")," \u9700\u8981\u4f7f\u7528\u65bc Router \u5167\uff08",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component"},"stackoverflow"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useImperativeHandle(ref, createHandle, [deps])")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u4f86\u8b93\u7236\u5143\u4ef6\u53ef\u4ee5\u64cd\u4f5c\u5b50\u5143\u4ef6\u7684 DOM\uff0c\u4f8b\u5982\u4ee5\u4e0b\u7bc4\u4f8b\uff0c\u5b50\u5143\u4ef6\u7684 input \u6703\u88ab focus")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// App.js\nimport React from "react";\nimport "./styles.css";\nimport { Input } from "./input";\nexport default function App() {\n  const ref = React.useRef();\n\n  const handleInputFocus = () => {\n    ref.current.focus(); // \u4f7f\u7528 input \u958b\u653e\u7684 focus \u65b9\u6cd5\uff0c\u5982\u679c input \u6c92\u6709 focus \u65b9\u6cd5\uff0c\u5c31\u6703\u5831\u932f\n  };\n  return (\n    <>\n      <Input ref={ref} handleInputFocus={handleInputFocus} />\n      <div className="App" onClick={handleInputFocus}>\n        click\n      </div>\n    </>\n  );\n}\n\n// input.js\nimport { useRef, forwardRef, useImperativeHandle } from "react";\n\nconst Input = forwardRef(({ handleInputFocus }, ref) => {\n  const inputRef = useRef();\n\n  useImperativeHandle(\n    ref,\n    () => {\n      return {\n        focus() {\n          inputRef.current.focus();\n        },\n      };\n    },\n    []\n  );\n\n  return <input ref={inputRef} />;\n});\n\nexport { Input };\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useEffect \u7528\u6cd5\n// NOTE: \u8b93 dom \u66f4\u65b0\u7684\u6642\u5019\u4e5f\u53ef\u4ee5\u540c\u6b65\u53d6\u5f97\u5230\u8a72 dom \u7684\u5c3a\u5bf8\uff0c\u5982\u679c\u662f useEffect \u5c31\u6703\u6709\u53ef\u80fd\u53d6\u4e0d\u5230\u66f4\u65b0\u5f8c\u7684\u5c3a\u5bf8")),(0,r.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://react.dev/reference/react/useEffect#my-cleanup-logic-runs-even-though-my-component-didnt-unmount"},"My cleanup logic runs even though my component didn\u2019t unmount"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10295277"},"[Day 06] Render React elements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10298007"},"[Day 10] React \u756b\u9762\u66f4\u65b0\u7684\u6838\u5fc3\u6a5f\u5236\uff08\u4e0a\uff09\uff1a\u4e00\u5f8b\u91cd\u7e6a\u6e32\u67d3\u7b56\u7565")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10298053"},"[Day 11] React \u756b\u9762\u66f4\u65b0\u7684\u6838\u5fc3\u6a5f\u5236\uff08\u4e0b\uff09\uff1aReconciliation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=6U0p2EmlHSw&ab_channel=PJCHENder"},"[React] Keeping Components Pure - Part 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/reference/react/StrictMode#usage"},"<StrictMode",">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10300091"},"[Day 13] \u6df1\u5165\u7406\u89e3 batch update")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10300743"},"[Day 14] \u4ee5 functional updater \u4f86\u547c\u53eb setState")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10301603"},"[Day 15] \u7dad\u6301 React \u8cc7\u6599\u6d41\u53ef\u9760\u6027\u7684\u6838\u5fc3\u95dc\u9375\uff1aImmutable state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10303033"},"[Day 17] Immutable update \u7684 nested reference clone \u8aa4\u89e3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10305220"},"[Day 21] useEffect \u5176\u5be6\u4e0d\u662f function component \u7684\u751f\u547d\u9031\u671f API"))))}m.isMDXComponent=!0}}]);