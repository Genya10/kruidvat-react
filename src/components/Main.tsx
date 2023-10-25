import React from "react";
import cl from "../styles/Main.module.css";
import { useState } from "react";
import { Item } from "./Item";

export const Main=()=>{

    const [items,setItems]=useState([
        {
            id:1,
            title:"Витамин +50лет",
            img:"/az50.jpg",
            category:"",
            price:"400"
        },
        {
            id:2,
            title:"Витамин Б12",
            img:"/b12.jpg",
            category:"",
            price:"250"
        },
        {
            id:3,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:4,
            title:"",
            img:"",
            category:"",
            price:""
        },
        {
            id:5,
            title:"",
            img:"",
            category:"",
            price:""
        },
        {
            id:6,
            title:"",
            img:"",
            category:"",
            price:""
        },
    ])
    return(
        <div className={cl.main}>
          {items.map((item)=>{
            return(
                <Item 
                   key={item.id}
                   item={item}/>
            )
          })}
        </div>
    )
}