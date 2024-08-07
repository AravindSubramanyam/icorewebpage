import React from 'react';
import './our_work_inner.css';
import Header from '../header.jsx';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Iride_mob_driver from '../img_new/our_work_inner/new/iride_driver_2.png';
import Iride_mob_pass from '../img_new/our_work_inner/new/iride_pass_new.png';
import Itrack_mob from '../img_new/our_work_inner/new/itrack.png';
import Pks_mob from '../img_new/our_work_inner/new/pks_new.png';
import Catlina_new from '../img_new/our_work_inner/new/catlina_new1.png';
import Newfoil from '../img_new/our_work_inner/new/new_foil.png';
import Readycross from '../img_new/our_work_inner/new/readycross.png';
import AgileAdvantage from '../img_new/our_work_inner/new/agile_advantage.png';
import iCoretek_logo from '../img_new/our_work_inner/new/icpre_tek_new_logo1.png';
import Central_fans from '../img_new/our_work_inner/new/central_fans.png';
import Trintas_new_n from '../img_new/our_work_inner/new/trintas_new_n.png';
import iPortal from '../img_new/our_work_inner/new/iportal.png';
import Google_paly from '../img_new/our_work_inner/new/google_play1.png';
import Apple_paly from '../img_new/our_work_inner/new/apple_play1.png';
import ORM from '../img_new/our_work_inner/new/orm.png';
import today_contact from '../img_new/our_work_inner/new/tdycontact.png';
import ppfimage from '../img_new/videos/ppf_case_web.png';

function OurWorkInner() {
  const google_playbutnwork = () => {
    window.location.assign('https://play.google.com/store/apps/details?id=com.icore.apps.iride.driver');
  };

  const apple_playbutnwork = () => {
    window.location.assign('https://itunes.apple.com/us/app/iride-driver/id1326527505?mt=8');
  };

  const apple_playworkbutn_catalina = () => {
    window.location.assign('https://apps.apple.com/us/app/catalina-arf/id1217479015');
  };

  const google_playworkbutn_catalina = () => {
    window.location.assign('https://play.google.com/store/apps/details?id=com.trintas.catalinaarf');
  };
  return (
    <div>
      <Header />
      <div className="container-fluid ">
        <div className="row">
          <div className=" bg_our_work_inner1"></div>
        </div>

        {/* fourth sections Catalina*/}
        <div className="row">
          <div className={'marg_all_heading'}>
            <h2 className="about_ser_new_tags">iRide</h2>
            <span className="about_bor_bot_serv"></span>
          </div>
          <div className="mrg_bot_our_work_2sec ">
            <div className="col-lg-6">
              <img src={Iride_mob_driver} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt="" className="rgth_iride_img3" />
            </div>
            <div className="col-lg-6">
              <p className="left_iride_ptag1">As a Taxi booking app development company in Texas, iCore Software has emerged as a Uber-clone app development firm which has the following 2 modules:</p>
              <p className="left_iride_ptag1" data-aos="fade-up-left"><strong>iRide Driver</strong> is an online transportation application that allows the cab drivers to find rides in the city. This application is installed in the smartphone and has an easy to use UI that enables the cab drivers to register their vehicle and find rides. The functionalities of this application include finding nearby rides, fixing costs (with minimal variation from base costs), ride routing, ride tracking etc. iRide Driver is available for Android and iOS platforms</p>
              <p className="left_iride_ptag1" data-aos="fade-up-right"><strong>iRide Passenger</strong> is the online taxi riding service. This app is used at the passenger end of the iRide taxi service. Passengers looking for taxis in the vicinity can find taxis through this app. iRidePassenger has features of advanced booking of taxis for a future date, emergency options, trip management, driver and vehicle preferences etc</p>
              <div className="total_btn left_iride_ptag1">
                <img src={Google_paly} onClick={google_playbutnwork} alt="not" className={'goole_play_cssbutn'} />
                <img src={Apple_paly} alt="not" onClick={apple_playbutnwork} className={'goole_play_cssbutn'} />
              </div>
            </div>
          </div>
        </div>
         {/* end fourth */} {/* third sections iRide Driver*/}
    {/* <div className="row">
    
        <div className=" mrg_bot_our_work_2sec">
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-right">iRide Passenger is the online taxi riding service. This app is used at the passenger end of the iRide taxi service. Passengers looking for taxis in the vicinity can find taxis through this app. iRidePassenger has features of advanced booking of taxis for a future date, emergency options, trip management, driver and vehicle preferences etc</p>
                <div className="total_btn left_iride_ptag1">
                        
                        <img src={Google_paly} onClick={this.google_playbutnwork.bind(this)} alt="not" className={'goole_play_cssbutn'}/>
                       
                        
                        <img src={Apple_paly} alt="not" onClick={this.apple_playbutnwork.bind(this)} className={'goole_play_cssbutn'}/>
                
                </div> 
            </div>
            <div className="col-lg-6">
                <img src={Iride_mob_pass} data-aos="fade-up-left" alt="" className="rgth_iride_img2" />
            </div>
        </div>
    </div> */}
    {/* end third */} {/* extra projects demo */} {/* fourth sections Catalina*/}
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">iPortal</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec ">
          
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-left">This application is a resume storage and retrieval portal which is used for recruitment. iPortal is a resume management application that is used by prominent recruitment and US IT staffing companies. This portal has features to store bulk resumes, retrieving profiles from the resume pool using advanced filtering options, sending bulk mails to the candidates. It is built with all sorts of resume management functionalities for smooth functioning of the recruitment industry</p>

                <a href="http://iportal-test.icoretek.com/index.php?m=home" className="link_apps_our_work1">Go To : <span className="under_link_1">iPortal</span></a>
            </div>
            <div className="col-lg-6">
                <img src={iPortal} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt="" className="rgth_iride_imgiportal" />
            </div>
        </div>
    </div>
    
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">Catalina augmented reality app</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec ">
            <div className="col-lg-6">
                <img src={Catlina_new} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt="" className="rgth_iride_imgcatalina" />
            </div>
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-left">iCore has built an intelligent Augmented Reality application- Catalina ARF (Asset Recovery Form) for Trintas’ remote issue resolution of Assets (Printers and PCs) issues. This application helps the service technicians to resolve issues without having to transport the assets to the service facility. This application is pre-coded with the various assets’ or peripherals’ issues that can arise and its corresponding resolutions based on legacy documentations and experience
This application is installed in the smartphones of the service technicians. On pointing the camera interface of the app towards the asset, it provides numerous issue-related options and resolutions on the screen. Also, the screen can be shared with the service technicians back at the service facility to help in issue resolution on site.</p>
                <p className="left_iride_ptag1">iCore is planning to promote this Augmented Reality app with customizations and introduce this to the industry as an independent product for other customers
</p>
                {/* <div className="total_btn left_iride_ptag1">
                        
                        <img src={Google_paly} onClick={this.google_playbutnwork.bind(this)} alt="not" className={'goole_play_cssbutn'}/>
                       
                        
                        <img src={Apple_paly} alt="not" onClick={this.apple_playbutnwork.bind(this)} className={'goole_play_cssbutn'}/>
                
                </div>  */}
                 <div className="total_btn left_iride_ptag1">
                 <img src={Google_paly} onClick={google_playworkbutn_catalina} alt="not" className={'goole_play_cssbutn'}/>
             
              
             <img src={Apple_paly} alt="not" onClick={apple_playworkbutn_catalina} className={'goole_play_cssbutn'}/>
                         {/* <a href="https://itunes.apple.com/us/app/catalina-arf/id1217479015?mt=8">
                     <div class="group_btn_ibra" >
                    <i class="fa group_btn_ibra_icon fa-apple fa-3x pull-left" aria-hidden="true"></i>
                    
                    <span class="btn-caption">App Store</span>
                   
                </div></a> */}
               
                {/* <div class="group_btn_ibra padd_rite">
                <a href=" https://play.google.com/store/apps/details?id=com.trintas.catalinaarf">
                    <i class="fab group_btn_ibra_icon fa-google-play fa-3x pull-left" aria-hidden="true"></i>
                  
                    <span class="btn-caption">Google Play</span>
                    </a> </div> */}
                
                </div> 
            </div>

        </div>
    </div>
    {/* end fourth */} {/* third sections iRide Driver*/}
    <div className="row" id={ 'AR_ourwork'}>
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">Trintas – Admin module</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec">
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-right">The Admin module of Catalina ARF app has various salient features that ensures user-friendliness of the AR app for the customers who want their assets’ (Computer peripherals’) issues to be resolved. The list of stores that has the option to service the assets of custom-ers can be managed through this module. Moreover, the admin module has the facility to direct the customers to the appropriate FSVs (Field Service Vendors) who would be in a better position to resolve their issues. Monitoring the performances of the technicians, collecting the surveys and feedbacks of respective stores and viewing the number of tickets that has been raised as well as the demographic details about the technicians who have created tickets for the repaired devices can also be managed through this admin module. Yet another feature provided by this module is to generate the 
                reports over a particular timeline in which the technicians’ activities have happened.</p>
                

                <a href="http://arfapp.trintas.com:8081/trintas-usermngmt/ui/#/" className="link_apps_our_work1">Go To : <span className="under_link_1">Trintas – Augmented Reality app</span></a>
            </div>
            <div className="col-lg-6">
                <img src={Trintas_new_n} data-aos="fade-up-left" alt="" className="rgth_iride_img11" />
            </div>
        </div>
    </div>
    {/* end third */} {/* fourth sections Itrack*/}
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">iTrack</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec">
            <div className="col-lg-6">
                <img src={Itrack_mob} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt="" className="rgth_iride_img3" />
            </div>
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-left">iTrack is an incident management tool built by iCore Software Systems for effective management of issues or maintenance tasks arising in a company. Issues arising from clients or from internal stakeholders are populated in this iTrack tool. These issues are assigned to 
                the concerned technician or developer to come up with a resolution. It can be used to track the issue status, the applied resolution, the task completion time or any other updates regarding the issue. 
                The status of the issue is communicated to the concerned client through this application. iTrack has also the ability to perform as a PMS (Project Management System) by offering the client the provision to assign and report issues to the concerned developer who is responsible to 
                resolve the issues on behalf of the service providing company.</p>
                <a href="http://issuetracker.icoretek.com/login_page.php" className="link_apps_our_work1">Go To : <span className="under_link_1">iTrack</span></a>
            </div>

        </div>
    </div>
    {/* end fourth */} {/* fifth sections Trintas*/}
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">PKS – Persistent knowledge solutions</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec">
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-right">Persistent Knowledge Solutions is a recruitment and staffing company. They approached iCore Software Systems to build an interactive website for them with upgrades and new designs. On requirement gathering from PKS we analysed the functionalities and designs of the existing website. Based on our findings, we upgraded the existing website to a new interactive website as per client's specifications with minimal costing</p>
                {/*
                <p className="left_iride_ptag1" data-aos="fade-up-right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
                <p className="left_iride_ptag1" data-aos="fade-up-right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p> */}
                <a href="http://132.148.82.240:8080/pks/#/home" className="link_apps_our_work1">Go To : <span className="under_link_1">Persistent Knowledge Solutions</span></a>
            </div>
            <div className="col-lg-6">
                <img src={Pks_mob} data-aos="zoom-out-left" alt="" className="rgth_iride_img5" />
            </div>
        </div>
    </div>
    {/* end fifth */} {/* fourth sections Itrack*/}
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">iCore Technologies LLC</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec">
            <div className="col-lg-6">
                <img src={iCoretek_logo} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt="" className="rgth_iride_imgicore" />
            </div>
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-left">iCore Software Systems has designed and developed multiple applications and websites to iCoretek which operates out of the US. We have developed eCommerce websites, mobile applications and numerous web applications for iCoretek. Apart from this, we have also assisted in IT staffing and recruitment activities for clients of iCoretek</p>
               
                <a href="http://website.icoretek.com/" className="link_apps_our_work1">Go To : <span className="under_link_1">iCore Technologies LLC</span></a>
            </div>

        </div>
    </div>
    {/* end fourth */}
    {/* end fourth */} {/* fifth sections Trintas*/}
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">Readygrass, UK</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec">
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-right">Ready Grass, UK is into the business of providing artificial grass to customers through its e-commerce website and is one of the biggest suppliers and stockists of artificial grass in UK. iCore rectified a payment gateway (Secure Trading) issue in this website that has been developed in ASP.NET earlier by the client. iCore’s experience and expertise in Dot NET enabled our firm to rectify this issue which seemed pretty complex to the stakeholders of the website. This project is an example of our capability in Dot NET and also our ability to understand the core issues in Dot NET websites and the programming knowledge to resolve such problems faced by website admins who have their portals in Dot NET technology. We at iCore received many enquiries for developing 
                Dot NET websites as clients understood our readiness to handle Dot NET projects with ease.</p>
                {/*
                <p className="left_iride_ptag1" data-aos="fade-up-right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
                <p className="left_iride_ptag1" data-aos="fade-up-right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p> */}
                <a href="https://readygrass.co.uk/" className="link_apps_our_work1">Go To : <span className="under_link_1">Readygrass, UK</span></a>
            </div>
            <div className="col-lg-6">
                <img src={Readycross} data-aos="zoom-out-left" alt="" className="rgth_iride_img5" />
            </div>
        </div>
    </div>
    {/* end fifth */} {/* fourth sections Itrack*/}
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">ORM (Online Reputation Management) plugin</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec" >
            <div className="col-lg-6">
                <img src={ORM} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt="" className="rgth_iride_imgicore" />
            </div>
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-left">This project has 2 parts. One part of this ORM(Online Reputation Management) plugin will grab reviews directly from the review sites word for word and would automatically post them in a section wherever the company / web admin decides to put them. Second part of the plugin is soliciting reviews. That's where the landing page comes in. Landing page would just have a form on one 
                side and a result of the form submitted on the other side. The form fields would consist of First Name / Last Name and Review box where they can write their review. There should also be a star rating up to 5 stars. After they leave the review the next page would have a button where they can copy what they wrote and buttons to take them to the review sites so they can post what they wrote.</p>
               
                {/* <a href="http://website.icoretek.com/" className="link_apps_our_work1">Go To : <span className="under_link_1">iCore Technologies LLC</span></a> */}
            </div>

        </div>
    </div>
    {/* end fourth */} {/* fifth sections Trintas*/}
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">Newfoil, UK</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec">
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-right">Purpose of this project is to make this website completely responsive and iCore did it successfully with the help of its inhouse Front-end team. We at iCore used Bootstrap technology to make the website compatible to all devices including Desktops, iPads and Mobile phones as well. We worked on this project by following the original styles that prevailed before in the desktop version and completed the expected tasks by adhering strictly to the guidelines and timelines dictated by the client with a very positive feedback provided by them at the end of the engagement. Client for this project was thoroughly satisfied since they 
                did not come up with even a single bug or correction when we delivered the work to them.</p>
                {/*
                <p className="left_iride_ptag1" data-aos="fade-up-right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
                <p className="left_iride_ptag1" data-aos="fade-up-right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p> */}
                <a href="https://www.newfoil.co.uk/" className="link_apps_our_work1">Go To : <span className="under_link_1">Newfoil, UK</span></a>
            </div>
            <div className="col-lg-6">
                <img src={Newfoil} data-aos="zoom-out-left" alt="" className="rgth_iride_img5" />
            </div>
        </div>
    </div>
    {/* end fifth */} {/* fourth sections Itrack*/}
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">Agile Advantages, USA</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec" >
            <div className="col-lg-6">
                <img src={AgileAdvantage} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt="" className="rgth_iride_imgicore" />
            </div>
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-left">This is a website design and development project that we did for an Agile Training client in USA. We handled the end-to-end design and development aspects for this project, and we completed this successfully as per the requirements of the client. As a CMS (Content Management System) website built using latest technology of WordPress, it has 5 main pages with many subpages as well. The admin of this website will be able to mention few details about the Agile Trainer in the About us page. In the Advisory page of the website, the admin explains about the Key Advisory services offered to the trainees. Candidates who would like to avail the training services can register and choose from various types of Agile methodology training provided by the trainer in the Training page. iCore completed this project within the 
                stipulated deadline fixed by the client who was satisfied with our programmers’ performance in the job.</p>
               
                <a href="https://agileadvantages.com/" className="link_apps_our_work1">Go To : <span className="under_link_1">Agile Advantages, USA</span></a>
            </div>

        </div>
    </div>
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">Central Fans, UK</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec">
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-right">This is one of iCore’s latest projects developed in Java. The client for this project is providing industrial fans to commercial customers in UK. Purpose of this project is to enable the user to select the particular fan based upon the Volume and Pressure entered in the front end of this Fan Selector module and also to view the performance graph and performance data of the selected particular fan. Motor data like Motor Power, Full Load speed, Full Load current, Starting Current and Starting Method are displayed along with the Performance data like Required Speed, Output Velocity and Absorbed Power when the user wants to know the Performance data of the selected industrial fan. This project is an example for iCore’s capability to produce user-friendly Front-end and also
                 ability to produce a back-end by paying more attention to details.</p>
                {/*
                <p className="left_iride_ptag1" data-aos="fade-up-right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
                <p className="left_iride_ptag1" data-aos="fade-up-right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p> */}
                {/* <a href="https://www.newfoil.co.uk/" className="link_apps_our_work1">Go To : <span className="under_link_1">Newfoil, UK</span></a> */}
            </div>
            <div className="col-lg-6">
                <img src={Central_fans} data-aos="zoom-out-left" alt="" className="rgth_iride_img5" />
            </div>
        </div>
    </div>
    {/* ppf our work*/}
    <div className="row">
    <div className={ 'marg_all_heading'}>
        <h2 className="about_ser_new_tags">Payperfix.net</h2>
        <span className="about_bor_bot_serv"></span>
    </div>
        <div className=" mrg_bot_our_work_2sec" >
            <div className="col-lg-6">
                <img src={ppfimage} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt="" className="pph_omgwid rgth_iride_imgicore" />
            </div>
            <div className="col-lg-6">

                <p className="left_iride_ptag1" data-aos="fade-up-left">Collaborative project hiring platforms are gaining traction, especially in recent times. Companies today prefer hiring out workers who are professional, well-qualified, and economical – charging only for the task that they perform. Looking at the need to provide a lucrative, versatile, yet clear platform to hire employees for a particular project and duration, iCore Software Systems built an outsourcing market place where hirers can register and look for skills and workers can seek projects to execute. 
                The platform also accommodates simple, user-friendly signup and registration processes.</p>
               
                <a href="http://payperfix.net/" className="link_apps_our_work1">Go To : <span className="under_link_1">Payperfix.net</span></a>
            </div>

        </div>
    </div>
</div><br/>
            
            <div className="today_contact">
            <img id="img_logo" alt="not found" src={today_contact}/>
            <h3 className="chk">Ready For Your Next IT Project?</h3>
            <p className="tdy_p">Collaborate With Us You Will Be Satisfied</p>
            <Link to="/contact-us"  target="_top">
            <button type="button" className="btn btn-primary btn-sm" id="tdy_button">Contact Us Today</button></Link>
            </div>
</div>
  
);
};

export default OurWorkInner;