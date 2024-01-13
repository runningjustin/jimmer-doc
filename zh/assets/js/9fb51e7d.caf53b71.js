"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5793],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),k=l,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||r;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(83117),l=t(67294),r=t(34334),i=t(72389),o=t(67392),p=t(7094),s=t(12466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var n;const{lazy:t,block:i,defaultValue:c,values:k,groupId:d,className:h}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=k??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,o.l)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,p.U)(),[B,C]=(0,l.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=d){const e=v[d];null!=e&&e!==B&&y.some((n=>n.value===e))&&C(e)}const O=e=>{const n=e.currentTarget,t=T.indexOf(n),a=y[t].value;a!==B&&(E(n),C(a),null!=d&&N(d,String(a)))},R=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},h)},y.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===n?0:-1,"aria-selected":B===n,key:n,ref:e=>T.push(e),onKeyDown:R,onFocus:O,onClick:O},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":B===n})}),t??n)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===B))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==B})))))}function k(e){const n=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},41979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(83117),l=(t(67294),t(3905)),r=t(65488),i=t(85162);const o={sidebar_position:1,title:"\u529f\u80fd\u4ecb\u7ecd"},p=void 0,s={unversionedId:"quick-view/fetch/feature",id:"quick-view/fetch/feature",title:"\u529f\u80fd\u4ecb\u7ecd",description:"\u6700\u7b80\u5355\u7684Repository",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/fetch/feature.mdx",sourceDirName:"quick-view/fetch",slug:"/quick-view/fetch/feature",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/feature",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/quick-view/fetch/feature.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u529f\u80fd\u4ecb\u7ecd"},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2\u4efb\u610f\u5f62\u72b6",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/"},next:{title:"\u66b4\u9732\u529f\u80fd",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/export/"}},u={},m=[{value:"\u6700\u7b80\u5355\u7684Repository",id:"\u6700\u7b80\u5355\u7684repository",level:2},{value:"\u6539\u8fdb\u540e\u7684\u7684Repository",id:"\u6539\u8fdb\u540e\u7684\u7684repository",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u67e5\u8be2\u6b8b\u7f3a\u5bf9\u8c61",id:"\u67e5\u8be2\u6b8b\u7f3a\u5bf9\u8c61",level:3},{value:"\u67e5\u8be2\u591a\u4e2a\u5bf9\u8c61\u6784\u6210\u7684\u6570\u636e\u7ed3\u6784",id:"\u67e5\u8be2\u591a\u4e2a\u5bf9\u8c61\u6784\u6210\u7684\u6570\u636e\u7ed3\u6784",level:3}],c={toc:m};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6700\u7b80\u5355\u7684repository"},"\u6700\u7b80\u5355\u7684Repository"),(0,l.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2aBookRepository\uff0c\u7528\u4e8e\u67e5\u8be2Book"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"@Repository\npubic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @Nullable\n    public Book findBookById(long id) {\n        return sqlClient.findById(Book.class, id);\n    }\n\n    public List<Book> findBooksByName(@Nullable String name) {\n        BookTable table = Tables.BOOK_TABLE;\n        return sqlClient\n                .createQuery(table)\n                .whereIf(\n                    name != null && !name.isEmpty(), \n                    table.name().ilike(name)\n                )\n                .select(table);\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"@Repository\nclass BookRepository(\n    private val sqlClient: KSqlClient\n) {\n\n    fun findBookById(id: Long): Book? =\n        sqlClient.findById(Book::class, id)\n\n    fun findBooksByName(name: String?): List<Book> =\n        sqlClient.createQuery(Book::class) {\n            name?.takeIf { it.isNotEmpty() }?.let {\n                where(table.name ilike name);\n            }\n            select(table)\n        }.execute()\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Java\u4ee3\u7801\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"JSqlClient"),"\u548cKotlin\u4ee3\u7801\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"KSqlClient"),"\uff0c\u662fJimmer\u4e3aJava\u548cKotlin\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u7684API\u5165\u53e3\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5b9e\u9645\u9879\u76ee\u4e2d\u8be5\u5bf9\u8c61\u4e3a\u5168\u5c40\u5bf9\u8c61\uff0c\u672c\u7ae0\u8282\u6587\u6863\u7528\u4e8e\u5feb\u901f\u9884\u89c8\uff0c\u5e76\u4e0d\u4f1a\u6df1\u5165\u4ecb\u7ecd\u3002\u8fd9\u91cc\u8bfb\u8005\u53ef\u4ee5\u5148\u5ffd\u7565\u5177\u4f53\u7ec6\u8282\uff0c\u77e5\u9053",(0,l.kt)("inlineCode",{parentName:"p"},"sqlClient"),"\u662fAPI\u5165\u53e3\u5373\u53ef\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672c\u6587\u7684\u76ee\u7684\u5728\u4e8e\u63a7\u5236\u8fd4\u56de\u5bf9\u8c61\u7684\u683c\u5f0f\uff0c\u800c\u5e76\u975e\u4ecb\u7ecd\u590d\u6742\u67e5\u8be2\u6761\u4ef6 ",(0,l.kt)("em",{parentName:"p"},"(\u8fd9\u90e8\u5206\u5185\u5bb9\u5728",(0,l.kt)("a",{parentName:"em",href:"../dsl"},"\u5feb\u901f\u9884\u89c8/\u4efb\u610f\u52a8\u6001\u67e5\u8be2"),"\u4e2d\u4ecb\u7ecd)"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"\u6240\u4ee5\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u8c61\u5f81\u6027\u5730\u91c7\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Book.id"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Book.name"),"\u4f5c\u4e3a\u8fc7\u6ee4\u6761\u4ef6\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Jimmer\u662f\u6280\u672f\u4e2d\u7acb\u7684\uff0c\u4f46\u662f\u91c7\u7528Spring\u98ce\u683c\u7684\u4ee3\u7801\u5f80\u5f80\u80fd\u591f\u8d77\u5230\u7b80\u5316\u8bb2\u89e3\u7684\u76ee\u7684\uff0c\u6240\u4ee5\uff0c\u672c\u4f8b\u91c7\u7528Spring\u98ce\u683c\u4e66\u5199\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4f46\u662f\uff0c\u4e3a\u4e86\u65b9\u4fbf\u975eSpring\u7528\u6237\u9605\u8bfb\uff0c\u8fd9\u91cc\u6545\u610f\u6ca1\u6709\u91c7\u7528",(0,l.kt)("a",{parentName:"p",href:"../../spring/repository"},"Jimmer\u5bf9Spring Data\u7684\u652f\u6301"),"\uff0c\u800c\u662f\u91c7\u7528\u4e86\u624b\u52a8\u6ce8\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"sqlClient"),"\u8fd9\u79cd\u76f8\u5bf9\u539f\u59cb\u7684\u5199\u6cd5\uff0c\u628aSpring\u7684\u5e72\u6270\u964d\u5230\u6700\u4f4e\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Java\u4ee3\u7801\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Tables.BOOK_TABLE"),"\u662fJimmer\u7f16\u8bd1\u65f6\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u3002"))),(0,l.kt)("p",null,"\u5047\u5982\u4e0a\u8ff0\u7c7b\u6709\u4e00\u4e2a\u5b9e\u4f8b",(0,l.kt)("inlineCode",{parentName:"p"},"bookRepository"),"\uff0c\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"findBookById"),"\u4e3a\u4f8b\uff1a"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(bookRepository.findBookById(1L));\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"println(bookRepository.findBookById(1L));\n")))),(0,l.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7684\u8f93\u51fa\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id" : 1,\n  "name" : "Learning GraphQL",\n  "edition" : 1,\n  "price" : 50.00,\n  "store" : {\n    "id" : 1\n  }\n}\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u683c\u5f0f\u662f\u56fa\u5b9a\u7684\uff0c\u548c\u5f53\u524d\u7684\u8981\u8ba8\u8bba\u7684\u8bdd\u9898\u201c\u67e5\u8be2\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u201d\u4e0d\u7b26\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u6539\u8fdb",(0,l.kt)("inlineCode",{parentName:"p"},"BookRepository"),"\u3002"),(0,l.kt)("h2",{id:"\u6539\u8fdb\u540e\u7684\u7684repository"},"\u6539\u8fdb\u540e\u7684\u7684Repository"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u5bf9\u4e4b\u524d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"BookRepository"),"\u7c7b\u7a0d\u52a0\u6539\u8fdb"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"@Repository\npubic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @Nullable\n    public Book findBookById(\n        long id, \n        // highlight-next-line\n        Fetcher<Book> fetcher\n    ) {\n        return sqlClient.findById(\n            // highlight-next-line\n            fetcher, \n            id\n        );\n    }\n\n    public List<Book> findBooksByName(\n        @Nullable String name,\n        // highlight-next-line\n        @Nullable Fetcher<Book> fetcher\n    ) {\n        BookTable table = Tables.BOOK_TABLE;\n        return sqlClient\n                .createQuery(table)\n                .whereIf(\n                    name != null && !name.isEmpty(), \n                    table.name().ilike(name)\n                )\n                .select(\n                    // highlight-next-line\n                    table.fetch(fetcher)\n                );\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"@Repository\nclass BookRepository(\n    private val sqlClient: KSqlClient\n) {\n\n    fun findBookById(\n        id: Long,\n        // highlight-next-line\n        fetcher: Fetcher<Book>\n    ): Book? =\n        sqlClient.findById(\n            // highlight-next-line\n            fetcher, \n            id\n        )\n\n    fun findBooksByName(\n        name: String? = null,\n        // highlight-next-line\n        fetcher: Fetcher<Book>? = null\n    ): List<Book> =\n        sqlClient.createQuery(Book::class) {\n            name?.takeIf { it.isNotEmpty() }?.let {\n                where(table.name ilike name);\n            }\n            select(\n                // highlight-next-line\n                table.fetch(fetcher)\n            )\n        }.execute()\n}\n")))),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4e3a\u6bcf\u4e2a\u67e5\u8be2\u65b9\u6cd5\u6dfb\u52a0\u4e86\u4e00\u4e2a\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Fetcher<Book>"),"\u7684\u53c2\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5b83\u7075\u6d3b\u63a7\u5236\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u683c\u5f0f ",(0,l.kt)("em",{parentName:"p"},"(\u5373\uff0c\u88ab\u67e5\u8be2\u7684\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6)")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u5f0f\uff0cRepository\u4ec5\u8d1f\u8d23\u7b5b\u9009\u3001\u6392\u5e8f\u3001\u5206\u9875\u7b49\u64cd\u4f5c\uff0c\u4f46\u4e0d\u63a7\u5236\u8fd4\u56de\u6570\u636e\u7684\u683c\u5f0f\uff0c\u800c\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Fetcher<E>"),"\u53c2\u6570\u5c06\u6570\u636e\u683c\u5f0f\u7684\u63a7\u5236\u6743\u66b4\u9732\u51fa\u53bb\uff0c\u8ba9\u66f4\u4e0a\u5c42\u7684\u4e1a\u52a1\u903b\u8f91\u6765\u51b3\u5b9a\u3002")),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8fd8\u662f\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"findBookById"),"\u65b9\u6cd5\u4e3a\u4f8b\uff0c\u5c55\u793a\u4e24\u79cd\u7528\u6cd5"),(0,l.kt)("h3",{id:"\u67e5\u8be2\u6b8b\u7f3a\u5bf9\u8c61"},"\u67e5\u8be2\u6b8b\u7f3a\u5bf9\u8c61"),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u8ba9\u8fd4\u56de\u7684\u683c\u5f0f\u6bd4\u9ed8\u8ba4\u5bf9\u8c61\u683c\u5f0f\u66f4\u7b80\u5355\u3002\u5373\uff0c\u8fd4\u56de\u6b8b\u7f3a\u5bf9\u8c61\uff0c\u5b83\u53ea\u6709\u5b8c\u6574\u5bf9\u8c61\u7684\u4e00\u90e8\u5206\u5c5e\u6027\u3002"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(\n    bookRepository.findBookById(\n        1L,\n        // highlight-next-line\n        Fetchers.BOOK_FETCHER\n            .name()\n    )\n);\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"println(\n    bookRepository.findBookById(\n        1L,\n        // highlight-next-line\n        newFetcher(Book::class).by {\n            name()\n        }\n    )\n);\n")))),(0,l.kt)("p",null,"Java\u4ee3\u7801\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Fetchers.BOOK_FETCHER"),"\u4e3aJimmer\u5728\u7f16\u8bd1\u65f6\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u8ba9\u8fd4\u56de\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u53ea\u6709\u4e24\u4e2a\u5c5e\u6027: ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"name")," ",(0,l.kt)("em",{parentName:"p"},"(\u867d\u7136\u4ee3\u7801\u4e2d\u53ea\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"em"},"name"),", \u4f46\u662f",(0,l.kt)("inlineCode",{parentName:"em"},"id"),"\u5c5e\u6027\u662f\u9690\u542b\u7684\uff0c\u603b\u662f\u4f1a\u88ab\u67e5\u8be2)"),"\u3002"),(0,l.kt)("p",null,"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id" : 1,\n    "name" : "Learning GraphQL"\n}\n')),(0,l.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u53ea\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027\uff0c\u7f3a\u5c11",(0,l.kt)("inlineCode",{parentName:"p"},"edition"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"price"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"store"),"\u7b49\u5c5e\u6027\uff0c\u8fd9\u5c31\u53eb\u505a\u6b8b\u7f3a\u5bf9\u8c61\u3002"),(0,l.kt)("h3",{id:"\u67e5\u8be2\u591a\u4e2a\u5bf9\u8c61\u6784\u6210\u7684\u6570\u636e\u7ed3\u6784"},"\u67e5\u8be2\u591a\u4e2a\u5bf9\u8c61\u6784\u6210\u7684\u6570\u636e\u7ed3\u6784"),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u8ba9\u8fd4\u56de\u7684\u683c\u5f0f\u6bd4\u9ed8\u8ba4\u5bf9\u8c61\u683c\u5f0f\u66f4\u590d\u6742\uff0c\u5305\u62ec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u524d\u5bf9\u8c61\u7684\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7\u591a\u5bf9\u4e00\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u83b7\u53d6\u5173\u8054\u5bf9\u8c61",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore"),"\uff0c\u5e76\u8ba9\u5173\u8054\u5bf9\u8c61\u5177\u5907\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7\u591a\u5bf9\u591a\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u83b7\u53d6\u6240\u6709\u5173\u8054\u5bf9\u8c61",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"\uff0c\u5e76\u8ba9\u6bcf\u4e00\u4e2a\u5173\u8054\u5bf9\u8c61\u5177\u5907\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027"))),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(\n    bookRepository.findBookById(\n        1L,\n        Fetchers.BOOK_FETCHER\n            .allScalarFields()\n            .store(\n                Fetchers.BOOK_STORE_FETCHER\n                    .allScalarFields()\n            )\n            .authors(\n                Fetchers.AUTHOR_FETCHER\n                    .allScalarFields()\n            )\n    )\n);\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"println(\n    bookRepository.findBookById(\n        1L,\n        newFetcher(Book::class).by {\n            allScalarFields()\n            store {\n                allScalarFields()\n            }\n            authors {\n                allScalarFields()\n            }\n        }\n    )\n);\n")))),(0,l.kt)("p",null,"\u4e0a\u8ff0Java\u4ee3\u7801\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Fetchers.BOOK_FETCHER"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Fetchers.BOOK_STORE_FETCHER"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Fetchers.AUTHOR_FETCHER"),"\u4e3aJimmer\u5728\u7f16\u8bd1\u65f6\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u8ba4\u4e3a\u5728Java\u4ee3\u7801\u4e2d\u9891\u7e41\u4e66\u5199",(0,l.kt)("inlineCode",{parentName:"p"},"Fetchers."),"\u524d\u7f00\u5f88\u9ebb\u70e6\uff0c\u53ef\u4ee5\u4f7f\u7528\u9759\u6001\u5bfc\u5165\uff0c\u6216\u5e72\u8106\u8ba9\u5f53\u524d\u7c7b\u76f4\u63a5\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"Fetchers"),"\u63a5\u53e3\u3002")),(0,l.kt)("p",null,"\u8fd9\u6b21\uff0c\u6211\u4eec\u4f1a\u5f97\u5230\u4e00\u4e2a\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u4f5c\u4e3a\u805a\u5408\u6839\uff0c\u5e76\u901a\u8fc7\u5173\u8054\u5c5e\u6027\u9644\u5e26\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u5bf9\u8c61\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id" : 1,\n    "name" : "Learning GraphQL",\n    "edition" : 1,\n    "price" : 50.00,\n    // highlight-next-line\n    "store" : {\n        "id" : 1,\n        "name" : "O\'REILLY",\n        "website" : null\n    },\n    // highlight-next-line\n    "authors" : [{\n        "id" : 1,\n        "firstName" : "Eve",\n        "lastName" : "Procello",\n        "gender" : "FEMALE"\n    }, {\n        "id" : 2,\n        "firstName" : "Alex",\n        "lastName" : "Banks",\n        "gender" : "MALE"\n    }]\n}\n')),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u624b\u6bb5\u63a7\u5236\u4efb\u4f55\u666e\u901a\u5c5e\u6027\u548c\u5173\u8054\u5c5e\u6027\u662f\u5426\u88ab\u67e5\u8be2\uff0c\u6df1\u5ea6\u548c\u5e7f\u5ea6\u90fd\u4e0d\u53d7\u9650\u5236\u3002"),(0,l.kt)("p",null,"\u6700\u7ec8\uff0c\u6211\u4eec\u65e0\u9700\u6784\u5efa\u4efb\u4f55HTTP\u670d\u52a1\uff0c\u5c31\u53ef\u4ee5\u5728\u4efb\u4f55\u4ee3\u7801\u4e2d\u76f4\u63a5\u83b7\u53d6\u5ab2\u7f8eGraphQL\u7684\u80fd\u529b\u3002"))}k.isMDXComponent=!0}}]);