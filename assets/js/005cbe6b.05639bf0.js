"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4745,3581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90629:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(80102),o=n(83117),r=n(67294),i=n(93680),l=n(94780),s=n(41796),c=n(90948);const u=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var p=n(71657),d=n(1588),m=n(34867);function v(e){return(0,m.Z)("MuiPaper",e)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=n(85893);const k=["className","component","elevation","square","variant"],g=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",u(t.elevation))}, ${(0,s.Fq)("#fff",u(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),f=r.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiPaper"}),{className:r,component:s="div",elevation:c=1,square:u=!1,variant:d="elevation"}=n,m=(0,a.Z)(n,k),f=(0,o.Z)({},n,{component:s,elevation:c,square:u,variant:d}),b=(e=>{const{square:t,elevation:n,variant:a,classes:o}=e,r={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${n}`]};return(0,l.Z)(r,v,o)})(f);return(0,h.jsx)(g,(0,o.Z)({as:s,ownerState:f,className:(0,i.Z)(b.root,r),ref:t},m))}))},31536:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(80102),o=n(83117),r=n(67294),i=n(10209),l=n(59766),s=n(94780),c=n(34867);const u=(0,n(70182).ZP)();var p=n(65149),d=n(39707),m=n(66500),v=n(95408),h=n(98700),k=n(85893);const g=["component","direction","spacing","divider","children","className","useFlexGap"],f=(0,m.Z)(),b=u("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function y(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:f})}function Z(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,a,o)=>(e.push(a),o<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${o}`})),e)),[])}const N=({ownerState:e,theme:t})=>{let n=(0,o.Z)({display:"flex",flexDirection:"column"},(0,v.k9)({theme:t},(0,v.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,h.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),r=(0,v.P$)({values:e.direction,base:o}),i=(0,v.P$)({values:e.spacing,base:o});"object"==typeof r&&Object.keys(r).forEach(((e,t,n)=>{if(!r[e]){const a=t>0?r[n[t-1]]:"column";r[e]=a}}));const s=(t,n)=>{return e.useFlexGap?{gap:(0,h.NA)(a,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${o=n?r[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,h.NA)(a,t)}};var o};n=(0,l.Z)(n,(0,v.k9)({theme:t},i,s))}return n=(0,v.dt)(t.breakpoints,n),n};var C=n(90948),S=n(71657);const x=function(e={}){const{createStyledComponent:t=b,useThemeProps:n=y,componentName:l="MuiStack"}=e,u=t(N),p=r.forwardRef((function(e,t){const r=n(e),p=(0,d.Z)(r),{component:m="div",direction:v="column",spacing:h=0,divider:f,children:b,className:y,useFlexGap:N=!1}=p,C=(0,a.Z)(p,g),S={direction:v,spacing:h,useFlexGap:N},x=(0,s.Z)({root:["root"]},(e=>(0,c.Z)(l,e)),{});return(0,k.jsx)(u,(0,o.Z)({as:m,ownerState:S,ref:t,className:(0,i.Z)(x.root,y)},C,{children:f?Z(b,f):b}))}));return p}({createStyledComponent:(0,C.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,S.Z)({props:e,name:"MuiStack"})}),w=x},2734:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(79718),o=n(90247),r=n(10606);function i(){const e=(0,a.Z)(o.Z);return e[r.Z]||e}},20036:(e,t,n)=>{n.d(t,{k:()=>f});var a=n(52263),o=n(94054),r=n(33841),i=n(23599),l=n(90629),s=n(43246),c=n(31536),u=n(61903),p=n(50657),d=n(37645),m=n(6514),v=n(31425),h=n(58951),k=n(83321),g=n(67294);const f=(0,g.memo)((()=>{const[e,t]=(0,g.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),n=(0,g.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),f=(0,g.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),b=(0,g.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),y=(0,g.useCallback)((e=>{let n;const a=e.target.value;n="string"==typeof a?parseInt(a):a,-1===n&&(n=void 0),t((e=>({...e,storeId:n})))}),[]),Z=(0,g.useCallback)((e=>{let n=[];console.log(e.target.value);const a=e.target.value;n="string"==typeof a?a.split(",").map((e=>parseInt(e))):a,t((e=>({...e,authorIds:n})))}),[]),{i18n:N}=(0,a.Z)(),C=(0,g.useMemo)((()=>"zh"==N.currentLocale||"zh_cn"==N.currentLocale||"zh_CN"==N.currentLocale),[N.currentLocale]),[S,x]=(0,g.useState)(!1),w=(0,g.useCallback)((()=>{x(!0)}),[]),I=(0,g.useCallback)((()=>{x(!1)}),[]);return g.createElement(l.Z,{elevation:3,style:{padding:"1.5rem",width:500}},g.createElement(c.Z,{spacing:2},g.createElement("h1",null,"Book Form"),g.createElement(u.Z,{label:"Name",value:e.name,onChange:n,error:""===e.name,helperText:""===e.name?"Name is required":""}),g.createElement(u.Z,{label:"Edition",type:"number",value:e.edition,onChange:f}),g.createElement(u.Z,{label:"Price",type:"number",value:e.price,onChange:b}),g.createElement(o.Z,{fullWidth:!0},g.createElement(r.Z,{id:"store-select-label"},"Store"),g.createElement(s.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:y},g.createElement(i.Z,{value:-1},"--NONE--"),g.createElement(i.Z,{value:1},"O'REILLY"),g.createElement(i.Z,{value:2},"MANNING"))),g.createElement(o.Z,{fullWidth:!0},g.createElement(r.Z,{id:"author-multi-select-label"},"Authors"),g.createElement(s.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:Z},g.createElement(i.Z,{value:1},"Eve Procello"),g.createElement(i.Z,{value:2},"Alex Banks"),g.createElement(i.Z,{value:3},"Dan Vanderkam"),g.createElement(i.Z,{value:4},"Boris Cherny"),g.createElement(i.Z,{value:5},"Samer Buna"))),g.createElement(o.Z,null,g.createElement(k.Z,{onClick:w,variant:"contained"},C?"\u63d0\u4ea4":"Submit"))),g.createElement(p.Z,{open:S,onClose:I},g.createElement(d.Z,null,C?"\u4fe1\u606f":"Info"),g.createElement(m.Z,null,g.createElement(h.Z,null,C?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),g.createElement(v.Z,null,g.createElement(k.Z,{onClick:I},"\u5173\u95ed"))))}))},5860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(83117),o=(n(67294),n(3905)),r=n(65488),i=n(85162),l=n(20036);const s={sidebar_position:2,title:"Save Short Associations"},c=void 0,u={unversionedId:"quick-view/save/export/short",id:"quick-view/save/export/short",title:"Save Short Associations",description:"What is Short Association",source:"@site/docs/quick-view/save/export/short.mdx",sourceDirName:"quick-view/save/export",slug:"/quick-view/save/export/short",permalink:"/jimmer-doc/docs/quick-view/save/export/short",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/quick-view/save/export/short.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Save Short Associations"},sidebar:"tutorialSidebar",previous:{title:"Save Aggregate Root",permalink:"/jimmer-doc/docs/quick-view/save/export/root"},next:{title:"Save Long Associations",permalink:"/jimmer-doc/docs/quick-view/save/export/long"}},p={},d=[{value:"What is Short Association",id:"what-is-short-association",level:2},{value:"Define Input DTO",id:"define-input-dto",level:2},{value:"Generated Code",id:"generated-code",level:2},{value:"Write HTTP Service",id:"write-http-service",level:2}],m={toc:d};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-short-association"},"What is Short Association"),(0,o.kt)("p",null,"A short association refers to only changing the association relationship between the current object and other objects, without further modifying the associated object.  "),(0,o.kt)("p",null,"For the UI interface:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reference association ",(0,o.kt)("em",{parentName:"p"},"(one-to-one and many-to-one)")," is rendered as a radio menu  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Collection association ",(0,o.kt)("em",{parentName:"p"},"(one-to-many and many-to-many)")," is rendered as a multiple select menu  "))),(0,o.kt)("p",null,"For example:"),(0,o.kt)(l.k,{mdxType:"ShortAssociation"}),(0,o.kt)("h2",{id:"define-input-dto"},"Define Input DTO"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install DTO language Intellij plugin: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClearPlume/jimmer-dto"},"https://github.com/ClearPlume/jimmer-dto")," ",(0,o.kt)("em",{parentName:"p"},"(This process is not required but highly recommended)"),"  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new directory ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/dto"),", create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.dto")," and write the following code:   "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Book.dto"',title:'"Book.dto"'},"input BookInputWithShortAssociations {\n    #allScalars(this) \n    #highlight-next-line  \n    id(store) //default alias storeId  \n    #highlight-next-line\n    id(authors) as authorIds\n}\n")))),(0,o.kt)("h2",{id:"generated-code"},"Generated Code"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInputWithShortAssociations.java"',title:'"BookInputWithShortAssociations.java"'},'@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"  \n)\npublic class BookInputWithShortAssociations implements Input<Book> {  \n\n    @Nullable\n    private Long id;  \n\n    @NotNull\n    private String name;\n\n    private int edition;\n\n    @NotNull  \n    private BigDecimal price;\n\n    @Nullable\n    // highlight-next-line\n    private Long storeId;\n\n    @NotNull\n    // highlight-next-line \n    private List<Long> authorIds;\n\n    ...Omit other methods...  \n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInputWithShortAssociations.kt"',title:'"BookInputWithShortAssociations.kt"'},'@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)  \ndata class BookInputWithShortAssociations(\n    val id: Long?,\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    // highlight-next-line\n    val storeId: Long? \n    // highlight-next-line\n    val authorIds: List<Long>  \n) : Input<Book> {\n    ...Omit other methods...   \n}\n')))),(0,o.kt)("h2",{id:"write-http-service"},"Write HTTP Service"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},'@RestController\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient; \n    }\n\n    @PutMapping("/book")\n    public int saveBookInputWithShortAssociations(\n        // highlight-next-line  \n        @RequestBody BookInputWithShortAssociations input\n    ) {\n        return sqlClient\n            .save(input)\n            .getTotalAffectedRowCount();\n    } \n} \n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.java"',title:'"BookController.java"'},'class BookController(  \n    private val sqlClient: KSqlClient  \n) {  \n\n    @PutMapping("/book")\n    fun saveBookInputWithShortAssociations( \n        // highlight-next-line\n        @RequestBody input: BookInputWithShortAssociations\n    ): Int =\n        sqlClient\n            .save(input)\n            .totalAffectedRowCount\n}\n')))),(0,o.kt)("p",null,"It can be seen that no matter how the Input DTO changes, Jimmer still only needs one method call to complete data saving."))}v.isMDXComponent=!0}}]);