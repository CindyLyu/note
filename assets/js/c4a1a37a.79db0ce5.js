"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[691],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(m,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(2962),r=(n(9496),n(9613));const l={sidebar_position:1},i="Command Line",o={unversionedId:"Other/command-line",id:"Other/command-line",title:"Command Line",description:"- $ sudo chmod -R 777 [name] \u7d66\u8207\u7576\u524d\u96fb\u8166\u6240\u6709\u4f7f\u7528\u8005\u6b64\u8cc7\u6599\u593e\u6216\u6a94\u6848\u6700\u9ad8\u6b0a\u9650",source:"@site/docs/Other/command-line.md",sourceDirName:"Other",slug:"/Other/command-line",permalink:"/note/docs/Other/command-line",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Other/command-line.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"\u88fd\u4f5c Node.js Package",permalink:"/note/docs/Node.js/create-node-module"},next:{title:"\u7cfb\u7d71",permalink:"/note/docs/Other/terminal"}},m={},p=[{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],u={toc:p};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line"},"Command Line"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ sudo chmod -R 777 [name]")," \u7d66\u8207\u7576\u524d\u96fb\u8166\u6240\u6709\u4f7f\u7528\u8005\u6b64\u8cc7\u6599\u593e\u6216\u6a94\u6848\u6700\u9ad8\u6b0a\u9650",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo")," \u70ba super user do"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chmod")," \u5168\u540d\u70ba change mode"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-R")," \u905e\u8ff4\u8b93\u5e95\u4e0b\u7684\u6240\u6709\u8cc7\u6599\u593e\u53ca\u6a94\u6848\u90fd\u6709\u9019\u6a23\u7684\u6b0a\u9650"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"777")," \u4ee3\u8868\u64c1\u6709\u8005\u3001\u64c1\u6709\u8005\u7684\u7fa4\u7d44\u3001\u5176\u4ed6\u4eba\u90fd\u6709\u53ef\u8b80\u53d6\u3001\u53ef\u5beb\u5165\u3001\u53ef\u57f7\u884c\u7684\u6b0a\u9650\uff08\u7121\u6575\u72c0\u614b\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"755")," \u4ee3\u8868\u64c1\u6709\u8005\u53ef\u8b80\u53d6\u3001\u53ef\u5beb\u5165\u3001\u53ef\u57f7\u884c\uff1b\u64c1\u6709\u8005\u7684\u7fa4\u7d44\u548c\u5176\u4ed6\u4eba\u53ef\u8b80\u53d6\u548c\u57f7\u884c\uff0c\u4f46\u6c92\u6709\u5beb\u5165\u7684\u6b0a\u9650"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ ls -al")," \u53ef\u4ee5\u770b\u5230\u7684\u7576\u524d\u5e95\u4e0b\u7684\u8cc7\u6599\u593e\u53ca\u6a94\u6848\u7684\u6b0a\u9650\u53ca\u4e00\u4e9b\u76f8\u95dc\u8cc7\u6599",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ ls -a")," \u689d\u5217\u51fa\u6240\u6709\u6a94\u6848\u5305\u542b .. \u7684\u96b1\u85cf\u6a94"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ ls -l")," \u689d\u5217\u51fa\u6240\u6709\u6a94\u6848\u4e26\u5217\u51fa\u6b0a\u9650\u53ca\u683c\u5f0f\u7b49\u8a73\u7d30\u8cc7\u6599\n",(0,r.kt)("img",{alt:"terminal screenshot",src:n(3654).Z,width:"1280",height:"256"})),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b04\u4f4d\u7684\u5167\u5bb9\u8aaa\u660e\u6b0a\u9650",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6709\u5341\u78bc\uff0c\u7b2c\u4e00\u78bc\u5982\u679c\u662f d \u4ee3\u8868\u8cc7\u6599\u593e\uff0c\u5982\u679c\u662f - \u4ee3\u8868\u6a94\u6848"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\u7684\u4e5d\u78bc\uff0c\u5206\u5225\u4e09\u500b\u70ba\u4e00\u7d44\uff0c\u6240\u4ee5\u6703\u6709\u4e09\u7d44\uff0c\u9019\u4e09\u7d44\u5206\u5225\u4ee3\u8868\u64c1\u6709\u8005\u3001\u64c1\u6709\u8005\u7684\u7fa4\u7d44\u3001\u5176\u4ed6\u4eba\u7684\u6b0a\u9650\uff0c\u800c\u5167\u5bb9\u53ef\u80fd\u6703\u6709 r\u3001w\u3001x\u3001-",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r")," read \u8b80\u53d6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"w")," write \u5beb\u5165"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," execute \u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," \u6c92\u6709\u9019\u500b\u6b0a\u9650"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u4e0a\u5716\u7684\u6700\u5f8c\u4e00\u500b test.js \u6a94\u6848\u70ba\u4f8b\uff0c\u6b0a\u9650\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"-rw-r--r--"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u78bc\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," \u4ee3\u8868\u6a94\u6848"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u7d44\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"rw-")," \u4ee3\u8868\u64c1\u6709\u8005\u7684\u6b0a\u9650\u70ba\u53ef\u8b80\u3001\u53ef\u5beb\u3001\u4e0d\u53ef\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u7d44\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"r--")," \u4ee3\u8868\u64c1\u6709\u7684\u7fa4\u7d44\u70ba\u53ef\u8b80\u53d6\u3001\u4e0d\u53ef\u5beb\u53ca\u4e0d\u53ef\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u7d44\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"r--")," \u540c\u4e0a\uff0c\u4ee3\u8868\u5176\u4ed6\u4eba\u70ba\u53ef\u8b80\u53d6\u3001\u4e0d\u53ef\u5beb\u53ca\u4e0d\u53ef\u57f7\u884c"))))))))),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8a62\u7279\u5b9a port \u662f\u5426\u6709\u4f7f\u7528\u53ca\u4ed6\u7684 process ID\uff08PID) ",(0,r.kt)("inlineCode",{parentName:"li"},"$ lsof -i :3001"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lsof")," list open files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i ")," \u4f7f\u7528 IPV","[46]"," address \u5f8c\u9762\u53ef\u4ee5\u63a5 port \u4f86\u67e5\u8a62"))),(0,r.kt)("li",{parentName:"ul"},"\u7d42\u6b62 process ID ",(0,r.kt)("inlineCode",{parentName:"li"},"$ kill -9 <PID>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-9")," \u5f37\u5236\u505c\u6b62\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-15")," \u7528\u6b63\u5e38\u7684\u7a0b\u5e8f\u505c\u6b62\u57f7\u884c\uff08\u9810\u8a2d\uff0c\u4ee3\u8868 ",(0,r.kt)("inlineCode",{parentName:"li"},"$ kill :3001")," \u5c31\u7b49\u65bc ",(0,r.kt)("inlineCode",{parentName:"li"},"$ kill -15 :3001"),"\uff09")))),(0,r.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/719996/how-can-i-give-full-permission-to-folder-and-subfolder"},"How can I give full permission to folder and subfolder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10218257"},"\u3010Day7\u3011\u57fa\u672c\u6307\u4ee4\u5011(4)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/Chmod"},"chmod \u7dad\u57fa\u767e\u79d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/zh-tw/aix/7.1?topic=c-chmod-command"},"chmod Command")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.atatus.com/blog/ls-command-in-linux-with-example/"},'Linux "ls" Command with Examples')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/VIP099/article/details/104810960"},"Linux \u7cfb\u5217\uff1a 777 755 \u533a\u522b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3855127/find-and-kill-process-locking-port-3000-on-mac"},"Find (and kill) process locking port 3000 on Mac [closed]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.gtwang.org/linux/linux-kill-killall-xkill/"},"\u5728 Linux \u4e2d\u4f7f\u7528 kill\u3001killall \u8207 xkill \u7b49\u6307\u4ee4\u5f37\u8feb\u95dc\u9589\u7a0b\u5f0f"))))}s.isMDXComponent=!0},3654:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/permission-f61720879196f232cd8ee8f3414c7598.png"}}]);