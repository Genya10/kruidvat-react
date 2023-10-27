import React from "react";
import cl from "../../styles/Main.module.css";
import { useState,useEffect } from "react";
import { Item } from "./Item";
import { Categories } from "./Categories";
import { useOrders,OrdersContextType } from "../Context/OrderProvider";
import { ShowItem } from "./ShowItem";
import { NavLink } from "react-router-dom";

export type TypeItem={
    id: number,
    title: string,
    img: string,
    category: string,
    price: string,
}

export const Main=()=>{

    const [items,setItems]=useState<TypeItem[]>([
        {
            id:1,
            title:"Эхинацея",
            img:"/echinacea.jpg",
            category:"supplements",
            price:"400",
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
    const orderContext = useOrders() as OrdersContextType;
    const {orders,setOrders}=orderContext;
    const [currentItems,setCurrentItems]=useState<TypeItem[]>([]);
    let [showItem,setShowItem]=useState(true);
    let [fullItem,setFullItem]=useState<TypeItem | null>(null);
   
    const changeShowItem=(item:TypeItem)=>{
        setFullItem(item);        
        setShowItem(false);
    }

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
    const addToOrder=(item:TypeItem)=>{
     let isInArray = false;
     orders.forEach((elem)=>{
        if(elem.id === item.id){
            isInArray = true;
        }
     });
     if(!isInArray) setOrders([...orders,item]);
    }

    return(       
        <div className={cl.main}>
              {showItem 
       ? <div>
            <Categories chooseCategory={chooseCategory}/>
            <main className={cl.items}>
          {currentItems.map((item)=>{
            return(               
                <Item 
                   key={item.id}
                   item={item}
                   addToOrder={addToOrder}
                   changeShowItem={changeShowItem}/>     
            )
          })}
          </main>
          </div>
          :<div>
              {fullItem !== null
              ?(
                <div className={cl.fullItem}>
                    <h2>{fullItem.title}</h2>
                    <img src={"img-vitamins/" + fullItem.img}/>
                    <b>{fullItem.price}</b></div>
              )
            : null
            } 
          </div>                
          }

          <NavLink to={"/vitamin1"}>Vitamin1</NavLink>
          <NavLink to={"/vitamin2"}>Vitamin2</NavLink>
          <NavLink to={"/vitamin3"}>Vitamin3</NavLink>
          <NavLink to={"/vitamin4"}>Vitamin4</NavLink>
          <NavLink to={"/vitamin5"}>Vitamin5</NavLink>
          <NavLink to={"/vitamin6"}>Vitamin6</NavLink>
        </div>
        
    )
}
//{fullItem instanceof Object && 'title' in fullItem && fullItem.title} 