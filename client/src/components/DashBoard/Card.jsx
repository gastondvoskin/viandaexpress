import style from "./Dashboard.module.css"

export default function Card({id,name, initial_price, final_price, discount, status, editRequire}){  
    return (
        <div 
            className={style.card}>
            <h2>{name}</h2>
            <h3>${initial_price}</h3>
            <h3>${discount}</h3>
            <h3>${final_price}</h3>
            <h3>{status}</h3>
            <button onClick={editRequire(id)}>Editar</button>
        </div>
    )
}