import React, { useEffect } from 'react';
import './nav.css';
import $ from 'jquery';
import { Swiper } from 'jquery'
import anime from 'animejs';
import Logo1 from './img_new/header_logo/icore-software.png'
import Logo2 from './img_new/header_logo/icore-software_new.11.png'
import Logo1_mobile from './img_new/header_logo/about_bg.png'
import Contact_us_inner_connect from './contact-us'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Careers from './careers'

const Header = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('.menu_new > ul > li:has( > ul)').addClass('menu_new-dropdown-icon');
      $('.menu_new > ul > li > ul:not(:has(ul))').addClass('normal-sub');
      $(".menu_new > ul").before("<a href=\"/\" class=\"menu_new-mobile\">&nbsp;</a>");
      $(".menu_new > ul > li").hover(function (e) {
        if ($(window).width() > 943) {
          $(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();
        }
      });
      $(".menu_new > ul > li").click(function () {
        if ($(window).width() <= 943) {
          $(this).children("ul").fadeToggle(150);
        }
      });
      $(".menu_new-mobile").click(function (e) {
        $(".menu_new > ul").toggleClass('show-on-mobile');
        e.preventDefault();
      });
    });

    $(window).resize(function () {
      $(".menu_new > ul > li").children("ul").hide();
      $(".menu_new > ul").removeClass('show-on-mobile');
    });

    $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        var $navs = $(".ctm_top_nav");
        $navs.toggleClass('scrolled', $(this).scrollTop() > $navs.height());
      });
    });

    $(document).ready(function () {
      $("body").click(function (e) {
        $(".hide_toggle_menu").hide();
      });
    });
  }, []);

  return (
    <div>
      {/* FOR extra */}
      <div className="menu_new-container">
        <div className="ctm_top_nav">
          <span><i className="fa fa-phone ctm_icons"></i>&nbsp;+91&nbsp;73580&nbsp;56001</span>&nbsp;&nbsp;&nbsp;
          <span><i className="fa fa-envelope ctm_icons"></i>&nbsp;contact@icoresoftwaresystems.com</span>&nbsp;&nbsp;&nbsp;
        </div>
        <div className="menu_new">
          <Link to="/" target="_top" className="logo nav_logo_new">
            <img src={Logo2} alt="logo image" className={''} />
          </Link>
          <ul className="ctm_bg_color">
            <li><Link to="/" className="atg_nav_hover nav_bar_adding_home"><li className=" nav_hover">Home</li></Link></li>
            <li><Link to="/about-us" className="atg_nav_hover nav_bar_adding_about" ><li className=" nav_hover">About</li></Link></li>
            <li><Link to='/our-service' className="atg_nav_hover nav_bar_adding_ourservice"> <li className=" nav_hover">Our&nbsp;Services <i class="fa fa-caret-down" aria-hidden="true"></i></li></Link>
                <ul className={'hide_toggle_menu clickingbtn'}>
                  <li><Link to="/web-application-development-company" className={'drophead_line'} >Web Application Development</Link>
                    <ul >
                      <li><Link to="/web-application-development-company/#custom-web" target="_top">Custom Web Application</Link></li>
                      <li><Link to="/web-application-development-company/#cms-dev" target="_top">CMS Development</Link></li>
                      <li><Link to="/web-application-development-company/#ecommer-web" target="_top">Ecommerce Website Design </Link></li>
                    </ul>
                  </li>
                  <li><Link to="/mobile-application-development-company" className={'drophead_line'} >Mobile Application Development</Link>
                    <ul>
                      <li><Link to="/mobile-application-development-company/#ios-app" target="_top">iOS Applications</Link></li>
                      <li><Link to="/mobile-application-development-company/#android-app" target="_top">Android Applications</Link></li>
                      <li><Link to="/mobile-application-development-company/#hybrid-app" target="_top">Hybrid Mobile Application</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/our-niche" className={'drophead_line'}>Our Niche Solutions</Link>
                    <ul>
                      <li><Link to="/our-niche/#ar-vr" target="_top">Augmented Reality / Virtual Reality Services</Link></li>
                      <li><Link to="/our-niche/#ux-ui" target="_top">UI/UX</Link></li>
                      <li><Link to="/our-niche/#artificial-intelliegence" target="_top">Artificial Intelliegence</Link></li>
                      <li><Link to="/our-niche/#crm" target="_top">CRM Solutions</Link></li>
                      {/* <li><Link to ="/our-niche/#custom_web" target="_top">Foundation</Link></li>
              <li><Link to ="/our-niche/#custom_web" target="_top">React Js</Link></li> */}
                    </ul>
                  </li>
                  <li><Link to="/digital-marketing" className={'drophead_line'}>Digital Marketing</Link>
                    <ul>
                      <li><Link to="/digital-marketing/#seo" target="_top">Search Engine Optimization (SEO)</Link></li>
                      <li><Link to="/digital-marketing/#sem-google-adWords" target="_top">Search Engine Marketing / Google Adwords</Link></li>
                      <li><Link to="/digital-marketing/#smo" target="_top">Social Media Optimization (SMO) / Social Media Marketing (SMM)</Link></li>
                      {/* <li><Link to ="/digital-marketing/#custom_web" target="_top">Content Marketing</Link></li>
              <li><Link to ="/digital-marketing/#custom_web" target="_top">Market Research</Link></li> */}
                    </ul>
                  </li>
                  {/* <li className={'wid_aus_webmob_nav'} style={{width:'40%'}}><Link to="/web-in-Aus"  className={'drophead_line link_austra'}>Web Application Development in Australia</Link>
          </li>
          <li className={'wid_aus_webmob_nav'} style={{width:'40%'}}><Link to="/mobile-in-Aus"  className={'drophead_line link_austra'}>Mobile Application Development in Australia</Link>
          </li> */}
                </ul>
                {/* for mobile view */}
                <ul className={'mobile_menu_clickingbtn'}>
                  <li><Link to="/web-application-development-company" className={'drophead_line'} >Web Application Development</Link>
                    <ul >
                      <li><Link to="/web-application-development-company/#custom-web" target="_top">Custom Web Application</Link></li>
                      <li><Link to="/web-application-development-company/#cms-dev" target="_top">CMS Development</Link></li>
                      <li><Link to="/web-application-development-company/#ecommer-web" target="_top">Ecommerce Website Design </Link></li>
                    </ul>
                  </li>
                  <li><Link to="/mobile-application-development-company" className={'drophead_line'} >Mobile Application Development</Link>
                    <ul>
                      <li><Link to="/mobile-application-development-company/#ios-app" target="_top">iOS Applications</Link></li>
                      <li><Link to="/mobile-application-development-company/#android-app" target="_top">Android Applications</Link></li>
                      <li><Link to="/mobile-application-development-company/#hybrid-app" target="_top">Hybrid Mobile Application</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/our-niche" className={'drophead_line'}>Our Niche Solutions</Link>
                    <ul>
                      <li><Link to="/our-niche/#ar-vr" target="_top">Augmented Reality / Virtual Reality Services</Link></li>
                      <li><Link to="/our-niche/#ux-ui" target="_top">UI/UX</Link></li>
                      <li><Link to="/our-niche/#artificial-intelliegence" target="_top">Artificial Intelliegence</Link></li>
                      <li><Link to="/our-niche/#crm" target="_top">CRM Solutions</Link></li>
                      {/* <li><Link to ="/our-niche/#custom_web" target="_top">Foundation</Link></li>
              <li><Link to ="/our-niche/#custom_web" target="_top">React Js</Link></li> */}
                    </ul>
                  </li>
                  <li><Link to="/digital-marketing" className={'drophead_line'}>Digital Marketing</Link>
                    <ul>
                      <li><Link to="/digital-marketing/#seo" target="_top">Search Engine Optimization (SEO)</Link></li>
                      <li><Link to="/digital-marketing/#sem-google-adWords" target="_top">Search Engine Marketing / Google Adwords</Link></li>
                      <li><Link to="/digital-marketing/#smo" target="_top">Social Media Optimization (SMO) / Social Media Marketing (SMM)</Link></li>
                      {/* <li><Link to ="/digital-marketing/#custom_web" target="_top">Content Marketing</Link></li>
              <li><Link to ="/digital-marketing/#custom_web" target="_top">Market Research</Link></li> */}
                    </ul>
                  </li>
                  {/* <li className={'wid_aus_webmob_nav'} style={{width:'40%'}}><Link to="/web-in-Aus"  className={'drophead_line link_austra'}>Web Application Development in Australia</Link>
          </li>
          <li className={'wid_aus_webmob_nav'} style={{width:'40%'}}><Link to="/mobile-in-Aus"  className={'drophead_line link_austra'}>Mobile Application Development in Australia</Link>
          </li> */}
                </ul>
                {/* end */}
              </li>
              <li><Link to='/our-work' className="atg_nav_hover nav_bar_adding_ourwork"> <li className=" nav_hover">Our&nbsp;Works</li></Link>  </li>
              {/* <li><Link to='/careers'  className="atg_nav_hover nav_bar_adding_career"> <li className=" nav_hover">Careers</li></Link> </li> */}
              <li><a href="https://www.icoresoftwaresystems.com/blog" className="atg_nav_hover nav_bar_adding_blogs"> <li className=" nav_hover ">Blogs</li></a> </li>
              {/* <Link to='/contact-us'  ><button className={'header_btn_contact'}> Contact</button></Link> */}
              <li><Link to='/contact-us' className="atg_nav_hover nav_bar_adding_contact"> <li className=" nav_hover">Contact</li></Link> </li>
              <li><Link to='/contact-us'> <button type="button" class="btn btn-primary" id="sm_btn">Enquire</button></Link> </li>

              {/* <li><Link to='/contact-us'  className="atg_nav_hover nav_bar_adding_contact contact_nav_btn"><li className=" nav_hover">Contact</li></Link> </li> */}
              {/* <li><a href="#">Contact</a>
        <ul>
          <li><a href="#">School</a>
            <ul>
              <li><a href="#">Lidership</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </li>
          <li><a href="#">Study</a>
            <ul>
              <li><a href="#">Undergraduate</a></li>
              <li><a href="#">Masters</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">Online</a></li>
            </ul>
          </li>
          <li><a href="#">Study</a>
            <ul>
              <li><a href="#">Undergraduate</a></li>
              <li><a href="#">Masters</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">Online</a></li>
            </ul>
          </li>
          <li><a href="#">Empty sub</a>
          	<ul>
          		<li><img src="http://www.pgecurrents.com/wp-content/uploads/2012/05/300x200_ggb_fort_point.jpg"/></li>
          	</ul>
          </li>
        </ul>
      </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
