(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2mql":function(n,e,t){"use strict";t("ioFf"),t("HAE/");var r=t("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(n){return r.isMemo(n)?a:c[n.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var l=Object.defineProperty,f=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;n.exports=function n(e,t,r){if("string"!=typeof t){if(h){var o=d(t);o&&o!==h&&n(e,o,r)}var a=f(t);s&&(a=a.concat(s(t)));for(var c=u(e),m=u(t),y=0;y<a.length;++y){var g=a[y];if(!(i[g]||r&&r[g]||m&&m[g]||c&&c[g])){var b=p(t,g);try{l(e,g,b)}catch(x){}}}}return e}},"5Wrh":function(n,e,t){"use strict";var r=t("q1tI"),o=t.n(r);function i(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 3px 5px gray;\n  height: ",";\n  width: ",";\n  max-width: 320px;\n  border-radius: 15px;\n  border: 0px;\n  background-color: ",";\n  color: white;\n  font-weight: bold;\n  font-size: ",";\n  margin-bottom: 10px;\n  border-sizing: border-box;\n"]);return i=function(){return n},n}var a=t("vOnD").a.a(i(),(function(n){return n.height?n.height:"90px"}),(function(n){return n.width?n.width:"200px"}),(function(n){return n.backgroundColor?n.backgroundColor:"white"}),(function(n){return n.fontSize?n.fontSize:"22px"}));e.a=function(n){var e=n.href,t=n.height,r=n.width,i=n.backgroundColor,c=n.fontSize,u=n.children;return o.a.createElement(a,{href:e,height:t,width:r,backgroundColor:i,fontSize:c},u)}},"8oxB":function(n,e){var t,r,o=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(n){if(t===setTimeout)return setTimeout(n,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(n){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(n){r=a}}();var u,l=[],f=!1,s=-1;function p(){f&&u&&(f=!1,u.length?l=u.concat(l):s=-1,l.length&&d())}function d(){if(!f){var n=c(p);f=!0;for(var e=l.length;e;){for(u=l,l=[];++s<e;)u&&u[s].run();s=-1,e=l.length}u=null,f=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(e){try{return r.call(null,n)}catch(e){return r.call(this,n)}}}(n)}}function h(n,e){this.fun=n,this.array=e}function m(){}o.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];l.push(new h(n,e)),1!==l.length||f||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},GZ0P:function(n,e,t){"use strict";var r=t("q1tI"),o=t.n(r);function i(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  border: ",";\n  border-radius: 15px;\n  background-color: #d5edf5;\n  box-shadow: 0px 3px 5px gray;\n  height: ",";\n  width: ",";\n  max-width: 320px;\n  padding: 10px;\n  font-size: 18px;\n  margin-bottom: 10px;\n  border-sizing: border-box;\n\n  ::placeholder {\n    font-size: 18px;\n  }\n"]);return i=function(){return n},n}var a=t("vOnD").a.input(i(),(function(n){return n.borderColor?n.borderColor:"3px solid #FC9332"}),(function(n){return n.height?n.height:"90px"}),(function(n){return n.width?n.width:"200px"}));e.a=function(n){var e=n.height,t=n.width,r=n.placeholder,i=n.borderColor,c=n.type;return o.a.createElement(a,{height:e,width:t,placeholder:r,borderColor:i,type:c})}},"HAE/":function(n,e,t){var r=t("XKFU");r(r.S+r.F*!t("nh4g"),"Object",{defineProperty:t("hswa").f})},Oyvg:function(n,e,t){var r=t("dyZX"),o=t("Xbzi"),i=t("hswa").f,a=t("kJMx").f,c=t("quPj"),u=t("C/va"),l=r.RegExp,f=l,s=l.prototype,p=/a/g,d=/a/g,h=new l(p)!==p;if(t("nh4g")&&(!h||t("eeVq")((function(){return d[t("K0xU")("match")]=!1,l(p)!=p||l(d)==d||"/a/i"!=l(p,"i")})))){l=function(n,e){var t=this instanceof l,r=c(n),i=void 0===e;return!t&&r&&n.constructor===l&&i?n:o(h?new f(r&&!i?n.source:n,e):f((r=n instanceof l)?n.source:n,r&&i?u.call(n):e),t?this:s,l)};for(var m=function(n){n in l||i(l,n,{configurable:!0,get:function(){return f[n]},set:function(e){f[n]=e}})},y=a(f),g=0;y.length>g;)m(y[g++]);s.constructor=l,l.prototype=s,t("KroJ")(r,"RegExp",l)}t("elZq")("RegExp")},TOwV:function(n,e,t){"use strict";n.exports=t("qT12")},Tze0:function(n,e,t){"use strict";t("qncB")("trim",(function(n){return function(){return n(this,3)}}))},Wwxz:function(n,e,t){"use strict";t.r(e);var r=t("5Wrh"),o=t("GZ0P"),i=t("q1tI"),a=t.n(i),c=t("oAMb"),u=t.n(c),l=t("Wbzz"),f=t("vOnD");function s(){var n=v(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(236, 121, 15, 0.3);\n  z-index: 1;\n"]);return s=function(){return n},n}function p(){var n=v(["\n  font-size: 16px;\n  font-weight: bold;\n  color: #418694;\n  cursor: pointer;\n"]);return p=function(){return n},n}function d(){var n=v(["\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  margin-right: 5px;\n"]);return d=function(){return n},n}function h(){var n=v(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return h=function(){return n},n}function m(){var n=v(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"]);return m=function(){return n},n}function y(){var n=v(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  border-sizing: border-box;\n"]);return y=function(){return n},n}function g(){var n=v(["\n  color: white;\n  font-size: 50px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  border-sizing: border-box;\n"]);return g=function(){return n},n}function b(){var n=v(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n  overlay: hidden;\n  z-index: 0;\n"]);return b=function(){return n},n}function x(){var n=v(["\n  && {\n    height: 50%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 2;\n    margin-top: 150px;\n  }\n"]);return x=function(){return n},n}function w(){var n=v(['\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-image: url("login.jpg");\n  background-position: center;\n  background-size: cover;\n']);return w=function(){return n},n}function v(n,e){return e||(e=n.slice(0)),n.raw=e,n}var S=f.a.div(w()),E=f.a.div(x()),T=f.a.img(b()),$=f.a.span(g()),C=f.a.div(y()),z=f.a.div(m()),P=f.a.div(h()),j=f.a.span(d()),O=f.a.a(p()),k=f.a.div(s());e.default=function(){return a.a.createElement(S,null,a.a.createElement(k,null),a.a.createElement(T,{src:u.a}),a.a.createElement(E,null,a.a.createElement($,null,"Cadastro"),a.a.createElement(C,null,a.a.createElement(o.a,{height:"25px",width:"70%",placeholder:"Digite aqui seu nome completo",borderColor:"3px solid #418694"}),a.a.createElement(o.a,{height:"25px",width:"70%",placeholder:"Digite aqui seu e-mail",borderColor:"3px solid #418694"}),a.a.createElement(o.a,{height:"25px",width:"70%",type:"password",placeholder:"Digite aqui sua nova senha",borderColor:"3px solid #418694"}),a.a.createElement(o.a,{height:"25px",width:"70%",type:"password",placeholder:"Repita sua senha",borderColor:"3px solid #418694"})),a.a.createElement(z,null,a.a.createElement(r.a,{height:"50px",width:"70%",backgroundColor:"#418694"},"Cadastrar")),a.a.createElement(P,null,a.a.createElement(j,null,"Já tem uma conta? "),a.a.createElement(O,{onClick:function(){return Object(l.navigate)("/LoginPage")}},"Faça o login"))))}},h7Nl:function(n,e,t){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&t("KroJ")(r,"toString",(function(){var n=i.call(this);return n==n?o.call(this):"Invalid Date"}))},oAMb:function(n,e,t){n.exports=t.p+"static/login-be11e51fc36ad23a3c92d8d45c1d4d72.jpg"},qT12:function(n,e,t){"use strict";t("rE2o"),t("ioFf");var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,x=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function S(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case o:switch(n=n.type){case s:case p:case a:case u:case c:case h:return n;default:switch(n=n&&n.$$typeof){case f:case d:case g:case y:case l:return n;default:return e}}case i:return e}}}function E(n){return S(n)===p}e.AsyncMode=s,e.ConcurrentMode=p,e.ContextConsumer=f,e.ContextProvider=l,e.Element=o,e.ForwardRef=d,e.Fragment=a,e.Lazy=g,e.Memo=y,e.Portal=i,e.Profiler=u,e.StrictMode=c,e.Suspense=h,e.isAsyncMode=function(n){return E(n)||S(n)===s},e.isConcurrentMode=E,e.isContextConsumer=function(n){return S(n)===f},e.isContextProvider=function(n){return S(n)===l},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===o},e.isForwardRef=function(n){return S(n)===d},e.isFragment=function(n){return S(n)===a},e.isLazy=function(n){return S(n)===g},e.isMemo=function(n){return S(n)===y},e.isPortal=function(n){return S(n)===i},e.isProfiler=function(n){return S(n)===u},e.isStrictMode=function(n){return S(n)===c},e.isSuspense=function(n){return S(n)===h},e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===a||n===p||n===u||n===c||n===h||n===m||"object"==typeof n&&null!==n&&(n.$$typeof===g||n.$$typeof===y||n.$$typeof===l||n.$$typeof===f||n.$$typeof===d||n.$$typeof===x||n.$$typeof===w||n.$$typeof===v||n.$$typeof===b)},e.typeOf=S}}]);
//# sourceMappingURL=component---src-pages-signup-js-d93407819df1229b02c5.js.map