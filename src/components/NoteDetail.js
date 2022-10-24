import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail({ title, body }) {
  return (
    <div className="note-detail">
      <h2 className="note-detail__title">{title}</h2>
      <p className="note-detail__body">{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default NoteDetail;