import React from 'react';
import LowerFooter from '../Components/LowerFooter';
import './Contact.css';
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: 'Monday',
      c_time: '10:00 AM-2:00 PM, 5:00 PM-09:00 PM',
    },
    {
      id: 2,
      c_day: 'Tuesday',
      c_time: '10:00 AM-2:00 PM, 5:00 PM-09:00 PM',
    },
    {
      id: 3,
      c_day: 'Wednesday',
      c_time: '10:00 AM-2:00 PM, 5:00 PM-09:00 PM',
    },
    {
      id: 4,
      c_day: 'Thursday',
      c_time: '10:00 AM-2:00 PM, 5:00 PM-09:00 PM',
    },
    {
      id: 5,
      c_day: 'Friday',
      c_time: '10:00 AM-2:00 PM, 5:00 PM-09:00 PM',
    },
    {
      id: 6,
      c_day: 'Saturday',
      c_time: '10:00 AM-2:00 PM, 5:00 PM-09:00 PM',
    },
    {
      id: 7,
      c_day: 'Sunday',
      c_time: '10:00 AM-2:00 PM, 5:00 PM-9:00 PM',
    },
  ];
  return (
    <>
      <div className="contact_section_container" id="contact-us">
        <div className="container_container">
          <div className="google_map_location">
            <div className="gmap">
              <iframe
                title="gmap_location"
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2692080572897!2d73.77219657416937!3d18.516732869293502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1cef6cd3d55%3A0xe992a45705482383!2sAdvait%20Multispeciality%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1727104432402!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
          <div className="basic_contact_user_form">
            <div className="clinic_time_table">
              <h2 style={{ fontFamily: 'Poppins' }}>
                <span>
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                OPD Hours
              </h2>
            </div>
            <hr />
            {clinic_data.map((e, index) => (
              <div className="clinic_timing" key={index}>
                <p className="current_day">{e.c_day}</p>
                <p className="current_day_timing">{e.c_time}</p>
              </div>
            ))}
            <div className="d_and_c">
              <div className="direction_to_clinic">
                <a
                  href="https://maps.app.goo.gl/9ify5dYz9xeXWRtX6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clinic Direction
                </a>
              </div>
              <div className="call_to_clinic">
                <a href="tel:8669675050">Call Clinic</a>
              </div>
            </div>
          </div>
        </div>
        <LowerFooter />

        <div className="copyright_footer">
          <p>
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            2023
            <a href="/" id="clinic_name">
              Advait Dental Clinic.
            </a>
            All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
