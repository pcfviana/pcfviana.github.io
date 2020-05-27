function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function asyncGeneratorStep(e,n,t,r,a,i,o){try{var u=e[i](o),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,a)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){asyncGeneratorStep(i,r,a,o,u,"next",e)}function u(e){asyncGeneratorStep(i,r,a,o,u,"throw",e)}o(void 0)}))}}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Dl6n:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return u}));var r=function(e,n){return null!==n.closest(e)},a=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},i=function(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return n[e]=!0})),n},o=/^[a-z][a-z0-9+\-.]*:/,u=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n||"#"===n[0]||o.test(n)){e.next=4;break}if(!(a=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=t&&t.preventDefault(),a.push(n,r)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},"H+bZ":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("AytR"),a=t("8Y7J"),i=t("IheW"),o=function(){var e=function(){function e(n){_classCallCheck(this,e),this.httpClient=n,this.API_URL=r.a.urlBase}return _createClass(e,[{key:"autenticar",value:function(e,n){return this.httpClient.get(this.API_URL+"/atleta/login?email="+e+"&senha="+n)}},{key:"buscarEventoAtivo",value:function(e){return this.httpClient.get(this.API_URL+"/eventoativoatleta?id_atleta="+e._id)}},{key:"buscarAtividadesPorEventoAtleta",value:function(e,n){return this.httpClient.get(this.API_URL+"/atividades?id_atleta="+e._id+"&id_evento="+n)}},{key:"cadastrarAtividade",value:function(e){return this.httpClient.post(this.API_URL+"/atleta/login?email=",{atleta:{_id:e.id_atleta},evento:{_id:e.id_evento},semana:e.sena,dia:e.dia,tempo:e.tempo,concluido:e.concluido,pontuacao:e.pontuacao,pontuacao_mensagem:e.pontuacao_mensagem,observacao:e.observacao,data_cadastro:e.data_cadastro,esforco:e.esforco})}}]),e}();return e.ngInjectableDef=a.Lb({factory:function(){return new e(a.Mb(i.c))},token:e,providedIn:"root"}),e}()},TMBv:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,n,t){var r="".concat(e*n/t-e,"ms"),a=2*Math.PI*n/t;return{r:5,style:{top:"".concat(9*Math.sin(a),"px"),left:"".concat(9*Math.cos(a),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,n,t){var r=n/t,a="".concat(e*r-e,"ms"),i=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":a}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,n){return{r:6,style:{left:"".concat(9-9*n,"px"),"animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,n,t){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(e*n/t-e,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,n,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(e*n/t-e,"ms")}}}}}},Uch9:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return x})),t.d(n,"c",(function(){return y})),t.d(n,"d",(function(){return k})),t.d(n,"e",(function(){return i}));var r=t("54nT"),a=t("kBU6"),i=function(e){return new Promise((function(n,t){Object(r.l)((function(){o(e),u(e).then((function(t){t.animation&&t.animation.destroy(),c(e),n(t)}),(function(n){c(e),t(n)}))}))}))},o=function(e){var n=e.enteringEl,t=e.leavingEl;w(n,t,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),k(n,!1),t&&k(t,!1)},u=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n);case 2:return t=e.sent,e.abrupt("return",t?l(t,n):f(n));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},s=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.leavingEl||!n.animated||0===n.duration){e.next=16;break}if(!n.animationBuilder){e.next=5;break}e.t0=n.animationBuilder,e.next=15;break;case 5:if("ios"!==n.mode){e.next=11;break}return e.next=8,t.e(98).then(t.bind(null,"QtHV"));case 8:e.t1=e.sent.iosTransitionAnimation,e.next=14;break;case 11:return e.next=13,t.e(99).then(t.bind(null,"cmQl"));case 13:e.t1=e.sent.mdTransitionAnimation;case 14:e.t0=e.t1;case 15:return e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,!0);case 2:return r=n(t.baseEl,t),m(t.enteringEl,t.leavingEl),e.next=6,p(r,t);case 6:return a=e.sent,e.abrupt("return",(t.progressCallback&&t.progressCallback(void 0),a&&h(t.enteringEl,t.leavingEl),{hasCompleted:a,animation:r}));case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.enteringEl,r=n.leavingEl,e.next=3,d(n,!1);case 3:return m(t,r),h(t,r),e.abrupt("return",{hasCompleted:!0});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(void 0!==n.deepWait?n.deepWait:t)?[b(n.enteringEl),b(n.leavingEl)]:[g(n.enteringEl),g(n.leavingEl)],e.next=3,Promise.all(r);case 3:return e.next=5,v(n.viewIsReady,n.enteringEl);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),v=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=4;break}return e.next=4,n(t);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(e,n){var t=n.progressCallback,r=new Promise((function(n){e.onFinish((function(e){return n(1===e)}))}));return t?(e.progressStart(!0),t(e)):e.play(),r},m=function(e,n){y(n,a.c),y(e,a.a)},h=function(e,n){y(e,a.b),y(n,a.d)},y=function(e,n){if(e){var t=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(t)}},g=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},b=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n)){e.next=12;break}if(e.t0=null!=t.componentOnReady,!e.t0){e.next=8;break}return e.next=6,t.componentOnReady();case 6:e.t1=e.sent,e.t0=null!=e.t1;case 8:if(!e.t0){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,Promise.all(Array.from(t.children).map(b));case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},w=function(e,n,t){void 0!==e&&(e.style.zIndex="back"===t?"99":"101"),void 0!==n&&(n.style.zIndex="100")},x=function(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}},YtD4:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){try{if("string"!=typeof e||""===e)return e;var n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=e,u.forEach((function(e){for(var t=n.querySelectorAll(e),r=t.length-1;r>=0;r--){var o=t[r];o.parentNode?o.parentNode.removeChild(o):n.removeChild(o);for(var u=i(o),c=0;c<u.length;c++)a(u[c])}}));for(var r=i(n),o=0;o<r.length;o++)a(r[o]);var c=document.createElement("div");c.appendChild(n);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},a=function e(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var r=n.attributes.item(t),a=r.name;if(o.includes(a.toLowerCase())){var u=r.value;null!=u&&u.toLowerCase().includes("javascript:")&&n.removeAttribute(a)}else n.removeAttribute(a)}for(var c=i(n),s=0;s<c.length;s++)e(c[s])}},i=function(e){return null!=e.children?e.children:e.childNodes},o=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]},dM80:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("8Y7J"),a=function(){var e=function(){function e(){_classCallCheck(this,e),this.weekView_key="weekView_key",this.DAY_VIEW_KEY="DAY_VIEW_KEY",this.startIndexEventDate_key="startEventDate_key",this.dias=["Domingo","Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado"]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getIndextStartEventDate",value:function(){var e=localStorage.getItem(this.startIndexEventDate_key);if(e)return JSON.parse(e)}},{key:"GetEventoUsuario",value:function(e){return this.CriarEventoPadrao(e)}},{key:"CriarEventoPadrao",value:function(e){var n=[],t=1,r=1;this.ConverterParaDateEhAcrescentarDias(e,0);for(var a=0;a<3;a++){for(var i={Periodo:a+1,DataInicio:this.addDays(e,0==a?0:1===a?28:56),Semanas:[]},o=i.DataInicio,u=0;u<4;u++){var c={Titulo:"Semana "+t,Numero:t,Concluida:!1,Class:"week-closed",DataInicio:o,Pontuacao:0,Tempo:0,Dias:[]};o=this.addDays(o,6);for(var s=0;s<7;s++){var l=this.addDays(e,r-1);c.Dias.push({Titulo:"Dia "+r,Concluido:!1,Class:"day-closed",Numero:r,Data:l,Pontuacao:0,Tempo:0}),r++}i.Semanas.push(c),t++}n.push(i)}return{Periodos:n}}},{key:"setData",value:function(e,n){localStorage.removeItem(n),localStorage.setItem(n,JSON.stringify(e))}},{key:"getData",value:function(e){var n=localStorage.getItem(e);if(n)return JSON.parse(n)}},{key:"formatarMinutos",value:function(e){return Math.floor(e/60)+":"+e%60}},{key:"addDays",value:function(e,n){var t=new Date(e),r=t.getDate()+1;return t.setDate(r+n),t.setHours(0),t.setMinutes(0),t.setSeconds(0),t}},{key:"ConverterParaDateEhAcrescentarDias",value:function(e,n){var t=new Date(e),r=t.getDate()+1;return t.setDate(r+n),t.setHours(0),t.setMinutes(0),t.setSeconds(0),t}}]),e}();return e.ngInjectableDef=r.Lb({factory:function(){return new e},token:e,providedIn:"root"}),e}()},m9yc:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r,a,i){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return",n.attachViewToDom(t,r,i,a));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r,a&&a.forEach((function(e){return o.classList.add(e)})),i&&Object.assign(o,i),t.appendChild(o),e.t0=o.componentOnReady,!e.t0){e.next=12;break}return e.next=12,o.componentOnReady();case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i){return e.apply(this,arguments)}}(),a=function(e,n){if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},opz7:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return r}));var r=function(){var e=window.TapticEngine;e&&e.selection()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);