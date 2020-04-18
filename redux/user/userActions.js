import { INCREMENT_COUNT ,DECREMENT_COUNT} from "./userTypes"
import axios from 'axios'

export const incrementCount = () =>{
    return {
        type:INCREMENT_COUNT
    }
}

export const decrementCount = () =>{
    return {
        type:DECREMENT_COUNT
    }
}

export const fetchUsers = (url) =>{
    console.log("fetchUsers called" + url)
    return(dispatch) => {
        dispatch(incrementCount())
        return fetch(url)
               .then(response => {
                 dispatch(decrementCount());
                 return response.data
               })
               .catch(error => {
                const errorMsg = error.message
                console.log("error = "+errorMsg)
                dispatch(decrementCount());
              })
    }
}
