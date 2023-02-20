
import *as Action from '../redux/resultReducer'

export const pushAnswer =(result)=>async (dispatch) =>{
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error);
    }

}