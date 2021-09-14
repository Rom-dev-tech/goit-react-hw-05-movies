import { useQuery } from 'react-query';
import { useState } from 'react';
import { IsLoader } from '../../components/Loader/Loader';
import { fetchTrandingMovies } from '../../service/moviesshelf-appi';
import { MoviesGalerry } from '../../components/MoviesGalerry/MoviesGalerry';
import { Error } from '../../UI/Error/Error';
import { Title } from '../../components/Title/Title';
import { Pagination } from '../../components/Pagination/Pagination';
import '../../components/MoviesGalerry/MoviesGalerry.scss';

const HomeView = () => {
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData, isFetching } = useQuery(
    ['home', page],
    () => fetchTrandingMovies(page),
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

  return (
    <>
      <Title title="Tranding Movies On To Day" />

      {status === 'error' && <Error title="Not found" />}
      {status === 'success' && (
        <>
          <MoviesGalerry movies={data.results} />
          {isFetching ? null : (
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

export default HomeView;
