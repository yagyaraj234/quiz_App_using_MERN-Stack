import React, {useEffect, useState } from 'react';
import data from '../database/data';

const Questions = () => {

  const [checked,setChecked]=useState(undefined);

  const question= data[0];

  useEffect(()=>{
    console.log(data);
  })

  function onSelect() {
    setChecked(true);
    console.log('radio button change');
    
  }
  return (
    <div className='questions'>
      <h2 className='s-question'>{question.question}</h2>
      <ul key={question.id}>
        {
          question.options.map((q,i)=>(
            <li key={i}>
          <input type="radio" name="options" id={`q${i}-option`}
          value={false}
          onChange={onSelect} />
          <label className='option' htmlFor={`q${i}-option`}>{q}</label>
          <div className='check'></div>

        </li>
          ))
        }
      </ul>


    </div>
  )
}

export default Questions;
