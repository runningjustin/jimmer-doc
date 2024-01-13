"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),i=n(67294),l=n(34334),o=n(72389),r=n(67392),s=n(7094),p=n(12466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:d,groupId:k,className:b}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,r.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[w,T]=(0,i.useState)(f),_=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&N.some((t=>t.value===e))&&T(e)}const q=e=>{const t=e.currentTarget,n=_.indexOf(t),a=N[n].value;a!==w&&(I(t),T(a),null!=k&&v(k,String(a)))},B=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},N.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:B,onFocus:q,onClick:q},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,i.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},82348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(83117),i=(n(67294),n(3905)),l=n(65488),o=n(85162);const r={sidebar_position:1,title:"Feature Introduction"},s=void 0,p={unversionedId:"quick-view/dsl/feature",id:"quick-view/dsl/feature",title:"Feature Introduction",description:"Jimmer SQL DSL",source:"@site/docs/quick-view/dsl/feature.mdx",sourceDirName:"quick-view/dsl",slug:"/quick-view/dsl/feature",permalink:"/jimmer-doc/docs/quick-view/dsl/feature",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/quick-view/dsl/feature.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Feature Introduction"},sidebar:"tutorialSidebar",previous:{title:"Arbitrary Dynamic Query",permalink:"/jimmer-doc/docs/quick-view/dsl/"},next:{title:"Super QBE",permalink:"/jimmer-doc/docs/quick-view/dsl/super_qbe"}},m={},u=[{value:"Jimmer SQL DSL",id:"jimmer-sql-dsl",level:2},{value:"Dynamic Predicates",id:"dynamic-predicates",level:2},{value:"Dynamic Table Joins",id:"dynamic-table-joins",level:2},{value:"Define dynamic table joins",id:"define-dynamic-table-joins",level:3},{value:"Ignore useless table joins",id:"ignore-useless-table-joins",level:3},{value:"Merge Conflicting Table Joins",id:"merge-conflicting-table-joins",level:3},{value:"Implicit Subqueries",id:"implicit-subqueries",level:2},{value:"Define implicit subqueries",id:"define-implicit-subqueries",level:3},{value:"Ignore useless subqueries",id:"ignore-useless-subqueries",level:3},{value:"Merge conflicting subqueries",id:"merge-conflicting-subqueries",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"jimmer-sql-dsl"},"Jimmer SQL DSL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Different from most ORM DSLs that only provide strong typing, Jimmer DSL aims to solve the low efficiency issue of native SQL under complex scenarios and offers a brand new abstraction."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"So Jimmer SQL DSL has essential differences from most other SQL DSLs ",(0,i.kt)("em",{parentName:"p"},"(which is also the original motivation of the Jimmer project)"),"  "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Jimmer DSL can embed native SQL snippets and keeps connected with database-specific features. "))),(0,i.kt)("p",null,"To quickly preview, this chapter only focuses on 1."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For 2, readers who are interested can check ",(0,i.kt)("a",{parentName:"p",href:"../../query/native-sql"},"Native Expressions"),".")),(0,i.kt)("h2",{id:"dynamic-predicates"},"Dynamic Predicates"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"@Repository\npublic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    List<Book> findBooks(\n        // highlight-next-line\n        @Nullable String name, \n        // highlight-next-line\n        @Nullable BigDecimal minPrice,\n        // highlight-next-line  \n        @Nullable BigDecimal maxPrice, \n        @Nullable Fetcher<Book> fetcher\n    ) {  \n        BookTable table = Tables.BOOK_TABLE;\n\n        return sqlClient\n            .createQuery(table)\n            // highlight-next-line\n            .where(table.name().ilikeIf(name)) \u2776\n            // highlight-next-line\n            .where(table.price().betweenIf(minPrice, maxPrice)) \u2777\n            .select(table.fetch(fetcher))\n            .execute();\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"@Repository  \nclass BookRepository(\n    private val sqlClient: KSqlClient\n) {\n\n    fun findBooks( \n        // highlight-next-line\n        name: String? = null,\n        // highlight-next-line\n        minPrice: BigDecimal? = null, \n        // highlight-next-line\n        maxPrice: BigDecimal? = null,\n        fetcher: Fetcher<Book>? = null\n    ): List<Book> =  \n        sqlClient  \n            .createQuery(Book::class) {\n                // highlight-next-line\n                where(table.name `ilike?` name) \u2776\n                // highlight-next-line \n                where(table.price.`between?`(minPrice, maxPrice)) \u2777\n            }\n            .select(table.fetch(table))\n            .execute() \n}\n")))),(0,i.kt)("p",null,"Where the meaning of the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetcher")," parameter has been introduced in ",(0,i.kt)("a",{parentName:"p",href:"../fetch"},"Quick Tour/Fetch Any Shape"),", this article does not repeat it and readers can ignore it.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 Different from the static predicate ",(0,i.kt)("inlineCode",{parentName:"p"},"ilike"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ilikeIf"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ilike?")," is a dynamic predicate that decides whether to add the SQL condition based on parameters. "),(0,i.kt)("p",{parentName:"li"},"  If ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is neither null nor empty string, the SQL condition ",(0,i.kt)("inlineCode",{parentName:"p"},"name ilike :name")," will be added.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 Different from the static predicate ",(0,i.kt)("inlineCode",{parentName:"p"},"between"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"betweenIf"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"between?")," is a dynamic predicate that decides whether to add the SQL condition based on parameters. There are four cases:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If both ",(0,i.kt)("inlineCode",{parentName:"p"},"minPrice")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxPrice")," are not null, the SQL condition ",(0,i.kt)("inlineCode",{parentName:"p"},"price between :minPrice and :maxPrice")," will be added.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If only ",(0,i.kt)("inlineCode",{parentName:"p"},"minPrice")," is not null, the SQL condition ",(0,i.kt)("inlineCode",{parentName:"p"},"name >= :minPrice")," will be added.   ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If only ",(0,i.kt)("inlineCode",{parentName:"p"},"maxPrice")," is not null, the SQL condition ",(0,i.kt)("inlineCode",{parentName:"p"},"name <= :maxPrice")," will be added.   ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If both ",(0,i.kt)("inlineCode",{parentName:"p"},"minPrice")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxPrice")," are null, no SQL condition will be added.   "))))),(0,i.kt)("p",null,"Now let's see the effects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When all three parameters are null:  "),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = bookRepository.findBooks(\n    null, // name  \n    null, // minPrice\n    null, // maxPrice\n    null\n);\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = bookRepository.findBooks() \n")))),(0,i.kt)("p",{parentName:"li"},"  No where condition will be generated and the SQL is:  "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \n// highlight-next-line\n// No SQL predicates\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When all three parameters are not null:   "),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = bookRepository.findBooks(\n    "GraphQL", // name  \n    new BigDecimal(20), // minPrice\n    new BigDecimal(50), // maxPrice \n    null \n);\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = bookRepository.findBooks(\n    name = "GraphQL",\n    minPrice = BigDecimal(20),  \n    maxPrice = BigDecimal(50)  \n)\n')))),(0,i.kt)("p",{parentName:"li"},"  The SQL is:  "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,  \n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere  \n        /* highlight-next-line */\n        lower(tb_1_.NAME) like ? /* %graphql% */\n    and\n        /* highlight-next-line */\n        (tb_1_.PRICE between ? /* 20 */ and ? /* 50 */) \n")))),(0,i.kt)("h2",{id:"dynamic-table-joins"},"Dynamic Table Joins"),(0,i.kt)("h3",{id:"define-dynamic-table-joins"},"Define dynamic table joins"),(0,i.kt)("p",null,"In the previous examples, our dynamic SQL conditions are all applied to the current entity ",(0,i.kt)("em",{parentName:"p"},"(Book)"),". Next, we use the reference association ",(0,i.kt)("em",{parentName:"p"},"(one-to-one or many-to-one)")," to get associated object and add SQL conditions for it.  "),(0,i.kt)("p",null,"The many-to-one association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store")," is associated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore")," entity. Let us add dynamic SQL conditions for ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore.name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore.website"),".  "),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"@Repository\npublic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient; \n    }\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable BigDecimal minPrice,  \n        @Nullable BigDecimal maxPrice,  \n        // highlight-next-line\n        @Nullable String storeName,\n        // highlight-next-line  \n        @Nullable String storeWebsite,\n        @Nullable Fetcher<Book> fetcher \n    ) {\n        BookTable table = Tables.BOOK_TABLE;\n\n        return sqlClient  \n            .createQuery(table)\n            .where(table.name().ilikeIf(name))  \n            .where(table.price().betweenIf(minPrice, maxPrice))  \n            // highlight-next-line\n            .where(table.store().name().ilikeIf(storeName)) \u2776 \n            // highlight-next-line\n            .where(table.store().website().ilikeIf(storeWebsite)) \u2777\n            .select(table.fetch(fetcher))\n            .execute(); \n    } \n} \n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"@Repository\nclass BookRepository(\n    private val sqlClient: KSqlClient  \n) {\n\n    fun findBooks(\n        name: String? = null,\n        minPrice: BigDecimal? = null,\n        maxPrice: BigDecimal? = null,  \n        // highlight-next-line\n        storeName: String? = null,\n        // highlight-next-line\n        storeWebsite: String? = null,  \n        fetcher: Fetcher<Book>? = null\n    ): List<Book> =\n        sqlClient\n            .createQuery(Book::class) { \n                where(table.name `ilike?` name)  \n                where(table.price.`between?`(minPrice, maxPrice))   \n                // highlight-next-line\n                where(table.store.name `ilike?` storeName) \u2776\n                // highlight-next-line\n                where(table.store.name `ilike?` storeWebsite) \u2777\n            }\n            .select(table.fetch(table))\n            .execute() \n}\n")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The path ",(0,i.kt)("inlineCode",{parentName:"p"},"table.store()")," in Java code or ",(0,i.kt)("inlineCode",{parentName:"p"},"table.name")," in Kotlin code is called a dynamic table join path, which is represented by the following SQL logic"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"from BOOK b\n    /* highlight-next-line */\n    inner join BOOK_STORE s on b.STORE_ID = s.ID\n")),(0,i.kt)("p",{parentName:"admonition"},"In fact, if the entity model is richer, you can write a longer path,\nsuch as 'table.store().city().province()'."),(0,i.kt)("p",{parentName:"admonition"},"Here, just for the quick preview,\nthere is no need to build richer entity model to demonstrate a longer join path,\nand the shortest join path 'table.store()' is enough.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 When 'storeName' is neither null nor empty string"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Associate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore")," entity via the association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the SQL condition to 'BookStore.name'")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 When 'storeWebsite' is neither null nor empty string"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Associate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore")," entity via the association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the SQL condition to 'BookStore.website'"))))),(0,i.kt)("h3",{id:"ignore-useless-table-joins"},"Ignore useless table joins"),(0,i.kt)("p",null,"If both the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"storeWebsite")," parameters are null"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = bookRepository.findBooks(\n    null,\n    null, \n    null, \n    null, // storeName\n    null, // storeWebsite\n    null\n);\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = bookRepository.findBooks()\n")))),(0,i.kt)("p",null,"This will cause the 'ilikeIf'/'ilike?' at \u2776 and \u2777 to be invalid, further causing 'table.store()'/'table.store' to be ignored.\nThat is, although a table join is created, it is not used."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If a table join is created in the DSL but is not actually used, the table join will be automatically ignored and there will be no corresponding SQL join in the generated SQL statement.")),(0,i.kt)("p",null,"The generated SQL statement is as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\n// highlight-next-line\n// No SQL table joins\n")),(0,i.kt)("h3",{id:"merge-conflicting-table-joins"},"Merge Conflicting Table Joins"),(0,i.kt)("p",null,"If both ",(0,i.kt)("inlineCode",{parentName:"p"},"storeName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"storeWebsite")," parameters are not null:   "),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = bookRepository.findBooks(\n    null,\n    null,\n    null,\n    "M", // storeName\n    ".com", // storeWebsite \n    null\n);\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = bookRepository.findBooks( \n    storeName = "M",\n    storeWebsite = ".com"  \n)\n')))),(0,i.kt)("p",null,"This will make both \u2776 and \u2777 ",(0,i.kt)("inlineCode",{parentName:"p"},"ilikeIf"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ilike?")," effective, which further makes both table joins ",(0,i.kt)("inlineCode",{parentName:"p"},"table.store()"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"table.store")," effective. That is, the table join is created and used multiple times.  "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If conflicting table joins of the same association are created multiple times in DSL, all the conflicting joins will be automatically merged into one JOIN in the final SQL without duplicate JOINs.  ")),(0,i.kt)("p",null,"The generated SQL is:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,  \n    tb_1_.EDITION,\n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \n/* highlight-start */  \n/* Multiple conflicting table joins are merged into one */\ninner join BOOK_STORE tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID\n/* highlight-end */\nwhere  \n        lower(tb_2_.NAME) like ? /* %m% */\n    and \n        lower(tb_2_.WEBSITE) like ? /* %.com% */  \n")),(0,i.kt)("h2",{id:"implicit-subqueries"},"Implicit Subqueries"),(0,i.kt)("h3",{id:"define-implicit-subqueries"},"Define implicit subqueries"),(0,i.kt)("p",null,"In the previous examples, the dynamic table joins are created based on references ",(0,i.kt)("em",{parentName:"p"},"(one-to-one or many-to-one)"),"."),(0,i.kt)("p",null,"For collection associations ",(0,i.kt)("em",{parentName:"p"},"(one-to-many or many-to-many)"),", we can create implicit subqueries.  "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Actually, we can also create dynamic table joins based on collection associations using special DSL syntax. But it is more recommended to create implicit subqueries based on collection associations.   ")),(0,i.kt)("p",null,"Next, we demonstrate related features using the many-to-many association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors"),"."),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"@Repository\npublic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable BigDecimal minPrice,\n        @Nullable BigDecimal maxPrice,\n        @Nullable String storeName,\n        @Nullable String storeWebsite,\n        @Nullable String authorName,\n        // highlight-next-line\n        @Nullable Gender authorGender, \n        // highlight-next-line\n        @Nullable Fetcher<Book> fetcher\n    ) {\n        BookTable table = Tables.BOOK_TABLE;\n\n        return sqlClient\n            .createQuery(table)\n            .where(table.name().ilikeIf(name))\n            .where(table.price().betweenIf(minPrice, maxPrice))\n            .where(table.store().name().ilikeIf(storeName))  \n            .where(table.store().website().ilikeIf(storeWebsite))\n            .where(\n                table.authors(author -> \u2776  \n                    Predicate.or(\n                        author.firstName().ilikeIf(authorName),\n                        author.lastName().ilikeIf(authorName)\n                    )\n                )\n            )\n            .where(\n                table.authors(author -> \u2777\n                    author.gender().eqIf(authorGender)\n                )\n            ) \n            .select(table.fetch(fetcher))\n            .execute();\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"@Repository \nclass BookRepository(\n    private val sqlClient: KSqlClient  \n) {\n\n    fun findBooks(\n        name: String? = null,\n        minPrice: BigDecimal? = null,\n        maxPrice: BigDecimal? = null,\n        storeName: String? = null, \n        storeWebsite: String? = null,\n        authorName: String? = null,\n        authorGender: String? = null,\n        fetcher: Fetcher<Book>? = null\n    ): List<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                where(table.name `ilike?` name)   \n                where(table.price.`between?`(minPrice, maxPrice))\n                where(table.store.name `ilike?` storeName)  \n                where(table.store.name `ilike?` storeWebsite)\n                where += table.authors { \u2776\n                    or(\n                        firstName `ilike?` authorName,  \n                        lastName `ilike?` authorName\n                    )\n                } \n                where += table.authors { \u2777  \n                    gender `eq?` authorGender\n                }\n            }\n            .select(table.fetch(table))\n            .execute()  \n}\n")))),(0,i.kt)("p",null,"The two SQL conditions based on lambda expressions at \u2776 and \u2777 are implicit subqueries.   "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Actually these two implicit subqueries can be merged into one. But two subqueries are created on purpose here to demonstrate subsequent features.    ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 Create the subquery of associated ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," objects through the many-to-many association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," and check if ",(0,i.kt)("inlineCode",{parentName:"p"},"Author"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"firstName")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"lastName")," property fuzzy matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorName")," parameter.    ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 Create the subquery of associated ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," objects through the many-to-many association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," and check if ",(0,i.kt)("inlineCode",{parentName:"p"},"Author"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"gender")," property equals the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorGender")," parameter.  "))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If effective, implicit subqueries will eventually generate SQL ",(0,i.kt)("inlineCode",{parentName:"p"},"exists")," statements. The subqueries in SQL ",(0,i.kt)("inlineCode",{parentName:"p"},"exists")," usually have a condition for joining parent and child queries.     "),(0,i.kt)("p",{parentName:"admonition"},"However, from the above code, we can see that all the conditions in subqueries are applied to ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," objects without the join condition.     "),(0,i.kt)("p",{parentName:"admonition"},"Actually, the join condition between parent and child queries is implicitly included by implicit subqueries. It is always generated automatically. So users only need to write conditions related to associated objects.      "),(0,i.kt)("p",{parentName:"admonition"},"Note: Here we are discussing implicit subqueries instead of normal subqueries ",(0,i.kt)("em",{parentName:"p"},"(Jimmer also supports normal subqueries which are not included in the quick tour)"),". The rules here do not apply to normal subqueries.   ")),(0,i.kt)("h3",{id:"ignore-useless-subqueries"},"Ignore useless subqueries"),(0,i.kt)("p",null,"If both ",(0,i.kt)("inlineCode",{parentName:"p"},"authorName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"authorGender")," parameters are null:      "),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = bookRepository.findBooks(\n    null,  \n    null,\n    null,\n    null,\n    null,\n    null, // authorName\n    null, // authorGender \n    null  \n);\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = bookRepository.findBooks()  \n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The first implicit subquery will be ignored:   "),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"where( \u2464\n    table.authors(author -> \u2463\n        Predicate.or( \u2462\n            author.firstName().ilikeIf(authorName), \u2460\n            author.lastName().ilikeIf(authorName) \u2461\n        )\n    )\n)\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"where += \u2464\n    table.authors { \u2463\n        or( \u2462\n            firstName `ilike?` authorName, \u2460\n            lastName `ilike?` authorName \u2461\n        )\n    }\n")))),(0,i.kt)("p",{parentName:"li"},"  When ",(0,i.kt)("inlineCode",{parentName:"p"},"authorName")," is null or empty string,   "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At \u2460 and \u2461, ",(0,i.kt)("inlineCode",{parentName:"p"},"ilikeIf"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ilike?")," will be ignored and return null   ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As expressions at \u2460 and \u2461 are null, the ",(0,i.kt)("inlineCode",{parentName:"p"},"or")," expression at \u2462 will become null    ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the ",(0,i.kt)("inlineCode",{parentName:"p"},"or")," expression at \u2462 being null will lead to no SQL conditions for the subquery,\nso the preicate based on implicit subquery at \u2463 is null.   ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The expression at \u2463  being null make ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," at \u2464 become meaningless, so the whole operation will be ignored.    "),(0,i.kt)("p",{parentName:"li"},"That is, the first implicit subquery is ignored.  ")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Similarly, the second implicit subquery will also be ignored.  "))),(0,i.kt)("p",null,"The final SQL does not contain any subqueries:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \n// highlight-next-line\n// No SQL sub queries \n")),(0,i.kt)("h3",{id:"merge-conflicting-subqueries"},"Merge conflicting subqueries"),(0,i.kt)("p",null,"If both ",(0,i.kt)("inlineCode",{parentName:"p"},"authorName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"authorGender")," parameters are not null:      "),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = bookRepository.findBooks(\n    null,   \n    null,  \n    null,\n    null,\n    null,\n    "A", // authorName  \n    Gender.MALE, // authorGender\n    null  \n);\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = bookRepository.findBooks(\n    authorName = "A",\n    authorGender = Gender.MALE  \n)\n')))),(0,i.kt)("p",null,"In this case, two implicit subqueries based on the same association ",(0,i.kt)("em",{parentName:"p"},"(Book.authors)")," will take effect.  "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If conflicting implicit subqueries of the same association are created multiple times in DSL, all the conflicting subqueries will be automatically merged into one subquery in the final SQL.")),(0,i.kt)("p",null,"The final generated SQL is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    /* Multiple conflicting implicit subqueries are merged into one */\n    exists(\n        select\n            1\n        from AUTHOR tb_2_\n        inner join BOOK_AUTHOR_MAPPING tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n                /* Parent-child query join condition implied by the implicit subquery */\n                tb_3_.BOOK_ID = tb_1_.ID\n            and\n                (\n                    lower(tb_2_.FIRST_NAME) like ? /* %a% */\n                or\n                    lower(tb_2_.LAST_NAME) like ? /* %a% */\n                )\n            and\n                tb_2_.GENDER = ? /* M */\n    )\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"There is a restriction on conflicting implicit subquery merges, multiple subqueries that are merged must be inside the same context of and, or, or not.")))}d.isMDXComponent=!0}}]);