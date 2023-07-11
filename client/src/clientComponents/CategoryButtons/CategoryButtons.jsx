import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeFilteredFoodsAction,
  filterByCategoryAction,
  setCategoryAction,
  setCurrentPageAction,
  setDietAction,
  setOrderAction,
} from "../../redux/foodActions";
import styles from "./CategoryButtons.module.css";
import pastasImage from "../../assets/categories/pastas.jpg";
import carnesImage from "../../assets/categories/meat.jpg";
import saladImage from "../../assets/categories/salad.jpeg";


const CategoryButtons = () => {
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const value = e.target.value;
    const filteredFoods = handlerFilterCategory(value);
    dispatch(filterByCategoryAction(filteredFoods));
    dispatch(setOrderAction(""));
    dispatch(activeFilteredFoodsAction(true));
    dispatch(setCurrentPageAction(1));
    dispatch(setCategoryAction(value));
    dispatch(setDietAction(""));
  };

  const handlerFilterCategory = (value) => {
    let filteredCategoryFoods;
    switch (value) {
      case "Pastas":
        filteredCategoryFoods = allFoods.filter((e) => e.category === "Pastas");
        break;
      case "Carnes":
        filteredCategoryFoods = allFoods.filter((e) => e.category === "Carnes");
        break;
      case "Ensaladas":
        filteredCategoryFoods = allFoods.filter(
          (e) => e.category === "Ensaladas"
        );
        break;
      default:
        break;
    }
    return filteredCategoryFoods;
  };

  return (
    <div className={styles.mainContainer}>
      <button
        className={styles.button}
        onClick={(e) => handleClick(e)}
        value="Pastas"
      >
        <h2 className={styles.text}>Pastas</h2>
        <img className={styles.image} src={pastasImage} alt="Pastas" />
      </button>

      <button
        className={styles.button}
        onClick={(e) => handleClick(e)}
        value="Carnes"
      >
        <h2 className={styles.text}>Carnes</h2>
        <img className={styles.image} src={carnesImage} alt="Carnes" />
      </button>

      <button
        className={styles.button}
        onClick={(e) => handleClick(e)}
        value="Ensaladas"
      >
        <h2 className={styles.text}>Ensaladas</h2>
        <img className={styles.image} src={saladImage} alt="Ensaladas" />
      </button>
    </div>
  );
};

export default CategoryButtons;
