"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5605],{31536:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(80102),o=n(83117),l=n(67294),i=n(10209),r=n(59766),s=n(94780),u=n(34867);const c=(0,n(70182).ZP)();var p=n(65149),m=n(39707),d=n(66500),k=n(95408),h=n(98700),v=n(85893);const g=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,d.Z)(),N=c("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function Z(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:b})}function C(e,t){const n=l.Children.toArray(e).filter(Boolean);return n.reduce(((e,a,o)=>(e.push(a),o<n.length-1&&e.push(l.cloneElement(t,{key:`separator-${o}`})),e)),[])}const I=({ownerState:e,theme:t})=>{let n=(0,o.Z)({display:"flex",flexDirection:"column"},(0,k.k9)({theme:t},(0,k.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,h.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),l=(0,k.P$)({values:e.direction,base:o}),i=(0,k.P$)({values:e.spacing,base:o});"object"==typeof l&&Object.keys(l).forEach(((e,t,n)=>{if(!l[e]){const a=t>0?l[n[t-1]]:"column";l[e]=a}}));const s=(t,n)=>{return e.useFlexGap?{gap:(0,h.NA)(a,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${o=n?l[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,h.NA)(a,t)}};var o};n=(0,r.Z)(n,(0,k.k9)({theme:t},i,s))}return n=(0,k.dt)(t.breakpoints,n),n};var f=n(90948),x=n(71657);const B=function(e={}){const{createStyledComponent:t=N,useThemeProps:n=Z,componentName:r="MuiStack"}=e,c=t(I),p=l.forwardRef((function(e,t){const l=n(e),p=(0,m.Z)(l),{component:d="div",direction:k="column",spacing:h=0,divider:b,children:N,className:Z,useFlexGap:I=!1}=p,f=(0,a.Z)(p,g),x={direction:k,spacing:h,useFlexGap:I},B=(0,s.Z)({root:["root"]},(e=>(0,u.Z)(r,e)),{});return(0,v.jsx)(c,(0,o.Z)({as:d,ownerState:x,ref:t,className:(0,i.Z)(B.root,Z)},f,{children:b?C(N,b):N}))}));return p}({createStyledComponent:(0,f.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,x.Z)({props:e,name:"MuiStack"})}),y=B},20036:(e,t,n)=>{n.d(t,{k:()=>b});var a=n(52263),o=n(94054),l=n(33841),i=n(23599),r=n(90629),s=n(43246),u=n(31536),c=n(61903),p=n(50657),m=n(37645),d=n(6514),k=n(31425),h=n(58951),v=n(83321),g=n(67294);const b=(0,g.memo)((()=>{const[e,t]=(0,g.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),n=(0,g.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),b=(0,g.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),N=(0,g.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),Z=(0,g.useCallback)((e=>{let n;const a=e.target.value;n="string"==typeof a?parseInt(a):a,-1===n&&(n=void 0),t((e=>({...e,storeId:n})))}),[]),C=(0,g.useCallback)((e=>{let n=[];console.log(e.target.value);const a=e.target.value;n="string"==typeof a?a.split(",").map((e=>parseInt(e))):a,t((e=>({...e,authorIds:n})))}),[]),{i18n:I}=(0,a.Z)(),f=(0,g.useMemo)((()=>"zh"==I.currentLocale||"zh_cn"==I.currentLocale||"zh_CN"==I.currentLocale),[I.currentLocale]),[x,B]=(0,g.useState)(!1),y=(0,g.useCallback)((()=>{B(!0)}),[]),E=(0,g.useCallback)((()=>{B(!1)}),[]);return g.createElement(r.Z,{elevation:3,style:{padding:"1.5rem",width:500}},g.createElement(u.Z,{spacing:2},g.createElement("h1",null,"Book Form"),g.createElement(c.Z,{label:"Name",value:e.name,onChange:n,error:""===e.name,helperText:""===e.name?"Name is required":""}),g.createElement(c.Z,{label:"Edition",type:"number",value:e.edition,onChange:b}),g.createElement(c.Z,{label:"Price",type:"number",value:e.price,onChange:N}),g.createElement(o.Z,{fullWidth:!0},g.createElement(l.Z,{id:"store-select-label"},"Store"),g.createElement(s.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:Z},g.createElement(i.Z,{value:-1},"--NONE--"),g.createElement(i.Z,{value:1},"O'REILLY"),g.createElement(i.Z,{value:2},"MANNING"))),g.createElement(o.Z,{fullWidth:!0},g.createElement(l.Z,{id:"author-multi-select-label"},"Authors"),g.createElement(s.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:C},g.createElement(i.Z,{value:1},"Eve Procello"),g.createElement(i.Z,{value:2},"Alex Banks"),g.createElement(i.Z,{value:3},"Dan Vanderkam"),g.createElement(i.Z,{value:4},"Boris Cherny"),g.createElement(i.Z,{value:5},"Samer Buna"))),g.createElement(o.Z,null,g.createElement(v.Z,{onClick:y,variant:"contained"},f?"\u63d0\u4ea4":"Submit"))),g.createElement(p.Z,{open:x,onClose:E},g.createElement(m.Z,null,f?"\u4fe1\u606f":"Info"),g.createElement(d.Z,null,g.createElement(h.Z,null,f?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),g.createElement(k.Z,null,g.createElement(v.Z,{onClick:E},"\u5173\u95ed"))))}))},26329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(83117),o=(n(67294),n(3905)),l=n(65488),i=n(85162),r=n(20036);const s={sidebar_position:2,title:"\u4fdd\u5b58\u77ed\u5173\u8054"},u=void 0,c={unversionedId:"quick-view/save/export/short",id:"quick-view/save/export/short",title:"\u4fdd\u5b58\u77ed\u5173\u8054",description:"\u4f55\u8c13\u77ed\u5173\u8054",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/save/export/short.mdx",sourceDirName:"quick-view/save/export",slug:"/quick-view/save/export/short",permalink:"/jimmer-doc/zh/docs/quick-view/save/export/short",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/quick-view/save/export/short.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4fdd\u5b58\u77ed\u5173\u8054"},sidebar:"tutorialSidebar",previous:{title:"\u4fdd\u5b58\u805a\u5408\u6839",permalink:"/jimmer-doc/zh/docs/quick-view/save/export/root"},next:{title:"\u4fdd\u5b58\u957f\u5173\u8054",permalink:"/jimmer-doc/zh/docs/quick-view/save/export/long"}},p={},m=[{value:"\u4f55\u8c13\u77ed\u5173\u8054",id:"\u4f55\u8c13\u77ed\u5173\u8054",level:2},{value:"\u5b9a\u4e49Input DTO",id:"\u5b9a\u4e49input-dto",level:2},{value:"\u751f\u6210\u7684\u4ee3\u7801",id:"\u751f\u6210\u7684\u4ee3\u7801",level:2},{value:"\u7f16\u5199HTTP\u670d\u52a1",id:"\u7f16\u5199http\u670d\u52a1",level:2}],d={toc:m};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4f55\u8c13\u77ed\u5173\u8054"},"\u4f55\u8c13\u77ed\u5173\u8054"),(0,o.kt)("p",null,"\u6240\u8c13\u77ed\u5173\u8054\uff0c\u6307\u53ea\u6539\u53d8\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u5173\u7cfb\uff0c\u4e0d\u8fdb\u4e00\u6b65\u4fee\u6539\u5173\u8054\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8eUI\u754c\u9762\u800c\u8a00"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5f15\u7528\u5173\u8054 ",(0,o.kt)("em",{parentName:"p"},"(\u4e00\u5bf9\u4e00\u548c\u591a\u5bf9\u4e00)")," \u8868\u73b0\u4e3a\u5355\u9009\u83dc\u5355")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u96c6\u5408\u5173\u8054 ",(0,o.kt)("em",{parentName:"p"},"(\u4e00\u5bf9\u591a\u548c\u591a\u5bf9\u591a)")," \u8868\u73b0\u4e3a\u591a\u9009\u83dc\u5355"))),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)(r.k,{mdxType:"ShortAssociation"}),(0,o.kt)("h2",{id:"\u5b9a\u4e49input-dto"},"\u5b9a\u4e49Input DTO"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b89\u88c5DTO\u8bed\u8a00Intellij\u63d2\u4ef6\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClearPlume/jimmer-dto"},"https://github.com/ClearPlume/jimmer-dto")," ",(0,o.kt)("em",{parentName:"p"},"\uff08\u6b64\u8fc7\u7a0b\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u975e\u5e38\u63a8\u8350\uff09"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u65b0\u5efa\u76ee\u5f55",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/dto"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u4e0b\u5efa\u7acb\u4e00\u4e2a\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"Book.dto"),"\uff0c\u7f16\u5199\u4ee3\u7801\u5982\u4e0b"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Book.dto"',title:'"Book.dto"'},"input BookInputWithShortAssociations {\n    #allScalars(this)\n    #highlight-next-line\n    id(store) //\u9ed8\u8ba4\u522b\u540dstoreId\n    #highlight-next-line\n    id(authors) as authorIds\n}\n")))),(0,o.kt)("h2",{id:"\u751f\u6210\u7684\u4ee3\u7801"},"\u751f\u6210\u7684\u4ee3\u7801"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInputWithShortAssociations.java"',title:'"BookInputWithShortAssociations.java"'},'@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)\npublic class BookInputWithShortAssociations implements Input<Book> {\n\n    @Nullable\n    private Long id;\n\n    @NotNull\n    private String name;\n\n    private int edition;\n\n    @NotNull\n    private BigDecimal price;\n\n    @Nullable\n    // highlight-next-line\n    private Long storeId;\n\n    @NotNull\n    // highlight-next-line\n    private List<Long> authorIds;\n\n    ...\u7701\u7565\u5176\u4ed6\u65b9\u6cd5...\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInputWithShortAssociations.kt"',title:'"BookInputWithShortAssociations.kt"'},'@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)\ndata class BookInputWithShortAssociations(\n    val id: Long?,\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    // highlight-next-line\n    val storeId: Long?\n    // highlight-next-line\n    val authorIds: List<Long>\n) : Input<Book> {\n    ...\u7701\u7565\u5176\u4ed6\u65b9\u6cd5...\n}\n')))),(0,o.kt)("h2",{id:"\u7f16\u5199http\u670d\u52a1"},"\u7f16\u5199HTTP\u670d\u52a1"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},'@RestController\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    } \n\n    @PutMapping("/book")\n    pubic int saveBookInputWithShortAssociations(\n        // highlight-next-line\n        @RequestBody BookInputWithShortAssociations input\n    ) {\n        return sqlClient\n            .save(input)\n            .getTotoalAffectedRowCount();\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.java"',title:'"BookController.java"'},'class BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    @PutMapping("/book")\n    fun saveBookInputWithShortAssociations(\n        // highlight-next-line\n        @RequestBody input: BookInputWithShortAssociations\n    ): Int =\n        sqlClient\n            .save(input)\n            .totoalAffectedRowCount\n}\n')))),(0,o.kt)("p",null,"\u53ef\u89c1\uff0c\u65e0\u8bbaInput DTO\u5982\u4f55\u6539\u53d8\uff0cJimmer\u4ecd\u7136\u53ea\u9700\u4e00\u4e2a\u65b9\u6cd5\u8c03\u7528\u5373\u53ef\u5b8c\u6210\u6570\u636e\u4fdd\u5b58\u3002"))}k.isMDXComponent=!0}}]);