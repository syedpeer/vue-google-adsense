/*! vue-google-adsense v.1.1.0 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vuegoogleadsense",[],e):"object"==typeof exports?exports.vuegoogleadsense=e():t.vuegoogleadsense=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e){t.exports=function(t,e,a,n,s,o){var r,i=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(r=t,i=t.default);var l="function"==typeof i?i.options:i;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),a&&(l.functional=!0),s&&(l._scopeId=s);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,f=u?l.render:l.beforeCreate;u?(l._injectStyles=c,l.render=function(t,e){return c.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:i,options:l}}},function(t,e,a){"use strict";var n=a(7);e.a={props:{rootClass:{type:String,default:"adswrapper"},dataAdClient:{type:String,default:""},dataAdSlot:{type:String,default:""}},data:function(){return{ADS_SCRIPT:n.a.ADS_SCRIPT}},mounted:function(){}}},function(t,e,a){"use strict";var n=a(1);e.a={name:"Adsense",mixins:[n.a]}},function(t,e,a){"use strict";var n=a(1);e.a={name:"InArticleAdsense",mixins:[n.a]}},function(t,e,a){"use strict";var n=a(1);e.a={name:"InFeedAdsense",mixins:[n.a],props:{dataAdLayoutKey:{type:String,default:"-fg+5n+6t-e7+r"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),s=a(9),o=a(11),r={install:function(t){t.component(n.a.name,n.a)}},i={install:function(t){t.component(s.a.name,s.a)}},d={install:function(t){t.component(o.a.name,o.a)}};n.a.install=r.install,s.a.install=i.install,o.a.install=d.install,e.default={Adsense:n.a,InArticleAdsense:s.a,InFeedAdsense:o.a}},function(t,e,a){"use strict";var n=a(2),s=a(8),o=a(0),r=o(n.a,s.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";e.a={ADS_SCRIPT:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.rootClass},[a("script2",{attrs:{type:"text/javascript",async:"",src:t.ADS_SCRIPT}}),t._v(" "),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-layout-key":t.dataAdLayoutKey,"data-ad-client":t.dataAdClient,"data-ad-slot":t.dataAdSlot,"data-ad-format":"auto"}}),t._v(" "),a("script2",[t._v("\n    (adsbygoogle = window.adsbygoogle || []).push({});\n  ")])],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},function(t,e,a){"use strict";var n=a(3),s=a(10),o=a(0),r=o(n.a,s.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.rootClass},[a("script2",{attrs:{type:"text/javascript",async:"",src:t.ADS_SCRIPT}}),t._v(" "),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-layout-key":t.dataAdLayoutKey,"data-ad-client":t.dataAdClient,"data-ad-slot":t.dataAdSlot}}),t._v(" "),a("script2",[t._v("\n    (adsbygoogle = window.adsbygoogle || []).push({});\n  ")])],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},function(t,e,a){"use strict";var n=a(4),s=a(12),o=a(0),r=o(n.a,s.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.rootClass},[a("script2",{attrs:{type:"text/javascript",async:"",src:t.ADS_SCRIPT}}),t._v(" "),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-format":"fluid","data-ad-layout-key":t.dataAdLayoutKey,"data-ad-client":t.dataAdClient,"data-ad-slot":t.dataAdSlot}}),t._v(" "),a("script2",[t._v("\n    (adsbygoogle = window.adsbygoogle || []).push({});\n  ")])],1)},s=[],o={render:n,staticRenderFns:s};e.a=o}])});
//# sourceMappingURL=vuegoogleadsense.dist.js.map