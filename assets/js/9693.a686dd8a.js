(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9693],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?o.createElement(m,c(c({ref:r},u),{},{components:t})):o.createElement(m,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64938:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=t(33875)},93946:(e,r,t)=>{"use strict";t.d(r,{Z:()=>Z});var o=t(80102),n=t(83117),a=t(67294),c=t(93680),i=t(94780),s=t(41796),l=t(90948),u=t(71657),p=t(74976),d=t(98216),f=t(1588),m=t(34867);function v(e){return(0,m.Z)("MuiIconButton",e)}const b=(0,f.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var g=t(85893);const y=["edge","children","className","color","disabled","disableFocusRipple","size"],h=(0,l.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,"default"!==t.color&&r[`color${(0,d.Z)(t.color)}`],t.edge&&r[`edge${(0,d.Z)(t.edge)}`],r[`size${(0,d.Z)(t.size)}`]]}})((({theme:e,ownerState:r})=>(0,n.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})),(({theme:e,ownerState:r})=>{var t;const o=null==(t=(e.vars||e).palette)?void 0:t[r.color];return(0,n.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,n.Z)({color:null==o?void 0:o.main},!r.disableRipple&&{"&:hover":(0,n.Z)({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${b.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),Z=a.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:s,className:l,color:p="default",disabled:f=!1,disableFocusRipple:m=!1,size:b="medium"}=t,Z=(0,o.Z)(t,y),O=(0,n.Z)({},t,{edge:a,color:p,disabled:f,disableFocusRipple:m,size:b}),k=(e=>{const{classes:r,disabled:t,color:o,edge:n,size:a}=e,c={root:["root",t&&"disabled","default"!==o&&`color${(0,d.Z)(o)}`,n&&`edge${(0,d.Z)(n)}`,`size${(0,d.Z)(a)}`]};return(0,i.Z)(c,v,r)})(O);return(0,g.jsx)(h,(0,n.Z)({className:(0,c.Z)(k.root,l),centerRipple:!0,focusRipple:!m,disabled:f,ref:r,ownerState:O},Z,{children:s}))}))},31536:(e,r,t)=>{"use strict";t.d(r,{Z:()=>S});var o=t(80102),n=t(83117),a=t(67294),c=t(10209),i=t(59766),s=t(94780),l=t(34867);const u=(0,t(70182).ZP)();var p=t(65149),d=t(39707),f=t(66500),m=t(95408),v=t(98700),b=t(85893);const g=["component","direction","spacing","divider","children","className","useFlexGap"],y=(0,f.Z)(),h=u("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root});function Z(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:y})}function O(e,r){const t=a.Children.toArray(e).filter(Boolean);return t.reduce(((e,o,n)=>(e.push(o),n<t.length-1&&e.push(a.cloneElement(r,{key:`separator-${n}`})),e)),[])}const k=({ownerState:e,theme:r})=>{let t=(0,n.Z)({display:"flex",flexDirection:"column"},(0,m.k9)({theme:r},(0,m.P$)({values:e.direction,breakpoints:r.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,v.hB)(r),n=Object.keys(r.breakpoints.values).reduce(((r,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(r[t]=!0),r)),{}),a=(0,m.P$)({values:e.direction,base:n}),c=(0,m.P$)({values:e.spacing,base:n});"object"==typeof a&&Object.keys(a).forEach(((e,r,t)=>{if(!a[e]){const o=r>0?a[t[r-1]]:"column";a[e]=o}}));const s=(r,t)=>{return e.useFlexGap?{gap:(0,v.NA)(o,r)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${n=t?a[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]}`]:(0,v.NA)(o,r)}};var n};t=(0,i.Z)(t,(0,m.k9)({theme:r},c,s))}return t=(0,m.dt)(r.breakpoints,t),t};var w=t(90948),P=t(71657);const x=function(e={}){const{createStyledComponent:r=h,useThemeProps:t=Z,componentName:i="MuiStack"}=e,u=r(k),p=a.forwardRef((function(e,r){const a=t(e),p=(0,d.Z)(a),{component:f="div",direction:m="column",spacing:v=0,divider:y,children:h,className:Z,useFlexGap:k=!1}=p,w=(0,o.Z)(p,g),P={direction:m,spacing:v,useFlexGap:k},x=(0,s.Z)({root:["root"]},(e=>(0,l.Z)(i,e)),{});return(0,b.jsx)(u,(0,n.Z)({as:f,ownerState:P,ref:r,className:(0,c.Z)(x.root,Z)},w,{children:y?O(h,y):h}))}));return p}({createStyledComponent:(0,w.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root}),useThemeProps:e=>(0,P.Z)({props:e,name:"MuiStack"})}),S=x},33875:(e,r,t)=>{"use strict";t.r(r),t.d(r,{capitalize:()=>n.Z,createChainedFunction:()=>a,createSvgIcon:()=>c.Z,debounce:()=>i.Z,deprecatedPropType:()=>s,isMuiElement:()=>l.Z,ownerDocument:()=>u.Z,ownerWindow:()=>p.Z,requirePropFactory:()=>d,setRef:()=>f,unstable_ClassNameGenerator:()=>O,unstable_useEnhancedEffect:()=>m.Z,unstable_useId:()=>v,unsupportedProp:()=>b,useControlled:()=>g.Z,useEventCallback:()=>y.Z,useForkRef:()=>h.Z,useIsFocusVisible:()=>Z.Z});var o=t(37078),n=t(98216);const a=t(49064).Z;var c=t(88169),i=t(57144);const s=function(e,r){return()=>null};var l=t(71579),u=t(8038),p=t(5340);t(83117);const d=function(e,r){return()=>null};const f=t(7960).Z;var m=t(58974);const v=t(92996).Z;const b=function(e,r,t,o,n){return null};var g=t(72021),y=t(2068),h=t(51705),Z=t(18791);const O={configure:e=>{o.Z.configure(e)}}},66344:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);