import {htm} from "./utility";

export function Playlists() {
  return htm([
    
    htm("Urban Harvest Farmers Market",
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
    
    htm(htm(undefined,"iframe",{src: "https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F1749603915&show_artwork=true&show_comments=false",style: "width: 175%; height: 100%; position: absolute; border: 0px;",allowfullscreen:"",scrolling: "no"}),
    
    htm(undefined,
      "br"
    ),
    
    htm("Funk Mix",
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
    
    htm(htm(undefined,"iframe",{src: "https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F1849472907&show_artwork=true&show_comments=false",style: "width: 175%; height: 100%; position: absolute; border: 0px;",allowfullscreen:"",scrolling: "no"}),
    
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