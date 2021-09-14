import PropTypes from 'prop-types';

export const Title = ({ title }) => {
  return <h1 className="gallery__title">{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
