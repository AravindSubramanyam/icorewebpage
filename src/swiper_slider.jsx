import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import './our_client.css';
import driver_new from './img_new/ourclients/driver1.png';
import Catalina_new from './img_new/our_work_inner/new/catlina_new1.png';
import Google_play from './img_new/our_work_inner/new/google_play1.png';
import Apple_play from './img_new/our_work_inner/new/apple_play1.png';

const OurClient = () => {
    useEffect(() => {
        $(function () {
            // Ensure the .customer-logosss element exists before initializing Slick slider
            if ($('.customer-logosss').length > 0) {
                $('.customer-logosss').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 1500,
                    arrows: true,
                    nextArrow: '<i class="fa fa-angle-left left_arrow_slick_swiper" aria-hidden="true"></i>',
                    prevArrow: '<i class="fa fa-angle-right right_arrrow_slick_swiper" aria-hidden="true"></i>',
                    dots: false,
                    pauseOnHover: true,
                });
            }
        });
    }, []);

    const googlePlayButton = () => {
        window.location.assign('https://play.google.com/store/apps/details?id=com.icore.apps.iride.driver');
    };

    const applePlayButton = () => {
        window.location.assign('https://itunes.apple.com/us/app/iride-driver/id1326527505?mt=8');
    };

    const applePlayButtonCatalina = () => {
        window.location.assign('https://apps.apple.com/us/app/catalina-arf/id1217479015');
    };

    const googlePlayButtonCatalina = () => {
        window.location.assign('https://play.google.com/store/apps/details?id=com.trintas.catalinaarf');
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="marg_all_heading">
                    <h2 className="about_ser_new_tags">Top mobile applications</h2>
                    <span className="about_bor_bot_serv"></span>
                </div>
            </div>
            <section className="customer-logosss slider">
                <div className="row">
                    <div className="col-lg-12">
                    <h3 className="txt_bor_align_about_inner1 slider_head_fnt text-center" style={{ left: '10%', fontSize: '30px' }}>Taxi app</h3>

                        <div className="makerow for_our_worknew">
                            <br />
                            <div className="col-lg-5">
                                <img alt="not found" className="img_ourwork_new_logo_swiper" src={driver_new} />
                            </div>
                            <div className="col-lg-6">
                                <h3 className="txt_bor_align_about_inner1">iRide</h3>
                                <p className="min_vis_jsuti">iRide Driver is an online transportation application that allows the cab drivers to find rides in the city. This application is installed in the smartphone and has an easy to use UI that enables the cab drivers to register their vehicle and find rides. The functionalities of this application include finding nearby rides, fixing costs (with minimal variation from base costs), ride routing, ride tracking etc. iRide Driver is available in both Android and iOS platforms</p>
                                <p className="min_vis_jsuti">iRide Passenger is the online taxi riding service. This app is used at the passenger end of the iRide taxi service. Passengers looking for taxis in the vicinity can find taxis through this app. iRidePassenger has features of advanced booking of taxis for a future date, emergency options, trip management, driver and vehicle preferences etc</p>
                                <br />
                                <h3 className="txt_bor_align_about_inner1">Get App</h3>
                                <div className="total_btn">
                                    <img src={Google_play} onClick={googlePlayButton} alt="not" className="google_play_css_button" />
                                    <img src={Apple_play} alt="not" onClick={applePlayButton} className="google_play_css_button" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd slider */}
                <div className="row">
                    <div className="col-lg-12">
                    <h3 className="txt_bor_align_about_inner1 text-center slider_head_fnt" style={{ left: '10%', fontSize: '30px', padding: '1% 0' }}>Augmented reality app</h3>

                        <div className="makerow for_our_worknew">
                            <div className="col-lg-5">
                                <img alt="not found" className="img_ourwork_new_logo_swiper" src={Catalina_new} />
                            </div>
                            <div className="col-lg-6">
                                <h3 className="txt_bor_align_about_inner1">Catalina ARF</h3>
                                <p className="min_vis_jsuti">iCore has built an intelligent Augmented Reality application- Catalina ARF (Asset Recovery Form) for Trintas’ remote issue resolution of Assets (Printers and PCs) issues. This application helps the service technicians to resolve issues without having to transport the assets to the service facility. This application is pre-coded with the various assets’ or peripherals’ issues that can arise and its corresponding resolutions based on legacy documentations and experiences. This application is installed in the smartphones of the service technicians. On pointing the camera interface of the app towards the asset, it provides numerous issue-related options and resolutions on the screen. Also, the screen can be shared with the service technicians back at the service facility to help on issue resolution on site.</p>
                                <br />
                                <h3 className="txt_bor_align_about_inner1">Get App</h3>
                                <div className="total_btn">
                                    <img src={Google_play} onClick={googlePlayButtonCatalina} alt="not" className="google_play_css_button" />
                                    <img src={Apple_play} alt="not" onClick={applePlayButtonCatalina} className="google_play_css_button" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurClient;
