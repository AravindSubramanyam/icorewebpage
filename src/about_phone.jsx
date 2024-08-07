import React, { useEffect } from 'react';
import './about_phone.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import RoundImgAbout from './img_new/about_phone/cir_new.png';
import LogoImgAbout from './img_new/about_phone/about_bg_logo1.png';

const AboutPhone = () => {
  useEffect(() => {
    // componentDidMount logic here
  }, []);

  return (
    <div>
      <div className={'marg_all_heading'}>
        <h2 className="about_ser_new_tags">Make your brand better</h2>
        <span className="about_bor_bot_serv"></span>
      </div>
      <div className=" container-fluid pad_3per_recre mrg_t2per_rechan">
        <div className="makerow">
          <div className="col-lg-4">
            <div className="">
              <div className="col-lg-9">
                <div className="txt_left_about_phone scrollbar_two" id="style-4">
                  <h4 className="about_phone_headtag" data-aos="fade-right"> Creative </h4>
                  <p className="about_phone_ptag force-overflow" data-aos="fade-right"> With constant exploration of our creativity, we have built products and delivered them to clients with ample value addition. We make it a point to extend our creative boundaries</p>
                  <span></span>
                </div>
              </div>
              <div className="col-lg-2">
                <i data-aos="fade-right" className="fa fa-lightbulb-o fontawesome-leaf icons_btn_about_phone_img icn_about_phone"></i>
              </div>
            </div>
            {/* second */}
            <div className="">
              <div className="col-lg-9">
                <div className="txt_left_about_phone scrollbar_two" id="style-4">
                  <h4 className="about_phone_headtag" data-aos="fade-left">Customer-focused</h4>
                  <p className="about_phone_ptag" data-aos="fade-left">Strong customer focus, building customer-centric solutions and our confidence in execution of our business has earned us immense trust and respect from our clients</p>
                  <span></span>
                </div>
              </div>
              <div className="col-lg-2">
                <i data-aos="fade-right" className="fa fa-info fontawesome-leaf icons_btn_about_phone_img icn_about_phone"></i>
              </div>
            </div>
            {/* third icons */}
            <div className="">
              <div className="col-lg-9">
                <div className="txt_left_about_phone scrollbar_two" id="style-4">
                  <h4 className="about_phone_headtag" data-aos="fade-right"> Futuristic </h4>
                  <p className="about_phone_ptag" data-aos="fade-right">Our ability to foresee the future trends and developments in the industry is imbibed in our work culture. We ensure futuristic approach in analyzing and solving our clients’ problems</p>
                  <span></span>
                </div>
              </div>
              <div className="col-lg-2">
                <i data-aos="fade-right" className="fa fa-desktop fontawesome-leaf icons_btn_about_phone_img icn_about_phone"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mgt_69per mrg_btm_mobile">
            <div className="wid_circle_img">
              <img src={RoundImgAbout} className="mt_top_rotating_img" id="loading" alt="not found"/>
              <img src={LogoImgAbout} className="phone_img_about bg_back_animation_about " alt="not found"/>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="">
              <div className="col-lg-2">
                <i data-aos="fade-left" className="fa fa-thumbs-up fontawesome-leaf icons_btn_about_phone_img icn_about_phone_right"></i>
              </div>
              <div className="col-lg-9">
                <div className="txt_left_about_phone_right scrollbar_two" id="style-4">
                  <h4 className="about_phone_headtag " data-aos="fade-left"> Reliable</h4>
                  <p className="about_phone_ptag" data-aos="fade-left">Our working approach with our clients in past engagements has earned a reputation of reliability and our clients rely on us to cross all technology-related hurdles</p>
                  <span></span>
                </div>
              </div>
            </div>
            {/* second icons */}
            <div className="">
              <div className="col-lg-2">
                <i data-aos="fade-left" className="fa fa-users fontawesome-leaf icons_btn_about_phone_img icn_about_phone_right"></i>
              </div>
              <div className="col-lg-9">
                <div className="txt_left_about_phone_right scrollbar_two" id="style-4">
                  <h4 className="about_phone_headtag" data-aos="fade-right"> Strategic</h4>
                  <p className="about_phone_ptag" data-aos="fade-right">Our strategic problem-solving approach with deep analysis results in high-end solution development for our clients. iCore follows the best industry practices in software development.</p>
                  <span></span>
                </div>
              </div>
            </div>
            {/* third icons */}
            <div className="">
              <div className="col-lg-2">
                <i data-aos="fade-left" className="fa fa-handshake-o fontawesome-leaf icons_btn_about_phone_img icn_about_phone_right"></i>
              </div>
              <div className="col-lg-9">
                <div className="txt_left_about_phone_right scrollbar_two" id="style-4">
                  <h4 className="about_phone_headtag" data-aos="fade-left"> Committed</h4>
                  <p className="about_phone_ptag" data-aos="fade-left">Our team is committed towards providing tailor-made solutions by accurate requirements-gathering to meet client requirements.</p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPhone;
