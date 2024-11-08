
import React, { useState } from 'react';
import '../styles.css';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleSearch}
      style={{ padding: '8px', width: '100%', marginBottom: '20px' }}
    />
  );
};

export default SearchBar;
