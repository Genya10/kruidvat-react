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
            img:"/cal_m_z.jpg",
            category:"",
            price:"210"
        },
        {
            id:5,
            title:"",
            img:"/d_magn.jpg",
            category:"",
            price:"185"
        },
        {
            id:6,
            title:"",
            img:"/d50/jpg",
            category:"",
            price:""
        },
        {
            id:7,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:8,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:9,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:10,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:11,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:12,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:13,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:14,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:15,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
        {
            id:16,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"",
            price:"320"
        },
    ])
    return(
        <div className={cl.main}>
          {items.map((item)=>{
            return(
                <Item className={cl.items}
                   key={item.id}
                   item={item}/>
            )
          })}
        </div>
    )
}