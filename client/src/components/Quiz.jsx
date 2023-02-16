import React, { useEffect } from 'react'
import Questions from './Questions';

// redux store import 
import {useSelector} from 'react-redux'


const Quiz = () => { 

  const state = useSelector(state=>state);

  useEffect(()=>{
    console.log(state)
    
  })

  function onNext(){
    console.log('On Next click');
  }
  function onPrev(){
    console.log('On Prev click');
  }

  return (
    <div className='conatiner'>
      <h1 className='heading'>Quiz</h1>

      {/* Display questions  */}
      <Questions/>



      {/* Buttons  */}
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </div>
  )
}

export default Quiz