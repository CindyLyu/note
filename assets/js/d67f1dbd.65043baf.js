"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[299],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(7622),a=(r(9496),r(9613));const o={sidebar_position:1,last_update:{date:"2023/09/01"},title:"Vue",description:"vue",keywords:["vue"]},i=void 0,u={unversionedId:"Vue/index",id:"Vue/index",title:"Vue",description:"vue",source:"@site/docs/Vue/index.md",sourceDirName:"Vue",slug:"/Vue/",permalink:"/note/docs/Vue/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Vue/index.md",tags:[],version:"current",lastUpdatedAt:1693497600,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,last_update:{date:"2023/09/01"},title:"Vue",description:"vue",keywords:["vue"]},sidebar:"myAutogeneratedSidebar",previous:{title:"TypeScript",permalink:"/note/docs/TypeScript/"},next:{title:"Regular Expression",permalink:"/note/docs/"}},p={},l=[{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],s={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vue \u53ef\u4ee5\u76f4\u63a5\u5728 HTML \u5f15\u5165 script \u4f86\u4f7f\u7528\uff0c\u4f8b\u5982")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\n  </head>\n  <body>\n    <div id="app">{{ message }}</div>\n\n    <script type="module">\n      const { createApp, ref } = Vue;\n      createApp({\n        setup() {\n          const message = ref("Hello vue!");\n          return {\n            message,\n          };\n        },\n      }).mount("#app");\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5beb\u6210 vue \u6a94\u6848\u7684\u8a71\u6703\u662f\u4ee5\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'<script setup>\nimport { ref } from "vue";\nconst message = ref("Hello vue!");\n<\/script>\n\n<template>{{ message }}</template>\n')),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cn.vuejs.org/tutorial/#step-1"},"\u6559\u5b78"))))}d.isMDXComponent=!0}}]);