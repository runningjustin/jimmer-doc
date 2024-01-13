"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7848],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),c=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),b=n,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||r;return a?l.createElement(m,i(i({ref:t},u),{},{components:a})):l.createElement(m,i({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(34334);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(83117),n=a(67294),r=a(34334),i=a(72389),o=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:i,defaultValue:p,values:b,groupId:m,className:g}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=b??f.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),h=(0,o.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:y}=(0,s.U)(),[T,E]=(0,n.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=m){const e=_[m];null!=e&&e!==T&&k.some((t=>t.value===e))&&E(e)}const D=e=>{const t=e.currentTarget,a=N.indexOf(t),l=k[a].value;l!==T&&(O(t),E(l),null!=m&&y(m,String(l)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:D,onClick:D},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function b(e){const t=(0,i.Z)();return n.createElement(p,(0,l.Z)({key:String(t)},e))}},79589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var l=a(83117),n=(a(67294),a(3905)),r=a(65488),i=a(85162);const o={sidebar_position:2,title:"Logical Deletion"},s=void 0,c={unversionedId:"query/global-filter/logical-deleted",id:"query/global-filter/logical-deleted",title:"Logical Deletion",description:"Readers cannot find anything related to global filters in this doc, because the filter required for logical deletion is built-in and hidden by Jimmer.",source:"@site/docs/query/global-filter/logical-deleted.mdx",sourceDirName:"query/global-filter",slug:"/query/global-filter/logical-deleted",permalink:"/jimmer-doc/docs/query/global-filter/logical-deleted",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/query/global-filter/logical-deleted.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Logical Deletion"},sidebar:"tutorialSidebar",previous:{title:"Custom Filters",permalink:"/jimmer-doc/docs/query/global-filter/user-filter"},next:{title:"Querying Association Tables",permalink:"/jimmer-doc/docs/query/associations"}},u={},d=[{value:"Mapping",id:"mapping",level:2},{value:"Usage",id:"usage",level:2},{value:"Filter root entity",id:"filter-root-entity",level:3},{value:"Filter associated objects",id:"filter-associated-objects",level:3},{value:"Ignore Logical Deletion Filter",id:"ignore-logical-deletion-filter",level:2},{value:"Reverse Logical Deletion Filter",id:"reverse-logical-deletion-filter",level:2}],p={toc:d};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Readers cannot find anything related to global filters in this doc, because the filter required for logical deletion is built-in and hidden by Jimmer.  ")),(0,n.kt)("h2",{id:"mapping"},"Mapping"),(0,n.kt)("p",null,"Logical deletion, also known as soft deletion, means data is not actually deleted from the database. Instead, data is hidden to give the illusion of deletion. This leaves room for recovering from accidental operations."),(0,n.kt)("p",null,"The mapping related to logical deletion is introduced in great detail in ",(0,n.kt)("a",{parentName:"p",href:"../../mapping/advanced/logical-deleted"},"Mapping / Advanced Mapping / Logical Deletion"),", so all the details are not repeated here, just a brief recap:"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true") \n    boolean isDeleted();\n    \n    ...other code omitted...\n}\n'))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val isDeleted: Boolean\n\n    ...other code omitted...\n}\n')))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"filter-root-entity"},"Filter root entity"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .select(table)\n    .execute(); \n"))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    .execute()\n")))),(0,n.kt)("p",null,"The generated SQL is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.DELETED,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    /* highlight-next-line */  \n    tb_1_.DELETED <> ? /* true */\n")),(0,n.kt)("h3",{id:"filter-associated-objects"},"Filter associated objects"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"AuthorTable author = Tables.AUTHOR_TABLE;\n\nList<Author> authors = sqlClient\n    .createQuery(author) \n    .select(\n        author.fetch(\n            Fetchers.AUTHOR_FETCHER\n                .allScalarFields()\n                .books(\n                    Fetchers.BOOK_FETCHER\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n"))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val authors = sqlClient\n    .createQuery(Author::class) {\n        select(\n            table.fetchBy {\n                allScalarFields()\n                books {\n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute() \n")))),(0,n.kt)("p",null,"Without caching enabled, this generates two SQLs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Query root entity"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME,\n    tb_1_.GENDER\nfrom AUTHOR tb_1_\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Query associated objects, apply logical deletion filter"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_2_.AUTHOR_ID,\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE \nfrom BOOK tb_1_\ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.BOOK_ID\nwhere\n        tb_2_.AUTHOR_ID in (\n            ? /* 1 */, ? /* 2 */, ? /* 3 */, ? /* 4 */, ? /* 5 */  \n        )\n    and\n        /* highlight-next-line */\n        tb_1_.DELETED <> ? /* true */\n")))),(0,n.kt)("h2",{id:"ignore-logical-deletion-filter"},"Ignore Logical Deletion Filter"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .filters(cfg -> { \u2776\n        cfg.setBehavior(LogicalDeletedBehavior.IGNORED); \u2777\n    })\n    .createQuery(table)\n    .select(table)\n    .execute();\n"))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .filters { \u2776\n        cfg.setBehavior(LogicalDeletedBehavior.IGNORED)\n    } \n    .createQuery(table)\n    .select(table)\n    .execute()\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u2776 Adjust filter config without affecting the current ",(0,n.kt)("inlineCode",{parentName:"p"},"sqlClient"),", create a new temporary ",(0,n.kt)("inlineCode",{parentName:"p"},"sqlClient"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u2777 Ignore soft deletion flag  "))),(0,n.kt)("p",null,"This time, the generated SQL no longer contains:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.DELETED,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\n")),(0,n.kt)("h2",{id:"reverse-logical-deletion-filter"},"Reverse Logical Deletion Filter"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .filters(cfg -> { \u2776\n        cfg.setBehavior(LogicalDeletedBehavior.REVERSED); \u2777\n    })\n    .createQuery(table)\n    .select(table)\n    .execute(); \n"))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .filters { \u2776\n        cfg.setBehavior(LogicalDeletedBehavior.REVERSED) \n    }\n    .createQuery(table)\n    .select(table) \n    .execute()\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u2776 Adjust filter config without affecting the current ",(0,n.kt)("inlineCode",{parentName:"p"},"sqlClient"),", create a new temporary ",(0,n.kt)("inlineCode",{parentName:"p"},"sqlClient")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u2777 Reverse the soft deletion flag, i.e. query deleted data"))),(0,n.kt)("p",null,"Executing again, the generated SQL is:  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE, \n    tb_1_.DELETED,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    /* highlight-next-line */\n    tb_1_.DELETED = ? /* true */ \n")),(0,n.kt)("p",null,"This time the filter condition is ",(0,n.kt)("inlineCode",{parentName:"p"},"tb_1_.DELETED = true"),", which is the exact opposite of the default filtering rule - it queries already deleted data."))}b.isMDXComponent=!0}}]);