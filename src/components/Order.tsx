import React from "react";
import cl from "../styles/Order.module.css";
import {FaTrash} from 'react-icons/fa';

type ItemOrder={
    img:string,
    title:string,
    price:string
}
type PropsOrder={
    item:ItemOrder
}

export const Order = (props:PropsOrder)=>{
    return(
        <div className={cl.order}>
            <div>
                <img />
            </div>
            <div>
                <h2>{props.item.title}</h2>
                <b>{props.item.price}</b>
            </div>
       
        </div>
    )
}