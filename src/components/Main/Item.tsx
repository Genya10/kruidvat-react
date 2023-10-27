import { useState } from "react";
import cl from "../../styles/Item.module.css";
import { TypeItem } from "./Main";

type PropsTypeItem={
    item:TypeItem,
    addToOrder:(item:TypeItem)=>void,
    changeShowItem:(item:TypeItem)=>void,
}

export const Item=(props:PropsTypeItem)=>{

    return(
        <div className={cl.item}>          
            <img src={"./img-vitamins/" + props.item.img}/>
            <h3 onClick={()=>props.changeShowItem(props.item)}>{props.item.title}</h3>
            <b>{props.item.price}грн</b>
            <div className={cl.addToCart}
                 onClick={()=>{props.addToOrder(props.item)}}
            >+</div>
            
        </div>
    )
}