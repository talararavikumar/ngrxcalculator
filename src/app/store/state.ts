import { inputState, inputReducer } from './reducer';

export interface AppState{
    input:inputState;
}

export const AppReducer  = {
    input:inputReducer
}