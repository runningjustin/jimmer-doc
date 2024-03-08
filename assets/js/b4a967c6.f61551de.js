"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,y=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(y,a(a({ref:t},m),{},{components:r})):n.createElement(y,a({ref:t},m))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},14512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(83117),i=(r(67294),r(3905));const o={sidebar_position:11,title:"Object"},a=void 0,c={unversionedId:"object/index",id:"object/index",title:"Object",description:"In this series of articles, we thoroughly discuss the dynamicity and immutability of Jimmer objects:",source:"@site/docs/object/index.md",sourceDirName:"object",slug:"/object/",permalink:"/jimmer-doc/docs/object/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/object/index.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Object"},sidebar:"tutorialSidebar",previous:{title:"Mutation",permalink:"/jimmer-doc/docs/graphql/mutation"},next:{title:"Dynamicity",permalink:"/jimmer-doc/docs/object/dynamic"}},l={},s=[],m={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this series of articles, we thoroughly discuss the dynamicity and immutability of Jimmer objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamicity"),(0,i.kt)("p",{parentName:"li"},"To support querying and saving any data shape, Jimmer entities are dynamic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Immutability"),(0,i.kt)("p",{parentName:"li"},"To avoid circular references and allow entities to be directly JSON serialized for HTTP and understood by any language, Jimmer entities are immutable."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The dynamicity and immutability of Jimmer objects underpin the entire Jimmer ecosystem.")))}u.isMDXComponent=!0}}]);