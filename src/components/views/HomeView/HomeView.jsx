import { useEffect, useState } from 'react';
import * as moviesShelfAPI from '../../../service/moviesshelf-appi';
import { MoviesGalerry } from '../../MoviesGalerry/MoviesGalerry';
import { Title } from '../../Title/Title';
import '../HomeView/HomeView.scss';

export const HomeView = () => {
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
