import React from 'react';
import PropTypes from 'prop-types';

function NoteItemAction({ id, onDelete }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteItemAction;