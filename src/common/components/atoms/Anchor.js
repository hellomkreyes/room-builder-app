import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledAnchor = styled.a`
  img {
    height: 50px;
  }
`

export const Anchor = ({text, href, img}) => {
  return (
    <StyledAnchor href={href} target="_blank" rel="noreferrer">
      { img ? <img src={img} alt={text}/> : text}
    </StyledAnchor>
  )
}

Anchor.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  img: PropTypes.string
}
