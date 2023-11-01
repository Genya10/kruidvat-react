import cl from "../../styles/AuthFormModal.module.css";

type TypePropsAuthModal={
    closeModal:()=>void,
}

export const AuthFormModal=(props:TypePropsAuthModal)=>{

    const preventClose=(e:any)=>{
        e.stopPropagation();
    }
 
    return(
        <div className={cl.myModal} onClick={props.closeModal}>
            <form className={cl.myModalContent} onClick={preventClose}>
           <input value="" type="text" placeholder="enter gmail"/>       
           <input value="" type="password" placeholder="enter password"/>
           <button className={cl.btn}>Отправить</button>
            </form>
        </div>
    )
}