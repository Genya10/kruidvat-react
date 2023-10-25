import React from "react";
import { useState,useContext,createContext,ReactNode } from "react";

export type OrdersContextType={
    orders:any[],
    setOrders:(orders:any[])=>void,
}

export const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrderProvider=({children}:{children:ReactNode})=>{

    const [orders,setOrders]=useState<any[]>([]);

return (
    <OrdersContext.Provider value={{orders,setOrders}}>
      {children}
    </OrdersContext.Provider>
)
}
export const useOrders=()=>{
    return useContext(OrdersContext)
}
