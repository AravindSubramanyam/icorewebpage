import React, { useEffect } from 'react';
import './our_service_ecommerce.css';
import Main_Ecommerce from '../img_new/our_service_inner/ecommerce/ecommerce_original.jpg';
import { Link } from 'react-router-dom';

const OurServiceEcommerce = () => {
    useEffect(() => {
        // ComponentDidMount equivalent
        // Add your initialization code here
        // $('selector').method();
    }, []);

    return (
        <div>
            <div className="container" id={'Ecommerce'}>
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="our_ecommerce_head_inner_service mt_our_ecommerce_head_inner_service">E-Commerce Solutions</h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-4 row_adjust_mt">
                        <p className="ecomerce_ptag_inner1" data-aos="fade-right">The explosive growth of eCommerce is a phenomenal one and it is being compared to the Internet phenomenon in the 90s. eCommerce has witnessed a commendable market penetration in the last 15 years</p>
                        <p className="ecomerce_ptag_inner1" data-aos="fade-right">Despite this penetration, experts believe that only a quarter of its market potential is tapped until now. Since its development, we have been at the forefront of the eCommerce revolution and have been eCommerce solutions providers providing custom eCommerce Development Solutions to our clients worldwide</p>
                        <p className="ecomerce_ptag_inner1" data-aos="fade-right">Apart from this we also optimize existing eCommerce websites and transform them to be in line with the latest eCommerce technologies and fierce competition of the industry</p>
                    </div>

                    <div className="col-lg-4 mrg_img_rotate_top">
                        <img src={Main_Ecommerce} className="main_ecom_bg" alt="Ecommerce" />
                    </div>

                    <div className="col-lg-4 row_adjust_mt">
                        <p className="ecomerce_ptag_inner1" data-aos="fade-right">Our eCommerce Architects have designed sharp eCommerce websites and solutions to our clients to help them realize their dream of taking their local businesses online. This has enabled our clients to tap the untapped potential of online buyer activity thereby earning 3X revenues</p>
                        <p className="ecomerce_ptag_inner1" data-aos="fade-right">Our eCommerce Architects are well versed in using the following open source eCommerce platforms to provide eCommerce web development services and solutions</p>
                        <p className="ecomerce_ptag_inner1" data-aos="fade-right">iCore possesses the necessary insight and resources to build eCommerce websites for all sorts of requirements. We understand the nuances and differences demanded by B2B and B2C eCommerce portals and deliver tailor-made eCommerce solutions to them</p>
                        <Link to="web-application/#ecommer-web" className="our_service12read">Read More...</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 bor_new_ecom dis_none_ecommer_box">
                        <div className="col-lg-6">
                            <p className="card_extra_ptag_inner_ecommer2"><img src="" alt="about us" className="tic_ivcon_img_ecomm" /> Magento</p>
                            <p className="card_extra_ptag_inner_ecommer2"><img src="" alt="about us" className="tic_ivcon_img_ecomm" /> OpenCart</p>
                            <p className="card_extra_ptag_inner_ecommer2"> <img src="" alt="about us" className="tic_ivcon_img_ecomm" /> PrestaShop</p>
                            <p className="card_extra_ptag_inner_ecommer2"><img src="" alt="about us" className="tic_ivcon_img_ecomm" /> Shopify</p>
                            <p className="card_extra_ptag_inner_ecommer2"><img src="" alt="about us" className="tic_ivcon_img_ecomm" /> OsCommerce</p>
                        </div>

                        <div className="col-lg-6">
                            <p className="card_extra_ptag_inner_ecommer2"><img src="" alt="about us" className="tic_ivcon_img_ecomm" /> WooCommerce (WordPress)</p>
                            <p className="card_extra_ptag_inner_ecommer2"><img src="" alt="about us" className="tic_ivcon_img_ecomm" /> Jigoshop (WordPress)</p>
                            <p className="card_extra_ptag_inner_ecommer2"><img src="" alt="about us" className="tic_ivcon_img_ecomm" /> ZenCart</p>
                            <p className="card_extra_ptag_inner_ecommer2"><img src="" alt="about us" className="tic_ivcon_img_ecomm" /> Spree Commerce</p>
                            <p className="card_extra_ptag_inner_ecommer2"><img src="" alt="about us" className="tic_ivcon_img_ecomm" /> Drupal Commerce</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServiceEcommerce;
