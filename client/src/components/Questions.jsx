import React, { useEffect, useState } from 'react';

// Custom Hook 
import { useFetchQuestion } from '../hooks/FetchQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../hooks/setResult';

export default function Questions({ onChecked }) {

  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector(state => state.questions);
  const result  = useSelector(state => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  // useSelector(state => console.log(state))


  const questions = useSelector(state => state.questions.queue[state.questions.trace]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);  
    dispatch(updateResult({ trace, checked }));

  }

  if (isLoading) return <h3 className='text-light'>isLoading</h3>
  if (serverError) return <h3 className='text-light'>{serverError || "Unknown Error"} </h3>

  return (
    <div className='questions'>
      <h2 className='s-question'>{questions?.question}</h2>
      <ul key={questions?.id}>
        {
          questions?.options.map((q, i) => (
            <li key={i}>
              <input type="radio" name="options" id={`q${i}-option`}
                value={false}
                onChange={() => onSelect(i)} />
              <label className='option' htmlFor={`q${i}-option`}>{q}</label>
              <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>

            </li>
          ))
        }
      </ul>

    </div>
  )
}

