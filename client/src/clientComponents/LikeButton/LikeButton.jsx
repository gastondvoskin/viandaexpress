import styles from "./LikeButton.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserFavoritesAction } from "../../redux/userSlice";

export default function LikeButton() {
    

    const handleLike = () => {
        console.log("okis");
      };

    return(
        <button className={styles.likeButton} onClick={handleLike}>
          ♡
        </button>
    )
}