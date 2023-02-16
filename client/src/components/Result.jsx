import React from 'react'
import {Link} from 'react-router-dom';
import {ResultTable} from './index'

const Result = () => {
  return (
    <div className='result-container'>

      <h1 className='heading'>Result </h1>

      <div className='result flex-center'>

      <div className='flex'>
        <span className='user'>Username</span>
        <span className='bold'>Daily Tuition</span>
      </div>
      <div className='flex'>
        <span className='user'>Total Quiz points :</span>
        <span className='bold'>50</span>
      </div>
      <div className='flex'>
        <span className='user'>Total Questions : </span>
        <span className='bold'>05</span>
      </div>
      <div className='flex'>
        <span className='user'>Total  points :</span>
        <span className='bold'>03</span>
      </div>
      <div className='flex'>
        <span className='user'>Total earn points :</span>
        <span className='bold'>30</span>
      </div>
      <div className='flex'>
        <span className='user'>Quiz result </span>
        <span className='bold'>Passed</span>
      </div>

      </div>

    <div className='start'>
      <Link  to='/' className='button'>Restart</Link>
    </div>

    <div className="container">
      {/* result table  */}
      <ResultTable/>
    </div>




    </div>
  )
}

export default Result