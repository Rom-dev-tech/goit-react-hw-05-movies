import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import { fatchCastOnMovie } from '../../service/moviesshelf-appi';
import { Error } from '../../UI/Error/Error';
import defaultImage from '../../images/default.jpg';
import '../Cast/Cast.scss';

const Cast = ({ moviesId }) => {
  const { data, status } = useQuery(['cast', moviesId], () =>
    fatchCastOnMovie(moviesId)
  );

  if (status === 'loading') {
    return <h1>loading...</h1>;
  }

  if (status === 'error') {
    return <Error title="Not found" />;
  }

  if (status === 'success') {
    return (
      <ul className="cast__list">
        {data.cast &&
          data.cast.map((actor) => (
            <li key={actor.name} className="cast__item">
              <p className="cast__name">{actor.name}</p>
              <img
                className="cast__image"
                src={
                  actor.profile_path !== null
                    ? `${'https://image.tmdb.org/t/p/w500'}${
                        actor.profile_path
                      }`
                    : defaultImage
                }
                alt={actor.name}
              />
            </li>
          ))}
      </ul>
    );
  }
};

Cast.propTypes = {
  moviesId: PropTypes.string.isRequired,
};

export default Cast;
