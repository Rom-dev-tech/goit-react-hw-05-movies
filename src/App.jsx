import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { AppBar } from './components/AppBar/Appbar';
import { Container } from './components/Container/Container';
import './App.scss';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "home-view" */)
);
const MoviesView = lazy(() =>
  import('./views/MoviesView/MoviesView' /* webpackChunkName: "movies-view" */)
);
const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "details-view" */
  )
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView' /* webpackChunkName: "notFound-view" */
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
              <Route path="/" exact component={HomeView} />

              <Route path="/movies" exact component={MoviesView} />

              <Route path="/movies/:slug" component={MovieDetailsView} />

              <Route component={NotFoundView} />
            </Switch>
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default App;
