import {useState, useEffect} from "react";
import cl from "../../styles/Header.module.css";
import {FaShoppingCart} from 'react-icons/fa';
import { useOrders,OrdersContextType } from "../Context/OrderProvider";
import { Order } from "./Order";
import { AuthFormModal } from "./AuthFormModal";

export const Header=()=>{

let [cartOpen, setCartOpen] = useState(false);
const orderContext = useOrders() as OrdersContextType;
const { orders, setOrders } = orderContext;
const [total,setTotal] = useState(0);
const [modal,setModal] = useState(false);

useEffect(()=>{
  let newTotal = 0;
  orders.forEach((elem)=>{
    newTotal += Number(elem.price);
  });
  setTotal(newTotal)
},[orders]);

const showNothing=()=>{
  return <h2 className={cl.showNothing}>Корзина пуста</h2>
}
const deleteOrder=(id:number)=>{
  setOrders(orders.filter(elem => elem.id !== id))
}
const setModalTrue=()=>{
  setModal(true);
}
const closeModal=()=>{
  setModal(false)
}

    return (
      <div className={cl.header}>
        <button className={cl.logo}>Kruidvat</button>
        <h1 className={cl.textHeader}>
          Витамины для всей семьи по доступным ценам!
        </h1>
        <div onClick={setModalTrue} className={cl.cabinet}>Личный кабинет</div>
        <div className={cl.cart}>                 
          <FaShoppingCart 
           onClick={()=> setCartOpen(cartOpen = !cartOpen)}
           className={`${cl.shopButton} ${cartOpen && cl.active}`}
           />
           {modal && 
           <AuthFormModal closeModal={closeModal}/>}
            
          {cartOpen && (
            <div className={cl.shopCart}>
              {orders.length > 0
              ?(
                <div>
                  {orders.map((elem)=>
                  <Order key={elem.id} item={elem} deleteOrder={deleteOrder}/> )}
                  <div className={cl.total}>Сумма:{total}грн
                  <button className={cl.makeOrder}>Заказать</button>
                  </div>
                </div>
              )
              : showNothing()}              
            </div>
          )}
        </div>
      </div>
    );
}