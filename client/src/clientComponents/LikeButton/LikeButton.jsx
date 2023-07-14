import styles from "./LikeButton.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postUserFavoriteAction } from "../../redux/userSlice";
import { useAuth0 } from "@auth0/auth0-react";

export default function LikeButton({foodId}) {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  const handleLike = () => {
    if (!isAuthenticated) {
      window.alert("Por favor, loguéate para agregar viandas a tus favoritos.");
      return;
    };

    const email = user.email;
    
    dispatch(postUserFavoriteAction(email, foodId));
  };

  return (
    <button className={styles.likeButton} onClick={handleLike}>
      ♡
    </button>
  );
}
