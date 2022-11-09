import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/api';
import NoteInput from '../components/NoteInput';

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate('/');
  }

  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;