(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0478":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function o(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function s(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,o)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(s.length>1){var c=s.pop();u=s.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=s[0];console[a](u)}n.r(e),n.d(e,"log",(function(){return a})),n.d(e,"default",(function(){return s}))},3751:function(t,e){t.exports="/static/esand_logo.png"},7280:function(t,e,n){"use strict";n("755e");var r=o(n("8bbf")),i=o(n("aaae"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.config.productionTip=!1,i.default.mpType="app";var c=new r.default(s({},i.default));c.$mount()},"755e":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("f169").default)}))},"7e64":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",[r("view",{},[r("image",{staticClass:t._$s(2,"sc","esand_logo"),attrs:{src:t._$s(2,"a-src",n("3751")),_i:2}})]),r("view",{staticClass:t._$s(3,"sc","uni-list"),attrs:{_i:3}},[r("radio-group",{attrs:{_i:4},on:{change:t.radioChange}},t._l(t._$s(5,"f",{forItems:t.items}),(function(e,n,i,o){return r("label",{key:t._$s(5,"f",{forIndex:i,key:e.value}),staticClass:t._$s("5-"+o,"sc","uni-list-cell uni-list-cell-pd radio-group"),attrs:{_i:"5-"+o}},[r("radio",{attrs:{value:t._$s("6-"+o,"a-value",e.value),checked:t._$s("6-"+o,"a-checked",n===t.livingType-1),_i:"6-"+o}}),r("view",[t._v(t._$s("7-"+o,"t0-0",t._s(e.name)))])])})),0)]),r("view",{staticClass:t._$s(8,"sc","btn-row"),attrs:{_i:8}},[r("button",{staticClass:t._$s(9,"sc","primary item"),attrs:{_i:9},on:{click:function(e){return t.startVerify()}}})]),r("div",{},[r("textarea",{attrs:{value:t._$s(11,"a-value",t.msg),_i:11}})])])},o=[]},"8a7c":function(t,e,n){"use strict";n.r(e);var r=n("0478"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"8bbf":function(t,e){t.exports=Vue},"9c80":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("Esand-LivingDetection"),r="\u66ff\u6362\u6210\u60a8\u81ea\u5df1\u7684APPCODE",i={data:function(){return{msg:"logs",items:[{value:"1",name:"\u8fdc\u8fd1"},{value:"2",name:"\u7728\u773c"},{value:"3",name:"\u6447\u5934"},{value:"4",name:"\u70b9\u5934"},{value:"5",name:"\u5f20\u5634"}],livingType:2}},methods:{startVerify:function(e){var i=n.verifyInit({livingType:this.livingType,progressStaGradient:"#1781b5",progressEndGradient:"#66a9c9",progressBgColor:"#DDDDDD",backGroundColor:"#FFFFFF",textColor:"#222222",progressColor:"#0000FF",circleBackWidth:5});if("ELD_SUCCESS"==i.code){var o=this;uni.request({url:"https://eface.market.alicloudapi.com/init",method:"POST",header:{Authorization:"APPCODE "+r,"X-Ca-Nonce":o.randomString(8),"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:{initMsg:i.data},success:function(e){"0000"==e.data.code?n.startLivingDetect({token:e.data.token},(function(e){uni.request({url:"https://eface.market.alicloudapi.com/verify",method:"POST",header:{Authorization:"APPCODE "+r,"X-Ca-Nonce":o.randomString(8),"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:{token:e.token,verifyMsg:e.data},success:function(t){o.msg=JSON.stringify(t.data)},fail:function(e){return t("error","\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25"+JSON.stringify(e)," at pages/index/index.vue:139"),JSON.stringify(e.data)}})})):o.msg="\u83b7\u53d6token\u5931\u8d25\uff1a"+e.data.msg},fail:function(e){return t("error","\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25"+JSON.stringify(e)," at pages/index/index.vue:147"),JSON.stringify(e.data)}})}else this.msg="\u6d3b\u4f53\u68c0\u6d4b\u521d\u59cb\u5316\u5931\u8d25\uff1a"+i.msg},randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,r="",i=0;i<t;i++)r+=e.charAt(Math.floor(Math.random()*n));return r="LDT_"+r,r},radioChange:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].value===t.target.value){this.livingType=e+1;break}}}};e.default=i}).call(this,n("0de9")["default"])},aaae:function(t,e,n){"use strict";n.r(e);var r=n("8a7c");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,a,s,u,c=n("f0c5"),l=Object(c["a"])(r["default"],o,a,!1,null,null,null,!1,s,u);e["default"]=l.exports},c868:function(t,e,n){"use strict";n.r(e);var r=n("9c80"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s,u,c){var l,f="function"===typeof t?t.options:t;if(u){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(f.components,p)&&(f.components[p]=u[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,e){return l.call(e),v(t,e)}}else{var g=f.beforeCreate;f.beforeCreate=g?[].concat(g,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},f169:function(t,e,n){"use strict";n.r(e);var r=n("7e64"),i=n("c868");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports}},[["7280","app-config"]]]);