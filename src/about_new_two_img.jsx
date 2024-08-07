import React, { useEffect } from 'react';
import './about_new_two_img.css';

const AboutNewTwoImg = () => {
  useEffect(() => {
    // componentDidMount logic goes here
  }, []);

  return (
    <div>
      {/* technologies */}
      <div className="row">
        <div className="bg_technology col-lg-12">
          <div className="technology_card row">
            <div className="fnt_si_tehno col-lg-1 reactfnt_si_tehno"><i title="React" className="fab fa-react"></i></div>
            <div className="fnt_si_tehno col-lg-1 angularfnt_si_tehno"><i title="Angular" className="fab fa-angular"></i></div>
            <div className="fnt_si_tehno col-lg-1 nodejs_clr"><i title="Node-js" className="fab fa-node-js"></i></div>
            <div className="fnt_si_tehno col-lg-1 java_clr"><i title="Java" className="fab fa-java"></i></div>
            <div className="fnt_si_tehno col-lg-1 html5_clr"><i title="HTML5" className="fab fa-html5"></i></div>
            <div className="fnt_si_tehno col-lg-1 css3_clr"><i title="CSS3" className="fab fa-css3-alt"></i></div>
            <div className="fnt_si_tehno col-lg-1 wordpress_clr"><i title="Wordpress" className="fab fa-wordpress-simple"></i></div>
            <div className="fnt_si_tehno col-lg-1 php_clr"><i title="PHP" className="fab fa-php"></i></div>
            <div className="fnt_si_tehno col-lg-1 joomla_clr"><i title="Joomla" className="fab fa-joomla"></i></div>
            <div className="fnt_si_tehno col-lg-1 drupal_clr"><i title="Drupal" className="fab fa-drupal" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row">
          <div className="col-lg-12">
            <div className="marg_all_heading">
              <h2 className="about_ser_new_tags">Who we are ?</h2>
              <span className="about_bor_bot_serv"></span>
            </div>
            <p className="p_tag_new_about" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">We are a technology-driven web and mobile application development company in Texas with an outstanding reputation for solving clients’ problems and providing best-in-class technology solutions through our service verticals which enable our clients’ businesses to continuously adapt to variable business environments. As a UI / UX development company based in Texas,
              we are also instrumental in effectively streamlining enterprise-level business processes and reducing costs thereby ensuring smooth operations of clients’ businesses for increased revenues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNewTwoImg;
