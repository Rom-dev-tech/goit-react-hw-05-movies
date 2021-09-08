import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { SearchBar } from './SearchBar';
import { MoviesGalerry } from '../../MoviesGalerry/MoviesGalerry';
import { Title } from '../../Title/Title';
import * as moviesShelfAPI from '../../../service/moviesshelf-appi';
import '../MoviesView/MoviesView.scss';

export const MoviesView = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const prevQuery = new URLSearchParams(location.search).get('query') ?? '';

  const onChangeSubmit = (query) => {
    setQuery(query);
    setMovies([]);

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  useEffect(() => {
    if (prevQuery !== '') {
      moviesShelfAPI
        .fetchSearchMovies(prevQuery)
        .then((response) => setMovies(response.results));
    }

    if (query !== '') {
      moviesShelfAPI
        .fetchSearchMovies(query)
        .then((response) => setMovies(response.results));
    }
    return;
  }, [prevQuery, query]);

  return (
    <>
      <SearchBar onSubmit={onChangeSubmit} />

      {query !== '' && <Title title="Found on request:" query={query} />}
      {query !== prevQuery && (
        <Title title="Found on request:" query={prevQuery} />
      )}

      <MoviesGalerry movies={movies} />
    </>
  );
};
