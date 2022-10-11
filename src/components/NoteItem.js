import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteAction from './NoteAction';

function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemContent 
        title={title} 
        body={body} 
        createdAt={createdAt} />
      <NoteAction id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;