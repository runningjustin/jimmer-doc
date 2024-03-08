"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),p=n(7094),u=n(12466);const m="tabList__CuJ",s="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:c,groupId:g,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:E}=(0,p.U)(),[N,T]=(0,r.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=g){const e=f[g];null!=e&&e!==N&&v.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==N&&(I(t),T(a),null!=g&&E(g,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},h)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:j,onFocus:w,onClick:w},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},73587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:6,title:"Enum Mapping"},p=void 0,u={unversionedId:"mapping/advanced/enum",id:"mapping/advanced/enum",title:"Enum Mapping",description:"Jimmer handles enums in two ways:",source:"@site/docs/mapping/advanced/enum.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/enum",permalink:"/jimmer-doc/docs/mapping/advanced/enum",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mapping/advanced/enum.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Enum Mapping"},sidebar:"tutorialSidebar",previous:{title:"Complex Calculation",permalink:"/jimmer-doc/docs/mapping/advanced/calculated/transient"},next:{title:"JSON Mapping",permalink:"/jimmer-doc/docs/mapping/advanced/json"}},m={},s=[{value:"Map to String",id:"map-to-string",level:2},{value:"Map to Integer",id:"map-to-integer",level:2},{value:"Do Not Explicitly Use @EnumType",id:"do-not-explicitly-use-enumtype",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jimmer handles enums in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Map to string: A choice with better understandability and traceability, also the default option.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Map to integer: A choice with better performance-first.  "))),(0,r.kt)("p",null,"Jimmer provides two annotations for enums:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.EnumType"),": Decorate enum types, optional"),(0,r.kt)("p",{parentName:"li"},"Specify mapping method, map to string or ordinal position to integer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.EnumItem"),": Decorate enum items, optional"),(0,r.kt)("p",{parentName:"li"},"Override the mapped string value or integer value for some enum item"))),(0,r.kt)("h2",{id:"map-to-string"},"Map to String"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)  \nenum class Gender {\n    MALE,\n    FEMALE\n}\n")))),(0,r.kt)("p",null,"Here, the parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnumType"),' is specified as "NAME", indicating mapping to string. By default, the mapped string values of the two enum items are the same as their names, i.e. "MALE" and "FEMALE". '),(0,r.kt)("p",null,"If you expect the mapped strings to be different from the enum item names, you can decorate the enum items with ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnumItem"),"."),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},'@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F") \n    FEMALE\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},'@EnumType(EnumType.Strategy.NAME)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F")\n    FEMALE\n}\n')))),(0,r.kt)("h2",{id:"map-to-integer"},"Map to Integer"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n    MALE,\n    FEMALE\n} \n")))),(0,r.kt)("p",null,"Here, the parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnumType"),' is specified as "ORDINAL", indicating mapping to integer. By default, the mapped integer values of the two enum items are the same as their ',(0,r.kt)("inlineCode",{parentName:"p"},"ordinal"),", i.e. 0 and 1."),(0,r.kt)("p",null,"If you expect the mapped integers to be different from the enum items' ",(0,r.kt)("inlineCode",{parentName:"p"},"ordinal"),", you can decorate the enum items with ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnumItem"),"."),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"@EnumType(EnumType.Strategy.ORDINAL)  \npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100)\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100) \n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n")))),(0,r.kt)("h2",{id:"do-not-explicitly-use-enumtype"},"Do Not Explicitly Use @EnumType"),(0,r.kt)("p",null,"You can also avoid specifying the @EnumType annotation for enum types, that is, not explicitly indicate whether an enum type should be mapped to string or integer."),(0,r.kt)("p",null,"In this case, Jimmer will refer to the default global configuration. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'The default value of this global configuration is "NAME". If you need "ORDINAL", please override the global configuration.')),(0,r.kt)("p",null,"Next, we show how to override the global configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When using SpringBoot"),(0,r.kt)("p",{parentName:"li"},"Add configuration item ",(0,r.kt)("inlineCode",{parentName:"p"},"jimmer.default-enum-strategy")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties"),' and set its value to "ORDINAL"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When not using SpringBoot"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...Omit other configurations...\n    .build();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...Omit other configurations... \n}\n")))))))}c.isMDXComponent=!0}}]);