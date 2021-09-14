import { memo, useEffect, useState, lazy, Suspense, useRef } from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Title } from '../../components/Title/Title';
import * as moviesShelfAPI from '../../service/moviesshelf-appi';
import defaultImage from '../../images/default.jpg';
import '../MovieDetailsView/MovieDetailsView.scss';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

const MovieDetailsView = (props) => {
  const [movie, setMovie] = useState(null);

  const { history, location, match } = props;

  const slug = match.params.slug;
  const { url, path } = match;
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  const titleOnMovie = useRef(location?.state?.label);
  const onGoBackLink = useRef(location?.state?.from);

  useEffect(() => {
    moviesShelfAPI.fatchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(onGoBackLink.current ?? '/');
  };

  return (
    <>
      <Title title="Details Film:" query={titleOnMovie.current} />
      <button className="back__button" type="button" onClick={onGoBack}>
        Go back
      </button>

      {movie && (
        <>
          <div className="details__wrapper">
            <img
              className="details__image"
              src={
                movie.poster_path !== null
                  ? `${'https://image.tmdb.org/t/p/w500'}${movie.poster_path}`
                  : defaultImage
              }
              alt={movie.title}
            />

            <div className="content__wrapper">
              <h2>{movie.original_title}</h2>
              <p>User Score: {movie.vote_average * 10} %</p>

              <h3>Overviev</h3>
              <p>{movie.overview}</p>

              <h4>Genres</h4>
              <ul className="details__list">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li key={genre.id} className="details__item">
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <p>Additional information</p>
          <ul className="additional__list">
            <li>
              <NavLink
                className="link"
                activeClassName="activeLink"
                to={`${url}/cast`}
              >
                Cast
              </NavLink>
            </li>

            <li>
              <NavLink
                className="link"
                activeClassName="activeLink"
                to={`${url}/reviews`}
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<h1>Loading information ...</h1>}>
            <Route path={`${path}/cast`}>
              <Cast moviesId={movieId} />
            </Route>

            <Route path={`${path}/reviews`}>
              <Reviews moviesId={movieId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
};

export default memo(MovieDetailsView);