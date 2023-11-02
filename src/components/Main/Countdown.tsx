import cl from "././styles/Countdown.module.css";

export const Countdown=()=>{
    return(
        <div className={cl.wrapper}>
            <h2>До окончания акции осталось:</h2>
            <div className={cl.counter}>
              <div className={cl.item}>00</div>
              <small className={cl.small}>дней</small>
              <div className={cl.item}>00</div>
              <small className={cl.small}>часов</small>
              <div className={cl.item}>00</div>
              <small className={cl.small}>минут</small>
              <div className={cl.item}>00</div>
              <small className={cl.small}>секонд</small>
            </div>
        </div>
    )
}