(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function k(){}function V(t){return t()}function q(){return Object.create(null)}function C(t){t.forEach(V)}function W(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Z(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function tt(t){return Object.keys(t).length===0}function g(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function D(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function x(){return T(" ")}function et(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function nt(t){return Array.from(t.childNodes)}function rt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let P;function E(t){P=t}const v=[],I=[],N=[],B=[],ot=Promise.resolve();let O=!1;function lt(){O||(O=!0,ot.then(G))}function S(t){N.push(t)}const j=new Set;let w=0;function G(){if(w!==0)return;const t=P;do{try{for(;w<v.length;){const e=v[w];w++,E(e),ct(e.$$)}}catch(e){throw v.length=0,w=0,e}for(E(null),v.length=0,w=0;I.length;)I.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];j.has(n)||(j.add(n),n())}N.length=0}while(v.length);for(;B.length;)B.pop()();O=!1,j.clear(),E(t)}function ct(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const A=new Set;let it;function J(t,e){t&&t.i&&(A.delete(t),t.i(e))}function st(t,e,n,r){if(t&&t.o){if(A.has(t))return;A.add(t),it.c.push(()=>{A.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function ut(t){t&&t.c()}function Q(t,e,n,r){const{fragment:l,after_update:s}=t.$$;l&&l.m(e,n),r||S(()=>{const d=t.$$.on_mount.map(V).filter(W);t.$$.on_destroy?t.$$.on_destroy.push(...d):C(d),t.$$.on_mount=[]}),s.forEach(S)}function U(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(v.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,r,l,s,d,f=[-1]){const i=P;E(t);const a=t.$$={fragment:null,ctx:[],props:s,update:k,not_equal:l,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:q(),dirty:f,skip_bound:!1,root:e.target||i.$$.root};d&&d(a.root);let o=!1;if(a.ctx=n?n(t,e.props||{},(c,h,...u)=>{const m=u.length?u[0]:h;return a.ctx&&l(a.ctx[c],a.ctx[c]=m)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](m),o&&ft(t,c)),h}):[],a.update(),o=!0,C(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const c=nt(e.target);a.fragment&&a.fragment.l(c),c.forEach(b)}else a.fragment&&a.fragment.c();e.intro&&J(t.$$.fragment),Q(t,e.target,e.anchor,e.customElement),G()}E(i)}class Y{$destroy(){U(this,1),this.$destroy=k}$on(e,n){if(!W(n))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const at="https://khskeb0513.github.io/lottery/assets/lottery-46a4f9e0.png";function F(t,e,n){const r=t.slice();return r[7]=e[n],r[9]=n,r}function H(t,e,n){const r=t.slice();return r[10]=e[n],r}function dt(t){let e;return{c(){e=p("p"),e.textContent="Thank you for using. We generate until 5th row in a session."},m(n,r){$(n,e,r)},p:k,d(n){n&&b(e)}}}function ht(t){let e,n,r;return{c(){e=p("button"),e.textContent="Extract"},m(l,s){$(l,e,s),n||(r=et(e,"click",t[2]),n=!0)},p:k,d(l){l&&b(e),n=!1,r()}}}function K(t){let e,n=t[10]+"",r;return{c(){e=p("td"),r=T(n)},m(l,s){$(l,e,s),g(e,r)},p(l,s){s&1&&n!==(n=l[10]+"")&&rt(r,n)},d(l){l&&b(e)}}}function R(t){let e,n,r,l,s,d=t[7],f=[];for(let i=0;i<d.length;i+=1)f[i]=K(H(t,d,i));return{c(){e=p("tr"),n=p("td"),r=T(t[9]),l=x();for(let i=0;i<f.length;i+=1)f[i].c();s=x()},m(i,a){$(i,e,a),g(e,n),g(n,r),g(e,l);for(let o=0;o<f.length;o+=1)f[o].m(e,null);g(e,s)},p(i,a){if(a&1){d=i[7];let o;for(o=0;o<d.length;o+=1){const c=H(i,d,o);f[o]?f[o].p(c,a):(f[o]=K(c),f[o].c(),f[o].m(e,s))}for(;o<f.length;o+=1)f[o].d(1);f.length=d.length}},d(i){i&&b(e),D(f,i)}}}function _t(t){let e,n,r,l,s,d,f;function i(u,m){return u[1]?dt:ht}let a=i(t),o=a(t),c=t[0],h=[];for(let u=0;u<c.length;u+=1)h[u]=R(F(t,c,u));return{c(){e=p("div"),o.c(),n=x(),r=p("div"),l=p("table"),s=p("thead"),s.innerHTML=`<tr><th>N</th> 
            <th>1st</th> 
            <th>2nd</th> 
            <th>3rd</th> 
            <th>4th</th> 
            <th>5th</th> 
            <th>6th</th></tr>`,d=x(),f=p("tbody");for(let u=0;u<h.length;u+=1)h[u].c();y(e,"class","card"),y(r,"class","card")},m(u,m){$(u,e,m),o.m(e,null),$(u,n,m),$(u,r,m),g(r,l),g(l,s),g(l,d),g(l,f);for(let _=0;_<h.length;_+=1)h[_].m(f,null)},p(u,[m]){if(a===(a=i(u))&&o?o.p(u,m):(o.d(1),o=a(u),o&&(o.c(),o.m(e,null))),m&1){c=u[0];let _;for(_=0;_<c.length;_+=1){const L=F(u,c,_);h[_]?h[_].p(L,m):(h[_]=R(L),h[_].c(),h[_].m(f,null))}for(;_<h.length;_+=1)h[_].d(1);h.length=c.length}},i:k,o:k,d(u){u&&b(e),o.d(),u&&b(n),u&&b(r),D(h,u)}}}function gt(t,e,n){let r=[],l=0,s=!1;const d=(o,c)=>(o=Math.ceil(o),c=Math.floor(c),Math.floor(Math.random()*(c-o)+o)),f=(o,c)=>[...Array(c-o+1).keys()].map(h=>Number(h)+o),i=o=>{for(let c=o.length-1;c>0;c--){const h=Math.floor(Math.random()*(c+1)),u=o[c];o[c]=o[h],o[h]=u}return o};return[r,s,()=>{if(l=d(21,26),r.length>4){n(1,s=!0);return}switch(r.length){case 0:n(0,r=[...r,i(f(1,l)).splice(0,6).sort((o,c)=>o-c)]);break;case 1:n(0,r=[...r,i(f(l+1,45)).splice(0,6).sort((o,c)=>o-c)]);break;case 2:n(0,r=[...r,i(f(l-10,l+20)).splice(0,6).sort((o,c)=>o-c)]);break;default:n(0,r=[...r,i(f(1,45)).splice(0,6).sort((o,c)=>o-c)]);break}}]}class pt extends Y{constructor(e){super(),X(this,e,gt,_t,z,{})}}function mt(t){let e,n,r,l,s,d,f,i,a,o,c,h,u,m;return c=new pt({}),{c(){e=p("main"),n=p("h1"),n.textContent="Lottery Extractor",r=x(),l=p("p"),l.textContent="Find your luck to bind with computer.",s=x(),d=p("div"),f=p("a"),i=p("img"),o=x(),ut(c.$$.fragment),h=x(),u=p("div"),u.innerHTML=`<ul class="svelte-yujdw3"><li><code>range_x: 21 ≤ range_x ≤ 26</code></li> 
            <li><code>1st_rows: 1 ≤ x ≤ range_x</code></li> 
            <li><code>2nd_rows: range_x ≤ x ≤ 45</code></li> 
            <li><code>3rd_rows: range_x - 10 ≤ x ≤ range_x + 20</code></li> 
            <li><code>nth_rows: 1 ≤ x ≤ 45</code></li></ul>`,Z(i.src,a=at)||y(i,"src",a),y(i,"class","logo svelte-yujdw3"),y(i,"alt","Vite Logo"),y(f,"href","https://dhlottery.co.kr"),y(f,"target","_blank"),y(f,"rel","noreferrer"),y(u,"class","read-the-docs svelte-yujdw3")},m(_,L){$(_,e,L),g(e,n),g(e,r),g(e,l),g(e,s),g(e,d),g(d,f),g(f,i),g(e,o),Q(c,e,null),g(e,h),g(e,u),m=!0},p:k,i(_){m||(J(c.$$.fragment,_),m=!0)},o(_){st(c.$$.fragment,_),m=!1},d(_){_&&b(e),U(c)}}}class yt extends Y{constructor(e){super(),X(this,e,null,mt,z,{})}}new yt({target:document.getElementById("app")});
