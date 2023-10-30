import { useState,useEffect } from "react";
import cl from "../../styles/AuthFormModal.module.css";

export const AuthFormModal=()=>{
 
    return(
        <div className={cl.myModal}>
            <form className={cl.myModalContent}>
           <input type="text" placeholder="enter gmail"/>
           <input type="password" placeholder="enter password"/>
           <button className={cl.btn}>Отправить</button>
            </form>
        </div>
    )
}