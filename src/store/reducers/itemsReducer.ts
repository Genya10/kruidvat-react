import { MainState,MainAction,ActionEnum } from "./types";

const initialState: MainState={
    items:[]            
}


export const itemsReducer = (state = initialState,action:MainAction)=>{
  switch(action.type){
    case ActionEnum.SET_ITEMS:
        return{
            ...state,
            items:action.payload
        };
        default:
            return state;
  }
}