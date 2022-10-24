import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {
        notes.length !== 0
        ?  
          notes.map((note) => (
            <NoteItem 
              key={note.id}
              id={note.id} 
              onDelete={onDelete}
              {...note} />
          ))
        :
          <h3 className="notes-list__empty-message">Tidak ada catatan</h3>
      }
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteList;