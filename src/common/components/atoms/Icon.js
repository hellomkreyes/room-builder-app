import React from 'react'
import PropTypes from 'prop-types'

export const Icon = (img, alt) => {
  return (
    <img src={img} alt={alt} />
  )
}

Icon.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
}
