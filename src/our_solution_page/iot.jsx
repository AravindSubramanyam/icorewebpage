import React, { useEffect } from 'react';
import './mobility.css';
import padlock from '../img_new/our_solution/padlock.png';
import intersection from '../img_new/our_solution/intersection.png';
import device_icon from '../img_new/our_solution/device_icon.png';
import earth from '../img_new/our_solution/earth.png';
import Header from '../header.js';
import Footer from '../footer.js';

const IOT = () => {
    useEffect(() => {
        // Your componentDidMount logic here
        // AOS.init();
    }, []);

    return (
        <div>
            <Header />
            <div className="container-fulid mrg_bot_5per">
                <div className="iot_bg_top">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="mrg_head_iot_tag" data-aos="fade-up-right">IoT</h3>
                        </div>
                    </div>
                </div>

                {/* heading */}
                <div className="row">
                    <div className="col-md-12">
                        <p className="txt_iot1" data-aos="fade-up-right">Connecting People, Things & Data 
                            IoT embeds some intelligence in Internet connected objects to communicate, exchange 
                            information, take decisions, invoke actions and provide amazing services.</p>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-12">
                        <h3 className="head_txt_iot1" data-aos="fade-up-right">IoT is becoming the latest trend</h3>
                    </div>
                </div>

                {/* grid method */}
                <div className="row ">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <h4 className="grid_txt_head_iot" data-aos="fade-up-right">Connect Everything <img src={earth} className="bottom_img_size" /></h4>
                            <p className="grid_txt_p_iot" data-aos="fade-up-right">IoT connects virtual world with physical things gives anyone with a mobile device and appropriate authorization.</p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <h4 className="grid_txt_head_iot" data-aos="fade-up-right">Device Management <img src={device_icon} className="bottom_img_size" /></h4>
                            <p className="grid_txt_p_iot" data-aos="fade-up-right">IoT gives the power monitor or control anything.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                {/* grid 2nd */}
                <div className="row mrg_top_3per">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="col-md-1"></div>
                        <div className="col-lg-5">
                            <h4 className="grid_txt_head_iot" data-aos="fade-up-right">Enhanced&nbsp;Business&nbsp;Intergation <img src={intersection} className="bottom_img_size" /></h4>
                            <p className="grid_txt_p_iot" data-aos="fade-up-right">Extending your services with easy workflow integration to your business applications.</p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-lg-5">
                            <h4 className="grid_txt_head_iot" data-aos="fade-up-right">Scaling and Security <img src={padlock} className="bottom_img_size" /></h4>
                            <p className="grid_txt_p_iot" data-aos="fade-up-right">With more and more of IoT getting popular, we are concentrating more on scaling, security and privacy.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row ">
                    <div className="col-lg-12">
                        <p className="txt_iot2" data-aos="fade-up-right">iCore Software Systems is well equipped with major technical advancements and versions, This helps you for building end to end mobile solutions. We have proficiency within our team for iOS, Android and Windows with high level of User experience, Customer experience, Testing and deliverability. We play a role of best partner by mapping requirements to the application with trending technologies and frameworks.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IOT;
