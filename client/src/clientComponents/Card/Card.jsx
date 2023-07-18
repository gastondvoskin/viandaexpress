import styles from "./Card.module.css";
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
import { setUserOrderCase } from "../../redux/shopingCartSlice";
import LikeButton from "../LikeButton/LikeButton";

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
  orderId,
  total_score,
}) {
  const [isItem, setIsItem] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [quantity, setQuantity] = useState(1);
  const Food = {
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
    categoryIcon = <img className={styles.categoryIcon} src={meat} />;
  if (category === "Ensaladas")
    categoryIcon = <img className={styles.categoryIcon} src={salad} />;
  if (category === "Pastas")
    categoryIcon = <img className={styles.categoryIcon} src={pastas} />;

  const dietsIcons = diets?.map((diet, index) => {
    if (diet === "Sin TACC")
      diet = <img key={index} className={styles.dietsIcon} src={sinTacc} />;
    if (diet === "Vegetariana")
      diet = <img key={index} className={styles.dietsIcon} src={vegetarian} />;
    if (diet === "Vegana")
      diet = <img key={index} className={styles.dietsIcon} src={vegan} />;
    if (diet === "Sin Lactosa")
      diet = <img key={index} className={styles.dietsIcon} src={sinLactosa} />;
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
  const handleClick = (e) => {
    if (!isAuthenticated) {
      Swal.fire(
        "¡Cuidado!",
        "Loguéate antes de agregar productos a tu carrito de compras.",
        "error"
      );
    } else {
      if (isItem) {
        setIsItem(false);
        const item = allItems.filter((it) => it.FoodId === id)[0];
        dispatch(deleteItemActions({ id: item.id, OrderId: orderId }));
      } else {
        setIsItem(true);
        const amount = final_price * parseInt(quantity);
        dispatch(
          setItemsActions({
            Food: Food,
            FoodId: id,
            OrderId: orderId,
            name: name,
            image: image,
            final_price: final_price,
            quantity: quantity,
            amount: amount,
          })
        );
        // const bodyAddItem = {
        //   userEmail: user?.email,
        //   FoodId: id,
        //   quantity,
        //   final_price,
        // };
        // axios.post("/item", bodyAddItem).catch((error) => console.log(error));
      }
    }
  };

  const updateQuantity = (e) => {
    const item = allItems.filter((it) => it.FoodId === id)[0];
    const quantity = parseInt(e.target.value);
    const amount = final_price * quantity;
    setQuantity(quantity);
    // dispatch(deleteItemActions(id));
    dispatch(
      putItemActions({
        orderId,
        itemId: item.id,
        quantity,
        amount,
      })
    );
    // addItemsActions({
    //   id,
    //   name,
    //   image,
    //   final_price,
    //   quantity: quantity,
    //   amount: amount,
    // })
    // const bodyUpdateItem = {
    //   userEmail: user?.email,
    //   FoodId: id,
    //   quantity,
    //   final_price,
    // };
    // axios.put("/item", bodyUpdateItem).catch((error) => console.log(error));
  };

  /* RETURN */
  return (
    <div className={styles.card}>
      <div className={styles.imageAndLikeContainer}>
        <NavLink className={styles.NavLink} to={`/detail/${id}`}>
          <img src={image} alt="img not found" className={styles.card_img} />
        </NavLink>

        {total_score > 4 && <div className={styles.star}>⭐️</div>}

        <div>
          <LikeButton foodId={id} />
        </div>
      </div>

      <div className={styles.dataContainer}>
        <h2>{name}</h2>
        <div className={styles.categoryAndDiets}>
          {categoryIcon}{" "}
          {dietsIcons?.map((dietIcon, index) => (
            <span key={index}>{dietIcon}</span>
          ))}
        </div>

        {discount === 0 ? (
          <div className={styles.priceContainer}>
            <span className={styles.normalPrice}>${final_price}</span>
          </div>
        ) : (
          <div className={styles.priceContainer}>
            <span className={styles.discount}>🎁 {discount}%</span>
            <span className={styles.previousPrice}>${initial_price}</span>
            <span className={styles.currentPrice}>${final_price}</span>
          </div>
        )}
      </div>

      <div className={styles.inputagregar}>
        <button className={styles.btncar} onClick={handleClick}>
          {isItem ? "Eliminar" : "Agregar"}
        </button>
        {isItem ? (
          <input
            className={styles.detailinput}
            type="number"
            min="1"
            value={quantity}
            onChange={updateQuantity}
          />
        ) : null}
      </div>
    </div>
  );
}
