import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/ThemeContext';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      charLeft: 50,
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
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ 
      title: '',
      body: '',
      charLeft: 50,
    });
  }

  render() {
    return (
      <ThemeConsumer>
        {
          ({ locale }) => {
            return (
              <div className="note-input">
                <h2 className="note-input__title">{locale === 'id' ? 'Buat Catatan' : 'Create Note'}</h2>
                <p className="note-input__title__char-limit">{locale === 'id' ? 'Sisa karakter' : 'Remaining characters'}: {this.state.charLeft}</p>
                <form className="note-input__body" onSubmit={this.onSubmitEventHandler}>
                  <input 
                    type="text" 
                    placeholder={locale === 'id' ? 'Masukkan judul catatan ...' : 'Enter note title ...'}
                    value={this.state.title} 
                    onChange={this.onNoteTitleChangeEventHandler} 
                    required />
                  <textarea 
                    rows="10" 
                    placeholder={locale === 'id' ? 'Masukkan catatan ...' : 'Enter note ...'} 
                    value={this.state.body} 
                    onChange={this.onNoteBodyChangeEventHandler} 
                    required></textarea>
                  <button type="submit">{locale === 'id' ? 'Buat' : 'Create'}</button>
                </form>
              </div>
            );
          }
        }
      </ThemeConsumer>
    );
  }
}

NoteInput.propTypes = {
  addNotes: PropTypes.func,
}

export default NoteInput;