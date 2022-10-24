import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItemContent({ id, title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <h3>
        <Link className="note-item__title" to={`/note/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__date">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default NoteItemContent;