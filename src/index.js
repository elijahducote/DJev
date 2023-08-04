import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DJEvMusic from './views/dj-ev-music'
import Bookings from './views/bookings'
import Listen from './views/listen'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={DJEvMusic} exact path="/" />
        <Route component={Bookings} exact path="/bookings" />
        <Route component={Listen} exact path="/listen" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

var uuid = 0;
if (document.title === "DJ Ev Music") uuid = 0;
if (document.title === "Listen") uuid = 1;
if (document.title === "Bookings") uuid = 2;
if (document.title === "Events") uuid = 3;

var hmbr = document.getElementsByClassName('toggle')[0],
mnu = document.getElementsByClassName('drawer')[0],
page = ['.d-ev-music-','.listen-','.bookings-','.events-'][uuid],
exit = document.querySelector(page + 'icon02');

hmbr.addEventListener("click", () => {
if (hmbr.style.display === "none") return;
else mnu.style.display = "block";
},{once:false});
exit.addEventListener("click", () => {
if (exit.style.display === "none") return;
mnu.style.display = "none";
},{once:false});
