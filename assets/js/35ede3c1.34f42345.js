"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),u=n(7094),s=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:g,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,u.U)(),[T,O]=(0,r.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=g){const e=v[g];null!=e&&e!==T&&h.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==T&&(x(t),O(a),null!=g&&N(g,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:j,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},54562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={sidebar_position:7,title:"Aggregate & Group"},u=void 0,s={unversionedId:"query/group",id:"query/group",title:"Aggregate & Group",description:"Aggregation",source:"@site/docs/query/group.mdx",sourceDirName:"query",slug:"/query/group",permalink:"/jimmer-doc/docs/query/group",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/query/group.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Aggregate & Group"},sidebar:"tutorialSidebar",previous:{title:"Dynamic Ordering",permalink:"/jimmer-doc/docs/query/dynamic-order"},next:{title:"Smart Paging",permalink:"/jimmer-doc/docs/query/paging/"}},p={},c=[{value:"Aggregation",id:"aggregation",level:2},{value:"Grouping",id:"grouping",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"aggregation"},"Aggregation"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = Tables.BOOK_TABLE;\n\nlong count = sqlClient\n    .createQuery(table)\n    .where(table.name().ilike("graphql"))\n    .select(\n        table\n            .asTableEx().authors().id()\n            // highlight-next-line\n            .count(true) // distinct: true\n    )\n    .fetchOne();\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val count = sqlClient\n    .createQuery(Book::class) {\n        where(table.name.ilike("graphq"))\n        select(\n            // highlight-next-line\n            count(\n                table.asTableEx().authors.id,\n                distinct = true\n            )\n        )\n    }\n    .fetchOne()\n')))),(0,r.kt)("p",null,"The generated SQL is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    // highlight-next-line \n    count(distinct tb_2_.AUTHOR_ID)\nfrom BOOK tb_1_\ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.BOOK_ID\nwhere\n    lower(tb_1_.NAME) like ? /* %graphq% */\n")),(0,r.kt)("h2",{id:"grouping"},"Grouping"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = Tables.BOOK_TABLE;\n\nList<Tuple2<Long, BigDecimal>> tuples = sqlClient\n    .createQuery(table)\n    .groupBy(table.storeId()) \u2776\n    .select(\n            table.storeId(), \u2777\n            table.price().avg() \u2778\n    )\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val tuples: List<Tuple2<Long, BigDecimal>> = sqlClient\n    .createQuery(Book::class) {\n        groupBy(table.store.id) \u2776\n        select(\n            table.store.id, \u2777\n            avg(table.price).asNonNull() \u2778\n        )\n    }\n    .execute()\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2776 Group by ",(0,r.kt)("inlineCode",{parentName:"p"},"STORE_ID"),", the foreign key of ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOK")," table"),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Here Jimmer does not treat ",(0,r.kt)("inlineCode",{parentName:"p"},"table.store")," as a join operation, but considers ",(0,r.kt)("inlineCode",{parentName:"p"},"table.store.id")," as a whole as the foreign key field. "),(0,r.kt)("p",{parentName:"admonition"},"Please see ",(0,r.kt)("a",{parentName:"p",href:"./dynamic-join/optimization#phantom-joins"},"phantom joins"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2777 Grouping columns can be directly queried.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2778 Non-grouping columns can only be queried as parameters of aggregate functions."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Kotlin code has an extra function call: ",(0,r.kt)("inlineCode",{parentName:"p"},"asNonNull()"),"."),(0,r.kt)("p",{parentName:"admonition"},"In Jimmer Kotlin DSL, aggregate functions like ",(0,r.kt)("inlineCode",{parentName:"p"},"avg")," ",(0,r.kt)("em",{parentName:"p"},"(also ",(0,r.kt)("inlineCode",{parentName:"em"},"sum"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"min"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"max"),")")," return Nullable types. For a table with no data, aggregating any column would return null without grouping."),(0,r.kt)("p",{parentName:"admonition"},"However this is not the case when used with grouping. After grouping, each group has at least one row internally, if the original field being aggregated is non-null itself, the result after aggregation would not be null."),(0,r.kt)("p",{parentName:"admonition"},"So here ",(0,r.kt)("inlineCode",{parentName:"p"},"asNonNull()")," converts the Nullable expression to NonNull, such that ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Tuple2<Long, BigDecimal>>"),", same as the type explicitly specified for ",(0,r.kt)("inlineCode",{parentName:"p"},"tuples")," in the first line. "),(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"asNonNull()")," is removed, ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," would return ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Tuple2<Long, BigDecimal?>>"),", causing compile error.")))))}d.isMDXComponent=!0}}]);