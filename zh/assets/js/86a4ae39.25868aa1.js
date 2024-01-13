"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5485],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(83117),i=(r(67294),r(3905));const o={sidebar_position:4,title:"\u4efb\u610f\u52a8\u6001\u67e5\u8be2"},a=void 0,c={unversionedId:"quick-view/dsl/index",id:"quick-view/dsl/index",title:"\u4efb\u610f\u52a8\u6001\u67e5\u8be2",description:"Jimmer\u652f\u6301\u5f3a\u7c7b\u578bSQL DSL\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/dsl/index.md",sourceDirName:"quick-view/dsl",slug:"/quick-view/dsl/",permalink:"/jimmer-doc/zh/docs/quick-view/dsl/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/quick-view/dsl/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u4efb\u610f\u52a8\u6001\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"\u4fdd\u5b58\u957f\u5173\u8054",permalink:"/jimmer-doc/zh/docs/quick-view/save/export/long"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/jimmer-doc/zh/docs/quick-view/dsl/feature"}},u={},l=[],p={toc:l};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Jimmer\u652f\u6301\u5f3a\u7c7b\u578bSQL DSL\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u548c\u5927\u90e8\u5206\u4eba\u91c7\u7528\u5f3a\u7c7b\u578bDSL\u7684\u6846\u67b6\u4e0d\u540c\uff0cJimmer\u7684\u5f3a\u7c7b\u578bDSL\u4e0d\u4ec5\u4ec5\u662f\u4e3a\u4e86\u8ba9SQL\u8bed\u53e5\u80fd\u5f97\u5230\u7f16\u8bd1\u65f6\u5b89\u5168\u4fdd\u8bc1\u548cIDE\u667a\u80fd\u63d0\u793a\u7684\u4f53\u9a8c\uff0c\u8fd8\u4e3a\u4e86\u5c31\u89e3\u51b3\u539f\u751fSQL\u4e2d\u8868\u8fde\u63a5\u548c\u5b50\u67e5\u8be2\u8fc7\u4e8e\u9ebb\u70e6\u7684\u95ee\u9898\uff0c\u5e76\u7ed9\u4e88\u5b83\u4eec\u66f4\u9ad8\u7ea7\u7684\u62bd\u8c61\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u4e3a\u8868\u8fde\u63a5\u548c\u5b50\u67e5\u8be2\u8d4b\u4e88\u4e86\u66f4\u9ad8\u7ea7\u7684\u62bd\u8c61\u540e\uff0c\u5229\u7528Jimmer\u6784\u5efa\u4efb\u610f\u590d\u6742\u7684\u52a8\u6001\u67e5\u8be2\u4f1a\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002\u4ece\u4e00\u5f00\u59cb\uff0cJimmer\u5c31\u662f\u4e3a\u8f7b\u677e\u6784\u9020\u4efb\u610f\u590d\u6742\u7684\u52a8\u6001\u67e5\u8be2\u800c\u8bbe\u8ba1\u3002")),(0,i.kt)("p",null,"\u53e6\u5916\uff0c\u5bf9\u4e8e\u7279\u5b9a\u6570\u636e\u5e93\u4ea7\u54c1\u62e5\u6709\u7684\u975eSQL\u6807\u51c6\u7684\u5f3a\u5927\u529f\u80fd\uff0cJimmer\u7684SQL DSL\u80fd\u5d4c\u5165Native SQL\u7247\u6bb5\uff0c\u5f3a\u7c7b\u578bDSL\u7684\u62bd\u8c61\u4e0d\u4f1a\u5f71\u54cd\u5f00\u53d1\u4eba\u5458\u5c3d\u60c5\u4f7f\u7528\u6570\u636e\u7684\u7279\u6709\u529f\u80fd\u3002",(0,i.kt)("em",{parentName:"p"},"(\u8fd9\u90e8\u5206\u529f\u80fd\u4e0d\u4f1a\u5728\u5feb\u901f\u9884\u89c8\u4e2d\u4ecb\u7ecd\uff0c\u6709\u5174\u8da3\u7684\u7763\u8d23\u8bf7\u67e5\u770b",(0,i.kt)("a",{parentName:"em",href:"../../query/native-sql"},"\u67e5\u8be2\u7bc7/Native\u8868\u8fbe\u5f0f"),")")))}s.isMDXComponent=!0}}]);