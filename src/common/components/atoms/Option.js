import React from 'react';

export const Option = () => {
  return(
    <div>
      <label htmlFor="furniture">Furniture</label>
      <select name="furniture" id="furniture">
        <option value="">View all</option>
        <option value="one">Seating</option>
        <option value="two">Lighting</option>
        <option value="three">Tables</option>
        <option value="three">Rugs</option>
      </select>

      <h2>Seating</h2>
      <ul>
        <li><img src="https://placekeanu.com/60/60" alt="A placeholder Keanu" /></li>
      </ul>

      <label htmlFor="decor">Decor</label>
      <select name="decor" id="decor">
        <option value="">View all</option>
        <option value="one">Plants</option>
        <option value="two">Paintings</option>
        <option value="three">Clocks</option>
        <option value="three">Misc</option>
      </select>

      <h2>Plants</h2>
      <ul>
        <li><img src="http://placecorgi.com/60/60" alt="A placeholder corgi" /></li>
      </ul>
    </div>
  );
}