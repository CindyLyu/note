"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[853],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(a),c=r,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(2962),r=(a(9496),a(9613));const i={sidebar_position:3,last_update:{date:"2023/1/24"},title:"Flex\u3001Grid",description:"Flex\u3001Grid",keywords:["css","flex","grid"]},l=void 0,p={unversionedId:"HTML & CSS/grid-and-flex",id:"HTML & CSS/grid-and-flex",title:"Flex\u3001Grid",description:"Flex\u3001Grid",source:"@site/docs/HTML & CSS/grid-and-flex.md",sourceDirName:"HTML & CSS",slug:"/HTML & CSS/grid-and-flex",permalink:"/note/docs/HTML & CSS/grid-and-flex",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/HTML & CSS/grid-and-flex.md",tags:[],version:"current",lastUpdatedAt:1674489600,formattedLastUpdatedAt:"Jan 23, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,last_update:{date:"2023/1/24"},title:"Flex\u3001Grid",description:"Flex\u3001Grid",keywords:["css","flex","grid"]},sidebar:"myAutogeneratedSidebar",previous:{title:"CSS",permalink:"/note/docs/HTML & CSS/css"},next:{title:"Canvas",permalink:"/note/docs/HTML & CSS/canvas"}},o={},m=[{value:"Grid",id:"grid",level:3},{value:"Flex",id:"flex",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"grid"},"Grid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"grid-auto-flow: column"),"\uff1a\u6a6b\u5f0f\u7684\u6392\u5217\u986f\u793a\u6216\u76f4\u63a5\u5beb ",(0,r.kt)("inlineCode",{parentName:"p"},"grid-template-columns")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d ",(0,r.kt)("inlineCode",{parentName:"li"},"grid-auto-flow: row")," \u7531\u4e0a\u5230\u4e0b\u6392\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u5f8c\u9762\u53ef\u4ee5\u591a\u5beb ",(0,r.kt)("inlineCode",{parentName:"li"},"dense")," \u53c3\u6578\u8b93\u7db2\u683c\u512a\u5148\u8003\u616e\u586b\u6eff\uff0c\u800c\u4e0d\u662f\u4f9d\u64da\u539f\u672c\u7684\u9806\u5e8f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))"),"\uff1a\u5b9a\u7fa9\u6bcf\u4e00\u6b04\u5bec\uff0c\u8b93\u5167\u5bb9\u81ea\u5df1\u4ee5\u9069\u5408\u7684\u6578\u91cf\u986f\u793a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"repeat \u88e1\u9762\u53ef\u4ee5\u5beb ",(0,r.kt)("inlineCode",{parentName:"li"},"auto-fit"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"auto-fill"),"\uff0c\u5dee\u5225\u5728\u65bc ",(0,r.kt)("inlineCode",{parentName:"li"},"auto-fit")," \u6703\u586b\u6eff container\uff0c\u4f46 ",(0,r.kt)("inlineCode",{parentName:"li"},"auto-fill")," \u4e0d\u6703\uff08",(0,r.kt)("a",{parentName:"li",href:"https://2l81wr.csb.app/"},"\u7bc4\u4f8b"),"\uff09\uff1b\u6216\u76f4\u63a5\u5beb\u6578\u5b57\u4ee3\u8868\u91cd\u8907\u5e7e\u6b21 ",(0,r.kt)("inlineCode",{parentName:"li"},"repeat(3, 1fr)"),"\uff0c\u5b9a\u7fa9\u6bcf\u4e00\u5217\u5bec\uff0c\u8b93\u7db2\u683c\u9650\u5b9a\u91cd\u8907 3 \u6b21\uff0c\u6bcf\u500b\u90fd\u662f\u4e00\u7b49\u4efd\uff0c\u4e5f\u53ef\u4ee5\u5beb\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"repeat(3, 20px 10px 30px)")," \u5c31\u6703\u5148\u986f\u793a 20px \u2192 10px \u2192 30px \u2192 20px\u2026."),(0,r.kt)("li",{parentName:"ul"},"\u5f8c\u8005\u53c3\u6578\u5beb ",(0,r.kt)("inlineCode",{parentName:"li"},"minmax(100px, 1fr)")," \u4ee3\u8868\u6700\u5c0f\u5bec\u5ea6\u70ba 100px\uff0c\u6700\u5927\u5247\u70ba\u4e00\u7b49\u5206\uff1bminmax(100px, auto) \u9650\u5b9a\u6700\u5c0f\u70ba 100px\uff0c\u6700\u5927\u5247\u662f auto",(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"fr \u70ba fraction \u4e2d\u6587\u662f\u5206\u6578\u7684\u610f\u601d\uff0c\u7528\u5728 grid \u88e1\u53ef\u4ee5\u60f3\u6210\u662f\u5e7e\u7b49\u4efd"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grid-template-columns: 20px repeat(3, 1fr) 20px")," \u4ee3\u8868\u6700\u5de6\u53ca\u6700\u53f3\u662f\u5206\u5225 20px \u7684\u6b04\u4f4d\uff0c\u4e2d\u9593\u5247\u5e73\u5747\u5206\u914d 3 \u7b49\u4efd\u7684\u6b04\u4f4d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grid-template-columns: 75px 3fr 2fr")," \u4ee3\u8868\u7b2c\u4e00\u6b04\u4f4d\u4f54 75px \u5bec\uff0c\u5f8c\u9762\u5269\u9918\u5bec\u5ea6\u5e73\u5747\u5206\u6210 5 \u7b49\u5206\uff0c\u5206\u5225\u4f54\u64da 3 \u7b49\u5206\u53ca 2 \u7b49\u5206"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"grid-template-rows")," \u5b9a\u7fa9\u6bcf\u4e00\u5217\u884c\u9ad8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"grid-template")," \u70ba\u7e2e\u5beb\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"grid-template: repeat(3, 1fr) / repeat(3, 1fr)")," \u524d\u8005\u4ee3\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"grid-template-rows"),"\uff1b\u5f8c\u8005\u4ee3\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"grid-template-columns"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"grid-auto-columns: 100px")," \u8b93\u7db2\u683c\u5bec 100px")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"grid-auto-rows: 100px")," \u8b93\u7db2\u683c\u9577 100px")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"grid-template-areas")," \u5b9a\u7fa9\u6bcf\u683c\u7684\u540d\u7a31\uff0c\u4e00\u884c\u4e00\u500b\u5b57\u4e32\uff0c\u7528\u7a7a\u767d\u5340\u9694")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"grid-column: span 2")," \u4ee3\u8868\u6b64\u6b04\u4f4d\u4f54\u64da\u5169\u683c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"grid-column-start")," \u53ca ",(0,r.kt)("inlineCode",{parentName:"li"},"grid-column-end")," \u7684\u7e2e\u5beb"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u76f4\u63a5\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"grid-column: auto / span 2")," \u5206\u5225\u5beb\uff0c\u524d\u8005\u4ee3\u8868 ",(0,r.kt)("inlineCode",{parentName:"li"},"grid-column-start")," \u5f8c\u8005\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"grid-column-end"),"\uff0c\u5982\u679c\u53ea\u5beb\u4e00\u500b\u53c3\u6578\u5c31\u4ee3\u8868\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"grid-column-start"),"\uff0c\u53e6\u5916 ",(0,r.kt)("inlineCode",{parentName:"li"},"grid-column-end")," \u5247\u70ba auto"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grid-column: 1 / 3")," \u4ee3\u8868\u5f9e 1 \u958b\u59cb\u986f\u793a\u5230 2 \u7684\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u5beb -1 \u4ee3\u8868\u5f9e\u6700\u5f8c\u958b\u59cb"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"grid-area")," \u53ef\u4ee5\u586b\u5beb\u56db\u500b\u6578\u503c\uff0c\u5206\u5225\u4ee3\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"grid-row-start"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"grid-column-start"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"grid-row-end"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"grid-row-start"),"\uff0c\u7528 / \u5206\u9694\u958b\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"grid-area: 1 / 1 / 1 / 1"),";")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"gap")," \u8a2d\u5b9a\u9593\u8ddd\uff0c\u5206\u5225\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"column-gap")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"row-gap")," \u7684\u7e2e\u5beb\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"gap: 10px 20px"),"\uff0c\u8b93\u5de6\u53f3\u9593\u8ddd\u70ba 10px\uff1b\u4e0a\u4e0b\u9593\u8ddd\u70ba 20px")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"justify-content")," \u8a2d\u5b9a\u884c\u7684\u5de6\u53f3\u4f4d\u7f6e\uff0c\u53ef\u586b\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"end"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"center"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"left"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"right"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"space-between"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"space-evenly"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"space-around"),"\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"align-items")," \u8a2d\u5b9a\u884c\u7684\u4e0a\u4e0b\u4f4d\u7f6e\uff0c\u53ef\u586b\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"baseline"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"start"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"end"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"stretch"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"center"),"\uff0c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"order")," \u6578\u503c\u8d8a\u5927\u6392\u5e8f\u8d8a\u5f8c\u9762\uff0c\u9810\u8a2d ",(0,r.kt)("inlineCode",{parentName:"p"},"order: 0"),"\uff0c0 \u6703\u6392\u5728 1 \u524d\u9762"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.container {\n  grid-template-areas:\n    "a b c d e"\n    "f g h i j"\n    "k l m n o";\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/grid-dp7wzg?file=/index.html"},"\u7df4\u7fd2 Grid"))),(0,r.kt)("h3",{id:"flex"},"Flex"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b50\u5c64\u8a2d\u5b9a margin \u5f8c\u6703\u5c07\u5269\u9918\u7a7a\u9593\u5206\u914d\u5230 margin \u53bb\uff0c\u6240\u4ee5\u53ef\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"margin-left: auto")," \u8b93\u9805\u76ee\u7f6e\u53f3"),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u5c64\u8a2d\u5b9a\u7684 margin \u6703\u5927\u65bc\u7236\u5c64\u8a2d\u5b9a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"justify-content")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"align-items"))),(0,r.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/coco1s/p/10910588.html"},"\u63a2\u79d8 flex \u4e0a\u4e0b\u6587\u4e2d\u795e\u5947\u7684\u81ea\u52a8 margin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/46757975"},"\u6700\u5168\uff5e Grid vs Flex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=TUD1AWZVgQ8&ab_channel=WebDevSimplified"},"Top 10 Advanced CSS Responsive Design Concepts You Should Know")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10248418"},"[Day19] grid-template \u5c6c\u6027\u4e4b rows/columns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10248937"},"[Day20] grid-template \u5c6c\u6027\u4e4b areas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10249124"},"[Day21] grid-auto \u5c6c\u6027\u4e4b flow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10249146"},"[Day22] grid-auto \u5c6c\u6027\u4e4b rows/columns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10250694"},"[Day24] grid gap \u76f8\u95dc\u5c6c\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10251608"},"[Day25] grid \u5bb9\u5668\u5c0d\u9f4a\u5c6c\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cssgridgarden.com/#zh-tw"},"GRID GARDEN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template"},"MDN - grid-template")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/complete-guide-grid/"},"A Complete Guide to CSS Grid"))))}u.isMDXComponent=!0}}]);