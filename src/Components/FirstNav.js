import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

const FirstNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-0">
      <div className="container-fluid" style={{ backgroundColor: '#1d9798' }}>
        <a className="navbar-brand ps-5 fs-6 text text-light" href="1">
          Follow us:
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="1">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook-f fa-xs "
                  style={{ color: '#fff' }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="1">
                <FontAwesomeIcon
                  icon="fa-brands fa-twitter fs-xs"
                  style={{ color: '#fff' }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="1">
                <FontAwesomeIcon
                  icon="fa-brands fa-linkedin-in fs-xs"
                  style={{ color: '#fff' }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="1">
                <FontAwesomeIcon
                  icon="fa-brands fa-youtube fs-xs"
                  style={{ color: '#fff' }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="1">
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram fs-xs"
                  style={{ color: '#fff' }}
                />
              </a>
            </li>
          </ul>
          <div
            className="navbar-text fs-5 text text-light me-5 text-center pt-0"
            style={{
              width: '90px',
              backgroundColor: '#4aacad',
              height: '40px',
            }}
          >
            عربى
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FirstNav;
