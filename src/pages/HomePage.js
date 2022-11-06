import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteHeader from '../components/NoteHeader';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { getNotes, deleteNote } from '../utils';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('searchKeyword');

  function changeSearchParams(searchKeyword) {
    setSearchParams({ searchKeyword });
  }

  return (
    <HomePage defaultKeyword={searchKeyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNotes(),
      searchKeyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchKeywordChangeHandler = this.onSearchKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return {
        notes: getNotes(),
      }
    });
  }

  onSearchKeywordChangeHandler(searchKeyword) {
    this.setState(() => {
      return {
        searchKeyword,
      }
    });

    this.props.keywordChange(searchKeyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toUpperCase().includes(this.state.searchKeyword.toUpperCase());
    });

    return (
      <>
        <NoteHeader />
        <section className="note-app__body">
          <SearchBar searchKeyword={this.state.searchKeyword} searchKeywordChange={this.onSearchKeywordChangeHandler} />
          <h2><b>Catatan Aktif</b></h2>
          <NoteList notes={notes} onDelete={this.onDeleteHandler} />
        </section>
      </>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;