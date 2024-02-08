"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(34334);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),i=n(67294),r=n(34334),o=n(72389),l=n(67392),s=n(7094),p=n(12466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:d,groupId:g,className:k}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,l.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:_}=(0,s.U)(),[v,w]=(0,i.useState)(f),I=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==v&&b.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==v&&(T(t),w(a),null!=g&&_(g,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>I.push(e),onKeyDown:S,onFocus:E,onClick:E},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,i.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,o.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},4548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(83117),i=(n(67294),n(3905)),r=n(65488),o=n(85162);const l={sidebar_position:1,title:"Usage"},s=void 0,p={unversionedId:"query/paging/usage",id:"query/paging/usage",title:"Usage",description:"Features of Jimmer Pagination",source:"@site/docs/query/paging/usage.mdx",sourceDirName:"query/paging",slug:"/query/paging/usage",permalink:"/jimmer-doc/docs/query/paging/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/query/paging/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Usage"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd25 Smart Paging",permalink:"/jimmer-doc/docs/query/paging/"},next:{title:"Table Join Optimization",permalink:"/jimmer-doc/docs/query/paging/unncessary-join"}},m={},u=[{value:"Features of Jimmer Pagination",id:"features-of-jimmer-pagination",level:2},{value:"When Used with Spring Data",id:"when-used-with-spring-data",level:2},{value:"When Not Using Spring Data",id:"when-not-using-spring-data",level:2},{value:"Jimmer&#39;s Page object",id:"jimmers-page-object",level:3},{value:"Implement Business Logic",id:"implement-business-logic",level:3},{value:"Internal Mechanism",id:"internal-mechanism",level:2},{value:"Dialects",id:"dialects",level:2},{value:"Default Behavior",id:"default-behavior",level:3},{value:"MySqlDialect",id:"mysqldialect",level:3},{value:"OracleDialect",id:"oracledialect",level:3},{value:"Used with Object Fetcher",id:"used-with-object-fetcher",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"features-of-jimmer-pagination"},"Features of Jimmer Pagination"),(0,i.kt)("p",null,"Pagination query is a very characteristic function of Jimmer, which can greatly improve development efficiency."),(0,i.kt)("p",null,"Pagination requires executing two SQL queries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Query the total number of rows that meet the criteria, the result of which can calculate how many pages there are in total, and whether the user's page number is out of bounds."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For discussion purposes, Jimmer refers to this SQL as ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Query all data within the current page, the number of returned data rows does not exceed the page size, and skip all data from previous pages."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For discussion purposes, Jimmer refers to this SQL as ",(0,i.kt)("inlineCode",{parentName:"p"},"data-query"),".")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Jimmer's feature: The developer only needs to write the ",(0,i.kt)("inlineCode",{parentName:"p"},"data-query")," ",(0,i.kt)("em",{parentName:"p"},"(actual ",(0,i.kt)("inlineCode",{parentName:"em"},"data-query")," without limit and offset)"),", and the framework automatically generates the ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query"),".  "),(0,i.kt)("p",{parentName:"admonition"},"Not only can Jimmer automatically generate ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query"),", it can also optimize ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query"),". This optimization will be discussed in ",(0,i.kt)("a",{parentName:"p",href:"./unncessary-join"},"next article"),".")),(0,i.kt)("h2",{id:"when-used-with-spring-data"},"When Used with Spring Data"),(0,i.kt)("p",null,"When used with Spring Data, developers derive custom Repository interfaces from ",(0,i.kt)("inlineCode",{parentName:"p"},"JRepository/KRepository"),", and there are two options for adding query methods to the custom interfaces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Declare abstract methods according to certain conventions, and let Jimmer automatically implement them."),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This usage is too simple, hiding all details, and is not suitable for discussing pagination here. "),(0,i.kt)("p",{parentName:"admonition"},"You can check ",(0,i.kt)("a",{parentName:"p",href:"../../spring/repository/abstract"},"Spring Section/Spring Data Style/Abstract Methods")," to learn how to implement pagination queries in this way."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Directly define default methods in the custom interface and implement the query logic yourself."))),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\n...other imports omitted...  \n\npublic interface BookRepository<Book, Long> extends JRepository<Book, Long> {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    default Page<Book> findBooks(\n        Pageable pageable,\n        @Nullable String name,\n        @Nullable String storeName,\n    ) {\n        return sql()\n                .createQuery(table)\n                .whereIf(\n                    name != null && !name.isEmpty(),\n                    table.name().eq(name)\n                )\n                .whereIf(\n                    storeName != null && !storeName.isEmpty(),\n                    table.store().name().eq(storeName)\n                )\n                .orderBy(SpringOrders.toOrders(table, pageable.getSort())) \u2776\n                .select(table)\n                .fetchPage( \u2777\n                    pageable.getPageNumber(), \n                    pageable.getPageSize()\n                    SpringPageFactory.getInstance()\n                );\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"import org.springframework.data.domain.Page\nimport org.springframework.data.domain.Pageable  \n...other imports omitted...\n\ninterface BookRepository<Book, Long> : KRepository<Book, Long> {\n\n    fun findBooks(\n        pageable: Pageable,\n        name: String? = null,\n        storeName: String? = null\n    ): Page<Book> =\n        sql\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name eq it)\n                }\n                storeName?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.store.name eq it)\n                }\n                orderBy(pageable.sort) \u2776\n                select(table)\n            }\n            .fetchSpringPage(pageable) \u2777\n}\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 Since Spring Data's ",(0,i.kt)("inlineCode",{parentName:"p"},"Pageable")," contains dynamic sorting, dynamic sorting needs to be applied. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 Pagination query, returns ",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.data.domain.Page<Book>")," type of object"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Jimmer pagination can use any ",(0,i.kt)("inlineCode",{parentName:"p"},"Page")," object, whether it's Spring Data's ",(0,i.kt)("inlineCode",{parentName:"p"},"Page"),", Jimmer's own ",(0,i.kt)("inlineCode",{parentName:"p"},"Page"),", or even ",(0,i.kt)("inlineCode",{parentName:"p"},"Page")," defined by third parties."),(0,i.kt)("p",{parentName:"blockquote"},"Here, the Java code uses ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringPageFactory.getInstance()")," to request the current pagination operation to return Spring Data's ",(0,i.kt)("inlineCode",{parentName:"p"},"Page"),"."),(0,i.kt)("p",{parentName:"blockquote"},"In fact, the Kotlin code can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringPageFactory.getInstance()")," for the same purpose, but in Kotlin there is a more convenient extension method ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchSpringPage()"),".")))),(0,i.kt)("p",null,"If we execute:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Page<Book> page = bookRepository.findBooks(\n    PageRequest.of(\n        1,\n        5,\n        SortUtils.toSort("name asc, edition desc") \n    ),\n    null,\n    null\n)\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In Spring Data, the page number of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pageable")," starts from 0 instead of 1, so this queries the second page.")),(0,i.kt)("p",null,"It will generate two SQL statements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"count-query"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    count(tb_1_.ID) \nfrom BOOK tb_1_\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"data-query ",(0,i.kt)("em",{parentName:"p"},"(assuming the database is H2)"),"  "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME, \n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_ \norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 5 */, ? /* 5 */ \n")))),(0,i.kt)("p",null,"This example allows us to understand Jimmer's pagination functionality, but Jimmer's Spring API hides some details. Therefore, next we bypass Spring Data and explain more clearly from a lower level perspective."),(0,i.kt)("h2",{id:"when-not-using-spring-data"},"When Not Using Spring Data"),(0,i.kt)("p",null,"Here is the English translation:"),(0,i.kt)("h3",{id:"jimmers-page-object"},"Jimmer's Page object"),(0,i.kt)("p",null,"Since Spring Data is not used, naturally ",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.data.domain.Page<T>")," cannot be used. "),(0,i.kt)("p",null,"For this, Jimmer defines ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.Page<T>")," with the following definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Page.java"',title:'"Page.java"'},"package org.babyfish.jimmer;\n\npublic class Page<T> {\n\n    private final List<T> rows;\n    \n    private final int totalRowCount;\n    \n    private final int totalPageCount;\n    \n    ...Omit other fields...\n    \n}\n")),(0,i.kt)("p",null,"It can be seen that Jimmer's own ",(0,i.kt)("inlineCode",{parentName:"p"},"Page<T>")," is much simpler than Spring Data's ",(0,i.kt)("inlineCode",{parentName:"p"},"Page<T>"),", the differences are:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.data.domain.Page<T>")," is designed for server-side paging so that the page must still maintain its previous state after being refreshed. A lot of information ",(0,i.kt)("em",{parentName:"p"},"(such as tedious sort information)")," needs to be returned verbatim to the client, so it is very complex.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.Page<T>")," is designed for rich client pages. Such client pages are stateful applications themselves, the server only needs to provide pure data services, so returning just the bare necessities is enough, hence very simple. ")))),(0,i.kt)("h3",{id:"implement-business-logic"},"Implement Business Logic"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public Page<Book> findBooks(\n    int pageIndex,\n    int pageSize,\n    @Nullable String name,\n    @Nullable String storeName  \n) {\n  return\n    sqlClient\n        .createQuery(table)\n        .whereIf(\n            name != null && !name.isEmpty(),\n            table.name().eq(name)  \n        )\n        .whereIf(\n            storeName != null && !storeName.isEmpty(),  \n            table.store().name().eq(storeName)\n        )\n        .orderBy(table.name().asc(), table.edition().desc())\n        .select(table)\n        // highlight-next-line  \n        .fetchPage(pageIndex, pageSize);\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(\n    pageIndex: Int,\n    pageSize: Int,\n    name: String? = null,\n    storeName: String? = null  \n): Page<Book> =\n  sql\n    .createQuery(Book::class) {\n        name?.takeIf { it.isNotEmpty() }?.let {\n            where(table.name eq it)\n        }\n        storeName?.takeIf { it.isNotEmpty() }?.let {\n            where(table.store.name eq it)  \n        }\n        orderBy(table.name.asc(), table.edition.desc())\n        select(table)\n    }\n    // highlight-next-line  \n    .fetchPage(pageIndex, pageSize)\n")))),(0,i.kt)("p",null,"The finally generated SQL is the same as the example discussed earlier with Spring Data, so I won't repeat it here."),(0,i.kt)("h2",{id:"internal-mechanism"},"Internal Mechanism"),(0,i.kt)("p",null,"In the above examples, we discussed language differences between Java and Kotlin, as well as using or not using Spring Data."),(0,i.kt)("p",null,"The underlying logic of these behaviors is the same, taking Java as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = Tables.BOOK_TABLE;\n\nConfigurableRootQuery<Book> query = \u2776\n  sqlClient\n    .createQuery(table)\n    .whereIf(\n        name != null && !name.isEmpty(),\n        table.name().eq(name)\n    )  \n    .whereIf(\n        storeName != null && !storeName.isEmpty(),\n        table.store().name().eq(storeName)\n    )\n    .orderBy(table.name().asc(), table.edition().desc())\n\nint totalCount = query.fetchUnlimitedCount(); \u2777\nint totalPage = (totalCount + pageSize - 1) / pageSize;\nif (pageIndex >= totalPage) {\n    return new Page<Book>(totalCount, totalPage, Collections.emptyList()); \n}\nList<Book> entities = query\n    .limit(pageSize, pageIndex * pageSize) \u2778 \n    .execute(); \u2779\nreturn new Page<>( \u277a\n    totalCount,\n    totalPage,\n    entities\n)\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To simplify the discussion, this pseudocode does not consider ",(0,i.kt)("a",{parentName:"p",href:"./reverse-sorting"},"reverse sorting optimization"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 Create the query, but do not execute it yet. I can call it the template query.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 Based on the original template query without modification, generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query"),", then execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query")," to get the total number of rows before pagination."),(0,i.kt)("p",{parentName:"li"},"Here the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUnlimitedCount")," method is a shortcut API, and its underlying logic is:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface ConfigurableRootQuery<T extends Table<?>, R> extends ... {\n\n    default int fetchUnlimitedCount() {\n        return count(null);\n    }\n    \n    default int fetchUnlimitedCount(Connection con) {\n        return reselect((q, t) -> q.select(t.count()))\n            .withoutSortingAndPaging()\n            .execute(con)\n            .get(0)\n            .intValue();\n    }\n}\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"reselect((q, t) -> q.select(t.count()))"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query")," does not query data, but queries COUNT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"withoutSortingAndPaging()"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query")," does not need the sorting clause ",(0,i.kt)("inlineCode",{parentName:"p"},"order by")," nor the paging clause ",(0,i.kt)("em",{parentName:"p"},"(such as H2's ",(0,i.kt)("inlineCode",{parentName:"em"},"limit ? offset ?"),")")))),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Not only can Jimmer automatically generate ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query"),", it can also automatically optimize ",(0,i.kt)("inlineCode",{parentName:"p"},"count-query"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"./unncessary-join"},"Join Optimization"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2778 ",(0,i.kt)("inlineCode",{parentName:"p"},"limit(limit, offset)"),": Based on the original template query without modification, generate the real ",(0,i.kt)("inlineCode",{parentName:"p"},"data-query")," with pagination limits.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2779 Execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"data-query")," generated in \u2778 to get the data within one page. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u277a Combine the data obtained in \u2777 and \u2779 into the page object and return it."))),(0,i.kt)("h2",{id:"dialects"},"Dialects"),(0,i.kt)("p",null,"This section discusses the SQL implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"data-query")," with pagination limits under different databases."),(0,i.kt)("p",null,"Consider the following single page data query:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = query\n  // highlight-next-line \n  .limit(/*limit*/ 10, /*offset*/ 90)\n  .execute();\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = query\n  // highlight-next-line\n  .limit(limit = 10, offset = 90)\n  .execute()  \n")))),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"limit(limit, offset)")," sets the pagination range. "),(0,i.kt)("p",null,"Different databases have vastly different support for pagination queries. So when creating SqlClient, the dialect needs to be specified."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Spring Data configuration method:  "),(0,i.kt)("p",{parentName:"li"},"Add a configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"jimmer.dialect")," with value as the class name of the dialect class provided by Jimmer:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:'language-title="application.yml"'},"jimmer:\n    dialect: org.babyfish.jimmer.sql.dialect.H2Dialect\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Non-Spring Data configuration method:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line  \n    .setDialect(new H2Dialect())\n    ...other code omitted...\n    .build();\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDialect(H2Dialect())\n    ...other code omitted...\n}\n")))))),(0,i.kt)("p",null,"Different dialects will use different SQL to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," query:"),(0,i.kt)("h3",{id:"default-behavior"},"Default Behavior"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Default behavior includes DefaultDialect, H2Dialect and PostgresDialect.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n  tb_1_.ID,\n  tb_1_.NAME,\n  tb_1_.EDITION,\n  tb_1_.PRICE,\n  tb_1_.STORE_ID\nfrom BOOK as tb_1_\nleft join BOOK_STORE as tb_2_\n  on tb_1_.STORE_ID = tb_2_.ID\nwhere tb_1_.PRICE between ? and ?\norder by tb_2_.NAME asc, tb_1_.NAME asc\n/* highlight-next-line */  \nlimit ? offset ?\n")),(0,i.kt)("h3",{id:"mysqldialect"},"MySqlDialect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n  tb_1_.ID,\n  tb_1_.NAME,\n  tb_1_.EDITION,\n  tb_1_.PRICE,\n  tb_1_.STORE_ID \nfrom BOOK as tb_1_\nleft join BOOK_STORE as tb_2_\n  on tb_1_.STORE_ID = tb_2_.ID\nwhere tb_1_.PRICE between ? and ?\norder by tb_2_.NAME asc, tb_1_.NAME asc\n/* highlight-next-line */\nlimit ?, ?  \n")),(0,i.kt)("h3",{id:"oracledialect"},"OracleDialect"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When offset is not 0:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from (\n  select core__.*, rownum rn__\n  from (\n    select\n      tb_1_.ID,\n      tb_1_.NAME,\n      tb_1_.EDITION,\n      tb_1_.PRICE,\n      tb_1_.STORE_ID\n    from BOOK as tb_1_\n    left join BOOK_STORE as tb_2_\n      on tb_1_.STORE_ID = tb_2_.ID\n    where tb_1_.PRICE between ? and ?\n    order by tb_2_.NAME asc, tb_1_.NAME asc  \n  ) core__ where rownum <= ? \u2776\n) limited__ where rn__ > ? \u2777\n")),(0,i.kt)("p",{parentName:"li"},"Where the variable at ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2776")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"limit + offset"),", and at ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2777")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When offset is 0:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select core__.* from (\n  select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID  \n  from BOOK as tb_1_\n  left join BOOK_STORE as tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID\n  core__ where rownum <= ? \u2776\n")),(0,i.kt)("p",{parentName:"li"},"Where \u2776 is the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),"."))),(0,i.kt)("h2",{id:"used-with-object-fetcher"},"Used with Object Fetcher"),(0,i.kt)("p",null,"The object fetcher defines the shape of the queried object, allowing the queried object to carry more associated objects. This feature can be used together with pagination."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"After the paged query is completed, Jimmer launches queries for other association objects, only for objects within a single page.")),(0,i.kt)("p",null,"Take the Spring Data mode as an example. Now, let's modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookRepository")," we discussed earlier to support object fetchers:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\n...other imports omitted...\n\npublic interface BookRepository<Book, Long> extends JRepository<Book, Long> {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    default Page<Book> findBooks(\n        Pageable pageable,\n        // highlight-next-line \n        @Nullable Fetch<Book> fetcher,\n        @Nullable String name,\n        @Nullable String storeName\n    ) {\n        return sql()\n            .createQuery(table)\n            .whereIf(\n                name != null && !name.isEmpty(),\n                table.name().eq(name)\n            )\n            .whereIf(\n                storeName != null && !storeName.isEmpty(),\n                table.store().name().eq(storeName)\n            )\n            .orderBy(SpringOrders.toOrders(table, pageable.getSort()))\n            .select(\n                // highlight-next-line\n                table.fetch(fetcher)\n            )\n            // highlight-next-line\n            .fetchPage(\n                pageable.getPageNumber(), \n                pageable.getPageSize(), \n                SpringPageFactory.getInstance()\n            );\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"import org.springframework.data.domain.Page\nimport org.springframework.data.domain.Pageable  \n...other imports omitted...\n\ninterface BookRepository<Book, Long> : KRepository<Book, Long> {\n\n    fun findBooks(\n        pageable: Pageable,\n        // highlight-next-line\n        fetcher: Fetcher<Book>? = null,\n        name: String? = null,\n        storeName: String? = null\n    ): Page<Book> =\n        sql\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name eq it)\n                }\n                storeName?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.store.name eq it)\n                }\n                orderBy(pageable.sort)\n                select(\n                    // highlight-next-line\n                    table.fetch(fetcher)\n                )\n            }\n            // highlight-next-line\n            .fetchSpringPage(pageable)\n}\n")))),(0,i.kt)("p",null,"If called as follows:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Page.java"',title:'"Page.java"'},'Page<Book> page = bookRepository.findBooks(\n    PageRequest.of(\n        1,\n        5,\n        SortUtils.toSort("name asc, edition desc")\n    ),\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        .store(\n            Fetchers.BOOK_STORE_FETCHER\n                .allScalarFields()\n        )\n        .authors(\n            Fetchers.AUTHOR_FETCHER\n                .allScalarFields()\n        ),\n    null, \n    null\n);\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Page.kt"',title:'"Page.kt"'},'val page = bookRepository.findBooks(\n    PageRequest.of(\n        1,\n        5,\n        SortUtils.toSort("name asc, edition desc")\n    ),\n    newFetcher(Book::class).by {\n        allScalarFields()\n        store {\n            allScalarFields()\n        }\n        authors {\n            allScalarFields()\n        }\n    }\n)\n')))),(0,i.kt)("p",null,"It will generate the following 4 SQL statements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"count-query"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    count(tb_1_.ID)\nfrom BOOK tb_1_ \n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"data-query ",(0,i.kt)("em",{parentName:"p"},"(assuming the database is H2)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\norder by \n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 5 */, ? /* 5 */\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Query the many-to-one association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store")," for the 5 paged objects"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME\nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.ID in (\n        ? /* 2 */, ? /* 1 */  \n    )\n")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Although there are 5 paged objects, their foreign key ",(0,i.kt)("inlineCode",{parentName:"p"},"STORE_ID")," only has two values."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Query the many-to-many association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," for the 5 paged objects"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_2_.BOOK_ID,\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME\nfrom AUTHOR tb_1_\ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.AUTHOR_ID\nwhere\n    tb_2_.BOOK_ID in (\n        ? /* 10 */, ? /* 3 */, ? /* 2 */,  \n        ? /* 1 */, ? /* 9 */\n    )\n")))),(0,i.kt)("p",null,"Finally, in the obtained pagination, each object conforms to the data structure of the object fetcher."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // hightlight-next-line\n    "content":[ // Current page\n        {\n            "id":12,\n            "name":"GraphQL in Action",\n            "edition":3,\n            "price":80,\n            "store":{\n                "id":2,\n                "name":"MANNING",\n                "website":null\n            },\n            "authors":[\n                {\n                    "id":5,\n                    "firstName":"Samer",\n                    "lastName":"Buna",\n                    "gender":"MALE"\n                }\n            ]\n        },\n        {\n            "id":11,\n            "name":"GraphQL in Action",\n            "edition":2,\n            "price":81,\n            "store":{\n                "id":2,\n                "name":"MANNING",\n                "website":null\n            },\n            "authors":[\n                {\n                    "id":5,\n                    "firstName":"Samer",\n                    "lastName":"Buna",\n                    "gender":"MALE"\n                }\n            ]\n        },\n        {\n            "id":10,\n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":82,\n            "store":{\n                "id":2,\n                "name":"MANNING",\n                "website":null\n            },\n            "authors":[\n                {\n                    "id":5,\n                    "firstName":"Samer",\n                    "lastName":"Buna",\n                    "gender":"MALE"\n                }\n            ]\n        },\n        {\n            "id":3,\n            "name":"Learning GraphQL",\n            "edition":3,\n            "price":51,\n            "store":{\n                "id":1,\n                "name":"O\'REILLY",\n                "website":null\n            },\n            "authors":[\n                {\n                    "id":2,\n                    "firstName":"Alex",\n                    "lastName":"Banks",\n                    "gender":"MALE"\n                },\n                {\n                    "id":1,\n                    "firstName":"Eve",\n                    "lastName":"Procello",\n                    "gender":"FEMALE"\n                }\n            ]\n        },\n        {\n            "id":2,\n            "name":"Learning GraphQL",\n            "edition":2,\n            "price":55,\n            "store":{\n                "id":1,\n                "name":"O\'REILLY",\n                "website":null\n            },\n            "authors":[\n                {\n                    "id":2,\n                    "firstName":"Alex",\n                    "lastName":"Banks",\n                    "gender":"MALE"\n                },\n                {\n                    "id":1,\n                    "firstName":"Eve",\n                    "lastName":"Procello",\n                    "gender":"FEMALE"\n                }\n            ]\n        }\n    ],\n    // hightlight-next-line\n    "totalPages":3, // Total page count is 3\n    // hightlight-next-line\n    "totalElements":12, // Total row count before pagination is 12\n\n    ...Spring Data\'s Page object has too many properties, ommitted...\n}\n')))}d.isMDXComponent=!0}}]);