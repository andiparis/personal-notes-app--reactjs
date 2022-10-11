import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      charLeft: 50
    }

    this.onNoteTitleChangeEventHandler = this.onNoteTitleChangeEventHandler.bind(this);
    this.onNoteBodyChangeEventHandler = this.onNoteBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNoteTitleChangeEventHandler(event) {
    const limitChar = 50;
    const charCount = event.target.value.length;
    let charLeft = limitChar - charCount;
    if (charLeft < 0) 
      charLeft = 0;
    
    this.setState(() => {
      return {
        title: event.target.value.slice(0, limitChar),
        charLeft: charLeft,
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
      <div className="note-input">
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa karakter: {this.state.charLeft}</p>
        <form className="note-input__body" onSubmit={this.onSubmitEventHandler}>
          <input type="text" placeholder="Masukkan judul catatan ..." value={this.state.title} onChange={this.onNoteTitleChangeEventHandler} />
          <textarea rows="8" placeholder="Masukkan catatan ..." value={this.state.body} onChange={this.onNoteBodyChangeEventHandler}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;