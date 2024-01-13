"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(34334);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),r=n(67294),i=n(34334),l=n(72389),o=n(67392),p=n(7094),s=n(12466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:c,groupId:k,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:E}=(0,p.U)(),[T,h]=(0,r.useState)(N),D=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=k){const e=b[k];null!=e&&e!==T&&g.some((t=>t.value===e))&&h(e)}const C=e=>{const t=e.currentTarget,n=D.indexOf(t),a=g[n].value;a!==T&&(I(t),h(a),null!=k&&E(k,String(a)))},B=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;n=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=D[t]??D[D.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>D.push(e),onKeyDown:B,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},42453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),i=n(65488),l=n(85162);const o={sidebar_position:6,title:"\u4fdd\u5b58\u524d\u62e6\u622a\u5668"},p=void 0,s={unversionedId:"mutation/draft-interceptor",id:"mutation/draft-interceptor",title:"\u4fdd\u5b58\u524d\u62e6\u622a\u5668",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/draft-interceptor.mdx",sourceDirName:"mutation",slug:"/mutation/draft-interceptor",permalink:"/jimmer-doc/zh/docs/mutation/draft-interceptor",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/mutation/draft-interceptor.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u4fdd\u5b58\u524d\u62e6\u622a\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u76f4\u63a5\u4fee\u6539\u4e2d\u95f4\u8868",permalink:"/jimmer-doc/zh/docs/mutation/associations"},next:{title:"\ud83d\udd25 \u89e6\u53d1\u5668",permalink:"/jimmer-doc/zh/docs/mutation/trigger"}},d={},m=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f",id:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f",level:2},{value:"\u5b9a\u4e49\u62e6\u622a\u5668",id:"\u5b9a\u4e49\u62e6\u622a\u5668",level:2},{value:"\u63a7\u5236original\u53c2\u6570\u7684\u683c\u5f0f",id:"\u63a7\u5236original\u53c2\u6570\u7684\u683c\u5f0f",level:2},{value:"\u5e94\u7528\u62e6\u622a\u5668",id:"\u5e94\u7528\u62e6\u622a\u5668",level:2},{value:"\u4f7f\u7528Jimmer Spring Starter",id:"\u4f7f\u7528jimmer-spring-starter",level:3},{value:"\u4e0d\u4f7f\u7528Jimmer Spring Starter",id:"\u4e0d\u4f7f\u7528jimmer-spring-starter",level:3},{value:"\u6700\u7ec8\u4f7f\u7528",id:"\u6700\u7ec8\u4f7f\u7528",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,r.kt)("p",null,"\u4efb\u4f55\u5b9e\u4f53\u5bf9\u8c61\u5728\u88ab",(0,r.kt)("a",{parentName:"p",href:"./save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u4fdd\u5b58 ",(0,r.kt)("em",{parentName:"p"},"(\u65e0\u8bba\u63d2\u5165\u8fd8\u662f\u66f4\u65b0)")," \u524d\uff0c\u90fd\u4f1a\u88ab\u62e6\u622a\u5668\u62e6\u622a\u3002"),(0,r.kt)("p",null,"\u5728\u6b64\uff0c\u7528\u6237\u6709\u4e00\u6b21\u4fee\u6539\u88ab\u4fdd\u5b58\u6570\u636e\u7684\u673a\u4f1a\uff0c\u5c24\u5176\u662f\u4e3a\u67d0\u4e9b\u7f3a\u5931\u7684\u5c5e\u6027\u8d4b\u503c\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u62e6\u622a\u5668\u4e3a\u7f3a\u5931\u7684\u5c5e\u6027\u8d4b\u503c",(0,r.kt)("em",{parentName:"p"},"(\u8fd9\u4e5f\u662f\u63a8\u8350\u7528\u6cd5)"),"\uff0c\u5c31\u548c\u6570\u636e\u5e93\u7ea7\u522b\u7684\u9ed8\u8ba4\u503c\u6709\u70b9\u7c7b\u4f3c\uff0c\u4f46\u662f\u5b58\u5728\u5982\u4e0b\u5dee\u5f02"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u5e93\u9ed8\u8ba4\u503c\u53ea\u80fd\u63d0\u4f9b\u4e1a\u52a1\u65e0\u5173\u7684\u9ed8\u8ba4\u503c\u89c4\u5219\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u62e6\u622a\u5668\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u4e0a\u4e0b\u6587\u76f8\u5173\u4fe1\u606f\u63d0\u4f9b\u9ed8\u8ba4\u503c\uff0c\u6bd4\u5982\uff0c\u5f53\u524d\u7528\u6237\u5728\u6743\u9650\u7cfb\u7edf\u4e2d\u7684\u8eab\u4efd\u4fe1\u606f\u3002"),(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u6839\u636e\u8fd9\u7c7b\u4e1a\u52a1\u4e0a\u4e0b\u95ee\u4fe1\u606f\u63d0\u4f9b\u548c\u4e1a\u52a1\u7d27\u5bc6\u7ed3\u5408\u7684\u9ed8\u8ba4\u503c\uff0c\u8fd9\u662f\u6570\u636e\u5e93\u7ea7\u522b\u9ed8\u8ba4\u503c\u65e0\u6cd5\u5b9e\u73b0\u7684\u3002")))),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f"},"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f"),(0,r.kt)("p",null,"Draft\u62e6\u622a\u5668\u548c",(0,r.kt)("a",{parentName:"p",href:"./save-command"},"Save\u6307\u4ee4"),"\u914d\u5408\u4f7f\u7528\uff0c\u5728\u5bf9\u8c61\u88ab\u4fdd\u5b58\u4e4b\u524d\u8c03\u6574\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u5047\u5982\u5927\u90e8\u5206\u5b9e\u4f53\u8868\u90fd\u5177\u5907created_time\u3001modified_time\u3001created_by\u548cmodified_by\u56db\u4e2a\u5b57\u6bb5\uff0c\u53ef\u4ee5\u63d0\u4f9b\u5982\u4e0b\u8d85\u7c7b"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    LocalDateTime modifiedTime();\n\n    @Nullable\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User creator();\n\n    @Nullable\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User editor();\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val createdBy: User?\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val modifiedBy: User?\n}\n")))),(0,r.kt)("p",null,"\u6240\u6709\u9700\u8981\u8fd9\u4e9b\u5b57\u6bb5\u7684\u5b9e\u4f53\u90fd\u4ece\u6b64\u8d85\u7c7b\u6d3e\u751f\u5373\u53ef\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"@OnDissociate(DissociateAction.SET_NULL)"),"\u662f\u4e3a\u4e86\u9632\u6b62\u56e0\u8fd9\u4e24\u4e2a\u5916\u952e\u5bfc\u81f4\u76f8\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"User"),"\u6570\u636e\u7684\u5220\u9664\u64cd\u4f5c\u88ab\u963b\u6b62\u3002\u5f53\u76f8\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"User"),"\u88ab\u5220\u9664\u540e\uff0c\u8fd9\u4e24\u4e2a\u5916\u952e\u81ea\u52a8\u6e05\u7a7a\u3002")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u7136\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u62e6\u622a\u5b9e\u4f53\u7c7b\u578b ",(0,r.kt)("em",{parentName:"p"},"(\u88ab@Entity\u4fee\u9970)"),"\uff0c\u800c\u975e\u62bd\u8c61\u7c7b\u578b ",(0,r.kt)("em",{parentName:"p"},"(\u88ab@MappedSupperclass)")," \u4fee\u9970\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u5982\u679c\u9009\u62e9\u62e6\u622a\u62bd\u8c61\u7c7b\u578b\uff0c\u90a3\u4e48\u6240\u6709\u6d3e\u751f\u5b9e\u4f53\u7c7b\u578b\u7684\u4fdd\u5b58\u64cd\u4f5c\u90fd\u5c06\u4f1a\u88ab\u62e6\u622a\uff0c\u8fd9\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u7cfb\u7edf\u7684\u7075\u6d3b\u6027\uff0c\u5c24\u5176\u662f\u62bd\u8c61\u7c7b\u578b\u652f\u6301\u591a\u7ee7\u627f\u65f6\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\uff0c\u672c\u6587\u7684\u4f8b\u5b50\u9009\u62e9\u62e6\u622a\u62bd\u8c61\u7c7b\u578b\uff0c\u800c\u975e\u5b9e\u4f53\u7c7b\u578b\u3002")),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u62e6\u622a\u5668"},"\u5b9a\u4e49\u62e6\u622a\u5668"),(0,r.kt)("p",null,"\u5047\u8bbe\u6709\u4e00\u4e2a\u53eb\u505a",(0,r.kt)("inlineCode",{parentName:"p"},"UserService"),"\u7684\u670d\u52a1\u7c7b\uff0c\u5176java\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentUserId()"),"\u6216kotlin\u5c5e\u6027",(0,r.kt)("inlineCode",{parentName:"p"},"currentUserId"),"\u8fd4\u56de\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684id\u3002"),(0,r.kt)("p",null,"\u62e6\u622a\u5668\u9700\u8981\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.DraftInterceptor"),"\u63a5\u53e3\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528Spring\u6258\u7ba1 ",(0,r.kt)("em",{parentName:"p"},"(\u4e0b\u6587\u4f1a\u4ecb\u7ecd\u4e24\u79cd\u4f7f\u7528\u62e6\u622a\u5668\u7684\u65b9\u5f0f)"),"\uff0c\u8bf7\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@Component"),"\u4fee\u9970\u62e6\u622a\u5668\u5b9e\u73b0\u7c7b\uff0c\u4ee3\u7801\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class BaseEntityDraftInterceptor \nimplements DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    private final UserService userService;\n\n    public BaseEntityDraftInterceptor(UserService userService) {\n        this.userService = userService;\n    }\n\n    @Override\n    public void beforeSave(BaseEntityDraft draft, @Nullable BaseEntity original) {\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.MODIFIED_TIME)) {\n            draft.setModifiedTime(LocalDateTime.now());\n        }\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.EDITOR)) {\n            draft.applyModifiedBy(user - > {\n                user.setId(userService.getCurrentUserId());\n            });\n        }\n        if (orginal == null) {\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATED_TIME)) {\n                draft.setCreatedTime(LocalDateTime.now());\n            }\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATOR)) {\n                draft.applyCreatedBy(user - > {\n                    user.setId(userService.getCurrentUserId());\n                });\n            }   \n        }\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService\n) : DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    override fun beforeSave(draft: BaseEntityDraft, original: BaseEntity?) {\n        if (!isLoaded(draft, BaseEntity::modifiedTime)) {\n            draft.modifiedTime = LocalDateTime.now()\n        }\n\n        if (!isLoaded(draft, BaseEntity::modifiedBy)) {\n            draft.modifiedBy().apply {\n                id = userService.currentUserId\n            }\n        }\n\n        if (orginal === null) {\n            if (!isLoaded(draft, BaseEntity::createdTime)) {\n                draft.createdTime = LocalDateTime.now()\n            }\n\n            if (!isLoaded(draft, BaseEntity::createdBy)) {\n                draft.createdBy().apply {\n                    id = userService.currentUserId\n                }\n            }\n        }\n    }\n}\n")))),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave"),"\u65b9\u6cd5\u5728\u67d0\u4e2a\u5bf9\u8c61\u88ab\u4fdd\u5b58\u4e4b\u524d\u88ab\u8c03\u7528\uff0c\u7528\u6237\u53ef\u4ee5\u5bf9\u5373\u5c06\u4fdd\u5b58\u7684\u6570\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"draft"),"\u505a\u51fa\u6700\u540e\u8c03\u6574\u3002\u8be5\u65b9\u6cd5\u6709\u4e24\u4e2a\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"draft"),": \u5373\u5c06\u88ab\u4fdd\u5b58\u7684\u5bf9\u8c61\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539\u5b83")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"original"),": \u5982\u679c\u975enull\uff0c\u5219\u8868\u793a\u6570\u636e\u5e93\u4e2d\u73b0\u6709\u7684\u6570\u636e\uff0c\u53ea\u53ef\u8bfb\u53d6\uff0c\u4e0d\u53ef\u4fee\u6539"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8eINSERT\u64cd\u4f5c\u800c\u8a00\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"original"),"\u4e3anull")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8eUPDATE\u64cd\u4f5c\u800c\u8a00\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"original"),"\u975enull"))),(0,r.kt)("p",{parentName:"li"},"\u6240\u4ee5\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"orginal"),"\u662f\u5426\u4e3anull\u5224\u65ad\u5f53\u524d\u64cd\u4f5c\u662fINSERT\u8fd8\u662fUPDATE\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"orginal"),"\u5bf9\u8c61\u662f\u4e00\u4e2aJimmer\u52a8\u6001\u5bf9\u8c61\uff0c\u5176\u54ea\u4e9b\u4e9b\u5c5e\u6027\u5c31\u7eea\u53ef\u4ee5\u8bbf\u95ee\u800c\u54ea\u4e9b\u7f3a\u5931\u4e0d\u53ef\u8bbf\u95ee\uff0c\u53d7\u5230\u53e6\u5916\u4e00\u4e2a\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u7684\u63a7\u5236\u3002"))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u4e0d\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave"),"\u65b9\u6cd5\u4e2d\uff0c\u4fee\u6539\u88ab",(0,r.kt)("inlineCode",{parentName:"p"},"@Id"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"@Key"),"\u4fee\u9970\u7684\u5c5e\u6027\u3002")),(0,r.kt)("h2",{id:"\u63a7\u5236original\u53c2\u6570\u7684\u683c\u5f0f"},"\u63a7\u5236original\u53c2\u6570\u7684\u683c\u5f0f"),(0,r.kt)("p",null,"\u4e0a\u6587\u8c08\u5230\uff0c\u5982\u679c\u5f53\u524d\u64cd\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave"),"\u65b9\u6cd5\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"original"),"\u53c2\u6570\u975enull\uff0c\u8868\u793a\u6570\u636e\u5e93\u4e2d\u7684\u65e7\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"original"),"\u662fJimmer\u52a8\u6001\u5bf9\u8c61\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u5c5e\u6027\u662f\u5df2\u52a0\u8f7d\u548c\u53ef\u8bbf\u95ee\u7684\u3002\u7136\u800c\uff0c\u662f\u5426\u80fd\u591f\u63a7\u5236",(0,r.kt)("inlineCode",{parentName:"p"},"orginal"),"\u5bf9\u8c61\u7684\u683c\u5f0f\u8ba9\u8ddf\u591a\u7684\u5c5e\u6027\u53ef\u4ee5\u88ab\u8bbf\u95ee\u5462\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DraftInterceptor"),"\u63a5\u53e3\u63d0\u4f9b\u4e86\u53e6\u5916\u4e00\u4e2adefault\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5c5e\u6027\u96c6\u5408\uff0c\u4ee5\u8868\u793a\u9664\u4e86id\u5c5e\u6027\u548ckey\u5c5e\u6027\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"orginal"),"\u5bf9\u8c61\u8fd8\u6709\u90a3\u4e9b\u5c5e\u6027\u9700\u8981\u88ab\u52a0\u8f7d\u3002"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class BaseEntityDraftInterceptor \nimplements DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    @Override\n    public void beforeSave(\n        BaseEntityDraft draft, \n        \n        // The format of `original` is controlled by `dependences()`\n        @Nullable BaseEntity original\n    ) {\n        ...implementation is omitted...\n    }\n\n    @Override\n    // highlight-next-line\n    public Collection<TypedProp<BaseEntity, ?>> dependencies() {\n        return Arrays.asList(\n            BaseEntityProps.CREATED_BY, \n            BaseEntityProps.MODIFIED_BY\n        );\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService\n) : DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    override fun beforeSave(\n        draft: BaseEntityDraft, \n\n        // The format of `original` is controlled by `dependences()`\n        original: BaseEntity?\n    ) {\n        ...implementation is omitted...\n    }\n\n    // highlight-next-line\n    override fun dependencies(): Collection<TypedProp<BaseEntity, *>> = \n        listOf(\n            BaseEntityProps.CREATED_BY, \n            BaseEntityProps.MODIFIED_BY\n        )\n}\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd4\u56de\u7684\u5c5e\u6027\u96c6\u5408\u65e0\u9700\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u5c5e\u6027\uff0c\u56e0\u4e3a\u5b83\u4eec\u603b\u662f\u88ab\u52a0\u8f7d\u3002")),(0,r.kt)("h2",{id:"\u5e94\u7528\u62e6\u622a\u5668"},"\u5e94\u7528\u62e6\u622a\u5668"),(0,r.kt)("h3",{id:"\u4f7f\u7528jimmer-spring-starter"},"\u4f7f\u7528Jimmer Spring Starter"),(0,r.kt)("p",null,"\u4e0a\u6587\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u7684\u7c7b",(0,r.kt)("inlineCode",{parentName:"p"},"BaseEntityDraftInterceptor"),"\u88ab",(0,r.kt)("inlineCode",{parentName:"p"},"@Compnoent"),"\u4fee\u9970\uff0c\u5f88\u660e\u663e\u8fd9\u662f\u4e00\u4e2aSpring\u6258\u7ba1\u5bf9\u8c61\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528SpringBoot Starter\u4e14\u4fdd\u8bc1\u62e6\u622a\u5668\u88abSpring\u6258\u7ba1\uff0c\u90a3\u4e48Jimmer\u5c31\u4f1a\u5c06\u6ce8\u518c\u5b83\uff0c\u65e0\u9700\u989d\u5916\u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5426\u5219\uff0c\u5fc5\u9700\u624b\u52a8\u6ce8\u518c")),(0,r.kt)("h3",{id:"\u4e0d\u4f7f\u7528jimmer-spring-starter"},"\u4e0d\u4f7f\u7528Jimmer Spring Starter"),(0,r.kt)("p",null,"\u672a\u4f7f\u7528SpringBoot\u65f6\uff0c\u5c06\u62e6\u622a\u5668\u6302\u63a5\u5230SqlClinet\u5bf9\u8c61\u4e0a\uff0c\u5373\u53ef\u751f\u6548"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic JSqlClient sqlClient(\n    List<DraftInterceptor<?>> interceptors,\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...\n) {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addDraftinterceptors(interceptors)\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun sqlClient(\n    interceptors: List<DraftInterceptor<?>>,\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...\n): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        addDraftinterceptors(interceptors)\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u867d\u7136\u5728\u672c\u6587\u4ec5\u793a\u8303\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"DraftInterceptor"),"\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u53ef\u80fd\u6709\u5f88\u591a\u4e2a\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\uff0c\u8fd9\u91cc\u4f7f\u7528\u96c6\u5408\uff0c\u8ba9Spring\u6ce8\u5165\u6240\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"DraftInterceptor"),"\u3002")),(0,r.kt)("h2",{id:"\u6700\u7ec8\u4f7f\u7528"},"\u6700\u7ec8\u4f7f\u7528"),(0,r.kt)("p",null,"\u5047\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u7ee7\u627f\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"BaseEntity"),"\uff0c\u5219\u53ef\u4ee5\u8fd9\u4e48\u4f7f\u7528"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Objects.createBook(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("59"));\n    draft.applyStore(store -> store.setId(2L));\n});\nsqlClient.getEntities().save(book);\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("59")\n    store().id = 2\n}\nsqlClient.entities.save(book)\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0a\u9762\u7684\u4fdd\u5b58\u6307\u4ee4\u6700\u7ec8\u5bfc\u81f4\u4e86insert\u64cd\u4f5c\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK(\n    /* highlight-start */\n    CREATED_TIME,\n    MODIFIED_TIME,\n    CREATED_BY,\n    MODIFIED_BY,\n    /* highlight-end */\n    NAME, \n    EDITION, \n    PRICE, \n    STORE_ID\n) values(\n    /* highlight-next-line */\n    ?, ?, ?, ?,\n    ?, ?, ?, ?\n)\n")),(0,r.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED_TIME"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFIED_TIME"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED_BY"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFIED_BY"),"\u8d4b\u503c\u7684\u884c\u4e3a\u7531\u62e6\u622a\u5668\u81ea\u52a8\u6dfb\u52a0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0a\u9762\u7684\u4fdd\u5b58\u6307\u4ee4\u6700\u7ec8\u5bfc\u81f4\u4e86update\u64cd\u4f5c\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK set \n    /* highlight-start */\n    MODIFIED_TIME = ?,\n    MODIFIED_TIME,\n    /* highlight-end */\n    PRICE = ?, \n    STORE_ID = ? \nwhere ID = ?\n")))),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFIED_TIME"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFIED_BY"),"\u8d4b\u503c\u7684\u884c\u4e3a\u7531\u62e6\u622a\u5668\u81ea\u52a8\u6dfb\u52a0"))}c.isMDXComponent=!0}}]);