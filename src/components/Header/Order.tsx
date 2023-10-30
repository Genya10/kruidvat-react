import React from "react";
import cl from "../../styles/Order.module.css";
import {FaTrash} from 'react-icons/fa';

type ItemOrder={
    id:number,
    img:string,
    title:string,
    price:string
}
type PropsOrder={
    item:ItemOrder,
    deleteOrder:(id:number)=>void,
}

export const Order = (props:PropsOrder)=>{
    return(
        <div className={cl.order}>
            <div>
                <img src={"./img-vitamins" + props.item.img}/>
            </div>
            <div>
                <h2>{props.item.title}</h2>
                <b>{props.item.price}грн</b>
            </div>
         <FaTrash className={cl.deleteIcon}
                  onClick={()=>{props.deleteOrder(props.item.id)}}/>
        </div>
    )
}