import React from 'react';
import './our_solution.css';
import plane from '../img_new/our_solution/plane.png';
import history from '../img_new/our_solution/history.png';
import speed_meter from '../img_new/our_solution/speed-meter.png';
import Footer from '../footer.js';

const OurSolutionText = () => {
    return (
        <div>
            <div className="container-fulid mrg_top_solution_3per">
            <div class="row">
            <div class="col-md-12">
                <h3 className="head_our_solu" data-aos="fade-up-right">
                Data Velocity, Variety & Volume 
                </h3></div></div>
                <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                   <p className="head_our_solu_ptag" data-aos="fade-up-right">
                   Big data is an evolving term that describes any voluminous amount of structured, semistructured and unstructured data that has the potential to be mined for information.
                    </p>
                    
                    </div>
                    <div class="col-md-2"></div>
                    </div>
            {/* heading */}
            <div class="row mrg_top_solution_3per">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                   <h4 className="head_our_solu" data-aos="fade-up-right">
                   Why Big Data – a necessity to your business?
                    </h4>
                    
                    </div>
                    <div class="col-md-2"></div>
                    </div>

{/* box shadow */}
        <div class="row mrg_top_solution_3per">
        <div class="col-md-1"></div>
                <div class="col-md-10">
                   <div className="outer_box_shadow">
                    <div className="row">
                        <div class="col-md-12">
                        <div class="col-md-6">
                            <div className="inner_box_shadow">
                                <p className="inner_box_shadow_ptag" data-aos="fade-up-right">Better ability to make strategic decisions across the organization</p>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div className="inner_box_shadow">
                                <p className="inner_box_shadow_ptag inner_line_height" data-aos="fade-up-right">Faster and Detailed Analysis</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="row">
                        <div class="col-md-12">
                        <div class="col-md-6">
                            <div className="inner_box_shadow">
                                <p className="inner_box_shadow_ptag inner_line_height" data-aos="fade-up-right">Better Sense of Risk</p>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div className="inner_box_shadow">
                                <p className="inner_box_shadow_ptag inner_line_height2" data-aos="fade-up-right">Improved customer service and retention</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className="row">
                        <div class="col-md-12">
                        <div class="col-md-6">
                            <div className="inner_box_shadow">
                                <p className="inner_box_shadow_ptag" data-aos="fade-up-right">Improvement in sales figure through cross selling and up selling</p>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div className="inner_box_shadow">
                                <p className="inner_box_shadow_ptag inner_line_height2" data-aos="fade-up-right">Better insight into market / competition</p>
                            </div>
                            </div>
                        </div>
                    </div>
                                 {/* 4th row */}
                                 <div className="row">
                        <div class="col-md-12">
                        <div class="col-md-6">
                            <div className="inner_box_shadow">
                                <p className="inner_box_shadow_ptag inner_line_height" data-aos="fade-up-right">More innovation</p>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div className="inner_box_shadow">
                                <p className="inner_box_shadow_ptag inner_line_height2" data-aos="fade-up-right">Better corporate compliance and governance</p>
                            </div>
                            </div>
                        </div>
                    </div>
                   </div>
                    
                    </div>
                    <div class="col-md-1"></div>
                    </div>
                    <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                   <h4 className="head_our_solu" data-aos="fade-up-right">
                   iCore Software Systems role in Big Data
                    </h4>
                    
                    </div>
                    <div class="col-md-2"></div>
                    </div>
                  
                      
                    <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                   <p className="head_our_solu_ptag" data-aos="fade-up-right">
                   iCore Software Systems offers a proven, integrated end to end Big Data solution for businesses of all size that lets you capture, process, store and analyze your data within a single platform. With services on cloud you can focus on finding insights rather than managing your infrastructure and you can combine cloud-native services with 
                   open source tools as needed, both in batch and stream mode.
                    </p>
                    
                    </div>
                    <div class="col-md-2"></div>
                    </div>
            {/* final row */}
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10 mrg_top_solution_3per mrg_bot_slu_4per">
                <div class="col-md-4">
                            <div className="inner_box_shadow_bottom">
                            <h6 className="inner_box_bottom_h6tag" data-aos="fade-up-right">Volume <img src={plane}  className="bottom_img_size"/></h6>
                                <p className="inner_box_shadow_ptag_bottom" data-aos="fade-up-right">Massive data to be analyzed from several sources.</p>
                </div>
                 </div>
                    <div class="col-md-4">
                            <div className="inner_box_shadow_bottom">
                            <h6 className="inner_box_bottom_h6tag" data-aos="fade-up-right">Velocity<img src={speed_meter}  className="bottom_img_size"/></h6>
                                <p className="inner_box_shadow_ptag_bottom " data-aos="fade-up-right">Dealing with the pace of data flow</p>
                            </div>
                            </div>
                            <div class="col-md-4">
                            <div className="inner_box_shadow_bottom">
                            <h6 className="inner_box_bottom_h6tag" data-aos="fade-up-right">Variety <img src={history}  className="bottom_img_size"/></h6>
                                <p className="inner_box_shadow_ptag_bottom " data-aos="fade-up-right">Structured and Unstructured data</p>
                            </div>
                            </div>
                    </div>
                    <div class="col-md-1"></div>
                    </div>
                    
                <div className="row mrg_bot_slu_4per">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <p className="inner_box_shadow_ptag_bottom" data-aos="fade-up-right">iCore Software Systems can guide you through the key challenges of transformation and make your cloud strategy take shape. We have the working experience to help you reshape your infrastructure and swiftly gain the economies and security the Cloud
                         promises that encompass robust features of Microsoft Azure and Amazon Web Services</p>
                </div>
            </div><div class="col-md-1"></div>
                    </div>
                    <Footer/>
             </div>
    );
};

export default OurSolutionText;
