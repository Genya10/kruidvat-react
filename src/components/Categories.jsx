import React, {useState} from "react";
import cl from "../styles/Categories.module.css";

export const Categories=({chooseCategory})=>{

    const [categories,setCategories]=useState([
        {
            key:"all",
            category:"All"
        },
        {
            key:"complex",
            category:"Complex"
        },
        {
            key:"supplements",
            category:"Supplements"
        },
        {
            key:"age",
            category:"Age"
        },
        {
            key:"singular",
            category:"Singular"
        }
    ])
    return(
        <div className={cl.categories}>
          {categories.map((elem)=>
          <div key={elem.id}
            onClick={()=>{chooseCategory(elem.key)}}>
            {elem.category}</div>)}
        </div>
    )
}