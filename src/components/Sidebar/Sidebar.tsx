import React, { useState } from "react";
import cl from "../../styles/Sidebar.module.css";
import { ModalSidebar } from "./ModalSidebar";
import { ContactsSidebar } from "./ContactsSidebar";
import { HitSale } from "./HitSale";

export const Sidebar=()=>{

    let [popup,setPopup]=useState(false);
    const showPopup=()=>{
      setPopup(true);
    }
    const closedPopup=()=>{
      setPopup(false);
    }
    
    return (
      <div className={cl.sidebar}>
        <ContactsSidebar />
        <HitSale showPopup={showPopup} />
        {popup && <ModalSidebar closedPopup={closedPopup} popup={popup}/>}        
      </div>
    );
}