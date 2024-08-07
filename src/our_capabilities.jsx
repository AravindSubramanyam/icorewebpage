import React, { useEffect } from 'react';
import './portfolio.css';
import Extra_Videos from './extra_video.jsx';
import Web_Design from './img_new/videos/img1/ux1.png';
import Web_Development from './img_new/videos/img1/web-app1.png';
import Ecommerce_img from './img_new/videos/img1/ecommerce1.png';
import Mobile_img from './img_new/videos/img1/mobile app1.png';
import VR_img from './img_new/videos/img1/ar1.png';
import Digital_img from './img_new/videos/img1/seo1.png';
import { Link } from 'react-router-dom';

const Our_capabilities = () => {
    useEffect(() => {
        // AOS.init({
        //     duration: 1200,
        // });
    }, []);

    return (
        <div>
            <section className="bg_our_capa">
                <div className={'marg_all_heading'}>
                    <h2 className="about_ser_new_tags">Recognized experts in...</h2>
                    <span className="about_bor_bot_serv"></span>
                </div>
                <div class="container">
                    <div class="row our-service">
                        <div class="col-md-4">
                            <div class="service-box custom_hover">
                                <div class="service-img">
                                    <img data-aos="zoom-in" src={VR_img} alt="not found" />
                                </div>
                                <div class="service-content">
                                    <div class="service-title">
                                        <h4 data-aos="fade-up-right"><a >Augmented Reality / Virtual Reality</a></h4>
                                    </div>
                                    <p className={'hegiht_newcapabilities'} data-aos="fade-up-right">iCore has embraced the Augmented Reality / Virtual Reality technology and envisioned the incorporation of them into past technologies to redefine them. We have provided AR / VR solutions to our clients and we have plans in the pipeline to expand our AR / VR capabilities to multiple industry verticals</p>
                                    <Link to="/our-service/#AR" target="_top" class="box_btn">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-box custom_hover">
                                <div class="service-img">
                                    <img data-aos="zoom-in" src={Mobile_img} alt="not found" />
                                </div>
                                <div class="service-content">
                                    <div class="service-title">
                                        <h4 data-aos="fade-up-right"><a >Mobile Apps development</a></h4>
                                    </div>
                                    <p className={'hegiht_newcapabilities'} data-aos="fade-up-right">Building universally compatible mobile applications in all platforms for our clients as per the requirements with value addition. We are a mobile apps development firm with immense expertise in mobile application development services enabling our clients to reach their customers through their smart phones</p>
                                    <Link to="/our-service/#Mobile" target="_top" class="box_btn">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-box custom_hover">
                                <div class="service-img">
                                    <img data-aos="zoom-in" src={Web_Development} alt="not found" />
                                </div>
                                <div class="service-content">
                                    <div class="service-title">
                                        <h4 data-aos="fade-up-right"><a  >Web Application Development</a></h4>
                                    </div>
                                    <p className={'hegiht_newcapabilities'} data-aos="fade-up-right">Creation and development of intelligent web applications for clients with value-added functionalities to boost the efficiency of clients’ businesses. We are one of the finest web application development firms with more than 4 years of experience in custom web application development catering to clients in several industries </p>
                                    <Link to="/our-service/#webapps" target="_top" class="box_btn">read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br>
                    <div class="row our-service ">
                        <div class="col-md-4">
                            <div class="service-box custom_hover">
                                <div class="service-img">
                                    <img data-aos="zoom-in" src={Ecommerce_img} alt="not found" />
                                </div>
                                <div class="service-content">
                                    <div class="service-title">
                                        <h4 data-aos="fade-up-right"><a >E-commerce Solutions</a></h4>
                                    </div>
                                    <p className={'hegiht_newcapabilities'} data-aos="fade-up-right">Taking your local businesses online through our cutting edge eCommerce solutions and products to tap the untapped online market for your products. iCore Software Systems is one of the best eCommerce development companies to provide custom eCommerce web development solutions which helps to multiply your revenues</p>
                                    <Link to="/our-service/#Ecommerce" target="_top" class="box_btn">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-box custom_hover">
                                <div class="service-img">
                                    <img data-aos="zoom-in" src={Web_Design} alt="not found" />
                                </div>
                                <div class="service-content">
                                    <div class="service-title">
                                        <h4><a  data-aos="fade-up-right">UI / UX Design</a></h4>
                                    </div>
                                    <p className={'hegiht_newcapabilities'} data-aos="fade-up-right">iCore Software Systems houses some of the best creative minds who can wield visually stunning web designs and themes along with precise planning of web page layout, content production and graphic design using all latest technologies. Our experience as a web design company with multiple clients and their continued relationship with us showcases our potential</p>
                                    <Link to="/our-service/#webdesign" target="_top" class="box_btn">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-box custom_hover">
                                <div class="service-img">
                                    <img data-aos="zoom-in" src={Digital_img} alt="not found" />
                                </div>
                                <div class="service-content">
                                    <div class="service-title">
                                        <h4 data-aos="fade-up-right"><a >Digital Marketing</a></h4>
                                    </div>
                                    <p className={'hegiht_newcapabilities'} data-aos="fade-up-right">iCore provides a wide array of digital marketing services and solutions that helps to expand the reach of your businesses to unreachable audience and geographies. Our understanding of the digital marketing dynamics helps us build online marketing solutions that provide various trend-setting digital marketing services. </p>
                                    <Link to="/our-service/#SEO" target="_top" class="box_btn">read more</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
             </div> 
    </section>   
            </div>
            )
        }

export default  Our_capabilities;

    