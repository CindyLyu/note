"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[682],{9613:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>p});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(o),p=r,g=m["".concat(c,".").concat(p)]||m[p]||i[p]||a;return o?n.createElement(g,u(u({ref:t},s),{},{components:o})):n.createElement(g,u({ref:t},s))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,u=new Array(a);u[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var d=2;d<a;d++)u[d]=o[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4898:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>i,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(2962),r=(o(9496),o(9613));const a={sidebar_position:1},u="submodule",l={unversionedId:"git/create-node-module",id:"git/create-node-module",title:"submodule",description:"\u65b0\u589e submodule",source:"@site/docs/git/create-node-module.md",sourceDirName:"git",slug:"/git/create-node-module",permalink:"/note/docs/git/create-node-module",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git/create-node-module.md",tags:[],version:"current",lastUpdatedAt:1667568023,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"You Might Not Need an Effect",permalink:"/note/docs/React/you-might-not-need-an-effect"}},c={},d=[{value:"\u65b0\u589e submodule",id:"\u65b0\u589e-submodule",level:3},{value:"\u66f4\u65b0 submodule",id:"\u66f4\u65b0-submodule",level:3},{value:"\u7576 clone \u5c08\u6848\u4e26\u542b\u6709 submodule \u6642",id:"\u7576-clone-\u5c08\u6848\u4e26\u542b\u6709-submodule-\u6642",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],s={toc:d};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"submodule"},"submodule"),(0,r.kt)("h3",{id:"\u65b0\u589e-submodule"},"\u65b0\u589e submodule"),(0,r.kt)("p",null,"\u5230\u8a72\u5c08\u6848\u5e95\u4e0b\u8f38\u5165\u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git submodule add <respository>\n\n$ git submodule add https://github.com/CindyLyu/Fake_API.git\n")),(0,r.kt)("p",null,"\u5c31\u6703\u5728\u8a72\u5c08\u6848\u5167\u767c\u73fe\u591a\u4e86\u4e00\u500b\u6a94\u6848 \xa0.gitmodule\uff0c\u6253\u958b\u4f86\u5167\u5bb9\u6703\u6709"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[submodule "Fake_API"]\n path = Fake_API\n url = https://github.com/CindyLyu/Fake_API.git\n')),(0,r.kt)("p",null,"\u4e26\u4e14\u4e5f\u6703\u767c\u73fe\u591a\u4e00\u500b Fake_API \u7684\u8cc7\u6599\u593e\uff08\u5f88\u96a8\u610f\u627e\u7684\u4e00\u500b repository \u7576\u4f5c submodule\uff09\n\u5728 commit \u6642\u4e5f\u6703\u767c\u73fe\u6709\u9019\u5169\u500b\u65b0\u7684\u5167\u5bb9\u9700\u8981\u4e00\u8d77 commit"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"terminal screenshot",src:o(6669).Z,width:"346",height:"134"})),(0,r.kt)("p",null,"commit \u5b8c\u4e26 push \u4e0a\u53bb GitHub \u6642\u5c31\u6703\u767c\u73fe\u5728\u525b\u525b\u65b0\u589e\u7684 Fake_API \u591a\u500b @ \u7b26\u865f\uff0c\u9ede\u9032\u53bb\u4e5f\u6703\u76f4\u63a5\u9023\u7d50\u5230 Fake_API \u9019\u500b repository \u88e1\u9762\uff08\u89e3\u958b\u4e4b\u524d\u60f3\u8aaa\u70ba\u4f55\u770b\u5230\u5225\u4eba\u7684 repository \u4e2d\u7684\u8cc7\u6599\u593e\u6703\u6709 @ \u7684\u7591\u554f\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github page",src:o(1984).Z,width:"1006",height:"397"})),(0,r.kt)("h3",{id:"\u66f4\u65b0-submodule"},"\u66f4\u65b0 submodule"),(0,r.kt)("p",null,"\u7576 submodule \uff08\u7bc4\u4f8b\u4e2d\u7684 Fake_API\uff09\u6709\u66f4\u65b0\u5167\u5bb9\u5f8c\uff0c\u8981\u540c\u6b65\u66f4\u65b0\u5230\u76ee\u524d repository \u4e2d\u7684 submodule \u5c31\u8981\u50cf\u5e73\u5e38 pull \u4e0b\u4f86\u7684\u65b9\u5f0f\u4e00\u6a23\u3002\n\u5148\u5207\u63db\u5230 Fake_API \u76ee\u9304\u5e95\u4e0b\uff0c\u5728\u57f7\u884c\u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git pull origin master\n")),(0,r.kt)("p",null,"\u4f86\u66f4\u65b0 submodule\uff0c\u4e26\u4e14\u5728\u4e4b\u5f8c commit \u7684\u6642\u5019\u4e00\u8d77\u5c07 submodule \u66f4\u65b0\u7684\u90e8\u5206\u505a commit\u3002"),(0,r.kt)("h3",{id:"\u7576-clone-\u5c08\u6848\u4e26\u542b\u6709-submodule-\u6642"},"\u7576 clone \u5c08\u6848\u4e26\u542b\u6709 submodule \u6642"),(0,r.kt)("p",null,"clone \u4e0b\u4f86\u96d6\u7136\u4e5f\u6703\u5305\u542b submodule \u7684\u76ee\u9304\u53ca \xa0.gitmodules \u6a94\u6848\uff0c\u4f46\u6703\u767c\u73fe \u9ede\u9032 submodule \u76ee\u9304\u5f8c\u662f\u7a7a\u7684\u5167\u5bb9\u3002\n\u9019\u6642\u5019\u6703\u9700\u8981\u5148\u57f7\u884c\u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git submodule init\n")),(0,r.kt)("p",null,"\u57f7\u884c\u5b8c submodule init \u5c31\u6703\u767c\u73fe\u5728 \xa0.git/config \u6a94\u6848\u4e2d\u591a submodule \u7684\u76f8\u95dc\u8cc7\u8a0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[submodule "Fake_API"]\n active = true\n url = https://github.com/CindyLyu/Fake_API.git\n')),(0,r.kt)("p",null,"\u63a5\u8457\u57f7\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git submodule update\n")),(0,r.kt)("p",null,"\u5c31\u6703\u5c07 submodule \u76ee\u9304\u540c\u6b65\u66f4\u65b0\u4e86\uff01"),(0,r.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.wu-boy.com/2011/09/introduction-to-git-submodule/"},"Git Submodule \u4ecb\u7d39\u8207\u4f7f\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-submodule"},"git document"))))}i.isMDXComponent=!0},1984:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/github-145de0f6a14a98b87a54b6c4bbd15fb0.png"},6669:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);