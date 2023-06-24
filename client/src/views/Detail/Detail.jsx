import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/foodActions.js";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  console.log("aca");

  /* The useEffect implementation will change once we have a deployed DB */
  useEffect(() => {
    console.log("antes del if");
    if (!allFoods.length) {
      console.log("if");
      axios.get("http://localhost:3001/api").then(() => dispatch(getFoods()));
    } else {
      console.log("else");
      dispatch(getFoods());
    }
  }, [dispatch]);

  const foodDetail = allFoods.find((food) => food.id === id);
  console.log("id: ", id);
  console.log("allFoods: ", allFoods);
  console.log("foodDetail: ", foodDetail);
  // const { name, diet, description, image, final_price, status, total_score, category } = foodDetail;

  return (
    <main>
      {!foodDetail ? (
        <p>"Cargando..."</p>
      ) : (
        <div>
          <h1>{foodDetail?.name}</h1>
          <img src={foodDetail?.image} alt="img not found" />
          <p>{foodDetail?.description}</p>
          <p>Precio: ${foodDetail?.final_price}</p>
          <p>Categoría: {foodDetail?.category}</p>
          <p>
            Dietas:{" "}
            {!foodDetail?.diet.length ? (
              <span>Esta vianda no sigue ninguna dieta específica</span>
            ) : (
              foodDetail?.diet.map((plaftorm, index) => {
                return foodDetail?.diet.length - 1 === index ? (
                  <span key={index}>{plaftorm}</span>
                ) : (
                  <span key={index}>{`${plaftorm} | `}</span>
                );
              })
            )}
          </p>

          {foodDetail?.status && <p>Estado: activo</p>}

          {foodDetail?.total_score > 4 && (
            <p>
              Ésta es una de nuestras comidas más elegidas por los usuarios!
            </p>
          )}
        </div>
      )}
    </main>
  );
}
