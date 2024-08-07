import React, { useEffect } from 'react';
import $ from 'jquery';
import './rotation_work.css';
// import Slider_IE from './slider_ie.jsx';

const OurclientInner = () => {
    useEffect(() => {
        $("#button1").click(function() {
            $("#div1").show();
            $("#div2").hide();
            $("#div3").hide();
            $("#div4").hide();
        });
        $("#button2").click(function() {
            $("#div1").hide();
            $("#div2").show();
            $("#div3").hide();
            $("#div4").hide();
        });
        $("#button3").click(function() {
            $("#div1").hide();
            $("#div2").hide();
            $("#div3").show();
            $("#div4").hide();
        });
        $("#button4").click(function() {
            $("#div1").hide();
            $("#div2").hide();
            $("#div3").hide();
            $("#div4").show();
        });
    }, []);

    return (
        <div>
            <div className="ie_img">
                <section id="" className=" " style={{ marginTop: '3%', paddingTop: '0px' }}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-12 text-center">
                                <h3 className="head_bor_inner4">WHAT WE DO</h3>
                                <p><br /></p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bg_inner_rotate_img111 ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 mrg_left_top_ie" style={{}}>
                                <div className="col-lg-3">
                                    <button className="btn_web" id="button1">Web</button>
                                </div>
                                <div className="col-lg-3">
                                    <button className="btn_Mobile" id="button2">Mobile</button>
                                </div>
                                <div className="col-lg-3">
                                    <button className="btn_Design" id="button3">Design</button>
                                </div>
                                <div className="col-lg-3">
                                    <button className="btn_technology" id="button4">Technology</button>
                                </div>
                            </div>
                        </div>
                        {/* second row */}
                        <div className="row">
                            <div className="col-lg-12 mrg_top_text_ie" id="div1">
                                <p className="ptag_ie_rotate">Custom Websites</p>
                                <p className="ptag_ie_rotate">Custom Web Apps</p>
                                <p className="ptag_ie_rotate">CMS & Blog Developement</p>
                                <p className="ptag_ie_rotate">eCommerce Website</p>
                                <p className="ptag_ie_rotate">Facebook & Twitter App</p>
                            </div>
                            <div className="col-lg-12 mrg_top_text_ie" id="div2" style={{ display: 'none' }}>
                                <p className="ptag_ie_rotate">Android</p>
                                <p className="ptag_ie_rotate">iOS</p>
                                <p className="ptag_ie_rotate">Windows</p>
                                <p className="ptag_ie_rotate">Hybrid (Phonegap)</p>
                                <p className="ptag_ie_rotate">Mobile Optimised Websites</p>
                            </div>
                            <div className="col-lg-12 mrg_top_text_ie" id="div3" style={{ display: 'none' }}>
                                <p className="ptag_ie_rotate">Website Templates</p>
                                <p className="ptag_ie_rotate">Logo & Banners</p>
                                <p className="ptag_ie_rotate">Mobile Apps</p>
                                <p className="ptag_ie_rotate">Mobile Games</p>
                                <p className="ptag_ie_rotate">Advertisement & Media</p>
                            </div>
                            <div className="col-lg-12 mrg_top_text_ie" id="div4" style={{ display: 'none' }}>
                                <p className="ptag_ie_rotate">PHP, MySQL, Oracle, Java</p>
                                <p className="ptag_ie_rotate">HTML5, CSS3, Jquery, Javascript</p>
                                <p className="ptag_ie_rotate">Joomla, Magento, Wordpress, Drupal</p>
                                <p className="ptag_ie_rotate">iOS & Android SDK</p>
                                <p className="ptag_ie_rotate">React Js , Ionic , React Native</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurclientInner;
