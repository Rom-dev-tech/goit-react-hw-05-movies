import { useEffect, useState } from 'react';
import * as moviesShelfAPI from '../../../service/moviesshelf-appi';
import { MoviesGalerry } from '../../MoviesGalerry/MoviesGalerry';
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
      <h1 className="gallery__title">Tranding Movies On To Day</h1>

      <MoviesGalerry movies={movies} />
    </>
  );
};
