import React from 'react';
import './our_service_us_staffing.css';
import Us_Staff_img1 from '../img_new/our_service_inner/us_staffing/us_staff3.jpg';
import Bullet_img from '../img_new/our_service_inner/bullet_img.png';
import today_contact from '../img_new/our_service_inner/us_staffing/tdycontact.png';
import { Link } from 'react-router-dom';

const OurServiceUsStaffing = () => {
  return (
    <div>
      <div className={'marg_all_heading_about '} id={'us-staffing'}>
        <h2 className="about_ser_new_tags">US IT Staffing</h2>
        <span className="about_bor_bot_serv"></span>
      </div>
      <div className="container-fluid mor_bot_inner_us_staffing">
        <div className="col-lg-12">
          <div className="col-lg-6 mrg_top_lft_side_col_staffing">
            <img src={Us_Staff_img1} alt="not found" className="main_us_staffing_bg_hover" />
          </div>
          <div className="col-lg-6">
            <p className="us_staffign_ptag_inner1">Talent acquisition is one of the most influential tasks. As employees are the fundamental blocks of any business, finding the right talent for the job is essential. Our clients understand the importance of talent acquisition and hence they seek us, which is one of the best IT Staffing Companies in the USA, for their recruiting tasks.</p>
            <p className="us_staffign_ptag_inner1">Our presence in the industry as an IT staffing company and our experience with our clients in the US has provided us abundant insights into the US IT staffing arena. Our understanding of the western business culture has enabled us to provide a comprehensive suite of recruiting and staff augmentation services to the US job market which are:</p>
            <p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Talent sourcing</p>
            <p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Recruitment</p>
            <p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Manpower&nbsp;planning</p>
            <p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Interviewing</p>
            <p className="us_staffign_ptag_inner1">On combining our insights, experience, and understanding of the recruiting market, we source talented professionals from our internal and external resource pool to accommodate the US IT recruitment requirements.</p>
          </div>
        </div>
      </div>
      <div className="today_contact">
        <img id="img_logo" alt="not found" src={today_contact} />
        <h3 className="chk">Ready For Your Next IT Project?</h3>
        <p className="tdy_p">Collaborate With Us You Will Be Satisfied</p>
        <Link to="/contact-us" target="_top">
          <button type="button" className="btn btn-primary btn-sm" id="tdy_button">Contact Us Today</button>
        </Link>
      </div>
    </div>
  );
};

export default OurServiceUsStaffing;
