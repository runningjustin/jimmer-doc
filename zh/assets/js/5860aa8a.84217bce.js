"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8356],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=m(t),k=i,d=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var m=2;m<l;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),i=t(34334);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(83117),i=t(67294),l=t(34334),o=t(72389),r=t(67392),p=t(7094),m=t(12466);const u="tabList__CuJ",s="tabItem_LNqP";function c(e){var n;const{lazy:t,block:o,defaultValue:c,values:k,groupId:d,className:g}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=k??y.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),N=(0,r.l)(b,((e,n)=>e.value===n.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)??y[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,p.U)(),[T,C]=(0,i.useState)(f),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,m.o5)();if(null!=d){const e=v[d];null!=e&&e!==T&&b.some((n=>n.value===e))&&C(e)}const E=e=>{const n=e.currentTarget,t=j.indexOf(n),a=b[t].value;a!==T&&(x(n),C(a),null!=d&&h(d,String(a)))},K=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]??j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]??j[j.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},b.map((e=>{let{value:n,label:t,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>j.push(e),onKeyDown:K,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,i.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function k(e){const n=(0,o.Z)();return i.createElement(c,(0,a.Z)({key:String(n)},e))}},91731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>s});var a=t(83117),i=(t(67294),t(3905)),l=t(65488),o=t(85162);const r={sidebar_position:5,title:"\u771f\u5047\u5916\u952e"},p=void 0,m={unversionedId:"mapping/base/foreignkey",id:"mapping/base/foreignkey",title:"\u771f\u5047\u5916\u952e",description:"\u901a\u8fc7\u5173\u8054\u6620\u5c04\u7684\u8bba\u8ff0\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u5173\u8054\u6620\u5c04\u9700\u8981\u5927\u91cf\u7684\u5916\u952e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/foreignkey.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/foreignkey",permalink:"/jimmer-doc/zh/docs/mapping/base/foreignkey",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mapping/base/foreignkey.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u771f\u5047\u5916\u952e"},sidebar:"tutorialSidebar",previous:{title:"\u547d\u540d\u7b56\u7565",permalink:"/jimmer-doc/zh/docs/mapping/base/naming-strategy"},next:{title:"JSON Converter",permalink:"/jimmer-doc/zh/docs/mapping/base/json-converter"}},u={},s=[{value:"\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e",id:"\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e",level:2},{value:"\u660e\u786e\u6307\u5b9a\u4f2a\u5916\u952e",id:"\u660e\u786e\u6307\u5b9a\u4f2a\u5916\u952e",level:2},{value:"\u4e0d\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a",id:"\u4e0d\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a",level:2}],c={toc:s};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"./association"},"\u5173\u8054\u6620\u5c04"),"\u7684\u8bba\u8ff0\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u5173\u8054\u6620\u5c04\u9700\u8981\u5927\u91cf\u7684\u5916\u952e\u3002"),(0,i.kt)("p",null,"Jimmer\u4e2d\u5916\u952e\u6709\u4e24\u79cd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u771f\u5916\u952e\uff1a"),(0,i.kt)("p",{parentName:"li"},"\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u5bf9\u5e94\u7684\u5916\u952e\u7ea6\u675f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f2a\u5916\u952e\uff1a"),(0,i.kt)("p",{parentName:"li"},"\u5728\u5f00\u53d1\u4eba\u5458\u610f\u8bc6\u4e2d\u662f\u5916\u952e\uff0c\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u5e76\u6ca1\u6709\u5bf9\u5e94\u7684\u5916\u952e\u7ea6\u675f"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5728\u4fdd\u5b58\u6570\u636e\u65f6"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u771f\u5916\u952e\u9760\u5173\u7cfb\u6027\u6570\u636e\u5e93\u672c\u8eab\u7684\u80fd\u529b\u4fdd\u8bc1\u5f15\u7528\u5b8c\u6574\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f2a\u5916\u952e\u9760ORM\u5728\u4e0a\u5c42\u4ee3\u7801\u4e2d\u690d\u5165\u989d\u5916\u68c0\u67e5\u6765\u4fdd\u8bc1\u5f15\u7528\u5b8c\u6574\u6027"))),(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u79cd\u5dee\u5f02\u5bf9\u7528\u6237\u900f\u660e\uff0c\u7528\u6237\u53ea\u9700\u8981\u914d\u7f6e\u5916\u952e\u7684\u771f\u4f2a\u5373\u53ef\uff0c\u65e0\u9700\u4fee\u6539\u4e1a\u52a1\u4ee3\u7801\u3002")),(0,i.kt)("h2",{id:"\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e"},"\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u5916\u952e\u7684\u5173\u8054\u5c5e\u6027"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    BookStore store();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n    \n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    val store: BookStore\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.REAL),\n        // highlight-next-line\n        inverseJoinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    )\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n    \n    @ManyToMany\n    // highlight-next-line\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.REAL),\n        // highlight-next-line\n        inverseJoinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    )\n    val authors: List<Author>\n    \n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u548c\u4e4b\u524d\u7684\u4f8b\u5b50\u4e0d\u540c\uff0c\u8fd9\u91cc"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"JoinTable.joinColumns"),"\u800c\u975e",(0,i.kt)("inlineCode",{parentName:"p"},"JoinTable.joinColumnName")),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5916\u952e\u53ea\u6709\u4e00\u5217\u4e14\u4e0d\u60f3\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"joinColumnName"),"\u662f\u4e00\u79cd\u7b80\u5316\u914d\u7f6e\uff1b\u5426\u5219\uff0c\u5e94\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"joinColumns"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"JoinTable.inverseJoinColumns"),"\u800c\u975e",(0,i.kt)("inlineCode",{parentName:"p"},"JoinTable.inverseJoinColumnName")),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5916\u952e\u53ea\u6709\u4e00\u5217\u4e14\u4e0d\u60f3\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"inverseJoinColumnName"),"\u662f\u4e00\u79cd\u7b80\u5316\u914d\u7f6e\uff1b\u5426\u5219\uff0c\u5e94\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"inverseJoinColumns"))))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6570\u636e\u65b9\u8a00\u4e0d\u652f\u6301\u5916\u952e\uff0c ",(0,i.kt)("em",{parentName:"p"},"\uff08\u6bd4\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"em"},"org.babyfish.jimmer.sql.dialect.TiDBDialect"),"\uff09"),"\uff0c\u5219\u4e0d\u80fd\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u56e0\u4e3a\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u5206\u5e03\u5f0f\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0cTiDB\u4e0d\u652f\u6301\u5916\u952e\u7ea6\u675f\u3002")),(0,i.kt)("h2",{id:"\u660e\u786e\u6307\u5b9a\u4f2a\u5916\u952e"},"\u660e\u786e\u6307\u5b9a\u4f2a\u5916\u952e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u5916\u952e\u7684\u5173\u8054\u5c5e\u6027"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @ManyToOne\n    @Nullable\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    BookStore store();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n    \n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    val store: BookStore?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.FAKE),\n        // highlight-next-line\n        inverseJoinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    )\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n    \n    @ManyToMany\n    // highlight-next-line\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.FAKE),\n        // highlight-next-line\n        inverseJoinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    )\n    val authors: List<Author>\n    \n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))))),(0,i.kt)("h2",{id:"\u4e0d\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a"},"\u4e0d\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a"),(0,i.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a\uff0c\u53ef\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinColumn(foreignKeyType = ForeignKeyType.AUTO)"),"\u3002"),(0,i.kt)("p",null,"\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"ForeignKeyType.AUTO"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinColumn"),"\u6ce8\u89e3\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u6240\u4ee5\uff0c\u66f4\u597d\u7684\u9009\u62e9\u662f\u5bf9\u6b64\u4e0d\u505a\u4efb\u4f55\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u4ee3\u7801\u548c",(0,i.kt)("a",{parentName:"p",href:"./association"},"\u5173\u8054\u6620\u5c04"),"\u4e2d\u7684\u793a\u8303\u7684\u4ee3\u7801\u65e0\u5dee\u5f02\uff0c\u8fd9\u91cc\u65e0\u9700\u518d\u505a\u793a\u8303\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a\uff0c\u5219\u901a\u8fc7\u4ee5\u4e0b\u4e24\u4e2a\u6b65\u9aa4\u81ea\u52a8\u51b3\u5b9a\u5916\u952e\u7684\u771f\u4f2a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u6570\u636e\u5e93\u65b9\u8a00\u4e0d\u652f\u6301\u5916\u952e\uff0c ",(0,i.kt)("em",{parentName:"p"},"\uff08\u6bd4\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"em"},"org.babyfish.jimmer.sql.dialect.TiDBDialect"),"\uff09"),"\uff0c\u5219\u5224\u5b9a\u4e3a\u4f2a\u5916\u952e\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6b64\u65f6\uff0c\u5df2\u7ecf\u6709\u4e86\u5224\u5b9a\u7ed3\u679c\uff0c\u63d0\u524d\u8fd4\u56de\uff0c\u4e0d\u4f1a\u6267\u884c\u6b65\u9aa42")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u7b2c\u4e00\u6b65\u65e0\u6cd5\u5b8c\u6210\u5224\u5b9a\uff0c\u5219\u53c2\u89c1Jimmer\u7684\u5168\u5c40\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"foreign-key-enabled-by-default"),"\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u6b64\u914d\u7f6e\u4e3atrue\uff0c\u5219\u5224\u5b9a\u4e3a\u771f\u5916\u952e\uff1b\u5426\u5219\uff0c\u5224\u5b9a\u4e3a\u4f2a\u5916\u952e\u3002"),(0,i.kt)("p",{parentName:"li"},"\u8be5\u914d\u7f6e\u9ed8\u8ba4\u4e3atrue\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u5176\u8986\u76d6\u4e3afalse"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528SpringBoot"),(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties"),"\uff0c\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"jimmer.foreign-key-enabled-by-default"),"\u8bbe\u7f6e\u4e3afalse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u4f7f\u7528SpringBoot"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setForeignKeyEnabledByDefault(false)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setForeignKeyEnabledByDefault(false)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))))))}k.isMDXComponent=!0}}]);