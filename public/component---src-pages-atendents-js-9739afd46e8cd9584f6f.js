(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1waj":function(e,t,n){"use strict";n("HAE/");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=(0,a(n("8/g6")).default)(o.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=r},"5rCv":function(e,t,n){"use strict";n("HAE/");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=(0,a(n("8/g6")).default)(o.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=r},"8Ak7":function(e,t,n){"use strict";n.r(t);n("VRzm"),n("Btvt");var a=n("o0o1"),o=n.n(a),r=(n("ls82"),n("q1tI")),i=n.n(r),l=n("1waj"),s=n.n(l),c=n("5rCv"),u=n.n(c),d=n("FrwU"),m=n.n(d),f=n("kfFl"),v=n("yv+Y"),h=n("MPUk"),p=n.n(h),A=n("i8ne"),E=n("vDqi"),g=n.n(E),C=n("Wbzz"),k=n("UUhG"),N=n.n(k);function B(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){B(r,a,o,i,l,"next",e)}function l(e){B(r,a,o,i,l,"throw",e)}i(void 0)}))}}var I=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).componentDidMount=b(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"techlab-oauth.mooo.com",console.log("getting usuarios"),e.prev=2,e.next=5,g.a.get("http://techlab-oauth.mooo.com/usuarios/gapsi/",{headers:{"x-access-token":window.localStorage.getItem("TOKEN")}});case 5:t=e.sent,console.log(t),n.setState({atendents:t.data.map((function(e){return{nome:e.nomeatendente,status:e.statusatendente,instituto:e.institutoatendente,email:e.emailatendente}}))}),e.next=15;break;case 10:if(e.prev=10,e.t0=e.catch(2),401!=e.t0.response.status){e.next=15;break}return Object(C.navigate)("/loginpage"),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[2,10]])}))),n.handleRemoveClick=function(){n.setState({removeDialogOpen:!0})},n.handleCancelClick=function(){console.log("cancel"),n.setState({removeDialogOpen:!1})},n.handleConfirmClick=function(){var e=b(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"techlab-oauth.mooo.com",e.prev=1,e.next=4,g.a.delete("http://techlab-oauth.mooo.com/usuarios/gapsi/"+n.state.atendents[t].email,{headers:{"x-access-token":window.localStorage.getItem("TOKEN")}});case 4:e.sent,n.setState({atendents:n.state.atendents.filter((function(e){return e.email!==n.state.atendents[t].email}))}),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(1),401!=e.t0.response.status){e.next=13;break}return Object(C.navigate)("/loginpage"),e.abrupt("return");case 13:n.setState({removeDialogOpen:!1});case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),n.state={removeDialogOpen:!1,atendents:[]},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.getAttendentList=function(){var e=this;return this.state.atendents.map((function(t,n){return i.a.createElement("div",{key:n},"CONFIRMED"===t.status&&i.a.createElement("div",{className:N.a.ConfirmedListItem},i.a.createElement(f.a,{open:e.state.removeDialogOpen},i.a.createElement(v.a,null,"Confirmação"),i.a.createElement("span",{className:N.a.ConfirmationText},"Tem certeza que deseja remover o atendente?"),i.a.createElement("div",{className:N.a.ButtonBox},i.a.createElement("button",{className:N.a.Button,onClick:function(){return e.handleConfirmClick(n)}},"Confirmar"),i.a.createElement("button",{className:N.a.Button,onClick:function(){return e.handleCancelClick()}},"Cancelar"))),i.a.createElement("div",{className:N.a.AtendentInfo},i.a.createElement("div",{className:N.a.AtendentName},t.nome),i.a.createElement("div",{className:N.a.ConfirmedAtendentInstitute},t.instituto)),i.a.createElement("div",{className:N.a.ActionBox},i.a.createElement("button",{className:N.a.ConfirmedRemoveButton},i.a.createElement("a",{className:N.a.Link,href:"/EditingAtendent?"+t.email},i.a.createElement(p.a,null))),i.a.createElement("button",{className:N.a.ConfirmedRemoveButton,onClick:function(){return e.handleRemoveClick()}},i.a.createElement(m.a,null)))),"WAITING"===t.status&&i.a.createElement("div",{className:N.a.WaitingListItem},i.a.createElement(f.a,{open:e.state.removeDialogOpen},i.a.createElement(v.a,null,"Confirmação"),i.a.createElement("span",{className:N.a.ConfirmationText},"Tem certeza que deseja remover o atendente?"),i.a.createElement("div",{className:N.a.ButtonBox},i.a.createElement("button",{className:N.a.Button,onClick:function(){return e.handleConfirmClick(n)}},"Confirmar"),i.a.createElement("button",{className:N.a.Button,onClick:function(){return e.handleCancelClick()}},"Cancelar"))),i.a.createElement("div",{className:N.a.AtendentInfo},i.a.createElement("div",{className:N.a.AtendentName},t.nome),i.a.createElement("div",{className:N.a.WaitingAtendentInstitute},t.instituto)),i.a.createElement("div",{className:N.a.ActionBox},i.a.createElement("button",{className:N.a.WaitingRemoveButton},i.a.createElement("a",{className:N.a.Link,href:"/ConfirmingAtendent?sigla="+t.instituto},i.a.createElement(u.a,null))),i.a.createElement("button",{className:N.a.WaitingRemoveButton},i.a.createElement("a",{className:N.a.Link,href:"/EditingAtendent?email="+t.email},i.a.createElement(p.a,null))),i.a.createElement("button",{className:N.a.WaitingRemoveButton,onClick:function(){return e.handleRemoveClick()}},i.a.createElement(m.a,null)))))}))},r.render=function(){return i.a.createElement(A.a,{pageTitle:"Lista de Atendentes",lastPage:"/"},i.a.createElement("div",{className:N.a.AddBox},i.a.createElement("button",{className:N.a.AddButton},i.a.createElement("a",{className:N.a.Link,href:"/AddingAtendent"},"ADICIONAR ",i.a.createElement(s.a,null)))),i.a.createElement("div",{className:N.a.List},this.getAttendentList()))},a}(i.a.Component);t.default=I},FrwU:function(e,t,n){"use strict";n("HAE/");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=(0,a(n("8/g6")).default)(o.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=r},MPUk:function(e,t,n){"use strict";n("HAE/");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=(0,a(n("8/g6")).default)(o.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=r},UUhG:function(e,t,n){e.exports={BackgroundWhite:"#F9F9F9",MainBlue:"#72849d",LightBlue:"#c6ceda",MainOrange:"#f6aa41",LightOrange:"#ffd874",MainGrey:"#727376",LightGrey:"#dcd6cd",Font:"Roboto,sans-serif",FontColorDark:"#212121",FontColorLight:"#F9F9F9",container:"Atendents-module--container--3KhxR",List:"Atendents-module--List--3wc6v",Link:"Atendents-module--Link--26ELd",AddBox:"Atendents-module--AddBox--3_kGk",AddButton:"Atendents-module--AddButton--1FqDW",ConfirmedListItem:"Atendents-module--ConfirmedListItem--1lgDc",WaitingListItem:"Atendents-module--WaitingListItem--Su-tI",AtendentInfo:"Atendents-module--AtendentInfo--1XP4m",ConfirmedRemoveButton:"Atendents-module--ConfirmedRemoveButton--3OYn9",WaitingRemoveButton:"Atendents-module--WaitingRemoveButton--1hAuh",ActionBox:"Atendents-module--ActionBox--3oC9i",ButtonBox:"Atendents-module--ButtonBox--1Ien5",ConfirmationText:"Atendents-module--ConfirmationText--1Vmun",Button:"Atendents-module--Button--1S03o",AtendentName:"Atendents-module--AtendentName--2-9WV",ConfirmedAtendentInstitute:"Atendents-module--ConfirmedAtendentInstitute--2zsn_",WaitingAtendentInstitute:"Atendents-module--WaitingAtendentInstitute--lCahB"}}}]);
//# sourceMappingURL=component---src-pages-atendents-js-9739afd46e8cd9584f6f.js.map