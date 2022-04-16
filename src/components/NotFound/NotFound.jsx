import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => (
  <div className="not__found">
    <div className="not__found__container">
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
      />
      <Link to="/" className="link-home">
        <h1 className='text-light'>Go Home</h1>

      </Link>
    </div>

  </div>
);

export default NotFound;