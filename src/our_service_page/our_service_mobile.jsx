import React, { useEffect } from 'react';
import './our_service_mobile.css';
import Mobile_Img1 from '../img_new/our_service_inner/mobile_apps/1_m.png';
import Mobile_Img2 from '../img_new/our_service_inner/mobile_apps/2_m.png';
import Mobile_Img3 from '../img_new/our_service_inner/mobile_apps/3_m.png';
import Mobile_Img4 from '../img_new/our_service_inner/mobile_apps/4_m.png';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const OurServiceMobile = () => {
    useEffect(() => {
        $(document).ready(function () {
            $('.mobile_apps_inner').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 3
                        }
                    }
                ]
            });
        });
    }, []);

    return (
        <div>
            <div className="container-fluid" id={'Mobile'}>
                <div className="row">
                    <div className="col-lg-12 pad_col_adjust_service">
                        <div className="our_service_mobile_bg">
                            <h3 className="explain_mobile_head1 marg_all_heading_about" data-aos="zoom-in">Mobile Apps development</h3>
                            <p className="ptag_explain_mobile_inner">The demand for mobile applications and its usage has seen a steep increase since the war of the mobile OS providers. The battle to capture the mobile marketplace between strong contenders like Android (Google), iOS (Apple), Windows Mobile (Microsoft), and Blackberry has opened tremendous windows of opportunities to mobile applications development firms</p>
                            <p className="ptag_explain_mobile_inner">Businesses of all kinds around the world have understood that their mobile presence is a valuable asset. They have also understood that the revenue potential of mobile marketing enables the businesses an enhanced reach and visibility just by an arm’s length</p>
                            <p className="ptag_explain_mobile_inner">Hence there is a pressing need for these businesses to extend themselves as mobile applications and make their presence matter in the mobile ecosystem</p>
                            <p className="ptag_explain_mobile_inner">Our futuristic approach to working has foreseen the revolution of mobile applications and its potential. To keep up with the revolution, we have equipped ourselves with multiple mobile application development solutions and strategies in transforming client’s businesses as the mobile space demands</p>
                            <div className="mobile_apps_inner">
                                <div style={{ boxShadow: '5px 1px 2px 2px transparent' }}><img src={Mobile_Img1} alt="Mobile Image 1" /></div>
                                <div style={{ boxShadow: '5px 1px 2px 2px transparent' }}><img src={Mobile_Img2} alt="Mobile Image 2" /></div>
                                <div style={{ boxShadow: '5px 1px 2px 2px transparent' }}><img src={Mobile_Img3} alt="Mobile Image 3" /></div>
                                <div style={{ boxShadow: '5px 1px 2px 2px transparent' }}><img src={Mobile_Img4} alt="Mobile Image 4" /></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mobile_apps_txt_card1">
                                        <p className="ptag_explain_mobile_inner">Apart from transforming our clients’ businesses, we have also built proprietary mobile applications / products and manage them exclusively. They are</p>
                                        <p className="card_extra_ptag_inner2_mobile_inner">iRide Driver</p>
                                        <p className="card_extra_ptag_inner2_mobile_inner">iRide Passenger</p>
                                        <p className="card_extra_ptag_inner2_mobile_inner">Service Request Portal</p>
                                        <p className="ptag_explain_mobile_inner">Our customized mobile applications for clients were built in the mobile application platforms which include the following</p>
                                        <p className="card_extra_ptag_inner2_mobile_inner">Android</p>
                                        <p className="card_extra_ptag_inner2_mobile_inner">iOS</p>
                                        <p className="card_extra_ptag_inner2_mobile_inner">Hybrid Mobile Applications</p>
                                        <p className="ptag_explain_mobile_inner">With profound experience as a mobile application development company, we have facilitated our clients to reap the benefits of being present in the mobile technology landscape</p>
                                    </div>
                                    <Link to="mobile-application" className="our_service12read clr_fff">Read More...</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServiceMobile;
