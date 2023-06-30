(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const he=(e,t)=>e===t,L=Symbol("solid-proxy"),ge=Symbol("solid-dev-component"),z={equals:he};let ye=ie;const S=1,T=2,te={owned:null,cleanups:null,context:null,owner:null};var y=null;let I=null,h=null,g=null,P=null,M=0;function pe(e,t){const n=h,i=y,r=e.length===0,s=r?te:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},o=r?e:()=>e(()=>A(()=>D(s)));y=s,h=null;try{return j(o,!0)}finally{h=n,y=i}}function m(e,t,n){const i=ne(e,t,!1,S);v(i)}function O(e,t,n){n=n?Object.assign({},z,n):z;const i=ne(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,v(i),xe.bind(i)}function A(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function me(e,t){const n=Symbol("context");return{id:n,Provider:Ce(n),defaultValue:e}}function be(e){let t;return(t=le(y,e.id))!==void 0?t:e.defaultValue}function we(e){const t=O(e),n=O(()=>K(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function xe(){if(this.sources&&this.state)if(this.state===S)v(this);else{const e=g;g=null,j(()=>k(this),!1),g=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function Pe(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],o=I&&I.running;o&&I.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?g.push(s):P.push(s),s.observers&&re(s)),o||(s.state=S)}if(g.length>1e6)throw g=[],new Error},!1)),t}function v(e){if(!e.fn)return;D(e);const t=y,n=h,i=M;h=y=e,Se(e,e.value,i),h=n,y=t}function Se(e,t,n){let i;try{i=e.fn(t)}catch(r){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(D),e.owned=null),e.updatedAt=n+1,oe(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Pe(e,i):e.value=i,e.updatedAt=n)}function ne(e,t,n,i=S,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==te&&(y.owned?y.owned.push(s):y.owned=[s]),s}function se(e){if(e.state===0)return;if(e.state===T)return k(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<M);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===S)v(e);else if(e.state===T){const i=g;g=null,j(()=>k(e,t[0]),!1),g=i}}function j(e,t){if(g)return e();let n=!1;t||(g=[]),P?n=!0:P=[],M++;try{const i=e();return Ae(n),i}catch(i){n||(P=null),g=null,oe(i)}}function Ae(e){if(g&&(ie(g),g=null),e)return;const t=P;P=null,t.length&&j(()=>ye(t),!1)}function ie(e){for(let t=0;t<e.length;t++)se(e[t])}function k(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===S?i!==t&&(!i.updatedAt||i.updatedAt<M)&&se(i):r===T&&k(i,t)}}}function re(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=T,n.pure?g.push(n):P.push(n),n.observers&&re(n))}}function D(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),o=n.observerSlots.pop();i<r.length&&(s.sourceSlots[o]=i,r[i]=s,n.observerSlots[i]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)D(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function oe(e){throw e}function le(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:le(e.owner,t):void 0}function K(e){if(typeof e=="function"&&!e.length)return K(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=K(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Ce(e,t){return function(i){let r;return m(()=>r=A(()=>(y.context={[e]:i.value},we(()=>i.children))),void 0),r}}function x(e,t){return A(()=>e(t||{}))}function $(){return!0}const R={get(e,t,n){return t===L?n:e.get(t)},has(e,t){return t===L?!0:e.has(t)},set:$,deleteProperty:$,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:$,deleteProperty:$}},ownKeys(e){return e.keys()}};function U(e){return(e=typeof e=="function"?e():e)?e:{}}function Oe(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function G(...e){let t=!1;for(let s=0;s<e.length;s++){const o=e[s];t=t||!!o&&L in o,e[s]=typeof o=="function"?(t=!0,O(o)):o}if(t)return new Proxy({get(s){for(let o=e.length-1;o>=0;o--){const l=U(e[o])[s];if(l!==void 0)return l}},has(s){for(let o=e.length-1;o>=0;o--)if(s in U(e[o]))return!0;return!1},keys(){const s=[];for(let o=0;o<e.length;o++)s.push(...Object.keys(U(e[o])));return[...new Set(s)]}},R);const n={},i={};let r=!1;for(let s=e.length-1;s>=0;s--){const o=e[s];if(!o)continue;const l=Object.getOwnPropertyNames(o);r=r||s!==0&&!!l.length;for(let c=0,a=l.length;c<a;c++){const f=l[c];if(!(f==="__proto__"||f==="constructor"))if(f in n){const u=i[f],d=Object.getOwnPropertyDescriptor(o,f);u?d.get?u.push(d.get.bind(o)):d.value!==void 0&&u.push(()=>d.value):n[f]===void 0&&(n[f]=d.value)}else{const u=Object.getOwnPropertyDescriptor(o,f);u.get?Object.defineProperty(n,f,{enumerable:!0,configurable:!0,get:Oe.bind(i[f]=[u.get.bind(o)])}):n[f]=u.value}}}return n}function X(e,...t){if(L in e){const r=new Set(t.length>1?t.flat():t[0]),s=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},R));return s.push(new Proxy({get(o){return r.has(o)?void 0:e[o]},has(o){return r.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!r.has(o))}},R)),s}const n={},i=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,r),o=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let l=!1,c=0;for(const a of t)a.includes(r)&&(l=!0,o?i[c][r]=s.value:Object.defineProperty(i[c],r,s)),++c;l||(o?n[r]=s.value:Object.defineProperty(n,r,s))}return[...i,n]}const Ee=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ne=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ee]),je=new Set(["innerHTML","textContent","innerText","children"]),$e=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Le=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Te(e,t){const n=Le[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ke=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),_e=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Me={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ve(e,t,n){let i=n.length,r=t.length,s=i,o=0,l=0,c=t[r-1].nextSibling,a=null;for(;o<r||l<s;){if(t[o]===n[l]){o++,l++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===o){const f=s<i?l?n[l-1].nextSibling:n[s-l]:c;for(;l<s;)e.insertBefore(n[l++],f)}else if(s===l)for(;o<r;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[l]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--s],f),t[r]=n[s]}else{if(!a){a=new Map;let u=l;for(;u<s;)a.set(n[u],u++)}const f=a.get(t[o]);if(f!=null)if(l<f&&f<s){let u=o,d=1,b;for(;++u<r&&u<s&&!((b=a.get(t[u]))==null||b!==f+d);)d++;if(d>f-l){const B=t[o];for(;l<f;)e.insertBefore(n[l++],B)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Q="_$DX_DELEGATE";function De(e,t,n,i={}){let r;return pe(s=>{r=s,t===document?e():N(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function F(e,t,n){let i;const r=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},s=t?()=>A(()=>document.importNode(i||(i=r()),!0)):()=>(i||(i=r())).cloneNode(!0);return s.cloneNode=s,s}function Fe(e,t=window.document){const n=t[Q]||(t[Q]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,Re))}}function q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Be(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function ce(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ie(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n)}function Ue(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let s,o;for(s=0,o=r.length;s<o;s++){const l=r[s];!l||l==="undefined"||t[l]||(W(e,l,!1),delete n[l])}for(s=0,o=i.length;s<o;s++){const l=i[s],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(W(e,l,!0),n[l]=c)}return n}function Ge(e,t,n){if(!t)return n?q(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&i.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(i.setProperty(s,r),n[s]=r);return n}function fe(e,t={},n,i){const r={};return i||m(()=>r.children=E(e,t.children,r.children)),m(()=>t.ref&&t.ref(e)),m(()=>Ve(e,t,n,!0,r,!0)),r}function N(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return E(e,t,i,n);m(r=>E(e,t(),r,n),i)}function Ve(e,t,n,i,r={},s=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=Y(e,o,null,r[o],n,s)}for(const o in t){if(o==="children"){i||E(e,t.children);continue}const l=t[o];r[o]=Y(e,o,l,r[o],n,s)}}function Ke(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function W(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,s=i.length;r<s;r++)e.classList.toggle(i[r],n)}function Y(e,t,n,i,r,s){let o,l,c,a,f;if(t==="style")return Ge(e,n,i);if(t==="classList")return Ue(e,n,i);if(n===i)return i;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);i&&e.removeEventListener(u,i),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);i&&e.removeEventListener(u,i,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),d=ke.has(u);if(!d&&i){const b=Array.isArray(i)?i[0]:i;e.removeEventListener(u,b)}(d||n)&&(Ie(e,u,n,d),d&&Fe([u]))}else if(t.slice(0,5)==="attr:")q(e,t.slice(5),n);else if((f=t.slice(0,5)==="prop:")||(c=je.has(t))||!r&&((a=Te(t,e.tagName))||(l=Ne.has(t)))||(o=e.nodeName.includes("-")))f&&(t=t.slice(5),l=!0),t==="class"||t==="className"?ce(e,n):o&&!l&&!c?e[Ke(t)]=n:e[a||t]=n;else{const u=r&&t.indexOf(":")>-1&&Me[t.split(":")[0]];u?Be(e,u,t,n):q(e,$e[t]||t,n)}return n}function Re(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?i.call(n,r,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function E(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=C(e,n,i,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=C(e,n,i);else{if(s==="function")return m(()=>{let l=t();for(;typeof l=="function";)l=l();n=E(e,l,n,i)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(H(l,t,n,r))return m(()=>n=E(e,l,n,i,!0)),()=>n;if(l.length===0){if(n=C(e,n,i),o)return n}else c?n.length===0?Z(e,l,i):ve(e,n,l):(n&&C(e),Z(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=C(e,n,i,t);C(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function H(e,t,n,i){let r=!1;for(let s=0,o=t.length;s<o;s++){let l=t[s],c=n&&n[s],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=H(e,l,c)||r;else if(a==="function")if(i){for(;typeof l=="function";)l=l();r=H(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||r}else e.push(l),r=!0;else{const f=String(l);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return r}function Z(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function C(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const c=l.parentNode===e;!s&&!o?c?e.replaceChild(r,l):e.insertBefore(r,n):c&&l.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}const qe="http://www.w3.org/2000/svg";function He(e,t=!1){return t?document.createElementNS(qe,e):document.createElement(e)}function Xe(e){const[t,n]=X(e,["component"]),i=O(()=>t.component);return O(()=>{const r=i();switch(typeof r){case"function":return Object.assign(r,{[ge]:!0}),A(()=>r(n));case"string":const s=_e.has(r),o=He(r,s);return fe(o,n,s),o}})}let ze={data:""},Qe=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ze,We=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ye=/\/\*[^]*?\*\/|  +/g,J=/\n+/g,w=(e,t)=>{let n="",i="",r="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":i+=s[1]=="f"?w(o,s):s+"{"+w(o,s[1]=="k"?"":t)+"}":typeof o=="object"?i+=w(o,t?t.replace(/([^,])+/g,l=>s.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=w.p?w.p(s,o):s+":"+o+";")}return n+(t&&r?t+"{"+r+"}":r)+i},p={},ue=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+ue(e[n]);return t}return e},Ze=(e,t,n,i,r)=>{let s=ue(e),o=p[s]||(p[s]=(c=>{let a=0,f=11;for(;a<c.length;)f=101*f+c.charCodeAt(a++)>>>0;return"go"+f})(s));if(!p[o]){let c=s!==e?e:(a=>{let f,u,d=[{}];for(;f=We.exec(a.replace(Ye,""));)f[4]?d.shift():f[3]?(u=f[3].replace(J," ").trim(),d.unshift(d[0][u]=d[0][u]||{})):d[0][f[1]]=f[2].replace(J," ").trim();return d[0]})(e);p[o]=w(r?{["@keyframes "+o]:c}:c,n?"":"."+o)}let l=n&&p.g?p.g:null;return n&&(p.g=p[o]),((c,a,f,u)=>{u?a.data=a.data.replace(u,c):a.data.indexOf(c)===-1&&(a.data=f?c+a.data:a.data+c)})(p[o],t,i,l),o},Je=(e,t,n)=>e.reduce((i,r,s)=>{let o=t[s];if(o&&o.call){let l=o(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":w(l,""):l===!1?"":l}return i+r+(o??"")},"");function _(e){let t=this||{},n=e.call?e(t.p):e;return Ze(n.unshift?n.raw?Je(n,[].slice.call(arguments,1),t.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(t.p):r),{}):n,Qe(t.target),t.g,t.o,t.k)}_.bind({g:1});_.bind({k:1});const et=me();function tt(e){let t=this||{};return(...n)=>{const i=r=>{const s=be(et),o=G(r,{theme:s}),l=G(o,{get class(){const b=o.class,B="class"in o&&/^go[0-9]+/.test(b);let de=_.apply({target:t.target,o:B,p:o,g:t.g},n);return[b,de].filter(Boolean).join(" ")}}),[c,a]=X(l,["as","theme"]),f=a,u=c.as||e;let d;return typeof u=="function"?d=u(f):t.g==1?(d=document.createElement(u),fe(d,f)):d=Xe(G({component:u},f)),d};return i.class=r=>A(()=>_.apply({target:t.target,p:r,g:t.g},n)),i}}const nt=new Proxy(tt,{get(e,t){return e(t)}}),ae=e=>{const[t,n]=X(e,["elementName","dynamicStyle"]);return O(()=>{const i=nt(t.elementName)(t.dynamicStyle instanceof Function?t.dynamicStyle:()=>t.dynamicStyle);return x(i,n)})},ee=F("<div>"),st=F('<div><img src="public/linkedInPic.jpg" alt="Me"><h1>Benjamin Kern.</h1><span>Nice to meet you.</span><div>'),it=F("<div><h1>About Me</h1><span>LMU Computer Science and Physics '20.</span><span>I do projects having to do with those things."),rt=F('<i aria-hidden="true">'),ot=()=>[(()=>{const e=ee();return e.style.setProperty("display","block"),e.style.setProperty("width","100%"),e.style.setProperty("background-color","black"),e.style.setProperty("opacity","0.3"),e.style.setProperty("position","fixed"),e.style.setProperty("top","0"),e.style.setProperty("left","0"),e.style.setProperty("right","0"),e.style.setProperty("bottom","0"),e.style.setProperty("z-index","-1"),e})(),(()=>{const e=st(),t=e.firstChild,n=t.nextSibling,i=n.nextSibling,r=i.nextSibling;return e.style.setProperty("height","100vh"),e.style.setProperty("justify-content","center"),e.style.setProperty("align-items","center"),e.style.setProperty("text-shadow","2px 2px 5px black"),e.style.setProperty("color","white"),t.style.setProperty("border-radius","50%"),t.style.setProperty("height","175px"),t.style.setProperty("width","auto"),t.style.setProperty("margin","30px"),n.style.setProperty("font-size","50px"),r.style.setProperty("flex-direction","row"),N(r,x(V,{href:"https://www.linkedin.com/in/benjamin-j-kern/",icon:"fa-linkedin"}),null),N(r,x(V,{href:"https://www.github.com/benjaminjkern",icon:"fa-github"}),null),N(r,x(V,{href:"mailto:benkern@pixelgate?Subject=Hi Ben, you seem cool",icon:"fa-envelope"}),null),e})(),(()=>{const e=ee();return e.style.setProperty("height","75px"),e.style.setProperty("background","linear-gradient(#0000, #222)"),e})(),(()=>{const e=it(),t=e.firstChild;return t.nextSibling.nextSibling,e.style.setProperty("color","#a185c5"),e.style.setProperty("text-align","center"),e.style.setProperty("background-color","#222"),e.style.setProperty("padding","50px 0"),e.style.setProperty("align-items","center"),t.style.setProperty("margin-bottom","10px"),N(e,x(ae,{elementName:"a",href:"/resume",style:{"text-decoration":"none",padding:"5px","border-radius":"5px",color:"black",margin:"20px","max-width":"200px",width:"100%",transition:"background-color 0.1s"},dynamicStyle:{"background-color":"#a185c5","&:hover":{backgroundColor:"#796496"}},children:"RESUMÉ"}),null),e})()],V=e=>x(ae,{elementName:"a",get href(){return e.href},style:{display:"flex","justify-content":"center","align-items":"center","text-decoration":"none",height:"52px",width:"52px","font-size":"30px","border-radius":"50%",color:"black","margin-right":"10px","margin-left":"10px","margin-top":"15px","text-shadow":"0px 0px 5px black",transition:"background-color 0.1s"},dynamicStyle:{"background-color":"white","&:hover":{"background-color":"#a185c5"}},get children(){const t=rt();return m(()=>ce(t,`fa ${e.icon}`)),t}}),lt=document.getElementById("root");De(()=>x(ot,{}),lt);
