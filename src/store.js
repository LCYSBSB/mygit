import {createStore} from 'redux'
import {CHANGENAME,ADDAGE} from './action'
function reducer(state={name:'lcy',age:18},action){
    switch(action.type){
        case ADDAGE:
            return{
                ...state,
                age:state.age+action.value
            }
        case CHANGENAME:
                return{
                    ...state,
                    name:action.value
                }
            
        default:
            return state
    }
}

let store = createStore(reducer)
export default store
