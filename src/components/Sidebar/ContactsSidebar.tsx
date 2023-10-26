import cl from "../../styles/Sidebar.module.css";

export const ContactsSidebar=()=>{
    return(
        <div>
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
        </div>
    )
}