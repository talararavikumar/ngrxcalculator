import { createAction, props } from "@ngrx/store";

export const addUserInputKEY = createAction("ADD USER INPUT KEY", props<{sInputKey:string}>());
export const removeInputKEY = createAction("ADD USER INPUT KEY");