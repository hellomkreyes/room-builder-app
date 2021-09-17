import React from 'react'

export const Button = ({onClick, label, ...rest}) => {
    return (
        <button onClick={onClick} aria-pressed="false">
            { label }
        </button>
    )
}

// IconButton.propTypes = {
//     onClick: PropTypes.func,
//     icon: PropTypes.string.isRequired,
//     label: PropTypes.string
// }

// IconButton.defaultProps = {
// label: ''
// }
