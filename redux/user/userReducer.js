import  {INCREMENT_COUNT ,DECREMENT_COUNT} from "./userTypes"

const initialState = {
    count:0,
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            console.log("reducer called =increment")
            return{
               count: state.count+1,
            }
        case DECREMENT_COUNT:
            return{
                count:Math.max(0,state.count-1),
            }
        default: return state
    }
}

export default reducer
