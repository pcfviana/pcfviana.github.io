(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{EpFf:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_modal",(function(){return u}));var o=i("54nT"),a=(i("AfW+"),i("aiEM")),s=i("iAHb"),r=i("0AIG"),n=i("AzGJ"),d=(i("kBU6"),i("u6aj")),l=i("Dl6n"),c=i("m9yc"),m=i("Uch9");const h=(e,t)=>{const i=Object(s.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),o=Object(s.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),a=Object(s.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).beforeAddClass("show-modal").addAnimation([i,o]);if(t){const e=document.body,i=`translateY(${"ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))"}) scale(0.93)`,o=Object(s.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}).afterStyles({transform:i}).beforeAddWrite(()=>e.style.setProperty("background-color","black","important")).addElement(t).keyframes([{offset:0,transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,transform:i,borderRadius:"10px 10px 0 0"}]);a.addAnimation(o)}return a},p=(e,t,i=500)=>{const o=Object(s.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a=Object(s.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY(100%)"),r=Object(s.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(i).addAnimation([o,a]);if(t){const e="ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))",i=document.body,o=.93,a=Object(s.a)().addElement(t).beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(e=>{1===e&&(t.style.setProperty("overflow",""),Array.from(i.querySelectorAll("ion-modal")).filter(e=>void 0!==e.presentingElement).length<=1&&i.style.setProperty("background-color",""))}).keyframes([{offset:0,transform:`translateY(${e}) scale(${o})`,borderRadius:"10px 10px 0 0"},{offset:1,transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);r.addAnimation(a)}return r},b=e=>{const t=Object(s.a)(),i=Object(s.a)(),o=Object(s.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([i,o])},f=e=>{const t=Object(s.a)(),i=Object(s.a)(),o=Object(s.a)(),a=e.querySelector(".modal-wrapper");return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(a).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,o])},u=class{constructor(e){Object(o.k)(this,e),this.gestureAnimationDismissing=!1,this.presented=!1,this.mode=Object(o.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,d.a)},this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onLifecycle=e=>{const t=this.usersElement,i=y[e.type];if(t&&i){const o=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(o)}},Object(d.e)(this.el),this.didPresent=Object(o.e)(this,"ionModalDidPresent",7),this.willPresent=Object(o.e)(this,"ionModalWillPresent",7),this.willDismiss=Object(o.e)(this,"ionModalWillDismiss",7),this.didDismiss=Object(o.e)(this,"ionModalDidDismiss",7)}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await Object(c.a)(this.delegate,e,this.component,["ion-page"],t),await Object(m.a)(this.usersElement),await Object(d.f)(this,"modalEnter",h,b,this.presentingElement);const i=Object(o.d)(this);if(this.swipeToClose&&"ios"===i){const e=this.animation=p(this.el,this.presentingElement);this.gesture=((e,t,i)=>{const o=e.offsetHeight;let s=!1;const d=Object(n.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:e=>{const t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:()=>{t.progressStart(!0,s?1:0)},onMove:e=>{const i=e.deltaY/o;i<0||t.progressStep(i)},onEnd:e=>{const n=e.velocityY,l=e.deltaY/o;if(l<0)return;const c=(e.deltaY+1e3*n)/o>=.5;let m=c?-.001:.001;c?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),m+=Object(r.a)([0,0],[.32,.72],[0,1],[1,1],l)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),m+=Object(r.a)([0,0],[1,0],[.68,.28],[1,1],l)[0]);const h=((e,t)=>Object(a.c)(400,e/Math.abs(1.1*t),500))(c?l*o:(1-l)*o,n);s=c,d.enable(!1),t.onFinish(()=>{c||d.enable(!0)}).progressEnd(c?1:0,m,h),c&&i()}});return d})(this.el,e,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}}async dismiss(e,t){if(this.gestureAnimationDismissing&&"gesture"!==t)return!1;const i=void 0===this.animation||t===d.a||void 0===t?p:void 0,o=d.i.get(this)||[],a=await Object(d.g)(this,e,t,"modalLeave",i,f,this.presentingElement);return a&&(await Object(c.b)(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),o.forEach(e=>e.destroy())),this.animation=void 0,a}onDidDismiss(){return Object(d.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return Object(d.h)(this.el,"ionModalWillDismiss")}render(){const e=Object(o.d)(this);return Object(o.i)(o.a,{"no-router":!0,"aria-modal":"true",class:Object.assign({[e]:!0,"modal-card":void 0!==this.presentingElement},Object(l.b)(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{role:"dialog",class:"modal-wrapper"}))}get el(){return Object(o.f)(this)}static get style(){return".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.32)}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"}},y={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);