import { TypeItem } from "../../components/Main/Main";
const SET_ITEMS ="SET_ITEMS";

export interface SetItemAction{
    type:typeof SET_ITEMS;
    payload:TypeItem[];
}
export const setItems = (items:TypeItem[])=>({
 type:SET_ITEMS,
 payload:items
});
interface MainState{
    items:TypeItem[];
}
const initialState: MainState={
    items:[]            
}
type MainAction = SetItemAction;

export const itemsReducer = (state = initialState,action:MainAction)=>{
  switch(action.type){
    case SET_ITEMS:
        return{
            ...state,
            items:action.payload
        };
        default:
            return state;
  }
}