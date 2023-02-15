import React, { useState } from 'react';

const Questions = () => {

  const [checked,setChecked]=useState(undefined);

  function onSelect() {
    setChecked(true);
    console.log('radio button change');
    
  }
  return (
    <div className='questions'>
      <h2 className='s-question'>Simple Quiz</h2>
      <ul>
        <li>
          <input type="radio" name="options" id="q1-option"
          value={false}
          onChange={onSelect} />

          <label className='option' htmlFor="q1-option">option</label>
          <div className='check checked'></div>

        </li>
      </ul>


    </div>
  )
}

export default Questions;
