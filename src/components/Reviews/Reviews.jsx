import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as moviesShelfAPI from '../../service/moviesshelf-appi';

export const Reviews = ({ moviesId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesShelfAPI
      .fatchReviewsOnMovie(moviesId)
      .then((response) => setReviews(response.results));
  }, [moviesId]);

  return (
    <>
      <ul>
        {reviews.length ? (
          reviews.map((review) => (
            <li key={review.author}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie...</p>
        )}
      </ul>
    </>
  );
};

Reviews.propTypes = {
  moviesId: PropTypes.string.isRequired,
};
