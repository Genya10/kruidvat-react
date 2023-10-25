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
        <div className={cl.bassket}>         
          <FaShoppingCart className={cl.shoppingCart}/>
          <a href="./basket.html">
            <p className={cl.order}>Мой заказ</p>
          </a>
        </div>
      </div>
    );
}