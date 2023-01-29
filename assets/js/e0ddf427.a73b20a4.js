"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[127],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(2962),i=(n(9496),n(9613));const l={sidebar_position:2,last_update:{date:"2023/1/29"},title:"CSS",description:"css",keywords:["css"]},r="CSS",o={unversionedId:"HTML & CSS/css",id:"HTML & CSS/css",title:"CSS",description:"css",source:"@site/docs/HTML & CSS/css.md",sourceDirName:"HTML & CSS",slug:"/HTML & CSS/css",permalink:"/note/docs/HTML & CSS/css",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/HTML & CSS/css.md",tags:[],version:"current",lastUpdatedAt:1674921600,formattedLastUpdatedAt:"Jan 28, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,last_update:{date:"2023/1/29"},title:"CSS",description:"css",keywords:["css"]},sidebar:"myAutogeneratedSidebar",previous:{title:"Top 10 Advanced CSS Responsive Design Concepts You Should Know",permalink:"/note/docs/HTML & CSS/top-10-css-advanced"},next:{title:"Flex\u3001Grid",permalink:"/note/docs/HTML & CSS/grid-and-flex"}},p={},d=[{value:"text-indent",id:"text-indent",level:3},{value:"text-align",id:"text-align",level:3},{value:"linear-gradient",id:"linear-gradient",level:3},{value:"background-repeat",id:"background-repeat",level:3},{value:"background-size",id:"background-size",level:3},{value:"width",id:"width",level:3},{value:"margin",id:"margin",level:3},{value:"padding",id:"padding",level:3},{value:"right\u3001bottom\u3001top\u3001left",id:"rightbottomtopleft",level:3},{value:":empty",id:"empty",level:3},{value:"\u507d\u5143\u7d20",id:"\u507d\u5143\u7d20",level:3},{value:"table",id:"table",level:3},{value:"\u55ae\u4f4d",id:"\u55ae\u4f4d",level:3},{value:"box-shadow",id:"box-shadow",level:3},{value:"background-image",id:"background-image",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],m={toc:d};function s(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"css"},"CSS"),(0,i.kt)("h3",{id:"text-indent"},"text-indent"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"text-indent")," \u7684\u8ca0\u503c\u8b93\u7b2c\u4e00\u884c\u51f8\u51fa\u53bb")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <style>\n    p {\n      border: solid 1px red;\n      text-indent: -0.5em;\n      padding: 1em 1em 1em 2em;\n      font-size: 20px;\n    }\n  </style>\n</head>\n<body>\n  <p>\n    <i class="fa fa-thumb-tack"></i>\n    <span\n      >This is a static template, there is no bundler or bundling\n      involved!</span\n    >\n  </p>\n</body>\n')),(0,i.kt)("p",null,"\u4ee5\u4e0a\u7a0b\u5f0f\u78bc\u6703\u5448\u73fe\u5982\u4e0b\u5716\n",(0,i.kt)("img",{alt:"text-indent",src:n(2266).Z,width:"862",height:"228"})),(0,i.kt)("h3",{id:"text-align"},"text-align"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"text-align")," \u7684 justify \u53ef\u4ee5\u8b93\u6bcf\u4e00\u884c\u90fd\u5c0d\u9f4a\uff0c\u4e0d\u6703\u6709\u5e7e\u884c\u51f8\u51fa\u53bb\u7684\u60c5\u6cc1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7576 ",(0,i.kt)("inlineCode",{parentName:"li"},"text-align")," \u70ba ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),(0,i.kt)("img",{alt:"text-align-left",src:n(5947).Z,width:"848",height:"240"})),(0,i.kt)("li",{parentName:"ul"},"\u7576 ",(0,i.kt)("inlineCode",{parentName:"li"},"text-align")," \u70ba ",(0,i.kt)("inlineCode",{parentName:"li"},"justify"),(0,i.kt)("img",{alt:"text-align-justify",src:n(3263).Z,width:"868",height:"254"}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5728\u82f1\u6587\u4e0a\u6703\u8b93\u82f1\u6587\u55ae\u5b57\u9593\u7684\u7a7a\u683c\u8b8a\u5927\uff0c\u9700\u8981\u591a\u6ce8\u610f\n",(0,i.kt)("img",{alt:"text-align-justify2",src:n(683).Z,width:"854",height:"234"}))))))),(0,i.kt)("h3",{id:"linear-gradient"},"linear-gradient"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"background-image: linear-gradient(#fff, #000);")," \u53ef\u4ee5\u5beb\u6f38\u5c64\u984f\u8272\uff0c\u4e5f\u53ef\u4ee5\u5beb\u4e0b\u6f38\u5c64\u7684\u65b9\u5411\u6216\u89d2\u5ea6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"linear-gradient(to left, #fff, #000)")," \u7531\u53f3\u958b\u59cb\u767d\u8272\u6f38\u5c64\u5230\u5de6\u8b8a\u9ed1\u8272\uff0c\u7b2c\u4e00\u500b\u53c3\u6578\u4e5f\u53ef\u4ee5\u586b\u5165 to right\u3001to bottom right....."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"linear-gradient(115deg, #fff, #000)")," 115 \u5ea6\u958b\u59cb\u5f9e\u767d\u8272\u5230\u9ed1\u8272\u7684\u6f38\u5c64"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"linear-gradient(115deg, #000, 10%, #fff)")," 115 \u5ea6\u958b\u59cb\u7531\u9ed1\u8272\u958b\u59cb 10% \u7684\u5bec\u5ea6\u5f8c\u5230\u767d\u8272\u7684\u6f38\u5c64")))),(0,i.kt)("h3",{id:"background-repeat"},"background-repeat"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"background-repeat: round")," \u8b93\u5716\u7247 repeat \u586b\u6eff\u4e14\u5728\u4e0d\u88c1\u5207\u5230\u5716\u7247\u7684\u60c5\u6cc1\u4e0b\u586b\u6eff\uff0c\u4f46\u6709\u6a5f\u6703\u6703\u7e2e\u653e\u5230\u5716\u7247\uff0c\u5982\u679c\u4e0d\u8981\u7e2e\u653e\u5230\u5716\u7247\u5c31\u662f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"space"),"\u3002(\u8a73\u7d30\u5716\u7247\u53ef\u898b\u6b64 ",(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10248942"},"\u6559\u5b78"),")")),(0,i.kt)("h3",{id:"background-size"},"background-size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6700\u5e38\u7528\u5230\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"contain")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"cover")," \u5169\u8005\u90fd\u662f\u7b49\u6bd4\u4f8b\u7e2e\u653e\u4e14\u4e0d\u8b8a\u5f62\u5716\u7247\uff0c\u4f46\u524d\u8005\u4e0d\u88c1\u5207\u5716\u7247\uff1b\u5f8c\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"cover")," \u6703\u6709\u6a5f\u6703\u88c1\u5207\u5230\u5716\u7247\u3002")),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"100vw \u4ee3\u8868 100 \u7684\u53ef\u8996\u7a97\u53e3\u5bec\u5ea6\uff0c\u6240\u4ee5\u7576\u6709\u5074\u908a\u7684\u6372\u8ef8\u6642\u5c31\u6703\u591a\u51fa\u4e00\u5c0f\u584a\u5bec\u5ea6\uff0c\u8b8a\u6210\u6703\u6709\u6a6b\u5411\u6372\u8ef8\uff0c100% \u56e0\u70ba\u662f\u7236\u5c64\u5167\u53ef\u904b\u7528\u7684\u5bec\u5ea6\uff0c\u4e5f\u5c31\u662f padding \u5167\u7684\u5bec\u5ea6\uff0c\u6240\u4ee5\u4e0d\u6703\u6709\u6a6b\u5411\u6372\u8ef8\uff0c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"display: inline")," \u4e0d\u652f\u63f4 width \u53ca height")),(0,i.kt)("h3",{id:"margin"},"margin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"margin-left: 10%")," \u4ee3\u8868\u7236\u5c64 width \u7684 10%")),(0,i.kt)("h3",{id:"padding"},"padding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"padding: 10%")," \u4ee3\u8868\u7236\u5c64 width \u7684 10%\uff08\u7121\u8ad6\u8a2d\u5b9a padding \u4e0a\u4e0b\u5de6\u53f3\u70ba 10% \u90fd\u662f\u53d6\u7236\u5c64\u5bec\u5ea6\u7684 10%\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u7576 width: 40% \u53ca ",(0,i.kt)("inlineCode",{parentName:"li"},"padding-bottom: 40%")," \u5c31\u80fd\u505a\u51fa\u4e00\u500b\u7b49\u6bd4\u4f8b\u7684\u6b63\u65b9\u5f62\uff0c\u4e14\u53ef\u4ee5 RWD \u7e2e\u653e\uff0c\u6982\u5ff5\u5c31\u662f\u56e0\u70ba width: 40% \u6703\u662f\u4ee5\u7236\u5c64\u7684 40% \u7576\u4f5c\u5bec\u5ea6\uff0c\u518d\u4f86 ",(0,i.kt)("inlineCode",{parentName:"li"},"padding-bottom: 40%")," \u4e5f\u662f\u4ee5\u7236\u5c64\u7684\u5bec\u5ea6 40% \u7576\u4f5c ",(0,i.kt)("inlineCode",{parentName:"li"},"padding-bottom"))),(0,i.kt)("h3",{id:"rightbottomtopleft"},"right\u3001bottom\u3001top\u3001left"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u642d\u914d ",(0,i.kt)("inlineCode",{parentName:"li"},"position")," \u8a2d\u5b9a ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"top"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"left")," \u624d\u6709\u6548\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"position")," \u53ea\u8981\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," \u4ee5\u5916\u7684\u90fd\u53ef\u4ee5"),(0,i.kt)("li",{parentName:"ul"},"\u7576 ",(0,i.kt)("inlineCode",{parentName:"li"},"position: absolute")," \u6216\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"fixed"),"\u4e0a\uff0c\u56e0\u70ba\u6b64\u5c6c\u6027\u662f\u5c07\u5143\u7d20\u5b9a\u4f4d\u65b0\u7684\u4e00\u5c64\u4e0a\uff0c\u52a0\u4e0a\u5beb\u4e86",(0,i.kt)("inlineCode",{parentName:"li"},"right")," \u53ca ",(0,i.kt)("inlineCode",{parentName:"li"},"left")," \u5f8c\u8b93\u5143\u7d20\u53ef\u4ee5\u6293\u53d6\u5230\u5de6\u53f3\u7684\u7a7a\u9593\uff0c\u6700\u5f8c\u518d\u5beb ",(0,i.kt)("inlineCode",{parentName:"li"},"margin: 0 auto")," \u5c31\u53ef\u4ee5\u8b93\u5143\u7d20\u6c34\u5e73\u7f6e\u4e2d\u5c0d\u9f4a\uff0c\u7f3a\u9ede\u662f\u9019\u500b\u5143\u7d20\u6709\u8981\u56fa\u5b9a\u7684\u5bec\u9ad8\uff08\u7528 % \u6578\u5b9a\u7fa9\u5bec\u9ad8\u4e5f\u53ef\u4ee5\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"position: absolute")," \u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"top"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"left"),"\uff0c\u8b93\u5143\u7d20\u7684\u5bec\u9ad8\u81ea\u884c\u7531\u76ee\u524d\u5167\u5bb9\u53bb\u7522\u751f\uff0c\u505a\u51fa\u4e00\u500b\u84cb\u677f\u5ee3\u544a")),(0,i.kt)("h3",{id:"empty"},":empty"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},":empty")," \u9078\u53d6\u5230\u7a7a\u7684\u5143\u7d20\u4e0d\u8981\u986f\u793a\u5728\u756b\u9762\u4e0a\uff0c\u4e5f\u6e1b\u5c11 JavaScript \u7684\u4e00\u500b\u5224\u65b7")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".box:empty {\n  display: none;\n}\n")),(0,i.kt)("h3",{id:"\u507d\u5143\u7d20"},"\u507d\u5143\u7d20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"content: attr()",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"content \u53ef\u4ee5\u986f\u793a\u591a\u7d44\u5167\u5bb9\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},'content: attr(test) "GOGO"'),"\uff0c\u5c31\u6703\u53bb\u6293\u53d6\u5c6c\u6027\u70ba test \u4e26\u52a0\u4e0a\u300cGOGO\u300d\u4f86\u986f\u793a\u51fa\u4f86"),(0,i.kt)("li",{parentName:"ul"},"\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},":after")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"content")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"attr")," \u53d6\u7528\u5c6c\u6027\u5167\u5bb9\u4f86\u986f\u793a")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <style>\n    .box:after {\n      content: attr(data-tip);\n    }\n  </style>\n</head>\n<body>\n  <div class="box" data-tip="\u6e2c\u8a66">test</div>\n</body>\n\n\x3c!-- content \u5c31\u53ef\u4ee5\u53d6\u7528\u5230 data-tip \u300c\u6e2c\u8a66\u300d\u5169\u5b57\u7684\u5167\u5bb9 --\x3e\n')),(0,i.kt)("h3",{id:"table"},"table"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"table-layout: fixed")," \u8b93\u8868\u683c\u7b49\u5bec\uff0c\u9700\u642d\u914d ",(0,i.kt)("inlineCode",{parentName:"li"},"width: 100%")," \u4f7f\u7528")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"table {\n  table-layout: fixed;\n  width: 100%;\n}\n")),(0,i.kt)("h3",{id:"\u55ae\u4f4d"},"\u55ae\u4f4d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"em\uff1a\u4ee5\u500d\u6578\u7684\u65b9\u5f0f\u4e58\u4e0a\u7236\u5143\u7d20\u7684 px \u503c"),(0,i.kt)("li",{parentName:"ul"},"rem\uff1a\u4ee5\u500d\u6578\u7684\u65b9\u5f0f\u4e58\u4e0a\u6839\u5143\u7d20\u7684 px \u503c"),(0,i.kt)("li",{parentName:"ul"},"%\uff1a\u4ee5\u767e\u5206\u6bd4\u7684\u65b9\u5f0f\u4e58\u4e0a\u7236\u5143\u7d20\u7684 px \u503c\uff08120% \u7b49\u65bc 1.2em)"),(0,i.kt)("li",{parentName:"ul"},"px\uff1a\u7d55\u5c0d\u55ae\u4f4d")),(0,i.kt)("h3",{id:"box-shadow"},"box-shadow"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c3\u6578\u5206\u5225\u70ba offset-x\u3001offset-y\u3001blur-radius\u3001color\uff0c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"offset-x \u8ca0\u503c\u6703\u986f\u793a\u5728\u5143\u7d20\u5de6\u5074"),(0,i.kt)("li",{parentName:"ul"},"offset-y \u8ca0\u503c\u6703\u986f\u793a\u5728\u5143\u7d20\u4e0a\u65b9")))),(0,i.kt)("h3",{id:"background-image"},"background-image"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c07\u906e\u7f69\u76f4\u63a5\u5beb\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"background-image")," \u4e0a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'.box {\n  background-image: linear-gradient(\n      rgba(0, 0, 255, 0.5),\n      rgba(255, 255, 0, 0.5)\n    ), url("url");\n}\n')),(0,i.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10243388"},"Text-indent - \u91d1\u9b5a\u90fd\u80fd\u61c2\u7684 CSS \u5fc5\u5b78\u5c6c\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10243882"},"Text-align - \u91d1\u9b5a\u90fd\u80fd\u61c2\u7684 CSS \u5fc5\u5b78\u5c6c\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10248148"},"Background-image \u4e4b\u4e8c- \u91d1\u9b5a\u90fd\u80fd\u61c2\u7684 CSS \u5fc5\u5b78\u5c6c\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10248942"},"Background-repeat- \u91d1\u9b5a\u90fd\u80fd\u61c2\u7684 CSS \u5fc5\u5b78\u5c6c\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10249362"},"Background-size- \u91d1\u9b5a\u90fd\u80fd\u61c2\u7684 CSS \u5fc5\u5b78\u5c6c\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10251849"},"width & height - \u91d1\u9b5a\u90fd\u80fd\u61c2\u7684 CSS \u5fc5\u5b78\u5c6c\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10252624"},"margin & padding - \u91d1\u9b5a\u90fd\u80fd\u61c2\u7684 CSS \u5fc5\u5b78\u5c6c\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10253814"},"Top\u3001Right\u3001Bottom\u3001Left - \u91d1\u9b5a\u90fd\u80fd\u61c2\u7684 CSS \u5fc5\u5b78\u5c6c\u6027")),(0,i.kt)("li",{parentName:"ul"},"\u91d1\u9b5a\u90fd\u80fd\u61c2\u7684 CSS \u9078\u53d6\u5668\uff08\u66f8\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=PiczFSV9xGg&list=PLqivELodHt3gYOrZe4oVUP4_TNRJunD5P&index=2&ab_channel=CSScoke"},"CSS \u5c08\u5bb6\u5bc6\u6280 2 - CSS Protips - \u963f\u83ab\u65af\u306e\u7db2\u9801\u6599\u7406\u5ba4 | CSS \u6559\u5b78 | \u65b0\u624b\u7db2\u9801\u6559\u5b78")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.oxxostudio.tw/articles/201809/css-font-size.html"},"\u4e00\u6b21\u641e\u61c2 CSS \u5b57\u9ad4\u55ae\u4f4d\uff1apx\u3001em\u3001rem \u548c %")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Web/CSS/box-shadow"},"MDN - box-shadow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image"},"MDN - background-image"))))}s.isMDXComponent=!0},3263:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/text-align-justify-b85e3976608fecf1086f342f52812a0b.png"},683:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/text-align-justify2-b9eac9ef2e47c2e85935954c7c2364c0.png"},5947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/text-align-left-9e6bc972e168cadbd8b93337b30ecc86.png"},2266:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/text-indent-bd66c97549fe0695670f0c2035049c9e.png"}}]);