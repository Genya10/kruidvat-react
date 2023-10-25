import React from "react";


export const Item=({item}:any)=>{
    return(
        <div >
            <img style={{width:"100px"}} src={"./img-vitamins/" + item.img}/>
            <h3>{item.title}</h3>
            <b>{item.price}грн</b>
        </div>
    )
}