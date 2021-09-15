import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { fatchReviewsOnMovie } from '../../service/moviesshelf-appi';
import { Error } from '../../UI/Error/Error';

const Reviews = ({ moviesId }) => {
  const { data, status } = useQuery(['reviews', moviesId], () =>
    fatchReviewsOnMovie(moviesId)
  );

  if (status === 'loading') {
    return <h1>loading...</h1>;
  }

  if (status === 'error') {
    return <Error title="Not found" />;
  }

  if (status === 'success') {
    return (
      <ul style={{ padding: 0 }}>
        {data.results.length ? (
          data.results.map((review) => (
            <li key={review.author}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie...</p>
        )}
      </ul>
    );
  }
};

Reviews.propTypes = {
  moviesId: PropTypes.string.isRequired,
};

export default Reviews;
