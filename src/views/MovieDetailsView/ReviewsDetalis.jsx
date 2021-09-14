import { lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

export const ReviewsDetalis = ({ url, path, movieId }) => {
  return (
    <>
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
  );
};

ReviewsDetalis.propTypes = {
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
};
