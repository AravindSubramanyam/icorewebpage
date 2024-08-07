import React, { useState, useEffect } from 'react';
import './our_service_rotate_img.css'
import $ from 'jquery'
import Rotate_img1 from '../img_new/our_service_inner/web_apps/1.png'
import Rotate_img2 from '../img_new/our_service_inner/web_apps/2.png'
import Rotate_img3 from '../img_new/our_service_inner/web_apps/3.png'
import Rotate_img4 from '../img_new/our_service_inner/web_apps/4.png'
import Rotate_img5 from '../img_new/our_service_inner/web_apps/5.png'
import Rotate_img6 from '../img_new/our_service_inner/web_apps/6.png'
import Rotate_img7 from '../img_new/our_service_inner/web_apps/7.png'
import Rotate_img8 from '../img_new/our_service_inner/web_apps/8.png'
import Rotate_img9 from '../img_new/our_service_inner/web_apps/9.png'
import Rotate_img10 from '../img_new/our_service_inner/web_apps/10.png'
import Rotate_img11 from '../img_new/our_service_inner/web_apps/11.png'
import Rotate_img12 from '../img_new/our_service_inner/web_apps/12.png'
// import Tic_png from '../img/cropped-favicon.png'
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Img_Our_Service_Head_Tab from '../img_new/our_service_inner/our_service_inner_tab_newbg1.png'

const OurServiceRotateImg = () => {
  const images = [Rotate_img1, Rotate_img2 /* Add other images here */];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const rotateImages = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change 5000 to adjust the rotation interval in milliseconds

    return () => clearInterval(rotateImages);
  }, [images.length]);

  return (
    <div>
               <div className="container-fluid" id={'webapps'}>
    {/* <div className="row">
        <div className="col-lg-12">
            <h3 className="our_assets_head_inner_service" data-aos="zoom-in">Web application Development</h3>
        </div>
    </div> */}
     <div className={'marg_all_heading_about '}>
                <h2 className="about_ser_new_tags">Web application development</h2>
                        <span className="about_bor_bot_serv"></span>
                        </div>
    {/* for text row */}
    <div className="row">
    <div className="col-lg-12">
        <div className="web_apps_txt_card1">
    {/* <h3 className="explain_web_head1">Web Applications</h3> */}
    {/* <span className="bor_explai_head_web_title"></span>  */}
    <p className="ptag_explain_web_inner" data-aos="fade-up-right">Any business today irrespective of its industry has transformed the way they work by deploying web based applications in their day to day operations. Staff registers and lunch coupons of the 80s have been digitalized using web applications to 
    ensure efficiency and to reduce operational hassles</p> 
        <p className="ptag_explain_web_inner" data-aos="fade-up-right">iCore, a web application development company has a clear understanding of clients’ technological problems and is well versed in custom web application development to deliver web application development services 
        to its clients in several industries</p>

        <p className="ptag_explain_web_inner" data-aos="fade-up-right">We are privileged to employ some of the greatest minds who possess extensive expertise in building web applications for large enterprises and clients in the banking sector.  On combining our resources and the expertise of our employees, iCore has built proprietary lending solutions (iLending) and customized web applications which includes an online asset recovery tool, an incident resolution and a remote 
        incident management using Augmented Reality</p> 
        <p className="ptag_explain_web_inner" data-aos="fade-up-right">Also, our versatile team of developers has harnessed the potential of open source technologies in a most efficient way to deliver cost effective web applications to our clients. Some of the 
        open source technologies that we use to build web applications are</p> 
        <div className="makerow row">
            <div className="makerow">
            <div className="col-lg-4">
            <h6 className="txt_center_web_dev_inner media_size_webapps" data-aos="flip-left">Front-end: </h6>
        <ul className="ul_list_web_dev_text">
        
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right"><strong>AngularJS</strong></li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Angular&nbsp;Framework</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Ionic Framework</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">JAVASCRIPT</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">PHP</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right"><strong>ReactJS</strong></li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right"><strong>React Native</strong></li>
        </ul>
            </div>
            {/* second row */}
            <div className="col-lg-4">
            <h6 className="txt_center_web_dev_inner media_size_webapps" data-aos="flip-left">Back-end: </h6>
        <ul className="ul_list_web_dev_text">
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Java</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Spring framework</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Spring Boot</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Hibernate</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Node Js</li>
        </ul>
            </div>
            {/* end */}
            {/* third row */}
            <div className="col-lg-4">
            <h6 className="txt_center_web_dev_inner media_size_webapps" data-aos="flip-left">Database: </h6>
        <ul className="ul_list_web_dev_text">
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">MySQL</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">MSSQL</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Oracle RDBMS</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">SQLite</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">MongoDB</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">phpMyAdmin</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Sequel PRO</li>
            <li className="pad_inner_li_web_dev" data-aos="fade-up-right">Robomongo</li>
            
        </ul>
            </div></div>
            {/* end */}
            <Link to="web-application/#cms-dev" target="_top" className="our_service12read">Read More...</Link>
        </div>
      
        

</div>
        
    </div>

    </div>



    {/* for rotate images */}
    <div className="row">
    <div className="col-lg-12">
        <div className="row_after_rotate_img_service">
            <div className="rotate_img_main">
            <div className="empty_rotate_img_service"></div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img1} alt="Forest" className="rotate_img_service_web " />
                    </a>
                </div>

                <div className="empty_rotate_img_service"></div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img2} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="empty_rotate_img_service"></div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img3} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img6} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img4} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>

                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img5} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img7} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img8} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img9} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img10} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="empty_rotate_img_service"></div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img11} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="empty_rotate_img_service"></div>
                <div className="original_img_rotate_sevice">
                    <a target="_blank">
                        <img src={Rotate_img12} alt="Forest" className="rotate_img_service_web" />
                    </a>
                </div>
                <div className="empty_rotate_img_service"></div>
            </div>
        </div>
       
    </div>
</div>
   
</div>

               </div>
  );
};

export default OurServiceRotateImg;
