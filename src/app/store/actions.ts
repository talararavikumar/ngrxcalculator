import { createAction, props } from "@ngrx/store";

export const addUserInputKEY = createAction("ADD USER INPUT KEY", props<{sInputKey:string}>());
export const removeInputKEY = createAction("REMOVE USER INPUT KEY");

// export  function addUserInputKEY (data)
// {
//    return{type: "ADD USER INPUT KEY", payload:data};
// }

// export function removeInputKEY(){
//     return{type: "REMOVE USER INPUT KEY"};
// }