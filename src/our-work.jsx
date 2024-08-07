import React, { useEffect } from 'react';
import './our_work_page/our_work_inner.css';
import './our_work.css';
import OurWorkInner from './our_work_page/our_work_inner.jsx';
import $ from 'jquery';
import Footer from './footer.jsx';
import { Helmet } from "react-helmet";
import Header from './header.jsx';
import DocumentMeta from 'react-document-meta';

const OurWorkInnerConnect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        $(document).ready(function() {
            $('.nav_bar_adding_ourwork').addClass('active_cus');
        });
    }, []);

    const currentPath = window.location.pathname;
    const canonicalUrl = `https://www.icoresoftwaresystems.com${currentPath}`;
    /*const meta = {
        title: 'Taxi Booking App Development Company Texas | Uber Clone App Development Company | our-work',
        description: 'Icore is an advanced App Development Company specialised in Taxi Booking. We are an outstanding company offering Uber Clone App Development services in texas.',
        canonical: 'https://www.icoresoftwaresystems.com/our-work',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'Technology-driven, Problem-solving, Excellence, Customer-focus, Accountability'
            }
        }
    };*/

    return (
        <div>
            {/*<DocumentMeta {...meta}/>*/}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Taxi Booking App Development Company Texas | Uber Clone App Development Company | our-work</title>
                <meta name="description" content="Icore is an advanced App Development Company specialised in Taxi Booking. We are an outstanding company offering Uber Clone App Development services in texas." />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <OurWorkInner />
            {/*<Header />
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className="col-lg-12 bg_our_work_inner1">
                    </div>
                </div>
                <br/>
                <div className={'marg_all_heading'}>
                    <h2 className="about_ser_new_tags"> Mobile applications</h2>
                    <span className="about_bor_bot_serv"></span>
                </div>
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <div className={'for_our_worknew'}>
                            <div className={'col-lg-5'}>
                                <img className={'img_ourwork_new_logo'} src={iRide_Driverss} />
                            </div>
                            <div className={'col-lg-7'}>
                                <h3 className=" txt_bor_align_about_inner1_newourwork">iRide Driver</h3>
                                <p className="min_vis_jsuti">This application is one of the fastest and easiest ways for the Drivers to connect with their passengers and to make their commuting activities easier.</p>
                                <h3 className=" txt_bor_align_about_inner1_newourwork">Get App</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
            <Footer />
        </div>
    );
};

export default OurWorkInnerConnect;
