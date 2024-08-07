import React, { useEffect } from 'react';
import './our_service_inner.css';
import Header from '../header.jsx';
import Img_Our_Service_Head_Tab from '../img_new/our_service_inner/our_service_inner_tab_newbg1.png';

const OurServiceInner = () => {
    useEffect(() => {
        // componentDidMount equivalent
        // Add your initialization code here
        // $('selector').method();
    }, []);

    return (
        <div>
            <Header />
            <h1 className="our_ser_inner_top_head1" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">Our Services</h1>
            <div className="container-fluid pad_container_our_service_inner bg_our_inner_first">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="col-lg-6 pad_container_our_service_inner">
                            <div className="bg_clr_our_service_head_inner1">
                            </div>
                        </div>
                        {/* second row */}
                        <div className="col-lg-6 pad_container_our_service_inner">
                            <div className="">
                                <img src={Img_Our_Service_Head_Tab} className="bg_clr_our_service_head_inner2" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}
        </div>
    );
};

export default OurServiceInner;
