import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {
        notes.length !== 0
        ? notes.map((note) => (
          <NoteItem 
            key={note.id}
            id={note.id} 
            onDelete={onDelete}
            {...note} />
        ))
        : <h3 className="notes-list__empty-message">Tidak ada catatan</h3>
      }
    </div>
  );
}

export default NoteList;

// {notes !== ''
//   ? notes.map((note) => (
//     <NoteItem 
//       key={note.id}
//       id={note.id} 
//       onDelete={onDelete}
//       {...note} />
//   ))
//   : <h3 className="notes-list__empty-message">Tidak ada catatan</h3>
// }

// notes.map((note) => (
        //   note !== ""
        //   ? <NoteItem 
        //     key={note.id}
        //     id={note.id} 
        //     onDelete={onDelete}
        //     {...note} />
        //   : <h3 className="notes-list__empty-message">Tidak ada catatan</h3>
        // ))