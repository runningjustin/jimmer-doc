"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5001],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(t),k=a,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return t?o.createElement(u,l(l({ref:n},d),{},{components:t})):o.createElement(u,l({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(67294),a=t(34334);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>k});var o=t(83117),a=t(67294),i=t(34334),l=t(72389),r=t(67392),p=t(7094),s=t(12466);const d="tabList__CuJ",m="tabItem_LNqP";function c(e){var n;const{lazy:t,block:l,defaultValue:c,values:k,groupId:u,className:A}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),B=k??h.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),g=(0,r.l)(B,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==y&&!B.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${B.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:f}=(0,p.U)(),[N,v]=(0,a.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=u){const e=b[u];null!=e&&e!==N&&B.some((n=>n.value===e))&&v(e)}const L=e=>{const n=e.currentTarget,t=C.indexOf(n),o=B[t].value;o!==N&&(O(n),v(o),null!=u&&f(u,String(o)))},I=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},A)},B.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>C.push(e),onKeyDown:I,onFocus:L,onClick:L},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function k(e){const n=(0,l.Z)();return a.createElement(c,(0,o.Z)({key:String(n)},e))}},88172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=t(83117),a=(t(67294),t(3905)),i=t(65488),l=t(85162);const r={sidebar_position:1,title:"\u76f4\u63a5\u8fd4\u56de\u5b9e\u4f53"},p=void 0,s={unversionedId:"quick-view/fetch/export/entity",id:"quick-view/fetch/export/entity",title:"\u76f4\u63a5\u8fd4\u56de\u5b9e\u4f53",description:"\u542f\u52a8Web API\u81ea\u52a8\u5206\u6790",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/fetch/export/entity.mdx",sourceDirName:"quick-view/fetch/export",slug:"/quick-view/fetch/export/entity",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/export/entity",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/quick-view/fetch/export/entity.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u76f4\u63a5\u8fd4\u56de\u5b9e\u4f53"},sidebar:"tutorialSidebar",previous:{title:"\u66b4\u9732\u529f\u80fd",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/export/"},next:{title:"\u8fd4\u56de\u8f93\u51faDTO",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/export/dto"}},d={},m=[{value:"\u542f\u52a8Web API\u81ea\u52a8\u5206\u6790",id:"\u542f\u52a8web-api\u81ea\u52a8\u5206\u6790",level:2},{value:"\u7f16\u5199RestController",id:"\u7f16\u5199restcontroller",level:2},{value:"\u67e5\u770bApi\u6587\u6863",id:"\u67e5\u770bapi\u6587\u6863",level:2},{value:"\u751f\u6210TypeScript",id:"\u751f\u6210typescript",level:2},{value:"\u6587\u6863\u6ce8\u91ca",id:"\u6587\u6863\u6ce8\u91ca",level:2},{value:"Flat\u5173\u8054ID",id:"flat\u5173\u8054id",level:2}],c={toc:m};function k(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u542f\u52a8web-api\u81ea\u52a8\u5206\u6790"},"\u542f\u52a8Web API\u81ea\u52a8\u5206\u6790"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u76ee\u524d\uff0c\u8fd9\u90e8\u5206\u5185\u5bb9\u652f\u6301Spring\uff0c\u4ee5\u540e\u4f1a\u652f\u6301\u66f4\u591aWeb\u6846\u67b6\u3002")),(0,a.kt)("p",null,"\u4e3a\u4e86\u5bfc\u51fa\u5ba2\u6237\u7aef\u4ee3\u7801\uff0c\u9700\u8981\u5148\u542f\u7528Web API\u5206\u6790\u80fd\u529b\u3002\u5f00\u53d1\u4eba\u5458\u6709\u4e24\u79cd\u9009\u62e9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.client.EnableImplicitApi"),"\u4fee\u9970RestController\u6240\u5c5e\u5de5\u7a0b\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u7c7b\u3002\u5bf9\u4e8eSpring Boot\u5e94\u7528\u800c\u8a00\uff0cAppplication\u7c7b\u5c31\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.client.Api"),"\u4fee\u9970\u6240\u6709\u9700\u8981\u5bfc\u51fa\u7684\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"RestController"),"\u7c7b\u4ee5\u53ca\u5b83\u4eec\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP Mapping"),"\u65b9\u6cd5\u3002"))),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u6cd5\u76f8\u5bf9\u7b80\u5355\uff0c\u6240\u4ee5\uff0c\u5bf9Spring Boot Application\u7c7b\u5e94\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"@EnableImplicitApi"),"\u6ce8\u89e3\u5373\u53ef\u3002\u7531\u4e8e\u4ee3\u7801\u8fc7\u4e8e\u7b80\u5355\uff0c\u65e0\u9700\u6f14\u793a\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199restcontroller"},"\u7f16\u5199RestController"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u4f8b\u5b50\uff0c\u6ca1\u6709\u590d\u6742\u4e1a\u52a1\uff0c\u6211\u4eec\u5ffd\u7565Service\u5c42\uff0c\u76f4\u63a5\u57fa\u4e8e\u524d\u6587\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"BookRepository"),"\u7f16\u5199",(0,a.kt)("inlineCode",{parentName:"p"},"BookController"),"\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},'@RestController\npublic class BookController implements Fetchers {\n\n    private final BookRepository bookRepository;\n\n    public BookController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @Nullable\n    @GetMapping("/book/{id}")\n    public \n    @FetchBy("COMPLEX_BOOK") Book \u2776\n    findBookById(@PathVariable("id") long id) {\n        return bookRepository.findBookById(\n            id, \n            COMPLEX_BOOK \u2777\n        );\n    }\n\n    @GetMapping("/books")\n    public List<\n        @FetchBy("SIMPLE_BOOK") Book \u2778\n    > findBooksByName(\n            @RequestParam(name = "name", required = false) String name\n    ) {\n        return bookRepository.findBooksByName(\n            name, \n            SIMPLE_BOOK \u2779\n        );\n    }\n\n    /**\n     * Simple Book DTO which can only access `id` and `name` of `Book` itself\n     */\n    private static final Fetcher<Book> SIMPLE_BOOK = \u277a\n            BOOK_FETCHER\n                    .name();\n\n    /**\n     * Complex Book DTO which can access not only properties of `Book` itself,\n     * but also associated `BookStore` and `Author` objects with names\n     */\n    private static final Fetcher<Book> COMPLEX_BOOK = \u277b\n            BOOK_FETCHER\n                    .allScalarFields()\n                    .store(\n                            BOOK_STORE_FETCHER.name()\n                    )\n                    .authors(\n                            AUTHOR_FETCHER\n                                    .firstName()\n                                    .lastName()\n                    );\n}\n'))),(0,a.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.kt"',title:'"BookController.kt"'},'@RestController\nclass BookController(\n    private val bookRepository: BookRepository\n) {\n    @GetMapping("/book/{id}")\n    fun findBookById(\n        @PathVariable id: Long\n    ): @FetchBy("COMPLEX_BOOK") Book = \u2776\n        bookRepository.findBookById(\n            id, \n            COMPLEX_BOOK \u2777\n        )\n\n    @GetMapping("/books")\n    fun findBooksByName(\n            @RequestParam(required = false) name: String\n    ): List<\n        @FetchBy("SIMPLE_BOOK") Book \u2778\n    > =\n        bookRepository.findBooksByName(\n            name, \n            SIMPLE_BOOK \u2779\n        )\n\n    companion object {\n\n        /**\n         * Simple Book DTO which can only access `id` and `name` of `Book` itself\n         */\n        val SIMPLE_BOOK = \u277a\n            newFetcher(Book:::class).by {\n                name()\n            }\n\n        /**\n         * Complex Book DTO which can access not only properties of `Book` itself,\n         * but also associated `BookStore` and `Author` objects with names\n         */\n        private val COMPLEX_BOOK = \u277b\n            newFetcher(Book:::class).by {\n                allScalarFields()\n                store {\n                    name()\n                }\n                authors {\n                    firstName()\n                    lastName()\n                }\n            }\n    }\n}\n')))),(0,a.kt)("p",null,"Java\u4ee3\u7801\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"BookController"),"\u7c7b\u5b9e\u73b0\u4e86Jimmer\u5728\u7f16\u8bd1\u65f6\u81ea\u52a8\u751f\u6210\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Fetchers"),"\u63a5\u53e3\uff0c\u53ea\u662f\u4e3a\u4e86\u8ba9\u65b9\u4fbf\u5f15\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"BOOK_FETCHER"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"BOOK_STORE_FETCHER"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"AUTHOR_FETCHER"),"\u3002"),(0,a.kt)("p",null,"\u91cd\u70b9\u5728\u4e8e6\u4e2a\u7f16\u53f7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2776 \u58f0\u660e",(0,a.kt)("inlineCode",{parentName:"p"},"findBookById"),"\u65b9\u6cd5\u8fd4\u56de\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u7684\u7cbe\u786e\u5f62\u72b6\u7531\u9759\u6001\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"COMPLEX_BOOK"),"\u5b9a\u4e49")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2777 ",(0,a.kt)("inlineCode",{parentName:"p"},"findBookById"),"\u65b9\u6cd5\u7684\u5185\u90e8\u5b9e\u73b0\u9700\u8981\u4e0e\u2776\u5904\u7684\u5bf9\u5916\u58f0\u660e\u4e00\u81f4\uff0c\u67e5\u8be2\u5f62\u72b6\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"COMPLEX_BOOK"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2778 \u58f0\u660e",(0,a.kt)("inlineCode",{parentName:"p"},"findBooksByName"),"\u65b9\u6cd5\u8fd4\u56de\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"List"),"\u4e2d\u7684\u6bcf\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u7684\u7cbe\u786e\u5f62\u72b6\u7531\u9759\u6001\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"SIMPLE_BOOK"),"\u5b9a\u4e49")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2779 ",(0,a.kt)("inlineCode",{parentName:"p"},"findBooksByName"),"\u65b9\u6cd5\u7684\u5185\u90e8\u5b9e\u73b0\u9700\u8981\u4e0e\u2778\u5904\u7684\u5bf9\u5916\u58f0\u660e\u4e00\u81f4\uff0c\u67e5\u8be2\u5f62\u72b6\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"SIMPLE_BOOK"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u277a ",(0,a.kt)("inlineCode",{parentName:"p"},"SIMPLE_BOOK"),"\u5f62\u72b6\u7684\u5b9a\u4e49\uff0c\u65e2\u5728\u2778\u5904\u4f7f\u7528\u4f5c\u4e3a\u5bf9\u5916API\u58f0\u660e\u7684\u4e00\u90e8\u5206\uff0c\u53c8\u5728\u2779\u5904\u4f7f\u7528\u4ee5\u63a7\u5236\u8fd4\u56de\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u277b ",(0,a.kt)("inlineCode",{parentName:"p"},"COMPLEX_BOOK"),"\u5f62\u72b6\u7684\u5b9a\u4e49\uff0c\u65e2\u5728\u2776\u5904\u4f7f\u7528\u4f5c\u4e3a\u5bf9\u5916API\u58f0\u660e\u7684\u4e00\u90e8\u5206\uff0c\u53c8\u5728\u2777\u5904\u4f7f\u7528\u4ee5\u63a7\u5236\u8fd4\u56de\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6"))),(0,a.kt)("h2",{id:"\u67e5\u770bapi\u6587\u6863"},"\u67e5\u770bApi\u6587\u6863"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8bc6\u522b",(0,a.kt)("inlineCode",{parentName:"p"},"@FetchBy"),"\u8fd9\u4e2aJimmer\u7279\u6709\u7684\u6ce8\u89e3\uff0cJimmer\u5bf9OpenAPI/Swagger\u7ed9\u4e88\u4e86\u4e00\u5957\u6781\u5177\u7279\u8272\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u65e0\u9700\u4f7f\u7528JVM\u751f\u6001\u4e2d\u4efb\u4f55\u5176\u4ed6\u5173\u4e8e\u81ea\u52a8\u751f\u6210OpenAPI/Swagger\u7684\u6846\u67b6\uff0c\u53ea\u9700\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),(0,a.kt)("em",{parentName:"p"},"(\u6216",(0,a.kt)("inlineCode",{parentName:"em"},"applicaiton.properties"),")"),"\uff0c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="application.yml"',title:'"application.yml"'},"jimmer:\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    client:\n        openapi:\n            # highlight-next-line\n            path: /openapi.yml\n            # highlight-next-line\n            ui-path: /openapi.html\n            properties:\n                info:\n                    title: My Web Service\n                    description: |\n                        Restore the DTO explosion that was \n                        eliminated by server-side developers\n                    version: 1.0\n")),(0,a.kt)("p",null,"\u542f\u52a8Web\u9879\u76ee\uff0c\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/openapi.html"),"\uff0c\u5219\u53ef\u89c1"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"openapi",src:t(85649).Z,width:"1074",height:"686"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"/books"),"\uff0c\u53ef\u4ee5\u770b\u5230\u8fd4\u56de\u7684\u96c6\u5408\u4e2d\uff0c\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u662f\u4e00\u4e2a\u76f8\u5bf9\u7b80\u5355\u7684DTO\u5bf9\u8c61"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"openapi-simple",src:t(17396).Z,width:"764",height:"214"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"/books/{id}"),"\uff0c\u53ef\u4ee5\u770b\u5230\u8fd4\u56de\u7c7b\u578b\u662f\u4e00\u4e2a\u76f8\u5bf9\u590d\u6742\u7684DTO\u7c7b\u578b"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"openapi-complex",src:t(32532).Z,width:"1222",height:"620"})))),(0,a.kt)("h2",{id:"\u751f\u6210typescript"},"\u751f\u6210TypeScript"),(0,a.kt)("p",null,"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),(0,a.kt)("em",{parentName:"p"},"\uff08\u6216",(0,a.kt)("inlineCode",{parentName:"em"},"application.properties"),"\uff09"),"\uff0c\u6dfb\u52a0\u5bf9TypeScript\u7684\u652f\u6301"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="application.yml"',title:'"application.yml"'},"jimmer:\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    client:\n        openapi:\n            ...\u7701\u7565openapi\u76f8\u5173\u914d\u7f6e...\n        ts:\n            # highlight-next-line\n            path: /ts.zip\n")),(0,a.kt)("p",null,"\u542f\u52a8Web\u9879\u76ee\uff0c\u4e0b\u8f7d",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/ts.zip"),"\uff0c\u89e3\u538b\uff0c\u53ef\u4ee5\u770b\u5230TypeScript\u5ba2\u6237\u7aef\u4ee3\u7801\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"BookController"),"\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="services/BookController.ts"',title:'"services/BookController.ts"'},"import type {Executor} from '../';\nimport type {BookDto} from '../model/dto/';\n\nexport class BookController {\n    \n    constructor(private executor: Executor) {}\n    \n    async findBookById(options: BookControllerOptions['findBookById']): Promise<\n        // highlight-next-line\n        BookDto['BookController/COMPLEX_BOOK']\n    > {\n        ...\u7701\u7565\u5177\u4f53\u903b\u8f91...\n    }\n    \n    async findBooksByName(options: BookControllerOptions['findBooksByName']): Promise<\n        ReadonlyArray<\n            // highlight-next-line\n            BookDto['BookController/SIMPLE_BOOK']\n        >\n    > {\n        ...\u7701\u7565\u5177\u4f53\u903b\u8f91...\n    }\n}\nexport type BookControllerOptions = {\n    'findBookById': {\n        readonly id: number\n    }, \n    'findBooksByName': {\n        readonly name?: string | undefined\n    }\n}\n")),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"BookDto['BookController/COMPLEX_BOOK']"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"BookDto['BookController/SIMPLE_BOOK']"),"\u5c31\u662fJimmer\u751f\u6210\u7684TypeScript\u5ba2\u6237\u7aef\u4ee3\u7801\u4e2d\u88ab\u6062\u590d\u7684DTO\u7c7b\u578b\uff0c\u53ef\u4ee5\u6253\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"model/dto/BookDto.ts"),"\u6587\u4ef6\u67e5\u770b\u5b83\u4eec\u7684\u5b9a\u4e49\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="model/dto/BookDto.ts"',title:'"model/dto/BookDto.ts"'},"export type BookDto = {\n    /**\n     * Complex Book DTO which can access not only properties of `Book` itself,\n     * but also associated `BookStore` and `Author` objects with names\n     */\n    // highlight-next-line\n    'BookController/COMPLEX_BOOK': {\n        readonly id: number;\n        readonly name: string;\n        readonly edition: number;\n        readonly price: number;\n        readonly store?: {\n            readonly id: number;\n            readonly name: string;\n        } | null | undefined;\n        readonly authors: ReadonlyArray<{\n            readonly id: number;\n            readonly firstName: string;\n            readonly lastName: string;\n        }>;\n    }\n    /**\n     * Simple Book DTO which can only access `id` and `name` of `Book` itself\n     */\n    // highlight-next-line\n    'BookController/SIMPLE_BOOK': {\n        readonly id: number;\n        readonly name: string;\n    }\n}\n")),(0,a.kt)("h2",{id:"\u6587\u6863\u6ce8\u91ca"},"\u6587\u6863\u6ce8\u91ca"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u5c55\u793a\uff0c\u6211\u4eec\u770b\u5230\u670d\u52a1\u7aef\u65e0\u9700\u5b9a\u4e49DTO\u76f8\u5173\u7684Java/Kotlin\u7c7b\u578b\uff0c\u800c\u5ba2\u6237\u7aef\u5374\u770b\u5230\u6bcf\u4e2a\u5177\u4f53\u4e1a\u52a1API\u90fd\u81ea\u52a8\u5b9a\u4e49\u7cbe\u786e\u7684DTO\u8fd4\u56de\u7c7b\u578b\u3002\u8fd9\u6837\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u90fd\u5f97\u5230\u4e86\u5404\u81ea\u671f\u671b\u7684\u7f16\u7a0b\u6a21\u578b\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u805a\u7126\u4e8e\u6f14\u793a\u8fd9\u4e2a\u5f3a\u5927\u529f\u80fd\uff0c\u6ca1\u6709\u5bf9\u5982\u4f55\u4e3aApi\u7684\u5404\u90e8\u5206",(0,a.kt)("em",{parentName:"p"},"(\u4f8b\u5982\uff1a\u7c7b\u578b\uff0cApi\u65b9\u6cd5\uff0cApi\u53c2\u6570\uff0c\u5bf9\u8c61\u5c5e\u6027)")," \u6dfb\u52a0\u6587\u5b57\u63cf\u8ff0\u7684\u95ee\u9898\u52a0\u4ee5\u8ba8\u8bba\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Jimmer\u5bf9\u8fd9\u7c7b\u95ee\u9898\u7684\u63d0\u4f9b\u4e86\u6700\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u65e0\u9700\u4f7f\u7528\u4efb\u4f55\u6ce8\u89e3\uff0cJava/Kotlin\u5f00\u53d1\u4eba\u5458\u53ea\u7f16\u5199\u6700\u57fa\u672c\u7684\u6587\u6863\u6ce8\u91ca\u5373\u53ef\uff0c\u6240\u6709\u6587\u6863\u6ce8\u91ca\u5c31\u81ea\u52a8\u590d\u5236\u5230\u5ba2\u6237\u7aefApi\u4e2d\u3002")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u5f88\u7b80\u5355\uff0c\u8bfb\u8005\u53ef\u4ee5\u81ea\u884c\u5b9e\u9a8c\uff0c\u8fd9\u91cc\u4e0d\u518d\u9610\u8ff0\u3002"),(0,a.kt)("h2",{id:"flat\u5173\u8054id"},"Flat\u5173\u8054ID"),(0,a.kt)("p",null,"\u5982\u679c\u5173\u8054\u5bf9\u8c61\u53ea\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027\uff0c\u90a3\u4e48\u5173\u8054Id\u4f1a\u6bd4\u5173\u8054\u5bf9\u8c61\u66f4\u597d\u7528\uff0c\u4f8b\u5982"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5173\u8054\u5bf9\u8c61\uff0c\u4f1a\u5bfc\u81f4\u5927\u91cf\u7684\u53ea\u6709id\u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u7ed3\u679c\u7a0d\u663e\u5197\u4f59"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id" : 1,\n    "name" : "Learning GraphQL",\n    "edition" : 1,\n    "price" : 50.00,\n    "store" : {\n        // highlight-next-line\n        "id" : 1\n    },\n    "authors" : [{\n        // highlight-next-line\n        "id" : 1\n    }, {\n        // highlight-next-line\n        "id" : 2\n    }]\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5173\u8054Id\uff0c\u7ed3\u679c\u76f8\u5bf9\u7b80\u7ec3"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id" : 1,\n    "name" : "Learning GraphQL",\n    "edition" : 1,\n    "price" : 50.00,\n    // highlight-next-line\n    "storeId" : 1,\n    // highlight-next-line\n    "authorIds" : [1, 2]\n}\n')))),(0,a.kt)("p",null,"\u5982\u679c\u9009\u62e9\u76f4\u63a5\u8fd4\u56de\u5b9e\u4f53 ",(0,a.kt)("em",{parentName:"p"},"(\u800c\u975e",(0,a.kt)("a",{parentName:"em",href:"./dto"},"\u4e0b\u4e00\u7bc7\u6587\u7ae0"),"\u79cd\u7684\u8fd4\u56deDTO)"),"\uff0c\u4e14\u60f3\u8981\u4f7f\u7528\u5173\u8054id\uff0c\u9700\u5148\u4e3a\u5b9e\u4f53\u6dfb\u52a0@IdView\u5c5e\u6027"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    @Nullable\n    @ManyToOne\n    BookStore store();\n\n    @ManyToMany\n    List<Author> authors();\n\n    @Nullable\n    // highlight-next-line\n    @IdView\n    Long storeId();\n\n    // highlight-next-line\n    @IdView("authors")\n    List<Long> authorIds();\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n'))),(0,a.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Book {\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView\n    val storeId: Long?\n\n    // highlight-next-line\n    @IdView("authors")\n    val authorIds: List<Long>\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n')))),(0,a.kt)("p",null,"\u4e0a\u4f8b\u4e2d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"storeId"),"\u5c5e\u6027\u5e76\u975e\u5168\u65b0\u5c5e\u6027\uff0c\u5b83\u53ea\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"store"),"\u5c5e\u6027\u7684\u89c6\u56fe\uff0c\u83b7\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"store"),"\u5c5e\u6027\u6240\u8868\u793a\u7684\u5173\u8054\u5bf9\u8c61\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027 ",(0,a.kt)("em",{parentName:"p"},"(\u6216null)"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"storeId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"store"),"\u5171\u4eab\u76f8\u540c\u7684\u6570\u636e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"authorIds"),"\u5c5e\u6027\u5e76\u975e\u5168\u65b0\u5c5e\u6027\uff0c\u5b83\u53ea\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"authors"),"\u5c5e\u6027\u7684\u89c6\u56fe\uff0c\u83b7\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"authors"),"\u5c5e\u6027\u6240\u8868\u793a\u7684\u6240\u6709\u5173\u8054\u5bf9\u8c61\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027\u5217\u8868\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"authorIds"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"authors"),"\u5171\u4eab\u76f8\u540c\u7684\u6570\u636e\u3002"))),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u6b64\u7f16\u5199REST Controll\u5373\u53ef"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},'@RestController\npublic class BookController implements Fetchers {\n\n    private final BookRepository bookRepository;\n\n    public BookController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @Nullable\n    @GetMapping("/book")\n    // highlight-next-line\n    public @FetchBy("SHALLOW_BOOK") Book findBookById(\n        @PathVariable("id") long id\n    ) {\n        // highlight-next-line\n        return bookRepository.findBookById(id, SHALLOW_BOOK);\n    }\n\n    /**\n     * Shallow Book DTO which can access \n     * 1. All scalar properties of `Book` itself \n     * 2. All associated ids, not associated objects.\n     */\n    private static final Fetcher<Book> SIMPLE_BOOK =\n            SHALLOW_BOOK\n                    .allScalarFields()\n                    // highlight-next-line\n                    .storeId()\n                    // highlight-next-line\n                    .authorIds();\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n'))),(0,a.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.kt"',title:'"BookController.kt"'},'@RestController\nclass BookController(\n    private val bookRepository: BookRepository\n) {\n    @GetMapping("/book/{id}")\n    fun findBookById(\n        @PathVariable id: Long\n        // highlight-next-line\n    ): @FetchBy("SHALLOW_BOOK") Book = \n        // highlight-next-line\n        bookRepository.findBookById(id, SHALLOW_BOOK)\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    companion object {\n\n        /**\n         * Shallow Book DTO which can access \n         * 1. All scalar properties of `Book` itself \n         * 2. All associated ids, not associated objects.\n         */\n        val SHALLOW_BOOK =\n            newFetcher(Book:::class).by {\n                allScalarFields()\n                // highlight-next-line\n                storeId()\n                // highlight-next-line\n                authorIds()\n            }\n\n        ...\u7701\u7565\u5176\u4ed6\u5f62\u72b6\u5b9a\u4e49...\n    }\n}\n')))))}k.isMDXComponent=!0},32532:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/complex-9425049a58775c669ef7f9c8826e0b2a.webp"},85649:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/openapi-e3db15b0d20a1e447225e55a4983c253.webp"},17396:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/webp;base64,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"}}]);