import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import { ThemeConsumer } from '../contexts/ThemeContext';

function NoteList({ notes, onDelete }) {
  return (
    <ThemeConsumer>
      {
        ({ locale }) => {
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
                  <h3 className="notes-list__empty-message">{locale === 'id' ? 'Tidak ada catatan' : 'No notes'}</h3>
              }
            </div>
          );
        }
      }
    </ThemeConsumer>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteList;