function _defineProperties(l,n){for(var u=0;u<n.length;u++){var o=n[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{L6id:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),e=function l(){_classCallCheck(this,l)},i=u("pMnS"),t=u("s7LF"),a=u("MKJQ"),s=u("sZkV"),r=u("SVse"),c=u("Fic2"),b=u("H+bZ"),p=u("dM80"),d=function(){function l(n,u,o,e){_classCallCheck(this,l),this.router=n,this.autenticaoService=u,this.apiService=o,this.commonService=e,this.atividadeInicial=!1,this.dotsCount=[0,1,2,3],this.DisplayNone=!0}return _createClass(l,[{key:"ngOnInit",value:function(){this.Helper=this.commonService;var l=this.autenticaoService.getUser();this.ConfigurarApp(l)}},{key:"ConfigurarApp",value:function(l){var n=this;this.apiService.buscarEventoAtivo(l).subscribe((function(u){n.dataInicial=u.data.evento.data_inicio,n.BuscarAtividades(l,u.data.evento._id)}))}},{key:"BuscarAtividades",value:function(l,n){var u=this;this.apiService.buscarAtividadesPorEventoAtleta(l,n).subscribe((function(l){var n=u.commonService;u.atividadeInicial=0==l.atividades.length,u.registros=l,u.EventoPadrao=n.CriarEventoPadrao(u.dataInicial);var o=[],e=n.addDays(new Date,-1);u.EventoPadrao.Periodos.forEach((function(l){var n="";e>=l.DataInicio&&(n="Selected"),o.push({Titulo:"Per\xedodo "+l.Periodo,Selected:n,Value:l.Periodo})})),u.periodos=o,u.CarregarAtividades(null)}))}},{key:"VisualizarInfoSemana",value:function(l){(l.Concluida||l.Desbloqueada())&&(this.commonService.setData(l,this.commonService.weekView_key),this.router.navigate(["../week"]))}},{key:"CarregarAtividades",value:function(l){var n=this,u=this.commonService.addDays(new Date,-1),o=null==l?2:l.target.value,e=this.EventoPadrao.Periodos.filter((function(l){return l.Periodo==Number.parseInt(o)}))[0];e.Semanas.forEach((function(l){var o=n.registros.atividades.filter((function(n){return n.semana==l.Numero})),e=0;l.Dias.forEach((function(i){if(0!=o.length){var t=n.registros.atividades.filter((function(n){return n.semana==l.Numero&&n.dia===i.Numero}))[0];0!=t.length&&(e+=t.tempo,l.Tempo+=t.tempo,l.Pontuacao+=t.pontuacao,i.Tempo=t.tempo,i.Pontuacao=t.pontuacao,i.Observacao=t.observacao,i.MensagemPontuacao=t.pontuacao_mensagem,i.Esforco=t.esforco)}i.Concluido=1==n.registros.atividades.filter((function(n){return n.semana==l.Numero&&n.dia==i.Numero})).length,i.Class=i.Data<=u?"day-open":"day-closed",i.Desbloqueado=i.Data<=u})),l.Tempo=n.commonService.formatarMinutos(e),l.Concluida=7==n.registros.atividades.filter((function(n){return n.semana==l.Numero})).length,l.Class=l.DataInicio<=u?"week-open":"week-closed",l.Desbloqueada=function(){return"week-open"===l.Class}})),this.semanas=e.Semanas,this.DisplayNone=!1}}]),l}(),f=u("iInd"),m=o.nb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:url('bg_05_blue.c65c503007df67be747a.jpg') no-repeat 74% 100%/cover}.bg-logo[_ngcontent-%COMP%]{background:url(logo_corte.9683045d30a74098c22f.png) 100% 20%/27% auto no-repeat fixed;padding-top:40px}"]],data:{}});function v(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,3,"option",[],[[8,"selected",0]],null,null,null,null)),o.ob(1,147456,null,0,t.f,[o.k,o.B,[8,null]],{value:[0,"value"]},null),o.ob(2,147456,null,0,t.i,[o.k,o.B,[8,null]],{value:[0,"value"]},null),(l()(),o.Gb(3,null,[""," "]))],(function(l,n){l(n,1,0,o.tb(1,"",n.context.$implicit.Value,"")),l(n,2,0,o.tb(1,"",n.context.$implicit.Value,""))}),(function(l,n){l(n,0,0,o.tb(1,"",n.context.$implicit.Selected,"")),l(n,3,0,n.context.$implicit.Titulo)}))}function h(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,21,"ion-row",[["lass","ion-margin-bottom"]],null,null,null,a.I,a.n)),o.ob(1,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,19,"ion-col",[],null,null,null,a.z,a.e)),o.ob(3,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,3,"ion-row",[],null,null,null,a.I,a.n)),o.ob(5,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,1,"ion-spinner",[["name","dots"]],null,null,null,a.L,a.q)),o.ob(7,49152,null,0,s.ob,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(8,0,null,0,13,"ion-row",[["class","card-info"]],null,null,null,a.I,a.n)),o.ob(9,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(10,0,null,0,11,"ion-row",[["class","d-flex w-100"]],null,null,null,a.I,a.n)),o.ob(11,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(12,0,null,0,8,"div",[["class","dados"]],null,null,null,null,null)),(l()(),o.pb(13,0,null,null,3,"div",[["class","tempo"]],null,null,null,null,null)),(l()(),o.pb(14,0,null,null,2,"div",[["class","tempo-icon"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,null,1,"ion-spinner",[["name","dots"]],null,null,null,a.L,a.q)),o.ob(16,49152,null,0,s.ob,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(17,0,null,null,3,"div",[["class","pontos"]],null,null,null,null,null)),(l()(),o.pb(18,0,null,null,2,"div",[["class","pontos-icon"]],null,null,null,null,null)),(l()(),o.pb(19,0,null,null,1,"ion-spinner",[["name","dots"]],null,null,null,a.L,a.q)),o.ob(20,49152,null,0,s.ob,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(21,0,null,0,0,"div",[["class","icon-card"]],null,null,null,null,null))],(function(l,n){l(n,7,0,"dots"),l(n,16,0,"dots"),l(n,20,0,"dots")}),null)}function g(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),o.eb(16777216,null,null,1,null,h)),o.ob(2,278528,null,0,r.h,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.dotsCount)}),null)}function k(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,18,"ion-col",[],[[8,"className",0]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.VisualizarInfoSemana(l.parent.context.$implicit)&&o),o}),a.z,a.e)),o.ob(1,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,4,"ion-row",[],null,null,null,a.I,a.n)),o.ob(3,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,2,"ion-text",[],null,null,null,a.M,a.r)),o.ob(5,49152,null,0,s.tb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(6,0,["",""])),(l()(),o.pb(7,0,null,0,11,"ion-row",[["class","card-info"]],null,null,null,a.I,a.n)),o.ob(8,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(9,0,null,0,9,"ion-row",[["class","d-flex w-100"]],null,null,null,a.I,a.n)),o.ob(10,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(11,0,null,0,6,"div",[["class","dados"]],null,null,null,null,null)),(l()(),o.pb(12,0,null,null,2,"div",[["class","tempo"]],null,null,null,null,null)),(l()(),o.pb(13,0,null,null,1,"div",[["class","tempo-icon"]],null,null,null,null,null)),(l()(),o.pb(14,0,null,null,0,"img",[["src","./assets/images/clock_gray.svg"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,null,2,"div",[["class","pontos"]],null,null,null,null,null)),(l()(),o.pb(16,0,null,null,1,"div",[["class","pontos-icon"]],null,null,null,null,null)),(l()(),o.pb(17,0,null,null,0,"img",[["src","./assets/images/star_gray.svg"]],null,null,null,null,null)),(l()(),o.pb(18,0,null,0,0,"div",[["class","icon-card"]],null,null,null,null,null))],null,(function(l,n){l(n,0,0,o.tb(1,"",n.parent.context.$implicit.Class,"")),l(n,6,0,n.parent.context.$implicit.Titulo)}))}function x(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,22,"ion-col",[["class","week-finished"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.VisualizarInfoSemana(l.parent.context.$implicit)&&o),o}),a.z,a.e)),o.ob(1,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,4,"ion-row",[],null,null,null,a.I,a.n)),o.ob(3,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,2,"ion-text",[],null,null,null,a.M,a.r)),o.ob(5,49152,null,0,s.tb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(6,0,["",""])),(l()(),o.pb(7,0,null,0,15,"ion-row",[["class","card-info"]],null,null,null,a.I,a.n)),o.ob(8,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(9,0,null,0,13,"ion-row",[["class","d-flex w-100"]],null,null,null,a.I,a.n)),o.ob(10,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(11,0,null,0,10,"div",[["class","dados"]],null,null,null,null,null)),(l()(),o.pb(12,0,null,null,4,"div",[["class","tempo"]],null,null,null,null,null)),(l()(),o.pb(13,0,null,null,1,"div",[["class","tempo-icon"]],null,null,null,null,null)),(l()(),o.pb(14,0,null,null,0,"img",[["src","./assets/images/relogio.svg"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,null,1,"div",[["class","tempo-tempo"]],null,null,null,null,null)),(l()(),o.Gb(16,null,[" "," "])),(l()(),o.pb(17,0,null,null,4,"div",[["class","pontos"]],null,null,null,null,null)),(l()(),o.pb(18,0,null,null,1,"div",[["class","pontos-icon"]],null,null,null,null,null)),(l()(),o.pb(19,0,null,null,0,"img",[["src","./assets/images/estrela.svg"]],null,null,null,null,null)),(l()(),o.pb(20,0,null,null,1,"div",[["class","pontos-valor"]],null,null,null,null,null)),(l()(),o.Gb(21,null,[" "," "])),(l()(),o.pb(22,0,null,0,0,"div",[["class","icon-card"]],null,null,null,null,null))],null,(function(l,n){l(n,6,0,n.parent.context.$implicit.Titulo),l(n,16,0,n.parent.context.$implicit.Tempo),l(n,21,0,n.parent.context.$implicit.Pontuacao)}))}function w(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,5,"ion-row",[["class","ion-margin-bottom"]],null,null,null,a.I,a.n)),o.ob(1,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.eb(16777216,null,0,1,null,k)),o.ob(3,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,x)),o.ob(5,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,!n.context.$implicit.Concluida),l(n,5,0,n.context.$implicit.Concluida)}),null)}function I(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),o.eb(16777216,null,null,1,null,w)),o.ob(2,278528,null,0,r.h,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.semanas)}),null)}function C(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,6,"ion-header",[["translucent","true"]],null,null,null,a.C,a.h)),o.ob(1,49152,null,0,s.A,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.P,a.u)),o.ob(3,49152,null,0,s.yb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,2,"ion-title",[],null,null,null,a.O,a.t)),o.ob(5,49152,null,0,s.wb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(-1,0,["Home"])),(l()(),o.pb(7,0,null,null,20,"ion-content",[["fullscreen",""]],null,null,null,a.A,a.f)),o.ob(8,49152,null,0,s.t,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.pb(9,0,null,0,18,"div",[["class","bg-logo ion-padding"]],null,null,null,null,null)),(l()(),o.pb(10,0,null,null,3,"ion-row",[["class","ion-margin-bottom"]],null,null,null,a.I,a.n)),o.ob(11,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(12,0,null,0,1,"ion-progress-bar",[["color","secondary"],["value","0.5"]],null,null,null,a.H,a.m)),o.ob(13,49152,null,0,s.V,[o.h,o.k,o.x],{color:[0,"color"],value:[1,"value"]},null),(l()(),o.pb(14,0,null,null,4,"ion-row",[],null,null,null,a.I,a.n)),o.ob(15,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(16,0,null,0,2,"ion-text",[],null,null,null,a.M,a.r)),o.ob(17,49152,null,0,s.tb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(-1,0,[" Meta alcan\xe7ada em "])),(l()(),o.pb(19,0,null,null,4,"ion-row",[["class","ion-margin-bottom"]],null,null,null,a.I,a.n)),o.ob(20,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(21,0,null,0,2,"select",[["class","select-mes"]],null,[[null,"change"]],(function(l,n,u){var o=!0;return"change"===n&&(o=!1!==l.component.CarregarAtividades(u)&&o),o}),null,null)),(l()(),o.eb(16777216,null,null,1,null,v)),o.ob(23,278528,null,0,r.h,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.eb(16777216,null,null,1,null,g)),o.ob(25,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,I)),o.ob(27,16384,null,0,r.i,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"true"),l(n,8,0,""),l(n,13,0,"secondary","0.5"),l(n,23,0,u.periodos),l(n,25,0,u.DisplayNone),l(n,27,0,!u.DisplayNone)}),null)}var y=o.lb("app-home",d,(function(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-home",[],null,null,null,C,m)),o.ob(1,114688,null,0,d,[f.m,c.a,b.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);u.d(n,"HomePageModuleNgFactory",(function(){return P}));var P=o.mb(e,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[i.a,y]],[3,o.j],o.v]),o.zb(4608,r.k,r.j,[o.s,[2,r.r]]),o.zb(4608,t.h,t.h,[]),o.zb(4608,s.b,s.b,[o.x,o.g]),o.zb(4608,s.Cb,s.Cb,[s.b,o.j,o.p]),o.zb(4608,s.Fb,s.Fb,[s.b,o.j,o.p]),o.zb(1073742336,r.b,r.b,[]),o.zb(1073742336,t.g,t.g,[]),o.zb(1073742336,t.a,t.a,[]),o.zb(1073742336,s.Ab,s.Ab,[]),o.zb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),o.zb(1073742336,e,e,[]),o.zb(1024,f.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);