import {htm} from "./utility";
import {goto} from "vanjs-router";

export function Home() {
  const cta = htm(htm("Book Us","span",{class:"button-text"}),
    "button",
    {
      class: "button"
    }
  );

  cta.addEventListener("click",function() {
    goto("booking");
  });

  return htm([
    htm("Looking for a DJ?",
      "span",
      {
        class: "home-heading"
      }
    ),

    htm(undefined,
      "div",
      {
        class: "home-separator"
      }

    ),

    cta,

    htm(undefined,
      "img",
      {
        src: "./CDN/img/djcover.jpg",
        class: "home-poster"
      }
    ),

    htm(undefined,
      "br"
    ),

    htm("What He Does",
      "span",
      {
        class: "home-heading"
      }
    ),

    htm(undefined,
      "div",
      {
        class: "home-separator"
      }

    ),

    htm("DJ Ev spins chill LoFi - Chillhop-Chillwave electronic music.",
      "span",
      {
        class: "home-description"
      }
    )

  ],
    "div",
    {
      class: "home-about"
    }

  );
}