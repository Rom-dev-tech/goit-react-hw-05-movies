import { NavLink } from 'react-router-dom';
import '../Navigation/Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        exact
        className="navigation__link"
        activeClassName="activeLink"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className="navigation__link"
        activeClassName="activeLink"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
