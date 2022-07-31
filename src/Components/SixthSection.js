import React from 'react';
import bio1 from '../Images/Bio/st01.jpg';
import bio2 from '../Images/Bio/st02.jpg';
import bio3 from '../Images/Bio/st03.jpg';

const SixthSection = () => {
  return (
    <section class="secSix w-100 p-5">
      <div class="container-fluid m-0">
        <div class="d-flex row display-5 text-light">BioE</div>
        <div class="d-flex display-1 text-light">STORIES</div>
      </div>

      <div class="container-fluid p-5">
        <div class="row">
          <div class="col-4 container-fluid">
            <div
              class="p-3 mb-2 text-white"
              style={{ backgroundColor: '#51adae' }}
            >
              the campus is really nice, we all feel comfortable to live here.
              good work.life balance, everything is close. about work, you have
              access to high class favilities.
            </div>

            <div class="container-fluid d-flex">
              <img src={bio1} alt="" class="rounded-circle" width="60" />
              <p class="fs-6 text-light ps-2 mt-2">
                Student Name
                <br />
                2019
              </p>
            </div>
          </div>

          <div class="col-4 container-fluid">
            <div
              class="p-3 mb-2 text-white"
              style={{ backgroundColor: '#51adae' }}
            >
              Offered me flexibility in how/when to perform my internship tasks
              as i was a PhD student at the time and preferred to work on the
              internship outside of normal working hours
            </div>

            <div class="container-fluid d-flex">
              <img src={bio2} alt="" class="rounded-circle" width="60" />
              <p class="fs-6 text-light ps-2 mt-2">
                Student Name
                <br />
                2019
              </p>
            </div>
          </div>

          <div class="col-4 container-fluid">
            <div
              class="p-3 mb-2 text-white"
              style={{ backgroundColor: '#51adae' }}
            >
              Good facilities, nice work environment, people with different
              nationalities and backgrounds, community life is awesome.
            </div>

            <div class="container-fluid d-flex">
              <img src={bio3} alt="" class="rounded-circle" width="60" />
              <p class="fs-6 text-light ps-2 mt-2">
                Student Name
                <br />
                2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
