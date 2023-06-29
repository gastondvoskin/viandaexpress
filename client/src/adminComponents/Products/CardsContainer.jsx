import Card from "./Card.jsx"
import style from "./CardsContainer.module.css"


export default function CardsContainer({currentFoods,handleSelect}) {
  
 
  return (
    <div className={style.cardsContainer}>
      {
        currentFoods?.map((c) => {
          return (
              <div>
                <Card name={c.name} initial_price={c.initial_price} final_price={c.final_price} id={c.id} discount={c.discount} status={c.status} />
              </div>
          );
        })
      }
    </div>
  );
}