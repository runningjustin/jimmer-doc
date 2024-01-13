"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4042],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=u(a),s=l,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(83117),l=a(67294),i=a(34334),o=a(72389),r=a(67392),p=a(7094),u=a(12466);const m="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:s,groupId:k,className:g}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=s??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,r.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[T,E]=(0,l.useState)(h),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==T&&b.some((t=>t.value===e))&&E(e)}const B=e=>{const t=e.currentTarget,a=j.indexOf(t),n=b[a].value;n!==T&&(x(t),E(n),null!=k&&N(k,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},g)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:D,onFocus:B,onClick:B},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function s(e){const t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},32437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var n=a(83117),l=(a(67294),a(3905)),i=a(65488),o=a(85162);const r={sidebar_position:3,title:"\u903b\u8f91\u5220\u9664"},p=void 0,u={unversionedId:"mapping/advanced/logical-deleted",id:"mapping/advanced/logical-deleted",title:"\u903b\u8f91\u5220\u9664",description:"\u903b\u8f91\u5220\u9664\u4e5f\u79f0\u8f6f\u5220\u9664\uff0c\u8868\u793a\u5e76\u4e0d\u771f\u6b63\u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u6570\u636e\uff0c\u800c\u662f\u901a\u8fc7\u9690\u85cf\u6570\u636e\u6765\u8fbe\u5230\u6570\u636e\u88ab\u5220\u9664\u7684\u5047\u8c61\u3002\u8fd9\u53ef\u4ee5\u4e3a\u8bef\u64cd\u4f5c\u7559\u4e0b\u4e00\u6b21\u6062\u590d\u7684\u673a\u4f1a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/logical-deleted.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/logical-deleted",permalink:"/jimmer-doc/zh/docs/mapping/advanced/logical-deleted",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mapping/advanced/logical-deleted.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u903b\u8f91\u5220\u9664"},sidebar:"tutorialSidebar",previous:{title:"MappedSuperclass",permalink:"/jimmer-doc/zh/docs/mapping/advanced/mapped-super-class"},next:{title:"\u89c6\u56fe\u5c5e\u6027",permalink:"/jimmer-doc/zh/docs/mapping/advanced/view/"}},m={},c=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"boolean\u7c7b\u578b",id:"boolean\u7c7b\u578b",level:3},{value:"int\u7c7b\u578b",id:"int\u7c7b\u578b",level:3},{value:"\u679a\u4e3e\u7c7b\u578b",id:"\u679a\u4e3e\u7c7b\u578b",level:3},{value:"\u65e5\u671f",id:"\u65e5\u671f",level:3},{value:"\u591a\u7248\u672c\u95ee\u9898",id:"\u591a\u7248\u672c\u95ee\u9898",level:2}],d={toc:c};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u903b\u8f91\u5220\u9664\u4e5f\u79f0\u8f6f\u5220\u9664\uff0c\u8868\u793a\u5e76\u4e0d\u771f\u6b63\u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u6570\u636e\uff0c\u800c\u662f\u901a\u8fc7\u9690\u85cf\u6570\u636e\u6765\u8fbe\u5230\u6570\u636e\u88ab\u5220\u9664\u7684\u5047\u8c61\u3002\u8fd9\u53ef\u4ee5\u4e3a\u8bef\u64cd\u4f5c\u7559\u4e0b\u4e00\u6b21\u6062\u590d\u7684\u673a\u4f1a\u3002"),(0,l.kt)("p",null,"\u60f3\u8ba9\u5b9e\u4f53\u652f\u6301\u903b\u8f91\u5220\u9664\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.LogicalDeleted"),"\u7684\u6807\u5fd7\u5c5e\u6027\uff0c\u4ee5\u8868\u793a\u8be5\u6570\u636e\u662f\u6b63\u5e38\u7684\u8fd8\u662f\u5df2\u7ecf\u88ab\u5220\u9664\u3002"),(0,l.kt)("p",null,"\u4e00\u65e6\u4e3a\u5b9e\u4f53\u914d\u7f6e\u4e86\u903b\u8f91\u5220\u9664\u5c5e\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u8c03\u7528API\u5220\u9664\u67d0\u4e2a\u5b9e\u4f53\u5bf9\u8c61\u65f6\uff0cJimmer\u5e76\u4e0d\u4f1a\u7528SQL\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),"\u8bed\u53e5\u771f\u6b63\u5220\u9664\u6570\u636e\uff0c\u800c\u662f\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\u8bed\u53e5\u628a\u8be5\u5b9e\u4f53\u7684\u903b\u8f91\u5220\u9664\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u201c\u5df2\u7ecf\u88ab\u5220\u9664\u201c"),(0,l.kt)("p",{parentName:"li"},"\u5176\u4ed6\u60c5\u51b5\uff1a\u5373\u4fbf\u5b9e\u4f53\u5177\u5907\u903b\u8f91\u5220\u9664\u5c5e\u6027\uff0cJimmer\u4e5f\u63d0\u4f9bAPI\u8ba9\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u989d\u5916\u7684\u53c2\u6570\u5f3a\u884c\u771f\u6b63\u5220\u9664\u5bf9\u8c61\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u9488\u5bf9\u5b9e\u4f53\u7684SQL\u67e5\u8be2\u90fd\u4f1a\u88ab\u81ea\u52a8\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"where \u8f6f\u5220\u9664\u6807\u5fd7 <> \u5df2\u7ecf\u88ab\u5220\u9664"),"\u7684\u6761\u4ef6\uff0c\u4ece\u800c\u8425\u9020\u51fa\u67d0\u4e9b\u6570\u636e\u5df2\u7ecf\u88ab\u5220\u9664\u7684\u5047\u8c61\u3002"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u672c\u6587\u53ea\u4ecb\u7ecd\u903b\u8f91\u5220\u9664\u6807\u5fd7\u5b57\u6bb5\u7684\u6620\u5c04\uff0c\u81f3\u4e8e\u903b\u8f91\u5220\u9664\u529f\u80fd\u7684\u7684\u4f7f\u7528\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"../../query/global-filter/logical-deleted"},"\u5168\u5c40\u8fc7\u6ee4\u5668/\u903b\u8f91\u5220\u9664"),"\u3002")),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("p",null,"\u903b\u8f91\u5220\u9664\u6807\u5fd7\u5c5e\u6027\u53ef\u4ee5\u662f\u5982\u4e0b\u7c7b\u578b\u4e4b\u4e00"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"boolean\uff1a\u5fc5\u987b\u975enull"),(0,l.kt)("li",{parentName:"ul"},"int\uff1a\u5fc5\u987b\u975enull"),(0,l.kt)("li",{parentName:"ul"},"\u679a\u4e3e\uff1a\u5fc5\u987b\u975enull"),(0,l.kt)("li",{parentName:"ul"},"\u65e5\u671f\uff1a\u5fc5\u987b\u53efnull")),(0,l.kt)("h3",{id:"boolean\u7c7b\u578b"},"boolean\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7528true\u8868\u793a\u88ab\u5220\u9664"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    boolean isDeleted();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val isDeleted: Boolean\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7528false\u8868\u793a\u88ab\u5220\u9664"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("false")\n    boolean isEnabled();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("false")\n    val isEnabled: Boolean\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))))),(0,l.kt)("h3",{id:"int\u7c7b\u578b"},"int\u7c7b\u578b"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("4")\n    int state();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("4")\n    val state: Int\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,l.kt)("h3",{id:"\u679a\u4e3e\u7c7b\u578b"},"\u679a\u4e3e\u7c7b\u578b"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5b9a\u4e49\u679a\u4e3e\u7c7b\u578b\uff0c\u8868\u793a\u6570\u636e\u7684\u72b6\u6001"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookState.java"',title:'"BookState.java"'},"public enum BookState {\n    INTIALIZED,\n    FROZEN,\n    PUBLISHED,\n    DELETED\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookState.kt"',title:'"BookState.kt"'},"enum class BookState {\n    INTIALIZED,\n    FROZEN,\n    PUBLISHED,\n    DELETED\n}\n")))),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("DELETED")\n    BookState state();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("DELETED")\n    val state: BookState\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u81f3\u4e8eJimmer\u4fdd\u5b58\u679a\u4e3e\u5c5e\u6027\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"./enum"},"Enum\u6620\u5c04"))),(0,l.kt)("h3",{id:"\u65e5\u671f"},"\u65e5\u671f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7528\u975enull\u8868\u793a\u5df2\u5220\u9664\uff0cnull\u8868\u793a\u672a\u5220\u9664\u3002"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("now")\n    @Nullable\n    LocalDateTime deletedTime();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("now")\n    val deletedTime: LocalDateTime?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},'"now"'),"\u8868\u793a\u76f8\u5173\u6570\u636e\u88ab\u903b\u8f91\u5220\u9664\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"deletedTime"),"\u5c5e\u6027\u4f1a\u88ab\u81ea\u52a8\u8bbe\u7f6e\u4e3aJVM\u7684\u5f53\u524d\u65f6\u95f4\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7528null\u8868\u793a\u5df2\u5220\u9664\uff0c\u975enull\u8868\u793a\u672a\u5220\u9664"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("null")\n    @Nullable\n    LocalDateTime createdTime();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("null")\n    val createdTime: LocalDateTime?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},'"null"'),"\u8868\u793a\u76f8\u5173\u6570\u636e\u88ab\u903b\u8f91\u5220\u9664\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"createdTime"),"\u5c5e\u6027\u4f1a\u88ab\u81ea\u52a8\u8bbe\u7f6e\u4e3anull\u3002")))),(0,l.kt)("h2",{id:"\u591a\u7248\u672c\u95ee\u9898"},"\u591a\u7248\u672c\u95ee\u9898"),(0,l.kt)("p",null,"\u903b\u8f91\u5220\u9664\u5e76\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u88ab\u771f\u6b63\u5220\u9664\uff0c\u53ea\u4f1a\u5bfc\u81f4\u6570\u636e\u88ab\u9690\u85cf\uff0c\u8fd9\u4ee3\u8868\u7740\u6570\u636e\u51fa\u73b0\u591a\u7248\u672c\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u63a8\u8350id\u91c7\u7528\u81ea\u52a8\u751f\u6210\u7b56\u7565\uff0c\u800c\u975e\u7531\u7528\u6237\u6307\u5b9a\u3002\u56e0\u4e3a\u88ab\u903b\u8f91\u5220\u9664\u7684\u6570\u636e\u4ecd\u7136\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u4e2d\uff0c\u5177\u5907\u76f8\u540cid\u7684\u6570\u636e\u518d\u4e5f\u65e0\u6cd5\u88ab\u6210\u529f\u63d2\u5165\u3002"),(0,l.kt)("p",null,"\u4e00\u65e6id\u91c7\u7528\u4e86\u81ea\u52a8\u751f\u6210\u7b56\u7565\uff0c\u5c31\u5931\u53bb\u4e86\u4e1a\u52a1\u610f\u4e49\u3002\u6240\u4ee5\uff0c\u5f00\u53d1\u4eba\u5458\u5e94\u8be5\u5728\u4e3b\u952e\u7ea6\u675f\u4e4b\u5916\uff0c\u57fa\u4e8e\u5176\u4ed6\u5b57\u6bb5\u5efa\u7acb\u552f\u4e00\u6027\u7ea6\u675f/\u7d22\u5f15\uff0c\u6765\u4fdd\u8bc1\u6570\u636e\u5728\u4e1a\u52a1\u5c42\u9762\u7684\u552f\u4e00\u6027\u3002\n\u5f88\u663e\u7136\uff0c\u6570\u636e\u7684\u591a\u7248\u672c\u5316\u4f1a\u589e\u52a0\u7528\u6237\u5efa\u7acb\u552f\u4e00\u6027\u7ea6\u675f/\u7d22\u5f15\u7684\u590d\u6742\u6027\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u5173\u6ce8\u903b\u8f91\u5220\u9664\u7684\u6620\u5c04\u914d\u7f6e\uff0c\u6545\u4ec5\u6307\u51fa\u8fd9\u95ee\u9898\u4f46\u4e0d\u4e88\u4ee5\u8ba8\u8bba\uff0c\u5bf9\u8be5\u95ee\u9898\u7684\u6df1\u5165\u63a2\u8ba8\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"./key#%E5%A4%9A%E7%89%88%E6%9C%AC%E6%94%AF%E6%8C%81"},"Key/\u591a\u7248\u672c\u652f\u6301"),"\u3002"))}s.isMDXComponent=!0}}]);