import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import style from "./Home.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAllFoods } from '../../redux/foodSlice';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Paginado from '../../components/Paginado/Paginado';





const Home = () => {
    const [index, setIndex] = useState(0);

    const dispatch = useDispatch()

    const allFoods = useSelector((state) => state.foodsReducer.allFoods);
    console.log(allFoods)

    const foods = [
        {
          name: "Ensalada de espinacas",
          diet: [1, 2, 3, 4],
          description:
            "Una deliciosa ensalada de espinacas frescas con tomates cherry, aguacate, nueces y aderezo de vinagreta balsámica.",
          image:
            "https://amilinea.com/wp-content/uploads/2019/05/ensalada-de-espinacas.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada César",
          diet: [2],
          description:
            "La clásica ensalada César con lechuga romana, crutones, queso parmesano y aderezo César cremoso.",
          image:
            "https://d22fxaf9t8d39k.cloudfront.net/17d16895112437af88b786e19ac669ee0923c5eba134bff92dbe65ad23a0b14d111915.png",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de quinoa",
          diet: [1, 2, 3, 4],
          description:
            "Una nutritiva ensalada de quinoa con vegetales frescos, aceitunas, pepino y aderezo de limón y cilantro.",
          image:
            "https://macabites.com/wp-content/uploads/2017/12/ensalada-de-quinoa-550x550.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada Caprese",
          diet: [1, 2],
          description:
            "Una ensalada Caprese clásica con tomates frescos, mozzarella de búfala, hojas de albahaca y aceite de oliva.",
          image:
            "https://www.comedera.com/wp-content/uploads/2017/07/ensalada-caprese.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de frutas",
          diet: [1, 2, 3, 4],
          description:
            "Una refrescante ensalada de frutas variadas como sandía, melón, uvas y piña, con un toque de menta fresca.",
          image:
            "https://cdn0.recetasgratis.net/es/posts/7/6/4/ensalada_de_frutas_para_diabeticos_57467_600_square.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de garbanzos",
          diet: [1, 2, 3, 4],
          description:
            "Una ensalada de garbanzos con pepino, tomate, cebolla roja, pimiento y aderezo de yogur y comino.",
          image:
            "https://deliciaskitchen.com/wp-content/uploads/2021/08/ensalada-de-garbanzos-veraniega.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de aguacate",
          diet: [1, 2, 3, 4],
          description:
            "Una ensalada de aguacate con tomate cherry, cilantro, cebolla roja y aliño de limón y aceite de oliva.",
          image:
            "https://cdn.colombia.com/gastronomia/2011/07/26/ensalada-de-aguacate-y-tomate-1496.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada mixta",
          diet: [1, 2, 3, 4],
          description:
            "Una ensalada mixta clásica con lechuga, tomate, zanahoria, pepino y aderezo de vinagreta casera.",
          image: "https://imag.bonviveur.com/imagen-de-la-ensalada-mixta.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de zanahoria rallada",
          diet: [1, 2, 3, 4],
          description:
            "Una ensalada fresca de zanahoria rallada con pasas, nueces, cilantro y aderezo de limón y miel.",
          image:
            "https://www.comedera.com/wp-content/uploads/2021/11/ensalada-de-zanahoria.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de tomate y mozzarella",
          diet: [2],
          description:
            "Una ensalada clásica de tomate y mozzarella con hojas de albahaca fresca y aceite de oliva virgen extra.",
          image:
            "https://www.solucionesparaladiabetes.com/magazine-diabetes/wp-content/uploads/tomate-mozzarella-696x464.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada Waldorf",
          diet: [2],
          description:
            "Una ensalada Waldorf tradicional con apio, manzanas, uvas, nueces y aderezo de yogur y mayonesa.",
          image:
            "https://www.paulinacocina.net/wp-content/uploads/2021/11/Ensalada-waldorf.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de pepino y yogur",
          diet: [2],
          description:
            "Una ensalada refrescante de pepino con yogur griego, ajo, eneldo y un toque de jugo de limón.",
          image:
            "https://recetas.mx/wp-content/uploads/2019/03/ensalada-raita-con-yogur-1500x850.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de remolacha",
          diet: [1, 2, 3, 4],
          description:
            "Una colorida ensalada de remolacha asada con rúcula, queso de cabra, nueces y aderezo de vinagreta balsámica.",
          image:
            "https://www.ensaladade.net/wp-content/uploads/2020/04/plato-ensalada-de-remolacha.png",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de pasta",
          diet: [2],
          description:
            "Una ensalada de pasta fría con vegetales mixtos, aceitunas, queso feta y aderezo de aceite y vinagre.",
          image:
            "https://www.paulinacocina.net/wp-content/uploads/2022/03/ensalada-de-pasta-receta.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada griega",
          diet: [2],
          description:
            "Una ensalada griega clásica con pepino, tomate, cebolla roja, aceitunas kalamata y queso feta.",
          image:
            "https://www.paulinacocina.net/wp-content/uploads/2022/03/ensalada-de-pasta-receta.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de col rizada",
          diet: [1, 2, 3, 4],
          description:
            "Una saludable ensalada de col rizada con manzanas, nueces, pasas y aderezo de vinagreta de mostaza y miel.",
          image:
            "https://images-gmi-pmc.edge-generalmills.com/c362415b-4428-40c3-88c5-57f4d6b7d1d6.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de lentejas",
          diet: [1, 2, 3, 4],
          description:
            "Una satisfactoria ensalada de lentejas con vegetales, cilantro, limón y un aliño de aceite de oliva y comino.",
          image:
            "https://images.hola.com/imagenes/cocina/recetas/20200701171317/ensalada-lentejas-thermomix/0-842-785/ensalada-lentejas-thermomix-t.jpg?tx=w_680",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de garbanzos y aguacate",
          diet: [1, 2, 3, 4],
          description:
            "Una combinación deliciosa de garbanzos, aguacate, tomates cherry, cebolla roja y aderezo de limón y cilantro.",
          image:
            "https://elmundoenrecetas.s3.amazonaws.com/uploads/recipe/picture/623/ensalada_de_garbanzos_y_aguacate_2.webp",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de patatas",
          diet: [1, 2, 3, 4],
          description:
            "Una ensalada clásica de patatas con mayonesa, apio, cebolla, mostaza, eneldo y sal y pimienta al gusto.",
          image: "https://cocinaabuenashoras.com/files/ensalada-de-patatas.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de rúcula y parmesano",
          diet: [2],
          description:
            "Una ensalada simple pero sabrosa de rúcula fresca, queso parmesano en láminas y aderezo de limón y aceite de oliva.",
          image: "https://queapetito.com/wp-content/uploads/2019/05/rucula-1.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
        {
          name: "Ensalada de naranja y aguacate",
          diet: [1, 2, 3, 4],
          description:
            "Una refrescante ensalada de naranja, aguacate, espinacas baby y aderezo de vinagreta de naranja y miel.",
          image:
            "https://okdiario.com/img/2018/08/18/receta-de-ensalada-de-aguacate-y-naranja-1.jpg",
          initial_price: 10,
          discount: 0,
          final_price: 10,
          status: true,
          total_score: 0,
          category: "ensalada",
        },
      ];


    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [foodsPerPage, setFoodsPerPage] = useState(10)
    const indexOfLastFood = currentPage * foodsPerPage
    const indexOfFirstFood = indexOfLastFood - foodsPerPage
    const currentFood = foods.slice(indexOfFirstFood, indexOfLastFood)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() =>{
        dispatch(getAllFoods())
        
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

            <div className={style.asereje}>

            <Paginado foodsPerPage={foodsPerPage}
                    foods={foods.length}
                    paginado={paginado} />
                <CardsContainer currentFoods={currentFood}/>
            </div>

            
        </div>
    );
};
export default Home;