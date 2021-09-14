import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('Make your choice :)');
      return;
    }

    onSubmit(query);

    setQuery('');
  };

  return (
    <form className="searchform" onSubmit={handleSubmit}>
      <button type="submit" className="searchform__button">
        <span className="searchform__button--label">Search</span>
      </button>

      <input
        className="searchform__input"
        type="text"
        value={query}
        onChange={handleSearchChange}
        autoComplete="off"
        autoFocus
        placeholder="Enter the query of the movie or cartoon"
      />
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
