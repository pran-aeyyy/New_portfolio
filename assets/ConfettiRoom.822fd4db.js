import{r as f,j as p,a as B,u as se}from"./index.adaee8f0.js";import{W as re,X as ae,Y as ne,_ as c,Z as H,$ as _,a0 as le,R as ie,a1 as ce,b as D,d as q,e as O,a as E,a2 as X,g as V,s as y,B as de,c as k,u as A,h as Y,O as ue,N as pe,L as he,a3 as me}from"./Layout.5449bed6.js";import{B as fe}from"./BackBtn.32f6555c.js";import{u as J,f as be}from"./useFormControl.9256cc09.js";import{h as ge,T as Z}from"./index.esm.47de3dc1.js";import{u as ve}from"./useControlled.bd3c182a.js";const ke=re(),ye=ke,Ce=["component","direction","spacing","divider","children","className","useFlexGap"],we=ae(),xe=ye("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function Se(e){return ne({props:e,name:"MuiStack",defaultTheme:we})}function $e(e,o){const t=f.exports.Children.toArray(e).filter(Boolean);return t.reduce((r,a,s)=>(r.push(a),s<t.length-1&&r.push(f.exports.cloneElement(o,{key:`separator-${s}`})),r),[])}const Pe=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Re=({ownerState:e,theme:o})=>{let t=c({display:"flex",flexDirection:"column"},H({theme:o},_({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=le(o),a=Object.keys(o.breakpoints.values).reduce((n,l)=>((typeof e.spacing=="object"&&e.spacing[l]!=null||typeof e.direction=="object"&&e.direction[l]!=null)&&(n[l]=!0),n),{}),s=_({values:e.direction,base:a}),u=_({values:e.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((n,l,h)=>{if(!s[n]){const b=l>0?s[h[l-1]]:"column";s[n]=b}}),t=ie(t,H({theme:o},u,(n,l)=>e.useFlexGap?{gap:X(r,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Pe(l?s[l]:e.direction)}`]:X(r,n)}}))}return t=ce(o.breakpoints,t),t};function Be(e={}){const{createStyledComponent:o=xe,useThemeProps:t=Se,componentName:r="MuiStack"}=e,a=()=>O({root:["root"]},n=>E(r,n),{}),s=o(Re);return f.exports.forwardRef(function(n,l){const h=t(n),m=ge(h),{component:b="div",direction:F="column",spacing:z=0,divider:L,children:g,className:$,useFlexGap:C=!1}=m,N=D(m,Ce),M={direction:F,spacing:z,useFlexGap:C},P=a();return p(s,c({as:b,ownerState:M,ref:l,className:q(P.root,$)},N,{children:L?$e(g,L):g}))})}function Fe(e){return E("PrivateSwitchBase",e)}V("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Le=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Ne=e=>{const{classes:o,checked:t,disabled:r,edge:a}=e,s={root:["root",t&&"checked",r&&"disabled",a&&`edge${k(a)}`],input:["input"]};return O(s,Fe,o)},Te=y(de)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ze=y("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Me=f.exports.forwardRef(function(o,t){const{autoFocus:r,checked:a,checkedIcon:s,className:u,defaultChecked:i,disabled:n,disableFocusRipple:l=!1,edge:h=!1,icon:m,id:b,inputProps:F,inputRef:z,name:L,onBlur:g,onChange:$,onFocus:C,readOnly:N,required:M=!1,tabIndex:P,type:w,value:T}=o,x=D(o,Le),[R,K]=ve({controlled:a,default:Boolean(i),name:"SwitchBase",state:"checked"}),S=J(),Q=v=>{C&&C(v),S&&S.onFocus&&S.onFocus(v)},ee=v=>{g&&g(v),S&&S.onBlur&&S.onBlur(v)},oe=v=>{if(v.nativeEvent.defaultPrevented)return;const G=v.target.checked;K(G),$&&$(v,G)};let I=n;S&&typeof I>"u"&&(I=S.disabled);const te=w==="checkbox"||w==="radio",U=c({},o,{checked:R,disabled:I,disableFocusRipple:l,edge:h}),W=Ne(U);return B(Te,c({component:"span",className:q(W.root,u),centerRipple:!0,focusRipple:!l,disabled:I,tabIndex:null,role:void 0,onFocus:Q,onBlur:ee,ownerState:U,ref:t},x,{children:[p(ze,c({autoFocus:r,checked:a,defaultChecked:i,className:W.input,disabled:I,id:te?b:void 0,name:L,onChange:oe,readOnly:N,ref:z,required:M,ownerState:U,tabIndex:P,type:w},w==="checkbox"&&T===void 0?{}:{value:T},F)),R?s:m]}))}),Ie=Me,je=Be({createStyledComponent:y("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>A({props:e,name:"MuiStack"})}),qe=je;function De(e){return E("MuiFormControlLabel",e)}const Oe=V("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),j=Oe,Ee=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Ue=e=>{const{classes:o,disabled:t,labelPlacement:r,error:a,required:s}=e,u={root:["root",t&&"disabled",`labelPlacement${k(r)}`,a&&"error",s&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return O(u,De,o)},_e=y("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${j.label}`]:o.label},o.root,o[`labelPlacement${k(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${j.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${j.label}`]:{[`&.${j.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ve=y("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${j.error}`]:{color:(e.vars||e).palette.error.main}})),Ae=f.exports.forwardRef(function(o,t){var r,a;const s=A({props:o,name:"MuiFormControlLabel"}),{className:u,componentsProps:i={},control:n,disabled:l,disableTypography:h,label:m,labelPlacement:b="end",required:F,slotProps:z={}}=s,L=D(s,Ee),g=J(),$=(r=l!=null?l:n.props.disabled)!=null?r:g==null?void 0:g.disabled,C=F!=null?F:n.props.required,N={disabled:$,required:C};["checked","name","onChange","value","inputRef"].forEach(R=>{typeof n.props[R]>"u"&&typeof s[R]<"u"&&(N[R]=s[R])});const M=be({props:s,muiFormControl:g,states:["error"]}),P=c({},s,{disabled:$,labelPlacement:b,required:C,error:M.error}),w=Ue(P),T=(a=z.typography)!=null?a:i.typography;let x=m;return x!=null&&x.type!==Z&&!h&&(x=p(Z,c({component:"span"},T,{className:q(w.label,T==null?void 0:T.className),children:x}))),B(_e,c({className:q(w.root,u),ownerState:P,ref:t},L,{children:[f.exports.cloneElement(n,N),C?B(qe,{direction:"row",alignItems:"center",children:[x,B(Ve,{ownerState:P,"aria-hidden":!0,className:w.asterisk,children:["\u2009","*"]})]}):x]}))}),We=Ae;function Ge(e){return E("MuiSwitch",e)}const He=V("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),d=He,Xe=["className","color","edge","size","sx"],Ye=e=>{const{classes:o,edge:t,size:r,color:a,checked:s,disabled:u}=e,i={root:["root",t&&`edge${k(t)}`,`size${k(r)}`],switchBase:["switchBase",`color${k(a)}`,s&&"checked",u&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},n=O(i,Ge,o);return c({},o,n)},Ze=y("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.edge&&o[`edge${k(t.edge)}`],o[`size${k(t.size)}`]]}})(({ownerState:e})=>c({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${d.thumb}`]:{width:16,height:16},[`& .${d.switchBase}`]:{padding:4,[`&.${d.checked}`]:{transform:"translateX(16px)"}}})),Je=y(Ie,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.switchBase,{[`& .${d.input}`]:o.input},t.color!=="default"&&o[`color${k(t.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${d.checked}`]:{transform:"translateX(20px)"},[`&.${d.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${d.checked} + .${d.track}`]:{opacity:.5},[`&.${d.disabled} + .${d.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${d.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:o})=>c({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Y(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${d.checked}`]:{color:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Y(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${d.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${o.color}DisabledColor`]:`${e.palette.mode==="light"?ue(e.palette[o.color].main,.62):pe(e.palette[o.color].main,.55)}`}},[`&.${d.checked} + .${d.track}`]:{backgroundColor:(e.vars||e).palette[o.color].main}})),Ke=y("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),Qe=y("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,o)=>o.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),eo=f.exports.forwardRef(function(o,t){const r=A({props:o,name:"MuiSwitch"}),{className:a,color:s="primary",edge:u=!1,size:i="medium",sx:n}=r,l=D(r,Xe),h=c({},r,{color:s,edge:u,size:i}),m=Ye(h),b=p(Qe,{className:m.thumb,ownerState:h});return B(Ze,{className:q(m.root,a),sx:n,ownerState:h,children:[p(Je,c({type:"checkbox",icon:b,checkedIcon:b,ref:t,ownerState:h},l,{classes:c({},m,{root:m.switchBase})})),p(Ke,{className:m.track,ownerState:h})]})}),oo=eo;function io(){const e=se(i=>i.mode.colorTheme),[o,t]=f.exports.useState(window.innerWidth),[r,a]=f.exports.useState(window.innerHeight),[s,u]=f.exports.useState(!0);return f.exports.useEffect(()=>{const i=()=>{t(window.innerWidth),a(window.innerHeight)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),p(he,{children:B("div",{style:{color:e.primaryText},className:"flex flex-col items-center justify-start min-h-screen mt-[4.5rem]",children:[s&&p("div",{className:"w-full fixed",children:p(me,{width:o,height:r})}),p(fe,{}),B("div",{className:"text-center flex flex-col items-center ",children:[p("h1",{className:"text-4xl font-bold",children:"Confetti Room"}),p("div",{className:"flex flex-col my-4",children:p(We,{control:p(oo,{color:"secondary",checked:s,onChange:()=>u(!s)}),label:"Confetti Showers"})})]})]})})}export{io as default};
