import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledThumbnail = styled.button`
    margin: 5px 2.5px;
    padding: 5px;
    border: solid 1px black;
`

export const ThumbnailButton = ({ onClick, image, alt, ...rest }) => (
    <StyledThumbnail onClick={onClick}>
        <img src={image} alt={alt} />
    </StyledThumbnail>
)

ThumbnailButton.propTypes = {
    onClick: PropTypes.func,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
