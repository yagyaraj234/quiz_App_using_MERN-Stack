import React, {useEffect, useState } from 'react';

  // Custom Hook 
import { useFetchQuestion } from '../hooks/FetchQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { updateResultAction } from '../redux/resultReducer';


export default function Questions({onChecked})  {

  const [checked,setChecked]=useState(undefined);
  const {trace}= useSelector(state =>state.questions);
  const [{isLoading,apiData,serverError}]= useFetchQuestion();


  const questions = useSelector(state=>state.questions.queue[state.questions.trace]);
  const dispatch =useDispatch();

  useEffect(()=>{
    // console.log({trace,checked});
    dispatch(updateResultAction({trace,checked}));  
  },[checked])

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    // dispatch(updateResul)
    
  }

  if(isLoading) return <h3 className='text-light'>isLoading</h3>
  if(serverError) return <h3 className='text-light'>{ serverError || "Unknown Error"} </h3>

  return (
    <div className='questions'>
      <h2 className='s-question'>{questions?.question}</h2>
      <ul key={questions?.id}>
        {
          questions?.options.map((q,i)=>(
            <li key={i}>
          <input type="radio" name="options" id={`q${i}-option`}
          value={false}
          onChange={()=>onSelect(i)} />
          <label className='option' htmlFor={`q${i}-option`}>{q}</label>
          <div className='check'></div>

        </li>
          ))
        }
      </ul>


    </div>
  )
}

