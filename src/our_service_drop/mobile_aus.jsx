import React, { useEffect } from 'react';
import './web_design.css';
import Header from '../header.js';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import SideMenu from '../img_new/our_service_inner/side_menu_logo.png';

const MobileAndAus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className={'mobileaus_app_bg_drop'}></div>

                    <div className="col-lg-12">
                        <div className="col-lg-8 banner_img">
                            <div className={'marg_all_heading'}>
                                <h2 className="about_ser_new_tags">Mobile application development in Australia</h2>
                                <span className="about_bor_bot_serv"></span>
                            </div>
                            <div className="aft_heading_para">
                                <p>
                                    Nowadays, almost everyone has a mobile phone and use a lot of mobile applications on it. Day-by-day the number of applications is getting increased. Each day, an app or two gets added up to the play store. So? What is it all about?
                                </p>
                                <p>
                                    There have been evolutionary changes in technological development and mobile applications are never an exception. The requirements, business needs, and marketing goals vary from one organization to another.
                                </p>
                                <p>
                                    Are you in India or from Australia? Wherever you are, our experts at iCore Software create mobile applications based on your business needs. We help you build powerful, process-based applications that solve all your business needs. Our experts have developed several apps for so many organizations ranging from start-ups to big enterprise organizations and entrepreneurs as well.
                                </p>
                                <p>iCore offers mobile apps development services to customers in India as well as in Australia. We create mobile applications that operate on iOS and Android platforms.
                                </p>
                            </div>

                            <div className="aft_heading_para">
                                <h3 className=" txt_bor_align_about_inner1">Android app development</h3>
                                <p>Android applications are apps that are created for devices running the Android operating system. Led by Google platform, Android applications are basically user-friendly and easy to operate.</p>
                                <p>There is a whole lot of people who have profound knowledge in Android app development. Android developers create applications using Java which broadens the complete functionality of the device.
                                </p>
                                <p>iCore Software Systems offers a great experience to our clients by creating the best Android mobile applications for their businesses. Now, making a mobile application for the fastest growing Android community is made simple with iCore.
                                </p>
                                <p>Planning to get one for your business? Get in touch with our experts today. Join the largest pool of Android users across the globe.
                                </p>
                            </div>
                            <div className="aft_heading_para">
                                <h3 className=" txt_bor_align_about_inner1">iOS app development</h3>
                                <p>Now empowering your business with iPhone applications is made simple. It is an undeniable fact that Apple’s iOS platform is the most advanced mobile app development platform in the world. Owning an iOS mobile app for your business not only boosts your business but also makes you stand out from the crowd.
                                </p>
                                <p>At iCore Software Systems, we design and create iOS mobile applications for all range of business organizations. Our iOS app development team has rich industry experience and in-depth technical knowledge in creating business-centric mobile apps.
                                </p>
                                <p>Looking for an iOS mobile application developer? Reach us immediately…
                                </p>
                            </div>

                            <div className="aft_heading_para">
                                <h3 className=" txt_bor_align_about_inner1">Hybrid mobile application</h3>
                                <p>Heard before? These applications are similar to those mobile applications that are installed on a device. What differentiates them? The elements that they possess from native apps and apps developed for a particular platform such as iOS or Android, makes them unique.
                                </p>
                                <p>In fact, hybrid applications are web applications that run on the native browser. These apps are developed using Ionic, React Native, PhoneGap etc. along with HTML, CSS, and JavaScript and are wrapped in native applications.
                                </p>
                                <p>Experts at iCore Software Systems create hybrid applications that suit your business needs.
                                </p>
                                <p>As a mobile application provider, we insist all our clients own a unique, innovative, and responsive application for their business. We have nurtured dreams of several business organizations and boosted their growth constantly in the long run.
                                </p>
                                <p>Are you a business organization from Australia looking for hybrid app development? Get in touch with us instantly.</p>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="overall_service">
                                <div className="custom_border_service">
                                    <ul className="custom_ul_service">
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                <img src={SideMenu} className="custom_img_service" alt="Side Menu" />
                                            </span>
                                            <Link to="/web-application">Web application development</Link>
                                        </li>
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                <img src={SideMenu} className="custom_img_service" alt="Side Menu" />
                                            </span>
                                            <Link to="/mobile-application"> Mobile application development</Link>
                                        </li>
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                <img src={SideMenu} className="custom_img_service" alt="Side Menu" />
                                            </span>
                                            <Link to="/our-niche">Our Niche solutions</Link>
                                        </li>
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                <img src={SideMenu} className="custom_img_service" alt="Side Menu" />
                                            </span>
                                            <Link to="/digital-marketing">Digital marketing services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br />
            <Footer />
        </div>
    );
};

export default MobileAndAus;
