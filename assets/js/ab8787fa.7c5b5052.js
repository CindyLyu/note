"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[127],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7622),r=(n(9496),n(9613));const l={sidebar_position:4,last_update:{date:"2023/03/10"},title:"Canvas",description:"Canvas",keywords:["canvas"]},i="Canvas",o={unversionedId:"HTML & CSS/canvas",id:"HTML & CSS/canvas",title:"Canvas",description:"Canvas",source:"@site/docs/HTML & CSS/canvas.md",sourceDirName:"HTML & CSS",slug:"/HTML & CSS/canvas",permalink:"/note/docs/HTML & CSS/canvas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/HTML & CSS/canvas.md",tags:[],version:"current",lastUpdatedAt:1678377600,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,last_update:{date:"2023/03/10"},title:"Canvas",description:"Canvas",keywords:["canvas"]},sidebar:"myAutogeneratedSidebar",previous:{title:"Flex\u3001Grid",permalink:"/note/docs/HTML & CSS/grid-and-flex"},next:{title:"HTML",permalink:"/note/docs/HTML & CSS/html"}},c={},s=[{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"canvas"},"Canvas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<canvas id="mycanvas"></canvas>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let canvas = document.getElementById("mycanvas\u201d) // \u88fd\u4f5c\u4e00\u584a\u756b\u5e03\u540d\u70ba canvas\nlet ctx = canvas.getContext(\'2d\')\n\n// \u8a2d\u5b9a\u756b\u5e03\u5c3a\u5bf8\uff0c\u4e4b\u5f8c ctx \u7684\u5167\u5bb9\u5c31\u6703\u756b\u5728\u88e1\u9762\ncanvas.width = 400\ncanvas.height = 400\nctx.beginPath() // \u958b\u59cb\u7e6a\u5716\nctx.moveTo(100, 100) // \u4ee3\u8868\u756b\u7b46\u958b\u59cb\u7684\u4f4d\u7f6e\nctx.lineTo(300, 100) // \u8981\u756b\u53bb\u54ea\u88e1\u7684\u5167\u5bb9\uff0c\u76f8\u8f03\u65bc\u539f\u9ede\u7684\u8ddd\u96e2\u4ee3\u8868 x \u8ef8\u53ca y \u8ef8\nctx.lineTo(300, 300)\nctx.lineTo(100, 300)\nctx.closePath()\nctx.fill() // fill \u5c31\u7121\u9700 closePath\uff0c\u6703\u81ea\u5df1\u9023\u63a5\u8d77\u4f86\uff0cstroke \u5c31\u9700\u8981 closePath \u6216\u662f\u6700\u5f8c\u4e00\u689d\u7dda lineTo\n// ctx.stroke()\n// ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"\n// \u6539\u8b8a stroke \u7684\u984f\u8272\n// \u6539\u8b8a stroke \u7684\u7c97\u7d30\u5c31\u662f\u7528 ctx.lineWidth = 15\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6c92\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"beginPath()")," \u5c31\u6703\u5ef6\u7e8c\u4e0a\u4e00\u500b\u6700\u5f8c\u756b\u7684\u9ede\u958b\u59cb\u9023\u63a5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u756b\u4e00\u500b\u5713")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"ctx.arc(200, 200, 100, 0, 2 * Math.PI);\n// \u4e2d\u5fc3\u9ede\u7684\u4f4d\u7f6e X, \u4e2d\u5fc3\u9ede\u7684\u4f4d\u7f6e Y, \u534a\u5f91, \u5f9e\u54ea\u958b\u59cb, \u54ea\u88e1\u7d50\u675f(Math.PI \u534a\u5713)\n// 2*Math.PI \u5c31\u662f 360 \u5ea6\n// \u9810\u8a2d\u90fd\u662f\u5f9e\u9006\u6642\u91dd\u958b\u59cb\u756b\uff0c\u5982\u679c\u9700\u8981\u6539\u70ba\u9806\u6642\u91dd\u5c31\u662f\u5beb\u7b2c\u516d\u500b\u53c3\u6578\u70ba true\uff0c\u9810\u8a2d\u70ba false\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"180 \u5ea6\u7b49\u65bc \ud835\uded1")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u756b\u4e00\u500b\u65b9\u5f62")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"ctx.rect(300, 300, 50, 50);\n// x \u4f4d\u7f6e, y \u4f4d\u7f6e, \u9577, \u5bec\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u9694\u7dda\u65c1\u908a\u986f\u793a\u6587\u5b57")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"ctx.fillText(text, x, y);\n// \u53c3\u6578\u5206\u5225\u70ba\u8981\u586b\u5165\u7684\u6587\u5b57\u3001x \u8ef8\u4f4d\u7f6e\u3001\uff59\u8ef8\u4f4d\u7f6e\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 fillRect \u76f4\u63a5\u5275\u5efa\u4e00\u500b\u586b\u6eff\u7684\u6b63\u65b9\u5f62\uff08\u4e00\u822c\u6703\u5148\u586b\u8272\u5728\u756b\u7dda\uff0c\u4e0d\u7136\u6846\u7dda\u6703\u88ab\u84cb\u5230\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"ctx.fillRect(300, 300, 50, 50);\n// \u8ddf\u756b\u4e00\u500b\u6b63\u65b9\u5f62\u4e00\u6a23 \uff08x \u4f4d\u7f6e, y \u4f4d\u7f6e, \u5bec, \u9ad8\uff09\n// \u4e5f\u53ef\u4ee5\u7528 strokeRect \u4f86\u756b\u4e00\u500b\u6846\u7dda\u7684\u6b63\u65b9\u5f62\nctx.strokeRect(300, 300, 50, 50);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c07\u539f\u672c\u7684\u7e6a\u88fd\u6e05\u9664")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'ctx.clearRect(0, 0, 400, 400);\n// x \u4f4d\u7f6e, y \u4f4d\u7f6e, \u5bec, \u9ad8\n\n// \u4e5f\u53ef\u4ee5\u7528\u7559\u8457\u6b98\u5f71\u7684\u65b9\u5f0f\u4f86\u53d6\u4ee3\u5b8c\u5168\u6e05\u9664\nctx.fillStyle = "rgba(255, 255, 255, 0.2)";\nctx.fillRect(0, 0, 400, 400);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"requestAnimationFrame()\uff1a\u512a\u5316\u7248\u7684 setTimeout"),(0,r.kt)("li",{parentName:"ul"},"ctx.save()\uff1a\u5c07\u7576\u524d\u72c0\u614b\u5b58\u5165 stack"),(0,r.kt)("li",{parentName:"ul"},"ctx.restore()\uff1a\u91dd\u5c0d ctx.translate()\u3001ctx.scale()\u3001ctx.rotate() \u7684\u52d5\u4f5c\u9084\u539f\u5230\u4e0a\u4e00\u500b\u6b65\u9a5f\uff0c\u4ee5 stack \u7684\u65b9\u5f0f\uff0c\u5148\u9032\u5f8c\u51fa"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c07\u5167\u5bb9\u5beb\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx.save()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx.restore()")," \u4e2d\u9593\uff0c\u4e4b\u5f8c\u5beb\u7684\u6771\u897f\u5c31\u4e0d\u6703\u88ab\u9019\u4e2d\u9593\u7684\u6771\u897f\u7d66\u5f71\u97ff\uff08\u4f8b\u5982\u5c07 ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx.translate()")," \u53bb\u79fb\u52d5\u4f4d\u7f6e\u4e26\u5beb\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx.save()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx.restore()")," \u4e2d\u9593\uff0c\u63a5\u4e0b\u4f86 ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx.restore()")," \u5f8c\u9762\u5beb\u7684\u6771\u897f\u5c31\u4e0d\u6703\u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx.translate()")," \u7d66\u5f71\u97ff\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5728 canvas \u4e2d\u7684\u5ea7\u6a19\u7cfb\u8ddf\u4e00\u822c\u8a8d\u77e5\u4e0d\u540c\uff0ccanvas \u662f x \u8ef8\u5f80\u53f3\u53ca y \u8ef8\u5f80\u4e0b\u8d8a\u5927\uff08\u6b63\u5411\uff09\uff0c\u53cd\u4e4b\u4ea6\u7136"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codepen.io/Cindylyu/pen/xxPOyYa"},"\u7df4\u7fd2\u7684 codepen \u5167\u5bb9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10198687"},"\u5f85\u8b80"))),(0,r.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hahow.in/courses/586fae97a8aae907000ce721/discussions"},"\u52d5\u756b\u4e92\u52d5\u7db2\u9801\u7279\u6548\u5165\u9580\uff08JS/CANVAS\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E5%BC%A7%E5%BA%A6"},"\u5f27\u5ea6"))))}m.isMDXComponent=!0}}]);