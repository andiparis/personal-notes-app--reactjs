import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <p className="not-found-page__title">PAGE NOT FOUND</p>
      <p className="not-found-page__body">Please click the link below to move to the main page of the app.</p>
      <Link to="/">Personal Note App</Link>
    </div>
  );
}

export default NotFoundPage;