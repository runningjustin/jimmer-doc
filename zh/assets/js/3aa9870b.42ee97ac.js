"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),p=n(7094),u=n(12466);const m="tabList__CuJ",s="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:c,groupId:k,className:N}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,p.U)(),[O,C]=(0,r.useState)(g),A=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=k){const e=b[k];null!=e&&e!==O&&h.some((t=>t.value===e))&&C(e)}const w=e=>{const t=e.currentTarget,n=A.indexOf(t),a=h[n].value;a!==O&&(T(t),C(a),null!=k&&y(k,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;n=A[t]??A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;n=A[t]??A[A.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},N)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>A.push(e),onKeyDown:x,onFocus:w,onClick:w},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function c(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},55673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={sidebar_position:8,title:"\u5176\u5b83\u529f\u80fd"},p=void 0,u={unversionedId:"mutation/save-command/other",id:"mutation/save-command/other",title:"\u5176\u5b83\u529f\u80fd",description:"\u4fdd\u5b58\u6307\u4ee4\u8fd4\u56de\u7ed3\u679c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/other.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/other",permalink:"/jimmer-doc/zh/docs/mutation/save-command/other",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mutation/save-command/other.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u5176\u5b83\u529f\u80fd"},sidebar:"tutorialSidebar",previous:{title:"\u4e50\u89c2\u9501\u548c\u60b2\u89c2\u9501",permalink:"/jimmer-doc/zh/docs/mutation/save-command/lock"},next:{title:"Input DTO",permalink:"/jimmer-doc/zh/docs/mutation/save-command/input-dto/"}},m={},s=[{value:"\u4fdd\u5b58\u6307\u4ee4\u8fd4\u56de\u7ed3\u679c",id:"\u4fdd\u5b58\u6307\u4ee4\u8fd4\u56de\u7ed3\u679c",level:2},{value:"AppendOnly\u6a21\u5f0f",id:"appendonly\u6a21\u5f0f",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4fdd\u5b58\u6307\u4ee4\u8fd4\u56de\u7ed3\u679c"},"\u4fdd\u5b58\u6307\u4ee4\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("p",null,"\u4fdd\u5b58\u6307\u4ee4\u8fd4\u56de\u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4f8b\u5982\uff0c\u5bf9\u4e8e\u4fdd\u5b58\u5355\u4e2a\u5bf9\u8c61\u7684\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"save"),"\u65b9\u6cd5\u800c\u8a00\uff0c\u5176\u8fd4\u56de\u7c7b\u578b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleSaveResult<E>/KSimpleSaveResult<E>"),"\u3002"),(0,r.kt)("p",null,"\u8be5\u7ed3\u679c\u5b58\u652f\u6301\u5982\u4e0b\u884c\u4e3a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"originalEntity"),"\u5c5e\u6027\uff1a\u8fd4\u56de\u5f00\u53d1\u4eba\u5458\u4f20\u9012\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"save"),"\u65b9\u6cd5\u7684\u539f\u59cb\u53c2\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"modifiedEntity"),"\u5c5e\u6027\uff1a\u5f62\u72b6\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"originalEntity"),"\u5b8c\u5168\u4e00\u6837\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4e8c\u8005\u533a\u522b\u5728\u4e8e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"originalEntity"),"\u4e2d\u5305\u542b\u4e00\u4e9b\u6ca1\u6709id\u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u4f9d\u8d56\u4e8eid\u81ea\u52a8\u751f\u6210\u7b56\u7565 ",(0,r.kt)("em",{parentName:"p"},"(\u4f8b\u5982\uff1a\u81ea\u52a8\u7f16\u53f7\uff0c\u5e8f\u5217\uff0cUUID, \u96ea\u82b1id)"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"modifiedEntity"),"\u4e2d\u5bf9\u5e94\u7684\u5bf9\u8c61\u5fc5\u7136\u5177\u5907id\u5c5e\u6027\uff0c\u5176\u503c\u4e3a\u6570\u636e\u5e93/\u5e94\u7528\u4e3a\u5176\u81ea\u52a8\u5206\u914d\u7684\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u67d0\u4e9b\u5bf9\u8c61\u6240\u5c5e\u5b9e\u4f53\u7c7b\u578b\u5177\u5907\u4e50\u89c2\u9501\u5b57\u6bb5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"modifiedEntity"),"\u4e2d\u5bf9\u5e94\u7684\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"version"),"\u5c5e\u6027\u6bd4\u4e3a\u4fee\u6539\u540e\u6570\u636e\u4e2d\u6700\u65b0\u7248\u672c\u53f7\u3002"))),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"modifiedEntity"),"\u5728\u524d\u9762\u7684\u6587\u6863\u4e2d\u591a\u6b21\u8ba8\u8bba\uff0c\u672c\u6587\u4e0d\u4e88\u8ba8\u8bba\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"totalAffectedRowCount"),"\u5c5e\u6027\uff1a\u4fdd\u5b58\u6307\u4ee4\u7684\u6267\u884c\u53ef\u80fd\u5bfc\u81f4\u6570\u636e\u5e93\u4e2d\u591a\u5f20\u8868\u88ab\u4fee\u6539\uff0c\u6b64\u5c5e\u6027\u4e3a\u4e00\u4e2a\u8bc1\u4e66\uff0c\u8868\u793a\u6240\u6709\u88ab\u4fee\u6539\u7684\u8868\u7684\u5f71\u54cd\u884c\u6570\u4e4b\u548c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getAffectedRowCountMap"),"\u5c5e\u6027\uff1a\u88ab\u5f71\u54cd\u7684\u8868\u548c\u5176\u5f71\u54cd\u884c\u6570\u5f62\u6210\u7684Map\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getAffectedRowCount"),"\u65b9\u6cd5\uff0c\u7ed9\u5b9a\u4e00\u4e2a\u53c2\u6570\uff0c\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u5f71\u54cd\u884c\u6570\u3002\u63a5\u53d7\u4e24\u79cd\u53c2\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7c7b\u578b\uff1a\u83b7\u53d6\u8be5\u5b9e\u4f53\u5bf9\u5e94\u7684\u8868\u7684\u5f71\u54cd\u884c\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\uff1a\u83b7\u53d6\u8be5\u5173\u8054\u5c5e\u6027\u5bf9\u5e94\u7684\u4e2d\u95f4\u8868\u7684\u5f71\u54cd\u884c\u6570"))))),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u770b",(0,r.kt)("inlineCode",{parentName:"p"},"totalAffectedRowCount"),"\u5c5e\u6027\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"getAffectedRowCount"),"\u65b9\u6cd5\u7684\u4f8b\u5b50"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SimpleSaveResult<Book> result = sqlClient.update(\n        Objects.createBook(draft -> {\n            draft.setId(3L);\n            draft.setPrice(new BigDecimal("59.9"));\n            draft.addIntoAuthors(author -> author.setId(1L));\n            draft.addIntoAuthors(author -> author.setId(3L));\n            draft.addIntoAuthors(author -> {\n                author.setId(1000L); // \u4e0d\u5b58\u5728\uff0c\u81ea\u52a8\u521b\u5efa\n                author.setFirstName("Svetlana");\n                author.setLastName("Isakova");\n                author.setGender(Gender.FEMALE);\n            });\n        })\n);\nSystem.out.println(\n    "\u603b\u5f71\u54cd\u884c\u6570: " + \n    // highlight-next-line\n    result.getTotalAffectedRowCount()\n);\nSystem.out.println(\n    "\u5b9e\u4f53\u8868BOOK\u7684\u5f71\u54cd\u884c\u6570: " + \n    // highlight-next-line\n    result.getAffectedRowCount(Book.class)\n);\nSystem.out.println(\n    "\u5b9e\u4f53\u8868AUTHOR\u7684\u5f71\u54cd\u884c\u6570: " + \n    // highlight-next-line\n    result.getAffectedRowCount(Author.class)\n);\nSystem.out.println(\n    "\u4e2d\u95f4\u8868BOOK_AUTHOR_MAPPING\u7684\u5f71\u54cd\u884c\u6570: " + \n    // highlight-next-line\n    result.getAffectedRowCount(BookProps.AUTHORS)\n);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val result = sqlClient.update(\n    new(Book::class).by {\n        id = 3L\n        price = BigDecimal("59.9"))\n        authors().addBy { id = 1L }\n        authors().addBy { id = 3L }\n        authors().addBy {\n            id = 1000L // \u4e0d\u5b58\u5728\uff0c\u81ea\u52a8\u521b\u5efa\n            firstName = "Svetlana"\n            lastName = "Isakova"\n            gender = Gender.FEMALE\n        }\n    }\n);\nprintln(\n    "\u603b\u5f71\u54cd\u884c\u6570: " + \n    // highlight-next-line\n    result.totalAffectedRowCount\n)\nprintln(\n    "\u5b9e\u4f53\u8868BOOK\u7684\u5f71\u54cd\u884c\u6570: " +\n    // highlight-next-line \n    result.getAffectedRowCount(Book::class)\n)\nprintln(\n    "\u5b9e\u4f53\u8868AUTHOR\u7684\u5f71\u54cd\u884c\u6570: " +\n    // highlight-next-line \n    result.getAffectedRowCount(Author::class)\n)\nprintln(\n    "\u4e2d\u95f4\u8868BOOK_AUTHOR_MAPPING\u7684\u5f71\u54cd\u884c\u6570: " + \n    // highlight-next-line\n    result.getAffectedRowCount(Book::authors)\n)\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4f8b\u5b50\u4e2d\u7684\u5199\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"getAffectedRowCount(BookProps.AUTHORS)"),"\u548c\u53e6\u5916\u4e00\u79cd\u5199\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"getAffectedRowCount(AuthorProps.BOOKS)"),"\u7b49\u4ef7")),(0,r.kt)("p",null,"\u6253\u5370\u7ed3\u679c\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u603b\u5f71\u54cd\u884c\u6570: 5\n\u5b9e\u4f53\u8868BOOK\u7684\u5f71\u54cd\u884c\u6570: 1\n\u5b9e\u4f53\u8868AUTHOR\u7684\u5f71\u54cd\u884c\u6570: 1\n\u4e2d\u95f4\u8868BOOK_AUTHOR_MAPPING\u7684\u5f71\u54cd\u884c\u6570: 3\n")),(0,r.kt)("p",null,"\u89e3\u91ca\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BOOK"),"\u8868\u7684\u5f71\u54cd\u884c\u6570\u4e3a1:"),(0,r.kt)("p",{parentName:"li"},"\u805a\u5408\u6839\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"Book(id=3L)"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"price"),"\u88ab\u4fee\u6539")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AUTHOR"),"\u8868\u7684\u5f71\u54cd\u884c\u6570\u4e3a1:"),(0,r.kt)("p",{parentName:"li"},"\u957f\u5173\u8054\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"Author(id=1000L)"),"\u4e0d\u5b58\u5728\uff0c\u81ea\u52a8\u521b\u5efa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING"),"\u8868\u7684\u5f71\u54cd\u884c\u6570\u4e3a3:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Book(id=3L)"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Author(id=2L)"),"\u4e4b\u95f4\u8131\u94a9 ",(0,r.kt)("em",{parentName:"p"},"(\u5bf9\u4e2d\u95f4\u8868\u8131\u94a9\u64cd\u4f5c\u800c\u8a00\uff0c\u5c31\u662f\u5220\u9664\u5173\u8054)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Book(id=3L)"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Author(id=3L)"),"\u4e4b\u95f4\u65b0\u5efa\u5173\u8054")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Book(id=3L)"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Author(id=1000L)"),"\u4e4b\u95f4\u65b0\u5efa\u5173\u8054"))))),(0,r.kt)("h2",{id:"appendonly\u6a21\u5f0f"},"AppendOnly\u6a21\u5f0f"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u65e9\u671f\u6587\u6863\u6781\u4e0d\u5065\u5168\uff0c\u4e3a\u89e3\u51b3\u9996\u6279\u7528\u6237\u65e0\u6cd5\u7406\u89e3\u4e3a\u4ec0\u4e48\u4fdd\u5b58\u6307\u4ee4\u9700\u8981key\u7684\u95ee\u9898\u800c\u63d0\u4f9b\u7684\u4e0d\u6210\u719fAPI\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8be5API\u8fdd\u80cc\u4e86\u4fdd\u5b58\u6307\u4ee4\u7684\u8bbe\u8ba1\u521d\u8877\uff0c\u5bfc\u81f4\u4e86\u529f\u80fd\u4e25\u91cd\u9000\u5316\uff0c\u4ee5\u540e\u6709\u53ef\u80fd\u88ab\u5220\u9664\uff0c\u5e94\u8be5\u907f\u514d\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u7279\u5b9a\u7684\u5173\u8054\u5c5e\u6027\u4e3aAppendOnly\u6a21\u5f0f"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Book book = ...\u7565...;\nsqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setAppendOnly(BookProps.AUTHORS)\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = ...\u7565...;\nsqlClient.saveBook(book) {\n    // highlight-next-line\n    setAppendOnly(BookProps.AUTHORS)\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u6240\u6709\u5173\u8054\u5c5e\u6027\u4e3aAppendOnly\u6a21\u5f0f"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Book book = ...\u7565...;\nsqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setAppendOnlyAll()\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = ...\u7565...;\nsqlClient.saveBook(book) {\n    // highlight-next-line\n    setAppendOnlyAll()\n}\n")))))),(0,r.kt)("p",null,"\u65e0\u8bba\u54ea\u79cd\u7528\u6cd5\uff0c\u4e00\u65e6\u4f7f\u7528\uff0c\u540e\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5173\u8054\u5bf9\u8c61\u7684\u4fdd\u5b58\u4e0d\u518d\u652f\u6301\u5e42\u7b49\u6027\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8be5\u914d\u7f6e\u5141\u8bb8\u5173\u8054\u5bf9\u8c61\u65e2\u65e0id\u5c5e\u6027\u4e5f\u65e0key\u5c5e\u6027\uff0c\u4e00\u65e6\u51fa\u73b0\u8fd9\u79cd\u60c5\u51b5\uff0c\u65e0\u6761\u4ef6\u63d2\u5165\u5173\u8054\u5bf9\u8c61\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5173\u8054\u5c5e\u6027\u4e27\u5931",(0,r.kt)("a",{parentName:"p",href:"./dissociation"},"\u8131\u94a9\u80fd\u529b"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8be5\u914d\u7f6e\u53ea\u4f1a\u5bf9\u7528\u6237\u7ed9\u5b9a\u7684\u5173\u8054\u5bf9\u8c61\u8fdb\u884cinsert\u6216update\uff0c\u4e0d\u4f1a\u5bf9\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u4e2d\u4f46\u4e0d\u5b58\u5728\u4e8e\u7528\u6237\u8981\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u7684\u5176\u5b83\u5173\u8054\u5bf9\u8c61\u8fdb\u884c",(0,r.kt)("a",{parentName:"p",href:"./dissociation"},"\u8131\u94a9\u64cd\u4f5c"),"\u3002"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4f5c\u8005\u672c\u4eba\u8ba4\u4e3a\u8fd9\u4e2aAPI\u548c\u4fdd\u5b58\u6307\u4ee4\u7684\u6838\u5fc3\u7406\u5ff5\u80cc\u9053\u800c\u9a70\uff0c\u56e0\u6b64\u4e0d\u5e94\u8be5\u88ab\u4fdd\u7559\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6b22\u8fce\u4f60\u7684\u63d0\u51fa\u4f60\u7684\u89c1\u89e3\u3002\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../resource/discuss"},"\u8ba8\u8bba"))))}c.isMDXComponent=!0}}]);