"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[737],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(2962),a=(r(9496),r(9613));const i={sidebar_position:1,last_update:{date:"2023/07/02"},title:"JavaScript",description:"JavaScript",keywords:["javascript"]},o=void 0,p={unversionedId:"JavaScript/index",id:"JavaScript/index",title:"JavaScript",description:"JavaScript",source:"@site/docs/JavaScript/index.md",sourceDirName:"JavaScript",slug:"/JavaScript/",permalink:"/note/docs/JavaScript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/index.md",tags:[],version:"current",lastUpdatedAt:1688227200,formattedLastUpdatedAt:"Jul 1, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,last_update:{date:"2023/07/02"},title:"JavaScript",description:"JavaScript",keywords:["javascript"]},sidebar:"myAutogeneratedSidebar",next:{title:"Other",permalink:"/note/docs/Other/"}},l={},c=[{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"??")," \u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," \u6bd4\u8f03\u5dee\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"??")," \u6703\u5c07 ",(0,a.kt)("inlineCode",{parentName:"p"},'""'),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u7576\u4f5c\u7d50\u679c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"element.getBoundingClientRect() \u5167\u5bb9\u90fd\u70ba 0 \u7684\u8a71\u6709\u53ef\u80fd\u662f\u8a72 element \u4e00\u958b\u59cb\u70ba display: none ",(0,a.kt)("sup",null,"[4]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"toString"),"\uff1a\u7576\u9700\u8981\u5370\u51fa\u5b57\u4e32\u6642\uff0c\u4f46\u8b8a\u6578\u70ba object \u5c31\u6703\u81ea\u52d5\u53bb\u547c\u53eb ",(0,a.kt)("inlineCode",{parentName:"p"},"toString()")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const name = {\n  id: 1,\n  toString: () => "Cindy",\n};\nconsole.log(`Hello ${name}`); // Hello Cindy\n')),(0,a.kt)("p",{parentName:"li"},"\u4f46\u5982\u679c\u6c92\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"toString")," \u9019\u500b function\uff0c\u5c31\u6703\u5370\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello [object object]"),"\uff0c\u56e0\u70ba ECMAScript \u5b9a\u7fa9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"toString()")," \u65b9\u5f0f\u8b93\u4ed6\u8b8a\u6210\u9019\u6a23",(0,a.kt)("sup",null,"[5]")))),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10251710"},"JavaScript \u4e4b\u65c5 (25)\uff1aNullish Coalescing Operator ( ?? \u904b\u7b97\u5b50)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://shubo.io/javascript-class/"},"[\u6559\u5b78] \u6df1\u5165\u6dfa\u51fa JavaScript ES6 Class (\u985e\u5225)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://hackmd.io/@Heidi-Liu/typescript#%E5%88%97%E8%88%89%E5%9E%8B%E5%88%A5-enum"},"\u3010\u5b78\u7fd2\u7b46\u8a18\u3011TypeScript \u57fa\u790e\u5165\u9580\uff1a\u5f9e\u578b\u5225\u8ac7\u8d77")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/4576295/getboundingclientrect-is-returning-zero-in-xul"},"getBoundingClientRect() is returning zero in XUL")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/27731303/why-object-prototype-tostring-return-object-object"},"why Object.prototype.toString return [object Object]"))))}u.isMDXComponent=!0}}]);