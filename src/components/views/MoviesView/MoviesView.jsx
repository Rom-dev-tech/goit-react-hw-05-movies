import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { MoviesGalerry } from '../../MoviesGalerry/MoviesGalerry';
import { Title } from '../../Title/Title';
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

      {query !== '' && <Title title="Found on request:" query={query} />}

      <MoviesGalerry movies={movies} />
    </>
  );
};
