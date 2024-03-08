"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6239],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),r=a(67294),l=a(34334),i=a(72389),o=a(67392),c=a(7094),p=a(12466);const s="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:i,defaultValue:m,values:u,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:y}=(0,c.U)(),[N,E]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=C[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,a=w.indexOf(t),n=k[a].value;n!==N&&(T(t),E(n),null!=h&&y(h,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:I,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},66970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(83117),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const o={sidebar_position:4,title:"Cache Abandoned Reason"},c=void 0,p={unversionedId:"cache/multiview-cache/abandoned-callback",id:"cache/multiview-cache/abandoned-callback",title:"Cache Abandoned Reason",description:"CacheAbandonedCallback",source:"@site/docs/cache/multiview-cache/abandoned-callback.mdx",sourceDirName:"cache/multiview-cache",slug:"/cache/multiview-cache/abandoned-callback",permalink:"/jimmer-doc/docs/cache/multiview-cache/abandoned-callback",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/cache/multiview-cache/abandoned-callback.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Cache Abandoned Reason"},sidebar:"tutorialSidebar",previous:{title:"Advanced usage",permalink:"/jimmer-doc/docs/cache/multiview-cache/advanced"},next:{title:"Spring",permalink:"/jimmer-doc/docs/spring/"}},s={},d=[{value:"CacheAbandonedCallback",id:"cacheabandonedcallback",level:2},{value:"Registering Callback",id:"registering-callback",level:2},{value:"Default Behavior of Spring Boot Starter",id:"default-behavior-of-spring-boot-starter",level:2}],m={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cacheabandonedcallback"},"CacheAbandonedCallback"),(0,r.kt)("p",null,"Using multi-view caches is relatively strict and the following three conditions must be met at the same time:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The properties that need multi-view cache must be explicitly specified."),(0,r.kt)("p",{parentName:"li"},"Cache is multi-layered. Multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Binder")," objects must be specified for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainCacheBuilder<K, V>")," used to build the cache instance, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadingBinder/KLoadingBinder")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleBinder/KSimpleBinder"),"."),(0,r.kt)("p",{parentName:"li"},"For multi-view caches, ",(0,r.kt)("strong",{parentName:"p"},"all")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Binder")," objects must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadingBinder.Parameterized<K, V>/KLoadingBinder.Parameterized<K, V>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleBinder.Parameterized<K, V>/KSimpleBinder.Parameterized<K, V>")," interface. Otherwise, the final cache created by ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainCacheBuilder<K, V>")," is a single-view cache.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The filtering rules for association properties and the calculation rules for calculated properties must be cache friendly."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For association properties, ",(0,r.kt)("strong",{parentName:"p"},"all")," global filters that affect their associated objects must be cache friendly filters. If any one filter is not cache friendly, it may cause the all affected properties to be unable to use cache."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For user-defined cache filters, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheableFilter<E>/KCacheableFilter<E>")," interface must be implemented.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"@LogicalDeleted"),", its ",(0,r.kt)("inlineCode",{parentName:"p"},"useMultiViewCache")," property must be configured as ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ",(0,r.kt)("em",{parentName:"p"},"(this will cause its built-in global filter to implement the ",(0,r.kt)("inlineCode",{parentName:"em"},"CacheableFilter<E>/KCacheableFilter<E>")," interface)"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For calculated properties, the ",(0,r.kt)("inlineCode",{parentName:"p"},"getParameterMapRef")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"TransientResolver<ID, V>/KTransientResolver<ID, V>")," must not return null.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The object fetch cannot use ",(0,r.kt)("a",{parentName:"p",href:"../../query/object-fetcher/association#property-level-filters"},"property-level filters"),"."))),(0,r.kt)("p",null,"If these prerequisite conditions are not fully met, even if cache is specified for association or calculated properties, Jimmer will abandon them. Although the reasons have been explained in detail in previous documents, troubleshooting such issues during actual development is inconvenient. "),(0,r.kt)("p",null,"To quickly inform developers of the fact that property-level cache did not take effect and the reason, Jimmer defines a callback interface as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package org.babyfish.jimmer.sql.cache;\n\nimport org.babyfish.jimmer.meta.ImmutableProp;\n\npublic interface CacheAbandonedCallback {\n\n    void abandoned(ImmutableProp prop, Reason reason);\n\n    enum Reason {\n\n        CACHEABLE_FILTER_REQUIRED,\n       \n        PARAMETERIZED_CACHE_REQUIRED,\n   \n        FIELD_FILTER_USED\n    }\n}\n")),(0,r.kt)("p",null,"This callback interface tells developers that although cache is specified for a property, it is not adopted by Jimmer, and the reason. Its ",(0,r.kt)("inlineCode",{parentName:"p"},"abandoned")," method has two parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"prop"),": Which property does not adopt the cache configured by the user. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reason"),": The reason why the cache of this property is not adopted. There are three possible values:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CACHEABLE_FILTER_REQUIRED: The associated objects are affected by some global filters, but not all filters implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheableFilter<E>/KCacheableFilter<E>")," interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PARAMETERIZED_CACHE_REQUIRED: The ",(0,r.kt)("inlineCode",{parentName:"p"},"getParameters")," method of some ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheableFilter<E>/KCacheableFilter<E>")," objects affecting the association properties or the ",(0,r.kt)("inlineCode",{parentName:"p"},"getParameterMapRef")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"TransientResolver<ID, V>/KTransientResolver<ID, V>")," implementing the calculated properties returns a Map of non-zero length, but the cache configured for that property by the developer is not a multi-view cache.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FIELD_FILTER_USED: The developer uses property-level filters for the property in ",(0,r.kt)("a",{parentName:"p",href:"../../query/object-fetcher"},"object fetchers"),"."))))),(0,r.kt)("p",null,"Developers can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheAbandonedCallback")," interface themselves, create an object, and register it with SqlClient. There is no limit on the number of registered callback objects."),(0,r.kt)("h2",{id:"registering-callback"},"Registering Callback"),(0,r.kt)("p",null,"There are two ways to register ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheAbandonedCallback")," for Jimmer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using Spring Boot Starter"),(0,r.kt)("p",{parentName:"li"},"Just decorate the implementation class of ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheAbandonedCallback")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component"),":"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line \n@Component\npublic class MyCallback implements CacheAbandonedCallback {\n    ...omit code...\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@Component\nclass MyCallback : CacheAbandonedCallback {\n    ...omit code...\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using underlying API"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient =\n    JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addCacheAbandonedCallback(\n            new CacheAbandonedCallback() {\n                ...omit code...\n            }\n        )\n        ...omit other configuration...\n        .build();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    addCacheAbandonedCallback(\n        object: CacheAbandonedCallback {\n            ...omit code...\n        }\n    )\n    ...omit other configuration...\n}\n")))))),(0,r.kt)("h2",{id:"default-behavior-of-spring-boot-starter"},"Default Behavior of Spring Boot Starter"),(0,r.kt)("p",null,"If no callback implementation is registered by the user, the Spring Boot Starter will register a default callback implementation by default, outputting the reason why the cache is not adopted as a warning log, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"!!!Jimmer warning!!!\nProperty-level cache is abandoned.\n    Property: `com.yourcompany.yourproject.model.BookStore.books`\n    Reason: CACHEABLE_FILTER_REQUIRED\n")))}u.isMDXComponent=!0}}]);