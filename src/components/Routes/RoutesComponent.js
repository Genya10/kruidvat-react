import {Routes, Route,Navigate } from "react-router-dom";
import { Main } from "../Main/Main";
import { Vitamin1 } from "../Main/Items/vitamin1";
import { Vitamin2 } from "../Main/Items/vitamin2";
import { Vitamin3 } from "../Main/Items/vitamin3";
import { Vitamin4 } from "../Main/Items/vitamin4";
import { Vitamin5 } from "../Main/Items/vitamin5";
import { Vitamin6 } from "../Main/Items/vitamin6";

export const RoutesComponent=()=>{
    return(
        <div>
          <Routes>
            <Route path="/" element={<Navigate to={"/main"}/>}/>
            <Route path="/main" element={<Main />}/>
            <Route path="/vitamin1" element={<Vitamin1/>}/>
            <Route path="/vitamin2" element={<Vitamin2/>}/>
            <Route path="/vitamin3" element={<Vitamin3/>}/>
            <Route path="/vitamin4" element={<Vitamin4/>}/>
            <Route path="/vitamin5" element={<Vitamin5/>}/>
            <Route path="/vitamin6" element={<Vitamin6/>}/> 
            <Route path="*" element={<div>ERROR 404</div>}/>          
          </Routes>
        </div>
    )
}