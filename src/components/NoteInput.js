import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }

    this.onNoteTitleChangeEventHandler = this.onNoteTitleChangeEventHandler.bind(this);
    this.onNoteBodyChangeEventHandler = this.onNoteBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNoteTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      };
    });
  }

  onNoteBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Masukkan judul catatan ..." value={this.state.title} onChange={this.onNoteTitleChangeEventHandler} />
        <textarea rows="8" placeholder="Masukkan catatan ..." value={this.state.body} onChange={this.onNoteBodyChangeEventHandler}></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;