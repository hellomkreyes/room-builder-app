import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
    display: inline-block;
    border: none;
    padding: 1rem;
    margin: 0;
    text-decoration: none;
    border-radius: 5px;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: solid 2px #c40058;
    background-color: #c40058;
    color: #fff;

    &:hover, &:focus {
        background-color: transparent;
        color: #c40058;
    }
`

export const Button = ({onClick, label, ...rest}) => {
    return (
        <StyledButton onClick={onClick} aria-pressed="false">
            { label }
        </StyledButton>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired
}

Button.defaultProps = {
    label: 'Click me please!'
}
