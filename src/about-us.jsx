import React, { useEffect } from 'react';
import About_us_inner_philosophy from './about_us_pages/about_us_inner_philosophy.jsx';
import Footer from './footer.jsx';
import Ourclient from './our_client';
import About_Us_Inner from './about_us_pages/about_us_inner.jsx';
import DocumentMeta from 'react-document-meta';
import { Helmet } from 'react-helmet';
import $ from 'jquery';

const About_Us = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        $(document).ready(function () {
            $('.nav_bar_adding_about').addClass('active_cus');
        });
    }, []);

    const currentPath = window.location.pathname;
    const canonicalUrl = `https://www.icoresoftwaresystems.com${currentPath}`;

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>iCore Software Systems Private Limited | About</title>
                <meta
                    name="description"
                    content="iCore Software Systems is a technology-driven web design and development company that has extended its capabilities to web application development, building customized eCommerce solutions and mobile applications."
                />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>

            <About_Us_Inner />
            <About_us_inner_philosophy />
            <Ourclient />
            <Footer />
        </div>
    );
};

export default About_Us;
