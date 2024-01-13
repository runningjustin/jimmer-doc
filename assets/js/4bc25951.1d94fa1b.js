"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(34334);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),o=n(67294),r=n(34334),l=n(72389),i=n(67392),s=n(7094),p=n(12466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:d,groupId:f,className:b}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[j,w]=(0,o.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=f){const e=g[f];null!=e&&e!==j&&v.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==j&&(x(t),w(a),null!=f&&N(f,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>O.push(e),onKeyDown:T,onFocus:E,onClick:E},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,l.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},46284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(83117),o=(n(67294),n(3905)),r=n(65488),l=n(85162);const i={sidebar_position:3,title:"Incomplete Object"},s=void 0,p={unversionedId:"mutation/save-command/incomplete",id:"mutation/save-command/incomplete",title:"Incomplete Object",description:"The parameter of a save command is a dynamic object. If some of the properties are not specified, then the object is an incomplete object.",source:"@site/docs/mutation/save-command/incomplete.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/incomplete",permalink:"/jimmer-doc/docs/mutation/save-command/incomplete",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mutation/save-command/incomplete.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Incomplete Object"},sidebar:"tutorialSidebar",previous:{title:"Save Mode",permalink:"/jimmer-doc/docs/mutation/save-command/save-mode"},next:{title:"Save Associations",permalink:"/jimmer-doc/docs/mutation/save-command/association"}},c={},m=[{value:"JPA Example",id:"jpa-example",level:2},{value:"Jimmer Example",id:"jimmer-example",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The parameter of a save command is a dynamic object. If some of the properties are not specified, then the object is an incomplete object."),(0,o.kt)("p",null,"To demonstrate the value of incomplete objects, let's look at a real example - changing the many-to-one association ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," with id ",(0,o.kt)("inlineCode",{parentName:"p"},"8")," to null. "),(0,o.kt)("p",null,"It seems there are two ways to implement this functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Execute an UPDATE statement via ",(0,o.kt)("a",{parentName:"p",href:"../update-statement"},"update statements"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Query the ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," object, change its ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," property to null, and save it"))),(0,o.kt)("p",null,"Most developers prefer the second approach. So in this article, we will discuss the second approach."),(0,o.kt)("h2",{id:"jpa-example"},"JPA Example"),(0,o.kt)("p",null,"Before introducing Jimmer's support for saving incomplete objects, let's first see how to implement this with JPA:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="JPA Example"',title:'"JPA','Example"':!0},"EntityManager entityManager = ...get JPA session from current transaction context, omitted...\nBook book = entityManager.find(Book.class, 8L);\n\nbook.setStore(null); // JPA entities are mutable, change association to null\n\n// Calling merge here just for clarity, can be omitted since JPA will update db on tx commit anyway\nentityManager.merge(book);\n")),(0,o.kt)("p",null,"Apart from setting ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," to null, we do not know the existing values of other properties. In JPA, constrained by the fixed shape of plain POJO entities, we have to query all properties of the object, modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," property ",(0,o.kt)("em",{parentName:"p"},"(keeping others unchanged)"),", and save the object again. "),(0,o.kt)("p",null,"Even if the object has hundreds of properties, we have to do this, which is obviously wasteful."),(0,o.kt)("h2",{id:"jimmer-example"},"Jimmer Example"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient.update(\n    Objects.createBook(draft -> {\n        draft.setId(8L);\n        draft.setStore(null);\n    })\n);\n"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient.update(\n    new(Book::class).by {\n        id = 8L\n        store = null\n    }\n);\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Explicitly use ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," ",(0,o.kt)("em",{parentName:"p"},"(or ",(0,o.kt)("inlineCode",{parentName:"em"},"save(book, SaveMode.UPDATE_ONLY)"),")")," to indicate this is an update operation, avoiding the probing query of the ",(0,o.kt)("inlineCode",{parentName:"p"},"UPSERT")," mode to simplify the discussion.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Make up")," a Book object out of thin air, only assigning its ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property and ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," property, while all other properties are unknown."),(0,o.kt)("p",{parentName:"li"},"This incomplete object tells Jimmer to not modify any other properties except ",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"."))),(0,o.kt)("p",null,"Jimmer will directly generate the following SQL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK\nset\n    STORE_ID = ? /* <null: long> */  \nwhere\n    ID = ? /* 8 */\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"So forget about the old inefficient pattern: query -> modify -> save ")))}d.isMDXComponent=!0}}]);