import{s as X,p as Y,t as Z,o as P,y as $}from"./index.adaee8f0.js";import{a as tt,i as et,S as nt,H as at,v as x,s as st,c as it,b as rt,d as ot,e as lt,f as ut,r as ct,g as _,h as ft,j as mt,p as ht,k as pt,l as z,n as gt}from"./motion.9de9973d.js";function C(t,e,a){var n;if(typeof t=="string"){let s=document;e&&(X(Boolean(e.current)),s=e.current),a?((n=a[t])!==null&&n!==void 0||(a[t]=s.querySelectorAll(t)),t=a[t]):t=s.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}function dt(t,e){let a;const n=()=>{const{currentTime:s}=e,r=(s===null?0:s.value)/100;a!==r&&t(r),a=r};return Y.update(n,!0),()=>Z(n)}const yt=tt(()=>window.ScrollTimeline!==void 0);class U{constructor(e){this.animations=e.filter(Boolean)}then(e,a){return Promise.all(this.animations).then(e).catch(a)}getAll(e){return this.animations[0][e]}setAll(e,a){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=a}attachTimeline(e){const a=this.animations.map(n=>{if(yt()&&n.attachTimeline)n.attachTimeline(e);else return n.pause(),dt(s=>{n.time=n.duration*s},e)});return()=>{a.forEach((n,s)=>{n&&n(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let a=0;a<this.animations.length;a++)e=Math.max(e,this.animations[a].duration);return e}runAll(e){this.animations.forEach(a=>a[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function At(t){return typeof t=="object"&&!Array.isArray(t)}function vt(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},a=et(t)?new nt(e,{enableHardwareAcceleration:!1}):new at(e,{enableHardwareAcceleration:!0});a.mount(t),x.set(t,a)}function St(t,e=100){const a=st({keyframes:[0,e],...t}),n=Math.min(it(a),rt);return{type:"keyframes",ease:s=>a.next(n*s).value/e,duration:ot(n)}}function j(t,e,a,n){var s;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?a:(s=n.get(e))!==null&&s!==void 0?s:t}const Et=(t,e,a)=>{const n=e-t;return((a-t)%n+n)%n+t};function Tt(t,e){return lt(t)?t[Et(0,t.length,e)]:t}function Mt(t,e,a){for(let n=0;n<t.length;n++){const s=t[n];s.at>e&&s.at<a&&(ct(t,s),n--)}}function wt(t,e,a,n,s,i){Mt(t,s,i);for(let r=0;r<e.length;r++)t.push({value:e[r],at:ut(s,i,n[r]),easing:Tt(a,r)})}function bt(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const Dt="easeInOut";function Vt(t,{defaultTransition:e={},...a}={},n){const s=e.duration||.3,i=new Map,r=new Map,m={},l=new Map;let M=0,u=0,D=0;for(let S=0;S<t.length;S++){const h=t[S];if(typeof h=="string"){l.set(h,u);continue}else if(!Array.isArray(h)){l.set(h.name,j(u,h.at,M,l));continue}let[v,p,c={}]=h;c.at!==void 0&&(u=j(u,c.at,M,l));let f=0;const E=(g,d,A,w=0,b=0)=>{const o=xt(g),{delay:V=0,times:T=ft(o),type:J="keyframes",...Q}=d;let{ease:G=e.ease||"easeOut",duration:y}=d;const K=typeof V=="function"?V(w,b):V,F=o.length;if(F<=2&&J==="spring"){let B=100;if(F===2&&Ft(o)){const R=o[1]-o[0];B=Math.abs(R)}const I={...Q};y!==void 0&&(I.duration=pt(y));const N=St(I,B);G=N.ease,y=N.duration}y!=null||(y=s);const k=u+K,H=k+y;T.length===1&&T[0]===0&&(T[1]=1);const L=T.length-o.length;L>0&&mt(T,L),o.length===1&&o.unshift(null),wt(A,o,G,T,k,H),f=Math.max(K+y,f),D=Math.max(H,D)};if(_(v)){const g=O(v,r);E(p,c,W("default",g))}else{const g=C(v,n,m),d=g.length;for(let A=0;A<d;A++){p=p,c=c;const w=g[A],b=O(w,r);for(const o in p)E(p[o],Gt(c,o),W(o,b),A,d)}M=u,u+=f}}return r.forEach((S,h)=>{for(const v in S){const p=S[v];p.sort(bt);const c=[],f=[],E=[];for(let d=0;d<p.length;d++){const{at:A,value:w,easing:b}=p[d];c.push(w),f.push(ht(0,D,A)),E.push(b||"easeOut")}f[0]!==0&&(f.unshift(0),c.unshift(c[0]),E.unshift(Dt)),f[f.length-1]!==1&&(f.push(1),c.push(null)),i.has(h)||i.set(h,{keyframes:{},transition:{}});const g=i.get(h);g.keyframes[v]=c,g.transition[v]={...e,duration:D,ease:E,times:f,...a}}}),i}function O(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function W(t,e){return e[t]||(e[t]=[]),e[t]}function xt(t){return Array.isArray(t)?t:[t]}function Gt(t,e){return t[e]?{...t,...t[e]}:{...t}}const Kt=t=>typeof t=="number",Ft=t=>t.every(Kt);function q(t,e,a,n){const s=C(t,n),i=s.length,r=[];for(let m=0;m<i;m++){const l=s[m];x.has(l)||vt(l);const M=x.get(l),u={...a};typeof u.delay=="function"&&(u.delay=u.delay(m,i)),r.push(...gt(M,{...e,transition:u},{}))}return new U(r)}const kt=t=>Array.isArray(t)&&Array.isArray(t[0]);function Ht(t,e,a){const n=[];return Vt(t,e,a).forEach(({keyframes:i,transition:r},m)=>{let l;_(m)?l=z(m,i.default,r.default):l=q(m,i,r),n.push(l)}),new U(n)}const Lt=t=>{function e(a,n,s){let i;return kt(a)?i=Ht(a,n,t):At(n)?i=q(a,n,s,t):i=z(a,n,s),t&&t.animations.push(i),i}return e};function Nt(){const t=P(()=>({current:null,animations:[]})),e=P(()=>Lt(t));return $(()=>{t.animations.forEach(a=>a.stop())}),[t,e]}export{C as r,Nt as u};
