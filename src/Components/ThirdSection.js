import React from 'react';
import techOne from '../Images/Research Technologies/40549198661_e39309fbf9_k.jpg';
import techTwo from '../Images/Research Technologies/44308473515_c102f46b56_k.jpg';
import techThree from '../Images/Research Technologies/13305555723_8eabec6be2_h.jpg';
import techFour from '../Images/Research Technologies/13305774464_e6ee96dc6b_h.jpg';

const ThirdSection = () => {
  return (
    <section className="secThree w-100 p-5">
      <div className="container-fluid m-0">
        <div className="d-flex row display-3" style={{ color: '#1d9798' }}>
          RESEARCH &amp;
        </div>
        <div className="d-flex display-1" style={{ color: '#1d9798' }}>
          TECHNOLOGIES
        </div>
        <button
          type="button"
          className="btn btn-warning d-flex ms-auto me-5 mb-5 d-flex mt-0"
          style={{ color: '#fff' }}
        >
          Explore More
        </button>
      </div>
      <div className="container-fluid d-flex justify-content-around">
        <div className="card mb-3" style={{ maxWidth: '800px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={techOne}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="fs-4" style={{ color: '#1d9798' }}>
                  KAUST DEVELOPED FISH
                  <br />
                  WEARABLE TECHNOLOGY WINS
                  <br />
                  CES INNOCATION AWARD
                </p>
                <p
                  className="fs-6"
                  style={{ fontFamily: 'fontLiteIt', color: '#1d9798' }}
                >
                  Technology Areas
                </p>
                <p
                  className="fs-6"
                  style={{ fontFamily: 'fontLiteIt', color: '#1d9798' }}
                >
                  Oct 30, 2020
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: '800px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={techTwo}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="fs-4" style={{ color: '#1d9798' }}>
                  POSTDOCTORAL FELLOW FOCUS:
                  <br />
                  MAHMOUD ABDULHAMID
                </p>
                <p
                  className="fs-6"
                  style={{ fontFamily: 'fontLiteIt', color: '#1d9798' }}
                >
                  Focus Area
                </p>
                <p
                  className="fs-6"
                  style={{ fontFamily: 'fontLiteIt', color: '#1d9798' }}
                >
                  Oct 18, 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-around">
        <div className="card mb-3" style={{ maxWidth: '800px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={techThree}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="fs-4" style={{ color: '#1d9798' }}>
                  RESEARCH IN PHYSICAL SCIENCE
                  <br />
                  ENGINEERING
                </p>
                <p
                  className="fs-6"
                  style={{ fontFamily: 'fontLiteIt', color: '#1d9798' }}
                >
                  Disciplines
                </p>
                <p
                  className="fs-6"
                  style={{ fontFamily: 'fontLiteIt', color: '#1d9798' }}
                >
                  Oct 12, 2020
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: '800px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={techFour}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="fs-4" style={{ color: '#1d9798' }}>
                  EXAMINING HOW TECHNOLOGY
                  <br />
                  INFORMS SCIENCE
                </p>
                <p
                  className="fs-6"
                  style={{ fontFamily: 'fontLiteIt', color: '#1d9798' }}
                >
                  Applications
                </p>
                <p
                  className="fs-6"
                  style={{ fontFamily: 'fontLiteIt', color: '#1d9798' }}
                >
                  Oct 10, 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
