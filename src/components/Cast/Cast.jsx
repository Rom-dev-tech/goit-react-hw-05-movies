import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as moviesShelfAPI from '../../service/moviesshelf-appi';
import defaultImage from '../../images/default.jpg';
import '../Cast/Cast.scss';

export const Cast = ({ moviesId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesShelfAPI
      .fatchCastOnMovie(moviesId)
      .then((response) => setCast(response.cast));
  }, [moviesId]);

  return (
    <ul className="cast__list">
      {cast &&
        cast.map((actor) => (
          <li key={actor.name} className="cast__item">
            <p className="cast__name">{actor.name}</p>
            <img
              className="cast__image"
              src={
                actor.profile_path !== null
                  ? `${'https://image.tmdb.org/t/p/w500'}${actor.profile_path}`
                  : defaultImage
              }
              alt={actor.name}
            />
          </li>
        ))}
    </ul>
  );
};

Cast.propTypes = {
  moviesId: PropTypes.string.isRequired,
};
