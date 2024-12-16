(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7031)}])},627:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return o},ACTION_PREFETCH:function(){return s},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return u},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let l="refresh",o="navigate",i="restore",u="server-patch",s="prefetch",a="hmr-refresh",c="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5157:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(7677),l=r(4848),o=n._(r(6540)),i=r(6847),u=r(7785),s=r(2772),a=r(1278),c=r(6185),f=r(7644),d=r(9258),p=r(6334),h=r(5157),m=r(296),_=r(627),j=r(1903),v=new Set;function x(e,t,r,n,l,o){if(o||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!o){let l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(l))return;v.add(l)}(async()=>o?e.prefetch(t,l):e.prefetch(t,r,n))().catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:s,as:v,children:g,prefetch:y=null,passHref:C,replace:N,shallow:O,scroll:w,locale:E,onClick:P,onMouseEnter:M,onTouchStart:R,legacyBehavior:T=!1,...S}=e;r=g,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,l.jsx)("a",{children:r}));let I=o.default.useContext(f.RouterContext),k=o.default.useContext(d.AppRouterContext),L=null!=I?I:k,A=!I,F=!1!==y,D=null===y?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:H,as:U}=o.default.useMemo(()=>{if(!I){let e=b(s);return{href:e,as:v?b(v):e}}let[e,t]=(0,i.resolveHref)(I,s,!0);return{href:e,as:v?(0,i.resolveHref)(I,v):t||e}},[I,s,v]),K=o.default.useRef(H),q=o.default.useRef(U);T&&(n=o.default.Children.only(r));let B=T?n&&"object"==typeof n&&n.ref:t,[Y,G,V]=(0,p.useIntersection)({rootMargin:"200px"}),W=o.default.useCallback(e=>{(q.current!==U||K.current!==H)&&(V(),q.current=U,K.current=H),Y(e)},[U,H,V,Y]),X=(0,j.useMergedRef)(W,B);o.default.useEffect(()=>{L&&G&&F&&x(L,H,U,{locale:E},{kind:D},A)},[U,H,G,E,F,null==I?void 0:I.locale,L,A,D]);let z={ref:X,onClick(e){T||"function"!=typeof P||P(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,l,i,s,a,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:i,locale:a,scroll:e}):t[l?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(d):d()}(e,L,H,U,N,O,w,E,A)},onMouseEnter(e){T||"function"!=typeof M||M(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(F||!A)&&x(L,H,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:D},A)},onTouchStart:function(e){T||"function"!=typeof R||R(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(F||!A)&&x(L,H,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:D},A)}};if((0,a.isAbsoluteUrl)(U))z.href=U;else if(!T||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);z.href=t||(0,m.addBasePath)((0,c.addLocale)(U,e,null==I?void 0:I.defaultLocale))}return T?o.default.cloneElement(n,z):(0,l.jsx)("a",{...S,...z,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(6540),l=r(4959),o="function"==typeof IntersectionObserver,i=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,a=s||!o,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(a||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let l=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:l},u.push(r),i.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),i.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,l.requestIdleCallback)(()=>f(!0));return()=>(0,l.cancelIdleCallback)(e)}},[a,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});let n=r(6540);function l(e,t){let r=(0,n.useRef)(()=>{}),l=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),l.current()):(r.current=o(e,n),l.current=o(t,n))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7031:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(4848),l=r(4019),o=r.n(l),i=r(6540),u=r(1106),s=r.n(u);function a(){let[e,t]=(0,i.useState)([]),[r,l]=(0,i.useState)({name:"",review:""}),u=e=>{let{name:t,value:n}=e.target;l({...r,[t]:n})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:"これは授業の課題で作成したテストサイトです。"}),(0,n.jsx)("h1",{className:o().misemei,children:"MaNaova"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{className:o().ul,children:[(0,n.jsxs)("li",{className:o().li,children:[(0,n.jsx)(s(),{href:"./shohin1",children:(0,n.jsx)("img",{className:o().img,src:"/img/joma.jpg",alt:"香水"})}),(0,n.jsx)("h2",{children:"perfume"})]}),(0,n.jsxs)("li",{className:o().li,children:[(0,n.jsx)("a",{href:"/shohin2",children:(0,n.jsx)("img",{className:o().img,src:"/img/waco.jpg",alt:"ピアス"})}),(0,n.jsx)("h2",{children:"pierce"})]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{className:o().ul,children:[(0,n.jsxs)("li",{className:o().li,children:[(0,n.jsx)("a",{href:"/shohin3",children:(0,n.jsx)("img",{className:o().img,src:"/img/alyx1.jpg",alt:"ネックレス"})}),(0,n.jsx)("h2",{children:"necklace"})]}),(0,n.jsxs)("li",{className:o().li,children:[(0,n.jsx)(s(),{href:"/shohin4/",children:(0,n.jsx)("img",{className:o().img,src:"/img/gutti2.jpg",alt:"眼鏡"})}),(0,n.jsx)("h2",{children:"eyewear"})]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("section",{className:o().reviewSection,children:[(0,n.jsx)("h3",{children:"口コミを書く"}),(0,n.jsxs)("form",{className:o().reviewForm,onSubmit:e=>{e.preventDefault(),r.name&&r.review?(t(e=>[...e,r]),l({name:"",review:""})):alert("お名前と口コミを入力してください。")},children:[(0,n.jsx)("label",{htmlFor:"name",children:"お名前:"}),(0,n.jsx)("input",{type:"text",id:"name",name:"name",value:r.name,onChange:u,className:o().input,required:!0}),(0,n.jsx)("label",{htmlFor:"review",children:"口コミ:"}),(0,n.jsx)("textarea",{id:"review",name:"review",value:r.review,onChange:u,className:o().textarea,required:!0}),(0,n.jsx)("button",{type:"submit",className:o().submitButton,children:"送信"})]})]}),(0,n.jsxs)("section",{className:o().reviewDisplaySection,children:[(0,n.jsx)("h3",{children:"お客様の口コミ"}),0===e.length?(0,n.jsx)("p",{children:"まだ口コミはありません。最初の口コミを書いてみませんか？"}):(0,n.jsx)("ul",{className:o().reviewList,children:e.map((e,t)=>(0,n.jsxs)("li",{className:o().reviewItem,children:[(0,n.jsx)("strong",{children:e.name})," さん:",(0,n.jsx)("p",{children:e.review})]},t))})]})]})}},4019:e=>{e.exports={misemei:"Component_misemei__dg5NH",ul:"Component_ul__xqTLS",li:"Component_li__uWqia",img:"Component_img__iLZYY",reviewSection:"Component_reviewSection__C4BGO",reviewForm:"Component_reviewForm__IrCQS",input:"Component_input__jHipD",textarea:"Component_textarea__nlKgE",submitButton:"Component_submitButton__3D185",reviewDisplaySection:"Component_reviewDisplaySection__pqPYe",reviewList:"Component_reviewList__FNCOx",reviewItem:"Component_reviewItem__NdW6G"}},1106:(e,t,r)=>{e.exports=r(6397)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(7276)),_N_E=e.O()}]);