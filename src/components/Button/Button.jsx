import PropTypes from 'prop-types';
import '../../components/Button/Button.scss';

export const Button = ({ title, onClick, page, currentPage }) => {
  return (
    <button
      className="button"
      type="button"
      onClick={onClick}
      disabled={page === currentPage}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
