"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(34334);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(83117),r=a(67294),i=a(34334),l=a(72389),o=a(67392),s=a(7094),p=a(12466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:d,groupId:f,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,s.U)(),[D,w]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=f){const e=N[f];null!=e&&e!==D&&h.some((t=>t.value===e))&&w(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==D&&(O(t),w(n),null!=f&&v(f,String(n)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>T.push(e),onKeyDown:j,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":D===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},10166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(83117),r=(a(67294),a(3905)),i=a(65488),l=a(85162);const o={sidebar_position:1,title:"Dialect"},s=void 0,p={unversionedId:"configuration/dialect",id:"configuration/dialect",title:"Dialect",description:"Different databases have vastly different SQL support, so Jimmer uses dialect configuration to adapt to different databases.",source:"@site/docs/configuration/dialect.mdx",sourceDirName:"configuration",slug:"/configuration/dialect",permalink:"/jimmer-doc/docs/configuration/dialect",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/configuration/dialect.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Dialect"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/jimmer-doc/docs/configuration/"},next:{title:"Connection Manager",permalink:"/jimmer-doc/docs/configuration/connection-manager"}},c={},u=[{value:"Set Dialect",id:"set-dialect",level:2},{value:"Dialect List",id:"dialect-list",level:2}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Different databases have vastly different SQL support, so Jimmer uses dialect configuration to adapt to different databases."),(0,r.kt)("h2",{id:"set-dialect"},"Set Dialect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If using the Spring Boot Starter provided by Jimmer, there are two ways:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"jimmer:\ndialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide global dialect Bean"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic Dialect dialect() {\n    return new MySqlDialect(); \n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun dialect(): Dialect =\n    MySqlDialect()\n")))),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If both methods above are used ",(0,r.kt)("em",{parentName:"p"},"(not recommended)"),", the second method takes precedence"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If not using the Spring Boot Starter provided by Jimmer"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(new MySqlDialect())\n    ...Omit other configurations...\n    .build();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDialect(MySqlDialect())\n    ...Omit other configurations...\n}\n")))))),(0,r.kt)("h2",{id:"dialect-list"},"Dialect List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.DefaultDialect"),(0,r.kt)("p",{parentName:"li"},"This is the default dialect used by Jimmer when no dialect is specified, so there is no need to specify it explicitly."),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The default configuration can only be used for learning simple demos in the initial stage, and can never be used in actual projects. The following situations will cause exceptions:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Operations on Jimmer in the code will generate SQL that depends on specific database products, rather than perfect cross-database SQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the type of ",(0,r.kt)("a",{parentName:"p",href:"../mutation/trigger"},"trigger")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"TRANSACTION_ONLY")," and cache is used, Jimmer will automatically create the ",(0,r.kt)("inlineCode",{parentName:"p"},"JIMMER_TRANS_CACHE_OPERATOR")," table at startup. ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultDialect")," does not support this operation, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../cache/consistency"},"Cache Consistency")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.H2Dialect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.MySqlDialect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.PostgresDialect ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.OracleDialect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.TiDBDialect"),(0,r.kt)("p",{parentName:"li"},"Because TiDB is a distributed database that does not support foreign key constraints, true foreign keys are not supported by this dialect. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../mapping/base/foreignkey"},"True and False Foreign Keys")),(0,r.kt)("p",{parentName:"li"},"Apart from this, ",(0,r.kt)("inlineCode",{parentName:"p"},"TiDBDialect")," has no difference with ",(0,r.kt)("inlineCode",{parentName:"p"},"MySqlDialect"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For other databases, users can extend dialects by themselves. But the database needs to support multi-column ",(0,r.kt)("inlineCode",{parentName:"p"},"in")," expressions, such as"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"where (a, b) in ((3, 4), (8, 13)) \n")),(0,r.kt)("p",{parentName:"li"},"Or"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"where (a, b) in (select x, y from ...)\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently, multi-column ",(0,r.kt)("inlineCode",{parentName:"p"},"in")," expressions are highly dependent features of Jimmer, and Microsoft Sql Server does not support this feature for the time being."),(0,r.kt)("p",{parentName:"admonition"},"So Microsoft Sql Server is not supported for now.")))))}d.isMDXComponent=!0}}]);