import React from 'react';
import './contact_us_inner.css';
// import Header from '../header.js'
import { Redirect } from 'react-router-dom';
import ContactUsInner from './contact_us_inner.jsx';

const ContactUsInnerNew = () => {
  //       const { redirect } = this.state;
  // if (redirect) {
  //   return <Redirect to="/thankyou" />;
  // }

  return (
    <div>
      <div className="container-fluid pad_conatiner_contact_inner">
        <div className="row">
          <div className="col-lg-12 bg_our_contactus_inner1"></div>
        </div>
        <div className="row form_align_cen_contact_inner ">
          {/* form */}
          <ContactUsInner />
        </div>

        <div className="col-lg-12 pad_conatiner_contact_inner pad_conatiner_contact_inner1">
          <div className="card_map_contact_inner">
            <div>
              <h4 className="find_map_txt_cont_inner">Find Us</h4>
              <h5 className="head_map_inner1">India</h5>
              <p className="ptag_fs_cont_inner_map">iCore&nbsp;Software&nbsp;Systems&nbsp;Private&nbsp;Limited
                <br /> No:65, 100 Feet Road
                <br /> Ashok Nagar
                <br /> Chennai-600083
                <br />
              </p>
              <br />
              <h5 className="head_map_inner1">USA</h5>
              <p className="ptag_fs_cont_inner_map">iCore Technologies, LLC
                <br /> 12987 Allenwood Ave
                <br /> Frisco, TX 75035
                <br />
              </p>
              <br />
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.940592790083!2d80.14793221413586!3d13.03945341691543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526682f81b72e1%3A0xba2664b434641ee4!2siCore+Software+Systems+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1550762976320" width="100%" height="450" frameBorder="0" allowFullScreen title="map"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsInnerNew;
