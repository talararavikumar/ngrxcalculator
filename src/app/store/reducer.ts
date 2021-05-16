import { Action, createReducer, on } from "@ngrx/store"
import { addUserInputKEY, removeInputKEY } from "./actions"

export interface AppState{
    sInputValue:string;
    sResultValue:string;
    deleteValue:number;
}  

const initialState:AppState = {
    sInputValue:'Test1',
    sResultValue:'Test1',
    deleteValue:1
}

const reducer = createReducer(initialState,
    on(addUserInputKEY, (state, {sInputKey} )=>{
        const sResultInput = state.sInputValue+sInputKey;
        console.log('addUserInputKEY' + sResultInput);
        return {...state, sInputValue:sResultInput, deleteValue:state.deleteValue+1}
    }),
    on(removeInputKEY,(state)=>{
        return {...state, sInputValue:state.sInputValue.slice(state.sInputValue.length-1)}
    })
);
export function AppReducer(state : AppState | undefined, action: Action):any {
    return reducer(state, action)
}
