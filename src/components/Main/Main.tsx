import React from "react";
import cl from "../../styles/Main.module.css";
import { useState,useEffect } from "react";
import { Item } from "./Item";
import { Categories } from "./Categories";
import { useOrders,OrdersContextType } from "../Context/OrderProvider";
import { useDispatch } from "react-redux/es/exports";
import { setItems } from "../../store/reducers/types";
import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../store/store";
import { TypeItem } from "../../store/reducers/types";
import { Countdown } from "./Countdown";

export const Main=()=>{
    const dispatch = useDispatch();
    const selector = useSelector( (state:RootState) => state.items );

    const orderContext = useOrders() as OrdersContextType;
    const { orders, setOrders } = orderContext;
    let [showItem, setShowItem] = useState(true);
    let [fullItem, setFullItem] = useState<TypeItem | null>(null);
    const [currentItems,setCurrentItems] = useState<TypeItem[]>(selector.items);
    useEffect(()=>{ 
      dispatch(setItems([        
            {
                id:1,
                title:"Эхинацея",
                img:"/echinacea.jpg",
                category:"supplements",
                price:"400",
                description:`📌Эхинацея рекомендуется при лечении и профилактике ОРВИ, гриппа, вирусных инфекций, 
                 расстройствах мочеполовой и репродуктивной функций, кожных заболеваниях.
                 📌Благодаря высокой концентрации эфирных масел, кислот и антиоксидантов,
                  растение помогает быстрее справиться с вирусами и сократить восстановительный период. 
                  Состав: 
                  💊 эхинацея: 120 табл`             
            },
            {
                id:2,
                title:"Витамин Б12",
                img:"/b12.jpg",
                category:"singular",
                price:"250",
                description:`             📌Витамин В12 (или цианкобаламин) нужен для образования эритроцитов. 
                развития нейронов и синтеза ДНК. 
               📌Его нехватка может приводить к накоплению гомоцистеина (нейротоксичного соединения), 
               📌 анемии, потери баланса, онемения конечностей, утомляемости и ухудшению памяти.
               Состав: 
               💊Витамин Б12: 120 таблеток по 10мкг`
    
            },
            {
                id:3,
                title:"Витамин C 500мг",
                img:"/c500.jpg",
                category:"singular",
                price:"320",
                description:`Таблетки Kruidvat Vitamin C-500 поддерживает иммунную систему и дает больше энергии. 
                📌Витамин С способствует защите клеток и увеличивает абсорбцию железа.                 
                📌Повышает сопротивляемость организма вредоносным бактериям и вирусам.                 
                📌Является антиоксидантом.                
                📌Поддерживает здоровье сердца и кровообращения.
                                ☝️Рекомендации по дозировке: 
                1 раз в день по 1 таблетке.               
                Цена за 90 шт. 300 грн.                 
                Состав:
                💊Витамин C 500 мг;
                💊Цитрусовые биофлавоноиды 15 мг; 
                💊Шиповник 10 мг; 
                💊Гесперидин 1 мг; 
                💊Рутин 1 мг;`
            },
            {
                id:4,
                title:"Кальций+магний",
                img:"/cal_m_z.jpg",
                category:"complex",
                price:"210",
                description:`        Витамины Kruidvat кальций, магний, цинк, содержат трех основных минералов, которые важны для различных процессов в
                организме.                
                📌Кальций и магний способствуют поддержанию здоровья костей и зубов и обеспечивают нормальное функционирование ваших
                мышц. Кроме того, эти минералы способствуют нормальному функционированию вашей нервной системы.                 
                📌Цинк способствует нормальному синтезу белка и нормальному функционированию вашей иммунной системы.               
                ☝️Рекомендации по дозировке:
                3 раза в день по 1 таблетке, запивая водой во время еды.                
                Цена за 90 шт. 280 грн.               
                Состав: 
                💊Кальций 800 мг; 
                💊Магний 375 мг; 
                💊Цинк 10 мг;`
            },
            {
                id:5,
                title:"Витамин Д+Магний",
                img:"/d_magn.jpg",
                category:"",
                price:"185",
                description:`📌Магний способствует нормальному функционированию мышц. 
                ☝️Рекомендации по дозировке: 
                1 раз в день по 1 таблетке, запивая водой во время еды.                 
                Цена 90 шт. 300 грн.                
                Состав: 
                💊Витамин Д 5 мкг; 
                💊Магний 187,5 мг;`
            },
            {
                id:6,
                title:"Витамин Д 50мг",
                img:"/d50.jpg",
                category:"singular",
                price:"250",
                description:`Витамины Kruidvat Vitamin D
                способствуют поддержанию здоровья костей и зубов.                 
                📌Витамин D играет роль в формировании костей и важен для правильного усвоения кальция.                 
                📌Способствует укреплению иммунитета.                
                📌Поддерживает работу сердца и сосудов.                 
                📌Борется с тревожностью и депрессией.                 
                📌Улучшает общее состояние организма и сон.                
                ☝️Рекомендации по дозировке 1 раз в день по 1 таблетке во время еды.                 
                Цена за 300 шт. 500 грн.                 
                Состав: 
                💊Витамин D 50 мг.`
            },
            {
                id:7,
                title:"Возраст +50",
                img:"/az50.jpg",
                category:"age",
                price:"320",
                description:`  Сбалансированные жизненно важные витамины Kruidvat Multi A-Z 50+ разработаны специально для людей в возрасте 50 лет и
                старше.<br>                
                📌Kruidvat Multi A-Z 50+ содержат важные витамины, минералы и травы, которые являются отличным дополнением к вашему
                ежедневному рациону.                
                📌Витамин А, фолиевая кислота, медь и селен способствуют нормальному функционированию вашей иммунной системы.                
                📌Кроме того, содержат витамины группы B, такие как витамин B2 и ниацин, которые способствуют нормальному
                энергетическому обмену и снижению утомляемости.                
                📌Минералы кальций, магний и цинк способствуют поддержанию здоровья костей.                 
                ☝️Рекомендации по дозировке 1 раз в день по 1 таблетке, запивая водой во время еды.                
                ❌Не превышайте рекомендованную суточную дозу.                 
                Цена за 120 шт. 340 грн.                 
                Состав: <br>
                💊Витамин А 600 мкг; 
                💊Витамин B1 1,1 мг; 
                💊Витамин В2 1,4 мг;  
                💊Витамин B3 (ниацин) 16 мг; 
                💊Витамин B5 (пантотеновая кислота) 5 мг; 
                💊Витамин B6 1,8 мг; 
                💊Фолиевая кислота 300 мкг; 
                💊Витамин B12 2,8 мкг; 
                💊Биотин 75 мкг;`
            },
            {
                id:8,
                title:"Витамины детские",
                img:"/kids_az.jpg",
                category:"age",
                price:"420",
                description:`    Жевательные таблетки без сахара Kruidvat Multi A-Z Child 4+ содержат важнейшие витамины и минералы, такие как витамин D
                и кальций, которые необходимы для нормального роста и развития костей и имеют важное значение для формирования зубов.                 
                📌Витамины B6, B12, C и железо способствуют хорошей сопротивляемости. Железо и йод способствуют нормальной когнитивной
                функции.                 
                📌Жевательные таблетки обладают восхитительным вкусом из нескольких фруктов и идеально подходят для детей.                
                📌Содержат источник фенилаланина.                 
                ❌Не подходит для детей младше 4 лет. ❌Чрезмерное употребление может иметь слабительный эффект.                
                ☝️Рекомендации по дозировке: 
                принимать по 1 жевательной таблетке 1-2 раза в день.                 
                Цена за 60 шт.230 грн.                 
                Состав: <br>
                💊Витамин А 600 мкг; 
                💊Витамин B1 0,6 мг; 
                💊Витамин В2 0,6 мг; 
                💊Витамин B3 10,6 мг; 
                💊Витамин B5 3 мг; 
                💊Витамин B6 0,7 мг; 
                💊Фолиевая кислота 100 мкг; 
                💊Витамин B12 1,2 мкг; 
                💊Биотин 25 мкг; 
                💊Витамин С 40 мг;  
                💊Витамин D 10 мкг; 
                💊Кальций 160 мг; 
                💊Хром 20 мкг; 
                💊Железо 7 мг; 
                💊Медь 0,2 мг;  
                💊Магний 75 мг; 
                💊Селен 11 мкг; 
                💊Цинк 4 мг; `
            },
            {
                id:9,
                title:"Чеснок",
                img:"/knoflook.jpg",
                category:"supplements",
                price:"250",
                description:`Чесночные витамины Kruidvat сохраняют жизненные силы вашего организма. 
                📌 Оказывают благотворное влияние на сердце и кровеносные сосуды.                
                📌 Способствуют нормализации уровня холестерина в организме.                 
                📌 Не имеют запаха и вкуса.                 
                ❌Не подходит для детей младше 6 лет.               
                ☝️ Рекомендации по дозировке 3 раза в день по 2 капсулы, запивая водой во время еды.                 
                Цена за 100 шт. 230 грн.                
                Состав: 
                💊 Масляный экстракт чеснока 1620мг; `
            },
            {
                id:10,
                title:"Мелатонон",
                img:"/melatonin.jpg",
                category:"supplements",
                price:"370",
                description:`Витамины Kruidvat Melatonin регулируют цикл сон-бодрствование, положительно влияют на интеллектуальные функции мозга, на эмоционально-личностную сферу. <br>

                📌Способствуют организации биологического ритма и нормализации ночного сна. 
               📌Улучшают качество сна, ускоряют засыпание, регулируют нейроэндокринные функции.                 
                ❌Не подходит для детей младше 18 лет.                
                ❌Не используйте во время беременности или кормления грудью без консультации с врачом.                 
                ☝️Рекомендации по дозировке: принимать по 3 таблетки за полчаса до сна, возможно, запивая водой.                 
                Цена за 500 шт. 400 грн.                 
                Состав:                
                💊Мелатонин 290 мкг`
            },
            {
                id:11,
                title:"Семейные",
                img:"/multi_az.jpg",
                category:"complex",
                price:"520",
                description:`    Kruidvat Multi A-Z For The Whole Family Драже были специально разработаны для всех возрастов. Они содержат
                сбалансированное количество важных витаминов и минералов, которые являются ценным дополнением к ежедневному рациону.                 
                📌Драже поддерживают нормальное функционирование иммунной системы и способствуют снижению усталости и утомляемости.
                Кроме того, они способствуют поддержанию здоровья костей.                
                📌Витамины B3 и B12 способствуют нормальному функционированию нервной системы.                 
                📌Селен и цинк - антиоксиданты, которые помогают защитить клетки организма от внешних воздействий.                 
                ❌Не подходит для детей младше 4 лет.                 
                ☝️Рекомендации по дозировке: 
                Детям от 4 до 12 лет по 1 драже в день, запивая водой во время еды. 
                Детям от 12 лет и взрослым 1 раз в день по 2 драже, запивая водой во время еды.                
                Цена за 500 шт. 500 грн.                 
                Состав: <br>
                💊Витамин А  400 мкг;  
                💊Витамин B1  0,55 мг;  
                💊Витамин В2  0,7 мг; 
                💊Витамин B3 (ниацин) 8 мг; 
                💊Витамин B5 (пантотеновая кислота) 3 мг; 
                💊Витамин B6  0,7 мг; 
                💊Фолиевая кислота  100 мкг; 
                💊Витамин B12  1,25 мкг; 
                💊Витамин C  40 мг; 
                💊³Витамин D  2,5 мкг; 
                💊Витамин Е  6 мг; 
                💊Кальций  175 мг;
                💊Хром  10 мкг; 
                💊Йод  37,5 мкг;
                💊Медь  0,5 мг;
                💊Магний  56,3 мг;
                💊Марганец  1 мг;   
                💊Селен  27,5 мкг;
                💊Цинк  1,5 мг;`
            },
            {
                id:12,
                title:"Омега 3",
                img:"/omega3_60t.jpg",
                category:"supplements",
                price:"550",
                description:`   Таблетки Омега-3 содержат длинноцепочечные ненасыщенные жирные кислоты,
                 которые организм не производит сам, но которые
                необходимо включать в рацион.                 
                📌Омега-3 жирные кислоты EPA и DHA способствуют нормальному функционированию сердца, а DHA способствует поддержанию
                нормальной функции мозга.                
                ❌Не подходит для детей младше 8 лет.                 
                ☝️Рекомендации по дозировке: 
                1 раз в день по 2 капсулы, запивая водой во время еды.                
                Цена за 120 шт. 480 грн.                 
                Состав: 
                💊Рыбий жир 2000 мг; 
                💊Омега-3 жирные кислоты EPA 360 мг; 
                💊Омега-3 жирные кислоты DHA 240 мг;`
            },
            {
                id:13,
                title:"Кофермент 10",
                img:"/q10.jpg",
                category:"supplements",
                price:"460",
                description:`Витамины Kruidvat Q10 с витамином B1 содержат высокую дозу Q10. 
                📌Kruidvat Q10 содержит витамин B1, который способствует хорошему энергетическому обмену и  психологической функции.                 
                📌Добавленный витамин Е является натуральным и хорошо усваивается организмом.                 
                📌Облегчает работу сердечной мышцы.                
                📌Удерживает в норме уровень глюкозы, тем самым снижает риск развития сахарного диабета.                 
                📌Способствует выработке важных гормонов.                 
                📌Благотворно влияет на репродуктивную функцию.                 
                📌Оказывает положительное влияние на работу головного мозга и когнитивные функции.                 
                ❌Не подходит для детей младше 6 лет.                
                ❌Не используйте во время беременности или кормления грудью без консультации с врачом.                 
                ☝️Рекомендации по дозировке: 
                1 раз в день по 1 капсуле, запивая водой во время еды.                
                Цена за 40 шт. 550 грн.                
                Состав: 
                💊Сложный Коэнзим Q10 100 мг; 
                💊¹Витамин B1 0,17 мг; 
                💊Витамин Е 10 мг;`
            },
            {
                id:14,
                title:"Антистрессовые",
                img:"/stress_moment.jpg",
                category:"supplements",
                price:"390",
                description:`Витамины Kruidvat Stress Moment содержат натуральные травы, такие как мелисса и валериана. 
                📌Натуральный состав помогает при беспокойстве, раздражении или легком раздражении во время стресса или напряженной работы.                
                ❌Не подходит для детей младше 12 лет.                 
                ❌Не принимайте во время беременности или кормления грудью без консультации с врачом.                 
                ☝️Рекомендации по дозировке: 
                1 раз в день по 1 таблетке, запивая водой во время еды.                
                Цена за 40 шт. 320 грн.                 
                Состав: 
                💊Сложный экстракт валерианы 225 мг; 
                💊Лимонный бальзам 150 мг; 
                💊Мелисса;`
            },
            {
                id:15,
                title:"Витамин С 1000мг",
                img:"/vit1000.jpg",
                category:"singular",
                price:"600",
                description:`Таблетки Kruidvat Vitamin C-1000 содержат высокую дозу витамина C,
                 который поддерживает иммунную систему и дает больше энергии. <br>
                📌Витамин С способствует защите клеток и увеличивает абсорбцию железа.                
                📌Повышает сопротивляемость организма вредоносным бактериям и вирусам.                
                📌Является антиоксидантом.                
                📌Поддерживает здоровье сердца и кровообращения.                
                ☝️Рекомендации по дозировке:
                1 раз в день по 1 таблетке.                
                Цена за 200 шт. 650 грн.               
                Состав:
                💊Витамин C 1000 мг;
                💊Цитрусовые биофлавоноиды 15 мг;
                💊Шиповник 10 мг;
                💊Гесперидин 1 мг;
                💊Рутин 1 мг;`
            },
            {
                id:16,
                title:"Цинк",
                img:"/zink.jpg",
                category:"singular",
                price:"300",
                description:`Цинковые таблетки Kruidvat способствуют нормальному функционированию вашей иммунной системы и вашего зрения.
                📌Кроме того, цинк способствует поддержанию нормальной кожи, волос и ногтей.               
                📌Цинк способствует поддержанию здоровья костей и обладает антиоксидантными свойствами,
                 которые защищают ваш организм от окислительного стресса.                 
                ✅Рекомендуются вегетарианцам и спортсменам, а также их можно принимать во время беременности.               
                ☝️Рекомендации по дозировке:
                1 раз в день по 2 таблетки, запивая водой во время еды.                
                Цена за 90 шт. 350 грн.               
                Состав:
                💊Цинк 10 мг;`
            },
            {
                id:17,
                title:"Биотин",
                img:"/biotin.jpg",
                category:"supplements",
                price:"350",
                description:`             📌Витамин В12 (или цианкобаламин) нужен для образования эритроцитов. 
                развития нейронов и синтеза ДНК. 
               📌Его нехватка может приводить к накоплению гомоцистеина (нейротоксичного соединения), 
               📌 анемии, потери баланса, онемения конечностей, утомляемости и ухудшению памяти.
               Состав: 
               💊Витамин Б12: 120 таблеток по 10мкг`
    
            },
            {
                id:18,
                title:"Имбирь",
                img:"/gember.jpg",
                category:"supplements",
                price:"280",
                description:`Витамины Kruidvat Vitamin D
                способствуют поддержанию здоровья костей и зубов.                 
                📌Витамин D играет роль в формировании костей и важен для правильного усвоения кальция.                 
                📌Способствует укреплению иммунитета.                
                📌Поддерживает работу сердца и сосудов.                 
                📌Борется с тревожностью и депрессией.                 
                📌Улучшает общее состояние организма и сон.                
                ☝️Рекомендации по дозировке 1 раз в день по 1 таблетке во время еды.                 
                Цена за 300 шт. 500 грн.                 
                Состав: 
                💊Витамин D 50 мг.`
            },
        ]))
    },[]);
    useEffect(()=>{
        setCurrentItems(selector.items)
    },[selector])
    const changeShowItem=(item:TypeItem)=>{
        setFullItem(item);        
        setShowItem(false);
    }
    const setShowItemTrue=()=>{
        setShowItem(true);
    }

    const chooseCategory=(category:string)=>{
        if(category === "all"){
            setCurrentItems(selector.items);
            return;
        }
        setCurrentItems(selector.items.filter(elem => elem.category === category));
    }
    const addToOrder=(item:TypeItem)=>{
     let isInArray = false;
     orders.forEach((elem)=>{
        if(elem.id === item.id){
            isInArray = true;
        }
     });
     if(!isInArray) setOrders([...orders,item]);
    }

    return(       
        <div className={cl.main}>
            <Countdown/>
              {showItem 
       ? <div>
            <Categories chooseCategory={chooseCategory}/>
            <main className={cl.items}>
          {currentItems.map((item)=>{
            return(               
                <Item 
                   key={item.id}
                   item={item}
                   addToOrder={addToOrder}
                   changeShowItem={changeShowItem}/>     
            )
          })}
          </main>
          </div>
          :<div>
              {fullItem !== null
              ?(
                <div className={cl.fullItem}>
                  <div>  <h1>{fullItem.title}</h1>
                    <img src={"img-vitamins/" + fullItem.img}/>
                    <b>{fullItem.price}грн</b>
                    <button className={cl.btnReturn} onClick={setShowItemTrue}>Вернуться на главную</button>
                    </div>
                   <div> <p>{fullItem.description}</p>
                   </div>
                    </div>                   
              )
            : null
            } 
          </div>                
          }


        </div>
        
    )
}
 