"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[481],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(2962),o=(n(9496),n(9613));const a={sidebar_position:1},i="\u88fd\u4f5c Node.js Package",l={unversionedId:"Node.js/create-node-module",id:"Node.js/create-node-module",title:"\u88fd\u4f5c Node.js Package",description:"- \u6a94\u6848\u958b\u982d\u65b0\u589e #!/usr/bin/env node \u4ee3\u8868\u6703\u544a\u8a34\u7cfb\u7d71\u53ef\u4ee5\u5728 PATH \u76ee\u9304\u4e2d\u67e5\u8a62 node \u7684\u8def\u5f91\uff08\u56e0\u70ba\u4e0d\u540c\u7684\u7528\u6236 node \u8def\u5f91\u53ef\u80fd\u4e0d\u540c\uff09",source:"@site/docs/Node.js/create-node-module.md",sourceDirName:"Node.js",slug:"/Node.js/create-node-module",permalink:"/note/docs/Node.js/create-node-module",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Node.js/create-node-module.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"Regular Expression",permalink:"/note/docs/"},next:{title:"Command Line",permalink:"/note/docs/Other/command-line"}},p={},c=[{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:4},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u88fd\u4f5c-nodejs-package"},"\u88fd\u4f5c Node.js Package"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a94\u6848\u958b\u982d\u65b0\u589e ",(0,o.kt)("inlineCode",{parentName:"li"},"#!/usr/bin/env node")," \u4ee3\u8868\u6703\u544a\u8a34\u7cfb\u7d71\u53ef\u4ee5\u5728 PATH \u76ee\u9304\u4e2d\u67e5\u8a62 node \u7684\u8def\u5f91\uff08\u56e0\u70ba\u4e0d\u540c\u7684\u7528\u6236 node \u8def\u5f91\u53ef\u80fd\u4e0d\u540c\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," \u65b0\u589e ",(0,o.kt)("inlineCode",{parentName:"li"},'"bin": <file-path>'),"\uff1a\u8b93\u4e4b\u5f8c\u5b89\u88dd\u6b64\u5957\u4ef6\u5f8c\u57f7\u884c\u7684\u6a94\u6848"),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88dd\u5f8c\u5957\u4ef6\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," \u65b0\u589e scripts\uff0c\u5beb ",(0,o.kt)("inlineCode",{parentName:"li"},'"test": <package-name>'))),(0,o.kt)("h4",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pnpm run dev")," \u6642\u4e0d\u6703\u53bb\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"predev"),"\uff0c\u53ef\u4ee5\u5728\u6a94\u6848 ",(0,o.kt)("inlineCode",{parentName:"li"},".npmrc")," \u4e2d\u5beb\u4e0a ",(0,o.kt)("inlineCode",{parentName:"li"},"enable-pre-post-scripts=true")," \u5373\u53ef\u89e3\u6c7a\u3002")),(0,o.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903826344902670"},"#!/usr/bin/env node \u5230\u5e95\u662f\u4ec0\u4e48\uff1f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/creating-node-js-modules"},"Creating Node.js modules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pnpm.io/cli/run#differences-with-npm-run"},"pnpm Defferences with npm run"))))}d.isMDXComponent=!0}}]);