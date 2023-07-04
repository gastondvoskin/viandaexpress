import React from "react";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/foodActions.js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "../../clientComponents/Card/Card";
// import { foodsWithDiscounts } from "../../../hardcodedFoodsWithDiscounts";
import CarouselContainer from "../../clientComponents/CarouselContainer/CarouselContainer.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
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

  const foodsWithDiscounts = [
    {
      id: 1,
      name: "Pasta rellena",
      diets: ["Vegetariano"],
      image:
        "https://img-global.cpcdn.com/recipes/7041b21955686cf2/1360x964cq70/pasta-rellenas-sin-tacc-sin-gluten-vegan-foto-principal.webp",
      description:
        "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
      category: "Pastas",
      initial_price: 2600,
      discount: 0,
      final_price: 2600,
      status: true,
      total_score: 0,
    },
    {
      id: 2,
      name: "Ensalada mixta",
      diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
      description:
        "Una ensalada mixta clásica con lechuga, tomate, zanahoria, pepino y aderezo de vinagreta casera.",
      image: "https://imag.bonviveur.com/imagen-de-la-ensalada-mixta.jpg",
      initial_price: 1370,
      discount: 0,
      final_price: 1370,
      status: true,
      total_score: 0,
      category: "Ensaladas",
    },
    {
      id: 3,
      name: "Carne guisada con patatas",
      diets: ["Sin TACC", "Sin Lactosa"],
      description:
        "Carne tierna y jugosa guisada a fuego lento con patatas, cebolla, zanahorias y especias, un plato reconfortante.",
      image:
        "https://www.cocinatis.com/archivos/202207/CTIS0210-Receta-carne-guisada-con-patatas_large_16x9.jpg",
      initial_price: 3000,
      discount: 0,
      final_price: 3000,
      status: true,
      total_score: 0,
      category: "Carnes",
    },
  ];

  // const allItems = useSelector((state) => state.foodsReducer.orderItems);

  return (
    <div className={styles.mainContainer}>
      <CarouselContainer />
      <section className={styles.cardsContiner}>
        <h1>Ofertas de la semana</h1>

        {/* {foodsWithDiscounts && foodsWithDiscounts.map(
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
        )} */}
        {/* {foodsWithDiscounts.map(({name, image, final_price, category, diets}, index) => {
          return (
            <Card
              name={name}
              image={image}
              final_price={final_price}
              category={category}
              diets={diets}
            />     
          );
        })} */}
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
