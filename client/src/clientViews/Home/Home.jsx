import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/foodActions.js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import CardsContainer from "../../clientComponents/CardsContainer/CardsContainer";
// import { hardcodedFoodsWithDiscounts } from "../../../hardcodedFoodsWithDiscounts";
import CarouselContainer from "../../clientComponents/CarouselContainer/CarouselContainer.jsx";
import { Link } from "react-router-dom";
import { setUserOrderCase } from "../../redux/shopingCartSlice";
import { getUserFavoritesAction } from "../../redux/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const allItems = useSelector(
    (state) => state.shopingCartReducer.pendingOrder
  );
  const favorites = useSelector((state) => state.usersReducer.userFavorites);
  console.log("favorites: ", favorites);

  const foodsWithDiscounts = allFoods.filter((food) => food.discount > 0);

  const foodsWithScoreHigherThan4 = allFoods.filter(
    (food) => food.total_score > 4
  );

  const { isLoading, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const body = {
        name: user?.name,
        email: user?.email,
      };
      axios
        .post("/user", body)
        .then(async () => {
          const userOrder = await axios
            .post("/order", body)
            .then((r) => r.data);
          /* console.log("userOrder:", userOrder); */
          dispatch(setUserOrderCase(userOrder));
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

  /* wip start */
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserFavoritesAction(user.email));
    }
  }, [isAuthenticated, user]);
  /* wip end */

  /* if (isLoading) return <h1>Iniciando sesión...</h1>; */

  /* RETURN */
  return (
    <div className={styles.mainContainer}>
      <CarouselContainer />

      <section>
        <Link to="viandas">
          <button className={styles.viewAllButton}>
            VER TODAS LAS VIANDAS
          </button>
        </Link>
      </section>

      <section className={styles.sectionContainer}>
        <h1>Ofertas de la semana</h1>
        <CardsContainer currentFoods={foodsWithDiscounts} allItems={allItems} />
      </section>

      <section className={styles.sectionContainer}>
        <h1>Mejor rankeados</h1>
        <CardsContainer
          currentFoods={foodsWithScoreHigherThan4}
          allItems={allItems}
        />
      </section>

      {!favorites.length ? <div>No hay favoritos por el momento. Agrégalos con el corazón en cada comida"</div> : (
        <section className={styles.sectionContainer}>
          <h1>Mis favoritos</h1>
          <CardsContainer currentFoods={favorites} allItems={allItems} />
        </section>
      )}
    </div>
  );
};

export default Home;
