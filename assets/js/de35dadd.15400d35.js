"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5843],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return t?a.createElement(b,l(l({ref:n},u),{},{components:t})):a.createElement(b,l({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(34334);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(83117),r=t(67294),o=t(34334),l=t(72389),i=t(67392),s=t(7094),c=t(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var n;const{lazy:t,block:l,defaultValue:m,values:p,groupId:b,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,i.l)(k,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[E,N]=(0,r.useState)(y),L=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=b){const e=v[b];null!=e&&e!==E&&k.some((n=>n.value===e))&&N(e)}const O=e=>{const n=e.currentTarget,t=L.indexOf(n),a=k[t].value;a!==E&&(T(n),N(a),null!=b&&w(b,String(a)))},B=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=L.indexOf(e.currentTarget)+1;t=L[n]??L[0];break}case"ArrowLeft":{const n=L.indexOf(e.currentTarget)-1;t=L[n]??L[L.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},k.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:e=>L.push(e),onKeyDown:B,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===n})}),t??n)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})))))}function p(e){const n=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},21027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(83117),r=(t(67294),t(3905)),o=t(65488),l=t(85162);const i={sidebar_position:2,title:"2.2 More Associations"},s=void 0,c={unversionedId:"showcase/fetch-association/more-association",id:"showcase/fetch-association/more-association",title:"2.2 More Associations",description:"Query Dynamic Entities",source:"@site/docs/showcase/fetch-association/more-association.mdx",sourceDirName:"showcase/fetch-association",slug:"/showcase/fetch-association/more-association",permalink:"/jimmer-doc/docs/showcase/fetch-association/more-association",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/tree/main/docs/showcase/fetch-association/more-association.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"2.2 More Associations"},sidebar:"tutorialSidebar",previous:{title:"2.1 Associated Object",permalink:"/jimmer-doc/docs/showcase/fetch-association/associated-object"},next:{title:"2.4 Associated Id",permalink:"/jimmer-doc/docs/showcase/fetch-association/associated-id"}},u={},d=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}],m={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"query-dynamic-entities"},"Query Dynamic Entities"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookFetcher.$\n                .allScalarFields()\n                .store( \u2776\n                    BookStoreFetcher.$\n                        .allScalarFields()\n                )\n                .authors( \u2777\n                    AuthorFetcher.$\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                store { \u2776\n                    allScalarFields()\n                }\n                authors { \u2777\n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"The result is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51,\n        "store":{ \u2776\n            "id":1,\n            "name":"O\'REILLY",\n            "website":null\n        },\n        "authors":[ \u2777\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    },\n    {\n        "id":2,\n        "name":"Learning GraphQL",\n        "edition":2,\n        "price":55,\n        "store":{ \u2776\n            "id":1,\n            "name":"O\'REILLY",\n            "website":null\n        },\n        "authors":[ \u2777\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    },\n    {\n        "id":1,\n        "name":"Learning GraphQL",\n        "edition":1,\n        "price":50,\n        "store":{ \u2776\n            "id":1,\n            "name":"O\'REILLY",\n            "website":null\n        },\n        "authors":[ \u2777\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    }\n]\n')),(0,r.kt)("h2",{id:"query-static-dto"},"Query Static DTO"),(0,r.kt)("p",null,"Create any file with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dto")," extension under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/dto")," folder, and edit the code as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto\n\nBookView {\n    #allScalars(this)\n    store { \u2776\n        #allScalars(this)\n    }\n    authors { \u2777\n        #allScalars(this)\n    }\n}\n")),(0,r.kt)("p",null,"Compile the project, a java/kotlin class named ",(0,r.kt)("inlineCode",{parentName:"p"},"BookView")," will be automatically generated."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(BookView.class)\n    )\n    .execute();\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetch(BookView::class)\n        )\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"The result is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[\n    BookView(\n        id=1, \n        name=Learning GraphQL, \n        edition=1, \n        price=50.00, \n        store=BookView.TargetOf_store( \u2776\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        authors=[ \u2777\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=2, \n        name=Learning GraphQL, \n        edition=2, \n        price=55.00, \n        store=BookView.TargetOf_store( \u2776\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        authors=[ \u2777\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=3, \n        name=Learning GraphQL, \n        edition=3, \n        price=51.00, \n        store=BookView.TargetOf_store( \u2776\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        authors=[ \u2777\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    )\n]\n")))}p.isMDXComponent=!0}}]);