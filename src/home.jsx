import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import './css/fontawesome-free-5.11.2-web/css/all.css';
import './home.css';
import Swiper from './swiper_slider.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './footer.jsx';
import { Helmet } from "react-helmet";
import DocumentMeta from 'react-document-meta';
import Testimonial from './testimonial.jsx';
import Contactus from './contact.jsx';
import Ourclient from './our_client.jsx';
import Port from './extra_port.jsx';
import About_Phone from './about_phone.jsx';
import Color from './color_bg.jsx';
import Connection_img_new from './img_new/videos/connection1.png';
import Header_img_new from './img_new/videos/banner22.png';
import 'react-app-polyfill/ie11';
import $ from 'jquery';


const Home = () => {
    useEffect(() => {
        $(document).ready(function () {
            $('.nav_bar_adding_home').addClass('active_cus');
        });
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Web & Mobile App Development | UI UX Development Company in Texas</title>
                <meta name="description" content="iCore software systems is an expert in web and mobile app development. We are a UI UX development company in Texas with an innovative mindset." />
                <link rel="canonical" href="https://www.icoresoftwaresystems.com/" />
            </Helmet>

            <div className='bg_color'>
                <header className="header ovelay_homehead valign bg-img" data-scroll-index="0" data-overlay-dark="5" data-stellar-background-ratio="0.5">
                    <img className="bg-vid video_bg_header" src={Header_img_new} alt="not-found" />

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="caption ">
                                    <h2 className="cd-headline clip mrg_top_home_ie mrg_top_seo checking">
                                        <span className="blc for_header_txt">DRIVEN BY TECHNOLOGY. DELIVERING EXCELLENCE  </span>
                                    </h2>
                                    <span className="blc for_header_txt_secondblock para">We’re a creative company that builds Experiences, <br />Products and Brands to Development</span><br /><br />
                                    <Link to='/contact-us'><button type="button" className="Rectangle-8 chkk">Enquiry Now</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to='/contact-us'><button type="button" className="Rectangle-9 chkk">Contact Us</button></Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img className="img_chk" src={Connection_img_new} alt="not-found" />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Home;
