import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg';

export const DetailsView = ({ data }) => {
  return (
    <div className="details__wrapper">
      <img
        className="details__image"
        src={
          data.poster_path !== null
            ? `${'https://image.tmdb.org/t/p/w500'}${data.poster_path}`
            : defaultImage
        }
        alt={data.title}
      />

      <div className="content__wrapper">
        <h2>{data.original_title}</h2>
        <p>User Score: {data.vote_average * 10} %</p>

        <h3>Overviev</h3>
        <p>{data.overview}</p>

        <h4>Genres</h4>
        <ul className="details__list">
          {data.genres &&
            data.genres.map((genre) => (
              <li key={genre.id} className="details__item">
                {genre.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

DetailsView.propTypes = {
  data: PropTypes.object.isRequired,
};
