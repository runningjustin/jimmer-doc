"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),s=n(67392),i=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:b,className:v}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,i.U)(),[w,T]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==w&&(O(t),T(a),null!=b&&N(b,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},77686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const s={sidebar_position:8,title:"8. Other Queries"},i=void 0,u={unversionedId:"showcase/other-query",id:"showcase/other-query",title:"8. Other Queries",description:"\u6807\u51c6\u5b50\u67e5\u8be2",source:"@site/docs/showcase/other-query.mdx",sourceDirName:"showcase",slug:"/showcase/other-query",permalink:"/jimmer-doc/docs/showcase/other-query",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/showcase/other-query.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"8. Other Queries"},sidebar:"tutorialSidebar",previous:{title:"7. Comprehensive Query",permalink:"/jimmer-doc/docs/showcase/comprehensive-query"},next:{title:"9. Update statement",permalink:"/jimmer-doc/docs/showcase/update-statement"}},c={},p=[{value:"\u6807\u51c6\u5b50\u67e5\u8be2",id:"\u6807\u51c6\u5b50\u67e5\u8be2",level:2},{value:"Native SQL",id:"native-sql",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6807\u51c6\u5b50\u67e5\u8be2"},"\u6807\u51c6\u5b50\u67e5\u8be2"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> newestBooks = sqlClient\n    .createQuery(book)\n    .where(\n        Expression.tuple(\n            book.name(),\n            book.edition()\n        ).in(sqlClient\n            .createSubQuery(book)\n            .groupBy(book.name())\n            .select(\n                book.name(),\n                book.edition().max()\n            )\n        )\n    )\n    .select(book)\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val newestBooks = sqlClient\n    .createQuery(Book::class) {\n        where( \n            tuple(\n                table.name, \n                table.edition\n            ) valueIn subQuery(Book::class) {\n                groupBy(table.name)\n                select(\n                    table.name,\n                    max(table.edition).asNonNull()\n                )\n            }\n        )\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("h2",{id:"native-sql"},"Native SQL"),(0,r.kt)("p",null,"\u4e3a\u4e86\u652f\u6301\u7279\u6709\u6570\u636e\u5e93\u4ea7\u54c1\u7279\u6709\u7684\u80fd\u529b\uff0cJimmer\u7684SQL DSL\u652f\u6301\u6f5c\u5165Native SQL\u8868\u8fbe\u5f0f\u3002\u4ee5\u6b63\u5219\u8868\u8fbe\u5f0f\u67e5\u8be2\u4e3a\u4f8b\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTable table = Tables.AUTHOR_TABLE;\n\nList<Author> authors = sqlClient\n    .createQuery(table)\n    .where(\n        Predicate.sql(\n            "regexp_like(%e, %v)",\n            it -> it\n                .expression(table.firstName())\n                .value("^Ste(v|ph)en$")\n        )\n    )\n    .select(table)\n    .execute();\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val authors = sqlClient\n    .createQuery(Author::class) {\n        where(\n            sql(Boolean::class, "regexp_like(%e, %v)") {\n                expression(table.firstName)\n                value("^Ste(v|ph)en$")\n            }\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Native SQL\u7247\u6bb5\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"%e"),"\u8868\u793a\u53ef\u4ee5\u5d4c\u5165\u4e00\u4e2a\u5f3a\u7c7b\u578b\u7684Jimmer DSL\u8868\u8fbe\u5f0f\u3002"),(0,r.kt)("p",{parentName:"li"},"Lambda\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"expression(...)"),"\u6307\u5b9a\u7528\u4e8e\u66ff\u6362",(0,r.kt)("inlineCode",{parentName:"p"},"%e"),"\u7684\u8868\u8fbe\u5f0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Native SQL\u7247\u6bb5\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"%v"),"\u8868\u793a\u53ef\u4ee5\u5d4c\u5165\u4e00\u4e2a\u5b57\u9762\u91cf\u3002"),(0,r.kt)("p",{parentName:"li"},"Lambda\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"value(...)"),"\u6307\u5b9a\u7528\u4e8e\u66ff\u6362",(0,r.kt)("inlineCode",{parentName:"p"},"%v"),"\u7684\u5b57\u9762\u91cf\u3002"))))}d.isMDXComponent=!0}}]);