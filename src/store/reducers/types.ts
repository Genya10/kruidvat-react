
export enum ActionEnum{
    SET_ITEMS ="SET_ITEMS",
}

export type TypeItem = {
    id: number,
    title: string,
    img: string,
    category: string,
    price: string,
    description:string
}
export interface SetItemAction{
    type:typeof ActionEnum.SET_ITEMS;
    payload:TypeItem[];
}
export const setItems = (items:TypeItem[])=>({
    type:ActionEnum.SET_ITEMS,
    payload:items
   });
  export interface MainState{
    items:TypeItem[];
}
export type MainAction = SetItemAction;