import React from 'react';
import PropTypes from 'prop-types'

export const CategoriesDropdown = ({ type, children }) => {
  return(
    <div>
      <label htmlFor={type}>Choose a category:</label>
      <select name={type} id={type}>
        <option selected="selected">Choose a category:</option>
        {children}
      </select> 
    </div>
  );
}

CategoriesDropdown.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
