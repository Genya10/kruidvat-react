import { TypeItem } from "./Main";

type PropsTypeShowItem={
    elem:TypeItem,
}
export const ShowItem=(props:PropsTypeShowItem)=>{
    return(
        <div>
            <h1>{props.elem.id}</h1>
            <img src={"./img-vitamins"+props.elem.img} alt="" />
            <div className="description">{props.elem.category}</div>
        </div>
    )
}