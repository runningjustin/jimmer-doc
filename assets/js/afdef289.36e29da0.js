"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:d,groupId:h,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[E,T]=(0,r.useState)(N),_=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==E&&b.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,n=_.indexOf(t),a=b[n].value;a!==E&&(x(t),T(a),null!=h&&y(h,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>_.push(e),onKeyDown:S,onFocus:w,onClick:w},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},74985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:4,title:"SQL Log"},s=void 0,p={unversionedId:"configuration/sql-log",id:"configuration/sql-log",title:"SQL Log",description:"For ORM, it is important to print generated SQL in logs.",source:"@site/docs/configuration/sql-log.mdx",sourceDirName:"configuration",slug:"/configuration/sql-log",permalink:"/jimmer-doc/docs/configuration/sql-log",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/configuration/sql-log.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"SQL Log"},sidebar:"tutorialSidebar",previous:{title:"Batch Control",permalink:"/jimmer-doc/docs/configuration/batch-size"},next:{title:"Default Enum Strategy",permalink:"/jimmer-doc/docs/configuration/default-enum-strategy"}},u={},m=[{value:"Enable SQL Log",id:"enable-sql-log",level:2},{value:"Pretty SQL",id:"pretty-sql",level:2},{value:"Inline SQL Parameters",id:"inline-sql-parameters",level:2},{value:"Embed Stack Trace",id:"embed-stack-trace",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For ORM, it is important to print generated SQL in logs."),(0,r.kt)("h2",{id:"enable-sql-log"},"Enable SQL Log"),(0,r.kt)("p",null,"There are two ways to enable SQL logs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When using Spring Boot Starter, there are two ways to configure:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,r.kt)("em",{parentName:"p"},"(or application.properties)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"jimmer:\n    show-sql: true\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure global Bean"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic Executor executor() {\n    return Executor.log(); \n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun executor(): Executor = \n    Executor.log()\n")))),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If both methods above are used ",(0,r.kt)("em",{parentName:"p"},"(not recommended)"),", the second method takes precedence."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use underlying API"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    ...Omit other configurations...\n    .build();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    ...Omit other configurations...\n}\n")))))),(0,r.kt)("p",null,"The actual printed logs are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jimmer> sql: select tb_1_.ID, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID from BOOK tb_1_  where lower(tb_1_.NAME) like ?  order by tb_1_.NAME asc, tb_1_.EDITION desc limit ?, ?, variables: [%graphql%, 0, 10], purpose: QUERY\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If only the SQL log is turned on, the above log will not wrap.")),(0,r.kt)("p",null,"The log has three parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sql"),": The SQL statement being executed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"variables"),": The JDBC parameters associated with ",(0,r.kt)("inlineCode",{parentName:"p"},"sql"),', which is an array whose length is the same as the number of "?" characters in ',(0,r.kt)("inlineCode",{parentName:"p"},"sql"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"purpose"),": The reason why the SQL is executed, which is an enum with the following values:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"QUERY"),": Query directly executed by developers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),": Operations performed by developers via ",(0,r.kt)("a",{parentName:"p",href:"../mutation/update-statement"},"update statements"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),": Operations performed by developers via ",(0,r.kt)("a",{parentName:"p",href:"../mutation/delete-statement"},"delete statements"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"LOAD"),": Query executed automatically by Jimmer to get the value of associated properties or calculated properties in ",(0,r.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"object fetcher"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"EXPORT"),": The user initiates a query to other microservices, and its ",(0,r.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"object fetcher")," contains remote associations pointing to the current service. Jimmer automatically exposes the data of this service.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MUTATE"),": Operations specified by developers via ",(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command"},"save commands"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"EVICT"),": In some cases, the cache that should be cleared cannot be determined solely based on the event information of Jimmer triggers. Jimmer will automatically execute some queries to accurately determine which caches should be cleared."))))),(0,r.kt)("h2",{id:"pretty-sql"},"Pretty SQL"),(0,r.kt)("p",null,"In the previous example, the SQL log is printed in one line, which is poorly readable."),(0,r.kt)("p",null,"Therefore, the SQL needs to be formatted. There are two implementation methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When using Spring Boot Starter"),(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,r.kt)("em",{parentName:"p"},"(or application.properties)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"jimmer:\n    show-sql: true\n    # highlight-next-line  \n    pretty-sql: true\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When using underlying API"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    // highlight-next-line\n    .setSqlFormatter(SqlFormatter.PRETTY)\n    ...Omit other configurations...\n    .build();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    // highlight-next-line\n    setSqlFormatter(SqlFormatter.PRETTY)\n    ...Omit other configurations...\n}\n")))))),(0,r.kt)("p",null,"The log output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Execute SQL===>\nPurpose: QUERY\nSQL: select \n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    lower(tb_1_.NAME) like ? /* %graphql% */ \u2776   \norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 0 */ \u2777, ? /* 10 */ \u2778\nJDBC response status: success\nTime cost: 8ms\n<===Execute SQL\n")),(0,r.kt)("p",null,"In this mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The SQL statement will be automatically formatted, automatically wrapped, and automatically indented.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2776 \u2777 \u2778 Unlike the previous example, all JDBC parameters are not printed together, but injected into the original SQL as comments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Other information will be printed, such as whether SQL execution is successful, total execution time of SQL. For insert, update, delete operations, the number of affected rows will also be printed."))),(0,r.kt)("h2",{id:"inline-sql-parameters"},"Inline SQL Parameters"),(0,r.kt)("p",null,"In the previous examples, the JDBC parameters in the SQL logs were inserted after the JDBC parameter placeholders ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," as comment, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"? /* %graphql% */"),". "),(0,r.kt)("p",null,"Perhaps you want the parameters to be inlined into the SQL statement directly, making it look as if no JDBC parameters were used. This way, the SQL statement in the logs can be copied directly into a SQL IDE to execute."),(0,r.kt)("p",null,"There are two ways to achieve this "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using Spring Boot Starter:"),(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,r.kt)("em",{parentName:"p"},"(or application.properties)"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"jimmer:\nshow-sql: true\npretty-sql: true\n# highlight-next-line\ninline-sql-variables: true\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using low-level API"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    // highlight-next-line\n    .setSqlFormatter(SqlFormatter.INLINE_PRETTY)\n    ...other configs omitted...\n    .build();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setExecutor(Executor.log()) \n    // highlight-next-line\n    setSqlFormatter(SqlFormatter.INLINE_PRETTY)\n    ...other configs omitted...\n}\n")))))),(0,r.kt)("p",null,"The log output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Execute SQL===>\nPurpose: QUERY\nSQL: select \n    tb_1_.ID, \n    tb_1_.CREATED_TIME, \n    tb_1_.MODIFIED_TIME, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK tb_1_ \nwhere \n    lower(tb_1_.NAME) like '%graphql%' \u2776\norder by \n    tb_1_.NAME asc, \n    tb_1_.EDITION desc \nlimit 0 \u2777, 10 \u2778\nJDBC response status: success\nTime cost: 8ms\n<===Execute SQL\n")),(0,r.kt)("p",null,"In this mode, we can see the parameters at \u2776 \u2777 \u2778 are directly inlined."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This only affects the logs. The actual SQL executed still uses JDBC parameters.")),(0,r.kt)("h2",{id:"embed-stack-trace"},"Embed Stack Trace"),(0,r.kt)("p",null,"In addition to coding, developers often need to troubleshoot issues. Whether it is a functional error or a performance issue, the developer needs to investigate it."),(0,r.kt)("p",null,"If the SQL log only prints JDBC information centered on SQL, the user cannot associate the SQL log with the application code, which is not conducive to users troubleshooting."),(0,r.kt)("p",null,"Jimmer provides a configuration option that if specified, before executing SQL, it will check the stack trace information of the current thread. "),(0,r.kt)("p",null,"However, these stack traces contain too much information, including infrastructure call frames represented by jdk, jdbc driver, jimmer and spring, while the business-related information that developers care about will be overwhelmed in the ocean of information."),(0,r.kt)("p",null,"This configuration type is ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.Collection<String>")," allowing developers to specify multiple packages or class prefixes. Jimmer will use them to filter the stack trace information. If a call frame can pass the filter, Jimmer will consider it related to user business and include it in the callback parameter before execution."),(0,r.kt)("p",null,"For SQL log printing, call frames that can pass the filter will appear in the print output to help users troubleshoot issues."),(0,r.kt)("p",null,"There are two implementation methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When using Spring Boot Starter"),(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,r.kt)("em",{parentName:"p"},"(or application.properties)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"jimmer:\n    show-sql: true\n    pretty-sql: true\n    # highlight-next-line\n    executor-context-prefixes:\n    # highlight-next-line\n    - com.example.business\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When using underlying API"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    .setSqlFormatter(SqlFormatter.PRETTY)\n    // highlight-next-line\n    .setExecutorContextPrefixes(\n        Collections.singleton(\n            // highlight-next-line\n            "com.example.business"\n        )\n    )\n    ...Omit other configurations...\n    .build();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    setSqlFormatter(SqlFormatter.PRETTY)\n    // highlight-next-line\n    setExecutorContextPrefixes(\n        listOf(\n            // highlight-next-line\n            "com.example.business"\n        )\n    )\n    ...Omit other configurations...\n}\n')))))),(0,r.kt)("p",null,"The log output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Execute SQL===>\n--- Business related stack trace information --- \u2776\ncom.example.business.BookService.findBooks(BookService.java:55) \u2777 \nPurpose: QUERY\nSQL: select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \nwhere\n    lower(tb_1_.NAME) like ? /* %graphql% */\norder by \n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 0 */, ? /* 10 */\nJDBC response status: success\nTime cost: 9ms\n<===Execute SQL\n")),(0,r.kt)("p",null,"At \u2776 and \u2777, the stack trace information of the thread executing the SQL operation is printed."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"However, a large amount of stack trace information is not blindly printed, only what users care about is printed. ")))}d.isMDXComponent=!0}}]);