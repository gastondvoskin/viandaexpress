import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
import { Link } from "react-router-dom";

export default function CardsContainer({currentFoods}) {
  return (
    <div className={style.cardsContainer}>
      {
        currentFoods?.map((c) => {
          return (
              <Link key={c.id} to={`/detail/${c.id}`} className={style.link}>
                <Card name={c.name} image={c.image} final_price={c.final_price} id={c.id} category={c.category} diets={c.diets} status={c.status}/>
              </Link>
          );
        })
      }
    </div>
  );
}