import React from "react";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/foodActions.js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "../../clientComponents/Card/Card";
// import { hardcodedFoodsWithDiscounts } from "../../../hardcodedFoodsWithDiscounts";
import CarouselContainer from "../../clientComponents/CarouselContainer/CarouselContainer.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const allItems = useSelector((state) => state.foodsReducer.orderItems);
  const foodsWithDiscounts = allFoods.filter(
    (food) => food.discount > 0
  ); /* .slice(0, 2); */

  const { isLoading, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const body = {
        name: user?.name,
        email: user?.email,
      };
      axios
        .post("/user", body)
        .then(() => {
          return axios.post("/order", body);
        })
        .then(() => {
          console.log("Usuario y Order enviados a DB");
        })
        .catch((error) => console.log(error));
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (!allFoods.length) {
      axios.get("/api").then(() => dispatch(getFoods()));
    } else {
      dispatch(getFoods());
    }
  }, [dispatch]);

  if (isLoading) return <h1>Iniciando sesión...</h1>;

  return (
    <div className={styles.mainContainer}>
      <CarouselContainer />
      <br />
      <section className={styles.sectionContainer}>
        <h1>Ofertas de la semana</h1>
        {/* foodsWithDiscounts is a hardcoded array with chosen nice images. To add a dynamic logic, following these steps:  
        
        */}
        <div className={styles.cardsContainer}>
          {foodsWithDiscounts &&
            foodsWithDiscounts.map(
              ({ id, name, image, final_price, category, diets }) => {
                return (
                  <Card
                    id={id}
                    name={name}
                    image={image}
                    final_price={final_price}
                    category={category}
                    diets={diets}
                    allItems={allItems}
                  />
                );
              }
            )}
        </div>
        <br />

        <section>
          <button className={styles.viewAllButton}>Ver todas las viandas</button>
        </section>
      </section>
    </div>
  );
};

export default Home;

{
  /* <div className={styles.card}>
              <div>
                <img
                  src={food.image}
                  alt="img not found"
                  className={styles.card_img}
                />
              </div>
              <h2>{food.name}</h2>
              <div className={styles.p}>
                <p>${food.final_price}</p>
              </div>
            </div> */
}
