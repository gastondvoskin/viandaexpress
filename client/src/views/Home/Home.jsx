import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import style from "./Home.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getFoods } from '../../redux/foodActions.js';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Paginado from '../../components/Paginado/Paginado';





const Home = () => {
    const [index, setIndex] = useState(0);

    const dispatch = useDispatch()

    const allFoods = useSelector((state) => state.foodsReducer.allFoods);

    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [foodsPerPage, setFoodsPerPage] = useState(10)
    const indexOfLastFood = currentPage * foodsPerPage
    const indexOfFirstFood = indexOfLastFood - foodsPerPage
    const currentFoods = allFoods.slice(indexOfFirstFood, indexOfLastFood)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() =>{
        dispatch(getFoods())
    },[dispatch])

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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        src="../src/assets/viandas_3.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        src="../src/assets/viandas_4.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className={style.Button}>
                <button>PASTA</button>
                <button>CARNES</button>
                <button>ENSALADAS</button>
            </div>

            <div className={style.filtros}>
                <div className={style.filtros2}>
                    <select name="" id="">
                        <option value="">Select Diet</option>
                        <option value="">Vegana</option>
                        <option value="">Sin Tacc</option>
                    </select>

                    <select name="" id="">
                        <option value="">Ordenamiento</option>
                        <option value="">Precio</option>
                        <option value="">Valoracion</option>
                    </select>
                </div>
            </div>
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <div className={style.asereje}>

            <Paginado 
              foodsPerPage={foodsPerPage}
              foods={allFoods.length}
              paginado={paginado} />
            <CardsContainer currentFoods={currentFoods}/>
            </div>

            

        </div>
    );
};
export default Home;