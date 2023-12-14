import cl from "../../styles/Countdown.module.css";
import { useState,useEffect } from "react";
import { FaGift } from "react-icons/fa";

export const Countdown=()=>{   

    const currentYear = new Date().getFullYear();
    const nextYear = new Date(`February 01 ${currentYear+1} 00:00:00`);
           
        const [currentTime,setCurrentTime] = useState<Date>(new Date());
        const different = nextYear.getTime() - currentTime.getTime();
        useEffect(()=>{
            const updateSeconds=()=>{
                setCurrentTime(new Date());
                requestAnimationFrame(updateSeconds)
              };
             updateSeconds();
            },[]);
       
        const [daysLeft,setDays] = useState(Math.floor(different /1000/60/60/24));
        const [hoursLeft,setHours] = useState(Math.floor(different /1000/60/60) % 24);
        const [minutesLeft,setMinutes] = useState(Math.floor(different /1000/60) %60 );
        //const [secondsLeft,setSeconds] = useState(Math.floor(different  / 1000) %60);

    return (
      <div className={cl.wrapper}>

        <h2 className={cl.titleCountdown}><span><FaGift /></span>До окончания акции осталось:
        </h2>
        
        <div className={cl.counter}>
          <div>
            <div className={cl.item}>{daysLeft < 10 ? "0"+ daysLeft : daysLeft}</div>
            <small className={cl.small}>дней</small>
          </div>
          <div>
            <div className={cl.item}>{hoursLeft < 10 ? "0"+ hoursLeft : hoursLeft}</div>
            <small className={cl.small}>часов</small>
          </div>
          <div>
            <div className={cl.item}>{minutesLeft < 10 ? "0" + minutesLeft : minutesLeft}
            </div>
            <small className={cl.small}>минут</small>
          </div>
           {/*<div>
           <div className={cl.item}>{secondsLeft < 10 ? "0"+ secondsLeft : secondsLeft}
       </div>
            <small className={cl.small}>секунд</small>
          </div>*/}
        </div>
      </div>
    );
}