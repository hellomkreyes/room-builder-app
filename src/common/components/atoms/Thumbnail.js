import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledThumbnail = styled.img`
    padding: 5px;
    border: solid 1px black;
`

export const Thumbnail = ({ image, alt, ...rest }) => <StyledThumbnail src={image} alt={alt} />

Thumbnail.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
