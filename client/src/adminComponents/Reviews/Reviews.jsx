import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviewsAction } from '../../redux/adminSlice';
import styles from './Reviews.module.css';

const Reviews = () => {
  const reviews = useSelector((state) => state.adminReducer.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReviewsAction());
  }, []);

  const renderStars = (rating) => {
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starIcons.push(<span key={i} className={styles['star-filled']}></span>);
      } else {
        starIcons.push(<span key={i} className={styles['star-empty']}></span>);
      }
    }

    return starIcons;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reseñas</h1>
      {reviews.map((review) => (
        <div key={review.id} className={styles.review}>
          <div className={styles.foodInfo}>
            <h3>{review.Food.name}</h3>
          </div>
          <div className={styles.reviewInfo}>
            <div className={styles.rating}>{renderStars(review.rating)}</div>
            <p>{review.comment}</p>
            <h4>{review.User.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
