import{r as l,j as o,u as N,G as V,f as E,a as I}from"./index.adaee8f0.js";import{f as D,i as j,g as k,a as _,s as A,B as H,r as z,_ as C,h as w,u as U,b as W,D as X,d as P,e as Y,L as q,l as $}from"./Layout.5449bed6.js";import{B as J}from"./BackBtn.32f6555c.js";import{k as K}from"./index.esm.47de3dc1.js";import{B as Q}from"./ButtonGroup.fc9f79ce.js";import{P as Z}from"./Popper.cb0fbacb.js";import{G as ee}from"./Grow.68d5699c.js";import{P as te}from"./Paper.e097f24a.js";import{o as M}from"./Portal.e4a1331a.js";import{L as T,M as se}from"./MenuList.acfdecac.js";import"./utils.b0e7ac9e.js";function O(e){return e.substring(2).toLowerCase()}function ne(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function oe(e){const{children:t,disableReactTree:c=!1,mouseEvent:r="onClick",onClickAway:m,touchEvent:d="onTouchEnd"}=e,u=l.exports.useRef(!1),p=l.exports.useRef(null),f=l.exports.useRef(!1),g=l.exports.useRef(!1);l.exports.useEffect(()=>(setTimeout(()=>{f.current=!0},0),()=>{f.current=!1}),[]);const x=D(t.ref,p),b=j(n=>{const a=g.current;g.current=!1;const i=M(p.current);if(!f.current||!p.current||"clientX"in n&&ne(n,i))return;if(u.current){u.current=!1;return}let y;n.composedPath?y=n.composedPath().indexOf(p.current)>-1:y=!i.documentElement.contains(n.target)||p.current.contains(n.target),!y&&(c||!a)&&m(n)}),s=n=>a=>{g.current=!0;const i=t.props[n];i&&i(a)},v={ref:x};return d!==!1&&(v[d]=s(d)),l.exports.useEffect(()=>{if(d!==!1){const n=O(d),a=M(p.current),i=()=>{u.current=!0};return a.addEventListener(n,b),a.addEventListener("touchmove",i),()=>{a.removeEventListener(n,b),a.removeEventListener("touchmove",i)}}},[b,d]),r!==!1&&(v[r]=s(r)),l.exports.useEffect(()=>{if(r!==!1){const n=O(r),a=M(p.current);return a.addEventListener(n,b),()=>{a.removeEventListener(n,b)}}},[b,r]),o(l.exports.Fragment,{children:l.exports.cloneElement(t,v)})}const re=k("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),B=re,ae=k("MuiListItemIcon",["root","alignItemsFlexStart"]),G=ae,ie=k("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),S=ie;function le(e){return _("MuiMenuItem",e)}const ce=k("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),h=ce,de=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ue=(e,t)=>{const{ownerState:c}=e;return[t.root,c.dense&&t.dense,c.divider&&t.divider,!c.disableGutters&&t.gutters]},pe=e=>{const{disabled:t,dense:c,divider:r,disableGutters:m,selected:d,classes:u}=e,f=Y({root:["root",c&&"dense",t&&"disabled",!m&&"gutters",r&&"divider",d&&"selected"]},le,u);return C({},u,f)},me=A(H,{shouldForwardProp:e=>z(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ue})(({theme:e,ownerState:t})=>C({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:w(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:w(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${h.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:w(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:w(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${B.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${B.inset}`]:{marginLeft:52},[`& .${S.root}`]:{marginTop:0,marginBottom:0},[`& .${S.inset}`]:{paddingLeft:36},[`& .${G.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&C({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${G.root} svg`]:{fontSize:"1.25rem"}}))),fe=l.exports.forwardRef(function(t,c){const r=U({props:t,name:"MuiMenuItem"}),{autoFocus:m=!1,component:d="li",dense:u=!1,divider:p=!1,disableGutters:f=!1,focusVisibleClassName:g,role:x="menuitem",tabIndex:b,className:s}=r,v=W(r,de),n=l.exports.useContext(T),a=l.exports.useMemo(()=>({dense:u||n.dense||!1,disableGutters:f}),[n.dense,u,f]),i=l.exports.useRef(null);X(()=>{m&&i.current&&i.current.focus()},[m]);const y=C({},r,{dense:a.dense,divider:p,disableGutters:f}),R=pe(r),F=D(i,c);let L;return r.disabled||(L=b!==void 0?b:-1),o(T.Provider,{value:a,children:o(me,C({ref:F,role:x,tabIndex:L,component:d,focusVisibleClassName:P(R.focusVisible,g),className:P(R.root,s)},v,{ownerState:y,classes:R}))})}),be=fe;function ve(){const e=N(t=>t.mode.colorTheme);return o("div",{className:"flex items-center justify-center w-full h-full",style:{backgroundColor:e.primaryBg},children:o(V,{color:e.primaryText})})}function Me(){const e=N(s=>s.mode.colorTheme),[t,c]=E.useState(!1),r=E.useRef(null),[m,d]=E.useState(0),u=["Download as PDF","Download as png"],p=()=>{if(m===0){const s=document.createElement("a");s.href="/resume/PranayGupta_resume.pdf",s.download="Pranay-Gupta-Resume.pdf",document.body.appendChild(s),s.click(),document.body.removeChild(s)}else{const s=document.createElement("a");s.href="/resume/resumeImg.png",s.download="Pranay-Gupta-Resume.png",document.body.appendChild(s),s.click(),document.body.removeChild(s)}},f=()=>{m===0?window.open("/resume/PranayGupta_resume.pdf","_blank"):window.open("","_blank")},g=(s,v)=>{d(v),c(!1)},x=()=>{c(s=>!s)},b=s=>{r.current&&r.current.contains(s.target)||c(!1)};return o(q,{children:I("div",{className:"w-full flex flex-col justify-center items-center my-[4.5rem]",children:[o(J,{}),I("div",{style:{color:e.primaryText},className:"max-w-[800px] flex flex-col items-center justify-center w-full p-4 ",children:[o("h1",{className:"text-4xl font-bold text-center mb-4",children:"My Resume"}),o(l.exports.Suspense,{fallback:o(ve,{}),children:o("img",{style:{boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.35)"},className:"",src:"/resume/resumeImg.png",alt:""})}),I("div",{className:"my-4",children:[I(Q,{variant:"contained",ref:r,"aria-label":"split button",children:[o($,{onClick:f,children:"Preview"}),o($,{onClick:p,children:u[m]}),o($,{size:"small","aria-controls":t?"split-button-menu":void 0,"aria-expanded":t?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:x,children:o(K,{})})]}),o(Z,{sx:{zIndex:1},open:t,anchorEl:r.current,role:void 0,transition:!0,disablePortal:!0,children:({TransitionProps:s,placement:v})=>o(ee,{...s,style:{transformOrigin:v==="bottom"?"center top":"center bottom"},children:o(te,{children:o(oe,{onClickAway:b,children:o(se,{id:"split-button-menu",autoFocusItem:!0,children:u.map((n,a)=>o(be,{disabled:a===2,selected:a===m,onClick:i=>g(i,a),children:n},n))})})})})})]})]})]})})}export{Me as default};
