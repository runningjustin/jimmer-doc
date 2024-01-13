"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(34334);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),i=n(67294),r=n(34334),o=n(72389),l=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:h,className:k}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,C]=(0,i.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==w&&(j(t),C(a),null!=h&&N(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:x,onClick:x},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,i.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},57301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(83117),i=(n(67294),n(3905)),r=n(65488),o=n(85162);const l={sidebar_position:8,title:"Non-Structural Mapping"},s=void 0,p={unversionedId:"mapping/advanced/join-sql",id:"mapping/advanced/join-sql",title:"Non-Structural Mapping",description:"Non-Structural Design Example",source:"@site/docs/mapping/advanced/join-sql.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/join-sql",permalink:"/jimmer-doc/docs/mapping/advanced/join-sql",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mapping/advanced/join-sql.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Non-Structural Mapping"},sidebar:"tutorialSidebar",previous:{title:"JSON Mapping",permalink:"/jimmer-doc/docs/mapping/advanced/json"},next:{title:"Remote Association",permalink:"/jimmer-doc/docs/mapping/advanced/remote"}},u={},c=[{value:"Non-Structural Design Example",id:"non-structural-design-example",level:2},{value:"Non-Structural Association",id:"non-structural-association",level:2},{value:"Precautions",id:"precautions",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"non-structural-design-example"},"Non-Structural Design Example"),(0,i.kt)("p",null,"Through the content related to ",(0,i.kt)("a",{parentName:"p",href:"../base/association"},"Association Mapping"),", it is not difficult to find that all associations are based on ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinColumn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinTable")," ",(0,i.kt)("em",{parentName:"p"},"(may be omitted)"),"."),(0,i.kt)("p",null,"Although Jimmer supports fake foreign keys ",(0,i.kt)("em",{parentName:"p"},"(foreign keys in the developer's mind but without corresponding foreign key constraints in the database)"),", all the association mappings we have discussed so far are based on 3NF design of relational databases."),(0,i.kt)("p",null,"However, you may be handed over a legacy database containing non-normalized database designs, such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table book(\n    id bigint unsigned not null auto_increment primary key,\n    // highlight-next-line \n    author_ids varchar(100),\n    ...Omit other columns...\n) engine=innodb;\n")),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"author_ids")," is a string column whose data is the ids of all ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," objects associated with the current ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," concatenated together with commas, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"1, 5, 100, 206"),". "),(0,i.kt)("p",null,"Obviously, this is a non-structural design that does not satisfy 3NF of relational databases."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For Postgres that supports array types, using arrays would be a better choice, but for better generality of this example, string concatenation is still used here without utilizing database-specific features.")),(0,i.kt)("h2",{id:"non-structural-association"},"Non-Structural Association"),(0,i.kt)("p",null,"To support such non-structural designs, Jimmer provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.JoinSql")," annotation."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"@JoinSql")," must and can only be used together with ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),".")),(0,i.kt)("p",null,"Next, create an SQL function ",(0,i.kt)("em",{parentName:"p"},"(MySQL is used as example here)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create function concatenation_string_contains(\n    self varchar(100),\n    id bigint  \n) returns boolean\nbegin\n    if self is null then\n        return false;\n    end if;\n    return self regexp concat('(^|\\\\,)\\\\s*', id, '\\\\s*(\\\\,|$)'); \nend;\n")),(0,i.kt)("p",null,"This function assumes that the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," is in the format of multiple numbers concatenated by commas, and determines whether it contains the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),". For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"concatenation_string_contains('100, 200, 300', 200)")," returns true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"concatenation_string_contains('100, 200, 300', 201)")," returns false"))),(0,i.kt)("p",null,"Now we can map the non-structural many-to-many association:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    // highlight-next-line\n    @JoinSql(\n        "concatenation_string_contains(" +\n        "    %alias.author_ids, " +\n        "    %target_alias.id" + \n        ")"\n    )\n    List<Author> authors();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @ManyToMany\n    // highlight-next-line\n    @JoinSql(\n        "concatenation_string_contains(" +\n        "    %alias.author_ids, " + \n        "    %target_alias.id" +\n        ")"\n    )\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n')))),(0,i.kt)("p",null,"The SQL expression used in ",(0,i.kt)("inlineCode",{parentName:"p"},"@JsonSql")," represents the join condition, where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"concatenation_string_contains"),": The SQL function we defined earlier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"%alias"),": A special token defined by Jimmer representing the alias of the current table ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("inlineCode",{parentName:"em"},"book")," table in this example)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"%target_alias"),": A special token defined by Jimmer representing the alias of the target table ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("inlineCode",{parentName:"em"},"author")," table in this example)")," "))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"ORM automatically generates SQL ",(0,i.kt)("em",{parentName:"p"},"(which is very important for dynamic queries, especially for ORMs like Jimmer that first proposed the ",(0,i.kt)("a",{parentName:"em",href:"../../query/dynamic-join"},"Dynamic Join")," concept)"),", and users cannot interfere with the aliases of tables in the final SQL."),(0,i.kt)("p",{parentName:"admonition"},"So using ",(0,i.kt)("inlineCode",{parentName:"p"},"%alias")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"%target_alias")," here is the only way.")),(0,i.kt)("p",null,"It is worth mentioning that if you want to define a bidirectional many-to-many association, since ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," has already used ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinSql"),", the other end ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.books")," does not need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinSql")," again. As before, use ",(0,i.kt)("inlineCode",{parentName:"p"},"mappedBy")," to indicate that it is the inverse property."),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'@Entity\npublic interface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...Omit other code... \n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'@Entity\ninterface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...Omit other code...\n}\n')))),(0,i.kt)("h2",{id:"precautions"},"Precautions"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Unless legacy database compatibility is required, do not perform non-structural design and map it with ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinSql"),", because non-structural many-to-many associations have many limitations:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cannot be used as ",(0,i.kt)("a",{parentName:"p",href:"./remote"},"Remote Association"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cannot participate in ",(0,i.kt)("a",{parentName:"p",href:"../../query/dynamic-join/optimization"},"Dynmaic Join Optimization")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cannot use ",(0,i.kt)("a",{parentName:"p",href:"../../cache/cache-type/association"},"Association Cache"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cannot be saved as part of data structure by ",(0,i.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"Save Command"),". In fact, if the data structure to be saved contains non-structural associations, it will cause exceptions.")))))}d.isMDXComponent=!0}}]);