"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,k=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(34334);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(83117),o=n(67294),i=n(34334),r=n(72389),l=n(67392),s=n(7094),c=n(12466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:u,groupId:k,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[T,D]=(0,o.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=k){const e=v[k];null!=e&&e!==T&&g.some((t=>t.value===e))&&D(e)}const j=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==T&&(O(t),D(a),null!=k&&N(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},h)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:j,onClick:j},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function u(e){const t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},5455:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(83117),o=(n(67294),n(3905));const i={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are 5 modes for dissociating child objects "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("p",null,"NONE\n",(0,o.kt)("em",{parentName:"p"},"(default)"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Depend on the global configuration ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/dissociate-action-checking"},"jimmer.default-dissociate-action-checking"),". "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/dissociate-action-checking"},"jimmer.default-dissociate-action-checking")," is true ",(0,o.kt)("em",{parentName:"p"},"(default)")," or the foreign key underlying the current association is real ",(0,o.kt)("em",{parentName:"p"},"(there is a corresponding foreign key constraint in the database, please refer to ",(0,o.kt)("a",{parentName:"em",href:"/docs/mapping/base/foreignkey"},"Real and Fake Foreign Keys"),")"),",\nit is treated as CHECK. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/dissociate-action-checking"},"jimmer.default-dissociate-action-checking")," is false and the foreign key underlying the current association is fake ",(0,o.kt)("em",{parentName:"p"},"(there is no corresponding foreign key constraint in the database, please refer to ",(0,o.kt)("a",{parentName:"em",href:"/docs/mapping/base/foreignkey"},"Real and Fake Foreign Keys"),")"),", "),(0,o.kt)("p",{parentName:"li"},"it is treated as LAX. "))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"LAX"),(0,o.kt)("td",null,(0,o.kt)("p",null,"This option is only valid for pseudo foreign keys ",(0,o.kt)("em",{parentName:"p"},"(please refer to ",(0,o.kt)("a",{parentName:"em",href:"/docs/mapping/base/foreignkey"},"Real and Fake Foreign Keys"),")"),",\notherwise it will be ignored, the same as CHECK. "),(0,o.kt)("p",null,"Dissociation operations are supported even if there are child objects.\nEven if the parent object is deleted ",(0,o.kt)("em",{parentName:"p"},"(dissociation mode is also adopted by delete commands)"),",\ndangling pseudo foreign keys of child objects are allowed\n",(0,o.kt)("em",{parentName:"p"},"(even if pseudo foreign keys are left dangling, the query system can still work normally)"),". "))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"CHECK"),(0,o.kt)("td",null,"If there are child objects, disassociation is not supported, the operation is prevented by throwing an exception.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SET_NULL"),(0,o.kt)("td",null,"Set the foreign key of the disassociated child object to null. The prerequisite is that the many-to-one associated propety of the child object is nullable; otherwise, attempting this configuration will lead to an exception.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"DELETE"),(0,o.kt)("td",null,"Delete the disassociated child objects.")))))}r.isMDXComponent=!0},24584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=n(83117),o=(n(67294),n(3905)),i=n(65488),r=n(85162),l=n(5455);const s={sidebar_position:11,title:"OnDissociate"},c=void 0,d={unversionedId:"mapping/advanced/on-dissociate",id:"mapping/advanced/on-dissociate",title:"OnDissociate",description:"Concepts",source:"@site/docs/mapping/advanced/on-dissociate.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/on-dissociate",permalink:"/jimmer-doc/docs/mapping/advanced/on-dissociate",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mapping/advanced/on-dissociate.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"OnDissociate"},sidebar:"tutorialSidebar",previous:{title:"Key",permalink:"/jimmer-doc/docs/mapping/advanced/key"},next:{title:"Query",permalink:"/jimmer-doc/docs/query/"}},p={},m=[{value:"Concepts",id:"concepts",level:2},{value:"Dissociation Modes",id:"dissociation-modes",level:2},{value:"Dynamic Overrides",id:"dynamic-overrides",level:2}],u={toc:m};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"@",(0,o.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.OnDissociate")," is used together with ",(0,o.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"Modification/Save Command")," and ",(0,o.kt)("a",{parentName:"p",href:"../../mutation/delete-command"},"Modification/Delete Command")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"Modification/Save Command")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Existing data structure in database"),(0,o.kt)("th",null,"Data structure expected to be saved by user"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"+-BookStore(id=2)\n|\n+-----Book(id=10)\n|\n# highlight-next-line\n+-----Book(id=11) \n|\n# highlight-next-line\n\\-----Book(id=12)\n\n\n"))),(0,o.kt)("td",null,(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"+-BookStore(id=2)\n|\n+-----Book(id=10)\n|\n|\n|\n|\n|\n\\-----Book(id=9)\n")))))),(0,o.kt)("p",{parentName:"li"},"  This means:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The association between ",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore-2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Book-10")," remains unchanged")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The association between ",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore-2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Book-9")," needs to be created")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"BookStore-2")," needs to be disassociated from ",(0,o.kt)("inlineCode",{parentName:"p"},"Book-11")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Book-12"),".")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../../mutation/delete-command"},"Modification/Delete Command")),(0,o.kt)("p",{parentName:"li"},"  This is easy to understand. Child objects need to be disassociated before deleting the parent object."))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@OnDissociate")," can only be used on foreign key based many-to-one associations, for example:"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @Null\n    @ManyToOne\n    // highlight-next-line  \n    @OnDissociate(DissociateAction.SET_NULL)\n    BookStore store();\n    ...\n}\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @ManyToOne\n    // highlight-next-line\n    @OnDissociate(DissociateAction.SET_NULL) \n    val store: BookStore?\n    ...\n}\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Although disassociation of child objects is caused by a one-to-many association ",(0,o.kt)("em",{parentName:"p"},"(or inverse one-to-one)")," ",(0,o.kt)("em",{parentName:"p"},"(that is, the parent object abandons some child objects. The one-to-many association here is ",(0,o.kt)("inlineCode",{parentName:"em"},"BookStore.books"),")"),", the disassociation mode is configured for the inverse many-to-one association ",(0,o.kt)("em",{parentName:"p"},"(here ",(0,o.kt)("inlineCode",{parentName:"em"},"Book.store"),")"),". This design is to maintain similarity with configuring cascade properties of foreign keys in database DDLs."),(0,o.kt)("p",{parentName:"admonition"},"For Jimmr, a one-to-many association must be bidirectional, so the many-to-one association that is the mirror image of a known one-to-many association is always known. So there is no problem with this design.")),(0,o.kt)("h2",{id:"dissociation-modes"},"Dissociation Modes"),(0,o.kt)("p",null,"The parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"OnDissociate")," annotation in the above code is called the dissociation mode:"),(0,o.kt)(l.ZP,{mdxType:"DissociateMode"}),(0,o.kt)("p",null,"This article only introduces the configuration of OnDissociate. For how to use it further, please refer to ",(0,o.kt)("a",{parentName:"p",href:"../../mutation/save-command/dissociation"},"Save Command/Dissociation Operations")," and ",(0,o.kt)("a",{parentName:"p",href:"../../mutation/delete-command"},"Delete Commands"),"."),(0,o.kt)("h2",{id:"dynamic-overrides"},"Dynamic Overrides"),(0,o.kt)("p",null,"Confiugration specified by the annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"@OnDissociate")," is called static configuration."),(0,o.kt)("p",null,"Sometimes, different businesses may have different requirements for dissociation operations. Therefore, dissociation configurations can be dynamically overridden at runtime."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"Modification/Save Command")),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setDissociateAction(BookProps.STORE, DissociateAction.SET_NULL)\n    .execute();\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient.save(book) {\n    // highlight-next-line\n    .setDissociateAction(Book::store, DissociateAction.SET_NULL)\n}\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../../mutation/delete-command"},"Modification/Delete Command")),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L)\n    .configure(it ->\n            it\n                // highlight-next-line\n                .setDissociateAction(\n                    BookProps.STORE,\n                    DissociateAction.SET_NULL\n                )\n    )\n    .execute();\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L) {\n        // highlight-next-line\n        setDissociateAction(\n            Book::store, \n            DissociateAction.SET_NULL\n        )\n    }\n")))))))}k.isMDXComponent=!0}}]);