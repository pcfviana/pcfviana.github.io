(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{OfCA:function(t,e,n){"use strict";n.r(e),n.d(e,"IonToggle",function(){return d});var o=n("B5Ai"),i=n("cBjU"),r=n("d6Vy"),a=n("JvIM"),c=n("ySCp"),d=function(){function t(){var t=this;this.inputId="ion-tg-"+g++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()}}return t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var t,e=this;return o.c(this,function(o){switch(o.label){case 0:return t=this,[4,n.e(0).then(n.bind(null,"R5Yi"))];case 1:return t.gesture=o.sent().createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return e.onStart()},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.onClick=function(){this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(){this.activated=!0,this.setFocus()},t.prototype.onMove=function(t){(function(t,e,n,o){var i="rtl"===t.dir;return e?!i&&-10>n||i&&10<n:!i&&10<n||i&&-10>n})(this.doc,this.checked,t.deltaX)&&(this.checked=!this.checked,Object(c.d)())},t.prototype.onEnd=function(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()},t.prototype.getValue=function(){return this.value||""},t.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},t.prototype.hostData=function(){var t,e=this,n=e.disabled,o=e.checked,i=e.activated,c=e.color,d=e.el,g=e.inputId+"-lbl",s=Object(a.d)(d);return s&&(s.id=g),{role:"checkbox","aria-disabled":n?"true":null,"aria-checked":""+o,"aria-labelledby":g,class:Object.assign({},Object(r.c)(c),(t={},t[""+this.mode]=!0,t["in-item"]=Object(r.d)("ion-item",d),t["toggle-activated"]=i,t["toggle-checked"]=o,t["toggle-disabled"]=n,t.interactive=!0,t))}},t.prototype.render=function(){var t=this,e=this.getValue();return Object(a.e)(!0,this.el,this.name,this.checked?e:"",this.disabled),[Object(i.b)("div",{class:"toggle-icon"},Object(i.b)("div",{class:"toggle-inner"})),Object(i.b)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return t.buttonEl=e}})]},Object.defineProperty(t,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-toggle-md-h{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ion-focused.sc-ion-toggle-md-h   input.sc-ion-toggle-md{border:2px solid #5e9ed6}.toggle-disabled.sc-ion-toggle-md-h{pointer-events:none}button.sc-ion-toggle-md{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl].sc-ion-toggle-md-h   button.sc-ion-toggle-md, [dir=rtl]   .sc-ion-toggle-md-h   button.sc-ion-toggle-md, [dir=rtl].sc-ion-toggle-md   button.sc-ion-toggle-md{left:unset;right:unset;right:0}button.sc-ion-toggle-md::-moz-focus-inner{border:0}.sc-ion-toggle-md-h{--background:var(--ion-color-medium-tint,#a2a4ab);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:var(--ion-background-color,#fff);--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-toggle-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:rgba(var(--ion-color-base-rgb),.5)}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{background:var(--ion-color-base)}.toggle-icon.sc-ion-toggle-md{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner.sc-ion-toggle-md{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}[dir=rtl].sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl]   .sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl].sc-ion-toggle-md   .toggle-inner.sc-ion-toggle-md{left:unset;right:unset;right:0}.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:var(--background-checked)}.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}[dir=rtl].toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl]   .toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl].sc-ion-toggle-md-h -no-combinator.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl]   .sc-ion-toggle-md-h -no-combinator.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}.toggle-disabled.sc-ion-toggle-md-h{opacity:.3}.in-item[slot].sc-ion-toggle-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item[slot].sc-ion-toggle-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}.in-item[slot=start].sc-ion-toggle-md-h{padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item[slot=start].sc-ion-toggle-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),g=0}}]);