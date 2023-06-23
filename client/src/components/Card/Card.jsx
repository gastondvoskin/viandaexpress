import style from "./Card.module.css"

export default function Card({name, image, final_price, id, category, status, diet}){  
    return (
        <div 
            className={style.card}>
            <img src={image} alt="img not found" />
            <h2>{name}</h2>
            <h3>${final_price}</h3>
            <p>diet: {diet}</p>
            <p>status: {status}</p>
            <p>category: {category}</p>
            {/* <p>id: {id}</p> */}
        </div>
    )
}