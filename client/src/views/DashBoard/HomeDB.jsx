import React from "react";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getFoods } from "../../redux/foodActions.js";
import CardsContainer from "../../components/DashBoard/CardsContainer";
import Paginado from "../../components/DashBoard/Paginado";
import EditForm from "./EditForm"
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(false);

  const dispatch = useDispatch();

  let allFoods = [];
  allFoods = useSelector((state) => state.foodsReducer.allFoods);

  /* This implementation will change once we have a deployed DB */
  useEffect(() => {
    if (!allFoods.length) {
      console.log("if");
      axios.get("http://localhost:3001/api").then(() => dispatch(getFoods()));
    } else {
      console.log("else");
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

  const handleSelect = (selected) => {
    setIndex(selected);
  };

  return (
    <div className={style.mainContainer}>
      <Link to='/home'><button>Home</button></Link>
      if(){

      }<div className={style.Button}>
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
        <Link to='/dashboard/create'><button>Crear Vianda</button></Link>
        <Paginado
          foodsPerPage={foodsPerPage}
          foods={allFoods.length}
          paginado={paginado}
          currentPage={currentPage}
        />
        <CardsContainer currentFoods={currentFoods} handleSelect={handleSelect} />
      </div>
    </div>
  );
};

export default Home;
