import { useState } from 'react';
import { useQuery } from 'react-query';
import { SearchBar } from './SearchBar';
import { MoviesGalerry } from '../../components/MoviesGalerry/MoviesGalerry';
import { Title } from '../../components/Title/Title';
import { Error } from '../../UI/Error/Error';
import { IsLoader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
import { fetchSearchMovies } from '../../service/moviesshelf-appi';
import { AboutMoviesPage } from '../../components/AboutMoviesPage/AboutMoviesPage';
import './MoviesView.scss';
import '../../components/MoviesGalerry/MoviesGalerry.scss';

const MoviesView = (props) => {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);

  const { history, location } = props;

  const prevQuery = new URLSearchParams(location.search).get('query') ?? null;

  const { data, status, isPreviousData, isFetching } = useQuery(
    ['movies', page, query],
    () => fetchSearchMovies(prevQuery, page),
    {
      keepPreviousData: true,
    }
  );

  const pageIncriment = () => {
    const totalPages = data.total_pages / data.results.length;
    const currentPage = data.page;
    if (!isPreviousData && totalPages !== currentPage) {
      setPage((state) => state + 1);
    }
  };

  const pageDicriment = () => {
    setPage((state) => Math.max(state - 1, 1));
  };

  const onChangeSubmit = (query) => {
    setQuery(query);
    setPage(1);

    if (query !== '') {
      history.push({
        ...location,
        search: `query=${query}`,
      });
    }
  };

  if (query === null && prevQuery === null) {
    return (
      <>
        <SearchBar onSubmit={onChangeSubmit} />
        <AboutMoviesPage />
      </>
    );
  }

  return (
    <>
      <SearchBar onSubmit={onChangeSubmit} />

      {status === 'error' && <Error title="Not found" />}
      {status === 'success' && (
        <>
          <Title title={`Found on request:  "${prevQuery}"`} />
          <MoviesGalerry movies={data.results} />
          {data.total_pages / data.results.length < data.results.length && (
            <Pagination
              pageIncriment={pageIncriment}
              pageDicriment={pageDicriment}
              page={page}
              data={data}
            />
          )}
        </>
      )}
      {isFetching ? <IsLoader height={80} width={80} /> : null}
    </>
  );
};

export default MoviesView;
