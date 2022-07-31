import React from 'react';
import facOne from '../Images/13305412005_661da205f8_h.jpg';
import facTwo from '../Images/28232125988_386612a75e_k.jpg';

const FourthSection = () => {
  return (
    <section class="section secFour w-100 p-5">
      <div class="container-fluid m-0">
        <div class="d-flex row display-3" style={{ color: '#fff' }}>
          FACILITIES &
        </div>
        <div class="d-flex display-1" style={{ color: '#fff' }}>
          RESCOURCES
        </div>
      </div>

      <div class="container-fluid text-break text-light pt-5">
        <div class="row">
          <div class="col-6 fs-5">
            Our goal is to succeed in achieveing our University mission,
            research endeavors and aspirations to make KAUST an academic
            destination. Beaing healthy and well goes hand-in-hand with that
            goal. That's why KAUSt has made the health and wellbeing of out
            entire community a high priority. A broad range of resources,
            services, programs and support are available and accessible to
            ensure that out community members, studends, faculty and staff, stay
            physically healthy and emotionally well.
            <button
              type="button"
              class="btn btn-warning d-flex me-5 mb-5 d-flex mt-5"
              style={{ color: '#fff' }}
            >
              Explore More
            </button>
          </div>
          <div class="col-3">
            <img
              src={facOne}
              alt=""
              class="img-thumbnail img-fluid border-0 p-0"
            />
            <p class="fs-4 text-light mt-2">
              CORE LABS AND MAJOR
              <br />
              FACILITIES
            </p>
          </div>

          <div class="col-3">
            <img
              src={facTwo}
              alt=""
              class="img-thumbnail img-fluid border-0 p-0"
            />
            <p class="fs-4 text-light mt-2">HOUSING AND FACILITIES</p>
          </div>
        </div>

        <div class="col-6"></div>
      </div>
    </section>
  );
};

export default FourthSection;
