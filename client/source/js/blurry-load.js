(()=>{var d=Object.defineProperty;var o=(c,e)=>d(c,"name",{value:e,configurable:!0});var r=class r{supportsCSSFilters(e){e===void 0&&(e=!1);let t=document.createElement("test");t.style.cssText=(e?"-webkit-":"")+"filter: blur(2px)";let s=t.style.length!=0,u=document.documentMode===void 0||document.documentMode>9;return s&&u}load(...e){if(e.length===0&&(e=document.querySelectorAll(".blurry-load")),!this.supportsCSSFilters(!0)&&!this.supportsCSSFilters(!1))for(let t of e)t.src="",t.classList.add("no-blur"),t.classList.remove("blurry-load");for(let t of e){let s=new Image;s.src=t.getAttribute("data-large"),s.onload=()=>{t.src=s.src,t.classList.add("blur-out"),t.classList.remove("blurry-load")}}}};o(r,"BlurryImageLoad");var l=r,a=l;})();
