import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  getFoods,
  setCurrentPageAction,
} from "../../redux/foodActions.js";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Paginado from "../../components/Paginado/Paginado";
import  OrderOptions  from "../../components/orderOptions/orderOptions";
import CategoryButtons from "../../components/categoryButtons/categoryButtons";
import axios from "axios";
import FilterDietsOptions from "../../components/filtersDietsOptions/filterDietsOptions";


const Home = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const allFoods  = useSelector((state) => state.foodsReducer.allFoods);
  const filteredFoods  = useSelector((state) => state.foodsReducer.filteredFoods);
  const currentPage = useSelector((state) => state.foodsReducer.currentPage);
  const active = useSelector((state) => state.foodsReducer.activeFilteredFoods);
  const diet = useSelector((state) => state.foodsReducer.foodsDiet)
  const category = useSelector((state) => state.foodsReducer.category)

  /* This implementation will change once we have a deployed DB */
  useEffect(() => {
    if (!allFoods.length) {
      axios.get("http://localhost:3001/api").then(() => dispatch(getFoods()));
    } else {
      dispatch(getFoods());
    }
  }, [dispatch]);

  const foodsPerPage = 8;
  const indexOfLastFood = currentPage * foodsPerPage;
  const indexOfFirstFood = indexOfLastFood - foodsPerPage;
  const currentFoods = active ? filteredFoods.slice(indexOfFirstFood, indexOfLastFood) :allFoods.slice(indexOfFirstFood, indexOfLastFood);

  const paginado = (pageNumber) => {
    dispatch(setCurrentPageAction(pageNumber));
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // console.log('currentFoods: ', currentFoods);
  return (
    <div className={style.mainContainer}>
      <div className={style.Carousel}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval="9000">
          <Carousel.Item>
            <img src="../src/assets/variety.jpg" alt="Variadadas" />
            <Carousel.Caption>
              <div className={style.CarouselText}>Viandas para toda la familia</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/healthy.jpeg" alt="Saludables" />
            <Carousel.Caption>
              <div className={style.CarouselText}>Saludables y nutritivas</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/withLove.jpeg" alt="Caseras" />
            <Carousel.Caption>
              <div className={style.CarouselText}>Caseras y con amor</div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={style.buttonsContainer}>
        {/* Comentario TONO: No se puede implementar el reset hasta que se corrija la implementación de los filtros en redux */}
        {/* <button className={style.all} onClick={(e) => handleFilterByCategory(e)} value="Todas">
          Todas
        </button> */}
        {/* Comentatario TONO: los botones se deberían refactorizar: deberían mapear un array de diets para no repetir código. */}
        <CategoryButtons/>
      </div>

      <div className={style.filtros}>
        {/* Comentario TONO: El filtro de dieta no está implementado. */}
        <div className={style.filtros2}>
          
          <FilterDietsOptions/>
          <OrderOptions/>
        </div>
      </div>
        <button>Elimiaar Filtros</button>
      <div className={style.asereje}>
        <SearchBar />
        
        <Paginado
          foodsPerPage={foodsPerPage}
          foods={allFoods.length}
          filterFoods={filteredFoods.length}
          paginado={paginado}
          currentPage={currentPage}
        />

        
        {!currentFoods.length 
          ? <p>No se enconraron resultados</p>
          : <CardsContainer currentFoods={currentFoods} />
        }
      </div>
    </div>
  );
};

export default Home;

/**
 *option y valores para ordernar por Popularidad 
 *<option value="asc">Más Popular</option>
  <option value="desc">Menos Popular</option>
 * 
 * 
 * 
 */

{
  /* Carousel commented until styles are fixed */
}
{
  /* <div className={style.Carousel}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src="../src/assets/viandas_2.jpeg" alt="First slide" />
            <Carousel.Caption>
              <h3>ENSALADAS</h3>
              <p>VARIEDAD DE ENSALADAS</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/viandas_3.jpeg" alt="Second slide" />
            <Carousel.Caption>
              <h3>VERDURAS HERVIDAS</h3>
              <p>PAPA, ZANAHORIA, CHAUCHA</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/viandas_4.jpeg" alt="Third slide" />
            <Carousel.Caption>
              <h3>LA MEJOR VARIEDAD</h3>
              <p>TODAS PREPARADAS CON ALIMENTOS SALUDABLES</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */
}
