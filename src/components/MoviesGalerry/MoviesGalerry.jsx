import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import defaultImage from '../../images/default.jpg';

export const MoviesGalerry = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="gallery">
      {movies &&
        movies.map((movie) => (
          <li key={movie.id} className="gallery__item">
            <Link
              to={{
                pathname: `/movies/${slugify(
                  `${movie.original_title} ${movie.id}`,
                  {
                    lower: true,
                  }
                )}`,
                state: { from: location, label: movie.original_title },
              }}
            >
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
