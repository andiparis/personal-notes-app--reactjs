import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/ThemeContext';

function NoteItemAction({ id, onDelete }) {
  return (
    <ThemeConsumer>
      {
        ({ locale }) => {
          return (
            <div className="note-item__action">
              <button className="note-item__delete-button" onClick={() => onDelete(id)}>{locale === 'id' ? 'Hapus' : 'Delete'}</button>
            </div>
          );
        }
      }
    </ThemeConsumer>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteItemAction;