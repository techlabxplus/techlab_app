(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"++HY":function(t,e,n){"use strict";var r=n("wx14"),o=n("q1tI"),a=n("H2TA"),i=n("ofer"),c=o.forwardRef((function(t,e){return o.createElement(i.a,Object(r.a)({component:"p",variant:"body1",color:"textSecondary",ref:e},t))}));e.a=Object(a.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},"7h0T":function(t,e,n){var r=n("XKFU");r(r.S,"Number",{isNaN:function(t){return t!=t}})},"8jRI":function(t,e,n){"use strict";n("pIFo"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("SRfc"),n("Oyvg");var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],a(n),a(r))}function i(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=a(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var n={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(t);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(e){var a=i(r[0]);a!==r[0]&&(n[r[0]]=a)}r=o.exec(t)}n["%C2"]="�";for(var c=Object.keys(n),u=0;u<c.length;u++){var l=c[u];t=t.replace(new RegExp(l,"g"),n[l])}return t}(t)}}},"8yz6":function(t,e,n){"use strict";n("V+eJ"),t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EQI2:function(t,e,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=n("iuhU"),c=n("H2TA"),u=a.forwardRef((function(t,e){var n=t.classes,c=t.className,u=t.dividers,l=void 0!==u&&u,s=Object(o.a)(t,["classes","className","dividers"]);return a.createElement("div",Object(r.a)({className:Object(i.a)(n.root,c,l&&n.dividers),ref:e},s))}));e.a=Object(c.a)((function(t){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)}}}),{name:"MuiDialogContent"})(u)},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},J4zp:function(t,e,n){var r=n("wTVA"),o=n("m0LI"),a=n("ZhPi"),i=n("wkBT");t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()}},N0qL:function(t,e,n){t.exports={BackgroundWhite:"#F9F9F9",MainBlue:"#72849d",LightBlue:"#c6ceda",MainOrange:"#f6aa41",LightOrange:"#ffd874",MainGrey:"#727376",LightGrey:"#dcd6cd",Font:"Roboto,sans-serif",FontColorDark:"#212121",FontColorLight:"#F9F9F9",container:"ConfirmingAtendent-module--container--2Su7o",Form:"ConfirmingAtendent-module--Form--CFtoI",Link:"ConfirmingAtendent-module--Link--2FMSS",LinkText:"ConfirmingAtendent-module--LinkText--blYa4",InputBox:"ConfirmingAtendent-module--InputBox--2JKGA",InputLabel:"ConfirmingAtendent-module--InputLabel--2mY9y",InputField:"ConfirmingAtendent-module--InputField--3TZp6",ButtonBox:"ConfirmingAtendent-module--ButtonBox--1oFaq",DialogButtonBox:"ConfirmingAtendent-module--DialogButtonBox--1Im1z",CalendarButtonBox:"ConfirmingAtendent-module--CalendarButtonBox--p496s",CalendarButton:"ConfirmingAtendent-module--CalendarButton--1v-9f",AddButton:"ConfirmingAtendent-module--AddButton--3KoP-",CancelButton:"ConfirmingAtendent-module--CancelButton--q93J3",Button:"ConfirmingAtendent-module--Button--3UziD"}},Pmem:function(t,e,n){"use strict";n("a1Th"),n("h7Nl"),n("Btvt"),n("pIFo"),t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},btlB:function(t,e,n){"use strict";n.r(e);n("VRzm"),n("Btvt"),n("OG14");var r=n("o0o1"),o=n.n(r),a=(n("ls82"),n("q1tI")),i=n.n(a),c=n("kfFl"),u=n("EQI2"),l=n("++HY"),s=n("yv+Y"),f=n("i8ne"),d=n("Wbzz"),p=n("N0qL"),m=n.n(p),g=n("vDqi"),v=n.n(g),y=n("YwZP"),b=n("cr+I"),h=n.n(b);function x(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function A(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){x(a,r,o,i,c,"next",t)}function c(t){x(a,r,o,i,c,"throw",t)}i(void 0)}))}}e.default=function(){var t=Object(a.useState)(""),e=t[0],n=t[1],r=Object(a.useState)(!1),p=r[0],g=r[1],b=Object(a.useState)(!1),x=b[0],E=b[1],j=Object(a.useState)(""),w=j[0],C=j[1],O=function(){var t=A(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"techlab-oauth.mooo.com",t.prev=1,t.next=4,v.a.put("http://techlab-oauth.mooo.com/acolhimento/token/"+n,{code:e},{headers:{"x-access-token":window.localStorage.getItem("TOKEN")}});case 4:return t.sent,Object(d.navigate)("/Atendents"),t.abrupt("return");case 9:if(t.prev=9,t.t0=t.catch(1),401!=t.t0.response.status){t.next=16;break}return Object(d.navigate)("/loginpage"),t.abrupt("return");case 16:if(500!=t.t0.response.status){t.next=19;break}return Object(d.navigate)("/Atendents"),t.abrupt("return");case 19:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=A(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"techlab-oauth.mooo.com",t.prev=1,t.next=4,v.a.post("http://techlab-oauth.mooo.com/acolhimento/token/"+e,{},{headers:{"x-access-token":window.localStorage.getItem("TOKEN")}});case 4:n=t.sent,C(n.data.authUrl),g(!0),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),B=function(){Object(d.navigate)("/Atendents")};return i.a.createElement(y.Location,null,(function(t){var e=t.location;t.navigate;return i.a.createElement(f.a,{pageNeedsAuth:"true",pageTitle:"Confirmação da Agenda",lastPage:"/Atendents"},i.a.createElement(c.a,{open:x},i.a.createElement(s.a,null,"Código incorreto"),i.a.createElement(u.a,null,i.a.createElement(l.a,null,"O codigo inserido não está correto, por favor tente novamente")),i.a.createElement("div",{className:m.a.DialogButtonBox},i.a.createElement("button",{className:m.a.Button,onClick:function(){E(!1)}},"Fechar"))),i.a.createElement(c.a,{open:p},i.a.createElement(s.a,null,"Link Google Agenda"),i.a.createElement(u.a,null,i.a.createElement(l.a,null,"Copie esse link e peça para o atendente acessá-lo e enviar ao administrador o código gerado após o login."),i.a.createElement("a",{className:m.a.LinkText,onClick:function(){return window.open(w,"_blank")}},w)),i.a.createElement("div",{className:m.a.DialogButtonBox},i.a.createElement("button",{className:m.a.Button,onClick:function(){g(!1)}},"Fechar"))),i.a.createElement("div",{className:m.a.Form},i.a.createElement("div",{className:m.a.InputBox},i.a.createElement("span",{className:m.a.InputLabel},"Código do Google Agenda"),i.a.createElement("input",{className:m.a.InputField,placeholder:"Código",type:"text",onChange:function(t){return n(t.target.value)}}))),i.a.createElement("div",{className:m.a.ButtonBox},i.a.createElement("button",{className:m.a.AddButton,onClick:function(){return O(h.a.parse(e.search).sigla)}},"ENVIAR"),i.a.createElement("a",{className:m.a.Link,href:"/Atendents"},i.a.createElement("button",{className:m.a.CancelButton,onClick:B},"CANCELAR"))),i.a.createElement("div",{className:m.a.CalendarButtonBox},i.a.createElement("button",{className:m.a.CalendarButton,onClick:function(){return k(h.a.parse(e.search).sigla)}},"GERAR LINK DE CONFIRMAÇÃO")))}))}},"cr+I":function(t,e,n){"use strict";n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("h7Nl"),n("0l/t"),n("Z2Ku"),n("L9s1");var r=n("J4zp");n("DNiP"),n("hHhE"),n("91GP"),n("Tze0"),n("7h0T"),n("xfY5"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Vd3H"),n("LK8F"),n("bWfx"),n("KKXr"),n("V+eJ"),n("pIFo");var o=n("RIqP");function a(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=n("Pmem"),u=n("8jRI"),l=n("8yz6");function s(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function d(t,e){return e.decode?u(t):t}function p(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function m(t){var e=(t=p(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function g(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function v(t,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};case"comma":case"separator":return function(e,n,r){var o="string"==typeof n&&n.split("").indexOf(t.arrayFormatSeparator)>-1?n.split(t.arrayFormatSeparator).map((function(e){return d(e,t)})):null===n?n:d(n,t);r[e]=o};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;var i,c=a(t.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value,f=l(e.decode?u.replace(/\+/g," "):u,"="),p=r(f,2),m=p[0],v=p[1];v=void 0===v?null:["comma","separator"].includes(e.arrayFormat)?v:d(v,e),n(d(m,e),v,o)}}catch(w){c.e(w)}finally{c.f()}for(var y=0,b=Object.keys(o);y<b.length;y++){var h=b[y],x=o[h];if("object"==typeof x&&null!==x)for(var A=0,E=Object.keys(x);A<E.length;A++){var j=E[A];x[j]=g(x[j],e)}else o[h]=g(x,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(t,e){var n=o[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(n):t[e]=n,t}),Object.create(null))}e.extract=m,e.parse=v,e.stringify=function(t,e){if(!t)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var n=function(n){return e.skipNull&&null==t[n]||e.skipEmptyString&&""===t[n]},r=function(t){switch(t.arrayFormat){case"index":return function(e){return function(n,r){var a=n.length;return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[f(e,t),"[",a,"]"].join("")]:[[f(e,t),"[",f(a,t),"]=",f(r,t)].join("")])}};case"bracket":return function(e){return function(n,r){return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[f(e,t),"[]"].join("")]:[[f(e,t),"[]=",f(r,t)].join("")])}};case"comma":case"separator":return function(e){return function(n,r){return null==r||0===r.length?n:0===n.length?[[f(e,t),"=",f(r,t)].join("")]:[[n,f(r,t)].join(t.arrayFormatSeparator)]}};default:return function(e){return function(n,r){return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[f(e,t)]:[[f(e,t),"=",f(r,t)].join("")])}}}}(e),a={},i=0,c=Object.keys(t);i<c.length;i++){var u=c[i];n(u)||(a[u]=t[u])}var l=Object.keys(a);return!1!==e.sort&&l.sort(e.sort),l.map((function(n){var o=t[n];return void 0===o?"":null===o?f(n,e):Array.isArray(o)?o.reduce(r(n),[]).join("&"):f(n,e)+"="+f(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){return{url:p(t).split("?")[0]||"",query:v(m(t),e)}},e.stringifyUrl=function(t,n){var r=p(t.url).split("?")[0]||"",o=e.extract(t.url),a=e.parse(o),i=function(t){var e="",n=t.indexOf("#");return-1!==n&&(e=t.slice(n)),e}(t.url),c=Object.assign(a,t.query),u=e.stringify(c,n);return u&&(u="?".concat(u)),"".concat(r).concat(u).concat(i)}},m0LI:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},wTVA:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},wkBT:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"yv+Y":function(t,e,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=n("iuhU"),c=n("H2TA"),u=n("ofer"),l=a.forwardRef((function(t,e){var n=t.children,c=t.classes,l=t.className,s=t.disableTypography,f=void 0!==s&&s,d=Object(o.a)(t,["children","classes","className","disableTypography"]);return a.createElement("div",Object(r.a)({className:Object(i.a)(c.root,l),ref:e},d),f?n:a.createElement(u.a,{component:"h2",variant:"h6"},n))}));e.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(l)}}]);
//# sourceMappingURL=component---src-pages-confirming-atendent-js-167c2e2355c7d201093c.js.map