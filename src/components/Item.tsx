import React from "react";
import cl from "../styles/Item.module.css";

export const Item=({item}:any)=>{
    return(
        <div className={cl.item}>
            <img src={"./img-vitamins/" + item.img}/>
            <h3 >{item.title}</h3>
            <b>{item.price}грн</b>
        </div>
    )
}