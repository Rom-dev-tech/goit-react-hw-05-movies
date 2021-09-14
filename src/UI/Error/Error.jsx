import PropTypes from 'prop-types';
import './Error.scss';

export const Error = ({ title }) => <p className="error">{title}</p>;

Error.propTypes = {
  title: PropTypes.string.isRequired,
};
