import { Route, Switch } from 'react-router';
import { AppBar } from './components/AppBar/Appbar';
import { Container } from './components/Container/Container';
import { HomeView } from './components/views/HomeView/HomeView';
import { MoviesView } from './components/views/MoviesView/MoviesView';
import { NotFoundView } from './components/views/NotFoundView/NotFoundView';
import { MovieDetailsView } from './components/views/MovieDetailsView/MovieDetailsView';
import './App.scss';

const App = () => {
  return (
    <>
      <AppBar />

      <main className="app">
        <Container>
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
        </Container>
      </main>
    </>
  );
};

export default App;
