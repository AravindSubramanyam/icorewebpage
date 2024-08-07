import React, { useEffect } from 'react';
import './contact_us_inner.css';
// import $ from 'jquery';
import { Link } from 'react-router-dom';

const PopupContact = () => {
  useEffect(() => {
    // $(document).keydown(function (event) {
    //   if (event.keyCode == 123) { // Prevent F12
    //       return false;
    //   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
    //       return false;
    //   }
    // });
    // $(document).on("contextmenu", function (e) {        
    //   e.preventDefault();
    // });
  }, []);

  return (
    <div>
      <div className="container-fluid modal_popup_thansk">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="modal-content">
                <h2 className="modal_h2tag_fs">Thank you we will contact you soon!</h2>
                <Link to="/contact-us" className="btn_modal_popup"><span className="span_btn_link">Ok</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupContact;
