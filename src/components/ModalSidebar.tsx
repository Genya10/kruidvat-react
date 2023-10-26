import { type } from "os";
import cl from "../styles/Sidebar.module.css";

type PropsTypeModalSidebar={
    showPopup:()=>void
}

export const ModalSidebar=(props:PropsTypeModalSidebar)=>{

    return(
        <div>
     <div className={cl.modal}>
    <div className={cl.popup}>
    <div className={cl.popupClose}>Описание<span 
     onClick={props.showPopup} className={cl.popupCloseX}>X</span></div>
  <div className={cl.popupText}>
     <p>
          Таблетки Омега-3 содержат длинноцепочечные ненасыщенные жирные кислоты, 
          которые организм не производит сам, но которые
          необходимо включать в рацион.<br/>          
          📌Омега-3 жирные кислоты EPA и DHA способствуют 
          нормальному функционированию сердца, а DHA способствует поддержанию
          нормальной функции мозга.<br/>          
          ❌Не подходит для детей младше 8 лет.<br/>          
          ☝️Рекомендации по дозировке:
          1 раз в день по 2 капсулы, запивая водой во время еды.          
          Цена за 120 шт. 480 грн.          
          Состав:<br/>
          💊Рыбий жир 2000 мг;<br/>
          💊Омега-3 жирные кислоты EPA 360 мг;<br/>
          💊Омега-3 жирные кислоты DHA 240 мг;
     </p>
  </div>
    </div>
    </div>
        </div>
    )
}