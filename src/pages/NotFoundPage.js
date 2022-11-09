import React from 'react';
import { ThemeConsumer } from '../contexts/ThemeContext';

function NotFoundPage() {
  return (
    <ThemeConsumer>
      {
        ({ locale }) => {
          return (
            <div className="not-found-page">
              <p className="not-found-page__title">{locale === 'id' ? 'HALAMAN TIDAK DITEMUKAN' : 'PAGE NOT FOUND'}</p>
            </div>
          );
        }
      }
    </ThemeConsumer>
  );
}

export default NotFoundPage;