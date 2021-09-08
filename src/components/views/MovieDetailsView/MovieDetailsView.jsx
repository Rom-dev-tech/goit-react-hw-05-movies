import { memo, useEffect, useState, lazy, Suspense } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as moviesShelfAPI from '../../../service/moviesshelf-appi';
import defaultImage from '../../../images/default.jpg';
import '../MovieDetailsView/MovieDetailsView.scss';

const Cast = lazy(() =>
  import('../../Cast/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('../../Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

const MovieDetailsView = () => {
  const { moviesId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesShelfAPI.fatchMovieById(moviesId).then(setMovie);
  }, [moviesId]);

  return (
    <>
      <h1>{`Details Film  ${moviesId}`}</h1>

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

          <Suspense fallback={<h1>Loading... Additional information</h1>}>
            <Route path={`${path}/cast`}>
              <Cast moviesId={moviesId} />
            </Route>

            <Route path={`${path}/reviews`}>
              <Reviews moviesId={moviesId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
};

export default memo(MovieDetailsView);
