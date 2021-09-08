import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { AppBar } from './components/AppBar/Appbar';
import { Container } from './components/Container/Container';
import './App.scss';

const HomeView = lazy(() =>
  import(
    './components/views/HomeView/HomeView' /* webpackChunkName: "home-view" */
  )
);
const MoviesView = lazy(() =>
  import(
    './components/views/MoviesView/MoviesView' /* webpackChunkName: "movies-view" */
  )
);
const MovieDetailsView = lazy(() =>
  import(
    './components/views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "details-view" */
  )
);
const NotFoundView = lazy(() =>
  import(
    './components/views/NotFoundView/NotFoundView' /* webpackChunkName: "notFound-view" */
  )
);

const App = () => {
  return (
    <>
      <AppBar />

      <main className="app">
        <Container>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path="/" exact>
                <HomeView />
              </Route>

              <Route path="/movies" exact>
                <MoviesView />
              </Route>

              <Route path="/movies/:moviesId">
                <MovieDetailsView />
              </Route>

              <Route>
                <NotFoundView />
              </Route>
            </Switch>
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default App;
