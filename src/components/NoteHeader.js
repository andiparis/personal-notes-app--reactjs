import React from 'react';
import Navigation from './Navigation';

function NoteHeader() {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <Navigation />
    </header>
  );
}

export default NoteHeader;