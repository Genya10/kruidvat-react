import cl from "../styles/Item.module.css";
import { TypeItem } from "./Main";

type PropsTypeItem={
    item:TypeItem,

}

export const Item=(props:PropsTypeItem)=>{
    return(
        <div className={cl.item}>
            <img src={"./img-vitamins/" + props.item.img}/>
            <h3 >{props.item.title}</h3>
            <b>{props.item.price}грн</b>
            <div className={cl.addToCart}
            >+</div>
        </div>
    )
}