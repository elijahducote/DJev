(()=>{var $=Object.create;var j=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty;var p=(e,t)=>j(e,"name",{value:t,configurable:!0});var te=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ne=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Q(t))!ee.call(e,s)&&s!==a&&j(e,s,{get:()=>t[s],enumerable:!(o=z(t,s))||o.enumerable});return e};var oe=(e,t,a)=>(a=e!=null?$(U(e)):{},ne(t||!e||!e.__esModule?j(a,"default",{value:e,enumerable:!0}):a,e));var H=te((M,P)=>{(function(e,t){typeof M=="object"&&typeof P=="object"?P.exports=t():typeof define=="function"&&define.amd?define([],t):typeof M=="object"?M.RoundCarousel=t():e.RoundCarousel=t()})(self,function(){return function(){var e={562:function(s,c){(function(u){"use strict";var f,m=p(function(){return m=Object.assign||function(i){for(var n,l=1,h=arguments.length;l<h;l++)for(var v in n=arguments[l])Object.prototype.hasOwnProperty.call(n,v)&&(i[v]=n[v]);return i},m.apply(this,arguments)},"n");u.TouchSwipeEventType=void 0,(f=u.TouchSwipeEventType||(u.TouchSwipeEventType={})).up="swipeup",f.tap="tap",f.down="swipedown",f.move="swipemove",f.left="swipeleft",f.right="swiperight";var r={endX:0,endY:0,moveX:0,moveY:0,startX:0,startY:0},d=function(){function i(n,l,h){return n===void 0&&(n=document.body),l===void 0&&(l={}),h===void 0&&(h=40),this.element=n,this.eventData=l,this.threshold=h,this.coords=r,this.isMoving=!1,this.moveCoords={x:0,y:0},this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.bind(),this}return p(i,"e"),i.prototype.bind=function(){var n=this.element;n.addEventListener("touchstart",this.onStart,!1),n.addEventListener("touchmove",this.onMove,!1),n.addEventListener("touchend",this.onEnd,!1),n.addEventListener("mousedown",this.onStart,!1),n.addEventListener("mousemove",this.onMove,!1),n.addEventListener("mouseup",this.onEnd,!1)},i.prototype.unbind=function(){var n=this.element;n.removeEventListener("touchstart",this.onStart,!1),n.removeEventListener("touchmove",this.onMove,!1),n.removeEventListener("touchend",this.onEnd,!1),n.removeEventListener("mousedown",this.onStart,!1),n.removeEventListener("mousemove",this.onMove,!1),n.removeEventListener("mouseup",this.onEnd,!1)},i.prototype.getCoords=function(n){var l=this.moveCoords,h="pageX"in n;return l.x=h?n.pageX:n.changedTouches[0].screenX,l.y=h?n.pageY:n.changedTouches[0].screenY,l},i.prototype.resetCoords=function(){this.coords=r},i.prototype.getEndEventName=function(){var n=this.threshold,l=this.coords,h=l.startX,v=l.startY,y=l.endX,x=l.endY,V=Math.abs(y-h),O=Math.abs(x-v);if(V>O){if(y<h&&V>n)return u.TouchSwipeEventType.left;if(y>h&&V>n)return u.TouchSwipeEventType.right}else{if(x<v&&O>n)return u.TouchSwipeEventType.up;if(x>v&&O>n)return u.TouchSwipeEventType.down}return x===v&&y===h?u.TouchSwipeEventType.tap:""},i.prototype.dispatchEvent=function(n){var l=new CustomEvent(n,{detail:m(m({},this.eventData),{coords:this.coords})});this.element.dispatchEvent(l)},i.prototype.dispatchEnd=function(){var n=this.getEndEventName();n&&this.dispatchEvent(n)},i.prototype.onStart=function(n){var l=this.getCoords(n),h=l.x,v=l.y;this.isMoving=!0,this.coords.startX=h,this.coords.startY=v},i.prototype.onMove=function(n){if(this.isMoving){var l=this.getCoords(n),h=l.x,v=l.y;this.coords.moveX=h,this.coords.moveY=v,this.dispatchEvent(u.TouchSwipeEventType.move)}},i.prototype.onEnd=function(n){var l=this.getCoords(n),h=l.x,v=l.y;this.isMoving=!1,this.coords.endX=h,this.coords.endY=v,this.dispatchEnd(),this.resetCoords()},i}();u.default=d,Object.defineProperty(u,"__esModule",{value:!0})})(c)}},t={};function a(s){var c=t[s];if(c!==void 0)return c.exports;var u=t[s]={exports:{}};return e[s].call(u.exports,u,u.exports,a),u.exports}p(a,"n");var o={};return function(){"use strict";var s=o;Object.defineProperty(s,"__esModule",{value:!0}),s.RoundCarousel=void 0;var c=a(562),u=p(function(f,m){var r=this;if(this.touchsweep=void 0,this.defaultOptions={items:[],itemWidth:210,showControls:!0,prevButtonContent:"Previous",nextButtonContent:"Next"},this.selectedIndex=0,this.init=function(){r.build(),r.setStyle(),r.bind()},this.destroy=function(){r.unbind()},this.setSelectedIndex=function(d){r.selectedIndex=d},this.prev=function(){r.setSelectedIndex(r.selectedIndex-1),r.setStyle()},this.next=function(){r.setSelectedIndex(r.selectedIndex+1),r.setStyle()},this.getValues=function(){var d=r.options,i=d.items.length,n=d.itemWidth;return{theta:360/i,radius:Math.round((n||210)/2/Math.tan(Math.PI/i)),length:i}},this.getSlideStyle=function(d){var i=r.getValues(),n=i.length,l=i.theta,h=i.radius;return d<n?"opacity: 1; transform: rotateY(".concat(l*d,"deg) translateZ(").concat(h,"px);"):"opacity: 0; transform: none;"},this.setStyle=function(){var d,i,n=r.getValues(),l=n.theta,h=n.radius,v=l*r.selectedIndex*-1,y="transform: translateZ(".concat(-1*h,"px) rotateY(").concat(v,"deg)");(i=(d=r.element)===null||d===void 0?void 0:d.querySelector(".carousel__container"))===null||i===void 0||i.setAttribute("style",y)},this.bind=function(){var d=r.element,i=d.querySelector(".carousel__control--prev"),n=d.querySelector(".carousel__control--next");r.touchsweep=new c.default(d||void 0),d?.addEventListener("swipeleft",r.next),d?.addEventListener("swiperight",r.prev),i?.addEventListener("click",r.prev),n?.addEventListener("click",r.next)},this.unbind=function(){var d=r.element,i=d.querySelector(".carousel__control--prev"),n=d.querySelector(".carousel__control--next");r.touchsweep&&r.touchsweep.unbind(),d?.removeEventListener("swipeleft",r.next),d?.removeEventListener("swiperight",r.prev),i?.removeEventListener("click",r.prev),n?.removeEventListener("click",r.next)},this.build=function(){r.element.innerHTML=`
            <div class="carousel">
                <div class="carousel__container">
                    `.concat(r.buildItems(),`
                </div>
            </div>

            `).concat(r.buildControls(),`
        `)},this.buildItems=function(){return r.options.items.map(function(d,i){return`
                    <div class="carousel__slide" style="`.concat(r.getSlideStyle(i),`">
                        <img src="`).concat(d.image,'" alt="').concat(d.alt,`" />

                        <div class="carousel__slide-overlay">`).concat(d.content,`</div>
                    </div>
                `)}).join("")},this.buildControls=function(){return r.options.showControls?`
            <div class="carousel__controls">
                <button class="carousel__control carousel__control--prev">
                    `.concat(r.options.prevButtonContent,`
                </button>

                <button class="carousel__control carousel__control--next">
                    `).concat(r.options.nextButtonContent,`
                </button>
            </div>
        `):""},this.element=f,this.options=Object.assign({},this.defaultOptions,m),!this.element)throw new Error("Carousel element is not defined");this.init()},"i");s.RoundCarousel=u,s.default=u}(),o}()})});var _=Object.getPrototypeOf,b,D,w,E,X={isConnected:1},re=1e3,C,se={},ie=_(X),A=_(_),g,R=p((e,t,a,o)=>(e??(setTimeout(a,o),new Set)).add(t),"addAndScheduleOnFirst"),k=p((e,t,a)=>{let o=w;w=t;try{return e(a)}catch(s){return console.error(s),a}finally{w=o}},"runAndCaptureDeps"),T=p(e=>e.filter(t=>t._dom?.isConnected),"keepConnected"),B=p(e=>C=R(C,e,()=>{for(let t of C)t._bindings=T(t._bindings),t._listeners=T(t._listeners);C=g},re),"addStatesToGc"),L={get val(){return w?._getters?.add(this),this.rawVal},get oldVal(){return w?._getters?.add(this),this._oldVal},set val(e){w?._setters?.add(this),e!==this.rawVal&&(this.rawVal=e,this._bindings.length+this._listeners.length?(D?.add(this),b=R(b,this,le)):this._oldVal=e)}},N=p(e=>({__proto__:L,rawVal:e,_oldVal:e,_bindings:[],_listeners:[]}),"state"),S=p((e,t)=>{let a={_getters:new Set,_setters:new Set},o={f:e},s=E;E=[];let c=k(e,a,t);c=(c??document).nodeType?c:new Text(c);for(let u of a._getters)a._setters.has(u)||(B(u),u._bindings.push(o));for(let u of E)u._dom=c;return E=s,o._dom=c},"bind"),I=p((e,t=N(),a)=>{let o={_getters:new Set,_setters:new Set},s={f:e,s:t};s._dom=a??E?.push(s)??X,t.val=k(e,o,t.rawVal);for(let c of o._getters)o._setters.has(c)||(B(c),c._listeners.push(s));return t},"derive"),W=p((e,...t)=>{for(let a of t.flat(1/0)){let o=_(a??0),s=o===L?S(()=>a.val):o===A?S(a):a;s!=g&&e.append(s)}return e},"add"),q=p((e,t,...a)=>{let[o,...s]=_(a[0]??0)===ie?a:[{},...a],c=e?document.createElementNS(e,t):document.createElement(t);for(let[u,f]of Object.entries(o)){let m=p(l=>l?Object.getOwnPropertyDescriptor(l,u)??m(_(l)):g,"getPropDescriptor"),r=t+","+u,d=se[r]??=m(_(c))?.set??0,i=u.startsWith("on")?(l,h)=>{let v=u.slice(2);c.removeEventListener(v,h),c.addEventListener(v,l)}:d?d.bind(c):c.setAttribute.bind(c,u),n=_(f??0);u.startsWith("on")||n===A&&(f=I(f),n=L),n===L?S(()=>(i(f.val,f._oldVal),c)):i(f)}return W(c,s)},"tag"),Y=p(e=>({get:p((t,a)=>q.bind(g,e,a),"get")}),"handler"),G=p((e,t)=>t?t!==e&&e.replaceWith(t):e.remove(),"update"),le=p(()=>{let e=0,t=[...b].filter(o=>o.rawVal!==o._oldVal);do{D=new Set;for(let o of new Set(t.flatMap(s=>s._listeners=T(s._listeners))))I(o.f,o.s,o._dom),o._dom=g}while(++e<100&&(t=[...D]).length);let a=[...b].filter(o=>o.rawVal!==o._oldVal);b=g;for(let o of new Set(a.flatMap(s=>s._bindings=T(s._bindings))))G(o._dom,S(o.f,o._dom)),o._dom=g;for(let o of a)o._oldVal=o.rawVal},"updateDoms"),Z={tags:new Proxy(e=>new Proxy(q,Y(e)),Y()),hydrate:p((e,t)=>G(e,S(t,e)),"hydrate"),add:W,state:N,derive:I};function F(e,t,a){let o=[];if(a&&(o[0]=a),t||(t="span"),Array.isArray(e)){let s=e.length,c=s;for(;s;--s)o.push(e[c-s])}else o.push(e);return Z.tags[t].apply(null,o)}p(F,"htm");var J=oe(H(),1);var K=F(void 0,"div",{id:"carousel"}),ae=Array(5).fill("").map((e,t)=>({alt:"",image:`https://cdn.jsdelivr.net/gh/elijahducote/DJEv@main/img/${t}.jpg`,content:""}));new J.RoundCarousel(K,{items:ae,itemWidth:480,showControls:!0,nextButtonContent:"",prevButtonContent:""});function ge(){return K}p(ge,"Events");})();
