import {htm} from "./utility";

export function Playlists() {
  return htm([
    
    htm("October23 Set",
      "h2"
    ),
    
    htm(undefined,
      "div",
      {
        class: "home-separator"
      }
    ),
    
    htm(undefined,
      "br"
    ),
    
    htm(htm(undefined,"iframe",{src: "https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F1693818465&show_artwork=true&show_comments=false",style: "width: 175%; height: 100%; position: absolute; border: 0px;",allowfullscreen:"",scrolling: "no"}),
    
      "div",
      {
        style: "width: 36%; height:16em; position: relative;"
      }
    )

  ],
    "div",
    {
      style: "max-width: 100%;"
    }

  );
}