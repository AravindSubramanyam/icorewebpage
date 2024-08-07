import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Logo2 from '../img_new/header_logo/icore-software_new.11.png';
import './landing.css';
import Ourclient from '../our_client.jsx';
import logo1 from '../img_new/ourclients/gray_logos/1.png';
import logo3 from '../img_new/ourclients/gray_logos/3.png';
import logo4 from '../img_new/ourclients/gray_logos/alanweb.png';
import logo5 from '../img_new/ourclients/gray_logos/5.png';
import logo6 from '../img_new/ourclients/gray_logos/6.png';
import logo7 from '../img_new/ourclients/gray_logos/7.png';
import logo8 from '../img_new/ourclients/gray_logos/8.png';
import logo2 from '../img_new/ourclients/gray_logos/2.png';
import Tetsti_forte_logo from '../img_new/tetsti_forte_logo.png';
import Tetsti_scream_logo from '../img_new/tetsti_scream_logo.png';
import dbmanager from '../img_new/ourclients/gray_logos/dbmanager.png';
import medialabs from '../img_new/ourclients/gray_logos/medialabs.png';
import sitgulf from '../img_new/ourclients/gray_logos/sitgulf.png';
import web_experts from '../img_new/ourclients/gray_logos/web_experts.png';
import Footer from '../footer.jsx';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import mobile_frame from '../img_new/mobile_framenew.png';
import swiftios from '../img_new/technology_icons/swift.png';
import ionic from '../img_new/technology_icons/ionic.png';
import Kotlin from '../img_new/technology_icons/Kotlin.png';
import xamarin from '../img_new/technology_icons/xamarin.png';
import cordova from '../img_new/technology_icons/cordova.png';
import MObile_Videosnew from '../img_new/videos/iride_pass_video_first_new.gif';
import hybridapp from '../img_new/technology_icons/hybridapp.png';
import webapp from '../img_new/technology_icons/webapp.png';
import mobileappdesign from '../img_new/technology_icons/mobileappdesign.png';
import androidapp from '../img_new/technology_icons/androidapp.png';
import ipadapp from '../img_new/technology_icons/ipadapp.png';
import iphoneapp from '../img_new/technology_icons/iphoneapp.png';
import { Redirect } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import iride_case from '../img_new/videos/iride_case.png';
import catalina_case from '../img_new/videos/catalina_case.png';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-135688551-3');
ReactGA.pageview('/mobile-application-development');

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const MobileAppDevelopment = () => {
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState('+91');
    const [message, setMessage] = useState(null);
    const [emailsubcribe, setEmailSubscribe] = useState(null);
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        message: '',
        phone: '',
        emailsubcribe: '',
    });
    const [buttonText, setButtonText] = useState('Submit');
    const [thanksMSG, setThanksMSG] = useState('');
    const [isHiddenemailpopup, setIsHiddenEmailPopup] = useState(true);
    const [subcribtionbtn, setSubcribtionBtn] = useState('Subscribe');
    const [subThanksMsg, setSubThanksMsg] = useState('');

    useEffect(() => {
        const getSessionstorageEmail = sessionStorage.getItem('emailsubscriptionicore');
        const getLocalStroageSubMail = localStorage.getItem('sentMailforSubscription');

        if (getSessionstorageEmail) {
            setIsHiddenEmailPopup(true);
        } else if (getLocalStroageSubMail) {
            setTimeout(() => {
                setIsHiddenEmailPopup(true);
            }, 5000);
        } else {
            setTimeout(() => {
                setIsHiddenEmailPopup(false);
            }, 10000);
        }
    }, []);

    const handleClickSubscribeMail = () => {
        setIsHiddenEmailPopup(prevState => !prevState);
        // Perform additional actions if needed
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        let errorsCopy = { ...errors };

        switch (name) {
            case 'fullName':
                errorsCopy.fullName = value.length < 3 ? 'Name must be at least 3 characters long!' : '';
                setFullName(value);
                break;
            case 'email':
                errorsCopy.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
                setEmail(value);
                break;
            case 'emailsubcribe':
                errorsCopy.emailsubcribe = validEmailRegex.test(value) ? '' : 'Email is not valid!';
                setEmailSubscribe(value);
                break;
            case 'message':
                errorsCopy.message = value.length < 10 ? 'Message must be at least 10 characters long!' : '';
                setMessage(value);
                break;
            default:
                break;
        }

        setErrors(errorsCopy);
    };

    const handleOnChange = (value) => {
        let errorsCopy = { ...errors };
        errorsCopy.phone = value.length < 6 ? 'Please Enter Phone number' : '';
        setPhone(value);
        setErrors(errorsCopy);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let errorsCopy = { ...errors };

        if (!fullName) {
            errorsCopy.fullName = 'Please Enter Name';
        }
        if (phone === "+91") {
            errorsCopy.phone = 'Please Enter Phone Number';
        }
        if (!email) {
            errorsCopy.email = 'Please Enter Valid Email';
        }
        if (!message) {
            errorsCopy.message = 'Please Enter Message';
        }

        if (Object.values(errorsCopy).every(error => error === '')) {
            console.log('Valid Form');
            setButtonText('Loading....');

            const icoreContactLanding = {
                contactFirstName: fullName,
                contactLastName: "",
                contactEmail: email,
                contactPhone: "+" + phone,
                message: message,
                contactTitle: "Mobile Application Landing Page",
                companyName: "Mobile Application Development Page",
            };

            fetch('https://icoresoftwaresystems.com/sendenquiryrequest/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(icoreContactLanding)
            })
            .then(resp => resp.json())
            .then(() => {
                setButtonText('Submitted');
                setThanksMSG("Thank you we will contact you soon!");
            });
        } else {
            setErrors(errorsCopy);
        }
    };

    const handleSubmitemailSubscribe = (event) => {
        event.preventDefault();
        let errorsCopy = { ...errors };

        if (!emailsubcribe) {
            errorsCopy.emailsubcribe = 'Please Enter Valid Email';
            setErrors(errorsCopy);
        } else {
            const icoreMailSubscribe = {
                contactFirstName: null,
                contactLastName: null,
                contactEmail: emailsubcribe,
                contactPhone: null,
                message: "Subscribe to Our Newsletter",
                contactTitle: "Web Application Landing Page",
                companyName: "Email Sent by Newsletter Subscribe",
            };

            setSubcribtionBtn('Loading....');

            fetch('https://icoresoftwaresystems.com/sendenquiryrequest/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(icoreMailSubscribe)
            })
            .then(resp => {
                localStorage.setItem('sentMailforSubscription', JSON.stringify(icoreMailSubscribe));
                return resp.json();
            })
            .then(() => {
                setSubcribtionBtn('Subscribed');
                setSubThanksMsg("Thank you for your interest, we will contact you as soon as possible.");
                setTimeout(() => {
                    setIsHiddenEmailPopup(true);
                }, 10000);
            });
        }
    };

    return (
          <div>
         <Helmet>
                   <meta charSet="utf-8" />
                   <title>Mobile App Development Services | Mobile Application Development Company</title>
                   <meta name="description" content="iCore Software Systems, the best mobile app development company in texas, specializes in developing premier Mobile apps on using most up-to-date technology standards." />
                </Helmet>
           <div className={'container-fluid'}>
   <div className={'row'}>
      <br/>
      <div className={"col-lg-1"}></div>
      <div className={"col-lg-5"}>
         <img src={Logo2} className={'logoone_landing'} alt="logo image" />
      </div>
      <div className={"col-lg-5"}>
      <a className={"flt_rght"} href="tel:+91 73580 56001"  title="+91 73580 56001">
      <button className="Rectangle-8 " >Let's Connect &nbsp;&nbsp;
      <i class="fa fa-phone"></i>
      </button>
      </a>
      </div>
   </div>
</div>
<br/>
<div className={'bg_form_landing container-fluid'}>
   {/* second row */}
   <div className={'row pad-2'}>
      <div className={"col-lg-1"}></div>
      <div className={"col-lg-5 mt-2"}>
         <h2 className={'clr_white header_txt1'}>Best App Development Company.</h2>
         <p className={'clr_white ptag_txt1 text_align_just'}>
         Using the latest in technology standards, iCore Software Systems, the best mobile app development company in Singapore, specializes in creating premier digital platforms on the mobile that are hassle-free, secure, engaging, and intuitive. Whether you want to improve an existing app or launch a new one, our experts will customize your 
         mobile app, enabling seamless user experiences across all modern devices and platforms.
         </p>
         <p className={'clr_white ptag_txt1 text_align_just'}>
         Solve your everyday business issues with powerful Android and iOS applications, where we reinvent mobile experiences and customer engagement and satisfaction. The mobile offers several opportunities for brands to deliver value, especially to customers that need it the most. We proffer fast, effective, and flexible solutions, whatever the complexity of the project. Going beyond the mobiles and the tablets, we cover an entire range of gadgets, making next-gen mCommerce and retail solutions a reality by embedding hands-on machine learning and 
         image recognition technology to empower businesses, customers, and data exchange. 
         </p>
      </div>
      <div className={"col-lg-6"}  id={'quote'}>
         <div className="form-sec">
            <h4 className={"pad-1"}>Get a Free Consultation in Just 12 Hours</h4>
            <p className={'pad-2'}>We are here for your web development needs. Contact us for a FREE consultation or to learn more about our services.</p>
            {/* form start */}
            <form  noValidate onSubmit={this.handleSubmit}>
               <div className={'dis_flex'}>
                  <div className="form-group">
                     <label>Name:</label>
                     <input type="text" className="form-control cust_wid_double" id="name"  name='fullName' onChange={this.handleChange} noValidate placeholder="Enter Name"/>
                     {errors.fullName.length > 0 && 
                    <span className='errors_msg_custom'>{errors.fullName}</span>}
                  </div>
                  <div className="form-group">
                     <label>Phone Number:</label>
                     <ReactPhoneInput className="form-control cust_wid_double"  noValidate defaultCountry={"sg"} value={this.state.phone} onChange={this.handleOnChange} 
                     inputExtraProps={{
                     name: 'phone',
                     required: true,
                     autoFocus: true,
                     }}
                     />
                     {errors.phone.length > 0 && 
                    <span className='errors_msg_custom'>{errors.phone}</span>}
                  </div>
               </div>
               <div className={'dis_flex'}>
                  <div className="form-group">
                     <label>Email:</label>
                     <input type="email" className="form-control cust_wid_double" id="name" placeholder="Enter Email" name="email" onChange={this.handleChange} noValidate />
                     {errors.email.length > 0 && 
                      <span className='errors_msg_custom'>{errors.email}</span>}
                  </div>
               </div>
               <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" id="iq" rows="4" placeholder="Enter your Message" name='message' onChange={this.handleChange} noValidate></textarea>
                  {errors.message.length > 0 && 
                  <span className='errors_msg_custom'>{errors.message}</span>}
               </div>
                  <button className="Rectangle-8 dis_center"  disabled={errors.email||errors.fullName||errors.message||errors.phone||this.state.buttonText==="Loading...."||this.state.thanksMSG!=""}>{this.state.buttonText}</button>
                  <span className="success_form_word">{this.state.thanksMSG}</span>
            </form>
            {/* end */}
         </div>
      </div>
      {/* 
      <div className={"col-lg-1"}></div>
      */}
   </div>
</div><br/>
<div className={"row mt-2"}>
   <div className="row text-center">
      <h2><span className="ion-minus"></span>Our Technology<span className="ion-minus"></span></h2>
   </div>
   <div className={'bg_technology col-lg-12'}>
      <div className={'technology_card mr_tech row'}>
      <div className={'col-lg-1'}></div>
         <div className={'col-lg-1 fnt_si_tehno_mobile reactfnt_si_tehno'}><i title="React Native" className='fab fa-react'></i></div>
         <div className={'col-lg-1 fnt_si_tehno_mobile java_clr'}><i title="Java" className='fab fa-java'></i></div>
         <div className={'col-lg-1 fnt_si_tehno_mobile'}><img src={swiftios} alt="not-found" title="Swift-IOS"/></div>
         <div className={'col-lg-1 fnt_si_tehno_mobile'}><img src={ionic} alt="not-found" title="ionic"/></div>
         <div className={'col-lg-1 fnt_si_tehno_mobile'}><img src={Kotlin} alt="not-found" title="Kotlin"/></div>
         <div className={'col-lg-1 fnt_si_tehno_mobile'}><img src={xamarin} alt="not-found" title="xamarin"/></div>
         <div className={'col-lg-1 fnt_si_tehno_mobile'}><img src={cordova} alt="not-found" title="cordova"/></div>
         <div className={'col-lg-1'}></div>
      </div>
   </div>
</div>
<br/>
<div className="row">
   <div className="col-lg-1"></div>
   <div className="col-lg-5 pad_sec">
      <h2 className={'header_txt1'}>Avant-garde Mobile App Development in Singapore</h2>
      <p className={'ptag_txt1 text_align_just'}>
      iCore Software Systems brings some of the latest in technology, innovation and design thinking to develop ingenious mobile apps, especially for the region. Our experts come with the experience and expertise of developing robust and performance intensive mobile apps that will transform your ideas into stunning realities. With streamlined solutions and using agile development strategies, our mobile app development team 
      focuses on UI/UX designs that are powerful, and compelling just like your customers like them.
      </p>
      <p className={'ptag_txt1 text_align_just'}>
      Having written thousands of lines of code, we blend knowledge and skill to deliver world class mobile apps for a variety of platforms. Over the years, we have consistently emerged as one of the most promising mobile app development companies offering the best and extremely suitable solutions instrumental for your business growth. While helping you achieve your goals, we ensure that you are updated at every step of the project from ideation, 
      to conception, viability, development, deployment, and maintenance.
      </p>
      <br/>
      <Link target="_top" to="/mobile-application-development/#quote" className="dis_center"><button  className="grow_spin getfree_consult_btn dis_center">Get Free Consultation</button></Link>
   </div>
   <div className="col-lg-5">
      {/* 
      <div className="mobilebg_banner_mobile"> */}
      <div className="fisrtdiv_of_image_bg">
      <div className="mobilebg_banner_mobile">
      <img src={MObile_Videosnew} alt="not found" className="video_gif_sizes"/>
      </div>
      </div>
         {/* <img src={mobile_frame} alt="not-found" className="mob_framecss"/> */}
         
         {/* 
      </div>
      */}
   </div>
</div>
<br/><br/>
{/* <div className={"row"}>
   <div className="row text-center">
      <h2><span className="ion-minus"></span>Our launch sequence<span className="ion-minus"></span></h2>
      <div className={"col-lg-12"}>
         <img src={landing_agile} alt="not -found" className="imag_agile"/>
      </div>
   </div>
</div> */}<br/>
<div className="container">
   <div className="row text-center">
      <h2><span className="ion-minus"></span>Mobile App Development Services<span className="ion-minus"></span></h2>
   </div>
   <br/><br/><br/>
   <div className="row">
      <div className="col-lg-4 col-xs-12 col-md-4 col-sm-6">
         <div className="mobile_app_card">
            <figure className="figure_inside_card">
               <img src={iphoneapp} alt="iPhone app development"/>
            </figure>
            <h3 className="card_inside_h3">iPhone App Development</h3>
            <p className="text-center">iCore believes in exceeding customer expectations. We provide enterprise-grade iPhone App Development services to power all your mission-critical workflows. Our highly skilled developers provide solution design, delivery, 
            and post-deployment maintenance services, ensuring seamless operations.
            </p>
         </div>
      </div>
      <div className="col-lg-4 col-xs-12 col-md-4 col-sm-6">
         <div className="mobile_app_card">
            <figure className="figure_inside_card">
               <img src={ipadapp} alt="not-found"/>
            </figure>
            <h3 className="card_inside_h3">iPad App Development</h3>
            <p className="text-center">Expert iPad App Developers at iCore combine efficient code with a crisp and elegant UI to create apps, interactive media, and much more. 
            We verify the viability of your idea and build powerful codes, across a sleek UI.
            </p>
         </div>
      </div>
      <div className="col-lg-4 col-xs-12 col-md-4 col-sm-6">
         <div className="mobile_app_card">
            <figure className="figure_inside_card">
               <img src={androidapp}  alt="not-found"/>
            </figure>
            <h3 className="card_inside_h3">Android App Development</h3>
            <p className="text-center">Providing end-to-end Android App Development, we design, test, and maintain your apps specially created for the Android platform. While eliminating old and redundant codes, 
            we create revival plans to provide you with the best results.
            </p>
         </div>
      </div>
  
   {/* second row */}
   {/* <div className="row"> */}
      <div className="col-lg-4 col-xs-12 col-md-4 col-sm-6">
         <div className="mobile_app_card">
            <figure className="figure_inside_card">
               <img src={webapp}  alt="not-found"/>
            </figure>
            <h3 className="card_inside_h3">Responsive Web Development</h3>
            <p className="text-center">More than 85% of the adults are on the mobile phone, seeking services as quickly as possible. Therefore, iCore Software Systems bestows responsiveness, so that your 
            website is viewed by the customer comfortably and fits all orientation requirements.
            </p>
         </div>
      </div>
      <div className="col-lg-4 col-xs-12 col-md-4 col-sm-6">
         <div className="mobile_app_card">
            <figure className="figure_inside_card">
               <img src={mobileappdesign}  alt="not-found"/>
            </figure>
            <h3 className="card_inside_h3">Mobile App Design</h3>
            <p className="text-center">Reliable mobile app design services from iCore exponentially drive customer engagement through creative user interfaces and 
            visually compelling designs. We create mobile app ideas that are compatible across a range of platforms to amplify user engagement.
            </p>
         </div>
      </div>
      <div className="col-lg-4 col-xs-12 col-md-4 col-sm-6">
         <div className="mobile_app_card">
            <figure className="figure_inside_card">
               <img src={hybridapp} alt="not-found"/>
            </figure>
            <h3 className="card_inside_h3">Hybrid App Development</h3>
            <p className="text-center">Using the latest in local application features and capabilities iCore provides hybrid mobile app development services with cross-platform, and multi-platform compatibilities. As leading providers of hybrid apps, 
            we also ensure regular technology updates to facilitate seamless user experiences.
            </p>
         </div>
      </div>
      </div>
   {/* </div> */}
</div><br/>
<div className="row text-center">
   <br/>
   <h2><span className="ion-minus"></span>Clients with iCore<span className="ion-minus"></span></h2>
</div><br/><br/>
<div className={"row"}>
   <div className="our_client_redes">
      <ul className="logos-flex-container logo_1strow_mt_clie">
         <li className="logos-flex-item"> 
            <a className="hover_img_logo" ><img alt="not found" src={logo1}/></a>
         </li>
         <li className="logos-flex-item">
            <a className="hover_img_logo" ><img alt="not found" src={logo2}/></a>
         </li>
         <li className="logos-flex-item">
            <a className="hover_img_logo" ><img alt="not found" src={logo3}/></a>
         </li>
         <li className="logos-flex-item">
            <a className="hover_img_logo" ><img className="wid_65" alt="not found" src={logo4}/></a>
         </li>
      </ul>
   </div>
   {/* second row */}
   <div className="our_client_redes">
      <ul className="logos-flex-container logo_1strow_mt_clie">
         <li className="logos-flex-item"> 
            <a className="hover_img_logo" ><img alt="not found" src={dbmanager}/></a>
         </li>
         <li className="logos-flex-item">
            <a className="hover_img_logo" ><img alt="not found" src={medialabs}/></a>
         </li>
         <li className="logos-flex-item">
            <a className="hover_img_logo" ><img alt="not found" src={sitgulf}/></a>
         </li>
         <li className="logos-flex-item">
            <a className="hover_img_logo" ><img className="" alt="not found" src={web_experts}/></a>
         </li>
      </ul>
   </div>
   <div className="our_client_redes ">
      <ul className="logos-flex-container logo_1strow_mt_clie">
         <li className="logos-flex-item"> 
            <a className="hover_img_logo" ><img alt="not found" src={logo5}/></a>
         </li>
         <li className="logos-flex-item">
            <a className="hover_img_logo" ><img alt="not found" src={logo6}/></a>
         </li>
         <li className="logos-flex-item">
            <a className="hover_img_logo" ><img alt="not found" src={logo7}/></a>
         </li>
         <li className="logos-flex-item">
            <a className="hover_img_logo" ><img alt="not found" src={logo8}/></a>
         </li>
      </ul>
   </div>
</div>
<div>
<br/>
   <section id="testimonial">
      <div className="container">
      <div className="row text-center">
            <h2><span className="ion-minus"></span>Testimonials<span className="ion-minus"></span></h2>
         </div>
            <Carousel autoPlay>
            <div className="row">
            <div className="testimonial-part">
               <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                  <div className="comment-box">
                     <h4 className="testimonial_txt">Tim Adams </h4>
                     <span >Design Project Manager - Forte Trinity</span>
                     <p>"We needed a fix to a .NET ecommerce project. The guys at iCore were very helpful and attentive. They fixed the issue rapidly and were very cost effective. I would highly recommend iCore to anyone looking for an affective developer. We will be working with them again on future projects."</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                  <img className="img-circle" src={Tetsti_forte_logo}/>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="testimonial-part">
               <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 text-right">
                  <img className="img-circle" src={Tetsti_scream_logo} />
               </div>
               <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                  <div className="comment-box comd_box_ml">
                     <h4 className="testimonial_txt">Michael Purvis </h4>
                     <span >Director - Scream Marketing</span>
                     <p>"iCore software systems have recently started working on an SEO and website project for my client, I am very pleased with the results so far and they are a pleasure to work with and always easy to contact with any queries which is always one of the main things i find important when using a company. I would recommend using icore for SEO and Web Design."</p>
                  </div>
               </div>
            </div>
         </div>
  </Carousel>
  </div>
   </section>
</div>
<br/><br/>
<div className="row text-center">
   <h2><span className="ion-minus"></span>Case Studies <span className="ion-minus"></span></h2>
</div>
<br/><br/><br/>
<div className={"row mt_cus_case"}>
   <div className="col-lg-1"></div>
   <div className="col-lg-5">
      <img alt="not-found" src={iride_case} className={"casestudy_img"}/>
   </div>
   <div className="col-lg-5 pad_sec padding_case mob_mt_caseeeimg">
      <h4 className={'casestudy_header'}>iRide</h4>
      <p className={' ptag_txt1 text_align_just'}>
      Customized ride facilities are made available across Singapore, with iRide, a taxi app, meant to facilitate cab drivers find rides within the confines of the city. The user interface is simple, sleek, and lets drivers quickly navigate and register their taxi services on the app. 
      </p>
      <p className={' ptag_txt1 text_align_just'}>
      Booking in advance, vehicle and driver preferences, trip management,
       emergency options are some of the pivotal choices available on the app, among others. 
      </p>
      <br/>
      <Link target="_top" to="/mobile-application-development/#quote"> <button  className="grow_spin getfree_consult_btn">Get Free Consultation</button></Link>
   </div>
   <div className="col-lg-1"></div>
</div>
{/* case study two  */}<br/>
<div className={"row"}>
   <div className="col-lg-1"></div>
   <div className="col-lg-5 pad_sec padding_case">
      <h4 className={'casestudy_header'}>Catalina</h4>
      <p className={' ptag_txt1 text_align_just'}>
      An augmented reality app, Catalina Asset Recovery Form, assists in remote resolutions of hardware problems such as issues with the printer and PC. Primarily meant for service technicians, the app does not require the professional to be physically present at the problem location to execute fixes. If you are working on the smartphone platform, just download the app, open it, and then point it towards the problematic object or asset. 
      It automatically detects the issue, and the corresponding resolution attached to it appears for implementation.
      </p>
      <p className={' ptag_txt1 text_align_just'}>
      If the technician is unable to accomplish the job,
       he/she can share the app findings with their service facility for additional assistance.
      </p>
      <br/>
      <Link target="_top" to="/mobile-application-development/#quote"> <button  className="grow_spin getfree_consult_btn">Get Free Consultation</button></Link>
   </div>
   <div className="col-lg-5">
      <img  alt="not-found" src={catalina_case} className={"casestudy_img mob_mt_caseeeimg"}/>
   </div>
   <div className="col-lg-1"></div>
</div>
<br/><br/>
<Footer/>
{!this.state.isHiddenemailpopup &&
                    <div className="modal show model_popup_cssc">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content p-cusmodel">
            <div className="modal-header bornone">
            <button type="button" className="close" data-dismiss="modal" 
              aria-label="Close" onClick={this.clicksubscribmail}>
              <span aria-hidden="true">&times;</span>
              </button>
              <h5 className="modal-title fnt_27px">Subscribe to Our Newsletter</h5>
            </div>
            <div className="modal-body p-30per">
             <div className="row">
             <form  noValidate onSubmit={this.handleSubmitemailsubcribe}>
                <div className="col-lg-9">
                  <input type="email" className="form-control" id="name" placeholder="Enter Email" name="emailsubcribe" onChange={this.handleChange} noValidate />
                     {errors.emailsubcribe.length > 0 && 
                      <span className='errors_msg_custom flt_lft_msg'>{errors.emailsubcribe}</span>}
                </div>
                <div className="col-lg-3">
                <button type="submit" className="pad_css_subbutn btn btn-primary" disabled={errors.emailsubcribe||this.state.subThanksMSg!=""}>{this.state.subcribtionbtn} </button>
                </div>
                <div className="col-lg-12">
                <span className="success_form_word">{this.state.subThanksMSg}</span>
                </div>
                </form>
             </div>
            </div>
            
          </div>
        </div>
      </div>
}
        </div>
    );
};

export default MobileAppDevelopment;
