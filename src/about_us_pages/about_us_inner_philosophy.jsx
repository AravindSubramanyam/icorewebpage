import React, { useEffect } from 'react';
import './about_us_inner_philosophy.css';
// import $ from 'jquery'; // Not needed in functional component
// import AOS from 'aos'; // Not needed in functional component
import Collapsible from 'react-collapsible';

const AboutUsInnerPhilosophy = () => {
  useEffect(() => {
    // Add any side effects or cleanup needed when the component mounts here
  }, []);

  return (
    <div>
      {/* header */}
      <div className={'marg_all_heading_about'}>
        <h2 className="about_ser_new_tags">Our Business Principles</h2>
        <span className="about_bor_bot_serv"></span>
      </div>

      <div className="container-fulid">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-8">
            <Collapsible className={'collapsibleforabout'} trigger={<h3 className={'txt_bor_align_about_inner1'}>Value Addition And Value Proposition</h3>}>
              <p>Fulfill your information technology requirements in just a short period of time with iCore Software Systems.  As a leading technology company, we endeavor to provide customizable need-based solutions to our customers while achieving quick turnaround times and speedy go-to-market. We use high levels of empathy and workmanship towards accomplishing every solution intelligently while offering relevant and ample value addition along with our deliveries.</p>
            </Collapsible>
          </div>
        </div>
        {/* Repeat other collapsible sections similarly */}
      </div>
    </div>
  );
};

export default AboutUsInnerPhilosophy;
