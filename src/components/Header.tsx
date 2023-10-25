import {useState,useContext} from "react";
import cl from "../styles/Header.module.css";
import {FaShoppingCart} from 'react-icons/fa';
import { useOrders,OrdersContextType } from "./OrderProvider";
import { Order } from "./Order";

export const Header=()=>{

let [cartOpen, setCartOpen] = useState(false);
const orderContext = useOrders() as OrdersContextType;
const { orders, setOrders } = orderContext;

const showNothing=()=>{
  return <h2 className={cl.showNothing}>Корзина пуста</h2>
}
const deleteOrder=(id:number)=>{
  setOrders(orders.filter(elem => elem.id !== id))
}


    return (
      <div className={cl.header}>
        <button className={cl.logo}>Kruidvat</button>
        <h1 className={cl.textHeader}>
          Витамины для всей семьи по доступным ценам!
        </h1>
        <div className={cl.cart}>         
          <FaShoppingCart className={cl.shoppingCart}
           onClick={()=> setCartOpen(cartOpen = !cartOpen)}/>
            <div className={cl.order}>Мой заказ</div>
          {cartOpen && (
            <div className={cl.shopCart}>
              {orders.length > 0
              ?(
                <div>
                  {orders.map((elem)=><Order key={elem.id} item={elem}/> )}
                </div>
              )
              : showNothing()}              
            </div>
          )}
        </div>
      </div>
    );
}