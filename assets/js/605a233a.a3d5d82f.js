"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(34334);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),i=n(67294),r=n(34334),l=n(72389),o=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:h}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,i.useState)(g),B=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=f){const e=y[f];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=B.indexOf(t),a=b[n].value;a!==w&&(S(t),T(a),null!=f&&N(f,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=B.indexOf(e.currentTarget)+1;n=B[t]??B[0];break}case"ArrowLeft":{const t=B.indexOf(e.currentTarget)-1;n=B[t]??B[B.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},h)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>B.push(e),onKeyDown:x,onFocus:O,onClick:O},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,i.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},79458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(83117),i=(n(67294),n(3905)),r=n(65488),l=n(85162);const o={sidebar_position:2,title:"Super QBE"},s=void 0,c={unversionedId:"quick-view/dsl/super_qbe",id:"quick-view/dsl/super_qbe",title:"Super QBE",description:"Can It Be Simpler",source:"@site/docs/quick-view/dsl/super_qbe.mdx",sourceDirName:"quick-view/dsl",slug:"/quick-view/dsl/super_qbe",permalink:"/jimmer-doc/docs/quick-view/dsl/super_qbe",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/quick-view/dsl/super_qbe.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Super QBE"},sidebar:"tutorialSidebar",previous:{title:"Feature Introduction",permalink:"/jimmer-doc/docs/quick-view/dsl/feature"},next:{title:"Get Started",permalink:"/jimmer-doc/docs/quick-view/get-started/"}},u={},p=[{value:"Can It Be Simpler",id:"can-it-be-simpler",level:2},{value:"Define Specification DTO",id:"define-specification-dto",level:2},{value:"Generated Code",id:"generated-code",level:2},{value:"Usage",id:"usage",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"can-it-be-simpler"},"Can It Be Simpler"),(0,i.kt)("p",null,"From the ",(0,i.kt)("a",{parentName:"p",href:"./feature"},"previous article"),", we know Jimmer SQL DSL is inherently designed for arbitrary complex dynamic queries, completely different from other frameworks' SQL DSLs that only provide strong typing experience."),(0,i.kt)("p",null,"But there are two issues:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"With more and more parameters introduced in the ",(0,i.kt)("a",{parentName:"p",href:"./feature"},"previous article"),", the method signatures become less Java-friendly. We urgently need to encapsulate all the query parameters into one object.  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"I'm really lazy. I want to achieve all the capabilities introduced in the ",(0,i.kt)("a",{parentName:"p",href:"./feature"},"previous article"),", but I don't want to write those code. I just want to write one line of code."))),(0,i.kt)("p",null,"Jimmer's built-in ",(0,i.kt)("a",{parentName:"p",href:"../../object/view/dto-language"},"DTO language")," can quickly solve the above two problems.  "),(0,i.kt)("h2",{id:"define-specification-dto"},"Define Specification DTO"),(0,i.kt)("p",null,"Since in the article ",(0,i.kt)("a",{parentName:"p",href:"../fetch/export/dto"},"Query Arbitrary Shape/Exposing Features/Return Output DTO"),", we have already had some understanding about the DTO language when introducing Output DTO, this article does not repeat it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the DTO language Intellij plugin: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClearPlume/jimmer-dto"},"https://github.com/ClearPlume/jimmer-dto")," ",(0,i.kt)("em",{parentName:"p"},"(This step is not required but highly recommended)"),"  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new directory ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"   ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.dto")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/dto")," and write the code below:   "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Book.dto"',title:'"Book.dto"'},"export com.yourcompany.yourproject.model.Book  \n    -> package com.yourcompany.yourproject.model.dto\n\n#highlight-next-line  \nspecification BookSpecification {\n    like/i(name)\n    ge(price) // Default alias: minPrice\n    le(price) // Default alias: maxPrice \n    flat(store) {\n        as(^ -> store) { \n            like/i(name)\n            like/i(website)\n        }\n    }\n    flat(authors) {\n        like/i(firstName, lastName) as authorName\n        gender as authorGender\n    }\n}\n...Omit other DTO type definitions...\n")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Different from the Output/Input DTO we discussed before, here the query Specification DTO uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"specification")," modifier. "),(0,i.kt)("p",{parentName:"admonition"},"The QBE functions used extensively inside this Specification DTO are self-explanatory. As this article belongs to the quick tour section, we do not explain them in detail.   ")))),(0,i.kt)("h2",{id:"generated-code"},"Generated Code"),(0,i.kt)("p",null,"After compiling the project, Jimmer will automatically generate the following code:   "),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookSpecification.java"',title:'"BookSpecification.java"'},'@GeneratedBy( \u2776\n        file = "<yourproject>/src/main/dto/Book.dto"  \n) \npublic class BookSpecification  \nimplements JSpecification<Book, BookTable> {  \u2777\n\n    @Nullable \n    private String name;\n\n    @Nullable\n    private BigDecimal minPrice;   \n\n    @Nullable\n    private BigDecimal maxPrice;\n\n    @Nullable\n    private String storeName;\n\n    @Nullable\n    private String storeWebsite;\n\n    @Nullable\n    private String authorName;\n\n    @Nullable\n    private Gender authorGender;\n\n    @Override\n    public void applyTo(SpecificationArgs<Book, BookTable> args) { \u2778\n        ...Omit complex dynamic query logic...\n    }\n\n    ...Omit getters, setters, hashCode, equals, toString...\n}\n'))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookSpecification.kt"',title:'"BookSpecification.kt"'},'@GeneratedBy( \u2776\n        file = "<yourproject>/src/main/dto/Book.dto"\n)  \ndata class BookSpecification(   \n    val name: String? = null,\n    val minPrice: BigDecimal? = null, \n    val maxPrice: BigDecimal? = null,\n    val storeName: String? = null,\n    val storeWebsite: String? = null,\n    val authorName: String? = null,\n    val authorGender: Gender? = null   \n) : KSpecification<Book> { \u2777\n\n    override applyTo(args: KSpecificationArgs<Book>) { \u2778\n        ...Omit complex dynamic query logic...\n    }\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 Reminds developers that this class is auto-generated by Jimmer at compile time    ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 Interface implemented by the Specification DTO   ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2778 This class knows how to generate SQL predicates   "))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"@Repository\npublic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient; \n    }\n\n    List<Book> findBooks(   \n        // highlight-next-line\n        BookSpecification specification,  \n        @Nullable Fetcher<Book> fetcher\n    ) {\n        BookTable table = Tables.BOOK_TABLE;   \n\n        return sqlClient\n            .createQuery(table)\n            // highlight-next-line \n            .where(specification)\n            .select(table.fetch(fetcher)) \n            .execute();\n    }  \n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"@Repository  \nclass BookRepository(\n    private val sqlClient: KSqlClient   \n) {\n\n    fun findBooks(\n        // highlight-next-line\n        specification: BookSpecification, \n        fetcher: Fetcher<Book>? = null\n    ): List<Book> =  \n        sqlClient\n            .createQuery(Book::class) {\n                // highlight-next-line\n                where(specification) \n            }\n            .select(table.fetch(table))\n            .execute()  \n}\n")))),(0,i.kt)("p",null,"We can see that with only one line of code, complex dynamic queries can be achieved.    "),(0,i.kt)("p",null,"It has the same capabilities as the last example in the ",(0,i.kt)("a",{parentName:"p",href:"./feature"},"previous article"),". No need to repeat here."))}d.isMDXComponent=!0}}]);