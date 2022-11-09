import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { getActiveNotes, deleteNote } from '../utils/api';
import { showFormattedDate } from '../utils/index';

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
      notes: [],
      searchKeyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchKeywordChangeHandler = this.onSearchKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();
    
    this.setState(() => {
      return { notes: data };
    });
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
    const { data } = await getActiveNotes();

    this.setState(() => {
      return { notes: data }
    });
  }

  onSearchKeywordChangeHandler(searchKeyword) {
    this.setState(() => {
      return { searchKeyword }
    });

    this.props.keywordChange(searchKeyword);
  }

  render() {
    if (this.state.notes !== []) {
      this.state.notes.map((note) => {
        return note.createdAt = showFormattedDate(note.createdAt);
      });
    }

    const notes = this.state.notes.filter((note) => {
      return note.title.toUpperCase().includes(this.state.searchKeyword.toUpperCase());
    });

    return (
      <ThemeConsumer>
        {
          ({ locale }) => {
            return (
              <section className="note-app__body">
                <SearchBar searchKeyword={this.state.searchKeyword} searchKeywordChange={this.onSearchKeywordChangeHandler} />
                <h2><b>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</b></h2>
                <NoteList notes={notes} onDelete={this.onDeleteHandler} />
              </section>
            );
          }
        }
      </ThemeConsumer>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;