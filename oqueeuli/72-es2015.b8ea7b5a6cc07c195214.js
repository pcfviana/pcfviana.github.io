(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{k5eQ:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_route",(function(){return s})),o.d(e,"ion_route_redirect",(function(){return a})),o.d(e,"ion_router",(function(){return P})),o.d(e,"ion_router_link",(function(){return j}));var n=o("54nT"),r=(o("AfW+"),o("aiEM")),i=o("Dl6n");const s=class{constructor(t){Object(n.k)(this,t),this.url="",this.ionRouteDataChanged=Object(n.e)(this,"ionRouteDataChanged",7)}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const o=t?Object.keys(t):[],n=e?Object.keys(e):[];if(o.length===n.length){for(const n of o)if(t[n]!==e[n])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},a=class{constructor(t){Object(n.k)(this,t),this.ionRouteRedirectChanged=Object(n.e)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},h=t=>"/"+t.filter(t=>t.length>0).join("/"),c=t=>{if(null==t)return[""];const e=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e},l=async(t,e,o,n,r=!1)=>{try{const i=d(t);if(n>=e.length||!i)return r;await i.componentOnReady();const s=e[n],a=await i.setRouteId(s.id,s.params,o);return a.changed&&(o="root",r=!0),r=await l(a.element,e,o,n+1,r),a.markVisible&&await a.markVisible(),r}catch(i){return console.error(i),!1}},u=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",d=t=>{if(t)return t.matches(u)?t:t.querySelector(u)||void 0},g=(t,e)=>e.find(e=>((t,e)=>{const{from:o,to:n}=e;if(void 0===n)return!1;if(o.length>t.length)return!1;for(let r=0;r<o.length;r++){const e=o[r];if("*"===e)return!0;if(e!==t[r])return!1}return o.length===t.length})(t,e)),f=(t,e)=>{const o=Math.min(t.length,e.length);let n=0;for(;n<o&&t[n].toLowerCase()===e[n].id;n++);return n},p=(t,e)=>{const o=new b(t);let n,r=!1;for(let i=0;i<e.length;i++){const t=e[i].path;if(""===t[0])r=!0;else{for(const e of t){const t=o.next();if(":"===e[0]){if(""===t)return null;n=n||[],(n[i]||(n[i]={}))[e.slice(1)]=t}else if(t!==e)return null}r=!1}}return r&&r!==(""===o.next())?null:n?e.map((t,e)=>({id:t.id,path:t.path,params:m(t.params,n[e])})):e},m=(t,e)=>!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0,w=t=>{let e=1,o=1;for(const n of t)for(const t of n.path)":"===t[0]?e+=Math.pow(1,o):""!==t&&(e+=Math.pow(2,o)),o++;return e};class b{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const R=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=y(t,"to");return{from:c(y(t,"from")),to:null==e?void 0:c(e)}}),v=t=>O(C(t)),C=(t,e=t)=>Array.from(e.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(e=>{const o=y(e,"component");if(null==o)throw new Error("component missing in ion-route");return{path:c(y(e,"url")),id:o.toLowerCase(),params:e.componentProps,children:C(t,e)}}),y=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,O=t=>{const e=[];for(const o of t)k([],e,o);return e},k=(t,e,o)=>{const n=t.slice();if(n.push({id:o.id,path:o.path,params:o.params}),0!==o.children.length)for(const r of o.children)k(n,e,r);else e.push(n)},P=class{constructor(t){Object(n.k)(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(n.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.e)(this,"ionRouteDidChange",7)}async componentWillLoad(){console.debug("[ion-router] router will load"),await(d(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(r.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(r.e)(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,e="forward"){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);const o=c(t);return this.setPath(o,e),this.writeNavStateRoot(o,e)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const o=e.map(t=>t.id);console.debug(`%c ${h(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${o.join(", ")})`)}console.groupEnd()})(v(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${h(e.from)}`,"font-weight: bold"," TO: ",`$c ${h(e.to)}`,"font-weight: bold");console.groupEnd()})(R(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:o}=await(async t=>{const e=[];let o,n=window.document.body;for(;o=d(n),o;){const t=await o.getRouteId();if(!t)break;n=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:o}})(),n=((t,e)=>{let o=null,n=0;const r=t.map(t=>t.id);for(const i of e){const t=f(r,i);t>n&&(o=i,n=t)}return o?o.map((e,o)=>({id:e.id,path:e.path,params:m(e.params,t[o]&&t[o].params)})):null})(e,v(this.el));if(!n)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const r=(t=>{const e=[];for(const o of t)for(const t of o.path)if(":"===t[0]){const n=o.params&&o.params[t.slice(1)];if(!n)return null;e.push(n)}else""!==t&&e.push(t);return e})(n);return r?(console.debug("[ion-router] nav changed -> update URL",e,r),this.setPath(r,t),await this.safeWriteNavState(o,n,"root",r,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&g(t,R(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,o=this.lastState;return this.lastState=e,e>o?"forward":e<o?"back":"root"}async writeNavStateRoot(t,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const o=R(this.el),n=g(t,o);let r=null;n&&(this.setPath(n.to,e),r=n.from,t=n.to);const i=((t,e)=>{let o=null,n=0;for(const r of e){const e=p(t,r);if(null!==e){const t=w(e);t>n&&(n=t,o=e)}}return o})(t,v(this.el));return i?this.safeWriteNavState(document.body,i,e,t,r):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,o,n,r,i=0){const s=await this.lock();let a=!1;try{a=await this.writeNavState(t,e,o,n,r,i)}catch(h){console.error(h)}return s(),a}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async writeNavState(t,e,o,n,r,i=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const s=this.routeChangeEvent(n,r);s&&this.ionRouteWillChange.emit(s);const a=await l(t,e,o,i);return this.busy=!1,a&&console.debug("[ion-router] route changed",n),s&&this.ionRouteDidChange.emit(s),a}setPath(t,e){this.state++,((t,e,o,n,r,i)=>{let s=h([...c(this.root),...n]);o&&(s="#"+s),"forward"===r?t.pushState(i,"",s):t.replaceState(i,"",s)})(window.history,0,this.useHash,t,e,this.state)}getPath(){return((t,e,o)=>{let n=t.pathname;if(this.useHash){const e=t.hash;n="#"===e[0]?e.slice(1):""}return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let o=0;o<t.length;o++)if(t[o].length>0&&t[o]!==e[o])return null;return e.length===t.length?[""]:e.slice(t.length)})(c(e),c(n))})(window.location,this.root)}routeChangeEvent(t,e){const o=this.previousPath,n=h(t);return this.previousPath=n,n===o?null:{from:o,redirectedFrom:e?h(e):null,to:n}}get el(){return Object(n.f)(this)}},j=class{constructor(t){Object(n.k)(this,t),this.routerDirection="forward",this.onClick=t=>{Object(i.d)(this.href,t,this.routerDirection)}}render(){const t=Object(n.d)(this),e={href:this.href,rel:this.rel,target:this.target};return Object(n.i)(n.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(i.a)(this.color)),{[t]:!0,"ion-activatable":!0})},Object(n.i)("a",Object.assign({},e),Object(n.i)("slot",null)))}static get style(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}}}]);