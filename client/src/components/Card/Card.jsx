import style from "./Card.module.css"

export default function Card({name, image, final_price, category, diets}){  
    return (
        <div className={style.card}>
            <h2>{name}</h2>
            <img src={image} alt="img not found" />
            <h3>${final_price}</h3>
            <p>Dietas: {diets.map(diet => <span>{diet}</span>)}</p>
            <p>Categoría: {category}</p>
        </div>
    )
}