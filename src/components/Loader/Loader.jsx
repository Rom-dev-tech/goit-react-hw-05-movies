import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import './Loader.scss';

export const IsLoader = ({ height, width }) => {
  return (
    <div className="loader">
      <p className="discription">Loading movies...</p>
      <Loader type="Bars" color="#ff3381" height={height} width={width} />
    </div>
  );
};

IsLoader.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
