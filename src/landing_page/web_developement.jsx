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
import { Redirect } from 'react-router-dom';
import ecommerce from '../img_new/technology_icons/ecommerce.png';
import ipadapp from '../img_new/technology_icons/ipadapp.png';
import web_app from '../img_new/technology_icons/web_app.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MObile_Videosnew from '../img_new/videos/iride_pass_video_first_new.gif';
import trintas_new_n from '../img_new/our_work_inner/new/trintas_new_n.png';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import ppf_web_case from '../img_new/videos/ppf_case_web.png';
import newfoil_case_web from '../img_new/videos/newfoil_case_web.png';
import axios from 'axios';
import ReactGA from 'react-ga';

const validEmailRegex = RegExp(
   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
 );
 

const WebDevelopmentLanding = () => {
  useEffect(() => {
    ReactGA.initialize('UA-135688551-2');
    ReactGA.pageview('/web-application-development');
  }, []);

  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState("+91");
  const [message, setMessage] = useState(null);
  const [errorsweb, setErrorsWeb] = useState({
    fullName: '',
    email: '',
    message: '',
    phone:'',
    emailsubcribe:'',
  });
  const [buttonText, setButtonText] = useState("Submit");
  const [thanksMSG, setThanksMSG] = useState("");
  const [isHiddenemailpopup, setIsHiddenEmailPopup] = useState(true);
  const [emailsubcribe, setEmailSubscribe] = useState(null);
  const [subcribtionbtn, setSubcribtionBtn] = useState("Subscribe");
  const [subThanksMSg, setSubThanksMSg] = useState("");
  
  useEffect(() => {
    const getSessionstorageemail = sessionStorage.getItem('emailsubscriptionicore');
    const getlocalstroagesubmail = localStorage.getItem('sentMailforSubscription');

    if (getSessionstorageemail) {
      setIsHiddenEmailPopup(true);
    } else if (getlocalstroagesubmail) {
      setTimeout(() => {
        setIsHiddenEmailPopup(true);
      }, 5000);
    } else {
      setTimeout(() => {
        setIsHiddenEmailPopup(false);
      }, 10000);
    }
  }, []);

  const clickSubscribeMail = () => {
    setIsHiddenEmailPopup(prevState => !prevState);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errorswebCopy = { ...errorsweb };

    switch (name) {
      case 'fullName': 
        errorswebCopy.fullName = value.length < 3 ? 'Name must be at least 3 characters long!' : '';
        break;
      case 'email': 
        errorswebCopy.email = value && validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'emailsubcribe': 
        errorswebCopy.emailsubcribe = value && validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'message': 
        errorswebCopy.message = value.length < 10 ? 'Message must be at least 10 characters long!' : '';
        break;
      default:
        break;
    }

    setErrorsWeb(errorswebCopy);
    
  };

  const handleOnChange = value => {
    let errorswebCopy = { ...errorsweb };
    errorswebCopy.phone = value.length < 6 ? 'Please Enter Phone number' : '';
    setPhone(value);
    setErrorsWeb(errorswebCopy);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ fullName, email, phone, message });

    let errorswebCopy = { ...errorsweb };
    if (!fullName) {
      errorswebCopy.fullName = 'Please Enter Name ';
    }
    if (phone === "+91") {
      errorswebCopy.phone = 'Please Enter Phone Number ';
    }
    if (!email) {
      errorswebCopy.email = 'Please Enter Valid Email ';
    }
    if (!message) {
      errorswebCopy.message = 'Please Enter Message ';
    }

    setErrorsWeb(errorswebCopy);

    if (!errorswebCopy.fullName && !errorswebCopy.phone && !errorswebCopy.email && !errorswebCopy.message) {

      console.log('Valid Form');
      const icoreContactLanding = {
        contactFirstName: fullName,
        contactLastName: "",
        contactEmail: email,
        contactPhone: "+" + phone,
        message: message,
        contactTitle: "Web Application Landing Page",
        companyName: "Web Application Development Page",
      };

      setButtonText('Loading....');

      fetch('https://icoresoftwaresystems.com/sendenquiryrequest/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       
          body: JSON.stringify(icoreContactLanding)
        }})
        .then(resp => resp.json())
        .then(() => {
          setButtonText('Submitted');
          setThanksMSG("Thank you for your interest, we will contact you as soon as possible.");
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          setButtonText('Submit');
        });
      }
    };
  
    const handleSubmitemailsubcribe = (event, value) => {
      event.preventDefault();
      let errorswebCopy = { ...errorsweb };
      if (!emailsubcribe) {
        errorswebCopy.emailsubcribe = 'Please Enter Valid Email ';
      } else {
        const icoreMailSubscribe = {
          contactFirstName: null,
          contactLastName: null,
          contactEmail: emailsubcribe,
          contactPhone: null,
          message: "Subscribe to Our Newsletter",
          contactTitle: "Web Application Landing Page",
          companyName: "Email Sent by News letter subscribe",
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
        .then(resp => resp.json())
        .then(() => {
          setSubcribtionBtn('Subscribed');
          setSubThanksMSg("Thank you for your interest, we will contact you as soon as possible.");
          setTimeout(() => {
            setIsHiddenEmailPopup(true);
          }, 10000);
        })
        .catch(error => {
          console.error('Error subscribing:', error);
          setSubcribtionBtn('Subscribe');
        });
      }
    };
  
    return (
         <div>
        <Helmet>
                  <meta charSet="utf-8" />
                  <title>Web Application Development Company in Texas | Custom Software Development Company</title>
                  <meta name="description" content="Our seasoned team of experts from Web Application Development Company in Texas provides you with a high-quality Web app in a short period of time." />
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
        <h2 className={'clr_white header_txt1'}>Jumpstart Your Business With Award-Winning Web Design & Development.</h2>
        <p className={'clr_white ptag_txt1 text_align_just'}>
        From ideation to execution, we offer award-winning web design and development services in Singapore. Our team of full-stack experts can deliver intuitive web experiences using technologies such as React, Node, Laravel, and more. iCore Software Systems 
        provides impactful and game-changing designs to build more than just a website. 
        </p>
        <p className={'clr_white ptag_txt1 text_align_just'}>
        Our highly accomplished team of experts always keep things realistic and create fully customized websites to take your business to the next level. We design extraordinary experiences with a potent combination 
        of creative ideas and intelligent insights to strengthen your brand’s competitive advantage.
        </p>
     </div>
     <div className={"col-lg-6"} id={'quote'}>
        <div className="form-sec">
           <h4 className={"pad-1"}>Get a Free Consultation in Just 12 Hours</h4>
           <p className={'pad-2'}>We are here for your web development needs. Contact us for a FREE consultation or to learn more about our services.</p>
           {/* form start */}
           <form  noValidate onSubmit={handleSubmit}>
              <div className={'dis_flex'}>
                 <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control cust_wid_double" id="name"  name='fullName' onChange={handleChange} noValidate placeholder="Enter Name"/>
                    {errorsweb.fullName.length > 0 && 
                   <span className='errors_msg_custom'>{errorsweb.fullName}</span>}
                 </div>
                 <div className="form-group">
                    <label>Phone Number:</label>
                    <ReactPhoneInput className="form-control cust_wid_double"  noValidate defaultCountry={"sg"} value={this.state.phone} onChange={handleOnChange} 
                    inputExtraProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                    }}
                    />
                    {errorsweb.phone.length > 0 && 
                   <span className='errors_msg_custom'>{errorsweb.phone}</span>}
                 </div>
              </div>
              <div className={'dis_flex'}>
                 <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control cust_wid_double" id="name" placeholder="Enter Email" name="email" onChange={handleChange} noValidate />
                    {errorsweb.email.length > 0 && 
                     <span className='errors_msg_custom'>{errorsweb.email}</span>}
                 </div>
              </div>
              <div className="form-group">
                 <label>Message</label>
                 <textarea className="form-control" id="iq" rows="4" placeholder="Enter your Message" name='message' onChange={handleChange} noValidate></textarea>
                 {errorsweb.message.length > 0 && 
                 <span className='errors_msg_custom'>{errorsweb.message}</span>}
              </div>
                 <button className="Rectangle-8 dis_center"  disabled={errorsweb.email||errorsweb.fullName||errorsweb.message||errorsweb.phone||this.state.buttonText==="Loading...."||this.state.thanksMSG!=""}>{this.state.buttonText}</button>
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
     <div className={'technology_card row'}>
        <div className="col-lg-1"></div>
        <div className={'fnt_si_tehno col-lg-1 reactfnt_si_tehno'}><i title="React" className='fab fa-react'></i></div>
        <div className={'fnt_si_tehno col-lg-1 angularfnt_si_tehno'}><i title="Angular" className='fab fa-angular'></i></div>
        <div className={'fnt_si_tehno col-lg-1 nodejs_clr'}><i title="Node-js" className='fab fa-node-js'></i></div>
        <div className={'fnt_si_tehno col-lg-1 java_clr'}><i title="Java" className='fab fa-java'></i></div>
        <div className={'fnt_si_tehno col-lg-1 html5_clr'}><i title="HTML5" className='fab fa-html5'></i></div>
        <div className={'fnt_si_tehno col-lg-1 css3_clr'}><i title="CSS3" className='fab fa-css3-alt'></i></div>
        <div className={'fnt_si_tehno col-lg-1 wordpress_clr'}><i title="Wordpress" className='fab fa-wordpress-simple'></i></div>
        <div className={'fnt_si_tehno col-lg-1 php_clr'}><i title="PHP" className='fab fa-php'></i></div>
        <div className={'fnt_si_tehno col-lg-1 joomla_clr'}><i title="Joomla" className='fab fa-joomla'></i></div>
        <div className={'fnt_si_tehno col-lg-1 drupal_clr'}><i title="Drupal" className="fab fa-drupal" aria-hidden="true"></i></div>
        <div className="col-lg-1"></div>
     </div>
  </div>
</div><br/>
<div className="row">
  <div className="col-lg-1"></div>
  <div className="col-lg-5">
     <img src={trintas_new_n} alt="not found" className="" style={{marginTop:'7%'}}/>
  </div>
  <div className="col-lg-5 pad_sec">
     <h2 className={'header_txt1'}>Best Web App Development Company.</h2>
     <p className={'ptag_txt1 text_align_just'}>
     Regardless of the complexity or size of the project, our experienced team of professionals provides you with high-quality web 
     application development using emerging technologies and proven strategies.
     </p>
     <p className={'ptag_txt1 text_align_just'}>
     As one of the best web app development company in Singapore, iCore Software Systems meets your every requirement, covering the entire development 
     lifecycle to deliver solutions that are future-proof, scalable, and globally recognized.
     </p>
     <p className={'ptag_txt1 text_align_just'}>
     For your web application development, we make sure that all the required information is collected, gauged, analyzed, and only then passed on to implementation, thus meeting quick turnaround times. Thereafter our post-deployment team takes over to ensure 
     seamless connectivity and hassle-free user experiences. With us, you can always set your sights high!
     </p><br/>
     <Link target="_top" to="/web-application-development/#quote" className="dis_center"><button  className="grow_spin getfree_consult_btn dis_center">Get Free Consultation</button></Link>
  </div>
  
</div>
<br/><br/><br/>
<div className="container">
  <div className="row text-center">
     <h2><span className="ion-minus"></span>Web App Development Services<span className="ion-minus"></span></h2>
  </div>
  <br/><br/><br/>
  <div className="row">
     <div className="col-lg-4 col-xs-12 col-md-4 col-sm-6">
        <div className="mobile_app_card">
           <figure className="figure_inside_card">
              <img src={web_app} alt="iPhone app development"/>
           </figure>
           <h3 className="card_inside_h3">Custom Web Application</h3>
           <p className="text-center">We understand the need to conceive user experiences and customize a future vision. That is why we crack some of the most complex web application development projects 
           leveraging state-of-the-art technologies such as APIs, multiple frameworks, and databases.
           </p>
        </div>
     </div>
     <div className="col-lg-4 col-xs-12 col-md-4 col-sm-6">
        <div className="mobile_app_card">
           <figure className="figure_inside_card">
              <img src={ipadapp} alt="not-found"/>
           </figure>
           <h3 className="card_inside_h3">CMS Development</h3>
           <p className="text-center">With proven industrial strength and reliability, we resolve your most complex content management issues with unique CMS solutions. We let you regain control 
           of your business through tailor-made CMS systems best suited to your business needs.
           </p>
        </div>
     </div>
     <div className="col-lg-4 col-xs-12 col-md-4 col-sm-6">
        <div className="mobile_app_card">
           <figure className="figure_inside_card">
              <img src={ecommerce}  alt="not-found"/>
           </figure>
           <h3 className="card_inside_h3">E-Commerce Solutions</h3>
           <p className="text-center">We build fully hosted and secure e-commerce solutions across unlimited bandwidths and multiple currencies. Specializing in single and multiple vendor e-commerce marketplace, our experts weave 
           commerce into your enterprise strategy to provide seamless customer experiences.
           </p>
        </div>
     </div>
  </div>
</div>
{/* <div className="row">
  <div className="col-lg-2"></div>
  <div className="col-md-9">
     <div className="col-lg-4">
        <div className="card_detailstops">
           <div className="img_achived">
              <img alt="not-found" src={Tetsti_forte_logo} />
           </div>
           <div className="sub_title">
              <h4 className="text-center">Top<br/>Developers in Texas</h4>
           </div>
           <div className="year_txtbg">
              <h1 className="text-center">2015</h1>
           </div>
        </div>
     </div>
     <div className="col-lg-4">
        <div className="card_detailstops">
           <div className="img_achived">
              <img alt="not-found" src={Tetsti_forte_logo} />
           </div>
           <div className="sub_title">
              <h4 className="text-center">Top<br/>Developers in Texas</h4>
           </div>
           <div className="year_txtbg">
              <h1 className="text-center">2016</h1>
           </div>
        </div>
     </div>
     <div className="col-lg-4">
        <div className="card_detailstops">
           <div className="img_achived">
              <img alt="not-found" src={Tetsti_forte_logo} />
           </div>
           <div className="sub_title">
              <h4 className="text-center">Top<br/>Developers in Texas</h4>
           </div>
           <div className="year_txtbg">
              <h1 className="text-center">2017</h1>
           </div>
        </div>
     </div>
  </div>
</div>
<br/><br/><br/>
<div className={"row"}>
  <div className="row text-center">
     <h2><span className="ion-minus"></span>Our launch sequence<span className="ion-minus"></span></h2>
     <div className={"col-lg-12"}>
        <img src={landing_agile} alt="not -found" className="imag_agile"/>
     </div>
  </div>
</div> */}<br/>
<div className="row text-center">
  <br/>
  <h2><span className="ion-minus"></span>Clients with iCore<span className="ion-minus"></span></h2>
</div><br/>
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
<div className={"row"}>
  {/* 
  <Testimonial/>
  */}<br/>
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
                 <img className="img-circle" src={Tetsti_forte_logo} />
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
<br/><br/><br/>
<div className="row text-center">
  <h2><span className="ion-minus"></span>Case Studies <span className="ion-minus"></span></h2>
</div>
<br/><br/><br/>
<div className={"row mt_cus_case"}>
  <div className="col-lg-1"></div>
  <div className="col-lg-5">
  <div></div>
     <img alt="not-found" src={ppf_web_case} className={"casestydy_boxshadow casestudy_img"}/>
  </div>
  <div className="col-lg-5 pad_sec padding_case mob_mt_caseeeimg">
     <h4 className={'casestudy_header'}>Payperfix.net</h4>
     <p className={' ptag_txt1 text_align_just'}>
     Collaborative project hiring platforms are gaining traction, especially in recent times. Companies today prefer hiring out workers who are professional, well-qualified, and economical – charging only for the task that they perform. Looking at the need to provide a lucrative, versatile, yet clear platform to hire employees for a particular project and duration, iCore Software Systems built an outsourcing market place where hirers can register and look for skills 
     and workers can seek projects to execute. The platform also accommodates simple, user-friendly signup and registration processes.
     </p>
     <p className={' ptag_txt1'}>
       <strong>Technology used :</strong> Angular JS for the front end and Java Spring boot for the back end.
     </p>
     <br/>
     <Link target="_top" to="/web-application-development/#quote"><button  className="grow_spin getfree_consult_btn">Get Free Consultation</button></Link>
  </div>
  <div className="col-lg-1"></div>
</div>
{/* case study two  */}<br/>
<div className={"row"}>
  <div className="col-lg-1"></div>
  <div className="col-lg-5 pad_sec padding_case">
     <h4 className={'casestudy_header'}>Newfoil.co.uk / Readygrass.co.uk</h4>
     <p className={' ptag_txt1 text_align_just'}>
     Responsive websites, including e-commerce sites can resolve all the pains of online shopping. The use of mobile devices has seen a stratospheric rise, and with its popularity in providing quick results, it would be a big disservice to any company if you did not bestow responsiveness to your website while resolving crucial gateway issues. While embedding several convenient payment methods into the platform along with smooth transaction processing and security, experts at iCore Software Systems took the initiative to even bequeath mobile responsiveness to ensure easy business 
     accessibility on a variety of devices and platforms coupled with enhanced safety, confidentiality, and reliability. 
     </p>
     <p className={' ptag_txt1'}>
        <strong>Technology used :</strong> Dot Net for e-commerce and Bootstrap for responsiveness
     </p>
     <br/>
     <Link target="_top" to="/web-application-development/#quote"><button  className="grow_spin getfree_consult_btn">Get Free Consultation</button></Link>
  </div>
  <div className="col-lg-5">
     <img  alt="not-found" src={newfoil_case_web}  className={"casestydy_boxshadow casestudy_img mob_mt_caseeeimg"}/>
  </div>
  <div className="col-lg-1"></div>
</div>
<br/>
<br/>
{/* <EmailclientSend/> */}
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
            <form  noValidate onSubmit={handleSubmitemailsubcribe}>
               <div className="col-lg-9">
                 <input type="email" className="form-control" id="name" placeholder="Enter Email" name="emailsubcribe" onChange={this.handleChange} noValidate />
                    {errorsweb.emailsubcribe.length > 0 && 
                     <span className='errors_msg_custom flt_lft_msg'>{errorsweb.emailsubcribe}</span>}
               </div>
               <div className="col-lg-3">
               <button type="submit" className="pad_css_subbutn btn btn-primary" disabled={errorsweb.emailsubcribe||this.state.subThanksMSg!=""}>{this.state.subcribtionbtn} </button>
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
};
       </div>
    );
  };
  
  export default WebDevelopmentLanding;
  