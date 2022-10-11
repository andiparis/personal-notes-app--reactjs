import React from 'react';
import NoteApp from './NoteApp';

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
      </div>
    );
  }
}

export default NoteHeader;