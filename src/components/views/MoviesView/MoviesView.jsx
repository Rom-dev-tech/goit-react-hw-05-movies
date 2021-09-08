import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { MoviesGalerry } from '../../MoviesGalerry/MoviesGalerry';
import * as moviesShelfAPI from '../../../service/moviesshelf-appi';
import '../MoviesView/MoviesView.scss';

export const MoviesView = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const onChangeSubmit = (query) => {
    setQuery(query);
    setMovies([]);
  };

  useEffect(() => {
    if (query !== '') {
      moviesShelfAPI
        .fetchSearchMovies(query)
        .then((response) => setMovies(response.results));
    }
    return;
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={onChangeSubmit} />

      <h1>Found on request: {query}</h1>
      <MoviesGalerry movies={movies} />
    </>
  );
};
