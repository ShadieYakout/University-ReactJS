import React from 'react';
import Logo from '../Images/Logo.jpg';

const SecondNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light w-100 d-flex"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="container container-fluid ms-0 me-0">
        <a className="navbar-brand logo" href="1">
          <img src={Logo} alt="logo" width={120} height={80} />
        </a>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="container d-flex justify-content-end collapse navbar-collapse"
        id="navmenu"
      >
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <a
              className="nav-link active fs-5 me-4 pt-4 mt-1"
              aria-current="page"
              style={{ color: '#f3ba27' }}
              href="1"
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active fs-5 me-4 pt-4 mt-1 "
              aria-current="page"
              style={{ color: '#1f9798' }}
              href="1"
            >
              REARCH & TECHNOLOGIES
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active fs-5 me-4 pt-4 mt-1"
              aria-current="page"
              style={{ color: '#1f9798' }}
              href="1"
            >
              TRANSLATION
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active fs-5 me-4 pt-4 mt-1"
              style={{ color: '#1f9798' }}
              aria-current="page"
              href="1"
            >
              PEOPLE
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active fs-5 me-4 pt-4 mt-1"
              style={{ color: '#1f9798' }}
              aria-current="page"
              href="1"
            >
              NEWS & EVENTS
            </a>
          </li>
          <button
            className="btn btnd-flex justify-content-end text-light"
            style={{
              backgroundColor: '#f1b61a',
              height: '90px',
              fontFamily: 'fontLight',
            }}
            type="submit"
          >
            SEARCH
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default SecondNav;
