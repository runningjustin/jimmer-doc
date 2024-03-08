"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8034],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),o=t(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),o=t(67294),r=t(34334),i=t(72389),l=t(67392),s=t(7094),u=t(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var n;const{lazy:t,block:i,defaultValue:m,values:d,groupId:k,className:y}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=d??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,l.l)(O,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==f&&!O.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:v}=(0,s.U)(),[T,_]=(0,o.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:B}=(0,u.o5)();if(null!=k){const e=h[k];null!=e&&e!==T&&O.some((n=>n.value===e))&&_(e)}const I=e=>{const n=e.currentTarget,t=N.indexOf(n),a=O[t].value;a!==T&&(B(n),_(a),null!=k&&v(k,String(a)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},y)},O.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>N.push(e),onKeyDown:E,onFocus:I,onClick:I},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function d(e){const n=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(n)},e))}},45364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=t(83117),o=(t(67294),t(3905)),r=t(65488),i=t(85162);const l={sidebar_position:2,title:"Many To One"},s=void 0,u={unversionedId:"mapping/base/association/many-to-one",id:"mapping/base/association/many-to-one",title:"Many To One",description:"This chapter introduces how to use the @org.babyfish.jimmer.sql.ManyToOne annotation to declare many-to-one association properties.",source:"@site/docs/mapping/base/association/many-to-one.mdx",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/many-to-one",permalink:"/jimmer-doc/docs/mapping/base/association/many-to-one",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mapping/base/association/many-to-one.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Many To One"},sidebar:"tutorialSidebar",previous:{title:"One To One",permalink:"/jimmer-doc/docs/mapping/base/association/one-to-one"},next:{title:"One To Many",permalink:"/jimmer-doc/docs/mapping/base/association/one-to-many"}},p={},c=[{value:"1. Based on Foreign Key",id:"1-based-on-foreign-key",level:2},{value:"2. Based on Join Table",id:"2-based-on-join-table",level:2}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chapter introduces how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.ManyToOne")," annotation to declare many-to-one association properties."),(0,o.kt)("p",null,"There are two ways to implement many-to-one associations: based on foreign key and based on join table."),(0,o.kt)("h2",{id:"1-based-on-foreign-key"},"1. Based on Foreign Key"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    // highlight-next-line \n    @ManyToOne  \n    BookStore store();\n\n    ...Omit other code...\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    // highlight-next-line\n    @ManyToOne\n    val store: BookStore\n\n    ...Omit other code...\n}\n")))),(0,o.kt)("p",null,"Here ",(0,o.kt)("inlineCode",{parentName:"p"},"@JoinColumn")," is not used together to explicitly specify the foreign key column name. Jimmer will deduce the column name corresponding to the ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," property based on the ",(0,o.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy"),"."),(0,o.kt)("p",null,"If the default ",(0,o.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy")," is not overridden by the user, the foreign key column name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," property is ",(0,o.kt)("inlineCode",{parentName:"p"},"STORE_ID"),". So the previous code is equivalent to:"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(name = "STORE_ID")\n    BookStore store();\n\n    ...Omit other code... \n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(name = "STORE_ID")\n    val store: BookStore\n\n    ...Omit other code...\n}\n')))),(0,o.kt)("p",null,"The foreign key can be real or fake. Fake foreign keys are discussed in subsequent documents. Here we assume the foreign key is real, so the corresponding constraint in the database is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"// If foreign key pointing to associated entity is real, \n// create foreign key constraint\nalter table BOOK  \n    add constraint FK_BOOK__BOOK_STORE\n        /* highlight-next-line */\n        foreign key(STORE_ID)\n            references BOOK_STORE(ID); \n")),(0,o.kt)("h2",{id:"2-based-on-join-table"},"2. Based on Join Table"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity  \npublic interface Book {\n\n    @Nullable\n    @ManyToOne\n    @JoinTable  \n    BookStore store();\n\n    ...\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @Nullable\n    @ManyToOne\n    @JoinTable\n    val store: BookStore?\n\n    ...\n}\n")))),(0,o.kt)("p",null,"Here, no properties are specified for ",(0,o.kt)("inlineCode",{parentName:"p"},"@JoinTable"),". Jimmer will deduce the column names corresponding to the ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," property based on the ",(0,o.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy"),"."),(0,o.kt)("p",null,"If the default ",(0,o.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy")," is not overridden by the user, the deduced join table information is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join table name: BOOK_BOOK_STORE_MAPPING"),(0,o.kt)("li",{parentName:"ul"},"Join table foreign key column pointing to current entity: BOOK_ID"),(0,o.kt)("li",{parentName:"ul"},"Join table foreign key column pointing to associated entity: STORE_ID")),(0,o.kt)("p",null,"So the previous code is equivalent to:"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @Null\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_BOOK_STORE_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "STORE_ID"\n    )\n    BookStore store();\n\n    ...\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_BOOK_STORE_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "STORE_ID"\n    )\n    val store: BookStore?\n\n    ...\n}\n')))),(0,o.kt)("p",null,"The join table ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOK_BOOK_STORE_MAPPING")," is defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table BOOK_BOOK_STORE_MAPPING(\n    BOOK_ID bigint not null,\n    STORE_ID bigint not null\n);\n\nalter table BOOK_STORE_MAPPING\n    add constraint PK_BOOK_STORE_MAPPING\n        primary(BOOK_ID, STORE_ID);\n\n// If foreign key pointing to current entity is real, \n// create foreign key constraint\nalter table BOOK_BOOK_STORE_MAPPING  \n    add constraint FK_BOOK_BOOK_STORE_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\n// If foreign key pointing to associated entity is real, \n// create foreign key constraint \nalter table BOOK_BOOK_STORE_MAPPING\n    add constraint FK_BOOK_BOOK_STORE_MAPPING__STORE\n        foreign key(STORE_ID)\n            references BOOK_STORE(ID);\n\n// This constraint is very important.\n// Otherwise this join table expresses a many-to-many association \n// rather than a many-to-one association\nalter table BOOK_BOOK_STORE_MAPPING\n    add constraint UQ_BOOK_BOOK_STORE_MAPPING__BOOK_ID\n        unique(BOOK_ID);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The join table has only two foreign keys, both non-null. The join table maintains the association by inserting and deleting data, never storing null data itself.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The join table has no corresponding ORM entity and does not need an independent primary key. The two foreign keys combined can serve as the primary key.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By default, the join table represents a many-to-many association. To degrade it to a many-to-one association, a unique constraint must be specified for the foreign key ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOK_ID")," pointing to the current entity. "))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Unless for compatibility with existing database design, many-to-one associations are recommended to use foreign keys directly instead of join tables.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once a many-to-one association is mapped using a join table, the Jimmer association property must be nullable, because the database cannot guarantee that any entity must have corresponding data in the join table.")))))}d.isMDXComponent=!0}}]);