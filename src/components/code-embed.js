import React from 'react'
import Script from 'dangerous-html/react'

import './code-embed.css'

const CodeEmbed = (props) => {
  return (
    <div className="code-embed-container">
      <div className="code-embed-code-embed">
        <React.Fragment>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n@media only screen and (max-width: 767px) {\nh2::after {\ncontent:'Music';\nwhite-space:nowrap;\noverflow:hidden;\noverflow-wrap:normal;\n}\n}\n* {\n  box-sizing:border-box;\n}\n",
            }}
          />
          <svg>
            <defs>
              <filter width="0" height="0" id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
              </filter>
            </defs>
          </svg>
          <Script>{`
var hmbr = document.getElementsByClassName('toggle')[0],
mnu = document.getElementsByClassName('drawer')[0],
exit = document.querySelector('.listen-icon02');

hmbr.addEventListener("click", () => {
if (hmbr.style.display === "none") return;
else mnu.style.display = "block";
},{once:false});
exit.addEventListener("click", () => {
if (exit.style.display === "none") return;
mnu.style.display = "none";
},{once:false});
`}</Script>
        </React.Fragment>
      </div>
    </div>
  )
}

export default CodeEmbed
