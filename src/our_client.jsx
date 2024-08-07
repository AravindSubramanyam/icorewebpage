import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import './our_client.css';

import Trintas_logo_clients from './img_new/ourclients/trintas_logo_clients.png';
import Epic_Ride_Logo from './img_new/ourclients/epic_ride.png';
import Hcl_logo from './img_new/ourclients/hcl_new.png';
import Icore_tec_logo from './img_new/ourclients/icore_tech.png';
import Scream_marketing from './img_new/ourclients/scream_marketing.png';
import Fortetrinity from './img_new/ourclients/logomain.png';
import AgileADvan from './img_new/ourclients/AAgile.png';
import AAgile_small from './img_new/ourclients/AAgile1.png';
import Epic_ride_small from './img_new/ourclients/epic_ride_small.png';
import Hcl_new_small from './img_new/ourclients/hcl_new_small.png';
import Icore_tech_small from './img_new/ourclients/icore_tech_small.png';
import Logomain_small from './img_new/ourclients/logomain_small.png';
import Scream_marketing_small from './img_new/ourclients/scream_marketing_small.png';
import Trintas_logo_clients_small from './img_new/ourclients/trintas_logo_clients_small.png';
import Glow_up from './img_new/ourclients/glow_up.png';
import logo1 from './img_new/ourclients/gray_logos/1.png';
import logo3 from './img_new/ourclients/gray_logos/3.png';
import logo4 from './img_new/ourclients/gray_logos/alanweb.png';
import logo5 from './img_new/ourclients/gray_logos/5.png';
import logo6 from './img_new/ourclients/gray_logos/6.png';
import logo7 from './img_new/ourclients/gray_logos/7.png';
import logo8 from './img_new/ourclients/gray_logos/8.png';
import logo2 from './img_new/ourclients/gray_logos/2.png';
import dbmanager from './img_new/ourclients/gray_logos/dbmanager.png';
import medialabs from './img_new/ourclients/gray_logos/medialabs.png';
import sitgulf from './img_new/ourclients/gray_logos/sitgulf.png';
import web_experts from './img_new/ourclients/gray_logos/web_experts.png';
import today_contact from './img_new/ourclients/gray_logos/tdycontact.png';
import { Link } from 'react-router-dom';

const Ourclient = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left left_arrow_slick" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right right_arrrow_slick" aria-hidden="true"></i>',
        dots: false,
        pauseOnHover: true,
      });
    });
  }, []);

  return (
    <div>
      <div className="container ">
        <div className={'marg_all_heading'}>
          <h2 className="about_ser_new_tags">Clients with iCore</h2>
          <span className="about_bor_bot_serv"></span>
        </div>
        <div className="col-md-4"><h3 className={ ' txt_bor_align_about_inner1'}>Our Clients Details</h3></div>
      </div>
      {/* extra and client images */}
      <div className={"row"}>
        <div className="our_client_redes">
          <ul className="logos-flex-container logo_1strow_mt_clie">
            <li className="logos-flex-item"> 
              <a className="hover_img_logo" ><img alt="not found" src={logo1}/></a>
            </li>
            <li className="logos-flex-item">
              <a className="hover_img_logo" ><img alt="not found" src={logo2}/></a>
            </li>
            <li className="logos-flex-item">
              <a className="hover_img_logo" ><img alt="not found" src={logo3}/></a>
            </li>
            <li className="logos-flex-item">
              <a className="hover_img_logo" ><img className="wid_65" alt="not found" src={logo4}/></a>
            </li>
          </ul>
        </div>
        {/* second row */}
        <div className="our_client_redes">
          <ul className="logos-flex-container logo_1strow_mt_clie">
            <li className="logos-flex-item"> 
              <a className="hover_img_logo" ><img alt="not found" src={dbmanager}/></a>
            </li>
            <li className="logos-flex-item">
              <a className="hover_img_logo" ><img alt="not found" src={medialabs}/></a>
            </li>
            <li className="logos-flex-item">
              <a className="hover_img_logo" ><img alt="not found" src={sitgulf}/></a>
            </li>
            <li className="logos-flex-item">
              <a className="hover_img_logo" ><img className="" alt="not found" src={web_experts}/></a>
            </li>
          </ul>
        </div>
        <div className="our_client_redes ">
          <ul className="logos-flex-container logo_1strow_mt_clie">
            <li className="logos-flex-item"> 
              <a className="hover_img_logo" ><img alt="not found" src={logo5}/></a>
            </li>
            <li className="logos-flex-item">
              <a className="hover_img_logo" ><img alt="not found" src={logo6}/></a>
            </li>
            <li className="logos-flex-item">
              <a className="hover_img_logo" ><img alt="not found" src={logo7}/></a>
            </li>
            <li className="logos-flex-item">
              <a className="hover_img_logo" ><img alt="not found" src={logo8}/></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="today_contact">
        <img id="img_logo" alt="not found" src={today_contact}/>
        <h3 className="chk">Ready For Your Next IT Project?</h3>
        <p className="tdy_p">Collaborate With Us You Will Be Satisfied</p>
        <Link to="/contact-us"  target="_top">
          <button type="button" className="btn btn-primary btn-sm" id="tdy_button">Contact Us Today</button>
        </Link>
      </div>
    </div>
  );
};

export default Ourclient;



