import { useEffect, useState } from 'react';
import * as moviesShelfAPI from '../../service/moviesshelf-appi';
import { MoviesGalerry } from '../../components/MoviesGalerry/MoviesGalerry';
import { Title } from '../../components/Title/Title';
import '../../components/MoviesGalerry/MoviesGalerry.scss';

const HomeView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesShelfAPI
      .fetchTrandingMovies()
      .then((response) => setMovies(response.results))
      .catch();
  }, []);
  return (
    <>
      <Title title="Tranding Movies On To Day" />

      <MoviesGalerry movies={movies} />
    </>
  );
};

export default HomeView;
