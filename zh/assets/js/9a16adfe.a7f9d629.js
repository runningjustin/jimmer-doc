"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},24710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));const i={sidebar_position:3,title:"\ud83d\udd25 \u4fdd\u5b58\u6307\u4ee4"},o=void 0,m={unversionedId:"mutation/save-command/index",id:"mutation/save-command/index",title:"\ud83d\udd25 \u4fdd\u5b58\u6307\u4ee4",description:"\u4e00\u53e5\u8bdd\u4fdd\u5b58\u4efb\u610f\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\uff0c\u81ea\u52a8\u627e\u51faDIFF\u5e76\u4fee\u6539\u6570\u636e\u5e93\uff0c\u7c7b\u4f3c\u4e8eReact/Vue",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/index.md",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/",permalink:"/jimmer-doc/zh/docs/mutation/save-command/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mutation/save-command/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udd25 \u4fdd\u5b58\u6307\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"\u5220\u9664\u8bed\u53e5",permalink:"/jimmer-doc/zh/docs/mutation/delete-statement"},next:{title:"\u57fa\u672c\u7528\u6cd5",permalink:"/jimmer-doc/zh/docs/mutation/save-command/usage"}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e00\u53e5\u8bdd\u4fdd\u5b58\u4efb\u610f\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\uff0c\u81ea\u52a8\u627e\u51faDIFF\u5e76\u4fee\u6539\u6570\u636e\u5e93\uff0c\u7c7b\u4f3c\u4e8eReact/Vue")),(0,r.kt)("p",null,"\u4fdd\u5b58\u6307\u4ee4\u662fJimmer\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u5927\u5e45\u7b80\u5316\u590d\u6742\u6570\u636e\u7ed3\u6784\u4fdd\u5b58\u4e1a\u52a1\u7684\u5f00\u53d1\u96be\u5ea6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8bf4",(0,r.kt)("a",{parentName:"p",href:"../../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u8ba9\u4f5c\u4e3a\u8f93\u51fa\u4fe1\u606f\u7684\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u662f\u4efb\u4f55\u5f62\u72b6\uff0c\u90a3\u4e48\uff0c\u4fdd\u5b58\u6307\u4ee4\u5c31\u662f\u8ba9\u4f5c\u4e3a\u8f93\u5165\u4fe1\u606f\u7684\u6570\u636e\u7ed3\u6784\u4e5f\u53ef\u4ee5\u662f\u4efb\u4f55\u5f62\u72b6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8bfb\u8005\u5bf9Web\u524d\u7aef\u6280\u672f\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\uff0c\u53ef\u4ee5\u7528",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/"},"React"),"\u6216",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual DOM diff"),"\u6765\u7c7b\u6bd4\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4fdd\u5b58\u6307\u4ee4\u9700\u8981\u5f00\u53d1\u4eba\u5458",(0,r.kt)("strong",{parentName:"p"},"\u5f7b\u5e95\u6539\u53d8\u8fc7\u53bb\u7684\u601d\u7ef4\u6a21\u5f0f")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u601d\u7ef4\u6a21\u5f0f\u7684\u672c\u8d28\u533a\u522b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee5\u524d\u7684\u4f20\u7edf\u601d\u7ef4\u6a21\u5f0f"),(0,r.kt)("p",{parentName:"li"},"\u81ea\u5df1\u53bb\u5bf9\u6bd4\u8981\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u548c\u6570\u636e\u5e93\u73b0\u6709\u6570\u636e\u7684\u5dee\u5f02\uff0c\u5bf9\u6709\u53d8\u5316\u7684\u5c40\u90e8\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u6307\u4ee4\u7684\u601d\u7ef4\u6a21\u5f0f"),(0,r.kt)("p",{parentName:"li"},"\u63a5\u53d7\u5ba2\u6237\u7aef\u4f20\u9012\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u4fdd\u5b58\u5373\u53ef\u3002Jimmer\u4f1a\u5904\u7406\u597d\u4e00\u5207 ",(0,r.kt)("em",{parentName:"p"},"(\u81ea\u52a8\u5bf9\u6bd4\u8981\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u548c\u6570\u636e\u5e93\u73b0\u6709\u6570\u636e\u7684\u5dee\u5f02\uff0c\u5bf9\u6709\u53d8\u5316\u7684\u5c40\u90e8\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"em"},"INSERT"),"\u3001",(0,r.kt)("inlineCode",{parentName:"em"},"UPDATE"),"\u6216",(0,r.kt)("inlineCode",{parentName:"em"},"DELETE"),")"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee5\u524d\u7684\u4e60\u60ef\u5e94\u8be5\u88ab\u66f4\u597d\u7684\u65b9\u6cd5\u66ff\u4ee3"),(0,r.kt)("p",{parentName:"li"},"\u4f20\u7edf\u5f00\u53d1\u6a21\u5f0f\u4e2d\uff0c\u5f00\u53d1\u4eba\u5458\u975e\u5e38\u559c\u6b22\u505a\u4e00\u4ef6\u4e8b\uff1a\u5148\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\uff0c\u518d\u4fee\u6539\u5176\u90e8\u5206\u5c5e\u6027\uff0c\u6700\u540e\u4fdd\u5b58\u4fee\u6539\u540e\u7684\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"\u867d\u7136Jimmer\u4e5f\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u8fd9\u6837\u505a\uff0c\u4f46\u662f\u63a8\u8350\u6027\u80fd\u66f4\u9ad8\u7684\u505a\u6cd5\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"./incomplete"},"\u4e0d\u5b8c\u6574\u5bf9\u8c61"))))),(0,r.kt)("p",null,"\u8c03\u7528\u4fdd\u5b58\u6307\u4ee4\u53ea\u9700\u8981\u8ba9\u4e00\u884c\u4ee3\u7801\uff0c\u4f46\u5176\u5185\u90e8\u9690\u85cf\u4e86\u5343\u904d\u4e07\u5316\u7684\u7ec6\u8282\uff0c\u6587\u6863\u96be\u4ee5\u7a77\u4e3e\u5927\u91cf\u6848\u4f8b\u3002\u56e0\u6b64\uff0c\u4fdd\u5b58\u6307\u4ee4\u6709\u72ec\u7acb\u7684\u793a\u4f8b\u9879\u76ee\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/java/save-command"},"example/java/save-command"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kotlin: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/kotlin/save-command-kt"},"example/kotlin/save-command-kt")))),(0,r.kt)("p",null,"\u7528IDE\u968f\u610f\u6253\u5f00\u5176\u4e2d\u4e00\u4e2a\uff0c\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u5373\u53ef\u3002"))}u.isMDXComponent=!0}}]);