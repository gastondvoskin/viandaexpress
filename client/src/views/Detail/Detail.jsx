import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getFoods } from '../../redux/foodActions.js';

export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const allFoods = useSelector((state) => state.foodsReducer.allFoods);

    const foodDetail = allFoods.find(food => food.id === id);
    const { name, diet, description, image, final_price, status, total_score, category } = foodDetail;

    /* The useEffect implementation will change once we have a deployed DB */
    useEffect(() =>{
        !allFoods  
        ? axios.get("http://localhost:3001/api")
            .then(() => dispatch(getFoods()))
        : dispatch(getFoods())
    },[dispatch]);

    return(
        <div>
            <h1>{name}</h1>
            <img src={image} alt="img not found" />
            <p>{description}</p>
            <p>Precio: ${final_price}</p>
            <p>Categoría: {category}</p>
            <p>Dietas:{' '} 
                {!diet?.length
                    ? <span>Esta vianda no sigue ninguna dieta específica</span>
                    : diet.map((plaftorm, index) => {
                        return(
                            diet.length - 1 === index 
                                ? <span key={index}>{plaftorm}</span>
                                : <span key={index}>{`${plaftorm} | `}</span>
                        ) 
                    })
                }
            </p>
            
            {
                status && <p>Estado: activo</p>         /* This works because status has a boolean datatype. If this changes in the back-end, change this line */
            }

            {
                total_score > 4 && <p>Ésta es una de nuestras comidas más elegidas por los usuarios!</p>
            }

        </div>
    )
};

