import React from 'react';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import { getInitialData, showFormattedDate } from '../utils/index';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: ''
    }

    this.state.notes.map((note) => {
      note.createdAt = showFormattedDate(note.createdAt);
    });

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onSearchNoteHandler({ search }) {
    this.setState({ searchKeyword: search });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(new Date()),
            archived: false
          }
        ]
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes: notes });
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader notes={this.state.notes} searchNote={this.onSearchNoteHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes} searchKeyword={this.state.searchKeyword} onDelete={this.onDeleteHandler} />
        </div>
      </div>
    );
  }
}

export default NoteApp;