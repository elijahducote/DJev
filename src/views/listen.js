import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import CodeEmbed from '../components/code-embed'
import './listen.css'

const Listen = (props) => {
  return (
    <div className="listen-container">
      <Helmet>
        <title>Listen - DJ Ev Music</title>
        <meta property="og:title" content="Listen - DJ Ev Music" />
      </Helmet>
      <CodeEmbed></CodeEmbed>
      <header data-role="Header" className="listen-header">
        <h2 className="listen-text">
          <span>DJ Ev </span>
          <br></br>
        </h2>
        <div className="listen-nav">
          <nav className="listen-nav1">
            <Link to="/" className="listen-navlink">
              Home
            </Link>
            <span className="listen-text03">Listen</span>
            <Link to="/bookings" className="listen-navlink1">
              Bookings
            </Link>
            <a
              href="https://evwaveshop.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="listen-link"
            >
              Merch
            </a>
          </nav>
        </div>
        <div data-role="BurgerMenu" className="listen-burger-menu">
          <svg viewBox="0 0 1024 1024" className="listen-icon toggle">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="listen-mobile-menu drawer">
          <div className="listen-nav2">
            <div className="listen-container1">
              <h2 className="listen-text04">
                <span>DJ Ev </span>
                <br></br>
              </h2>
              <div data-role="CloseMobileMenu" className="listen-menu-close">
                <svg viewBox="0 0 1024 1024" className="listen-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="listen-nav3">
              <div className="listen-container2">
                <div className="listen-container3">
                  <Link to="/" className="listen-navlink2">
                    Home
                  </Link>
                </div>
                <div className="listen-container4">
                  <Link to="/listen" className="listen-navlink3">
                    Listen
                  </Link>
                </div>
                <div className="listen-container5">
                  <Link to="/bookings" className="listen-navlink4">
                    Bookings
                  </Link>
                </div>
                <div className="listen-container6">
                  <a
                    href="https://evwaveshop.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="listen-link01"
                  >
                    <span>Merch</span>
                    <br></br>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="listen-icon-group">
            <div className="listen-row">
              <a
                href="https://soundcloud.com/yearthree"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 1024 1024" className="listen-icon04">
                  <path d="M891.96 514.204c-18.086 0-35.348 3.52-51.064 9.856-10.506-114.358-110.29-204.060-232-204.060-29.786 0-58.682 5.63-84.318 15.164-9.96 3.702-12.578 7.52-12.578 14.916v402.714c0 7.766 6.24 14.234 14.124 14.996 0.336 0.034 363.536 0.21 365.89 0.21 72.904 0 131.986-56.816 131.986-126.894s-59.134-126.902-132.040-126.902zM400 768h32l16-224.22-16-223.78h-32l-16 223.78zM304 768h-32l-16-162.75 16-157.25h32l16 160zM144 768h32l16-128-16-128h-32l-16 128zM16 704h32l16-64-16-64h-32l-16 64z"></path>
                </svg>
              </a>
            </div>
            <div className="listen-row01">
              <a
                href="https://www.instagram.com/_evmusic_/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="listen-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
            <div className="listen-row02">
              <img
                alt="image"
                src="/external/threads1.svg"
                className="listen-image"
              />
            </div>
            <div className="listen-row03">
              <a
                href="https://twitter.com/_evmusic_"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/external/x1.svg"
                  className="listen-image1"
                />
              </a>
            </div>
            <div className="listen-row04">
              <a
                href="https://www.youtube.com/@_evmusic"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/external/yt_icon_rgb.svg"
                  className="listen-image2"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="listen-icon-group1">
          <div className="listen-row05">
            <a
              href="https://soundcloud.com/yearthree"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 1024 1024" className="listen-icon08">
                <path d="M891.96 514.204c-18.086 0-35.348 3.52-51.064 9.856-10.506-114.358-110.29-204.060-232-204.060-29.786 0-58.682 5.63-84.318 15.164-9.96 3.702-12.578 7.52-12.578 14.916v402.714c0 7.766 6.24 14.234 14.124 14.996 0.336 0.034 363.536 0.21 365.89 0.21 72.904 0 131.986-56.816 131.986-126.894s-59.134-126.902-132.040-126.902zM400 768h32l16-224.22-16-223.78h-32l-16 223.78zM304 768h-32l-16-162.75 16-157.25h32l16 160zM144 768h32l16-128-16-128h-32l-16 128zM16 704h32l16-64-16-64h-32l-16 64z"></path>
              </svg>
            </a>
          </div>
          <div className="listen-row06">
            <a
              href="https://www.instagram.com/_evmusic_/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="listen-icon10"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="listen-row07">
            <a
              href="https://www.threads.net/@evmusic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/threads1.svg"
                className="listen-image3"
              />
            </a>
          </div>
          <div className="listen-row08">
            <a
              href="https://x.com/_evmusic_"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/x1.svg"
                className="listen-image4"
              />
            </a>
          </div>
          <div className="listen-row09">
            <a
              href="https://www.youtube.com/@_evmusic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/yt_icon_rgb.svg"
                className="listen-image5"
              />
            </a>
          </div>
        </div>
      </header>
      <div className="listen-container7">
        <h1 className="listen-text09">DJ Ev Playlist(Tikilas 10-10-22)</h1>
      </div>
      <div className="listen-separator"></div>
      <img
        alt="image"
        src="https://raw.githubusercontent.com/Alendrone/DJev/a6e8a39bdc2abf028284023939bb733bae19fb36/cdn/beach.png"
        className="listen-image6 filtered"
      />
      <div className="listen-hero vignette">
        <iframe
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1507610770&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
          className="listen-iframe"
        ></iframe>
      </div>
    </div>
  )
}

export default Listen
