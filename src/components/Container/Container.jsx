import PropTypes from 'prop-types';
import '../Container/Container.scss';

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};
