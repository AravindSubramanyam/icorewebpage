import React, { useEffect } from 'react';
import './our_service_ecommerce.css';
import Main_Ecommerce from '../img_new/our_service_inner/augment_reality.png';
import { Link } from 'react-router-dom';

const AugmentedInner = () => {
    useEffect(() => {
        // ComponentDidMount equivalent
        // Add your initialization code here
        // AOS.init();
    }, []);

    return (
        <div>
            <div className={'marg_all_heading_about our_serfirst_p'} id={'AR'}>
                <h2 className="about_ser_new_tags">Augmented Reality / Virtual Reality Services</h2>
                <span className="about_bor_bot_serv"></span>
            </div>

            <div className="container-fluid">
                <div className="row">
                   

                    <div className="col-lg-6">
                        <p className="ecomerce_ptag_inner1">We are now in the right phase of the information era where the AR/VR technologies in science fiction movies of the 80s come to reality. Augmented Reality and Virtual Reality is all about enhancing the digital experience of using technology and make it as real as possible. The accelerated pace of its development will soon change the way the world embraces technology.</p>
                        <p className="ecomerce_ptag_inner1">The emergence of AR/VR has given rise to endless possibilities of redefining the ways a customer can use technology. Businesses across industries have begun their initial steps in enhancing their services with the incorporation of AR / VR into their products and services </p>
                        <p className="ecomerce_ptag_inner1">iCore has foreseen this revolution and understood the possibilities that this phase of this era has to offer. Hence iCore has embraced AR / VR technologies and incorporated them into our service delivery to meet the needs of our clients</p>
                        <p className="ecomerce_ptag_inner1"> One of our successful applications of the AR / VR technologies is the remote incident management tool that we built for Trintas. This is an Augmented Reality application that solves critical printer issues. This AR application enables the printer-service technician to solve issues without having to move the printer to the service facility.</p>
                        <p className="ecomerce_ptag_inner1">This application has enabled Trintas to save a considerable amount of time and operational costs. Also, this application has transformed Trintas’ operational excellence and has taken it to the next level. <Link to="/our-work/#AR_ourwork" style={{ color: 'blue' }}> Read more about it here</Link></p>
                        <p className="ecomerce_ptag_inner1">Our future plans involve expanding AR / VR products and solutions into the Retail, Entertainment, Education, Publishing, Health Sciences, and Manufacturing domains</p>
                        <p className="ecomerce_ptag_inner1">Our other efforts of AR / VR technology involve our Solution Architects envisioning the incorporation of AR / VR elements into eCommerce, Mobile Applications, and Web Applications to build efficient products/solutions</p>
                        <Link to="/our-niche/" className="our_service12read">Read More...</Link>
                    </div>
                    <div className="col-lg-6 dis_only_inner_web">
                        <p className="ecomerce_ptag_inner1">Constant evolutionary changes in the information era have enabled us to embrace technology in different ways. And we mean this literally with the entry of AR / VR technology taking hold of the technology landscape. Every technology of the past is being rechristened by incorporation of AR and VR into them</p>
                        <img src={Main_Ecommerce} alt="not found" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AugmentedInner;
