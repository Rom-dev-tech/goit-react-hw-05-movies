import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg';

export const MoviesGalerry = ({ movies }) => {
  return (
    <ul className="gallery">
      {movies &&
        movies.map((movie) => (
          <li key={movie.id} className="gallery__item">
            <Link to={`/movies/${movie.id}`}>
              <img
                className="gallery__image"
                src={
                  movie.poster_path !== null
                    ? `${'https://image.tmdb.org/t/p/w500'}${movie.poster_path}`
                    : defaultImage
                }
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesGalerry.propTypes = {
  movies: PropTypes.array.isRequired,
};
