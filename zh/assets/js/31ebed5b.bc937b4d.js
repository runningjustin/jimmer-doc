"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),k=l,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(c,o(o({ref:t},s),{},{components:n})):a.createElement(c,o({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(34334);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(83117),l=n(67294),r=n(34334),o=n(72389),i=n(67392),p=n(7094),m=n(12466);const s="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:k,groupId:c,className:b}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=k??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,p.U)(),[T,j]=(0,l.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,m.o5)();if(null!=c){const e=f[c];null!=e&&e!==T&&h.some((t=>t.value===e))&&j(e)}const P=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==T&&(I(t),j(a),null!=c&&y(c,String(a)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:w,onFocus:P,onClick:P},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,l.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function k(e){const t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},48376:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(83117),l=(n(67294),n(3905)),r=n(65488),o=n(85162);const i={toc:[]};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{groupId:"buildTool",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java_maven",label:"Java(Maven)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                \x3c!-- highlight-next-line --\x3e\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId>\n                        \x3c!-- highlight-next-line --\x3e\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>${jimmer.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"))),(0,l.kt)(o.Z,{value:"java_gradle",label:"Java(Gradle)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'dependencies {\n    \n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n\n    annotationProcessor "org.babyfish.jimmer:jimmer-apt:${jimmerVersion}"\n}\n'))),(0,l.kt)(o.Z,{value:"kotin_gralde",label:"Kotlin(Gradle.kts)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    // \u6dfb\u52a0ksp\u63d2\u4ef6\n    id("com.google.devtools.ksp") version "1.7.10-1.0.6"\n\n    ...\u7701\u7565\u5176\u4ed6\u63d2\u4ef6...\n}\ndependencies {\n    \n    // \u5e94\u7528jimmer\u7684ksp\u4ee3\u7801\u751f\u6210\u5668\n    // highlight-next-line\n    ksp("org.babyfish.jimmer:jimmer-ksp:${jimmerVersion}")\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n\n// \u5c06\u751f\u6210\u7684\u4ee3\u7801\u6dfb\u52a0\u5230\u7f16\u8bd1\u8def\u5f84\u4e2d\u3002\n// \u6ca1\u6709\u8fd9\u4e2a\u914d\u7f6e\uff0cgradle\u547d\u4ee4\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\uff0c\n// \u4f46\u662f, Intellij\u65e0\u6cd5\u627e\u5230\u751f\u6210\u7684\u6e90\u7801\u3002\nkotlin {\n    sourceSets.main {\n        kotlin.srcDir("build/generated/ksp/main/kotlin")\n    }\n}\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ksp-overview.html"},"KSP"),"\u5b98\u65b9\u53ea\u652f\u6301gradle\uff0c\n\u7ecf\u8fc7\u5b9e\u8df5\u9a8c\u8bc1\uff0cKSP\u7684\u7b2c\u4e09\u65b9Maven\u63d2\u4ef6\u652f\u6301\u8ddf\u4e0d\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"kotlin/KSP"),"\u672c\u8eab\u7684\u7248\u672c\u8fed\u4ee3\uff0c\u5f80\u5f80\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u5f88\u591a\u95ee\u9898\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u6700\u7ec8Jimmer\u653e\u5f03\u4e86\u5bf9Kotlin\u7684Maven\u652f\u6301\uff0c\u8bf7Kotlin\u5f00\u53d1\u4eba\u5458\u4f7f\u7528Gradle.")))}p.isMDXComponent=!0},9952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(83117),l=(n(67294),n(3905)),r=n(65488),o=n(85162),i=n(48376);const p={sidebar_position:3,title:"APT/KSP"},m=void 0,s={unversionedId:"overview/apt-ksp",id:"overview/apt-ksp",title:"APT/KSP",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/overview/apt-ksp.mdx",sourceDirName:"overview",slug:"/overview/apt-ksp",permalink:"/jimmer-doc/zh/docs/overview/apt-ksp",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/overview/apt-ksp.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"APT/KSP"},sidebar:"tutorialSidebar",previous:{title:"\u9879\u76ee\u4ecb\u7ecd \u2726",permalink:"/jimmer-doc/zh/docs/overview/introduction"},next:{title:"Benchmark\u62a5\u544a",permalink:"/jimmer-doc/zh/docs/overview/benchmark"}},u={},d=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u5728\u54ea\u4f7f\u7528",id:"\u5728\u54ea\u4f7f\u7528",level:2},{value:"Java\u4ee3\u7801\u7684\u4e24\u79cd\u98ce\u683c",id:"java\u4ee3\u7801\u7684\u4e24\u79cd\u98ce\u683c",level:2},{value:"\u548cLombok\u914d\u5408",id:"\u548clombok\u914d\u5408",level:2}],k={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,"Jimmer\u9ad8\u5ea6\u4f9d\u8d56\u4e8eJVM\u751f\u6001\u7684\u9884\u7f16\u8bd1\u6280\u672f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8eJava\u800c\u8a00\uff0c\u5c31\u662fAPT\uff0c\u5373",(0,l.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/annotation-processors-support.html"},"Annotation Processor Tool"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Kotlin\u800c\u8a00\uff0c\u5c31\u662fKSP\uff0c\u5373",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ksp-overview.html"},"Kotlin Symbol Processing")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4f7f\u7528APT/KSP\u81ea\u52a8\u751f\u6210\u7684\u4e00\u4e9b\u4ee3\u7801\uff0c\u662f\u4f7f\u7528Jimmer\u6240\u5fc5\u987b\u7684\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u5982\u679c\u4f7f\u7528Intellij\u6253\u5f00",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer-examples"},"\u5b98\u65b9\u4f8b\u5b50"),"\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2aJava/Kotlin\u9879\u76ee\uff0c\u90fd\u4f1a\u53d1\u73b0\u4e00\u4e9b\u672c\u8be5\u88ab\u81ea\u52a8\u751f\u6210\u4ee3\u7801\u5e76\u4e0d\u5b58\u5728\u7684\u95ee\u9898\u3002\u5bf9\u6b64\uff0c\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5148\u7528\u547d\u4ee4\u884c\u5728\u8981\u6253\u5f00\u7684\u9879\u76ee\u76ee\u5f55\u4e0b\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"./mvnw install"),(0,l.kt)("em",{parentName:"p"},"(\u4ec5Java\u4f8b\u5b50\u63d0\u4f9b)"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"./gradlew build"),"\u547d\u4ee4\u5b8c\u6210\u4ee3\u7801\u751f\u6210\uff0c\u518d\u7528Intellij\u6253\u5f00\u9879\u76ee\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76f4\u63a5\u7528Intelilj\u4ee3\u5f00\u9879\u76ee\uff0c\u6682\u65f6\u65e0\u89c6IDE\u7684\u9519\u8bef\uff0c\u4f9d\u8d56\u4e0b\u8f7d\u5b8c\u6bd5\u540e\uff0c\u76f4\u63a5\u8fd0\u884c\u9879\u76ee\u7684main\u65b9\u6cd5\u6216\u5355\u5143\u6d4b\u8bd5 ",(0,l.kt)("em",{parentName:"p"},"(save-command/save-command-kt\u4ee5\u5355\u5143\u6d4b\u8bd5\u6f14\u793a\u529f\u80fd)"),"\uff0c\u6240\u6709IDE\u9519\u8bef\u5c06\u4f1a\u81ea\u52a8\u6d88\u5931\uff0c\u5e94\u7528\u4e5f\u4f1a\u88ab\u6b63\u786e\u542f\u52a8\u3002")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)(i.ZP,{mdxType:"Precompiler"}),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer-examples"},"\u5b98\u65b9\u4f8b\u5b50"),"\u4e2d\u7684\u6240\u6709\u9879\u76ee\u800c\u8a00"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6240\u6709Java\u4f8b\u5b50\u90fd\u5177\u5907",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\uff0c\u5373\uff0cmaven/gradle\u53cc\u652f\u6301\u3002"),(0,l.kt)("p",{parentName:"li"},"\u9996\u6b21\u6253\u5f00\u8fd9\u79cd\u9879\u76ee\u65f6\uff0cIntellij\u4f1a\u8be2\u95ee\u4ee5\u4f55\u79cd\u65b9\u5f0f\u6253\u5f00\uff0c\u505a\u51fa\u9009\u62e9\u5373\u53ef\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u8981\u5207\u6362\u6253\u5f00\u65b9\u5f0f\uff0c\u9000\u51faIntellij\uff0c\u5220\u9664\u9879\u76ee\u4e0b\u7684\u9690\u85cf\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},".idea"),"\uff0c\u518d\u7528Intellij\u6253\u5f00\uff0c\u91cd\u65b0\u9009\u62e9\u5373\u53ef\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6240\u6709\u7684Kotlin\u4f8b\u5b50\uff0c\u53ea\u5177\u5907",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle.kts"),"\u6587\u4ef6\uff0c\u5373\uff0c\u53ea\u652f\u6301gradle\u3002\u524d\u9762\u5df2\u7ecf\u89e3\u91ca\u539f\u56e0\u3002"))),(0,l.kt)("p",null,"Intellij\u5bf9\u901a\u8fc7maven\u5f15\u5165\u7684annotation processor\u7684\u6574\u5408\u5b58\u5728\u4e00\u4e9b\u8f7b\u7387\u7684\u8fc7\u5ea6\u4f18\u5316\u63aa\u65bd\uff0c\u5bfc\u81f4gradle\u548cIDE\u914d\u5408\u7684\u5f00\u53d1\u4f53\u9a8c\u4f18\u4e8emaven\u3002"),(0,l.kt)("h2",{id:"\u5728\u54ea\u4f7f\u7528"},"\u5728\u54ea\u4f7f\u7528"),(0,l.kt)("p",null,"\u4e1a\u52a1\u9879\u76ee\u5f88\u5c11\u662f\u4e00\u4e2a\u5355\u9879\u76ee\uff0c\u66f4\u591a\u65f6\u5019\u662f\u501f\u52a9\u4e8eMaven\u548cGradle\u8fd9\u7c7b\u6784\u5efa\u5de5\u5177\u5206\u5272\u6210\u591a\u4e2a\u5b50\u9879\u76ee\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\uff1f\u6211\u4eec\u5e94\u5728\u54ea\u4e9b\u5b50\u9879\u76ee\u4e2d\u4f7f\u7528\u524d\u9762\u8bb2\u8fc7\u7684\u914d\u7f6e\u5462\uff1f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b50\u9879\u76ee\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u76ee\u7684"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u610f\u4e8b\u9879"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5b9e\u4f53\u7684\u9879\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u5b9e\u4f53\u5b9a\u4e49\u751f\u6210\u5fc5\u8981\u7684\u4ee3\u7801\uff0c\u4f8b\u5982Draft\uff0cSQL DSL, Fetcher"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"src/main/dto"),"\u76ee\u5f55\u4e0b\u5b9a\u4e49DTO\u6587\u4ef6\u7684\u9879\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636eDTO\u8bed\u8a00\u7684\u4ee3\u7801\u751f\u6210DTO\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8eJava\u800c\u8a00\uff0c\u9664\u975e\u5f53\u524d\u5b50\u9879\u76ee\u6709\u5b9e\u4f53\u5b9a\u4e49\uff0c\u5426\u5219\u9700\u8981\u968f\u4fbf\u627e\u4e2a\u7c7b\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"@EnableDtoGeneration"),"\u4fee\u9970")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Spring Web\u6ce8\u89e3\u7684\u9879\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u751f\u6210Openapi\u6587\u6863\u548cTypeScript\u4ee3\u7801\uff0c\u5c06Web Api\u7684Java/Kotlin\u6587\u6863\u6ce8\u91ca\u5199\u5165\u6587\u6863\u548c\u5ba2\u6237\u7aef\u4ee3\u7801\u4e2d\uff1b\u652f\u6301\u8fdc\u7a0b\u5f02\u5e38"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"java\u4ee3\u7801\u7684\u4e24\u79cd\u98ce\u683c"},"Java\u4ee3\u7801\u7684\u4e24\u79cd\u98ce\u683c"),(0,l.kt)("p",null,"\u548cKotlin API\u4e0d\u540c\uff0cJava API\u505a\u4e0d\u5230\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578b\u4e0d\u51fa\u73b0\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u3002\u8bf7\u770b\u5982\u4e0b\u5bf9\u6bd4"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("th",null,"\u529f\u80fd"),(0,l.kt)("th",null,"Java"),(0,l.kt)("th",null,"Kotlin")),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"Draft"),(0,l.kt)("td",null,"\u4f7f\u7528\u751f\u6210\u7684\u7c7b\u578b`BookDraft`"),(0,l.kt)("td",null,"\u4f7f\u7528\u539f\u5b9e\u4f53\u7c7b\u578b`Book`")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Book book = \n    // highlight-next-line\n    BookDraft.$.produce(b -> {\n        b.setName("SQL");\n        b.addIntoAuthors(a -> {\n            a.setName("Jessica");\n        });\n        b.addIntoAuthors(a -> {\n            a.setName("Bob");\n        });\n    });\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book =\n    // highlight-next-line\n    new(Book::class).by {\n        name = "SQL in Action"\n        authors().addBy {\n            name = "Jessica"\n        }\n        authors().addBy {\n            name = "Bob"\n        }\n    }\n')))),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"SQL DSL"),(0,l.kt)("td",null,"\u4f7f\u7528\u751f\u6210\u7684\u7c7b\u578b`BookTable`"),(0,l.kt)("td",null,"\u4f7f\u7528\u539f\u5b9e\u4f53\u7c7b\u578b`Book`")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\nBookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.storeId().isNull())\n    .orderBy(table.name())\n    .select(table)\n    .execute();\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"List<Book> books = sqlClient\n    // highlight-next-line\n    .createQuery(Book::class) {\n        where(table.storeId.isNull())\n        orderBy(table.name)\n        select(table)\n    }\n    .execute()\n")))),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"Fetcher"),(0,l.kt)("td",null,"\u4f7f\u7528\u751f\u6210\u7684\u7c7b\u578b`BookFetcher`, `BookStoreFetcher`\u548c`AuthorFetcher`"),(0,l.kt)("td",null,"\u4f7f\u7528\u539f\u5b9e\u4f53\u7c7b\u578b`Book`")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Fetcher<Book> fetcher =\n    // highlight-next-line\n    BookFetcher.$\n        .allScalarFields()\n        .store(\n            // highlight-next-line\n            BookStoreFetcher.$\n                .allScalarFields()\n        )\n        .authors(\n            // highlight-next-line\n            AuthorFetcher.$\n                .allScalarFields()\n        )\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val fetcher = \n    // highlight-next-line\n    newFetcher(Book::class).by {\n        allScalarFields()\n        store {\n            allScalarFields()\n        }\n        authors {\n            allScalarFields()\n        }\n    }\n")))))),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0cJava\u548cKotlin\u7684\u62bd\u8c61\u80fd\u529b\u4e0d\u540c\uff0c\u5bfc\u81f4API\u8bbe\u8ba1\u80fd\u8fbe\u5230\u7684\u6548\u679c\u4e0d\u540c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8eKotlin\u800c\u8a00\uff0c\u65e0\u8bba\u4f55\u79cd\u573a\u666f\uff0c\u90fd\u53ea\u9700\u4f7f\u7528\u539f\u5b9e\u4f53\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8eJava\u800c\u8a00\uff0c\u4e0d\u5f97\u4e0d\u4f7f\u7528\u7531Annotation Processor\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578b\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"BookDraft"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BookTable"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BookFetcher"),"\u7b49\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4e0a\u8ff0Java\u4ee3\u7801\u4e2d\u9891\u7e41\u51fa\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},".$"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\u8fd9\u4e9b\u7c7b\u7684\u9759\u6001\u53ea\u8bfb\u5b57\u6bb5\u3002"))),(0,l.kt)("p",null,"\u5176\u5b9e\uff0c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\u662f\u6700\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u7136\u800c\uff0c\u8003\u8651\u5230\u90e8\u5206Java\u5f00\u53d1\u4eba\u5458\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\u5b58\u5728\u4e3b\u89c2\u504f\u89c1\uff0c\u5bf9\u5b9a\u4e49\u5b9e\u4f53\u7c7b\u578b\u7684Java\u5b50\u9879\u76ee\u800c\u8a00\uff0c\nJimmer\u7684APT\u8fd8\u662f\u751f\u62104\u4e2a\u6c47\u603b\u7c7b\u578b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Objects"),"\u7c7b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Tables"),"\u63a5\u53e3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"TableExes"),"\u63a5\u53e3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Fetchers"),"\u63a5\u53e3"))),(0,l.kt)("p",null,"\u8fd94\u4e2a\u7c7b\u578b\u6240\u5728\u7684\u5305\uff0c\u4e3a\u6240\u6709\u5b9e\u4f53\u7684\u516c\u5171\u5305\u3002"),(0,l.kt)("p",null,"\u8fd94\u4e2a\u7c7b\u578b\u901a\u8fc7\u5b9a\u4e49\u9759\u6001\u5e38\u91cf\u4e3aJava\u4ee3\u7801\u63d0\u4f9b\u53e6\u5916\u4e00\u79cd\u4ee3\u7801\u98ce\u683c\uff0c\u4e24\u79cd\u98ce\u683c\u5bf9\u6bd4\u5982\u4e0b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u63a5\u53d7",(0,l.kt)("inlineCode",{parentName:"th"},"$"),"\u7684\u98ce\u683c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e0d\u63a5\u53d7",(0,l.kt)("inlineCode",{parentName:"th"},"$"),"\u7684\u98ce\u683c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BookDraft.$.produce"),(0,l.kt)("td",{parentName:"tr",align:null},"Objects.createBook")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BookTable.$"),(0,l.kt)("td",{parentName:"tr",align:null},"Tables.BOOK_TABLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BookTableEx.$"),(0,l.kt)("td",{parentName:"tr",align:null},"TableExes.BOOK_TABLE_EX")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BookFetcher.$"),(0,l.kt)("td",{parentName:"tr",align:null},"Fetchers.BOOK_FETCHER")))),(0,l.kt)("p",null,"\u53e6\u5916\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Tables"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"TableExes"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Fetchers"),"\u662f\u63a5\u53e3\uff0c\u53ef\u4ee5\u4f7f\u7528imlements\u8bed\u53e5\u6765\u8fdb\u4e00\u6b65\u7b80\u5316\u4ee3\u7801 ",(0,l.kt)("em",{parentName:"p"},"(\u7531\u4e8eIntellij\u5bf9\u9759\u6001\u5bfc\u5165\u652f\u6301\u4e0d\u53cb\u597d\uff0c\u5b9e\u73b0\u5b9a\u4e49\u5e38\u91cf\u7684\u63a5\u53e3\u4ecd\u7136\u662f\u503c\u5f97\u63a8\u8350\u7684\u6280\u5de7)"),"\uff0c\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface FetcherConstants\n// highlight-next-line\nimplements Fetchers {\n    \n    Fetcher<Book> BOOK_DETAIL_FETCHER =\n        BOOK_FETCHER\n            .allScalarFields()\n            .store(\n                BOOK_STORE_FETCHER\n                    .allScalarFields()\n            )\n            .authors {\n                AUTHOR_FETCHER\n                    .allScalarFields()\n            };\n}\n")),(0,l.kt)("h2",{id:"\u548clombok\u914d\u5408"},"\u548cLombok\u914d\u5408"),(0,l.kt)("p",null,"Java\u9879\u76ee\u5e38\u5e38\u548cLombok\u914d\u5408\u4f7f\u7528\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u9879\u76ee\u9664\u4e86lomboka\u5916\u6ca1\u6709\u5176\u4ed6APT\uff0c\u53ea\u9700\u5bfc\u5165lombok\u7684\u4f9d\u8d56\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u4e00\u65e6\u5f15\u5165\u4e86\u5176\u4ed6APT\u914d\u7f6e",(0,l.kt)("em",{parentName:"p"},"(\u4e0d\u4e00\u5b9a\u662fJimmer\u7684APT\uff0c\u4efb\u4f55\u5176\u4ed6APT)"),"\uff0c\u5219\u5fc5\u987b\u660e\u786e\u914d\u7f6elombok\u7684APT\u3002"),(0,l.kt)(r.Z,{groupId:"buildTool",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java_maven",label:"Java(Maven)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                <annotationProcessorPaths>\n                    \x3c!--highlight-start--\x3e\n                    <path>\n                        <groupId>org.projectlombok</groupId>\n                        <artifactId>lombok</artifactId>\n                        <version>${lombok.version}</version>\n                    </path>\n                    \x3c!--highlight-end--\x3e\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId>\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>${jimmer.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"))),(0,l.kt)(o.Z,{value:"java_gradle",label:"Java(Gradle)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'dependencies {\n    \n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n\n    // highlight-next-line\n    annotationProcessor "org.projectlombok:lombok:${lombokVersion}"\n    annotationProcessor "org.babyfish.jimmer:jimmer-apt:${jimmerVersion}"\n}\n')))))}c.isMDXComponent=!0}}]);