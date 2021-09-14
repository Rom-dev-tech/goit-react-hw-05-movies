import { memo, useRef } from 'react';
import { useQuery } from 'react-query';
import { ReviewsDetalis } from '../MovieDetailsView/ReviewsDetalis';
import { Title } from '../../components/Title/Title';
import { fatchMovieById } from '../../service/moviesshelf-appi';
import { DetailsView } from '../MovieDetailsView/DetailsView';
import '../MovieDetailsView/MovieDetailsView.scss';

const MovieDetailsView = (props) => {
  const { history, location, match } = props;

  const slug = match.params.slug;
  const { url, path } = match;
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  const titleOnMovie = useRef(location?.state?.label);
  const onGoBackLink = useRef(location?.state?.from);

  const { data } = useQuery(['movieDitales', movieId], () =>
    fatchMovieById(movieId)
  );

  const onGoBack = () => {
    history.push(onGoBackLink.current ?? '/');
  };

  return (
    <>
      <Title title={`Details Film: ${titleOnMovie.current}`} />
      <button className="back__button" type="button" onClick={onGoBack}>
        Go back
      </button>

      {data && (
        <>
          <DetailsView data={data} />

          <p>Additional information</p>

          <ReviewsDetalis url={url} path={path} movieId={movieId} />
        </>
      )}
    </>
  );
};

export default memo(MovieDetailsView);
