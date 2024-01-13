"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[557],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(h,i(i({ref:r},c),{},{components:t})):n.createElement(h,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(67294),a=t(34334);const o="tabItem_Ymn6";function i(e){let{children:r,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},r)}},65488:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(83117),a=t(67294),o=t(34334),i=t(72389),l=t(67392),p=t(7094),s=t(12466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var r;const{lazy:t,block:i,defaultValue:m,values:d,groupId:h,className:g}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),v=(0,l.l)(f,((e,r)=>e.value===r.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:j}=(0,p.U)(),[N,E]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&f.some((r=>r.value===e))&&E(e)}const T=e=>{const r=e.currentTarget,t=w.indexOf(r),n=f[t].value;n!==N&&(O(r),E(n),null!=h&&j(h,String(n)))},q=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;t=w[r]??w[0];break}case"ArrowLeft":{const r=w.indexOf(e.currentTarget)-1;t=w[r]??w[w.length-1];break}}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:r,label:t,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===r?0:-1,"aria-selected":N===r,key:r,ref:e=>w.push(e),onKeyDown:q,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===r})}),t??r)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==N})))))}function d(e){const r=(0,i.Z)();return a.createElement(m,(0,n.Z)({key:String(r)},e))}},27352:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=t(83117),a=(t(67294),t(3905)),o=t(65488),i=t(85162);const l={sidebar_position:1,title:"\u57fa\u672c\u6982\u5ff5"},p=void 0,s={unversionedId:"graphql/concept",id:"graphql/concept",title:"\u57fa\u672c\u6982\u5ff5",description:"\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/graphql/concept.mdx",sourceDirName:"graphql",slug:"/graphql/concept",permalink:"/jimmer-doc/zh/docs/graphql/concept",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/graphql/concept.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u57fa\u672c\u6982\u5ff5"},sidebar:"tutorialSidebar",previous:{title:"GraphQL\u7bc7",permalink:"/jimmer-doc/zh/docs/graphql/"},next:{title:"Query",permalink:"/jimmer-doc/zh/docs/graphql/query"}},c={},u=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],m={toc:u};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"../spring"},"Spring\u7bc7"),"\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u5982\u4f55\u5229\u7528Jimmer\u5b9e\u73b0REST\u670d\u52a1\uff0c\u5e76\u4e3a\u4e4b\u81ea\u52a8\u751f\u6210\u5ba2\u6237\u7aef\u6240\u9700\u7684\u4ee3\u7801\uff0c\u6bd4\u5982TypeScript\u3002"),(0,a.kt)("p",null,"\u4e0d\u4ec5\u5982\u6b64\uff0cJimmer\u8fd8\u652f\u6301\u53e6\u5916\u4e00\u79cd\u5f00\u53d1\u6a21\u5f0f\uff0c\u6784\u5efa",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),"\u670d\u52a1\u3002\u8fd9\u662f\u672c\u7cfb\u5217\u6587\u7ae0\u8981\u8ba8\u8bba\u7684\u5185\u5bb9\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0cGraphQL\u534f\u8bae\u5e76\u4e0d\u652f\u6301\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u65e0\u6cd5\u901a\u8fc7GraphQL\u66b4\u9732\u7c7b\u4f3c\u4e8e",(0,a.kt)("a",{parentName:"p",href:"../query/object-fetcher/recursive"},"\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u9012\u5f52\u67e5\u8be2"),"\u7684\u529f\u80fd\uff0c\u8fd9\u662f\u76ee\u524d\u4f7f\u7528GraphQL\u5fc5\u987b\u63a5\u53d7\u7684\u529f\u80fd\u727a\u7272\u3002")),(0,a.kt)("p",null,"Jimmer\u5bf9GraphQL\u7684\u652f\u6301\u57fa\u4e8e",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL"),"\u5b9e\u73b0\u7684\u3002\n\u6240\u4ee5\uff0c\u9879\u76ee\u9700\u8981\u540c\u65f6\u5bfc\u5165Jimmer\u548cSpring GraphQL\u7684Spring Boot Starter\uff0c\u6bd4\u5982"),(0,a.kt)(o.Z,{groupId:"buildTool",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <dependencies>\n        <dependency>\n            <groupId>org.babyfish.jimmer</groupId>\n            <artifactId>jimmer-spring-boot-starter</artifactId>\n            <version>${jimmer.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifaceId>spring-boot-starter-graphql</artifaceId>\n            <version>${spring.boot.version}</version>\n        </dependency>\n        ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n    </dependencies>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"))),(0,a.kt)(i.Z,{value:"gradle",label:"Gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n    implementation \"org.babyfish.jimmer:jimmer-spring-boot-starter:${jimmerVersion}\"\n    implementation 'org.springframework.boot:spring-boot-starter-graphql'\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679cJimmer\u5b9e\u4f53\u7c7b\u578b\u4e5f\u5b9a\u4e49\u5728GraphQL\u9879\u76ee\u4e2d\uff0c\u800c\u5e76\u672a\u72ec\u7acb\u5f62\u6210\u53e6\u5916\u4e00\u4e2a\u9879\u76ee\uff0c\u90a3\u4e48\u9884\u7f16\u8bd1\u5668 ",(0,a.kt)("em",{parentName:"p"},"(\u5bf9Java\u800c\u8a00\uff0c\u662fAnnottion Processor\uff1b\u5bf9Kotlin\u800c\u8a00\uff0c\u662fKSP)")," \u4e5f\u914d\u7f6e\u5728\u6784\u5efa\u811a\u672c\u4e2d\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u90e8\u5206\u5185\u5bb9\u5df2\u7ecf\u5728",(0,a.kt)("a",{parentName:"p",href:"../overview/get-started/generate-code"},"\u751f\u6210\u4ee3\u7801"),"\u4e00\u6587\u4e2d\u88ab\u8be6\u7ec6\u8bba\u8ff0\u8fc7\uff0c\u672c\u6587\u4e0d\u518d\u91cd\u590d\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL"),"\u662fSchema-First\u65b9\u6848\uff0c\u800c\u975eCode-First\u65b9\u6848\uff0c\n\u56e0\u6b64\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u4e3a\u9879\u76ee\u521b\u5efa\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/graphql/schema.graphqls"),"\uff0c\u5e76\u5728\u5176\u4e2d\u5b9a\u4e49GraphQL Schema\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u662f",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL"),"\u7684\u8981\u6c42\uff0c\u5176\u5185\u5bb9GraphQL schema\u662f\u4e00\u79cd\u6807\u51c6\u7684\u8bed\u8a00\uff0c\u5b83\u4eec\u90fd\u548cJimmer\u65e0\u5173\uff0c\u672c\u6587\u4e0d\u505a\u89e3\u91ca\uff0c\u53ef\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-sql-graphql/src/main/resources/graphql/schema.graphqls"},"\u9644\u5e26\u4f8b\u5b50\u7684GraphQL Schema"),"\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u7248\u672c\u5b58\u5728\u9650\u5236\uff0c\u5728\u63d0\u4f9bGraphQL\u670d\u52a1\u65f6\uff0c\u8bf7\u52ff\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/calculated/formula#%E5%9F%BA%E4%BA%8Esql%E7%9A%84%E8%AE%A1%E7%AE%97"},"\u57fa\u4e8eSQL\u7684\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027"))))}d.isMDXComponent=!0}}]);