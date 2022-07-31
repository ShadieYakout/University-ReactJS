import React from 'react';
import firstImage from '../Images/Latest News/13305700433_c9f4ad4685_h.jpg';
import secondImage from '../Images/Latest News/13305701663_96d6d846f5_h.jpg';
import thirdImage from '../Images/Latest News/13305912284_f4a700c5ea_h.jpg';
import fourthImage from '../Images/image02.jpg';

const SecondSection = () => {
  return (
    <section className="secTwo w-100 ps-0 pe-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 p-5">
            <div className="d-flex row display-3 text-light">LATEST</div>
            <div className="d-flex display-1 text-light">NEWS</div>
            <img
              src={firstImage}
              alt=""
              className="img-thumbnail img-fluid border-0 p-0"
            />
            <p className="fs-4 text-light">
              PATZEK RECEIVES DISTINGUISHED
              <br />
              ERASMUS AWARD
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              Faculty Focus
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              Oct 28, 2020
            </p>
          </div>
          <div className="col-md-3 p-5">
            <div className="d-flex row display-3 hide">LATEST</div>
            <div className="d-flex display-1 hide">NEWS</div>
            <img
              src={secondImage}
              alt=""
              className="img-thumbnail img-fluid border-0 p-0"
            />
            <p className="fs-4 text-light">
              PRESIDENT CHAN'S ADDRESS ON
              <br />
              COMMUNITY TESTING
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              News
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              Oct 19, 2020
            </p>
          </div>
          <div className="col-md-3 p-2">
            <div className="d-flex row display-3 hide">LATEST</div>
            <div className="d-flex display-1 hide">NEWS</div>
            <button
              type="button"
              className="btn btn-light d-flex ms-auto me-2"
              style={{ color: '#1d9798' }}
            >
              Explore More
            </button>
            <img
              src={thirdImage}
              alt=""
              className="img-thumbnail img-fluid border-0 p-0"
            />
            <p className="fs-4 text-light">
              THE "NEW NORMAL" - MAJOR
              <br />
              TRENDS POST COVID-19
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              Innovation
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              Oct 11, 2020
            </p>
          </div>
          <div className="col-md-3 p-0 align-text-bottom">
            <img
              src={fourthImage}
              alt=""
              className="img-responsive w-100"
              height={695}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
