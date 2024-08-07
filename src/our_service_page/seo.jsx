import React from 'react';
import './seo.css';
import './our_service_inner';
import Seo_img from '../img_new/our_service_inner/seo1.png';
import Bullet_img from '../img_new/our_service_inner/bullet_img.png';
import Digital_img from '../img_new/digitalpng.png';
import { Link } from 'react-router-dom';

const SeoInner = () => {
  return (
    <div>
      <div className={'marg_all_heading_about '} id={'SEO'}>
        <h2 className="about_ser_new_tags">Digital marketing</h2>
        <span className="about_bor_bot_serv"></span>
      </div>

      <div className="container-fluid mor_bot_inner_us_staffing web_view_none_seo">
        <div className="col-lg-12">
        <div className="col-lg-6">
            <p className="us_staffign_ptag_inner1">Optimizing the digital presence of a company is a multi-directional and a fuzzy process that can be streamlined by designing a digital marketing strategy for the business. Designing a digital marketing strategy is done through a complete analysis. It is done by coupling the company’s goals and harnessing the various digital platforms or mediums in successful combinations and iterations to arrive at the end goal</p>

            <p className="us_staffign_ptag_inner1">iCore has commendable experience building digital marketing solutions and in offering digital marketing services to realize the digital marketing goals of any B2B or B2C business. Our services include but are not limited to the following</p>
            <p className="us_staffign_ptag_inner1"><strong>Advertising-</strong> Harness the potential of Google AdWords and Bing advertising services to get found among your target audiences of any geography</p>
            <p className="us_staffign_ptag_inner1"><strong>Social Media Marketing-</strong> Engaging your target audiences through all major social networks (Facebook, Twitter, LinkedIn, Google+, YouTube etc.)and help in effective maintenance of the social profiles frequently using necessary online tools and follower engagement models</p>
            <p className="us_staffign_ptag_inner1"><strong>Website optimization-</strong> Be on top of the visibility matrix to get potential leads and drive traffic to the website by optimizing your website and applying organic SEO techniques</p>
            <p className="us_staffign_ptag_inner1">Apart from the above, iCore also specializes in the following digital marketing services</p>
            <p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Content Marketing</p>
            <p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Search Engine Marketing (SEM)</p>
            <p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Pay-Per-Click advertising (PPC)</p>
            <p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Affiliate Marketing</p>
            <p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Email Marketing</p>
            <Link to="mobile-application" target="_top" className="our_service12read">Read More...</Link>
          </div>
        

          <div className="col-lg-6">
            <p className="us_staffign_ptag_inner1">The idea of possessing a commendable online presence of a business is not just limited to creating and owning a plush business website. As the website becomes the face of a business online, abundant optimization and streamlining of website components are done to reach potential customers of all geographies and to build an online brand image</p>
            <img src={Digital_img} alt="not found" className="" />
          </div>

         
        </div>
      </div>

      {/* for mobile view */}

      {/* <div className="container-fluid mor_bot_inner_us_staffing mobile_view_none_seo">
        <div className="col-lg-12">
          <div className="col-lg-6">
            <img src={Digital_img} alt="not found" className="" />
          </div>
          <div className="col-lg-6">
            <p className="us_staffign_ptag_inner1">Optimizing the digital presence of a company is a multi-directional and a fuzzy process that can be streamlined by designing a digital marketing strategy for the business. Designing a digital marketing strategy is done through a complete analysis. It is done by coupling the company’s goals and harnessing the various digital platforms or mediums in successful combinations and iterations to arrive at the end goal</p>

            <p className="us_staffign_ptag_inner1">iCore has commendable experience building digital marketing solutions and in offering digital marketing services to realize the digital marketing goals of any B2B or B2C business. Our services include but are not limited to the following</p>
            <p className="us_staffign_ptag_inner1"><strong>Advertising-</strong> Harness the potential of Google AdWords and Bing advertising services to get found among your target audiences of any geography</p>
            <p className="us_staffign_ptag_inner1"><strong>Social Media Marketing-</strong> Engaging your target audiences through all major social networks (Facebook, Twitter, LinkedIn, Google+, YouTube etc.)and help in effective maintenance of the social profiles frequently using necessary online tools and follower engagement models</p>
            <p className="us_staffign_ptag_inner1"><strong>Website optimization-</strong> Be on top of the visibility matrix to get potential leads and drive traffic to the website by optimizing your website and applying organic SEO techniques</p>
            <p className="us_staffign_ptag_inner1">The idea of possessing a commendable online presence of a business is not just limited to creating and owning a plush business website. As the website becomes the face of a business online, abundant optimization and streamlining of website components are done to reach potential customers of all geographies and to build an online brand image</p>
<p className="us_staffign_ptag_inner1">Apart from the above, iCore also specializes in the following digital marketing services</p>
<p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Content Marketing</p>
<p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Search Engine Marketing (SEM)</p>
<p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Pay-Per-Click advertising (PPC)</p>
<p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Affiliate Marketing</p>
<p className="card_extra_ptag_inner_us_staffing2"><img src={Bullet_img} alt="bullet image" className="bullet_us_staffing" /> Email Marketing</p>
<Link to="digital-marketing" target="_top" className="our_service12read">Read More...</Link>
</div>
</div>
</div> */}
</div>
);
};

export default SeoInner;
