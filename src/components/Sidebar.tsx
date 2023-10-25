import React from "react";
import cl from "../styles/Sidebar.module.css";

export const Sidebar=()=>{

    return(
        
        <div className={cl.sidebar}>
           <ul className={cl.contacts}>
            <li className={cl.linkInfo}><img className={cl.social} src={"./img/gmail.png"}/>
            <a href="mailto:kuzyashevqeka@gmail.com" className={cl.infoLi}>
                kuzyashevqeka@gmail.com</a></li>
            <li className={cl.linkInfo}><img className={cl.social} src={"./img/phone.png"}/>
            <a href="tel:+380661542568" className={cl.infoLi}>
                +38 066-154-25-68</a></li>
            <li className={cl.linkInfo}><img className={cl.social} src={"./img/instagram.png"}/>
            <a href="https://www.instagram.com/kruidvat.vitamins.ua/?igshid=ZjA0NjI3M2I%3D" target="_blank" 
                className={cl.infoLi}>Instagram</a></li>
           </ul>
           <h2 className={cl.hit}>Хит продаж</h2>
           <div className={cl.hitPhoto}>

     <img src={"./img-vitamins/omega3_60t.jpg"} alt="Omega3" className={cl.imgPhoto}/>
 
  </div>
    <div className={cl.popup}>
    <div className={cl.popupClose}>Описание<span className={cl.popupCloseX}>X</span></div>
  <div className={cl.popupText}>
     <p>
          Таблетки Омега-3 содержат длинноцепочечные ненасыщенные жирные кислоты, которые организм не производит сам, но которые
          необходимо включать в рацион.<br/>
          
          📌Омега-3 жирные кислоты EPA и DHA способствуют нормальному функционированию сердца, а DHA способствует поддержанию
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
    )
}