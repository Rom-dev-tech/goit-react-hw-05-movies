import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { SearchBar } from './SearchBar';
import { MoviesGalerry } from '../../components/MoviesGalerry/MoviesGalerry';
import { Title } from '../../components/Title/Title';
import * as moviesShelfAPI from '../../service/moviesshelf-appi';
import './MoviesView.scss';

const MoviesView = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const prevQuery = new URLSearchParams(location.search).get('query') ?? '';

  const fetchMovies = (query) => {
    moviesShelfAPI
      .fetchSearchMovies(query)
      .then((response) => setMovies(response.results));
  };

  const onChangeSubmit = (query) => {
    setQuery(query);

    if (query !== '') {
      history.push({
        ...location,
        search: `query=${query}`,
      });
    }
  };

  useEffect(() => {
    if (query !== '') {
      fetchMovies(query);
    }

    if (prevQuery !== '') {
      fetchMovies(prevQuery);
    }

    setMovies([]);
    return;
  }, [prevQuery, query]);

  return (
    <>
      <SearchBar onSubmit={onChangeSubmit} />

      {query !== '' && <Title title="Found on request:" query={query} />}
      {query === prevQuery || prevQuery === '' ? null : (
        <Title title="Found on request:" query={prevQuery} />
      )}

      <MoviesGalerry movies={movies} />
    </>
  );
};

export default MoviesView;
