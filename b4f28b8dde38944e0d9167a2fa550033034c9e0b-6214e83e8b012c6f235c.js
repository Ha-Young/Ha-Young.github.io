/*! For license information please see b4f28b8dde38944e0d9167a2fa550033034c9e0b-6214e83e8b012c6f235c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1jzt":function(t,e,o){(function(o){var n,r;r=void 0!==o?o:"undefined"!=typeof window?window:this,void 0===(n=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},o=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var o in e){if(!e.hasOwnProperty(o))return;t[o]=e[o]}})),t},n=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,o=String(t),n=o.length,r=-1,i="",a=o.charCodeAt(0);++r<n;){if(0===(e=o.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===a?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?o.charAt(r):"\\"+o.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(e,o,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,o))},a=function(e,o,n,r){if(o.emitEvents&&"function"==typeof t.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:r}});document.dispatchEvent(i)}};return function(l,c){var s,u,f,d,m={cancelScroll:function(t){cancelAnimationFrame(d),d=null,t||a("scrollCancel",s)},animateScroll:function(n,l,c){m.cancelScroll();var u=o(s||e,c||{}),h="[object Number]"===Object.prototype.toString.call(n),p=h||!n.tagName?null:n;if(h||p){var v=t.pageYOffset;u.header&&!f&&(f=document.querySelector(u.header));var y,g,b,E,S,w,O,I,L=function(e){return e?(o=e,parseInt(t.getComputedStyle(o).height,10)+e.offsetTop):0;var o}(f),T=h?n:function(e,o,n,i){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-o-n,0),i&&(a=Math.min(a,r()-t.innerHeight)),a}(p,L,parseInt("function"==typeof u.offset?u.offset(n,l):u.offset,10),u.clip),x=T-v,M=r(),C=0,N=(y=x,b=(g=u).speedAsDuration?g.speed:Math.abs(y/1e3*g.speed),g.durationMax&&b>g.durationMax?g.durationMax:g.durationMin&&b<g.durationMin?g.durationMin:parseInt(b,10));0===t.pageYOffset&&t.scrollTo(0,0),O=n,I=u,h||history.pushState&&I.updateURL&&history.pushState({smoothScroll:JSON.stringify(I),anchor:O.id},document.title,O===document.documentElement?"#top":"#"+O.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?i(n,Math.floor(T),!1):(a("scrollStart",u,n,l),m.cancelScroll(!0),t.requestAnimationFrame((function e(o){var r,c,s;E||(E=o),C+=o-E,w=v+x*(c=S=1<(S=0===N?0:C/N)?1:S,"easeInQuad"===(r=u).easing&&(s=c*c),"easeOutQuad"===r.easing&&(s=c*(2-c)),"easeInOutQuad"===r.easing&&(s=c<.5?2*c*c:(4-2*c)*c-1),"easeInCubic"===r.easing&&(s=c*c*c),"easeOutCubic"===r.easing&&(s=--c*c*c+1),"easeInOutCubic"===r.easing&&(s=c<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1),"easeInQuart"===r.easing&&(s=c*c*c*c),"easeOutQuart"===r.easing&&(s=1- --c*c*c*c),"easeInOutQuart"===r.easing&&(s=c<.5?8*c*c*c*c:1-8*--c*c*c*c),"easeInQuint"===r.easing&&(s=c*c*c*c*c),"easeOutQuint"===r.easing&&(s=1+--c*c*c*c*c),"easeInOutQuint"===r.easing&&(s=c<.5?16*c*c*c*c*c:1+16*--c*c*c*c*c),r.customEasing&&(s=r.customEasing(c)),s||c),t.scrollTo(0,Math.floor(w)),function(e,o){var r=t.pageYOffset;if(e==o||r==o||(v<o&&t.innerHeight+r)>=M)return m.cancelScroll(!0),i(n,o,h),a("scrollStop",u,n,l),!(d=E=null)}(w,T)||(d=t.requestAnimationFrame(e),E=o)})))}}},h=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(u=e.target.closest(l))&&"a"===u.tagName.toLowerCase()&&!e.target.closest(s.ignore)&&u.hostname===t.location.hostname&&u.pathname===t.location.pathname&&/#/.test(u.href)){var o,r;try{o=n(decodeURIComponent(u.hash))}catch(e){o=n(u.hash)}if("#"===o){if(!s.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(o);(r=r||"#top"!==o?r:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var o=t.location.hash;o=o||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:o||t.pageYOffset},document.title,o||t.location.href)}}(s),m.animateScroll(r,u))}},p=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||m.animateScroll(e,null,{updateURL:!1})}};return m.destroy=function(){s&&(document.removeEventListener("click",h,!1),t.removeEventListener("popstate",p,!1),m.cancelScroll(),d=f=u=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),s=o(e,c||{}),f=s.header?document.querySelector(s.header):null,document.addEventListener("click",h,!1),s.updateURL&&s.popstate&&t.addEventListener("popstate",p,!1)}(),m}}(r)}.apply(e,[]))||(t.exports=n)}).call(this,o("yLpj"))},"9H8W":function(t,e,o){},EXIE:function(t,e,o){"use strict";o.d(e,"c",(function(){return c})),o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return u}));var n,r=o("1jzt"),i=o.n(r),a=o("dwco"),l=o.n(a);function c(){return l.a.polyfill(),n=new i.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function s(){if(!n)throw Error("Not founded SmoothScroll instance");return n.destroy(),n=null}function u(t){if(!n)throw Error("Not founded SmoothScroll instance");return n.animateScroll(t),n}},JZBx:function(t,e,o){},Ub9Y:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o("q1tI");function r(t){Object(n.useEffect)((function(){return window.addEventListener("scroll",t,{passive:!1}),function(){window.removeEventListener("scroll",t,{passive:!1})}}),[])}},cTxA:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o("q1tI"),r=o.n(n),i=o("Ub9Y"),a=o("pBHt"),l=o("JqEL"),c=(o("JZBx"),function(t){var e=t.isOnPage,o=function(){var t=l.h();l.e(".scroll-indicator-mini").textContent=t+"%"};return Object(i.a)((function(){return a.a(o,{})()})),e?r.a.createElement("div",{className:"scroll-indicator-mini on-page"},"0%"):r.a.createElement("div",{className:"scroll-indicator-mini on-content"},"0%")})},dwco:function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,n=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=d(this),n=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==e.body?(h.call(this,o,o.scrollLeft+i.left-n.left,o.scrollTop+i.top-n.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function u(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function f(t){var e=s(t,"Y")&&u(t,"Y"),o=s(t,"X")&&u(t,"X");return e||o}function d(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host;return t}function m(e){var o,n,r,a,l=(i()-e.startTime)/468;a=l=l>1?1:l,o=.5*(1-Math.cos(Math.PI*a)),n=e.startX+(e.x-e.startX)*o,r=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,n,r),n===e.x&&r===e.y||t.requestAnimationFrame(m.bind(t,e))}function h(o,n,a){var c,s,u,f,d=i();o===e.body?(c=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=r.scroll):(c=o,s=o.scrollLeft,u=o.scrollTop,f=l),m({scrollable:c,method:f,startTime:d,startX:s,startY:u,x:n,y:a})}}}}()},lbRd:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o("q1tI"),r=o.n(n),i=o("Wbzz"),a=o("9eSz"),l=o.n(a),c=(o("9H8W"),function(){return r.a.createElement(i.StaticQuery,{query:s,render:function(t){var e=t.site.siteMetadata,o=e.author,n=e.social,a=e.introduction;return r.a.createElement("div",{className:"bio"},r.a.createElement("div",{className:"author"},r.a.createElement("div",{className:"author-description"},r.a.createElement(l.a,{className:"author-image",fixed:t.avatar.childImageSharp.fixed,alt:o,style:{borderRadius:"100%"}}),r.a.createElement("div",{className:"author-name"},r.a.createElement("span",{className:"author-name-prefix"},"Written by"),r.a.createElement(i.Link,{to:"/about",className:"author-name-content"},r.a.createElement("span",null,o)),r.a.createElement("div",{className:"author-introduction"},a),r.a.createElement("p",{className:"author-socials"},n.github&&r.a.createElement("a",{href:"https://github.com/"+n.github},"GitHub"),n.medium&&r.a.createElement("a",{href:"https://medium.com/"+n.medium},"Medium"),n.facebook&&r.a.createElement("a",{href:"https://www.facebook.com/"+n.facebook},"Facebook"),n.linkedin&&r.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedin+"/"},"LinkedIn"))))))}})}),s="1402886152"},pBHt:function(t,e,o){"use strict";function n(t,e){var o=e.dismissCondition,n=void 0===o?function(){return!1}:o,r=e.triggerCondition,i=void 0===r?function(){return!0}:r;if(!t)throw Error("Invalid required arguments");var a=!1;return function(){if(!a)return a=!0,requestAnimationFrame((function(){if(!n())return i()?(a=!1,t()):void 0;a=!1}))}}o.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=b4f28b8dde38944e0d9167a2fa550033034c9e0b-6214e83e8b012c6f235c.js.map