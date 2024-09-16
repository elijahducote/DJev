import van from "vanjs-core";
import {Route, now} from "vanjs-router";
import {Loader} from "vanjs-feather";
import {htm} from "./utility";
import {Header} from "./header";
import {Home} from "./home";
import {Events} from "./events";
import {Booking} from "./booking";
import {Playlists} from "./playlists";
import BlurryImageLoad from "./blurry-load";

const wrapper = document.getElementsByClassName("wrapper"),
app = wrapper[0],
siteHeader = Header(wrapper),
blurryLoader = new BlurryImageLoad();

function WebApp(page,args) {
  const loading = Loader({class:"icon spinner"});
  return Route({
      rule: page.name.toLowerCase(),
      Loader: page,
      onLoad: function () {
        const elm = this.element.parentElement;
        loading.addEventListener("animationiteration",function () {
          siteHeader.style.opacity = "0.5";
          loading.style.animationPlayState = "paused";
          loading.classList.remove("spinner");
          loading.classList.add("fadeAway");
          loading.style.animationPlayState = "running";
          Object.assign(elm.style, {display:"initial",visibility:"visible"});
          loading.addEventListener("animationend", function () {
            loading.style.animationPlayState = "paused";
            loading.parentElement.remove();
            elm.style.opacity = "1.0";
            siteHeader.style.opacity = "1.0";
            wrapper[1].firstElementChild.style.opacity = "1.0";
            wrapper[2].firstElementChild.style.opacity = "1.0";
            wrapper[3].firstElementChild.style.opacity = "1.0";
          },{once:true});
          blurryLoader.load();
        },{once:true});
        this.show();
      },
      onFirst: function () {
        /* document.addEventListener("DOMContentLoaded", function () {
          van.add(siteHeader.parentElement,htm(loading,"main"));
          loading.style.animationPlayState = "running";
        },{once:true}); */

        let prev = now.oldVal.split("/",2),
        cur = now.rawVal.split("/",2);
      
        console.log(prev,cur);
      
        if (prev[prev.length - 1] !== cur[cur.length - 1]) {
          document.getElementById(prev[prev.length - 1]).style.opacity = "0";
          document.getElementById(prev[prev.length - 1]).addEventListener("transitionend", function () {
            Object.assign(document.getElementById(prev[prev.length - 1]).style,{display:"none",visibility:"hidden",opacity:"0"});
          });
        }


        //let prevSector = now.oldVal;
        //if (prevSector.charCodeAt(0) === 47) prevSector = prevSector.substring(1);
        //Object.assign(document.getElementById(prevSector).style,{display:"none",visibility:"hidden"});
        van.add(siteHeader.parentElement,htm(loading,"main"));
        loading.style.animationPlayState = "running";
      }
  });
}
//Pages
const landing = WebApp.bind(this,Home),
shows = WebApp.bind(this,Events),
contact = WebApp.bind(this,Booking),
listen = WebApp.bind(this,Playlists);

van.add(app,siteHeader);
van.add(document.getElementById("home"), landing);
van.add(document.getElementById("events"), shows);
van.add(document.getElementById("booking"), contact);
van.add(document.getElementById("playlists"), listen);

/* setTimeout(() => {
  goto("booking");
},6000); */