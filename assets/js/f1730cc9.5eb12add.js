"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32102:(e,t,n)=>{n.d(t,{s:()=>h});var o=n(83117),r=n(67294),a=n(42293),i=n(50657),l=n(6514),s=n(54776),c=n(10155),u=n(15861),m=n(93946),d=n(9137),p=n(61274),f=n(50594);const h=(0,r.memo)((e=>{let{open:t,fullScreen:n=!1,title:o,maxWidth:s="md",onClose:h,children:g}=e;const[b,v]=(0,r.useState)(n),k=(0,r.useCallback)((()=>{v((e=>!e))}),[]);return r.createElement(i.Z,{open:t,onClose:h,fullScreen:b,TransitionComponent:y,maxWidth:s},r.createElement(a.Z,{sx:{position:"relative"}},r.createElement(c.Z,null,r.createElement(u.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},o),r.createElement(m.Z,{onClick:k,style:{color:"white"}},b?r.createElement(p.Z,null):r.createElement(d.Z,null)),r.createElement(m.Z,{"aria-label":"close",onClick:h,style:{color:"white"}},r.createElement(f.Z,null)))),r.createElement(l.Z,null,g))})),y=r.forwardRef((function(e,t){return r.createElement(s.Z,(0,o.Z)({direction:"up",ref:t},e))}))},39511:(e,t,n)=>{n.d(t,{b:()=>i});var o=n(67294),r=n(83321),a=n(32102);const i=(0,o.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:i=t,variant:l="outlined",maxWidth:s,useOriginalText:c=!0,children:u}=e;const[m,d]=(0,o.useState)(!1),p=(0,o.useCallback)((e=>{d(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),f=(0,o.useCallback)((()=>{d(!1)}),[]),h=c?{textTransform:"none"}:{};return o.createElement(o.Fragment,null,o.createElement(r.Z,{"data-is-view-more-button":"true",onClick:p,variant:l,size:"small",style:h},t),o.createElement(a.s,{open:m,onClose:f,title:i,maxWidth:s,fullScreen:n},u))}))},42634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>N,default:()=>A,frontMatter:()=>D,metadata:()=>F,toc:()=>J});var o=n(83117),r=n(67294),a=n(3905),i=n(86886),l=n(80102),s=n(93680),c=n(94780),u=n(90948),m=n(71657),d=n(90629),p=n(1588),f=n(34867);function h(e){return(0,f.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var y=n(85893);const g=["className","raised"],b=(0,u.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),v=r.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCard"}),{className:r,raised:a=!1}=n,i=(0,l.Z)(n,g),u=(0,o.Z)({},n,{raised:a}),d=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},h,t)})(u);return(0,y.jsx)(b,(0,o.Z)({className:(0,s.Z)(d.root,r),elevation:a?8:void 0,ref:t,ownerState:u},i))}));function k(e){return(0,f.Z)("MuiCardContent",e)}(0,p.Z)("MuiCardContent",["root"]);const Z=["className","component"],w=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=r.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCardContent"}),{className:r,component:a="div"}=n,i=(0,l.Z)(n,Z),u=(0,o.Z)({},n,{component:a}),d=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},k,t)})(u);return(0,y.jsx)(w,(0,o.Z)({as:a,className:(0,s.Z)(d.root,r),ownerState:u,ref:t},i))}));function C(e){return(0,f.Z)("MuiCardActions",e)}(0,p.Z)("MuiCardActions",["root","spacing"]);const E=["disableSpacing","className"],j=(0,u.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,o.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}))),O=r.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:a}=n,i=(0,l.Z)(n,E),u=(0,o.Z)({},n,{disableSpacing:r}),d=(e=>{const{classes:t,disableSpacing:n}=e,o={root:["root",!n&&"spacing"]};return(0,c.Z)(o,C,t)})(u);return(0,y.jsx)(j,(0,o.Z)({className:(0,s.Z)(d.root,a),ownerState:u,ref:t},i))}));var S=n(15861),T=n(39511),P=n(52263);const M=(0,r.memo)((e=>{let{items:t}=e;const{i18n:n}=(0,P.Z)(),o=(0,r.useMemo)((()=>{const e=n.currentLocale;return"zh"===e||"zh_CN"===e||"zh_cn"===e}),[n.currentLocale]);return r.createElement(i.ZP,{container:!0,spacing:2,alignItems:"stretch"},t.map((e=>r.createElement(i.ZP,{key:e.author,container:!0,direction:"column",item:!0,xs:12,lg:6},r.createElement(v,{elevation:3,style:{height:"100%"}},r.createElement(x,null,r.createElement(i.ZP,{item:!0,container:!0},r.createElement(i.ZP,{item:!0,xs:3},r.createElement(S.Z,{variant:"h5",component:"div"},e.author)),r.createElement(i.ZP,{item:!0,xs:9,style:{textAlign:"right"}},r.createElement(S.Z,{variant:"h6",component:"div"},e.company)))),r.createElement(x,null,e.content),e.detail&&r.createElement(O,null,r.createElement(T.b,{buttonText:o?"\u67e5\u770b\u66f4\u591a":"More Details",title:o?`\u6765\u81ea${e.author}\u7684\u53cd\u9988`:`Feedback from ${e.author}`},e.detail)))))))}));const D={sidebar_position:1,title:"Voice of Successful Cases"},N=void 0,F={unversionedId:"resource/vice-of-sccuessed",id:"resource/vice-of-sccuessed",title:"Voice of Successful Cases",description:"<Feedback items={[",source:"@site/docs/resource/vice-of-sccuessed.mdx",sourceDirName:"resource",slug:"/resource/vice-of-sccuessed",permalink:"/jimmer-doc/docs/resource/vice-of-sccuessed",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/resource/vice-of-sccuessed.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Voice of Successful Cases"},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/jimmer-doc/docs/resource/"},next:{title:"Ecosystem",permalink:"/jimmer-doc/docs/resource/ecosystem"}},I={},J=[],R={toc:J};function A(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(M,{items:[{author:"Nan Mu",company:"Beijing Shouxin Technology",content:(0,a.kt)(r.Fragment,null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"Dynamic objects fear no shape of DTO"),(0,a.kt)("li",null,"Immutable objects allow you to ignore multi-threaded security issues and can be shared freely"),(0,a.kt)("li",null,"Simple and smooth API brings an extremely comfortable development experience"),(0,a.kt)("li",null,"Fully transparent cache mechanism allows you to escape from tedious work")),"So I strongly recommend Jimmer to liberate your productivity and get off work early!")},{author:"Hai",company:"Chengdu JIUZHOU Electronics Information Co., Ltd.",content:(0,a.kt)(r.Fragment,null,"The concept of dynamic objects allows us to control every attribute of the object, which is the most exciting to solve the explosion of DTOs. The cache + calculated properties are great!")},{author:"Fallen Angel",company:"Hangzhou Digital Hohain Technology Co., Ltd.",content:(0,a.kt)(r.Fragment,null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"Extremely simple and smooth implicit table join mechanism"),(0,a.kt)("li",null,"No longer need to consider table partitioning based on join complexity during business analysis"),(0,a.kt)("li",null,"Based on dynamic objects and Fetcher, the ability to control the field-level unlimited depth of object shapes makes it unnecessary to define DTOs when interfacing output"),(0,a.kt)("li",null,"Support save instructions for arbitrary depth unlimited objects. No longer need to consider save logic based on object shape when adding and inserting. Just focus on building the object itself.")))},{author:"A Tong Mu .z",company:"Jingshang Travel",content:(0,a.kt)(r.Fragment,null,"Jimmer breaks the traditional perception, integrates the advantages of mybatis and JPA, and has powerful, elegant, high-performance, easy-to-use and other excellent characteristics. The unlimited cascading object tree is great, highly recommend trying innovative features!")},{author:"Elva",company:"Nanyang Xihua Technology Information Co., Ltd.",content:(0,a.kt)(r.Fragment,null,"Jimmer reduces the probability of coding errors through strong typing, automatically generates code, and greatly improves development efficiency. It handles complex structure queries more adeptly.")},{author:"Sailing",company:"Four Seas Wanlian",content:(0,a.kt)("ul",null,(0,a.kt)("li",null,"Implicit table joins and dynamic objects can quickly implement business requirements"),(0,a.kt)("li",null,"Global cache solutions, automated consistency and development transparency"),(0,a.kt)("li",null,"Powerful, high return on learning costs"),(0,a.kt)("li",null,"Can significantly reduce the amount of business system code"))},{author:"Ordinary Mu Zilin Xi",company:"--Confidential--",content:(0,a.kt)("ul",null,(0,a.kt)("li",null,"Jimmer solves the backend DTO explosion problem, with much less code than frameworks with the same functionality"),(0,a.kt)("li",null,"Jimmer supports Java and Kotlin dual languages. Using Kotlin in Kotlin makes the code concise and elegant"),(0,a.kt)("li",null,"Jimmer is very friendly to tree-like structural models, simple to implement"),(0,a.kt)("li",null,"Jimmer's repository support for Spring Data style is very friendly under springboot, highly recommended"))},{author:"Leon",company:"Individual Developer",content:(0,a.kt)("ul",null,(0,a.kt)("li",null,"Strongly typed DSL + More abundant and powerful functions than Exposed -> Maximize development experience and efficiency"),(0,a.kt)("li",null,"Relying on Jimmer's ability to query and save any data structure, eliminate the trouble of hand-written Mybatis sql, while also solving the DTO explosion problem"),(0,a.kt)("li",null,"Caching consistency and transparency, reducing a lot of tedious work"))}],mdxType:"Feedback"}))}A.isMDXComponent=!0}}]);