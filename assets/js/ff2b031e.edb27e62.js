"use strict";(self.webpackChunkiobrother=self.webpackChunkiobrother||[]).push([[2550],{3905:function(e,l,t){t.d(l,{Zo:function(){return c},kt:function(){return k}});var n=t(7294);function r(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function i(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?i(Object(t),!0).forEach((function(l){r(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function p(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),a=function(e){var l=n.useContext(o),t=l;return e&&(t="function"==typeof e?e(l):u(u({},l),e)),t},c=function(e){var l=a(e.components);return n.createElement(o.Provider,{value:l},e.children)},s={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},h=n.forwardRef((function(e,l){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=a(t),k=r,d=h["".concat(o,".").concat(k)]||h[k]||s[k]||i;return t?n.createElement(d,u(u({ref:l},c),{},{components:t})):n.createElement(d,u({ref:l},c))}));function k(e,l){var t=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=h;var p={};for(var o in l)hasOwnProperty.call(l,o)&&(p[o]=l[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,u[1]=p;for(var a=2;a<i;a++)u[a]=t[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4526:function(e,l,t){t.r(l),t.d(l,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return s}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),u=["components"],p={sidebar_position:3},o="Shell\u7f16\u7a0b\u5165\u95e8",a={unversionedId:"cpp/shell",id:"cpp/shell",title:"Shell\u7f16\u7a0b\u5165\u95e8",description:"\u7b80\u4ecb",source:"@site/course/cpp/shell.md",sourceDirName:"cpp",slug:"/cpp/shell",permalink:"/course/cpp/shell",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"zmicroSidebar",previous:{title:"Linux\u6700\u4f73\u5165\u95e8",permalink:"/course/cpp/linux"},next:{title:"Linux\u5f00\u53d1\u5de5\u5177",permalink:"/course/cpp/linuxdev"}},c={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7ae0\u8282",id:"\u7ae0\u8282",level:2},{value:"01Shell\u7f16\u7a0b\u57fa\u7840",id:"01shell\u7f16\u7a0b\u57fa\u7840",level:3},{value:"02Shell\u8f93\u5165\u8f93\u51fa",id:"02shell\u8f93\u5165\u8f93\u51fa",level:3},{value:"03Shell\u7b97\u672f\u6269\u5c55",id:"03shell\u7b97\u672f\u6269\u5c55",level:3},{value:"04Shell\u6761\u4ef6\u6d4b\u8bd5",id:"04shell\u6761\u4ef6\u6d4b\u8bd5",level:3},{value:"05Shell\u6761\u4ef6\u4e0e\u5206\u652f\u8bed\u53e5",id:"05shell\u6761\u4ef6\u4e0e\u5206\u652f\u8bed\u53e5",level:3},{value:"06Shell\u5faa\u73af\u8bed\u53e5",id:"06shell\u5faa\u73af\u8bed\u53e5",level:3},{value:"07\u51fd\u6570",id:"07\u51fd\u6570",level:3},{value:"08sed",id:"08sed",level:3},{value:"09awk",id:"09awk",level:3},{value:"10Shell\u4fc4\u7f57\u65af\u65b9\u5757(\u4e0a)",id:"10shell\u4fc4\u7f57\u65af\u65b9\u5757\u4e0a",level:3},{value:"11Shell\u4fc4\u7f57\u65af\u65b9\u5757(\u4e0b)",id:"11shell\u4fc4\u7f57\u65af\u65b9\u5757\u4e0b",level:3}],h={toc:s};function k(e){var l=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},h,t,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shell\u7f16\u7a0b\u5165\u95e8"},"Shell\u7f16\u7a0b\u5165\u95e8"),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"\u4ece\u7a0b\u5e8f\u5458\u7684\u89d2\u5ea6\u6765\u770b\uff0cShell\u672c\u8eab\u662f\u4e00\u79cd\u7528C\u8bed\u8a00\u7f16\u5199\u7684\u7a0b\u5e8f\uff0c\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u6765\u770b\uff0cShell\u662f\u7528\u6237\u4e0eLinux\u64cd\u4f5c\u7cfb\u7edf\u6c9f\u901a\u7684\u6865\u6881\u3002\u5bf9\u4e8eLinux\u7528\u6237\u6765\u8bf4\u638c\u63e1\u4e00\u5b9a\u7684Shell\u77e5\u8bc6\u662f\u5fc5\u8981\u7684\u3002\u300aShell\u7f16\u7a0b\u89c6\u9891\u300b\u603b\u7ed3\u5e38\u7528\u7684Shell\u7f16\u7a0b\u77e5\u8bc6\uff0c\u5e76\u901a\u8fc7Shell\u811a\u672c\u5b9e\u73b0\u4e00\u4e2a\u4fc4\u7f57\u65af\u65b9\u5757\u7a0b\u5e8f\u8ba9\u5927\u5bb6\u9886\u7565Shell\u7684\u9b45\u529b\u3002"),(0,i.kt)("p",null,"B\u7ad9\u64ad\u653e\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1p3411Y7vL"},"https://www.bilibili.com/video/BV1p3411Y7vL")),(0,i.kt)("h2",{id:"\u7ae0\u8282"},"\u7ae0\u8282"),(0,i.kt)("h3",{id:"01shell\u7f16\u7a0b\u57fa\u7840"},"01Shell\u7f16\u7a0b\u57fa\u7840"),(0,i.kt)("p",null,"\u4ec0\u4e48\u662fShell\u7a0b\u5e8f"),(0,i.kt)("p",null,"\u672c\u5730\u53d8\u91cf"),(0,i.kt)("p",null,"\u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,"\u4f4d\u7f6e\u53c2\u91cf"),(0,i.kt)("p",null,"\u6570\u7ec4"),(0,i.kt)("h3",{id:"02shell\u8f93\u5165\u8f93\u51fa"},"02Shell\u8f93\u5165\u8f93\u51fa"),(0,i.kt)("p",null,"read"),(0,i.kt)("p",null,"echo"),(0,i.kt)("p",null,"echo\u8f93\u51fa\u989c\u8272\u4e0e\u5149\u6807\u5b9a\u4f4d"),(0,i.kt)("h3",{id:"03shell\u7b97\u672f\u6269\u5c55"},"03Shell\u7b97\u672f\u6269\u5c55"),(0,i.kt)("p",null,"\u5355\u5f15\u53f7\u3001\u53cc\u5f15\u53f7\u3001\u53cd\u5f15\u53f7\u533a\u522b"),(0,i.kt)("p",null,"\u547d\u4ee4\u66ff\u6362"),(0,i.kt)("p",null,"\u7b97\u672f\u6269\u5c55"),(0,i.kt)("h3",{id:"04shell\u6761\u4ef6\u6d4b\u8bd5"},"04Shell\u6761\u4ef6\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u5b57\u7b26\u4e32\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u6574\u6570\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u903b\u8f91\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u6587\u4ef6\u6d4b\u8bd5"),(0,i.kt)("h3",{id:"05shell\u6761\u4ef6\u4e0e\u5206\u652f\u8bed\u53e5"},"05Shell\u6761\u4ef6\u4e0e\u5206\u652f\u8bed\u53e5"),(0,i.kt)("p",null,"if\u8bed\u53e5"),(0,i.kt)("p",null,"case\u8bed\u53e5"),(0,i.kt)("h3",{id:"06shell\u5faa\u73af\u8bed\u53e5"},"06Shell\u5faa\u73af\u8bed\u53e5"),(0,i.kt)("p",null,"for\u8bed\u53e5"),(0,i.kt)("p",null,"while\u8bed\u53e5"),(0,i.kt)("p",null,"until\u8bed\u53e5"),(0,i.kt)("p",null,"select\u4e0e\u83dc\u5355"),(0,i.kt)("h3",{id:"07\u51fd\u6570"},"07\u51fd\u6570"),(0,i.kt)("p",null,"\u51fd\u6570\u7684\u4f7f\u7528"),(0,i.kt)("p",null,"\u5b57\u7b26\u4e32\u64cd\u4f5c"),(0,i.kt)("p",null,"\u4e00\u4e9b\u5185\u7f6e\u547d\u4ee4\uff08expr,shift,eval,trap\u7b49\uff09"),(0,i.kt)("h3",{id:"08sed"},"08sed"),(0,i.kt)("p",null,"\u4ec0\u4e48\u662f\u6d41\u7f16\u8f91\u5668sed"),(0,i.kt)("p",null,"sed\u5730\u5740\u5b9a\u4f4d\u65b9\u5f0f"),(0,i.kt)("p",null,"sed\u7f16\u8f91\u547d\u4ee4"),(0,i.kt)("h3",{id:"09awk"},"09awk"),(0,i.kt)("p",null,"\u4ec0\u4e48\u662fawk"),(0,i.kt)("p",null,"awk\u7b80\u5355\u7528\u6cd5"),(0,i.kt)("p",null,"awk\u811a\u672c\u8bed\u6cd5"),(0,i.kt)("p",null,"awk\u6267\u884c\u8fc7\u7a0b"),(0,i.kt)("h3",{id:"10shell\u4fc4\u7f57\u65af\u65b9\u5757\u4e0a"},"10Shell\u4fc4\u7f57\u65af\u65b9\u5757(\u4e0a)"),(0,i.kt)("p",null,"\u83b7\u53d6\u952e\u76d8\u65b9\u5411\u6309\u952e\uff08read\uff09"),(0,i.kt)("p",null,"\u68cb\u76d8\u7ed8\u5236\uff08echo\uff09"),(0,i.kt)("p",null,"\u4fc4\u7f57\u65af\u65b9\u5757\u8868\u793a\uff08\u4e00\u7ef4\u6570\u7ec4\uff09"),(0,i.kt)("p",null,"\u4fc4\u7f57\u65af\u65b9\u5757\u56fe\u5f62\u8f93\u51fa"),(0,i.kt)("h3",{id:"11shell\u4fc4\u7f57\u65af\u65b9\u5757\u4e0b"},"11Shell\u4fc4\u7f57\u65af\u65b9\u5757(\u4e0b)"),(0,i.kt)("p",null,"\u8fdb\u7a0b\u6a21\u578b\uff08\u663e\u5f0f\u8fdb\u7a0b\uff0c\u63a7\u5236\u8fdb\u7a0b\uff09"),(0,i.kt)("p",null,"\u6355\u6349\u4fe1\u53f7\uff08trap \uff09"),(0,i.kt)("p",null,"\u4fc4\u7f57\u65af\u65b9\u5757\u6e90\u7801\u5206\u6790"))}k.isMDXComponent=!0}}]);