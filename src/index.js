import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NoteApp from './components/NoteApp';
import './styles/style.css';

const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <NoteApp />
  </BrowserRouter>
);