"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(83117),r=a(67294),o=a(34334),i=a(72389),l=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:a,block:i,defaultValue:m,values:d,groupId:b,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:j}=(0,s.U)(),[N,w]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=b){const e=y[b];null!=e&&e!==N&&k.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==N&&(T(t),w(n),null!=b&&j(b,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},86433:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(83117),r=(a(67294),a(3905)),o=a(65488),i=a(85162);const l={sidebar_position:4,title:"Working with Jackson"},s=void 0,c={unversionedId:"object/jackson",id:"object/jackson",title:"Working with Jackson",description:"Jimmer objects are dynamic and not all properties of an object need to be initialized. It allows missing some properties.",source:"@site/docs/object/jackson.mdx",sourceDirName:"object",slug:"/object/jackson",permalink:"/jimmer-doc/docs/object/jackson",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/object/jackson.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Working with Jackson"},sidebar:"tutorialSidebar",previous:{title:"Draft",permalink:"/jimmer-doc/docs/object/draft"},next:{title:"DTO conversion",permalink:"/jimmer-doc/docs/object/view/"}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jimmer objects are dynamic and not all properties of an object need to be initialized. It allows missing some properties.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Accessing an unspecified property directly in code will cause an exception.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unspecified properties are automatically ignored in JSON serialization without exceptions."))),(0,r.kt)("p",null,"JSON serialization is mentioned here, referring to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"jackson"),"."),(0,r.kt)("p",null,"jimmer-core defines a jackson module: ",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.jackson.ImmutableModule")," which can add the ability of serialize/deserialize jimmer immutable objects for jackson."),(0,r.kt)("p",null,"There are two cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using Spring Boot Starter"),(0,r.kt)("p",{parentName:"li"},"In this case, Jimmer has already registered ImmutableModule to Spring as below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Internal Jimmer code, not user code\n@ConditionalOnMissingBean(ImmutableModule.class) \n@Bean\npublic ImmutableModule immutableModule() {\n    return new ImmutableModule();\n}\n")),(0,r.kt)("p",{parentName:"li"},"Therefore, the default ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectMapper")," of Spring can already serialize/deserialize Jimmer dynamic objects, and most serialization/deserialization work is done automatically by Spring during HTTP interaction, so no extra development is required."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The default JSON handling library in Spring is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"jackson"),". Don't replace it."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using low level API"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ObjectMapper mapper = new ObjectMapper()\n    // highlight-next-line\n    .registerModule(new ImmutableModule());\n\nTreeNode treeNode = Objects.createTreeNode(\n    draft -> draft.setName("Root Node")\n);\n\n// Serialize    \nString json = mapper.writeValueAsString(treeNode);\n\n// Deserialize\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode.class);\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val mapper = ObjectMapper()\n    // highlight-next-line\n    .registerModule(ImmutableModule())\n\nval treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n}\n\n// Serialize\nval json = mapper.writeValueAsString(treeNode)\n\n// Deserialize\nval deserializedTreeNode = \n    mapper.readValue(json, TreeNode::class.java)\n')))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"For serialization, there is a handy way which is the ",(0,r.kt)("inlineCode",{parentName:"li"},"toString")," method of jimmer objects.  "))))}d.isMDXComponent=!0}}]);