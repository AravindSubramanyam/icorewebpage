import React, { useEffect } from 'react';
import './our_work_page/our_work_inner.css';
import Contact_us_Inner_new from './contact_us_page/contact_us_new.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import $ from 'jquery';
import DocumentMeta from 'react-document-meta';

const Our_work_Inner_Connect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        $(document).ready(function() {
            $('.nav_bar_adding_contact').addClass('active_cus');
        });
    }, []);

    // Get the current URL path
    const currentPath = window.location.pathname;
    const meta = {
        title: 'Contact-us for your IT Requirement | contact-us',
        description: 'iCore Software Systems is a technology-driven web design and development company that has extended its capabilities to web application development, building customized eCommerce solutions and mobile applications',
        canonical: `https://www.icoresoftwaresystems.com${currentPath}`,
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'Technology-driven, Problem-solving, Excellence, Customer-focus, Accountability'
            }
        }
    };

    return (
        <div>
            <DocumentMeta {...meta}/>
            <Header/>
            <Contact_us_Inner_new/>
            {/* <Contact_us_Inner/> */}
            <Footer/> 
        </div>
    );
};

export default Our_work_Inner_Connect;
