import style from "./Card.module.css"

export default function Card({name, image, final_price, id, category, status, diets}){  
    return (
        <div 
            className={style.card}>
            <img src={image} alt="img not found" />
            <h2>{name}</h2>
            <h3>${final_price}</h3>
            <p>Dietas: {diets.map(diet => <span>{diet}</span>)}</p>
            <p>Categoría: {category}</p>
        </div>
    )
}