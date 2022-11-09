import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/ThemeContext';

function SearchBar({ searchKeyword, searchKeywordChange }) {
  return (
    <ThemeConsumer>
      {
        ({ locale }) => {
          return (
            <div className="note-search">
              <input
                type="text"
                placeholder={locale === 'id' ? 'Masukkan judul catatan yang ingin dicari ...' : 'Enter the title of the note you want to search ...'}
                value={searchKeyword}
                onChange={(event) => searchKeywordChange(event.target.value)} />
            </div>
          );
        }
      }
    </ThemeConsumer>
  );
}

SearchBar.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  searchKeywordChange: PropTypes.func.isRequired,
}

export default SearchBar;