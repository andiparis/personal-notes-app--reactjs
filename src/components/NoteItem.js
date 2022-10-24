import React from 'react';
import PropTypes from 'prop-types';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemContent 
        id={id}
        title={title} 
        body={body} 
        createdAt={createdAt} />
      <NoteItemAction id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteItem;