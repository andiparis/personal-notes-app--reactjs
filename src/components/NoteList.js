import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, searchKeyword, onDelete }) {
  const showNotes = notes.filter(note => note.title.toUpperCase().includes(searchKeyword.toUpperCase()));

  if (showNotes.length !== 0 && searchKeyword !== "") {
    return (
      <div className="notes-list">
        {
          showNotes.map((note) => (
            <NoteItem 
              key={note.id}
              id={note.id} 
              onDelete={onDelete}
              {...note} />
          ))
        }
      </div>
    );
  } else if (showNotes.length == 0 && searchKeyword !== "") {
    return (
      <div className="notes-list">
        <h3 className="notes-list__empty-message">Catatan tidak ditemukan</h3>
      </div>
    );
  } else {
    if (notes.length !== 0) {
      return (
        <div className="notes-list">
          {
            notes.map((note) => (
              <NoteItem 
                key={note.id}
                id={note.id} 
                onDelete={onDelete}
                {...note} />
            ))
          }
        </div>
      );
    } else {
      return (
        <div className="notes-list">
          <h3 className="notes-list__empty-message">Tidak ada catatan</h3>
        </div>
      );
    }
  }
}

export default NoteList;