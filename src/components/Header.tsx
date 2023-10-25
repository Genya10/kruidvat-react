import React from "react";
import cl from "../styles/Header.module.css";
import {FaShoppingCart} from 'react-icons/fa';

export const Header=()=>{
    return (
      <div className={cl.header}>
        <button className={cl.logo}>Kruidvat</button>
        <h1 className={cl.textHeader}>
          Витамины для всей семьи по доступным ценам!
        </h1>
        <div className={cl.cart}>         
          <FaShoppingCart className={cl.shoppingCart}/>

            <div className={cl.order}>Мой заказ</div>

        </div>
      </div>
    );
}