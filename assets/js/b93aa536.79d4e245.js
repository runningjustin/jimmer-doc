"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),o=n(34334),l=n(72389),i=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:b,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,s.U)(),[w,N]=(0,r.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=b){const e=g[b];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const q=e=>{const t=e.currentTarget,n=j.indexOf(t),a=f[n].value;a!==w&&(x(t),N(a),null!=b&&T(b,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>j.push(e),onKeyDown:O,onFocus:q,onClick:q},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},39941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={sidebar_position:1,title:"1. Basic Query"},s=void 0,c={unversionedId:"showcase/base",id:"showcase/base",title:"1. Basic Query",description:"There are two concepts in Jimmer",source:"@site/docs/showcase/base.mdx",sourceDirName:"showcase",slug:"/showcase/base",permalink:"/jimmer-doc/docs/showcase/base",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/showcase/base.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"1. Basic Query"},sidebar:"tutorialSidebar",previous:{title:"Showcase",permalink:"/jimmer-doc/docs/showcase/"},next:{title:"2. Fetch Associations",permalink:"/jimmer-doc/docs/showcase/fetch-association/"}},u={},p=[{value:"Query multiple columns",id:"query-multiple-columns",level:2},{value:"Specify properties of the queried object",id:"specify-properties-of-the-queried-object",level:2},{value:"Combine both",id:"combine-both",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are two concepts in Jimmer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query multiple columns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query one object column and specify multiple properties of the queried objects"))),(0,r.kt)("p",null,"They are completely different concepts"),(0,r.kt)("h2",{id:"query-multiple-columns"},"Query multiple columns"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Tuple3<Long, String, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.id(),\n        table.name(),\n        table.edition()\n    )\n    .execute();\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tuples = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        select(\n            table.id,\n            table.name,\n            table.edtion\n        )\n    }\n')))),(0,r.kt)("p",null,"In Jimmer, all queries except queries that return only one column are multi-column queries.\nThis example queries three columns, so the return type is 'Tuple3<T1, T2, T3>'."),(0,r.kt)("p",null,"The following data is obtained"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "_1" : 12,\n        "_2" : "GraphQL in Action",\n        "_3" : 3\n    }, {\n        "_1" : 11,\n        "_2" : "GraphQL in Action",\n        "_3" : 2\n    }, {\n        "_1" : 10,\n        "_2" : "GraphQL in Action",\n        "_3" : 1\n    }\n]\n')),(0,r.kt)("h2",{id:"specify-properties-of-the-queried-object"},"Specify properties of the queried object"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookTableFetcher.$\n                // `id()` is implicit and is always queried\n                .name()\n                .edition()\n        )\n    )\n    .execute();\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                // `id()` is implicit and is always queried\n                name()\n                edition()\n            }\n        )\n    }\n')))),(0,r.kt)("p",null,"The result is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id" : 12,\n        "name" : "GraphQL in Action",\n        "edition" : 3\n    }, \n    {\n        "id" : 11,\n        "name" : "GraphQL in Action",\n        "edition" : 2\n    }, \n    {\n        "id" : 10,\n        "name" : "GraphQL in Action",\n        "edition" : 1\n    } \n]\n')),(0,r.kt)("p",null,"It's easy to see that although this query has only one column, we can precisely control the format of this object."),(0,r.kt)("p",null,"In this example, not all the properties of the Book object are queried ('price' and many-to-one association 'store' are not queried),\nbecause the Jimmer entity type 'Book' supports dynamic properties, the number of properties queried for the object does not affect the return type, and it is always of the 'Book' type."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Jimmer entity objects are dynamic and can be typed uniformly to represent objects of any format ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("inlineCode",{parentName:"em"},"format")," is also called ",(0,r.kt)("inlineCode",{parentName:"em"},"shape"),")"),"."),(0,r.kt)("p",{parentName:"admonition"},"Therefore, we do not need to use a multi-column query to control the return format under Jimmer, but we should use a single-column query to return a column of objects and flexibly control the object format."),(0,r.kt)("p",{parentName:"admonition"},"This results in Jimmer making less use of tuple-based multi-column queries and being more object-oriented.")),(0,r.kt)("h2",{id:"combine-both"},"Combine both"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Tuple2<Book, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n            table.fetch(\n                    BookFetcher.$\n                            .allScalarFields()\n            ),\n            Expression.numeric().sql(\n                    Integer.class,\n                    "row_number() over(partition by %e order by %e desc)",\n                    new Expression<?>[] { table.storeId(), table.price() }\n            )\n    )\n    .execute();\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tuples = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        .select(\n            table.fetchBy {\n                allScalarFields()\n            },\n            sql(Int::class, "row_number() over(partition by %e order by %e desc)") {\n                expression(table.storeId)\n                expression(table.price)\n            }\n        )\n    }\n')))),(0,r.kt)("p",null,"The result is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "_1":{\n            "id":12,\n            "name":"GraphQL in Action",\n            "edition":3,\n            "price":80\n        },\n        "_2":3\n    },\n    {\n        "_1":{\n            "id":11,\n            "name":"GraphQL in Action",\n            "edition":2,\n            "price":81\n        },\n        "_2":2\n    },\n    {\n        "_1":{\n            "id":10,\n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":82\n        },\n        "_2":1\n    }\n]\n')),(0,r.kt)("p",null,"This example queries two columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The first column is the object type, and the object format is 'allScalarFields' (contains all non-associated attributes)*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The second column is a native SQL expression that calls the underlying database parse function ",(0,r.kt)("em",{parentName:"p"},"('%e' indicates a DSL expression that is used to implant the native SQL code)")))),(0,r.kt)("p",null,"It's clearly a combination of the two."))}d.isMDXComponent=!0}}]);