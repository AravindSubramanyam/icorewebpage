import React, { useEffect } from 'react';
import './web_design.css';
import Header from '../header.js';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import SideMenu from '../img_new/our_service_inner/side_menu_logo.png';

const WebAndAus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className={'webaus_app_bg_drop'}></div>

                    <div className="col-lg-12">
                        <div className="col-lg-8 banner_img">
                            <div className={'marg_all_heading'}>
                                <h2 className="about_ser_new_tags">Web application development in Australia</h2>
                                <span className="about_bor_bot_serv"></span>
                            </div>
                            <div className="aft_heading_para">
                                <p>Are you a company from Australia looking for web application services? Our experts are here to help you out.</p>
                                <p>Websites play a prominent role in this digital era. With advent of several new technologies, business organizations are shifting their business to online. Be it a brick and mortar business or a dress boutique, everyone has started their online business. So what about you?
                                </p>
                                <p>If you don’t have a website for your business, do not worry. iCore Software offers web application development services to all business organizations – be it a small-, medium-, or large-scale business. Enhance your business with an user-friendly and unique website and compete globally.
                                </p>
                                <p>We offer customized web applications based on your business needs. Our experts ensure all your specifications and business requirements are met. We ensure that we deliver only the best to our customers.
                                </p>
                            </div>
                            <div className={'marg_all_heading'} id={'custom-web'}>
                                <h2 className="about_ser_new_tags">Our expertise</h2>
                                <span className="about_bor_bot_serv"></span>
                            </div>

                            <div className="aft_heading_para" id={'cms-dev'}>
                                <h3 className=" txt_bor_align_about_inner1">Custom web applications</h3>
                                <p>
                                    Planning to get a web application that suits your business needs? iCore Software Systems Private Limited, an Information Technology company, offers a suite of customizable website solutions for your business.
                                </p>
                                <p>
                                    Every business organization has its own workflow, tool, products, and services that don’t suit a common software or technology. Luckily, we are here to help you out. We analyse all your needs and marketing goals and based on that we create a useful web application.
                                </p>
                                <p>At iCore, our experts get all your business requirements drafted and based on this, we build your website. If any changes required, we can modify the website based on that. You can customize the website and its content easily and update it whenever needed. Now, you can edge out the competition with a customized web application that offers unique services and products.
                                </p>
                            </div>
                            <div className="aft_heading_para" id={'ecommer-web'}>
                                <h3 className=" txt_bor_align_about_inner1">CMS development</h3>
                                <p>Content Management System plays a prominent role in managing and maintaining your website content. With an inbuilt CMS, websites usually operate well and without it, the performance of the website is comparatively low.</p>
                                <p>The key purpose of CMS is to make the content management process simpler, that is, you can easily update and modify your website content. In this way, you can make your website look attractive.</p>
                                <p>At iCore, we offer open-source CMS development services that meet all of your content management requirements. Looking for ways to manage your website and its content? Get in touch with us today.
                                </p>
                            </div>

                            <div className="aft_heading_para">
                                <h3 className=" txt_bor_align_about_inner1">eCommerce website design</h3>
                                <p>Online shopping is the latest trend. With the evolution of the latest technologies and smartphones, people have started making their purchases online. Therefore, selling your products online is made easy through the eCommerce website.
                                </p>
                                <p>With this culture in trend, business owners and entrepreneurs have started to shift their business online. This, in turn, makes the user experience more comfortable as it makes the shopping or purchase of any goods at ease.
                                </p>
                                <p>Now building your eCommerce website is made easy. At iCore Software, our experts help you to create your own eCommerce website. With the help of a skilled designer and developer, you can create a stunning website with the right elements and call-to-action buttons.</p>
                                <p>Are you running your business in Australia? Do not worry! We extend our web application services to Australian clients as well.</p>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="overall_service">
                                <div className="custom_border_service">
                                    <ul className="custom_ul_service">
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                <img src={SideMenu} className="custom_img_service" alt="Side Menu"></img>
                                            </span>
                                            <Link to="/web-application">Web application development</Link>
                                        </li>
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                <img src={SideMenu} className="custom_img_service" alt="Side Menu"></img>
                                            </span>
                                            <Link to="/mobile-application"> Mobile application development</Link>
                                        </li>
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                <img src={SideMenu} className="custom_img_service" alt="Side Menu"></img>
                                            </span>
                                            <Link to="/our-niche">Our Niche solutions</Link>
                                        </li>
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                <img src={SideMenu} className="custom_img_service" alt="Side Menu"></img>
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
    )
}

export default WebAndAus;
