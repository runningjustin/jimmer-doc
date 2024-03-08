"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,p=m["".concat(s,".").concat(d)]||m[d]||b[d]||l;return n?a.createElement(p,i(i({ref:t},c),{},{components:n})):a.createElement(p,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",b="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:p,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),_=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(_,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!_.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${_.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[g,N]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=p){const e=y[p];null!=e&&e!==g&&_.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),a=_[n].value;a!==g&&(I(t),N(a),null!=p&&w(p,String(a)))},q=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},h)},_.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>O.push(e),onKeyDown:q,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":g===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},86396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>b});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:5,title:"4.5 Implicit Subquery"},s=void 0,u={unversionedId:"showcase/where/implicit-subquery",id:"showcase/where/implicit-subquery",title:"4.5 Implicit Subquery",description:"Implicit subqueries can only be used for collection associations. This article discusses implicit subqueries through the many-to-many Book.authors.",source:"@site/docs/showcase/where/implicit-subquery.mdx",sourceDirName:"showcase/where",slug:"/showcase/where/implicit-subquery",permalink:"/jimmer-doc/docs/showcase/where/implicit-subquery",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/showcase/where/implicit-subquery.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"4.5 Implicit Subquery"},sidebar:"tutorialSidebar",previous:{title:"4.4 Dynamic Table Join",permalink:"/jimmer-doc/docs/showcase/where/dynamic-join"},next:{title:"5. Sorting",permalink:"/jimmer-doc/docs/showcase/order-by/"}},c={},b=[{value:"Usage",id:"usage",level:2},{value:"Various Situations",id:"various-situations",level:2},{value:"All subqueries are invalid",id:"all-subqueries-are-invalid",level:3},{value:"Some subqueries take effect",id:"some-subqueries-take-effect",level:3},{value:"All subqueries take effect",id:"all-subqueries-take-effect",level:3}],m={toc:b};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Implicit subqueries can only be used for collection associations. This article discusses implicit subqueries through the many-to-many ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Nullable String authorName = ...Omitted...;\n@Nullable Gender authorGender = ...Omitted...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(\n        table.authors(author -> \u2776\n            Predicate.or(\n                author.firstName().ilikeIf(authorName),\n                author.lastName().ilikeIf(authorName)\n            )\n        ) \n    ) \n    .where(\n        table.authors(author -> \u2777\n            author.gender().eqIf(authorGender)\n        )\n    ) \n    .select(table)\n    .execute();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val authorName: String? = ...Omitted...\nval authorGender: Gender? = ...Omitted...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        where += table.authors { \u2776\n            or(\n                firstName `ilike?` authorName,\n                lastName `ilike?` authorName\n            )\n        }\n        where += table.authors { \u2777\n            gender `eq?` authorGender\n        }\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("p",null,"In fact, the two implicit subqueries in the code above can be merged into one, but in order to better demonstrate in the following text, they are deliberately written as two."),(0,r.kt)("h2",{id:"various-situations"},"Various Situations"),(0,r.kt)("h3",{id:"all-subqueries-are-invalid"},"All subqueries are invalid"),(0,r.kt)("p",null,"If both ",(0,r.kt)("inlineCode",{parentName:"p"},"authorName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"authorGender")," are null, it will cause the subqueries created at \u2776 and \u2777 to be invalid, and no actual SQL subqueries will be rendered."),(0,r.kt)("p",null,"At this time, the following SQL is generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\n")),(0,r.kt)("h3",{id:"some-subqueries-take-effect"},"Some subqueries take effect"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"authorName")," is specified as non-null while ",(0,r.kt)("inlineCode",{parentName:"p"},"authorGender")," remains null, the subquery at \u2776 takes effect, while the subquery at \u2777 is ignored.  "),(0,r.kt)("p",null,"At this time, the following SQL is generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    exists(\n        select\n            1\n        from AUTHOR tb_2_\n        inner join BOOK_AUTHOR_MAPPING tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n                tb_3_.BOOK_ID = tb_1_.ID\n            and\n                (\n                    lower(tb_2_.FIRST_NAME) like ? /* %a% */\n                or\n                    lower(tb_2_.LAST_NAME) like ? /* %a% */\n                )\n    )\n")),(0,r.kt)("h3",{id:"all-subqueries-take-effect"},"All subqueries take effect"),(0,r.kt)("p",null,"If both ",(0,r.kt)("inlineCode",{parentName:"p"},"authorName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"authorGender")," are specified as non-null, the implicit subqueries created at \u2776 and \u2777 will both take effect.   "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Jimmer can automatically merge conflicting implicit subqueries. The two implicit subqueries will be merged into one implicit subquery.\nUltimately, only one SQL subquery will be rendered.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    exists(\n        select\n            1\n        from AUTHOR tb_2_\n        inner join BOOK_AUTHOR_MAPPING tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n                tb_3_.BOOK_ID = tb_1_.ID\n            and\n                (\n                    lower(tb_2_.FIRST_NAME) like ? /* %a% */\n                or\n                    lower(tb_2_.LAST_NAME) like ? /* %a% */\n                )\n            and\n                tb_2_.GENDER = ? /* M */\n    )\n")))}d.isMDXComponent=!0}}]);