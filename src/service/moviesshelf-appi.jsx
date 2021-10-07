const BASE_URL = 'https://api.themoviedb.org/3/';
const API__KEY = 'api_key=7a4908c0d129fab96cd8dd64f9afaadf';

const fetchWithErrorHadling = async (url = '', config = {}) => {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
};

export const fetchTrandingMovies = (page = 1) => {
  return fetchWithErrorHadling(
    `${BASE_URL}trending/movie/day?${API__KEY}&page=${page}&language=en`
  );
};

export const fetchSearchMovies = (querry, page) => {
  return fetchWithErrorHadling(
    `${BASE_URL}search/movie?${API__KEY}&query=${querry}&language=en&page=${page}`
  );
};

export const fatchMovieById = (movieId) => {
  return fetchWithErrorHadling(
    `${BASE_URL}movie/${movieId}?${API__KEY}&language=en`
  );
};

export const fatchCastOnMovie = (movieId) => {
  return fetchWithErrorHadling(
    `${BASE_URL}movie/${movieId}/credits?${API__KEY}&language=en`
  );
};

export const fatchReviewsOnMovie = (movieId) => {
  return fetchWithErrorHadling(
    `${BASE_URL}movie/${movieId}/reviews?${API__KEY}&language=en-US&page=1`
  );
};
