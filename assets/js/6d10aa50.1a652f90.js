"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[481],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(2962),r=(n(9496),n(9613));const i={last_update:{date:"2025/01/10"},title:"\u88fd\u4f5c Node.js Package",description:"\u88fd\u4f5c Node.js Package",keywords:["nodejs"]},l="\u88fd\u4f5c Node.js Package",o={unversionedId:"Node.js/create-node-module",id:"Node.js/create-node-module",title:"\u88fd\u4f5c Node.js Package",description:"\u88fd\u4f5c Node.js Package",source:"@site/docs/Node.js/create-node-module.md",sourceDirName:"Node.js",slug:"/Node.js/create-node-module",permalink:"/note/docs/Node.js/create-node-module",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Node.js/create-node-module.md",tags:[],version:"current",lastUpdatedAt:1736438400,formattedLastUpdatedAt:"Jan 9, 2025",frontMatter:{last_update:{date:"2025/01/10"},title:"\u88fd\u4f5c Node.js Package",description:"\u88fd\u4f5c Node.js Package",keywords:["nodejs"]},sidebar:"myAutogeneratedSidebar",previous:{title:"JavaScript",permalink:"/note/docs/JavaScript/"},next:{title:"Other",permalink:"/note/docs/Other/"}},p={},d=[{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:4},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],c={toc:d};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u88fd\u4f5c-nodejs-package"},"\u88fd\u4f5c Node.js Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6a94\u6848\u958b\u982d\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"li"},"#!/usr/bin/env node")," \u4ee3\u8868\u6703\u544a\u8a34\u7cfb\u7d71\u53ef\u4ee5\u5728 PATH \u76ee\u9304\u4e2d\u67e5\u8a62 node \u7684\u8def\u5f91\uff08\u56e0\u70ba\u4e0d\u540c\u7684\u7528\u6236 node \u8def\u5f91\u53ef\u80fd\u4e0d\u540c\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," \u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"li"},'"bin": <file-path>'),"\uff1a\u8b93\u4e4b\u5f8c\u5b89\u88dd\u6b64\u5957\u4ef6\u5f8c\u57f7\u884c\u7684\u6a94\u6848"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88dd\u5f8c\u5957\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," \u65b0\u589e scripts\uff0c\u5beb ",(0,r.kt)("inlineCode",{parentName:"li"},'"test": <package-name>'))),(0,r.kt)("h4",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm run dev")," \u6642\u4e0d\u6703\u53bb\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"predev"),"\uff0c\u53ef\u4ee5\u5728\u6a94\u6848 ",(0,r.kt)("inlineCode",{parentName:"li"},".npmrc")," \u4e2d\u5beb\u4e0a ",(0,r.kt)("inlineCode",{parentName:"li"},"enable-pre-post-scripts=true")," \u5373\u53ef\u89e3\u6c7a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add <module>@<url>")," \u5b89\u88dd\u7279\u5b9a url \u7684\u5957\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm link -g")," \u5c07\u6b64\u5957\u4ef6\u8b8a\u6210\u5168\u57df\u7684\u5957\u4ef6\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6\u5c08\u6848\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm link -g <package-name>")," \u4f86\u9023\u7d50\u6b64\u5957\u4ef6 ",(0,r.kt)("sup",null,"[4]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5148\u5c07\u5957\u4ef6 clone \u4e0b\u4f86\uff0c\u4e26\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm link -g")," \uff08\u5c07\u6b64\u5957\u4ef6\u8b8a\u6210\u5168\u57df\u7684\u5957\u4ef6\uff09\n",(0,r.kt)("img",{alt:"pnpm link",src:n(8175).Z,width:"1044",height:"152"}),"n"),(0,r.kt)("li",{parentName:"ul"},"\u958b\u555f\u8981\u6e2c\u8a66\u7684\u5c08\u6848\uff0c\u4e00\u6a23\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm link -g")," \u5c31\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u5168\u57df\u7684\u5957\u4ef6\uff08\u5728 node_modules \u88e1\u9762\u53ef\u4ee5\u770b\u5230\u6b64\u5957\u4ef6\u540d\u7a31\u53f3\u908a\u6709\u591a\u4e86\u4e00\u500b\u7bad\u982d\u7684\u7b26\u865f\uff09\n",(0,r.kt)("img",{alt:"pnpm link",src:n(4805).Z,width:"588",height:"446"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm ls --global --depth 0")," \u67e5\u8a62\u73fe\u5728\u5168\u57df\u9023\u7d50\u7684\u5957\u4ef6\uff0c\u6703\u770b\u5230\u6709\u4e00\u500b\u9805\u76ee\u662f\u9019\u500b\u5957\u4ef6\u5f8c\u9762\u5beb link \u7684\u8def\u5f91"),(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u9023\u7d50\u5168\u57df\u5957\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5148\u5728\u5168\u57df\u5957\u4ef6\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"npm rm --g <package-name>")," \u53d6\u6d88\u9023\u7d50\u5168\u57df"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u91cd\u65b0\u5b89\u88dd npm install \u5373\u53ef")))),(0,r.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903826344902670"},"#!/usr/bin/env node \u5230\u5e95\u662f\u4ec0\u4e48\uff1f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/creating-node-js-modules"},"Creating Node.js modules")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pnpm.io/cli/run#differences-with-npm-run"},"pnpm Defferences with npm run")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10332272"},"[Vite \u539f\u59cb\u78bc\u89e3\u8b80] \u5982\u4f55\u8ffd\u539f\u59cb\u78bc\uff1f"))))}s.isMDXComponent=!0},4805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/link-76b3a4b8e43c357816bf43581ea94730.png"},8175:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pnpm-link-g-afc4441be10ed9913077e7459ee43da2.png"}}]);