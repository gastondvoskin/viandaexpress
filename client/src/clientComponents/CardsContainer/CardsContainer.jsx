import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer({ currentFoods, allItems }) {
  const filteredFoods = currentFoods.filter((food) => food.status === true);

  return (
    <div className={style.cardsContainer}>
      {filteredFoods.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        filteredFoods.map(({ id, name, image, final_price, category, diets }) => (
          <Card
            key={id}
            id={id}
            name={name}
            image={image}
            final_price={final_price}
            category={category}
            diets={diets}
            allItems={allItems}
          />
        ))
      )}
    </div>
  );
};