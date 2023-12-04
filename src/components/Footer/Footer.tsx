import React from "react";
import cl from "../../styles/Footer.module.css";
import { NavLink } from "react-router-dom";

export const Footer=()=>{
    return(
        <div className={cl.footer}>
           <h1>Все права защищены</h1> 
         {/* <div>
          <NavLink to={"/vitamin1"}>Vitamin1</NavLink>
          <NavLink to={"/vitamin2"}>Vitamin2</NavLink>
          <NavLink to={"/vitamin3"}>Vitamin3</NavLink>
          <NavLink to={"/vitamin4"}>Vitamin4</NavLink>
          <NavLink to={"/vitamin5"}>Vitamin5</NavLink>
          <NavLink to={"/vitamin6"}>Vitamin6</NavLink>
    </div>*/}
        </div>
    )
}