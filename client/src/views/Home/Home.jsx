import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getFoods } from "../../redux/foodActions.js";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Paginado from "../../components/Paginado/Paginado";
import axios from "axios";

const Home = () => {
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  let allFoods = [];
  allFoods = useSelector((state) => state.foodsReducer.allFoods);
  console.log(allFoods);

  /* This implementation will change once we have a deployed DB */
  useEffect(() => {
    if (!allFoods.length) {
      // console.log("if");
      axios.get("http://localhost:3001/api").then(() => dispatch(getFoods()));
    } else {
      // console.log("else");
      dispatch(getFoods());
    }
  }, [dispatch]);

  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [foodsPerPage, setFoodsPerPage] = useState(10);

  const indexOfLastFood = currentPage * foodsPerPage;
  const indexOfFirstFood = indexOfLastFood - foodsPerPage;
  const currentFoods = allFoods.slice(indexOfFirstFood, indexOfLastFood);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={style.mainContainer}>
      {/* Comment carousel for develop */}
      {/* <div className={style.Carousel}>
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
      </div> */}

      <div className={style.Button}>
        <button>PASTAS</button>
        <button>CARNES</button>
        <button>ENSALADAS</button>
      </div>

      <div className={style.filtros}>
        <div className={style.filtros2}>
          <select name="" id="">
            <option value="">Dieta</option>
            <option value="">Vegana</option>
            <option value="">Vegetariana</option>
            <option value="">Sin tacc</option>
            <option value="">Sin lactosa</option>
          </select>

          <select name="" id="">
            <option value="">Orden</option>
            <option value="">Precio</option>
            <option value="">Popularidad</option>
          </select>
        </div>
      </div>

      <div className={style.asereje}>

        <SearchBar setCurrentPage={setCurrentPage}/>

        <Paginado
          foodsPerPage={foodsPerPage}
          foods={allFoods.length}
          paginado={paginado}
          currentPage={currentPage}
        />

        <CardsContainer currentFoods={currentFoods} />
      </div>
    </div>
  );
};

export default Home;
