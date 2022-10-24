import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ searchKeyword, searchKeywordChange }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Masukkan judul catatan yang ingin dicari ..."
        value={searchKeyword}
        onChange={(event) => searchKeywordChange(event.target.value)} />
    </div>
  );
}

SearchBar.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  searchKeywordChange: PropTypes.func.isRequired,
}

export default SearchBar;