import React from 'react';
import './our_service_web_design.css';
import Desktop_Design_Img from '../img_new/our_service_inner/web_design/allOurServices.png';
import { Link } from 'react-router-dom';

const OurServiceWebDesign = () => {
  return (
    <div id={'webdesign'}>
      <div className={'marg_all_heading_about our_serfirst_p'}>
        <h2 className="about_ser_new_tags">Website design and development</h2>
        <span className="about_bor_bot_serv"></span>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
          <div className="col-lg-6">
              <p className="web_design_ptag_inner1" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">Owning a website for a business is not just a style statement anymore as it was in the late 90s. It has become an absolute necessity and an important marketing and business analytics tool to expand a business. Even the consumers seek a plush website with interactive designs and bright colors. Hence today’s businesses change their older website themes and rebrand themselves to look fresh and new</p>
              <p className="web_design_ptag_inner1" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">iCore Software Systems is one of the best web development companies with a base in India that understands the trend of requirements and stays ahead of it with our extremely spectacular web designs and themes. Our expert web designers design the websites and themes by following proper website planning protocols and they use the following technologies to build websites</p>

              <div className="box_shad_new_1">
                <p className="card_extra_ptag_inner01 fnt_txt_align_box_sha_txt" data-aos="flip-left">HTML5</p>
                <p className="card_extra_ptag_inner01 fnt_txt_align_box_sha_txt" data-aos="flip-left">CSS3</p>
                <p className="card_extra_ptag_inner01 fnt_txt_align_box_sha_txt" data-aos="flip-left">jQuery</p>
                <p className="card_extra_ptag_inner01 fnt_txt_align_box_sha_txt" data-aos="flip-left"><strong>Angular JS</strong></p>
                <p className="card_extra_ptag_inner01 fnt_txt_align_box_sha_txt" data-aos="flip-left"><strong>React JS</strong></p>
              </div>
              <p className="web_design_ptag_inner1" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">Our web designers and developers are well experienced with the ins and outs of CMSs which includes but not limited to</p>
              <div className="box_shad_new_1">
                <p className="card_extra_ptag_inner2 fnt_txt_align_box_sha_txt" data-aos="flip-left">WordPress</p>
                <p className="card_extra_ptag_inner2 fnt_txt_align_box_sha_txt" data-aos="flip-left">Drupal</p>
                <p className="card_extra_ptag_inner2 fnt_txt_align_box_sha_txt" data-aos="flip-left">Joomla</p>
                <p className="card_extra_ptag_inner2 fnt_txt_align_box_sha_txt" data-aos="flip-left">Radiant</p>
                <p className="card_extra_ptag_inner2 fnt_txt_align_box_sha_txt" data-aos="flip-left">Textpattern</p>
              </div>
              <Link to="web-application/#custom-web" target="_top" className="our_service12read">Read More...</Link>
            </div>
            <div className="makepd col-lg-6">
              <img src={Desktop_Design_Img} alt='' className="img_left_webdesign_inner desktop_web_design_inner" data-aos="fade-right" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceWebDesign;
