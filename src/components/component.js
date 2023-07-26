import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <div className="component-container1">
        <Link to="/" className="component-navlink">
          {props.text}
        </Link>
      </div>
      <div className="component-container2">
        <Link to="/listen" className="component-navlink1">
          {props.text1}
        </Link>
      </div>
      <div className="component-container3">
        <Link to="/bookings" className="component-navlink2">
          {props.text2}
        </Link>
      </div>
      <div className="component-container4">
        <a
          href="https://evshirts.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="component-link"
        >
          {props.text3}
        </a>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Home',
  text2: 'Bookings',
  rootClassName: '',
  text3: 'Events',
  text1: 'Listen',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent
