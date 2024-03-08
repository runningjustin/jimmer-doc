"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6653],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=l,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(b,i(i({ref:n},c),{},{components:t})):a.createElement(b,i({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),l=t(67294),r=t(34334),i=t(72389),o=t(67392),s=t(7094),p=t(12466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var n;const{lazy:t,block:i,defaultValue:u,values:d,groupId:b,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,o.l)(f,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:I}=(0,s.U)(),[v,T]=(0,l.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=b){const e=N[b];null!=e&&e!==v&&f.some((n=>n.value===e))&&T(e)}const w=e=>{const n=e.currentTarget,t=E.indexOf(n),a=f[t].value;a!==v&&(_(n),T(a),null!=b&&I(b,String(a)))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},h)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>E.push(e),onKeyDown:O,onFocus:w,onClick:w},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":v===n})}),t??n)}))),t?(0,l.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function d(e){const n=(0,i.Z)();return l.createElement(u,(0,a.Z)({key:String(n)},e))}},32102:(e,n,t)=>{t.d(n,{s:()=>h});var a=t(83117),l=t(67294),r=t(42293),i=t(50657),o=t(6514),s=t(54776),p=t(10155),c=t(15861),m=t(93946),u=t(9137),d=t(61274),b=t(50594);const h=(0,l.memo)((e=>{let{open:n,fullScreen:t=!1,title:a,maxWidth:s="md",onClose:h,children:f}=e;const[g,y]=(0,l.useState)(t),N=(0,l.useCallback)((()=>{y((e=>!e))}),[]);return l.createElement(i.Z,{open:n,onClose:h,fullScreen:g,TransitionComponent:k,maxWidth:s},l.createElement(r.Z,{sx:{position:"relative"}},l.createElement(p.Z,null,l.createElement(c.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),l.createElement(m.Z,{onClick:N,style:{color:"white"}},g?l.createElement(d.Z,null):l.createElement(u.Z,null)),l.createElement(m.Z,{"aria-label":"close",onClick:h,style:{color:"white"}},l.createElement(b.Z,null)))),l.createElement(o.Z,null,f))})),k=l.forwardRef((function(e,n){return l.createElement(s.Z,(0,a.Z)({direction:"up",ref:n},e))}))},39511:(e,n,t)=>{t.d(n,{b:()=>i});var a=t(67294),l=t(83321),r=t(32102);const i=(0,a.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:i=n,variant:o="outlined",maxWidth:s,useOriginalText:p=!0,children:c}=e;const[m,u]=(0,a.useState)(!1),d=(0,a.useCallback)((e=>{u(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),b=(0,a.useCallback)((()=>{u(!1)}),[]),h=p?{textTransform:"none"}:{};return a.createElement(a.Fragment,null,a.createElement(l.Z,{"data-is-view-more-button":"true",onClick:d,variant:o,size:"small",style:h},n),a.createElement(r.s,{open:m,onClose:b,title:i,maxWidth:s,fullScreen:t},c))}))},17222:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(83117),l=(t(67294),t(3905));const r={toc:[{value:"Scene-1",id:"scene-1",level:2},{value:"Scene-2",id:"scene-2",level:2}]};function i(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Currently, other technologies that operate on SQL, whether ORM or non-ORM, have a blank area: they only consider dynamic ",(0,l.kt)("inlineCode",{parentName:"p"},"where"),", and do not consider ",(0,l.kt)("inlineCode",{parentName:"p"},"dynamic join"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Dynamic JOIN")," is defined as: If some dynamic query conditions are for tables other than the current table. This means"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When the condition is met: First join to other tables through association properties, then add dynamic where conditions to the joined table")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When the condition is not met: Cannot join other tables through association properties"))),(0,l.kt)("h2",{id:"scene-1"},"Scene-1"),(0,l.kt)("p",null,"Let's first look at the first scene, taking MyBatis oriented to native SQL as an example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define MyBatis Mapper interface"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Mapper\npublic interface BookMapper {\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName, \n        @Nullable String storeWebsite\n    );\n}\n")),(0,l.kt)("p",{parentName:"li"},"Here, all query parameters may be null, which is clearly a dynamic query."),(0,l.kt)("p",{parentName:"li"},"The last two query parameters: ",(0,l.kt)("inlineCode",{parentName:"p"},"storeName")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"storeWebsite"),", their filtering conditions are not applied on the current table ",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK"),", but on the parent table ",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),".\nThat is, when any of these two parameters is non-null, a JOIN to the ",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK_STORE")," table will be generated. This table join dynamically determined by the parameter value is referred to as ",(0,l.kt)("inlineCode",{parentName:"p"},"dynamic JOIN")," in this article.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define MyBatis SQL mapping XML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.BookMapper">\n    <select id="findBooks" resultType="somepackage.Book">\n        select * from BOOK as book\n        \x3c!-- highlight-next-line --\x3e\n        <if test="storeName != null or storeWebsite != null"> \u2776\n            inner join BOOK_STORE as store\n                on book.STORE_ID = store.ID\n        </if>\n        <where>\n            <if test="name != null">\n                and book.NAME = #{name}\n            </if>\n            <if test="storeName != null"> \u2777\n                and store.NAME = #{storeName}\n            </if>\n            <if test="storeWebsite != null">\n                and store.WEBSITE = #{storeWebsite} \u2778\n            </if>\n        </where>\n    </select>\n</mapper>\n')),(0,l.kt)("p",{parentName:"li"},"Here, \u2776 is the dynamic JOIN. However, for developers, \u2777 and \u2778 are the purpose, and \u2776 is the work that has to be done to support \u2777 and \u2778. Its judgment condition is a burden."),(0,l.kt)("p",{parentName:"li"},"You may have noticed that \u2776 uses ",(0,l.kt)("inlineCode",{parentName:"p"},"or"),". This is easy to understand."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"However, this is only the simplest dynamic connection between two tables. For deeper multi-table join operations, the complexity of dynamic table joins will increase dramatically!")))),(0,l.kt)("h2",{id:"scene-2"},"Scene-2"),(0,l.kt)("p",null,"Let's take a look at the second scene. With the previous example as the basis, this example is decoupled from any business."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.AMapper">\n  <select id="findAObjects" resultType="somepackage.A">\n    select distinct A.id\n    from A\n    \x3c!-- highlight-start --\x3e  \n    <if test="bId != null or cId != null or dId != null or eId != null">\n      inner join B on A.ID = B.A_ID \n    </if>\n    <if test="cId != null or dId != null or eId != null">\n      inner join C on B.ID = C.B_ID\n    </if>\n    <if test="dId != null or eId != null">\n      inner join D on C.ID = D.C_ID \n    </if>\n    <if test="eId != null">\n      inner join E on D.ID = E.D_ID\n    </if>\n    \x3c!-- highlight-end --\x3e\n    <where>\n      <if test="aId != null">\n        and A.ID = #{aId}  \n      </if>\n      <if test="bId != null">\n        and B.ID = #{bId}\n      </if>\n      <if test="cId != null">\n        and C.ID = #{cId}\n      </if>\n      <if test="dId != null">\n        and D.ID = #{dId}\n      </if>\n      <if test="eId != null">\n        and E.ID = #{eId}\n      </if>\n    </where>\n  </select>\n</mapper>\n')),(0,l.kt)("p",null,"The logic of this example is simple. The five tables A, B, C, D and E form a JOIN chain, and each table has a dynamic query condition. However, as you can see, the complexity of dynamic JOIN has become unacceptable."))}i.isMDXComponent=!0},71623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var a=t(83117),l=(t(67294),t(3905)),r=t(17222),i=t(65488),o=t(85162),s=t(39511);const p={sidebar_position:3,title:"Merge Conflict Joins"},c=void 0,m={unversionedId:"query/dynamic-join/merge",id:"query/dynamic-join/merge",title:"Merge Conflict Joins",description:"Usage",source:"@site/docs/query/dynamic-join/merge.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/merge",permalink:"/jimmer-doc/docs/query/dynamic-join/merge",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/query/dynamic-join/merge.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Merge Conflict Joins"},sidebar:"tutorialSidebar",previous:{title:"Association Path Chaining",permalink:"/jimmer-doc/docs/query/dynamic-join/chain-style"},next:{title:"Optimize Unnecessary Joins",permalink:"/jimmer-doc/docs/query/dynamic-join/optimization"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Merge Rules",id:"merge-rules",level:2}],b={toc:d};function h(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"In ",(0,l.kt)(s.b,{buttonText:"Problems with current solutions",mdxType:"ViewMore"},(0,l.kt)(r.ZP,{mdxType:"DynamicJoinProblem"})),", we listed two scenarios. This article discusses how to resolve the problems in these two scenarios."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"There are two ways to solve this problem. This article demonstrates the first solution.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Solve the problem in scenario 1:"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n) {\n    BookTable table = Tables.BOOK_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            name != null,\n            () -> book.name().like(name)\n        )\n        .whereIf(\n            storeName != null, \n            () -> table\n                .store() \u2776\n                .name()\n                .like(storeName)\n        )\n        .whereIf(\n            storeWebsite != null,\n            () -> table\n                .store() \u2777\n                .website()\n                .like(storeWebsite)\n        )\n        .select(book)\n        .execute();\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(\n    name: String? = null,\n    storeName: String? = null, \n    storeWebsite: String? = null\n): List<Book> = \n    sqlClient\n        .createQuery(Book::class) {\n            name?.let {\n                where(table.name like it) \n            }\n            storeName?.let {\n                where(\n                    table\n                        .store \u2776\n                        .name like it\n                )\n            }\n            storeWebsite?.let {\n                where(\n                    table\n                        .store \u2777\n                        .website like it\n                )\n            }\n            select(table)\n        }\n        .execute()\n")))),(0,l.kt)("p",{parentName:"li"},"This is a typical dynamic query where all three query parameters are nullable."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Specify ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," but ",(0,l.kt)("inlineCode",{parentName:"p"},"storeName")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"storeWebsite")," are still null."),(0,l.kt)("p",{parentName:"li"},"In this case, the code at \u2776 and \u2777 will not execute. The final generated SQL does not contain any joins."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME,  \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \n    where tb_1_.NAME = ?\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Specify ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"storeName"),", but ",(0,l.kt)("inlineCode",{parentName:"p"},"storeWebsite")," is still null."),(0,l.kt)("p",{parentName:"li"},"In this case, the join at \u2776 takes effect but the code at \u2777 does not execute. The final generated SQL is:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_\n/* highlight-start */ \ninner join BOOK_STORE as tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID \n/* highlight-end */\nwhere\n    tb_1_.NAME = ?\nand \n    tb_2_.NAME = ? \n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Specify all parameters, ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"storeName")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"storeWebsite")," are all non-null."),(0,l.kt)("p",{parentName:"li"},"In this case, both joins at \u2776 and \u2777 take effect. This situation is called join conflict."),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This conflict does not cause any problems. Conflicting joins are merged into one join."),(0,l.kt)("p",{parentName:"admonition"},"So in the final generated SQL, there will be no duplicate join operations.")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION, \n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_\n    /* highlight-start */\n    inner join BOOK_STORE as tb_2_ on\n        tb_1_.STORE_ID = tb_2_.ID\n    /* highlight-end */\nwhere\n    tb_1_.NAME = ?\nand\n    tb_2_.NAME = ?\nand\n    tb_2_.WEBSITE = ? \n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Solve the problem in scenario 2:"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Long> findDistinctIds(\n    @Nullable Long aId,\n    @Nullable Long bId,\n    @Nullable Long cId,\n    @Nullable Long dId,\n    @Nullable Long eId\n) {\n    ATable table = Tables.A_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            aId != null,\n            () -> table.id().like(aId)\n        )\n        .whereIf(\n            bId != null,\n            () -> table.asTableEx().bs().id().like(bId)\n        )\n        .whereIf(\n            cId != null,\n            () -> table.asTableEx().bs().cs().id().like(cId)\n        )\n        .whereIf(\n            dId != null,\n            () -> table.asTableEx().bs().cs().ds().id().like(dId)\n        )\n        .whereIf(\n            eId != null,\n            () -> table.asTableEx().bs().cs().ds().es().id().like(eId)  \n        )\n        .select(book.id())\n        .distinct()\n        .execute();\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findDistinctIds(\n    aId: Long? = null,\n    bId: Long? = null,\n    cId: Long? = null,\n    dId: Long? = null,\n    eId: Long? = null\n): List<Long> =\n    sqlClient\n        .createQuery(A::class) {\n            aId?.let {\n                where(table.id eq it)\n            }\n            bId?.let {\n                where(table.asTableEx().bs.id eq it)\n            }\n            cId?.let {\n                where(table.asTableEx().bs.cs.id eq it)\n            }\n            dId?.let {\n                where(table.asTableEx().bs.cs.ds.id eq it)\n            }\n            eId?.let {\n                where(table.asTableEx().bs.cs.ds.es.id eq it)\n            }\n            select(table.id)\n        }\n        .distinct()\n        .execute()\n")))),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Given the basics above, no need to list the generated SQL for different parameter combinations here. Just understand that the final SQL will not contain duplicate joins.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"asTableEx")," here is a concept to be introduced in later docs ",(0,l.kt)("a",{parentName:"p",href:"./table-ex"},"Pagination Safety"),". Please ignore it for now.")))))),(0,l.kt)("h2",{id:"merge-rules"},"Merge Rules"),(0,l.kt)("p",null,"Assume there are three join paths:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a -> b -> c -> d -> e -> f -> g"),(0,l.kt)("li",{parentName:"ul"},"a -> b -> c -> h -> i -> j"),(0,l.kt)("li",{parentName:"ul"},"a -> x -> y -> z -> a -> b -> c -> d")),(0,l.kt)("p",null,"To eliminate conflicts, Jimmer first merges these paths into a tree:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-+-a\n |\n +----+-b\n |    |\n |    \\----+-c\n |         | \n |         +----+-d\n |         |    |\n |         |    \\----+-e\n |         |         |\n |         |         \\----+-f\n |         |              |\n |         |              \\------g\n |         | \n |         \\----+-h\n |              |\n |              \\----+-i\n |                   |\n |                   \\------j\n |\n \\----+-x\n      |\n      \\----+-y\n           |\n           \\----+-z\n                |\n                \\----+-a\n                     |\n                     \\----+-b\n                          |\n                          \\----+-c\n                               |\n                               \\------d\n")),(0,l.kt)("p",null,"Then generate the join clause in the final SQL based on this tree."),(0,l.kt)("p",null,"Another rule to note is join type. The method to create join objects takes a parameter to specify join type, e.g. left join:"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"book.store(JoinType.LEFT) \n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"book.`store?`\n")))),(0,l.kt)("p",null,"The merge rules for join types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If join types of all conflicting join nodes are the same, the merge preserves that join type."),(0,l.kt)("li",{parentName:"ul"},"Otherwise, the merge result is always inner join.")))}h.isMDXComponent=!0}}]);