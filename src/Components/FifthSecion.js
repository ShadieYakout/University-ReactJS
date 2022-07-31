import React from 'react';
import pubOne from '../Images/Publications/13305554505_7817a63e03_h.jpg';
import pubTwo from '../Images/Publications/13305805023_819e2d1181_h.jpg';
import pubThree from '../Images/Publications/13305910664_8755d19747_h.jpg';
import pubFour from '../Images/Publications/13305805023_819e2d1181_h.jpg';

const FifthSecion = () => {
  return (
    <section className="secFive w-100 p-5" style={{ color: '#1d9798' }}>
      <div className="container-fluid m-0">
        <div className="d-flex row display-3" style={{ color: '#1d9798' }}>
          PUBLICATIONS
        </div>
        <button
          type="button"
          className="btn btn-warning d-flex ms-auto me-5 mb-5 d-flex mt-0"
          style={{ color: '#fff' }}
        >
          Explore More
        </button>
      </div>
      <div className="container-fluid pt-0 mt-0">
        <div className="row">
          <div className="col-md-3 p-5 pt-0">
            <img
              src={pubOne}
              alt=""
              className="img-thumbnail img-fluid border-0 p-0"
            />
            <p className="fs-4 mt-4">
              CLUSTERED SPATIO-TEMPORAL
              <br />
              VARYING COFFICIENT
              <br />
              REGRESSION MODEL
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              Oct 26, 2020
            </p>
          </div>
          <div className="col-md-3 p-5 pt-0">
            <img
              src={pubTwo}
              alt=""
              className="img-thumbnail img-fluid border-0 p-0"
            />
            <p className="fs-4 mt-4">
              THERMALLY STABLE SURFACTANT
              <br />
              FREE CERIA NANOCUBES IN SILICA
              <br />
              AEROGEL
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              Oct 22, 2020
            </p>
          </div>
          <div className="col-md-3 p-5 pt-0">
            <img
              src={pubThree}
              alt=""
              className="img-thumbnail img-fluid border-0 p-0"
            />
            <p className="fs-4 mt-4">
              EVOLUTION AND BIOGEOGRAPHY
              <br />
              OF THE ZANCLEA-SCLERACTINIA
              <br />
              SYMBIOSIS
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              Oct 19, 2020
            </p>
          </div>
          <div className="col-md-3 p-5 pt-0">
            <img
              src={pubFour}
              alt=""
              className="img-thumbnail img-fluid border-0 p-0"
            />
            <p className="fs-4 mt-4">
              METAL HALIDE PEROVSKITES FOR
              <br />
              HIGH-ENERGY RADIATION
              <br />
              DETECTION
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: 'fontLiteIt' }}>
              Oct 18, 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSecion;
