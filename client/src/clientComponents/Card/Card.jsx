import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  setItemsActions,
  deleteItemActions,
  putItemActions,
} from "../../redux/shopingCartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import axios from "axios";
import { setUserOrderCase } from "../../redux/shopingCartSlice";
import LikeButton from "../LikeButton/LikeButton";
import AddButton from "../AddButton/AddButton";
import meat from "../../assets/categories/meat.png";
import pastas from "../../assets/categories/pastas.png";
import salad from "../../assets/categories/salad.png";
import vegetarian from "../../assets/diets/vegetarian.png";
import vegan from "../../assets/diets/vegan.png";
import sinLactosa from "../../assets/diets/sinLactosa.png";
import sinTacc from "../../assets/diets/sinTacc.png";

export default function Card({
  id,
  name,
  image,
  initial_price,
  final_price,
  category,
  diets,
  discount,
  status,
  allItems,
  orderUser,
}) {
  const [isItem, setIsItem] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [quantity, setQuantity] = useState(1);
  const foodDetail = {
    id,
    name,
    image,
    initial_price,
    final_price,
    category,
    diets,
    discount,
    status,
  };

  let categoryIcon;
  if (category === "Carnes")
    categoryIcon = <img className={style.categoryIcon} src={meat} />;
  if (category === "Ensaladas")
    categoryIcon = <img className={style.categoryIcon} src={salad} />;
  if (category === "Pastas")
    categoryIcon = <img className={style.categoryIcon} src={pastas} />;

  const dietsIcons = diets?.map((diet, index) => {
    if (diet === "Sin TACC")
      diet = <img key={index} className={style.dietsIcon} src={sinTacc} />;
    if (diet === "Vegetariana")
      diet = <img key={index} className={style.dietsIcon} src={vegetarian} />;
    if (diet === "Vegana")
      diet = <img key={index} className={style.dietsIcon} src={vegan} />;
    if (diet === "Sin Lactosa")
      diet = <img key={index} className={style.dietsIcon} src={sinLactosa} />;
    return diet;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    allItems?.map((item) => {
      if (item.FoodId === id) {
        setIsItem(true);
        setQuantity(item.quantity);
      }
    });
  }, []);
  
  /* RETURN */
  return (
    <div className={style.card}>
      <div className={style.imageAndLikeContainer}>
        <NavLink className={style.NavLink} to={`/detail/${id}`}>
          <img src={image} alt="img not found" className={style.card_img} />
        </NavLink>

        <div>
          <LikeButton foodId={id} />
        </div>
      </div>

      <div className={style.dataContainer}>
        <h2>{name}</h2>
        <div className={style.categoryAndDiets}>
          {categoryIcon}{" "}
          {dietsIcons?.map((dietIcon, index) => (
            <span key={index}>{dietIcon}</span>
          ))}
        </div>

        <div className={style.priceContainer}>
          <p>${final_price}</p>
        </div>
      </div>

      <AddButton 
        id={foodDetail.id}
        allItems={allItems}
        isItem={isItem}
        setIsItem={setIsItem}
        Food={foodDetail}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}
