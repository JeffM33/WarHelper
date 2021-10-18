import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer>
      <div>
        {location.pathname !== '/' && (
          <button
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made by Bailey, Jeffrey, and Jonathan!
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
