import React from 'react'
import PropTypes from 'prop-types'

export const Anchor= ({text, href, classes, img}) => {
  return (
    <a href={href} class={classes} target="_blank" rel="noreferrer">
      { img ? <img src={img} alt={text}/> : text}
    </a>
  )
}

Anchor.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.string,
  img: PropTypes.string
}
