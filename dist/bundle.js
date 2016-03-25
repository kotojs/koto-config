!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.KotoConfig=e():t.KotoConfig=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){return function(e){function n(t,e){if("undefined"==typeof t)return this.configs;if("undefined"==typeof e){if("object"===("undefined"==typeof t?"undefined":(0,u["default"])(t))){for(var n in t)this.configs.hasOwnProperty(n)?this.configs[n]=t[n]:console.warn("config with name "+t+" is not defined.");return this}return this.configs[t]}return this.configs.hasOwnProperty(t)?this.configs[t]=e:console.warn("config with name "+t+" is not defined."),this}return function(e){function r(n){(0,a["default"])(this,r);var o=(0,s["default"])(this,e.call(this,n));return o.configs=(0,p.compile)(t),o}return(0,d["default"])(r,e),r.prototype.config=function(e,r){if("undefined"==typeof e)return n.call(this,e,r);if("undefined"==typeof r){if("object"===("undefined"==typeof e?"undefined":(0,u["default"])(e))){var o=(0,p.validator)(t,e);if(!o)return n.call(this,e,r);throw Error(o)}return n.call(this,e,r)}if(t.hasOwnProperty(e)){var i=(0,p.validator)(t[e],r);if(!i)return n.call(this,e,r);throw Error(i)}return n.call(this,e,r)},r}(e)}}e.__esModule=!0;var i=n(1),u=r(i),f=n(65),a=r(f),c=n(66),s=r(c),l=n(67),d=r(l),p=n(75);e["default"]=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(2),i=r(o),u=n(52),f=r(u),a="function"==typeof f["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};e["default"]="function"==typeof f["default"]&&"symbol"===a(i["default"])?function(t){return"undefined"==typeof t?"undefined":a(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":a(t)}},function(t,e,n){t.exports={"default":n(3),__esModule:!0}},function(t,e,n){n(4),n(48),t.exports=n(45)("iterator")},function(t,e,n){"use strict";var r=n(5)(!0);n(8)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(6),o=n(7);t.exports=function(t){return function(e,n){var i,u,f=String(o(e)),a=r(n),c=f.length;return 0>a||a>=c?t?"":void 0:(i=f.charCodeAt(a),55296>i||i>56319||a+1===c||(u=f.charCodeAt(a+1))<56320||u>57343?t?f.charAt(a):i:t?f.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(9),o=n(10),i=n(25),u=n(15),f=n(26),a=n(27),c=n(28),s=n(44),l=n(46),d=n(45)("iterator"),p=!([].keys&&"next"in[].keys()),y="@@iterator",h="keys",v="values",g=function(){return this};t.exports=function(t,e,n,m,b,w,x){c(n,e,m);var _,O,k,S=function(t){if(!p&&t in M)return M[t];switch(t){case h:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",P=b==v,E=!1,M=t.prototype,T=M[d]||M[y]||b&&M[b],A=T||S(b),F=b?P?S("entries"):A:void 0,N="Array"==e?M.entries||T:T;if(N&&(k=l(N.call(new t)),k!==Object.prototype&&(s(k,j,!0),r||f(k,d)||u(k,d,g))),P&&T&&T.name!==v&&(E=!0,A=function(){return T.call(this)}),r&&!x||!p&&!E&&M[d]||u(M,d,A),a[e]=A,a[j]=g,b)if(_={values:P?A:S(v),keys:w?A:S(h),entries:F},x)for(O in _)O in M||i(M,O,_[O]);else o(o.P+o.F*(p||E),e,_);return _}},function(t,e){t.exports=!0},function(t,e,n){var r=n(11),o=n(12),i=n(13),u=n(15),f="prototype",a=function(t,e,n){var c,s,l,d=t&a.F,p=t&a.G,y=t&a.S,h=t&a.P,v=t&a.B,g=t&a.W,m=p?o:o[e]||(o[e]={}),b=m[f],w=p?r:y?r[e]:(r[e]||{})[f];p&&(n=e);for(c in n)s=!d&&w&&void 0!==w[c],s&&c in m||(l=s?w[c]:n[c],m[c]=p&&"function"!=typeof w[c]?n[c]:v&&s?i(l,r):g&&w[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[f]=t[f],e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[c]=l,t&a.R&&b&&!b[c]&&u(b,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.2.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(14);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(16),o=n(24);t.exports=n(20)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(17),o=n(19),i=n(23),u=Object.defineProperty;e.f=n(20)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(f){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(18);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(20)&&!n(21)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(21)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(18),o=n(11).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(18);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=n(15)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(29),o=n(24),i=n(44),u={};n(15)(u,n(45)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(17),o=n(30),i=n(42),u=n(39)("IE_PROTO"),f=function(){},a="prototype",c=function(){var t,e=n(22)("iframe"),r=i.length,o=">";for(e.style.display="none",n(43).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),c=t.F;r--;)delete c[a][i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(f[a]=r(t),n=new f,f[a]=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(16),o=n(17),i=n(31);t.exports=n(20)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),f=u.length,a=0;f>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(32),o=n(42);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(26),o=n(33),i=n(36)(!1),u=n(39)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),a=0,c=[];for(n in f)n!=u&&r(f,n)&&c.push(n);for(;e.length>a;)r(f,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(34),o=n(7);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(33),o=n(37),i=n(38);t.exports=function(t){return function(e,n,u){var f,a=r(e),c=o(a.length),s=i(u,c);if(t&&n!=n){for(;c>s;)if(f=a[s++],f!=f)return!0}else for(;c>s;s++)if((t||s in a)&&a[s]===n)return t||s;return!t&&-1}}},function(t,e,n){var r=n(6),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(6),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),0>t?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(40)("keys"),o=n(41);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(11),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=n(11).document&&document.documentElement},function(t,e,n){var r=n(16).f,o=n(26),i=n(45)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(40)("wks"),o=n(41),i=n(11).Symbol,u="function"==typeof i;t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}},function(t,e,n){var r=n(26),o=n(47),i=n(39)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e,n){n(49);for(var r=n(11),o=n(15),i=n(27),u=n(45)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;5>a;a++){var c=f[a],s=r[c],l=s&&s.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,e,n){"use strict";var r=n(50),o=n(51),i=n(27),u=n(33);t.exports=n(8)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={"default":n(53),__esModule:!0}},function(t,e,n){n(54),n(64),t.exports=n(12).Symbol},function(t,e,n){"use strict";var r=n(11),o=n(12),i=n(26),u=n(20),f=n(10),a=n(25),c=n(55).KEY,s=n(21),l=n(40),d=n(44),p=n(41),y=n(45),h=n(56),v=n(57),g=n(60),m=n(17),b=n(33),w=n(23),x=n(24),_=n(29),O=n(61),k=n(63),S=n(16),j=k.f,P=S.f,E=O.f,M=r.Symbol,T=r.JSON,A=T&&T.stringify,F=!1,N="prototype",C=y("_hidden"),I=y("toPrimitive"),q={}.propertyIsEnumerable,$=l("symbol-registry"),L=l("symbols"),R=Object[N],W="function"==typeof M,D=r.QObject,K=u&&s(function(){return 7!=_(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(R,e);r&&delete R[e],P(t,e,n),r&&t!==R&&P(R,e,r)}:P,z=function(t){var e=L[t]=_(M[N]);return e._k=t,u&&F&&K(R,t,{configurable:!0,set:function(e){i(this,C)&&i(this[C],t)&&(this[C][t]=!1),K(this,t,x(1,e))}}),e},J=W&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},G=function(t,e,n){return m(t),e=w(e,!0),m(n),i(L,e)?(n.enumerable?(i(t,C)&&t[C][e]&&(t[C][e]=!1),n=_(n,{enumerable:x(0,!1)})):(i(t,C)||P(t,C,x(1,{})),t[C][e]=!0),K(t,e,n)):P(t,e,n)},B=function(t,e){m(t);for(var n,r=v(e=b(e)),o=0,i=r.length;i>o;)G(t,n=r[o++],e[n]);return t},Y=function(t,e){return void 0===e?_(t):B(_(t),e)},Q=function(t){var e=q.call(this,t=w(t,!0));return e||!i(this,t)||!i(L,t)||i(this,C)&&this[C][t]?e:!0},U=function(t,e){var n=j(t=b(t),e=w(e,!0));return!n||!i(L,e)||i(t,C)&&t[C][e]||(n.enumerable=!0),n},H=function(t){for(var e,n=E(b(t)),r=[],o=0;n.length>o;)i(L,e=n[o++])||e==C||e==c||r.push(e);return r},V=function(t){for(var e,n=E(b(t)),r=[],o=0;n.length>o;)i(L,e=n[o++])&&r.push(L[e]);return r},X=function(t){if(void 0!==t&&!J(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),J(e)?void 0:e}),r[1]=e,A.apply(T,r)}},Z=s(function(){var t=M();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))});W||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");return z(p(arguments.length>0?arguments[0]:void 0))},a(M[N],"toString",function(){return this._k}),k.f=U,S.f=G,n(62).f=O.f=H,n(59).f=Q,n(58).f=V,u&&!n(9)&&a(R,"propertyIsEnumerable",Q,!0)),f(f.G+f.W+f.F*!W,{Symbol:M});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;){var nt=tt[et++],rt=o.Symbol,ot=y(nt);nt in rt||P(rt,nt,{value:W?ot:z(ot)})}D&&D[N]&&D[N].findChild||(F=!0),f(f.S+f.F*!W,"Symbol",{"for":function(t){return i($,t+="")?$[t]:$[t]=M(t)},keyFor:function(t){if(J(t))return h($,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){F=!0},useSimple:function(){F=!1}}),f(f.S+f.F*!W,"Object",{create:Y,defineProperty:G,defineProperties:B,getOwnPropertyDescriptor:U,getOwnPropertyNames:H,getOwnPropertySymbols:V}),T&&f(f.S+f.F*(!W||Z),"JSON",{stringify:X}),M[N][I]||n(15)(M[N],I,M[N].valueOf),d(M,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},function(t,e,n){var r=n(41)("meta"),o=n(18),i=n(26),u=n(16).f,f=0,a=Object.isExtensible||function(){return!0},c=!n(21)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},p=function(t){return c&&y.NEED&&a(t)&&!i(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},function(t,e,n){var r=n(31),o=n(33);t.exports=function(t,e){for(var n,i=o(t),u=r(i),f=u.length,a=0;f>a;)if(i[n=u[a++]]===e)return n}},function(t,e,n){var r=n(31),o=n(58),i=n(59);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,f=n(t),a=i.f,c=0;f.length>c;)a.call(t,u=f[c++])&&e.push(u);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(35);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(33),o=n(62).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?f(t):o(r(t))}},function(t,e,n){var r=n(32),o=n(42).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(59),o=n(24),i=n(33),u=n(23),f=n(26),a=n(19),c=Object.getOwnPropertyDescriptor;e.f=n(20)?c:function(t,e){if(t=i(t),e=u(e,!0),a)try{return c(t,e)}catch(n){}return f(t,e)?o(!r.f.call(t,e),t[e]):void 0}},function(t,e){},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(1),i=r(o);e["default"]=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,i["default"])(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(68),i=r(o),u=n(72),f=r(u),a=n(1),c=r(a);e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,c["default"])(e)));t.prototype=(0,f["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i["default"]?(0,i["default"])(t,e):t.__proto__=e)}},function(t,e,n){t.exports={"default":n(69),__esModule:!0}},function(t,e,n){n(70),t.exports=n(12).Object.setPrototypeOf},function(t,e,n){var r=n(10);r(r.S,"Object",{setPrototypeOf:n(71).set})},function(t,e,n){var r=n(18),o=n(17),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(13)(Function.call,n(63).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){t.exports={"default":n(73),__esModule:!0}},function(t,e,n){n(74);var r=n(12).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(10);r(r.S,"Object",{create:n(29)})},function(t,e){"use strict";function n(t,e){switch(t.type){case"boolean":return o(t,e);case"color":return c(t,e);case"number":return f(t,e);case"integer":return a(t,e);case"scale":return s(t,e);case"string":return u(t,e);case"array":return i(t,e);default:throw Error("not a recoginized type")}}function r(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]["default"]);return e}function o(t,e){return"boolean"==typeof e?null:e+" must be a boolean"}function i(t,e){if(Array.isArray(e)){if(t.hasOwnProperty("items"))for(var r=0;r<e.length;r++){var o=n(t.items,e[r]);if(o)return o}return null}return e+" must be an array"}function u(t,e){return"string"==typeof e?t.hasOwnProperty("in")&&t["in"].indexOf(e)<0?e+" must be one of "+t["in"].toString():null:e+" must be a string"}function f(t,e){return"number"!=typeof e?e+" is not a valid number":t.hasOwnProperty("minimum")&&e<t.minimum?e+" must be larger than "+t.minimum:t.hasOwnProperty("maximum")&&e<t.maximum?e+" must be smaller than "+t.maximum:null}function a(t,e){var n="number"==typeof e&&isFinite(e)&&Math.floor(e)===e;return n?f(e):e+" must me an integer"}function c(t,e){var n=/^#([0-9a-f]{3})$/,r=/^#([0-9a-f]{6})$/,o=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,i=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,u=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,f=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,a=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,c=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,s=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],l=String(e).trim().toLowerCase(),d=n.exec(l)||r.exec(l)||o.exec(l)||i.exec(l)||u.exec(l)||f.exec(l)||a.exec(l)||c.exec(l)||s.indexOf(l)>=0||"transparent"===l;return d?null:e+" is not a valid color"}function s(t,e){return e.hasOwnProperty("domain")&&"function"==typeof e.domain?null:"not a valid scale"}e.__esModule=!0,e.validator=n,e.compile=r}])});
//# sourceMappingURL=bundle.js.map