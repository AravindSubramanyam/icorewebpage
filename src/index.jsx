import React from 'react';
import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
// import '../node_modules/font-awesome/css/font-awesome.min.css';

import './css/fontawesome-free-5.11.2-web/css/all.css';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header.jsx';
import Color from './color_bg.jsx';
import About_Us_Inner from './about_us_pages/about_us_inner.jsx';
import Our_Service_Inner from './our_service_page/our_service_inner.jsx';
import Our_Service_Inner_Connect from './our-service.jsx';
import About_Us from './about-us.jsx';
import Our_work_Inner_Connect from './our-work.jsx';
import Contact_us_inner_connect from './contact-us.jsx';
import Popup_contact from './contact_us_page/thankyou.jsx';
import PageNotFound from './notfoundpage.jsx';
import Blogs from './blogs.jsx';
import Blogs1 from './blogs1.jsx';
import Blogs2 from './blogs2.jsx';
import Blogs3 from './blogs3.jsx';
import Blogs4 from './blogs4.jsx';
import Blogs5 from './blogs5.jsx';
import Blogs6 from './blogs6.jsx';
import Blogs7 from './blogs7.jsx';
import Blogs8 from './blogs8.jsx';
import Blogs9 from './blogs9.jsx';
import Blogsten from './blogs10.jsx';
import Blogs11 from './blogs11.jsx';
import Blogs12 from './blogs12.jsx';
import Blogs13 from './blogs13.jsx';
import Blogs14 from './blogs14.jsx';
import Webdesign_and_developments from './our_service_drop/web-design.jsx';
import Mobile_and_developments from './our_service_drop/mobile_apps_drop.jsx';
import Ourniche_and_developments from './our_service_drop/our_niche.jsx';
import digital_and_developments from './our_service_drop/digital_mark.jsx';
import Career from './careers.jsx';
import { render } from "react-dom";
import Web_developement_landing from './landing_page/web_developement.jsx';
import Mobile_app_Development from './landing_page/mobile_development.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router basename={process.env.REACT_APP_ROUTER_BASE || ''}>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path="/header" element={<Header />} />
        <Route path="/about-Us" element={<About_Us />} />
        <Route path="/color_bg" element={<Color />} />
        <Route path="/our-work" element={<Our_work_Inner_Connect />} />
        <Route path="/our-service" element={<Our_Service_Inner_Connect />} />
        <Route path="/contact-us" element={<Contact_us_inner_connect />} />
        <Route path="/thankyou" element={<Popup_contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/web-application-development-using-java" element={<Blogs1 />} />
        <Route path="/blogs/mobile-application-development-using-ionic-framework" element={<Blogs2 />} />
        <Route path="/blogs/definition-of-augmented-reality-and-how-does-it-work" element={<Blogs3 />} />
        <Route path="/blogs/how-can-the-best-UX-UI-designs-influence-your-business" element={<Blogs4 />} />
        <Route path="/blogs/how-a-taxi-booking-app-can-improve-your-business" element={<Blogs5 />} />
        <Route path="/blogs/the-definition-of-online-reputation-management" element={<Blogs6 />} />
        <Route path="/blogs/differences-between-UX-and-UI-design" element={<Blogs7 />} />
        <Route path="/blogs/how-to-preserve-your-brand-online-in-2020-with-reputation-management-software" element={<Blogs8 />} />
        <Route path="/blogs/the-most-trending-technology-stacks-of-the-year" element={<Blogs9 />} />
        <Route path="/blogs/the-importance-of-quality-assurance-and-testing-in-software-development" element={<Blogsten />} />
        <Route path="/blogs/E-Commerce-Augmented-Reality-App-in-Texas" element={<Blogs11 />} />
        <Route path="/blogs/how-to-protect-WordPress-website-from-hackers" element={<Blogs12 />} />
        <Route path="/blogs/how-to-make-your-WordPress-URL-SEO-Friendly" element={<Blogs13 />} />
        <Route path="/blogs/10-Ways-to-Speed-up-WordPress-Performance" element={<Blogs14 />} />
        <Route path="/web-application-development-company" element={<Webdesign_and_developments />} />
        <Route path="/mobile-application-development-company" element={<Mobile_and_developments />} />
        <Route path="/our-niche" element={<Ourniche_and_developments />} />
        <Route path="/digital-marketing" element={<digital_and_developments />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/web-application-development" element={<Web_developement_landing />} />
        <Route path="/mobile-application-development" element={<Mobile_app_Development />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
);

serviceWorker.unregister();
