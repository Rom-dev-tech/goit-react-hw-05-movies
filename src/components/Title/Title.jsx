import PropTypes from 'prop-types';

export const Title = ({ title, query }) => {
  return (
    <h1 className="gallery__title">
      {title} {query}
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  query: PropTypes.string,
};
