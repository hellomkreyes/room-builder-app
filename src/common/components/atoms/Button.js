import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

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

    ${({plain}) => plain && css`
        border: none;
        background-color: transparent;
        color: #222;
    `}

    &:hover, &:focus {
        background-color: transparent;
        color: #c40058;
    }
`

export const Button = ({onClick, label, plain, ...rest}) => {
    return (
        <StyledButton onClick={onClick} aria-pressed="false" plain={plain}>
            { label }
        </StyledButton>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    plain: PropTypes.bool,
}

Button.defaultProps = {
    label: 'Click me please!'
}
