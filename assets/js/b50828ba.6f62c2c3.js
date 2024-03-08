"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const o={sidebar_position:3,title:"2. Save Arbitrary Shape"},i=void 0,s={unversionedId:"quick-view/save/index",id:"quick-view/save/index",title:"2. Save Arbitrary Shape",description:"The save directive is a very powerful capability of Jimmer. With just one function call, data structures of any shape can be saved.",source:"@site/docs/quick-view/save/index.md",sourceDirName:"quick-view/save",slug:"/quick-view/save/",permalink:"/jimmer-doc/docs/quick-view/save/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/quick-view/save/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"2. Save Arbitrary Shape"},sidebar:"tutorialSidebar",previous:{title:"Comparison",permalink:"/jimmer-doc/docs/quick-view/fetch/export/comparison"},next:{title:"Feature Introduction",permalink:"/jimmer-doc/docs/quick-view/save/feature"}},c={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The save directive is a very powerful capability of Jimmer. With just one function call, data structures of any shape can be saved.  "),(0,a.kt)("p",null,"Whether the data structure to be saved is simple (such as a single object or even a mutilated object) or complex (an aggregate root object holds many associated objects through associative relationships, with unlimited depth and breadth), it can be saved into the database with one function call."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Saving operations for single table records has never been the difficulty of application development. Even without using any ORM framework, it is very easy to achieve with direct use of JDBC.  "),(0,a.kt)("p",{parentName:"admonition"},"However, saving complex data structures is not so easy. Developers will have to query existing data structures from the database and compare them with the data structures to be saved, so as to discover multiple changed parts and convert them into corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," statements. This process is very cumbersome and error-prone.  "),(0,a.kt)("p",{parentName:"admonition"},"Therefore, from the very beginning, Jimmer focused on how to save complex data structures, rather than how to save a single entity object.  ")))}l.isMDXComponent=!0}}]);