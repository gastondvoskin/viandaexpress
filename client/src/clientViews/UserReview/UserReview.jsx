import React, { useState } from 'react';
import styles from "../UserReview/UserReview.module.css"
const UserReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    if (selectedRating === rating) {
      // If the selected star is already the current rating, deselect it
      setRating(0);
    } else {
      setRating(selectedRating);
    }
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleStarHover = (selectedRating) => {
    setHoverRating(selectedRating);
  };

  const handleStarHoverLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the rating and comment somewhere (e.g., in state, Redux, local storage, etc.)
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // Additional logic to handle submitting the rating and comment
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.starsContainer}>

        <p className={styles.title}>Porfavor, dejanos tu comentario y tu valoracion sobre el pedido</p>

        <img src="" alt="Imagen de la vianda"/>
        <p className={styles.orderName}>Nombre de la vianda!!!</p>
        <div className={styles.starsList}>
            {[1, 2, 3, 4, 5].map((star) => (
            <span
                key={star}
                className={
                star <= (hoverRating || rating)
                    ? styles.star_filled
                    : styles.star
                }
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarHoverLeave}
                role="button"
                aria-label={`${star} star`}
            >
                &#9733;
            </span>
            ))}
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Comentario..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default UserReview;
