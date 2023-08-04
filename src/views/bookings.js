import React from 'react'
import Script from 'dangerous-html/react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './bookings.css'

const Bookings = (props) => {
  return (
    <div className="bookings-container">
      <Helmet>
        <title>Bookings - DJ Ev Music</title>
        <meta property="og:title" content="Bookings - DJ Ev Music" />
      </Helmet>
      <div className="bookings-code-embed">
        <React.Fragment>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n@media only screen and (max-width: 767px) {\nh2::after {\ncontent:'Music';\nwhite-space:nowrap;\noverflow:hidden;\noverflow-wrap:normal;\n}\n}\n::placeholder {\n  color:white;\n  opacity: .8;\n}\n* {\n  box-sizing:border-box;\n}\n",
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
exit = document.querySelector('.bookings-icon02');

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
      <header data-role="Header" className="bookings-header">
        <h2 className="bookings-text">
          <span>DJ Ev </span>
          <br></br>
        </h2>
        <div className="bookings-nav">
          <nav className="bookings-nav1">
            <Link to="/" className="bookings-navlink">
              Home
            </Link>
            <Link to="/listen" className="bookings-navlink1">
              Listen
            </Link>
            <span className="bookings-text03">Bookings</span>
            <a
              href="https://evshirts.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="bookings-link"
            >
              Merch
            </a>
          </nav>
        </div>
        <div data-role="BurgerMenu" className="bookings-burger-menu">
          <svg viewBox="0 0 1024 1024" className="bookings-icon toggle">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="bookings-mobile-menu drawer">
          <div className="bookings-nav2">
            <div className="bookings-container1">
              <h2 className="bookings-text04">
                <span>DJ Ev </span>
                <br></br>
              </h2>
              <div data-role="CloseMobileMenu" className="bookings-menu-close">
                <svg viewBox="0 0 1024 1024" className="bookings-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="bookings-nav3">
              <div className="bookings-container2">
                <div className="bookings-container3">
                  <Link to="/" className="bookings-navlink2">
                    Home
                  </Link>
                </div>
                <div className="bookings-container4">
                  <Link to="/listen" className="bookings-navlink3">
                    Listen
                  </Link>
                </div>
                <div className="bookings-container5">
                  <Link to="/bookings" className="bookings-navlink4">
                    Bookings
                  </Link>
                </div>
                <div className="bookings-container6">
                  <a
                    href="https://evshirts.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bookings-link01"
                  >
                    Merch
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="bookings-icon-group">
            <div className="bookings-row">
              <a
                href="https://soundcloud.com/yearthree"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 1024 1024" className="bookings-icon04">
                  <path d="M891.96 514.204c-18.086 0-35.348 3.52-51.064 9.856-10.506-114.358-110.29-204.060-232-204.060-29.786 0-58.682 5.63-84.318 15.164-9.96 3.702-12.578 7.52-12.578 14.916v402.714c0 7.766 6.24 14.234 14.124 14.996 0.336 0.034 363.536 0.21 365.89 0.21 72.904 0 131.986-56.816 131.986-126.894s-59.134-126.902-132.040-126.902zM400 768h32l16-224.22-16-223.78h-32l-16 223.78zM304 768h-32l-16-162.75 16-157.25h32l16 160zM144 768h32l16-128-16-128h-32l-16 128zM16 704h32l16-64-16-64h-32l-16 64z"></path>
                </svg>
              </a>
            </div>
            <div className="bookings-row01">
              <a
                href="https://www.instagram.com/_evmusic_/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="bookings-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
            <div className="bookings-row02">
              <img
                alt="image"
                src="/external/threads1.svg"
                className="bookings-image"
              />
            </div>
            <div className="bookings-row03">
              <a
                href="https://twitter.com/_evmusic_"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/external/x1.svg"
                  className="bookings-image1"
                />
              </a>
            </div>
            <div className="bookings-row04">
              <a
                href="https://www.youtube.com/@_evmusic"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/external/yt_icon_rgb.svg"
                  className="bookings-image2"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bookings-icon-group1">
          <div className="bookings-row05">
            <a
              href="https://soundcloud.com/yearthree"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 1024 1024" className="bookings-icon08">
                <path d="M891.96 514.204c-18.086 0-35.348 3.52-51.064 9.856-10.506-114.358-110.29-204.060-232-204.060-29.786 0-58.682 5.63-84.318 15.164-9.96 3.702-12.578 7.52-12.578 14.916v402.714c0 7.766 6.24 14.234 14.124 14.996 0.336 0.034 363.536 0.21 365.89 0.21 72.904 0 131.986-56.816 131.986-126.894s-59.134-126.902-132.040-126.902zM400 768h32l16-224.22-16-223.78h-32l-16 223.78zM304 768h-32l-16-162.75 16-157.25h32l16 160zM144 768h32l16-128-16-128h-32l-16 128zM16 704h32l16-64-16-64h-32l-16 64z"></path>
              </svg>
            </a>
          </div>
          <div className="bookings-row06">
            <a
              href="https://www.instagram.com/_evmusic_/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="bookings-icon10"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="bookings-row07">
            <a
              href="https://www.threads.net/@evmusic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/threads1.svg"
                className="bookings-image3"
              />
            </a>
          </div>
          <div className="bookings-row08">
            <a
              href="https://x.com/_evmusic_"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/x1.svg"
                className="bookings-image4"
              />
            </a>
          </div>
          <div className="bookings-row09">
            <a
              href="https://www.youtube.com/@_evmusic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/yt_icon_rgb.svg"
                className="bookings-image5"
              />
            </a>
          </div>
        </div>
      </header>
      <div className="bookings-container7">
        <h1 className="bookings-text07">Contact DJ EV for bookings</h1>
      </div>
      <div className="bookings-separator"></div>
      <div className="bookings-hero vignette">
        <form
          action="https://formspree.io/f/mvojongz"
          method="POST"
          className="bookings-form"
        >
          <label htmlFor="mail" className="bookings-text08">
            <span>Email</span>
            <br></br>
          </label>
          <input
            type="email"
            id="mail"
            name="email"
            required
            placeholder="Email"
            className="bookings-textinput button"
          />
          <label htmlFor="msg" className="bookings-text11">
            <span>Message: </span>
            <br></br>
          </label>
          <textarea
            id="msg"
            name="message"
            placeholder="Message"
            className="bookings-textarea button"
          ></textarea>
          <button type="submit" className="bookings-button button">
            Submit
          </button>
        </form>
        <div className="bookings-container8"></div>
      </div>
      <img
        alt="image"
        src="https://raw.githubusercontent.com/Alendrone/DJev/a6e8a39bdc2abf028284023939bb733bae19fb36/cdn/beach.png"
        className="bookings-image6 filtered"
      />
    </div>
  )
}

export default Bookings
