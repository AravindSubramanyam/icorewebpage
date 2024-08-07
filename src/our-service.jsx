import React, { useEffect } from 'react';
import './our_service_page/our_service_inner.css';
import OurServiceEcommerce from './our_service_page/our_service_ecommerce.jsx';
import OurServiceRotateImg from './our_service_page/our_service_rotate_img.jsx';
import OurServiceInner from './our_service_page/our_service_inner.jsx';
import OurServiceMobile from './our_service_page/our_service_mobile.jsx';
import OurServiceUsStaffing from './our_service_page/our_service_us_staffing.jsx';
import OurServiceWebDesign from './our_service_page/our_service_web_design.jsx';
import DocumentMeta from 'react-document-meta';
import { Helmet } from "react-helmet";
import Footer from './footer.jsx';
import AugmentedInner from './our_service_page/augmented_inner.jsx';
import SeoInner from './our_service_page/seo.jsx';
import $ from 'jquery';

const OurServiceInnerConnect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        $(document).ready(function() {
            $('.nav_bar_adding_ourservice').addClass('active_cus');
        });
    }, []);

    const currentPath = window.location.pathname;
    const canonicalUrl = `https://www.icoresoftwaresystems.com${currentPath}`;
    
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Augmented Reality App Companies in Texas | Online Reputation Management Plugin | our-service</title>
                <meta name="description" content="Being an advanced augmented Reality App company in Texas, we have an enhanced plugin for Online Reputation Management, ensuring smoothness in business." />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>

            <OurServiceInner />
            <OurServiceWebDesign />
            <OurServiceRotateImg />
            <OurServiceEcommerce />
            <OurServiceMobile />
            <AugmentedInner />
            <SeoInner />
            <OurServiceUsStaffing />
            <Footer />
        </div>
    );
};

export default OurServiceInnerConnect;
