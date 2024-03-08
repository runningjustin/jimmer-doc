"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,g=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(83117),a=n(67294),l=n(34334),i=n(72389),o=n(67392),m=n(7094),p=n(12466);const s="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:c,groupId:g,className:k}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:h}=(0,m.U)(),[j,T]=(0,a.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=g){const e=N[g];null!=e&&e!==j&&v.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),r=v[n].value;r!==j&&(I(t),T(r),null!=g&&h(g,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function c(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},59610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(83117),a=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:1,title:"\u521b\u5efa\u9879\u76ee"},m=void 0,p={unversionedId:"quick-view/get-started/create-project",id:"quick-view/get-started/create-project",title:"\u521b\u5efa\u9879\u76ee",description:"\u521b\u5efaSpringBoot\u9879\u76ee",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/get-started/create-project.mdx",sourceDirName:"quick-view/get-started",slug:"/quick-view/get-started/create-project",permalink:"/jimmer-doc/zh/docs/quick-view/get-started/create-project",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/quick-view/get-started/create-project.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u521b\u5efa\u9879\u76ee"},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/jimmer-doc/zh/docs/quick-view/get-started/"},next:{title:"\u521b\u5efa\u6570\u636e\u5e93",permalink:"/jimmer-doc/zh/docs/quick-view/get-started/create-database"}},s={},u=[{value:"\u521b\u5efaSpringBoot\u9879\u76ee",id:"\u521b\u5efaspringboot\u9879\u76ee",level:2},{value:"\u52a0\u5165\u4f9d\u8d56",id:"\u52a0\u5165\u4f9d\u8d56",level:2},{value:"kotlin\u9700\u8981\u7684\u989d\u5916\u914d\u7f6e",id:"kotlin\u9700\u8981\u7684\u989d\u5916\u914d\u7f6e",level:2},{value:"\u5176\u4ed6\u6709\u7528\u7684\u914d\u7f6e",id:"\u5176\u4ed6\u6709\u7528\u7684\u914d\u7f6e",level:2},{value:"\u6dfb\u52a0\u9664Jimmer\u5916\u7684\u5176\u4ed6\u5fc5\u8981\u4f9d\u8d56",id:"\u6dfb\u52a0\u9664jimmer\u5916\u7684\u5176\u4ed6\u5fc5\u8981\u4f9d\u8d56",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521b\u5efaspringboot\u9879\u76ee"},"\u521b\u5efaSpringBoot\u9879\u76ee"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"https://start.spring.io/"),"\u521b\u5efa\u4e00\u4e2aSpringBoot\u9879\u76ee\uff0c\u4f60\u9700\u8981\u9009\u62e9\u4f60\u559c\u6b22\u7684\u8bed\u8a00\uff1aJava\u6216Kotlin\u3002"),(0,a.kt)("p",null,"\u9879\u76ee\u7684\u8bed\u8a00\u7684\u9009\u62e9\u5f88\u91cd\u8981\uff0cJimmer\u652f\u6301\u4e24\u5957\u4e0d\u540c\u7684API\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Java API: \u4fdd\u8bc1\u5c3d\u53ef\u80fd\u591a\u7684\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Kotlin API: \u4e13\u4e3akotlin\u8bed\u8a00\u8bbe\u8ba1\u7684API\uff0c\u5c3d\u53ef\u80fd\u5229\u7528kotlin\u7684\u8bed\u8a00\u7279\u6027\u4f18\u5316\u5f00\u53d1\u4f53\u9a8c"))),(0,a.kt)("h2",{id:"\u52a0\u5165\u4f9d\u8d56"},"\u52a0\u5165\u4f9d\u8d56"),(0,a.kt)("p",null,"Jimmer\u672c\u8eab\u662f\u9ad8\u5ea6\u4e2d\u7acb\u7684\uff0c\u53ef\u4ee5\u8131\u79bbspring-boot\u4f7f\u7528\uff1b\u4f46\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e86\u826f\u597d\u7684spring-boot\u96c6\u6210"),(0,a.kt)("p",null,"\u7528\u6237\u65e2\u53ef\u4ee5\u9009\u62e9\u548cspring-boot\u7ed3\u5408\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\u3002\u4e0d\u540c\u7684\u9009\u62e9\u9700\u8981\u6dfb\u52a0\u7684\u4f9d\u8d56\u4e0d\u540c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"groupId:\norg.babyfish.jimmer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"artifaceId:"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"\u548cSpringBoot\u7ed3\u5408\u4f7f\u7528"),(0,a.kt)("th",null,"\u5355\u72ec\u4f7f\u7528"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Java"),(0,a.kt)("td",{rowspan:"2"},"jimmer-spring-boot-starter"),(0,a.kt)("td",null,"jimmer-sql")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Kotlin"),(0,a.kt)("td",null,"jimmer-sql-kotlin")))))),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u6784\u5efa\u5de5\u5177\u662fGradle\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u793e\u533a\u63d0\u4f9b\u7684\u7b2c\u4e09\u65b9Gradle\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"tech.argonariod.gradle-plugin-jimmer"),"\uff0c\u81ea\u52a8\u8bc6\u522b\u9879\u76ee\u7c7b\u578b\uff0c\u81ea\u52a8\u6dfb\u52a0\u4f9d\u8d56\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"tech.argonariod.gradle-plugin-jimmer")," \u63d2\u4ef6\u7531\u793e\u533a\u63d0\u4f9b\u548c\u7ef4\u62a4\u7528\u4ee5\u7b80\u5316 Jimmer \u9879\u76ee\u914d\u7f6e\uff0c\u975e Jimmer \u5b98\u65b9\u7ef4\u62a4\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4ed3\u5e93\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ArgonarioD/gradle-plugin-jimmer"},"https://github.com/ArgonarioD/gradle-plugin-jimmer"))),(0,a.kt)("p",null,"\u76f8\u6bd4\u4e8e\u72ec\u7acb\u4f7f\u7528\u800c\u8a00\uff0c\u548cSpring-Boot\u7ed3\u5408\u4f7f\u7528\u66f4\u7b80\u5355\uff0c\u56e0\u6b64\u672c\u6559\u7a0b\u4e00\u5f8b\u4f7f\u7528\u540e\u8005\u8fdb\u884c\u6f14\u793a\u3002"),(0,a.kt)("p",null,"\u4fee\u6539gradle\u6216maven\u6587\u4ef6\uff0c\u52a0\u5165\u4f9d\u8d56"),(0,a.kt)(l.Z,{groupId:"buildTool",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<properties>\n    <jimmer.version>0.8.104</jimmer.version>\n</properties>\n\n<dependencies>\n    <dependency>\n        <groupId>org.babyfish.jimmer</groupId>\n        <artifactId>jimmer-spring-boot-starter</artifactId>\n        <version>${jimmer.version}</version>\n    </dependency>\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n</dependencies>\n"))),(0,a.kt)(i.Z,{value:"gradle_plugin",label:"Gradle\u63d2\u4ef6",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'plugins {\n    // \u4ece Gradle 7.0 \u5f00\u59cb\uff0c\u53ef\u4ee5\u4f7f\u7528 "latest.release" \u4ee3\u66ff\u5177\u4f53\u7684\u7248\u672c\u53f7\uff0c\u4ee3\u8868\u4f7f\u7528\u6700\u65b0\u7248\u672c\n    // \u4e5f\u53ef\u4ee5\u4f7f\u7528 \'+\' \u5b57\u7b26\u4ee3\u8868\u4ece \'+\' \u5b57\u7b26\u5f00\u59cb\u5339\u914d\u6700\u65b0\u7684\u7248\u672c\u53f7\n    id "tech.argonariod.gradle-plugin-jimmer" version "latest.release"\n\n    ... \u7701\u7565\u5176\u5b83\u63d2\u4ef6 ...\n}\n\njimmer {\n    // \u8bbe\u5b9a jimmer \u4f9d\u8d56\u7248\u672c\uff0c\u6b64\u5904\u4e5f\u53ef\u4ee5\u4f7f\u7528 "latest.release" \u6216 "0.+" \u7b49\u7248\u672c\u8303\u56f4\u8868\u8fbe\u5f0f\n    version = "0.8.104"\n}\n'))),(0,a.kt)(i.Z,{value:"gradle_plugin_kts",label:"Gradle\u63d2\u4ef6(kts)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    // \u4ece Gradle 7.0 \u5f00\u59cb\uff0c\u53ef\u4ee5\u4f7f\u7528 "latest.release" \u4ee3\u66ff\u5177\u4f53\u7684\u7248\u672c\u53f7\uff0c\u4ee3\u8868\u4f7f\u7528\u6700\u65b0\u7248\u672c\n    // \u4e5f\u53ef\u4ee5\u4f7f\u7528 \'+\' \u5b57\u7b26\u4ee3\u8868\u4ece \'+\' \u5b57\u7b26\u5f00\u59cb\u5339\u914d\u6700\u65b0\u7684\u7248\u672c\u53f7\n    id("tech.argonariod.gradle-plugin-jimmer") version "latest.release"\n\n    ... \u7701\u7565\u5176\u5b83\u63d2\u4ef6 ...\n}\n\njimmer {\n    // \u8bbe\u5b9a jimmer \u4f9d\u8d56\u7248\u672c\uff0c\u6b64\u5904\u4e5f\u53ef\u4ee5\u4f7f\u7528 "latest.release" \u6216 "0.+" \u7b49\u7248\u672c\u8303\u56f4\u8868\u8fbe\u5f0f\n    version = "0.8.104"\n}\n'))),(0,a.kt)(i.Z,{value:"gradle",label:"Gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'ext {\n    jimmerVersion = "0.8.104"\n}\n\ndependencies {\n    \n    implementation "org.babyfish.jimmer:jimmer-spring-boot-starter:${jimmerVersion}"\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n'))),(0,a.kt)(i.Z,{value:"gradlekts",label:"Gradle(kts)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'val jimmerVersion = "0.8.104"\n\ndependencies {\n    \n    implementation "org.babyfish.jimmer:jimmer-spring-boot-starter:${jimmerVersion}"\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n')))),(0,a.kt)("h2",{id:"kotlin\u9700\u8981\u7684\u989d\u5916\u914d\u7f6e"},"kotlin\u9700\u8981\u7684\u989d\u5916\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u4eba\u5458\u9009\u62e9\u4e86kotlin\uff0c\u9700\u8981\u4fee\u6539spring-boot\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u70b9\u975e\u5e38\u91cd\u8981\u3002"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Kotlin\u9879\u76ee\u5fc5\u987b\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"jimmer.language"))),(0,a.kt)(l.Z,{groupId:"springBoot",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"properties",label:"application.properties",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jimmer.language = kotlin\n"))),(0,a.kt)(i.Z,{value:"maven",label:"application.yml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jimmer:\n    language: kotlin\n")))),(0,a.kt)("h2",{id:"\u5176\u4ed6\u6709\u7528\u7684\u914d\u7f6e"},"\u5176\u4ed6\u6709\u7528\u7684\u914d\u7f6e"),(0,a.kt)("p",null,"\u9664\u4e86kotlin\u9879\u76ee\u5fc5\u9700\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"jimmer.language"),"\u5916\uff0c\u8fd8\u6709\u5176\u4ed6\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u518d\u4ecb\u7ecd\u51e0\u4e2a\u5f88\u7528\u7684\u57fa\u672c\u914d\u7f6e\uff0c\u5bf9Java\u548cKotlin\u90fd\u6709\u6548"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jimmer.dialect"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"org.babyfish.jimmer.sql.dialect.DefaultDialect"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u65b9\u8a00\u7c7b\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jimmer.show-sql"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3atrue\uff0c\u81ea\u52a8\u6253\u5370\u88ab\u6267\u884c\u7684SQL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jimmer.pretty-sql"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"E\u786e\u4fdd\u6253\u5370\u7684sql\u662f\u683c\u5f0f\u826f\u597d\u7684 ",(0,a.kt)("em",{parentName:"td"},"(\u9ed8\u8ba4\u662f\u7d27\u51d1\u7684)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jimmer.database-validation-mode"),(0,a.kt)("td",{parentName:"tr",align:null},"NONE","|","WARNING","|","ERROR"),(0,a.kt)("td",{parentName:"tr",align:null},"NONE"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u975eNONE\uff0c\u9a8c\u8bc1\u6570\u636e\u5e93\u7ed3\u6784\u548c\u4ee3\u7801\u5b9e\u4f53\u7c7b\u578b\u7ed3\u6784\u7684\u4e00\u81f4\u6027\uff0c\u5982\u679c\u4e0d\u4e00\u81f4\uff0cWARNING\u5bfc\u81f4\u65e5\u5fd7\u544a\u8b66\uff0cERROR\u5bfc\u81f4\u62a5\u9519")))),(0,a.kt)("p",null,"\u5b8c\u6574\u7684\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"../../spring/appendix"},"Spring\u7bc7/\u9644\u5f55")),(0,a.kt)(l.Z,{groupId:"springBoot",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"properties",label:"application.properties",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jimmer.dialect = org.babyfish.jimmer.sql.dialect.MySqlDialect\njimmer.show-sql = true\njimmer.pretty-sql = true\njimmer.database-validation-mode = ERROR\n...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n"))),(0,a.kt)(i.Z,{value:"maven",label:"application.yml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jimmer:\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n    show-sql: true\n    pretty-sql: true\n    database-validation-mode: ERROR\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n")))),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u9664jimmer\u5916\u7684\u5176\u4ed6\u5fc5\u8981\u4f9d\u8d56"},"\u6dfb\u52a0\u9664Jimmer\u5916\u7684\u5176\u4ed6\u5fc5\u8981\u4f9d\u8d56"),(0,a.kt)("p",null,"\u9664\u4e86Jimmer\u5916\uff0c\u8fd8\u9700\u8981\u4e00\u4e9b\u5176\u4ed6\u5fc5\u8981\u7684\u4f9d\u8d56\uff0c\u6bd4\u5982spring-web\uff0cJDBC\u9a71\u52a8\u3002"),(0,a.kt)("p",null,"\u4fee\u6539gradle\u6216maven\u6587\u4ef6\uff0c\u52a0\u5165\u4f9d\u8d56"),(0,a.kt)(l.Z,{groupId:"buildTool",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"\n<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>mysql</groupId>\n        <artifactId>mysql-connector-java</artifactId>\n        <version>8.0.30</version>\n        <scope>runtime</scope>\n    </dependency>\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n</dependencies>\n"))),(0,a.kt)(i.Z,{value:"gradle",label:"Gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n    \n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    runtimeOnly 'mysql:mysql-connector-java:8.0.30'\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n"))),(0,a.kt)(i.Z,{value:"gradlekts",label:"Gradle(kts)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'dependencies {\n    \n    implementation("org.springframework.boot:spring-boot-starter-web")\n    runtimeOnly("mysql:mysql-connector-java:8.0.30")\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n')))))}c.isMDXComponent=!0}}]);