import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
      <Link to="/listen" className="navigation-links-navlink">
        {props.text1}
      </Link>
      <Link to="/bookings" className="navigation-links-navlink1">
        {props.text2}
      </Link>
      <a
        href="https://evwaveshop.com/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text3}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Merch',
  text: 'Home',
  text2: 'Bookings',
  rootClassName: '',
  text1: 'Listen',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
