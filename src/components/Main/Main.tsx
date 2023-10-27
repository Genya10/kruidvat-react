import React from "react";
import cl from "../../styles/Main.module.css";
import { useState,useEffect } from "react";
import { Item } from "./Item";
import { Categories } from "./Categories";
import { useOrders,OrdersContextType } from "../Context/OrderProvider";
import { ShowItem } from "./ShowItem";

export type TypeItem = {
    id: number,
    title: string,
    img: string,
    category: string,
    price: string,
    description:string
}

export const Main=()=>{

    const [items,setItems]=useState<TypeItem[]>([
        {
            id:1,
            title:"Эхинацея",
            img:"/echinacea.jpg",
            category:"supplements",
            price:"400",
            description:`📌Эхинацея рекомендуется при лечении и профилактике ОРВИ, гриппа, вирусных инфекций, 
             расстройствах мочеполовой и репродуктивной функций, кожных заболеваниях.
             📌Благодаря высокой концентрации эфирных масел, кислот и антиоксидантов,
              растение помогает быстрее справиться с вирусами и сократить восстановительный период. 
              Состав: 
              💊 эхинацея: 120 табл`             
        },
        {
            id:2,
            title:"Витамин Б12",
            img:"/b12.jpg",
            category:"singular",
            price:"250",
            description:``

        },
        {
            id:3,
            title:"Витамин C 500мг",
            img:"/c500.jpg",
            category:"singular",
            price:"320",
            description:``
        },
        {
            id:4,
            title:"Кальций+магний",
            img:"/cal_m_z.jpg",
            category:"complex",
            price:"210",
            description:``
        },
        {
            id:5,
            title:"Витамин Д+Магний",
            img:"/d_magn.jpg",
            category:"",
            price:"185",
            description:``
        },
        {
            id:6,
            title:"Витамин Д 50мг",
            img:"/d50.jpg",
            category:"singular",
            price:"250",
            description:""
        },
        {
            id:7,
            title:"Возраст +50",
            img:"/az50.jpg",
            category:"age",
            price:"320",
            description:""
        },
        {
            id:8,
            title:"Витамины детские",
            img:"/kids_az.jpg",
            category:"age",
            price:"420",
            description:""
        },
        {
            id:9,
            title:"Чеснок",
            img:"/knoflook.jpg",
            category:"supplements",
            price:"250",
            description:""
        },
        {
            id:10,
            title:"Мелатонон",
            img:"/melatonin.jpg",
            category:"supplements",
            price:"370",
            description:""
        },
        {
            id:11,
            title:"Семейные",
            img:"/multi_az.jpg",
            category:"complex",
            price:"520",
            description:""
        },
        {
            id:12,
            title:"Омега 3",
            img:"/omega3_60t.jpg",
            category:"supplements",
            price:"550",
            description:""
        },
        {
            id:13,
            title:"Кофермент 10",
            img:"/q10.jpg",
            category:"supplements",
            price:"460",
            description:""
        },
        {
            id:14,
            title:"Антистрессовые",
            img:"/stress_moment.jpg",
            category:"supplements",
            price:"390",
            description:""
        },
        {
            id:15,
            title:"Витамин С 1000мг",
            img:"/vit1000.jpg",
            category:"singular",
            price:"600",
            description:""
        },
        {
            id:16,
            title:"Цинк",
            img:"/zink.jpg",
            category:"singular",
            price:"300",
            description:""
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
    const setShowItemTrue=()=>{
        setShowItem(true);
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
                  <div>  <h1>{fullItem.title}</h1>
                    <img src={"img-vitamins/" + fullItem.img}/>
                    <b>{fullItem.price}грн</b>
                    <button onClick={setShowItemTrue}>Вернуться на главную</button>
                    </div>
                   <div> <p>{fullItem.description}</p>
                   </div>
                    </div>                   
              )
            : null
            } 
          </div>                
          }


        </div>
        
    )
}
 