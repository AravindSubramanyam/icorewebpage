import React, { useEffect } from 'react';
import './nav.css';

const Mailid = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="ctm_top_nav">
          <span><i className="fa fa-phone ctm_icons"></i>&nbsp;+91&nbsp;73580&nbsp;56001</span>&nbsp;&nbsp;&nbsp;
          <span><i className="fa fa-envelope ctm_icons"></i>&nbsp;contact@icoresoftwaresystems.com</span>&nbsp;&nbsp;&nbsp;
        </div>

    </div>
  );
};

export default Mailid;
