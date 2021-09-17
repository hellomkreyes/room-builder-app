import React from 'react'

export const Button = ({onClick, label, ...rest}) => {
    return (
        <button onClick={onClick} aria-pressed="false">
            { label }
        </button>
    )
}

// Button.propTypes = {
//     onClick: PropTypes.func,
//     label: PropTypes.string.isRequired
// }

// Button.defaultProps = {
//  label: 'Click me!'
// }
