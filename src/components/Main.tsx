import React from "react";
import cl from "../styles/Main.module.css";
import { useState,useEffect } from "react";
import { Item } from "./Item";
import { Categories } from "./Categories";

type PropsItem={
    id: number,
    title: string,
    img: string,
    category: string,
    price: string,
}

export const Main=()=>{

    const [items,setItems]=useState<PropsItem[]>([
        {
            id:1,
            title:"Эхинацея",
            img:"/echinacea.jpg",
            category:"supplements",
            price:"400"
        },
        {
            id:2,
            title:"Витамин Б12",
            img:"/b12.jpg",
            category:"singular",
            price:"250"
        },
        {
            id:3,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"singular",
            price:"320"
        },
        {
            id:4,
            title:"",
            img:"/cal_m_z.jpg",
            category:"complex",
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
            img:"/d50.jpg",
            category:"singular",
            price:""
        },
        {
            id:7,
            title:"Возраст +50",
            img:"/az50.jpg",
            category:"age",
            price:"320"
        },
        {
            id:8,
            title:"Витамин C 500мг",
            img:"/kids_az.jpg",
            category:"age",
            price:"320"
        },
        {
            id:9,
            title:"Витамин C 500мг",
            img:"/knoflook.jpg",
            category:"supplements",
            price:"320"
        },
        {
            id:10,
            title:"Витамин C 500мг",
            img:"/melatonin.jpg",
            category:"supplements",
            price:"320"
        },
        {
            id:11,
            title:"Витамин C 500мг",
            img:"/multi_az.jpg",
            category:"complex",
            price:"320"
        },
        {
            id:12,
            title:"Витамин C 500мг",
            img:"/omega3_60t.jpg",
            category:"supplements",
            price:"320"
        },
        {
            id:13,
            title:"Витамин C 500мг",
            img:"/q10.jpg",
            category:"",
            price:"320"
        },
        {
            id:14,
            title:"Витамин C 500мг",
            img:"/stress_moment.jpg",
            category:"supplements",
            price:"320"
        },
        {
            id:15,
            title:"Витамин C 500мг",
            img:"/vit1000.jpg",
            category:"singular",
            price:"320"
        },
        {
            id:16,
            title:"Витамин C 500мг",
            img:"/zink.jpg",
            category:"singular",
            price:"320"
        },
    ]);
    const [currentItems,setCurrentItems]=useState<PropsItem[]>([]);
    useEffect(()=>{
        setCurrentItems(items);
    },[]);
    const chooseCategory=(category:string)=>{
        if(category === "all"){
            setCurrentItems(items);
            return;
        }
        setCurrentItems(items.filter(elem => elem.category === category));
    }

    return(
        <div className={cl.main}>
            <Categories chooseCategory={chooseCategory}/>
            <main className={cl.items}>
          {currentItems.map((item)=>{
            return(
                <Item 
                   key={item.id}
                   item={item}/>
            )
          })}
          </main>
        </div>
    )
}