import React, { useEffect } from 'react';
import './web_design.css';
import Header from '../header.jsx';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import DocumentMeta from 'react-document-meta';
import { Helmet } from "react-helmet";
import SideMenu from '../img_new/our_service_inner/side_menu_logo.png';
import TodayContact from '../img_new/our_service_inner/tdycontact.png';

const DigitalAndDevelopments = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const meta = {
        title: 'Digital Marketing Services from iCore | digital-marketing',
        description: 'iCore Software is a leading software company offering Digital Marketing services like SEO, SEM, SMO, and SMM.',
        canonical: 'https://www.icoresoftwaresystems.com/digital-marketing',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'Technology-driven, Problem-solving, Excellence, Customer-focus, Accountability'
            }
        }
    };

    return (
    <>
        <div>
            <DocumentMeta {...meta}/>
            <Helmet>
                   <meta charSet="utf-8" />
                   <title>Digital Marketing Services from iCore | digital-marketing</title>
                   <meta name="description" content="iCore Software is a leading software company offering Digital Marketing services like SEO,SEM,SMO and SMM." />
                   <link rel="canonical" href="https://www.icoresoftwaresystems.com/digital-marketing" />
                </Helmet>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className={ 'digital_app_bg_drop'}>
                    </div>
        
                    <div className="col-lg-12">
                        <div className="col-lg-8 banner_img">
                            <div className={ 'marg_all_heading'}>
                                <h2 className="about_ser_new_tags">Digital marketing services</h2>
                                <span className="about_bor_bot_serv"></span>
                            </div>
                            <div className="aft_heading_para">
                                <p>
                                Discover the best boutique agency in Chennai that specializes in end-to-end digital marketing services. iCore Software Systems brings fresh perspectives and changed perceptions inclusive of creative strategies, technology and a range of industry-best practices to provide our clients with upgraded SEO that can successfully bridge the gap between you and your customers.</p>
                                <p>
                                Do not miss out on the excellent opportunity brought to you by our experts to make your business to grow.  Reach out to your target audience, generate potent and verified leads, convert them and earn befitting ROIs when you invest in iCore Software Systems’ digital marketing services.                                
                                </p>
                                <p>Implementing the right marketing strategy can reap huge benefits for your business.Building extraordinary experiences across websites, mobile applications and other products, digital marketing services with iCore Software Systems comes with several benefits:</p>
                                <h6 id={'seo'}><i class="fa fa-chevron-right" aria-hidden="true"></i> We hold the power to optimize and transform business results using strategic and creative<span className="face">integrated campaigns</span></h6>
                                <h6><i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;Conversion rates are boosted as we bring new meaning to digital marketing</h6>
                                <h6><i class="fa fa-chevron-right" aria-hidden="true"></i> As digital native partners, we make a world of a difference when compared to traditional<span className="face">marketing channelizing affordability and cost-effectiveness</span></h6>
                                <h6><i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;We unlock limitless value and drive operational effectiveness with our vast digital know-how</h6>
                                <p>iCore Software Systems helps business organizations expand the reach of their business even to the unreachable Services include:</p>

                                <h6><i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;Search Engine Optimization</h6>
                                <h6><i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;Search Engine Marketing/AdWords</h6>
                                <h6><i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;Social Media Optimization</h6>
                                </div>
        
                            <div className="aft_heading_para" id={'sem-google-adWords'}>
                                <h3 className=" txt_bor_align_about_inner1">SEO </h3>
                                <p>Want to drive more traffic to your website? Make sure that you rank on popular search engines such as Google, Bing and other popular drivers. As a full service digital marketing agency, iCore Software Systems applies organic industry-specific SEO or Search Engine Optimization to boost the quality and quantity of traffic to your website. We combine our creative and analytical processes to derive powerful results that upsurges your brand’s visibility on the search engine.</p>
                                <p>
                                At iCore Software Systems , we use proven strategies that cover all parts of the SEO – technical, content and offsite SEO. Our experts are ever ready to take on projects of any size and complexity, thereby reducing the cost of acquiring a customer and simultaneously increasing your revenues. We leverage the latest tools and techniques to take your brand to newer heights.
                                </p>
                                
                            </div>
                            <div className="aft_heading_para" id={'smo'}>
                                <h3 className=" txt_bor_align_about_inner1">SEM / Google AdWords</h3>
                              <p>
                              Search and visibility are both aspects of an advanced conversion strategy that amplify conversions and average order value. And to achieve this, it is extremely important to surface the most relevant results on the search engine. At iCore Software Systems we add intent-rich elements to your data trail to provide truly intelligent search experiences. We constructively use, Search Engine Marketing or SEM strategies for paid advertisements to grow your brand by connecting you to a target-oriented and diversified audience. 
                              </p>
                                <p>
                                Commonly known as Google AdWords, all you have to do is set a budget for your online paid marketing, write an advertisement and tell us where you want it to appear. While paying only for the results, you are not bound to any contractual obligations even as you are visible globally. AdWords are Google’s advertising services that help businesses display and run ad campaigns on its search engine and across the advertising network.
                                </p>
                                <p>
                                Experts at iCore Software Systems help you to capture the attention of your target audience by deploying compelling ad campaigns for your brand.
                                </p>
                            
                            </div>
        
                            <div className="aft_heading_para">
                                <h3 className=" txt_bor_align_about_inner1">SMO</h3>
                                <p>Looking for ways to create your brand presence? iCore Software Systems combines the best of processes and industry knowledge to provide Social Media Optimization or SMO services to realize the full potential of your brand. Increase the awareness of your products and services, as you activate a community, amplify content, automate pertinent communication and get measurable results across social media platforms.</p>
                                <p>
                                Implementing SMO in the right way generates viral publicity for your brand. In other words, social media optimization is more than just a marketing strategy – it is an art – there is no consistent formula for you to create shareable content.
                                </p>
                                <p>
                                At iCore Software Systems, we help your business to establish a strong presence on the digital manifesto as we take the concept of marketing beyond SEO. While nourishing social media platforms with unique and creative content, we market your products and services to beget amazing results, and connections, thus, enhancing the overall brand value. 
                                </p>
                                <p>
                                Contact our digital marketing experts today to achieve your business and branding goals.
                                </p>
                            </div>
        
                        </div>
                        <div className="col-lg-4">
                            <div className="overall_service">
                                <div className="custom_border_service">
                                    <ul className="custom_ul_service">
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                      <img src={SideMenu} className="custom_img_service"></img>
                                                  </span>
                                            <Link to="/web-application">Web application development</Link>
                                        </li>
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                      <img src={SideMenu} className="custom_img_service"></img>
                                                  </span>
                                            <Link to="/mobile-application"> Mobile application development</Link>
                                        </li>
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                      <img src={SideMenu} className="custom_img_service"></img>
                                                  </span>
                                            <Link to="/our-niche">Our Niche solutions</Link>
                                        </li>
                                        <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                      <img src={SideMenu} className="custom_img_service"></img>
                                                  </span>
                                            <Link to="/digital-marketing">Digital marketing services</Link>
                                        </li>
                                        {/* <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                      <img src={Side_menu} className="custom_img_service"></img>
                                                  </span>
                                            <Link to="/web-in-Aus">Web application development in Australia</Link>
                                        </li> */}
                                        {/* <li className="custom_li_service">
                                            <span className="custom_icon_service">
                                                      <img src={Side_menu} className="custom_img_service"></img>
                                                  </span>
                                            <Link to="/mobile-in-Aus">Mobile application development in Australia</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/>
            <div className="today_contact">
                <img id="img_logo" alt="not found" src={TodayContact}/>
                <h3 className="chk">Ready For Your Next IT Project?</h3>
                <p className="tdy_p">Collaborate With Us You Will Be Satisfied</p>
                <Link to="/contact-us"  target="_top">
                <button type="button" className="btn btn-primary btn-sm" id="tdy_button">Contact Us Today</button></Link>
            </div>
            <Footer/>
        </div>
    
    </>
      );
};

export default DigitalAndDevelopments;
                                                
