import React from 'react';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import { getInitialData, showFormattedDate } from '../utils/index';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData()
    }

    this.state.notes.map((note) => {
      note.createdAt = showFormattedDate(note.createdAt);
    });

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
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
            createdAt: showFormattedDate(new Date())
          }
        ]
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <div className="note-app__body">
          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
      </div>
    );
  }
}

export default NoteApp;