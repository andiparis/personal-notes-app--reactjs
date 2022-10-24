import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/index';
import NoteHeader from '../components/NoteHeader';
import NoteInput from '../components/NoteInput';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }

  return (
    <>
      <NoteHeader />
      <section>
        <NoteInput addNote={onAddNoteHandler} />
      </section>
    </>
  );
}

export default AddPage;