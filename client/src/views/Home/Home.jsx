import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import style from "./Home.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getFoods } from '../../redux/foodActions.js';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Paginado from '../../components/Paginado/Paginado';
import axios from "axios";


const Home = () => {
    const [index, setIndex] = useState(0);

    const dispatch = useDispatch();

    const allFoods = useSelector((state) => state.foodsReducer.allFoods);

    const [order, setOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [foodsPerPage, setFoodsPerPage] = useState(10);

    const indexOfLastFood = currentPage * foodsPerPage;
    const indexOfFirstFood = indexOfLastFood - foodsPerPage;
    const currentFoods = allFoods.slice(indexOfFirstFood, indexOfLastFood);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    /* This implementation will change once we have a deployed DB */
    useEffect(() =>{
        !allFoods.length  
        ? axios.get("http://localhost:3001/api")
            .then(() => dispatch(getFoods()))
        : dispatch(getFoods())
    },[dispatch]);

    useEffect(() => {
      dispatch(getFoods());
    },[dispatch]);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.Carousel}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                    <img
                        src="../src/assets/viandas_2.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Promoción del mes</h3>
                        <p>Deliciosa vianda</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        src="../src/assets/viandas_3.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Especialidad de la casa</h3>
                        <p>La más elegida por nuestros clientes</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        src="../src/assets/viandas_4.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Conocé nuestro local</h3>
                        <p>Ituzaingó, Paseo La Plata</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

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
                <Paginado 
                    foodsPerPage={foodsPerPage}
                    foods={allFoods.length}
                    paginado={paginado} 
                    currentPage={currentPage}
                />

                <CardsContainer currentFoods={currentFoods}/>
            </div>
        </div>
    );
};

export default Home;