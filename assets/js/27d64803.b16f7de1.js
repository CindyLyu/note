"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[157],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(2962),a=(r(9496),r(9613));const o={last_update:{date:"2023/11/20"},title:"D3.js",description:"D3.js",keywords:["d3"]},i="D3.js",l={unversionedId:"Other/d3",id:"Other/d3",title:"D3.js",description:"D3.js",source:"@site/docs/Other/d3.md",sourceDirName:"Other",slug:"/Other/d3",permalink:"/note/docs/Other/d3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Other/d3.md",tags:[],version:"current",lastUpdatedAt:1700409600,formattedLastUpdatedAt:"Nov 19, 2023",frontMatter:{last_update:{date:"2023/11/20"},title:"D3.js",description:"D3.js",keywords:["d3"]},sidebar:"myAutogeneratedSidebar",previous:{title:"Command Line",permalink:"/note/docs/Other/command-line"},next:{title:"Next.js",permalink:"/note/docs/Other/nextjs"}},s={},c=[{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"d3js"},"D3.js"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5168\u540d\u70ba\uff08Data-Driven Documents\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{alt:"d3-function",src:r(9052).Z,width:"2194",height:"1434"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scaleLinear")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"scaleLog")," \u7dda\u6027/\u6307\u6578\u7e2e\u653e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"domain \u8f38\u5165\u6578\u503c\u7bc4\u570d"),(0,a.kt)("li",{parentName:"ul"},"range \u8f38\u51fa\u7bc4\u570d"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scaleLinear()")," \u7528\u7dda\u6027\u7684\u65b9\u5f0f\u986f\u793a\uff1b",(0,a.kt)("inlineCode",{parentName:"li"},"scaleOrdinal()")," \u6703\u662f\u4ee5\u5e8f\u5217\u4f86\u986f\u793a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"d3.range(10)")," \u53ef\u4ee5\u7522\u751f 0~9 \u7684\u5167\u5bb9\u9663\u5217"),(0,a.kt)("li",{parentName:"ul"},"\u7df4\u7fd2\u5167\u5bb9 ",(0,a.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/d3-practice-3fp59k"},"codesandbox"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/d3-svg-sytfxh?file=/index.html"},"SVG \u7df4\u7fd2"))),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hahow.in/courses/586fae97a8aae907000ce721/discussions?item=5a1e1755a2c4b000589dda4f"},"\u55ae\u5143 7 - D3.js \u8996\u89ba\u5316\u8cc7\u6599\u7684\u5229\u5668 (\u5165\u9580)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hackmd.io/@frank890417/S1-vUm_7m?type=view"},"\u55ae\u5143 7 - D3.js \u8996\u89ba\u5316\u8cc7\u6599\u7684\u5229\u5668 (\u5165\u9580) - \u8b1b\u7fa9"))))}d.isMDXComponent=!0},9052:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/d3-function-801f97fdc8fd13346a34f29eabff28a9.png"}}]);