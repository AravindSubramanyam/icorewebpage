import React, { useEffect } from 'react';
import './about_us_inner.css';
import Header from '../header.jsx';
import AboutInnerHeadVideo from './about_us_inner.jsx';
import $ from 'jquery';
import AboutUsInnerPhilosophy from './about_us_inner_philosophy.jsx';
import RotationWork from './rotation_work.jsx';
import Footer from '../footer.jsx';
import AboutMissionImage from '../img_new/about_us_inner/about_inner_misson.png';
import AboutVisionImage from '../img_new/about_us_inner/about_inner_vision.png';
import AboutValueImage from '../img_new/about_us_inner/about_inner_value.png';

const AboutUsInner = () => {
    useEffect(() => {
        $(document).ready(function() {
            $('.show_text_inner_hideshow').hover(function() {
                var id = $(this).attr('data-id');
                $('.b-' + id + '-text').show();
            }, function() {
                $('.b-text').hide();
            }).on('click', function() {
                var id = $(this).attr('data-id');
                $('.b-' + id + '-text').toggleClass('selected');
            });

            $(".show_text_inner_hideshow").hover(function() {
                $("#container_sh #box").css("visibility", "hidden");
            }, function() {
                $("#container_sh #box").css("visibility", "visible");
            });
        });

        $(document).ready(function() {
            setInterval(function() {
                $('#outerspace').addClass("rocket");
            }, 1500);
        });

        $(document).ready(function() {
            setInterval(function() {
                $('#outerspace2').addClass("rocket2");
            }, 11000);
        });

        $(document).ready(function() {
            setInterval(function() {
                $('#outerspace3').addClass("rocket3");
            }, 21000);
        });
    }, []);

    return (
        <div>
            <Header />
            <AboutInnerHeadVideo />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about_redes_head">
                            <div className={'marg_all_heading_about'}>
                                <h2 className="about_ser_new_tags">One-stop solution for all your IT needs</h2>
                                <span className="about_bor_bot_serv"></span>
                            </div>
                            <p className="about_inner_ptag" data-aos="fade-right">
                                iCore Software Systems Private Limited is a technology-driven software development company that comes with extended capabilities of providing web design and application development services, customized eCommerce solutions, mobile application development and practically anything related to IT. We also provide Information Technology Staffing solutions to our clients across the United States  to minimize their recruitment hassles. Our physical presence in the ÚS and India and the recent virtual presence in Far East Singapore helps us to deliver extraordinary solutions to our clients worldwide.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'marg_all_heading_about'}>
                    <h2 className="about_ser_new_tags">Your perfect business partner</h2>
                    <span className="about_bor_bot_serv"></span>
                </div>
                <div className="only_web_view_inner_rotate">
                    <div className="row">
                        <div className="col-lg-12 bg_rotate_img_inner_10 ">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5">
                                    <div className="col-lg-5">
                                        <div className="zoom-effect-hvr_img_inner">
                                            <div id="outerspace" >
                                                <img src={AboutVisionImage} alt="not found" className="show_text_inner_hideshow new_img_rotate" data-id="1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 mgr_left_minus13_inner">
                                        <div className="zoom-effect-hvr_img_inner">
                                            <div id="outerspace2">
                                                <img src={AboutMissionImage} alt="not found" className="show_text_inner_hideshow new_img_rotate" data-id="2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 img_align_inner_mission">
                                        <div className="zoom-effect-hvr_img_inner">
                                            <div id="outerspace3">
                                                <img src={AboutValueImage} alt="not found" className="show_text_inner_hideshow new_img_rotate" data-id="3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 pad_new_our_vis">
                                    <div className={'our_mis_vis_about'}>
                                        <h3 className=" txt_bor_align_about_inner1">Our Vision</h3>
                                        <p className="min_vis_jsuti">The fundamental vision of iCore Software Systems Private Limitted is to alleviate all technological issues for our clients by creating future-ready products and solutions that improve efficiency, reduce costs, and add immense value by transforming their existing processes.</p>
                                    </div>
                                    <div className={'our_mis_vis_about'}>
                                        <h3 className=" txt_bor_align_about_inner1">Our Mission</h3>
                                        <p className="min_vis_jsuti">To build reliable, effective and scalable products and solutions while conducting an in-depth analysis of client requirements and alleviating their pain points to achieve maximum value proposition.</p>
                                    </div>
                                    <div className={'our_mis_vis_about'}>
                                        <h3 className=" txt_bor_align_about_inner1">Our Values</h3>
                                        <p className="min_vis_jsuti">Technology-driven, Problem-solving, Excellence, Customer-focus Accountability.</p>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsInner;
