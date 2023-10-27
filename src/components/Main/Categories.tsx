import React, {useState} from "react";
import cl from "../../styles/Categories.module.css";

type PropsTypeCategories={
    chooseCategory:(category:string)=>void,
}

export const Categories=(props:PropsTypeCategories)=>{

    const [categories,setCategories]=useState([
        {
            key:"all",
            category:"Все"
        },
        {
            key:"complex",
            category:"Комплексные"
        },
        {
            key:"supplements",
            category:"Добавки"
        },
        {
            key:"age",
            category:"Возрастные"
        },
        {
            key:"singular",
            category:"Одиночные"
        }
    ])
    return(
        <div className={cl.categories}>
          {categories.map((elem)=>
          <div key={elem.key}
            onClick={()=>{props.chooseCategory(elem.key)}}>
            {elem.category}</div>)}
        </div>
    )
}