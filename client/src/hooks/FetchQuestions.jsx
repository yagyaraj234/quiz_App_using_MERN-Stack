// fetch question hook 

import { set } from "immer/dist/internal";
import { useDispatch } from "react-redux";
import * as Action from '../redux/questionReducer'

export const useFetchQuestion =()=>{

    const dispatch = useDispatch()
    const [getData,setGetData]=useState({
      isLoading:false,
      apiData :[],
    serverError:null
    })

    useEffect(() => {
      setGetData(prev=>({...prev,isLoaing:true}))

      (async()=>{
            try{
                let question =await data;
                if(question.length>0){

                    setGetData(prev=>({...prev,isLoading:false}))
                    setGetData(prev=>({...prev,apiData :question}))
                    dispatch(Action.startExamAction(question));
                }else{
                    throw new error('No new Question available');
                }
            }catch(error){
                setGetData(prev=>({...prev,isLoading:false}))
                setGetData(prev=>({...prev,serverError:error}))
            }
      })()
    },[dispatch]);

    return[getData,setGetData];
    
}