import styles from "./LikeButton.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserFavoritesAction } from "../../redux/userSlice";
import axios from "axios";

export default function LikeButton({ foodId }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.usersReducer.userFavorites);

  const isFavorite = favorites.some(favorite => favorite.id === foodId);

  const { user, isAuthenticated } = useAuth0();

  const handleLike = async () => {
    if (!isAuthenticated) {
      window.alert("Por favor, loguéate para agregar viandas a tus favoritos.");
      return;
    }
    const email = user.email;

    if (isFavorite) {
      await axios.delete(`/favorite/${email}/${foodId}`);
      dispatch(getUserFavoritesAction(email));
    } else {
      await axios.post("/favorite", { email, foodId });
      dispatch(getUserFavoritesAction(email));
    }
  };

  return (
    <button className={styles.likeButton} onClick={handleLike}>
      ♡
    </button>
  );
}
