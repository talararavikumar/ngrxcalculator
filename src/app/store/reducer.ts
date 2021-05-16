import { Action, createReducer, on } from "@ngrx/store"
import { addUserInputKEY, removeInputKEY, updateResultValue } from "./actions"

export interface inputState{
    sInputValue:string;
    sResultValue:string;
}  

const initialState:inputState = {
    sInputValue:'',
    sResultValue:''
}

const reducer = createReducer(initialState,
    on(addUserInputKEY, (state, {sInputKey} )=>{
        const sResultInput = state.sInputValue+sInputKey;
        //console.log('addUserInputKEY' + sResultInput);
        return {...state, sInputValue:sResultInput}
    }),
    on(removeInputKEY,(state)=>{
        return {...state, sInputValue:state.sInputValue.substr(0,state.sInputValue.length-1)}
    }),
    on(updateResultValue, (state, {sResultValue} )=>{
        //console.log('addUserInputKEY' + sResultInput);
        return {...state, sResultValue:sResultValue}
    })
);
export function inputReducer(state : inputState | undefined, action: Action):any {
    return reducer(state, action)
}

// export function AppReducer(state : AppState | undefined, action: Actio) {
    
// }
