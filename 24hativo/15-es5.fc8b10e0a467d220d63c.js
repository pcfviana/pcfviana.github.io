function _defineProperties(l,n){for(var u=0;u<n.length;u++){var o=n[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{uS3d:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),t=function l(){_classCallCheck(this,l)},e=u("pMnS"),i=u("MKJQ"),s=u("sZkV"),r=u("SVse"),a=u("mrSG"),c=u("a++a"),b=u("dM80"),p=function(){function l(n,u,o,t,e,i){_classCallCheck(this,l),this.router=n,this.navCtrl=u,this.plt=o,this.modalController=e,this.commonService=i,this.centesimas=0,this.segundos=0,this.minutos=0,this.horas=0,this.Centesimas="00",this.Segundos="00",this.Minutos="00",this.Horas="00",this.concluido=!1,this.isRun=!1,this.estado="play",this.refreshColor="light"}return _createClass(l,[{key:"estadoSwap",value:function(){this.isRun=!this.isRun,this.isRun?(this.estado="pause",this.refreshColor="gris",this.start()):(this.estado="play",this.refreshColor="light",this.pause())}},{key:"start",value:function(){var l=this,n=!1;this.contador=setInterval((function(){n||(l.centesimas+=1,l.Centesimas=l.centesimas<10?"0"+l.centesimas:""+l.centesimas,10===l.centesimas&&(l.centesimas=0,l.segundos+=1,l.Segundos=l.segundos<10?"0"+l.segundos:""+l.segundos,60===l.segundos&&(l.segundos=0,l.minutos+=1,l.Minutos=l.minutos<10?"0"+l.minutos:""+l.minutos,l.Segundos="00",60===l.minutos&&(l.minutos=0,l.horas+=1,l.Horas=l.horas<10?"0"+l.horas:""+l.horas)))),l.minutos==l.TempoAtividadePadrao&&(n=!0,l.concluido=!0,l.Centesimas="00")}),100)}},{key:"pause",value:function(){clearInterval(this.contador)}},{key:"stop",value:function(){this.isRun||(clearInterval(this.contador),this.horas=0,this.segundos=0,this.centesimas=0,this.Centesimas="00",this.Segundos="00",this.Minutos="00",this.Horas="00",this.estado="play",this.isRun=!1,this.contador=null)}},{key:"ngOnInit",value:function(){this.row=this.commonService.getData(this.commonService.DAY_VIEW_KEY),this.TempoAtividadePadrao=this.row.TempoAtividade||5}},{key:"presentModal",value:function(){return a.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.modalController.create({component:c.a});case 2:return(n=l.sent).onDidDismiss().then((function(l){})),l.next=6,n.present();case 6:return l.abrupt("return",l.sent);case 7:case"end":return l.stop()}}),l,this)})))}}]),l}(),d=u("iInd"),h=o.nb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important}ion-content[_ngcontent-%COMP%]{--background:url('bg_06_blue.60b5d06d22bc050a3b9e.jpg') no-repeat 74% 100%/cover}.bg-logo[_ngcontent-%COMP%]{background:url(logo_corte.9683045d30a74098c22f.png) 100% 20%/27% auto no-repeat fixed}.timer[_ngcontent-%COMP%]{background-color:green;border-radius:25px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:205px}.timer-icon[_ngcontent-%COMP%]{background-color:#bbb8b8;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:50px;height:50px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}.timer-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60%}.timer-tempo[_ngcontent-%COMP%]{font-size:25px;font-weight:300;text-align:right;-webkit-box-flex:1;flex-grow:1;padding-right:17px}.icon-status[_ngcontent-%COMP%]{background-color:green;border-radius:25px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;min-width:49%;padding-right:10px}.icon-status-icon[_ngcontent-%COMP%]{background:#fff;width:40px;height:40px;border-radius:50%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.icon-status-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}.icon-status-feeling[_ngcontent-%COMP%]{font-size:25px;font-weight:300;-webkit-box-flex:1;flex-grow:1;padding:0 8px}"]],data:{}});function g(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,2,"div",[["class","btn-save"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.presentModal()&&o),o}),null,null)),(l()(),o.pb(1,0,null,null,1,"ion-icon",[["name","save-outline"]],null,null,null,i.D,i.i)),o.ob(2,49152,null,0,s.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"save-outline")}),null)}function f(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,22,"div",[],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,4,"ion-row",[],null,null,null,i.I,i.n)),o.ob(2,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(3,0,null,0,2,"ion-text",[],null,null,null,i.M,i.r)),o.ob(4,49152,null,0,s.tb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(5,0,[" Tempo de atividade: "," minuto(s) - Iniciar "])),(l()(),o.pb(6,0,null,null,6,"ion-row",[["class","ion-justify-content-center ion-margin-bottom"]],null,null,null,i.I,i.n)),o.ob(7,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(8,0,null,0,4,"div",[["class","timer"]],null,null,null,null,null)),(l()(),o.pb(9,0,null,null,1,"div",[["class","timer-icon"]],null,null,null,null,null)),(l()(),o.pb(10,0,null,null,0,"img",[["src","../../assets/images/relogio.svg"]],null,null,null,null,null)),(l()(),o.pb(11,0,null,null,1,"div",[["class","timer-tempo"]],null,null,null,null,null)),(l()(),o.Gb(12,null,[" ",":",":","."," "])),(l()(),o.pb(13,0,null,null,9,"ion-row",[["class","ion-justify-content-between btn-area ion-margin-bottom"]],null,null,null,i.I,i.n)),o.ob(14,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(15,0,null,0,2,"div",[["class","btn-play"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.estadoSwap()&&o),o}),null,null)),(l()(),o.pb(16,0,null,null,1,"ion-icon",[],null,null,null,i.D,i.i)),o.ob(17,49152,null,0,s.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(18,0,null,0,2,"div",[["class","btn-refresh"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.stop()&&o),o}),null,null)),(l()(),o.pb(19,0,null,null,1,"ion-icon",[["name","refresh"]],null,null,null,i.D,i.i)),o.ob(20,49152,null,0,s.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.eb(16777216,null,0,1,null,g)),o.ob(22,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,17,0,u.estado),l(n,20,0,"refresh"),l(n,22,0,u.concluido)}),(function(l,n){var u=n.component;l(n,5,0,u.TempoAtividadePadrao),l(n,12,0,u.Horas,u.Minutos,u.Segundos,u.Centesimas)}))}function m(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"div",[["class","icon-status-icon"]],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,0,"img",[["src","./assets/icon/emoji.svg"]],null,null,null,null,null))],null,null)}function v(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"div",[["class","icon-status-icon"]],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,0,"img",[["src","./assets/icon/emoji (1).svg"]],null,null,null,null,null))],null,null)}function k(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"div",[["class","icon-status-icon"]],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,0,"img",[["src","./assets/icon/sad.svg"]],null,null,null,null,null))],null,null)}function x(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"div",[["class","icon-status-icon"]],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,0,"img",[["src","./assets/icon/emoji (2).svg"]],null,null,null,null,null))],null,null)}function w(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,43,"div",[],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,4,"ion-row",[],null,null,null,i.I,i.n)),o.ob(2,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(3,0,null,0,2,"ion-text",[],null,null,null,i.M,i.r)),o.ob(4,49152,null,0,s.tb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(5,0,[" "," "])),(l()(),o.pb(6,0,null,null,13,"ion-row",[["class","record ion-justify-content-between ion-margin-bottom"]],null,null,null,i.I,i.n)),o.ob(7,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(8,0,null,0,10,"div",[["class","dados"]],null,null,null,null,null)),(l()(),o.pb(9,0,null,null,4,"div",[["class","tempo"]],null,null,null,null,null)),(l()(),o.pb(10,0,null,null,1,"div",[["class","tempo-icon"]],null,null,null,null,null)),(l()(),o.pb(11,0,null,null,0,"img",[["src","../../assets/images/relogio.svg"]],null,null,null,null,null)),(l()(),o.pb(12,0,null,null,1,"div",[["class","tempo-tempo"]],null,null,null,null,null)),(l()(),o.Gb(13,null,[" "," "])),(l()(),o.pb(14,0,null,null,4,"div",[["class","pontos"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,null,1,"div",[["class","pontos-icon"]],null,null,null,null,null)),(l()(),o.pb(16,0,null,null,0,"img",[["src","../../assets/images/estrela.svg"]],null,null,null,null,null)),(l()(),o.pb(17,0,null,null,1,"div",[["class","pontos-valor"]],null,null,null,null,null)),(l()(),o.Gb(18,null,[" "," "])),(l()(),o.pb(19,0,null,0,0,"div",[["class","medal"]],null,null,null,null,null)),(l()(),o.pb(20,0,null,null,2,"ion-row",[],null,null,null,i.I,i.n)),o.ob(21,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(-1,0,[" Me senti "])),(l()(),o.pb(23,0,null,null,12,"ion-row",[["class","ion-margin-bottom"]],null,null,null,i.I,i.n)),o.ob(24,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(25,0,null,0,10,"div",[["class","icon-status"]],null,null,null,null,null)),(l()(),o.eb(16777216,null,null,1,null,m)),o.ob(27,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,v)),o.ob(29,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,k)),o.ob(31,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,x)),o.ob(33,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(34,0,null,null,1,"div",[["class","icon-status-feeling"]],null,null,null,null,null)),(l()(),o.Gb(35,null,[" "," "])),(l()(),o.pb(36,0,null,null,4,"ion-row",[],null,null,null,i.I,i.n)),o.ob(37,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(38,0,null,0,2,"ion-text",[],null,null,null,i.M,i.r)),o.ob(39,49152,null,0,s.tb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(-1,0,["ANOTA\xc7\xd5ES"])),(l()(),o.pb(41,0,null,null,2,"ion-row",[],null,null,null,i.I,i.n)),o.ob(42,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(43,0,[" "," "]))],(function(l,n){var u=n.component;l(n,27,0,1==u.row.Esforco),l(n,29,0,2==u.row.Esforco),l(n,31,0,3==u.row.Esforco),l(n,33,0,4==u.row.Esforco)}),(function(l,n){var u=n.component;l(n,5,0,u.row.Titulo),l(n,13,0,u.row.Tempo),l(n,18,0,u.row.Pontuacao),l(n,35,0,u.row.MensagemPontuacao),l(n,43,0,u.row.Observacao)}))}function C(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,11,"ion-header",[["translucent","true"]],null,null,null,i.C,i.h)),o.ob(1,49152,null,0,s.A,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.P,i.u)),o.ob(3,49152,null,0,s.yb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.y,i.d)),o.ob(5,49152,null,0,s.k,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,2,"ion-back-button",[["icon","chevron-back-outline"],["text",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Bb(l,8).onClick(u)&&t),t}),i.w,i.b)),o.ob(7,49152,null,0,s.f,[o.h,o.k,o.x],{icon:[0,"icon"],text:[1,"text"]},null),o.ob(8,16384,null,0,s.g,[[2,s.eb],s.Db],null,null),(l()(),o.pb(9,0,null,0,2,"ion-title",[],null,null,null,i.O,i.t)),o.ob(10,49152,null,0,s.wb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(-1,0,["day"])),(l()(),o.pb(12,0,null,null,14,"ion-content",[["fullscreen",""]],null,null,null,i.A,i.f)),o.ob(13,49152,null,0,s.t,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.pb(14,0,null,0,12,"div",[["class","bg-logo ion-padding"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,null,4,"ion-row",[],null,null,null,i.I,i.n)),o.ob(16,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(17,0,null,0,2,"ion-text",[],null,null,null,i.M,i.r)),o.ob(18,49152,null,0,s.tb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(19,0,[" "," "])),(l()(),o.pb(20,0,null,null,2,"ion-row",[["class","ion-margin-bottom"]],null,null,null,i.I,i.n)),o.ob(21,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(22,0,null,0,0,"h1",[["class","titulo"],["id","counter"]],null,null,null,null,null)),(l()(),o.eb(16777216,null,null,1,null,f)),o.ob(24,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,w)),o.ob(26,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"true"),l(n,7,0,"chevron-back-outline",""),l(n,13,0,""),l(n,24,0,!u.row.Concluido),l(n,26,0,u.row.Concluido)}),(function(l,n){l(n,19,0,n.component.row.Titulo)}))}var y=o.lb("app-day",p,(function(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-day",[],null,null,null,C,h)),o.ob(1,114688,null,0,p,[d.m,s.Db,s.Eb,s.a,s.Cb,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),M=u("s7LF"),I=function l(){_classCallCheck(this,l)};u.d(n,"DayPageModuleNgFactory",(function(){return _}));var _=o.mb(t,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[e.a,y]],[3,o.j],o.v]),o.zb(4608,r.k,r.j,[o.s,[2,r.r]]),o.zb(4608,M.h,M.h,[]),o.zb(4608,s.b,s.b,[o.x,o.g]),o.zb(4608,s.Cb,s.Cb,[s.b,o.j,o.p]),o.zb(4608,s.Fb,s.Fb,[s.b,o.j,o.p]),o.zb(1073742336,r.b,r.b,[]),o.zb(1073742336,M.g,M.g,[]),o.zb(1073742336,M.a,M.a,[]),o.zb(1073742336,s.Ab,s.Ab,[]),o.zb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),o.zb(1073742336,I,I,[]),o.zb(1073742336,t,t,[]),o.zb(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);