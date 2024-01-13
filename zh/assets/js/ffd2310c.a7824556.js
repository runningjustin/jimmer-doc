"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(34334);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),i=n(34334),l=n(72389),o=n(67392),p=n(7094),s=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:d,groupId:f,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,p.U)(),[_,O]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=h[f];null!=e&&e!==_&&g.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==_&&(E(t),O(a),null!=f&&N(f,String(a)))},z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},b)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>T.push(e),onKeyDown:z,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":_===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function d(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},43049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),i=n(65488),l=n(85162);const o={sidebar_position:4,title:"\u6df1\u5206\u9875\u4f18\u5316"},p=void 0,s={unversionedId:"query/paging/deep-optimization",id:"query/paging/deep-optimization",title:"\u6df1\u5206\u9875\u4f18\u5316",description:"\u5206\u9875\u67e5\u8be2\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5728\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5206\u9875\u533a\u95f4\u592a\u9760\u540e \uff08\u5373offset\u592a\u5927\uff09\uff0c\u4f1a\u5f15\u8d77\u6027\u80fd\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/paging/deep-optimization.mdx",sourceDirName:"query/paging",slug:"/query/paging/deep-optimization",permalink:"/jimmer-doc/zh/docs/query/paging/deep-optimization",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/query/paging/deep-optimization.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u6df1\u5206\u9875\u4f18\u5316"},sidebar:"tutorialSidebar",previous:{title:"\u53cd\u6392\u5e8f\u4f18\u5316",permalink:"/jimmer-doc/zh/docs/query/paging/reverse-sorting"},next:{title:"DSL\u8868\u8fbe\u5f0f",permalink:"/jimmer-doc/zh/docs/query/expression"}},u={},m=[{value:"\u8bbe\u7f6e\u9608\u503c",id:"\u8bbe\u7f6e\u9608\u503c",level:2},{value:"\u6548\u7528",id:"\u6548\u7528",level:2},{value:"\u8bbe\u7f6e\u4e3a0",id:"\u8bbe\u7f6e\u4e3a0",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5206\u9875\u67e5\u8be2\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5728\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5206\u9875\u533a\u95f4\u592a\u9760\u540e ",(0,r.kt)("em",{parentName:"p"},"\uff08\u5373offset\u592a\u5927\uff09"),"\uff0c\u4f1a\u5f15\u8d77\u6027\u80fd\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0cJimmer\u652f\u6301\u6df1\u5206\u9875\u4f18\u5316\uff0c\u4e3a\u5206\u9875\u67e5\u8be2\u7684offset\u8bbe\u7f6e\u4e00\u4e2a\u9608\u503c",(0,r.kt)("inlineCode",{parentName:"p"},"offset-optimizing-hreshold"),"\uff0c\u4e00\u65e6offset\u8fbe\u5230\u8fd9\u4e2a\u9608\u503c\uff0c\u6539\u53d8\u5206\u9875\u67e5\u8be2\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u9608\u503c"},"\u8bbe\u7f6e\u9608\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528Spring Boot Starter"),(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,r.kt)("em",{parentName:"p"},"(\u6216application.properties)"),"\uff0c\u6dfb\u52a0\u914d\u7f6e\u9879\u76ee",(0,r.kt)("inlineCode",{parentName:"p"},"offset-optimizing-hreshold"),"\uff0c\u5982\u4e0b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"jimmer:\n    offset-optimizing-hreshold: 1000\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5e95\u5c42API"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setOffsetOptimizingThreshold(1000)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setOffsetOptimizingThreshold(1000)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u8bbe\u7f6e\u8fd9\u4e2a\u9608\u503c\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Integer.MAX_VALUE"),"\uff0c\u8fd9\u8868\u793a\u6ca1\u6709\u5206\u9875\u67e5\u8be2\u53ef\u4ee5\u542f\u7528\u8be5\u529f\u80fd\u3002")),(0,r.kt)("h2",{id:"\u6548\u7528"},"\u6548\u7528"),(0,r.kt)("p",null,"\u8ba8\u8bba\u6b64\u529f\u80fd\u65e0\u9700count-query\uff0c\u5173\u6ce8\u4e8edata-query\u5373\u53ef\u3002\u8ba9\u6211\u4eec\u6765\u770b\u8fd9\u4e2a\u7b80\u5355\u7684\u5206\u9875\u67e5\u8be2"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public List<Book> findBooks(int limit, int offset) {\n    BookTable table = Tables.BOOK_TABLE;\n    return sqlClient\n            .createQuery(table)\n            .select(table)\n            .limit(limit, offset)\n            .execute();\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(limit: Int, offset: Int): List<Book> =\n    sqlClient.createQuery(Book::class) {\n        select(table)\n    }\n    .limit(limit, offset)\n    .execute()\n")))),(0,r.kt)("p",null,"\u4e0d\u540c\u7684\u65b9\u8a00\u5bf9\u5206\u9875\u67e5\u8be2\u7684\u652f\u6301\u4e0d\u76f8\u540c\uff0c\u5176\u4e2d\uff0cOracle\u8fd8\u6bd4\u590d\u6742\u3002\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"./usage#%E6%96%B9%E8%A8%80"},"\u5206\u9875\u67e5\u8be2/\u7528\u6cd5#\u65b9\u8a00")),(0,r.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u8ba8\u8bba\uff0c\u6211\u4eec\u5047\u8bbe\u7528\u6237\u91c7\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.H2Dialect"),"\uff0c\u8be5\u65b9\u8a00\u4e0b\u7684\u5206\u9875\u67e5\u8be2\u751f\u6210\u7684SQL\u5f88\u7b80\u5355\u3002"),(0,r.kt)("p",null,"\u5047\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"offset-optimizing-hreshold"),"\u88ab\u8bbe\u7f6e\u4e3a1000"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53offset\u5c0f\u4e8e1000\u65f6\uff0c\u6bd4\u5982\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"findBooks(10, 90)"),"\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nlimit ? /* 10 */ offset ? /* 90 */\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53offset\u5927\u7ea6\u6216\u7b49\u4e8e1000\u65f6\uff0c\u6bd4\u5982\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"findBooks(10, 1000)"),"\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    optimize_.ID,\n    optimize_.NAME,\n    optimize_.EDITION,\n    optimize_.PRICE,\n    optimize_.STORE_ID\nfrom (\n    select\n        tb_1_.ID optimize_core_id_\n        from BOOK tb_1_\n    limit ? /* 10 */ offset ? /* 1000 */\n) optimize_core_ inner join BOOK optimize_\n    on optimize_.ID = optimize_core_.optimize_core_id_\n")))),(0,r.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0c\u5f53offset\u8fc7\u5927\u65f6\uff0cJimmer\u4f1a\u5148\u5bf9id\u5217\u8fdb\u884c\u5206\u9875\u67e5\u8be2\uff0c\u518d\u628a\u5206\u9875\u540e\u7684id\u96c6\u5408\u8f6c\u5316\u4e3a\u5bf9\u8c61\u96c6\u5408\u3002\u5f53\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u5f88\u6709\u7528\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u4e3a0"},"\u8bbe\u7f6e\u4e3a0"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u67d0\u4e9b\u6570\u636e\u5e93 ",(0,r.kt)("em",{parentName:"p"},"(\u6bd4\u5982MySQL)")," \u800c\u8a00\uff0c\u53ea\u8981\u8868\u7684\u6570\u636e\u91cf\u5927\uff0c\u54ea\u6015\u67e5\u8be2\u7b2c\u4e00\u9875 ",(0,r.kt)("em",{parentName:"p"},"(offset\u4e3a0)"),"\uff0c\u6027\u80fd\u4e5f\u4e0d\u7406\u60f3\u3002"),(0,r.kt)("p",null,"\u8fd9\u65f6\uff0c\u4e0d\u59a8\u76f4\u63a5\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"offset-optimizing-hreshold"),"\u8bbe\u7f6e\u62100\u3002"))}d.isMDXComponent=!0}}]);