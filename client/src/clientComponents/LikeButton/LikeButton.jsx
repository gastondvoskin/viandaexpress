import styles from "./LikeButton.module.css";

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