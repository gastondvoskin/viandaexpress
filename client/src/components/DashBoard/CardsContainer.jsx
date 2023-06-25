import Card from "./Card.jsx"
import style from "./DashBoard.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CardsContainer({currentFoods}) {
  
  const editRequire=(id)=>{}
  return (
    <div className={style.cardsContainer}>
      {
        currentFoods?.map((c) => {
          return (
              <div>
                <Card name={c.name} initial_price={c.initial_price} final_price={c.final_price} id={c.id} discount={c.discount} status={c.status}/>
              </div>
          );
        })
      }
    </div>
  );
}