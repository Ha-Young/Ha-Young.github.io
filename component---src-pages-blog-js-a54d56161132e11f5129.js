(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+6XX":function(t,e,r){var n=r("y1pI");t.exports=function(t){return n(this.__data__,t)>-1}},"1hJj":function(t,e,r){var n=r("e4Nc"),o=r("ftKO"),a=r("3A9y");function i(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},"3A9y":function(t,e){t.exports=function(t){return this.__data__.has(t)}},"4kuk":function(t,e,r){var n=r("SfRM"),o=r("Hvzi"),a=r("u8Dt"),i=r("ekgI"),c=r("JSQU");function u(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},"7h0T":function(t,e,r){var n=r("XKFU");n(n.S,"Number",{isNaN:function(t){return t!=t}})},"7tbW":function(t,e,r){var n=r("LGYb");t.exports=function(t){return t&&t.length?n(t):[]}},"8jRI":function(t,e,r){"use strict";r("pIFo"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("SRfc"),r("Oyvg");var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],a(r),a(n))}function i(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=a(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var a=i(n[0]);a!==n[0]&&(r[n[0]]=a)}n=o.exec(t)}r["%C2"]="�";for(var c=Object.keys(r),u=0;u<c.length;u++){var s=c[u];t=t.replace(new RegExp(s,"g"),r[s])}return t}(t)}}},"8yz6":function(t,e,r){"use strict";r("V+eJ"),t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},EpBk:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},Gy9e:function(t,e,r){},H8j4:function(t,e,r){var n=r("QkVE");t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},Hvzi:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},J4zp:function(t,e,r){var n=r("wTVA"),o=r("m0LI"),a=r("ZhPi"),i=r("wkBT");t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()}},JHgL:function(t,e,r){var n=r("QkVE");t.exports=function(t){return n(this,t).get(t)}},JSQU:function(t,e,r){var n=r("YESw");t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},KMkd:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},LGYb:function(t,e,r){var n=r("1hJj"),o=r("jbM+"),a=r("Xt/L"),i=r("xYSL"),c=r("dQpi"),u=r("rEGp");t.exports=function(t,e,r){var s=-1,f=o,l=t.length,p=!0,d=[],y=d;if(r)p=!1,f=a;else if(l>=200){var v=e?null:c(t);if(v)return u(v);p=!1,f=i,y=new n}else y=e?[]:d;t:for(;++s<l;){var h=t[s],m=e?e(h):h;if(h=r||0!==h?h:0,p&&m==m){for(var g=y.length;g--;)if(y[g]===m)continue t;e&&y.push(m),d.push(h)}else f(y,m,r)||(y!==d&&y.push(m),d.push(h))}return d}},O92f:function(t,e,r){},Pmem:function(t,e,r){"use strict";r("a1Th"),r("h7Nl"),r("Btvt"),r("pIFo"),t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},QkVE:function(t,e,r){r("bWfx");var n=r("EpBk");t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||i()}},SfRM:function(t,e,r){var n=r("YESw");t.exports=function(){this.__data__=n?n(null):{},this.size=0}},Tze0:function(t,e,r){"use strict";r("qncB")("trim",(function(t){return function(){return t(this,3)}}))},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},XhDg:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("q1tI"),o=r("rY18");function a(){Object(n.useEffect)((function(){return o.c(),function(){o.b()}}),[]),Object(n.useEffect)((function(){o.d()}))}},Xi7e:function(t,e,r){var n=r("KMkd"),o=r("adU4"),a=r("tMB7"),i=r("+6XX"),c=r("Z8oC");function u(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},"Xt/L":function(t,e){t.exports=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}},YESw:function(t,e,r){var n=r("Cwc5")(Object,"create");t.exports=n},"Z/JJ":function(t,e,r){},Z8oC:function(t,e,r){var n=r("y1pI");t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},aGs0:function(t,e,r){},adU4:function(t,e,r){var n=r("y1pI"),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)}},"cr+I":function(t,e,r){"use strict";r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("h7Nl"),r("0l/t"),r("Z2Ku"),r("L9s1");var n=r("J4zp");r("DNiP"),r("hHhE"),r("91GP"),r("Tze0"),r("7h0T"),r("xfY5"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("Vd3H"),r("LK8F"),r("bWfx"),r("KKXr"),r("V+eJ"),r("pIFo");var o=r("RIqP");function a(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=r("Pmem"),u=r("8jRI"),s=r("8yz6");function f(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function p(t,e){return e.decode?u(t):t}function d(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function y(t){var e=(t=d(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function v(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){f((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.split("").indexOf(t.arrayFormatSeparator)>-1?r.split(t.arrayFormatSeparator).map((function(e){return p(e,t)})):null===r?r:p(r,t);n[e]=o};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;var i,c=a(t.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value,l=s(e.decode?u.replace(/\+/g," "):u,"="),d=n(l,2),y=d[0],h=d[1];h=void 0===h?null:["comma","separator"].includes(e.arrayFormat)?h:p(h,e),r(p(y,e),h,o)}}catch(x){c.e(x)}finally{c.f()}for(var m=0,g=Object.keys(o);m<g.length;m++){var b=g[m],E=o[b];if("object"==typeof E&&null!==E)for(var _=0,w=Object.keys(E);_<w.length;_++){var j=w[_];E[j]=v(E[j],e)}else o[b]=v(E,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(t,e){var r=o[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(r):t[e]=r,t}),Object.create(null))}e.extract=y,e.parse=h,e.stringify=function(t,e){if(!t)return"";f((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var a=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[l(e,t),"[",a,"]"].join("")]:[[l(e,t),"[",l(a,t),"]=",l(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[l(e,t),"[]"].join("")]:[[l(e,t),"[]=",l(n,t)].join("")])}};case"comma":case"separator":return function(e){return function(r,n){return null==n||0===n.length?r:0===r.length?[[l(e,t),"=",l(n,t)].join("")]:[[r,l(n,t)].join(t.arrayFormatSeparator)]}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[l(e,t)]:[[l(e,t),"=",l(n,t)].join("")])}}}}(e),a={},i=0,c=Object.keys(t);i<c.length;i++){var u=c[i];r(u)||(a[u]=t[u])}var s=Object.keys(a);return!1!==e.sort&&s.sort(e.sort),s.map((function(r){var o=t[r];return void 0===o?"":null===o?l(r,e):Array.isArray(o)?o.reduce(n(r),[]).join("&"):l(r,e)+"="+l(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=s(t,"#"),o=n(r,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:h(y(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:p(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign({encode:!0,strict:!0},r);var n=d(t.url).split("?")[0]||"",o=e.extract(t.url),a=e.parse(o,{sort:!1}),i=Object.assign(a,t.query),c=e.stringify(i,r);c&&(c="?".concat(c));var u=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(u="#".concat(l(t.fragmentIdentifier,r))),"".concat(n).concat(c).concat(u)}},dQpi:function(t,e,r){var n=r("yGk4"),o=r("vN+2"),a=r("rEGp"),i=n&&1/a(new n([,-0]))[1]==1/0?function(t){return new n(t)}:o;t.exports=i},e4Nc:function(t,e,r){var n=r("fGT3"),o=r("k+1r"),a=r("JHgL"),i=r("pSRY"),c=r("H8j4");function u(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},ebwN:function(t,e,r){var n=r("Cwc5")(r("Kz5y"),"Map");t.exports=n},ekgI:function(t,e,r){var n=r("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},fGT3:function(t,e,r){var n=r("4kuk"),o=r("Xi7e"),a=r("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},ftKO:function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},"k+1r":function(t,e,r){var n=r("QkVE");t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},lEMF:function(t,e,r){},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},m0LI:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}},pSRY:function(t,e,r){var n=r("QkVE");t.exports=function(t){return n(this,t).has(t)}},rEGp:function(t,e,r){r("8+KV"),t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}},rY18:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"c",(function(){return s})),r.d(e,"b",(function(){return f})),r.d(e,"d",(function(){return l}));r("VRzm"),r("Btvt");var n,o=r("JqEL"),a="observed";function i(t){return t.filter((function(t){return t.isIntersecting})).forEach((function(t){var e=t.target;return o.a(e,"visible")}))}function c(){return o.e("."+a).forEach((function(t){return n.observe(t)}))}function u(){if(!n)throw Error("Not found IntersectionObserver instance");return Promise.resolve(n.disconnect())}function s(){return n=new IntersectionObserver(i,{root:o.d("#___gatsby"),rootMargin:"20px",threshold:.8}),c()}function f(){return u().then((function(){return n=null}))}function l(){return u().then(c)}},tMB7:function(t,e,r){var n=r("y1pI");t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},u8Dt:function(t,e,r){var n=r("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},vx99:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return N}));var n=r("7tbW"),o=r.n(n),a=r("q1tI"),i=r.n(a),c=r("lbRd"),u=r("p3AD"),s=(r("O92f"),function(t){var e=t.title,r=t.selectedCategory,n=t.onClick,o=t.scrollToCenter,c=Object(a.useRef)(null),u=Object(a.useCallback)((function(){o(c),n(e)}),[c]);return Object(a.useEffect)((function(){r===e&&o(c)}),[r,c]),i.a.createElement("li",{ref:c,className:"item",role:"tab","aria-selected":r===e?"true":"false"},i.a.createElement("div",{onClick:u},e))}),f=function(t){var e=t.categories,r=t.category,n=t.selectCategory,o=Object(a.useRef)(null),c=Object(a.useCallback)((function(t){var e=t.current.offsetWidth,r=o.current,n=r.scrollLeft,a=r.offsetWidth,i=n+(t.current.getBoundingClientRect().left-o.current.getBoundingClientRect().left)-a/2+e/2;o.current.scroll({left:i,top:0,behavior:"smooth"})}),[o]);return i.a.createElement("ul",{ref:o,className:"category-container",role:"tablist",id:"category",style:{margin:"0 -"+Object(u.a)(3/4)}},i.a.createElement(s,{title:"All",selectedCategory:r,onClick:n,scrollToCenter:c}),e.map((function(t,e){return i.a.createElement(s,{key:e,title:t,selectedCategory:r,onClick:n,scrollToCenter:c})})))},l=function(t){var e=t.title,r=t.selectedCategory,n=t.onClick,o=Object(a.useCallback)((function(){n(e)}),[]);return i.a.createElement("li",{className:"item-side","aria-selected":r===e?"true":"false"},i.a.createElement("span",{onClick:o},e))},p=(r("lEMF"),function(t){var e=t.categories,r=t.category,n=t.selectCategory;return i.a.createElement("div",{className:"category-side-wrapper"},i.a.createElement("div",{className:"category-side-container"},i.a.createElement("div",{className:"category-side"},i.a.createElement("h3",null,"Categories"),i.a.createElement("ul",{className:"category-side-list"},i.a.createElement(l,{title:"All",selectedCategory:r,onClick:n}),e.map((function(t,e){return i.a.createElement(l,{key:e,title:t,selectedCategory:r,onClick:n})}))))))}),d=(r("Z/JJ"),i.a.memo((function(t){var e=t.children;return i.a.createElement("div",{className:"thumbnail-container"},e)}))),y=function(t){var e=t.tag,r=t.onClick;return i.a.createElement("li",{className:"tag"},i.a.createElement("div",{onClick:r},e))},v=(r("Gy9e"),function(t){var e=t.tags;return console.log(e),i.a.createElement("ul",{className:"tags"},e.map((function(t,e){return i.a.createElement(y,{key:e,tag:t,onClick:function(){console.log(t,"clicked")}})})))}),h=r("Wbzz"),m=r("rY18"),g=(r("aGs0"),function(t){var e=t.node;return i.a.createElement("div",{className:"thumbnail "+m.a},i.a.createElement("div",{key:e.fields.slug},i.a.createElement(h.Link,{to:e.fields.slug},i.a.createElement("h3",null,e.frontmatter.title||e.fields.slug)," "),e.frontmatter.tags&&i.a.createElement(v,{tags:e.frontmatter.tags}),i.a.createElement(h.Link,{to:e.fields.slug},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))))}),b=r("WlAH"),E=function(t){var e=t.posts,r=t.countOfInitialPost,n=t.count,o=t.category,c=Object(a.useMemo)((function(){return e.filter((function(t){var e=t.node;return o===b.a.ALL||e.frontmatter.category===o})).slice(0,n*r)}));return i.a.createElement(d,null,c.map((function(t,e){var r=t.node;return i.a.createElement(g,{node:r,key:"item_"+e})})))},_=r("ivnd"),w=(r("OG14"),r("cr+I")),j=r.n(w),x=r("EXIE");function k(){var t=Object(a.useState)(b.a.ALL),e=t[0],r=t[1],n=function(){window.scrollY>200&&x.b(200)},o=Object(a.useCallback)((function(t){r(t),n(),window.history.pushState({category:t},"",window.location.pathname+"?"+j.a.stringify({category:t}))}),[]),i=Object(a.useCallback)((function(t){void 0===t&&(t=!0);var e=j.a.parse(location.search).category,o=null==e?b.a.ALL:e;r(o),t&&n()}),[]);return Object(a.useEffect)((function(){return x.c(),function(){x.a()}}),[]),Object(a.useEffect)((function(){return window.addEventListener("popstate",i),function(){window.removeEventListener("popstate",i)}}),[]),Object(a.useEffect)((function(){i(!1)}),[]),[e,o]}var O=r("XhDg"),C=r("2w9V");var I=r("hpys"),S=r("JqEL");e.default=function(t){var e,r=t.data,n=t.location,u=r.site.siteMetadata,s=u.configs.countOfInitialPost,l=r.allMarkdownRemark.edges,d=Object(a.useMemo)((function(){return o()(l.map((function(t){return t.node.frontmatter.category})))}),[]),y=function(){var t=C.a(1),e=Object(a.useState)(t),r=e[0],n=e[1],o=Object(a.useRef)(r);return Object(a.useEffect)((function(){o.current=r,C.c(r)}),[r]),[r,o,function(){return n((function(t){return t+1}))}]}(),v=y[0],h=y[1],m=y[2],g=k(),w=g[0],j=g[1];return Object(O.a)(),e=function(){var t=window.scrollY+window.innerHeight,e=function(){return function(t){return S.c()-t}(t)<80};return function(t,e){var r=e.dismissCondition,n=void 0===r?function(){return!1}:r,o=e.triggerCondition,a=void 0===o?function(){return!0}:o;if(!t)throw Error("Invalid required arguments");var i=!1;return function(){if(!i)return i=!0,requestAnimationFrame((function(){if(!n())return a()?(i=!1,t()):void 0;i=!1}))}}(m,{dismissCondition:function(){return!e()},triggerCondition:function(){return e()&&l.length>h.current*s}})()},Object(a.useEffect)((function(){return window.addEventListener("scroll",e,{passive:!1}),function(){window.removeEventListener("scroll",e,{passive:!1})}}),[]),i.a.createElement(I.a,{location:n,title:u.title},i.a.createElement(_.a,{title:b.c,keywords:u.keywords}),i.a.createElement(c.a,null),i.a.createElement(p,{categories:d,category:w,selectCategory:j}),i.a.createElement(f,{categories:d,category:w,selectCategory:j}),i.a.createElement(E,{posts:l,countOfInitialPost:s,count:v,category:w}))};var N="539662314"},wTVA:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},wkBT:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},xYSL:function(t,e){t.exports=function(t,e){return t.has(e)}},y1pI:function(t,e,r){var n=r("ljhN");t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},yGk4:function(t,e,r){var n=r("Cwc5")(r("Kz5y"),"Set");t.exports=n}}]);
//# sourceMappingURL=component---src-pages-blog-js-a54d56161132e11f5129.js.map