import React from 'react';

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.onSearchNoteChangeEventHandler = this.onSearchNoteChangeEventHandler.bind(this);
    this.onSearchEventHandler = this. onSearchEventHandler.bind(this);
  }

  onSearchNoteChangeEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value
      };
    });
  }

  onSearchEventHandler(event) {
    event.preventDefault();
    this.props.searchNote(this.state);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input type="text" placeholder="Masukkan judul catatan yang ingin dicari ..." value={this.state.search} onChange={this.onSearchNoteChangeEventHandler} onKeyUp={this.onSearchEventHandler} />
        </div>
      </div>
    );
  }
}

export default NoteHeader;