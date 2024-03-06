"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1619],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(34334);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),r=t(67294),l=t(34334),o=t(72389),i=t(67392),s=t(7094),u=t(12466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var n;const{lazy:t,block:o,defaultValue:p,values:d,groupId:k,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,i.l)(f,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===p?p:p??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[w,T]=(0,r.useState)(N),B=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=k){const e=v[k];null!=e&&e!==w&&f.some((n=>n.value===e))&&T(e)}const P=e=>{const n=e.currentTarget,t=B.indexOf(n),a=f[t].value;a!==w&&(C(n),T(a),null!=k&&y(k,String(a)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=B.indexOf(e.currentTarget)+1;t=B[n]??B[0];break}case"ArrowLeft":{const n=B.indexOf(e.currentTarget)-1;t=B[n]??B[B.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>B.push(e),onKeyDown:x,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function d(e){const n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},89623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=t(83117),r=(t(67294),t(3905)),l=t(65488),o=t(85162);const i={sidebar_position:7,title:"7. \u7efc\u5408\u67e5\u8be2"},s=void 0,u={unversionedId:"showcase/comprehensive-query",id:"showcase/comprehensive-query",title:"7. \u7efc\u5408\u67e5\u8be2",description:"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u5feb\u719f\u5c55\u793a\u4e86\u5982\u4e0b\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/comprehensive-query.mdx",sourceDirName:"showcase",slug:"/showcase/comprehensive-query",permalink:"/jimmer-doc/zh/docs/showcase/comprehensive-query",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/showcase/comprehensive-query.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"7. \u7efc\u5408\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"6. \u5206\u9875\u67e5\u8be2",permalink:"/jimmer-doc/zh/docs/showcase/page"},next:{title:"8. \u5176\u4ed6\u67e5\u8be2",permalink:"/jimmer-doc/zh/docs/showcase/other-query"}},c={},m=[{value:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",level:2},{value:"\u67e5\u8be2\u9759\u6001DTO",id:"\u67e5\u8be2\u9759\u6001dto",level:2}],p={toc:m};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u5feb\u719f\u5c55\u793a\u4e86\u5982\u4e0b\u529f\u80fd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u6293\u53d6\u5668\uff0c\u4e5f\u5c31\u662f\u67e5\u8be2\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4e5f\u5c31\u662f",(0,r.kt)("a",{parentName:"p",href:"./fetch-association"},"\u6293\u53d6\u5173\u8054"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"./recursive-query"},"\u9012\u5f52\u67e5\u8be2"),"\u4e2d\u6240\u5c55\u793a\u7684\u5185\u5bb9\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6761\u4ef6\uff0c\u5c24\u5176\u662f",(0,r.kt)("a",{parentName:"p",href:"./where/dynamic-join"},"\u52a8\u6001\u8868\u8fde\u63a5"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"./where/implicit-subquery"},"\u9690\u5f0f\u5b50\u67e5\u8be2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6392\u5e8f\uff0c\u5305\u62ec\u52a8\u6001\u6392\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5206\u9875\u67e5\u8be2"))),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u628a\u4ee5\u4e0a\u6240\u6709\u529f\u80fd\u7efc\u5408\u8d77\u6765\uff0c\u5f62\u6210\u4e00\u4e2a\u76f8\u5bf9\u5f3a\u5927\u7684\u67e5\u8be2"),(0,r.kt)("p",null,"\u540c\u6837\uff0c\u5b58\u5728\u4e24\u79cd\u5f00\u53d1\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u9759\u6001DTO"))),(0,r.kt)("h2",{id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"},"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class BookRepository {\n\n    private static final BookTable T = BookTable.$;\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    public Page<Book> findBooks(\n        int pageIndex,\n        int pageSize,\n        @Nullable String sortCode,\n        @Nullable Fetcher<Book> fetcher,\n        @Nullable String name,\n        @Nullable BigDecimal minPrice,\n        @Nullable BigDecimal maxPrice,\n        @Nullable String storeName,\n        @Nullable String storeWebsite,\n        @Nullable String authorName    \n    ) {\n        return sqlClient\n            .createQuery(T)\n            .where(T.name().ilikeIf(name))\n            .where(T.price().betweenIf(minPrice, maxPrice))\n            .where(T.store().name().ilikeIf(storeName))\n            .where(T.store().website().ilikeIf(storeWebsite))\n            .where(\n                T.authors(author ->\n                    Predicate.or(\n                        author.firstName().ilikeIf(authorName),\n                        author.lastName().ilikeIf(authorName)\n                    )\n                )\n            )\n            .orderBy(\n                Order.makeOrders(\n                    T,\n                    sortCode != null ? \n                        sortCode :\n                        "name asc, edition desc"\n                )\n            )\n            .select(T.fetch(fetcher))\n            .fetchPage(pageIndex, pageSize);\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class BookRepository(\n    private val sqlClient: KSqlClient\n) {\n    fun findBooks(\n        pageIndex: Int,\n        pageSize: Int = 10,\n        sortCode: String = "name asc, edition desc",\n        fetcher: Fetcher<Book>? = null,\n        name: String? = null,\n        minPrice: BigDecimal? = null,\n        maxPrice: BigDecimal? = null,\n        storeName: String? = null,\n        storeWebsite: String? = null,\n        name: String? = null\n    ): Page<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                where(table.name `ilike?` name)\n                where(table.price.`between?`(minPrice, maxPrice))\n                where(table.store.name `ilike?` storeName)\n                where(table.store.website `ilike?` storeWebsite)\n                where += table.authors {\n                    or(\n                        firstName `ilike?` authorName,\n                        lastName `ilike?` authorName\n                    )\n                }\n                orderBy(table.makeOrders(sortCode))\n                select(table.fetch(fetcher))\n            }\n            .fetchPage(pageIndex, pageSize)\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"findBooks"),"\u65b9\u6cd5\u7684\u53c2\u6570\u5f88\u591a\u3002\u8fd9\u5bf9Kotlin\u800c\u8a00\u65e0\u6240\u8c13\uff0c\u4f46\u662f\u5bf9Java\u800c\u8a00\u53ef\u80fd\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u8bbe\u8ba1\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u9879\u76ee\u662f\u57fa\u4e8eJava\u8bed\u8a00\u5f00\u53d1\u7684\uff0c\u9762\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5c06\u6240\u6709\u53c2\u6570\u6216\u90e8\u5206\u53c2\u6570\u63d0\u70bc\u6210\u4e00\u4e2a\u53c2\u6570\u5bf9\u8c61\uff0c\u6765\u51cf\u5c11Java\u8bed\u8a00\u4e0b\u7684\u53c2\u6570\u6570\u91cf\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u8fd9\u6837\u505a\u5bf9\u8fd9\u91cc\u7684\u4f8b\u5b50\u5c55\u793a\u6ca1\u6709\u5b9e\u8d28\u6027\u7684\u597d\u5904\uff0c\u518d\u52a0\u4e0a\u4e3a\u4e86\u4fdd\u6301Java\u548cKotlin\u4f8b\u5b50\u7684\u9ad8\u5ea6\u4e00\u81f4\u6027\uff0c\u5e76\u6ca1\u6709\u8fd9\u6837\u505a\u3002")),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5982\u6b64\u8c03\u7528 ",(0,r.kt)("em",{parentName:"p"},"(\u8003\u8651\u5230Java\u6ca1\u6709\u5f88\u597d\u624b\u6bb5\u6765\u7b80\u5316\u5bf9\u53c2\u6570\u8f83\u591a\u7684\u65b9\u6cd5\u7684\u8c03\u7528\uff0c\u4ec5\u793a\u8303kotlin\u8c03\u7528)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bookRepository = ...\u7565...\n\nval page = bookRepository.findBooks(\n    pageIndex = 1,\n    pageSize = 2,\n    name = "GraphQL",\n    maxPrice = BigDecimal(60),\n    authorName = "alex",\n    fetcher = newFetcher(Book::class).by {\n        allScalarFields()\n        store {\n            name()\n        }\n        authors {\n            firstName()\n            lastName()\n        }\n    }\n)\n')),(0,r.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Page{\n    rows=[\n        {\n            "id":1,\n            "name":"Learning GraphQL",\n            "edition":1,\n            "price":50.00,\n            "store":{"id":1,"name":"O\'REILLY"},\n            "authors":[\n                {"id":2,"firstName":"Alex","lastName":"Banks"},\n                {"id":1,"firstName":"Eve","lastName":"Procello"}\n            ]\n        }\n    ], \n    totalRowCount=3, \n    totalPageCount=2\n}\n')),(0,r.kt)("h2",{id:"\u67e5\u8be2\u9759\u6001dto"},"\u67e5\u8be2\u9759\u6001DTO"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class BookRepository {\n\n    private static final BookTable T = BookTable.$;\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    public <V extends View<Book>> Page<V> findBooks(\n        int pageIndex,\n        int pageSize,\n        @Nullable String sortCode,\n        @Nullable Class<V> viewType,\n        @Nullable String name,\n        @Nullable BigDecimal minPrice,\n        @Nullable BigDecimal maxPrice,\n        @Nullable String storeName,\n        @Nullable String storeWebsite,\n        @Nullable String authorName    \n    ) {\n        return sqlClient\n            .createQuery(T)\n            .where(T.name().ilikeIf(name))\n            .where(T.price().betweenIf(minPrice, maxPrice))\n            .where(T.store().name().ilikeIf(storeName))\n            .where(T.store().website().ilikeIf(storeWebsite))\n            .where(\n                T.authors(author ->\n                    Predicate.or(\n                        author.firstName().ilikeIf(authorName),\n                        author.lastName().ilikeIf(authorName)\n                    )\n                )\n            )\n            .orderBy(\n                Order.makeOrders(\n                    T,\n                    sortCode != null ? \n                        sortCode :\n                        "name asc, edition desc"\n                )\n            )\n            .select(T.fetch(viewType))\n            .fetchPage(pageIndex, pageSize);\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class BookRepository(\n    private val sqlClient: KSqlClient\n) {\n    fun <V: View<Book>> findBooks(\n        pageIndex: Int,\n        pageSize: Int = 10,\n        sortCode: String = "name asc, edition desc",\n        viewType: KClass<T>,\n        name: String? = null,\n        minPrice: BigDecimal? = null,\n        maxPrice: BigDecimal? = null,\n        storeName: String? = null,\n        storeWebsite: String? = null,\n        name: String? = null\n    ): Page<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                where(table.name `ilike?` name)\n                where(table.price.`between?`(minPrice, maxPrice))\n                where(table.store.name `ilike?` storeName)\n                where(table.store.website `ilike?` storeWebsite)\n                where += table.authors {\n                    or(\n                        firstName `ilike?` authorName,\n                        lastName `ilike?` authorName\n                    )\n                }\n                orderBy(table.makeOrders(sortCode))\n                select(table.fetch(viewType))\n            }\n            .fetchPage(pageIndex, pageSize)\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"findBooks"),"\u65b9\u6cd5\u7684\u53c2\u6570\u5f88\u591a\u3002\u8fd9\u5bf9Kotlin\u800c\u8a00\u65e0\u6240\u8c13\uff0c\u4f46\u662f\u5bf9Java\u800c\u8a00\u53ef\u80fd\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u8bbe\u8ba1\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u9879\u76ee\u662f\u57fa\u4e8eJava\u8bed\u8a00\u5f00\u53d1\u7684\uff0c\u9762\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5c06\u6240\u6709\u53c2\u6570\u6216\u90e8\u5206\u53c2\u6570\u63d0\u70bc\u6210\u4e00\u4e2a\u53c2\u6570\u5bf9\u8c61\uff0c\u6765\u51cf\u5c11Java\u8bed\u8a00\u4e0b\u7684\u53c2\u6570\u6570\u91cf\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u8fd9\u6837\u505a\u5bf9\u8fd9\u91cc\u7684\u4f8b\u5b50\u5c55\u793a\u6ca1\u6709\u5b9e\u8d28\u6027\u7684\u597d\u5904\uff0c\u518d\u52a0\u4e0a\u4e3a\u4e86\u4fdd\u6301Java\u548cKotlin\u4f8b\u5b50\u7684\u9ad8\u5ea6\u4e00\u81f4\u6027\uff0c\u5e76\u6ca1\u6709\u8fd9\u6837\u505a\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u6f14\u793a\u8c03\u7528\uff0c\u6211\u4eec\u5148\u4f7f\u7528DTO\u8bed\u8a00\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5b9e\u73b0\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"View<Book>"),"\u63a5\u53e3\u7684DTO\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u76ee\u5f55\u4e0b\u65b0\u5efa\u4efb\u4f55\u6269\u5c55\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"dto"),"\u7684\u6587\u4ef6\uff0c\u7f16\u5199\u5982\u4e0b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto\n\nBookView {\n    #allScalars\n    store {\n        id\n        name\n    }\n    authors {\n        id\n        firstName\n        lastName\n    }\n}\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\uff0c\u81ea\u52a8\u751f\u6210\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"BookView"),"\u7684Java/Kotlin\u7c7b\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5982\u6b64\u8c03\u7528 ",(0,r.kt)("em",{parentName:"p"},"(\u8003\u8651\u5230Java\u6ca1\u6709\u5f88\u597d\u624b\u6bb5\u6765\u7b80\u5316\u5bf9\u53c2\u6570\u8f83\u591a\u7684\u65b9\u6cd5\u7684\u8c03\u7528\uff0c\u4ec5\u793a\u8303kotlin\u8c03\u7528)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bookRepository = ...\u7565...\n\nval page = bookRepository.findBooks(\n    name = "GraphQL",\n    maxPrice = BigDecimal(60),\n    authorName = "alex",\n    viewType = BookView::class\n)\n')),(0,r.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"Page{\n    rows=[\n        BookView(\n            id=1, \n            name=Learning GraphQL, \n            edition=1, \n            price=50.00, \n            store=BookView.TargetOf_store(id=1, name=O'REILLY), \n            authors=[\n                BookView.TargetOf_authors(id=2, firstName=Alex, lastName=Banks), \n                BookView.TargetOf_authors(id=1, firstName=Eve, lastName=Procello)\n            ]\n        )\n    ], \n    totalRowCount=3, \n    totalPageCount=2\n}\n")))}d.isMDXComponent=!0}}]);