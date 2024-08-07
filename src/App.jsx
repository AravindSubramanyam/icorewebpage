import React, { useEffect } from 'react';
import './App.css';
import './css/plugins/helper.css';
import './style_new.scss';
import Home from './home.jsx';
import Header from './header.jsx';
import Swiper from './swiper_slider.jsx';
import Footer from './footer.jsx';
import Testimonial from './testimonial.jsx';
import Ourclient from './our_client.jsx';
import Port from './extra_port.jsx';
import About_Phone from './about_phone.jsx';
import About_new_two_img from './about_new_two_img.jsx';
import Our_capabilities from './our_capabilities.jsx';
import OurServiceInnerConnect from './our-service.jsx';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <About_new_two_img/>
      <About_Phone/>
      <Our_capabilities />
      <Port />
      <Swiper />
      <Testimonial />
      <Ourclient />
      <Footer />

    </div>
  );
};

export default App;
