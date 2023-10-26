import cl from "../styles/Sidebar.module.css";

type PropsTypeHitSale={
    showPopup:()=>void
}

export const HitSale=(props:PropsTypeHitSale)=>{
    return (
      <div>
        <h2 className={cl.hit}>Хит продаж</h2>
        <div className={cl.hitPhoto}>
          <img
            src={"./img-vitamins/omega3_60t.jpg"}
            alt="Omega3"
            onClick={props.showPopup}
            className={cl.imgPhoto}
          />
        </div>
      </div>
    );
}