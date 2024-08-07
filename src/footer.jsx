import React, { useEffect } from 'react';
import $ from 'jquery';
import './home.css';
import Bing_img from './img_new/header_logo/bing_badge.png';
import Analytics_img from './img_new/header_logo/analytics_adword1.png';

const Footer = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('#scroll_footer_inner').fadeIn();
        } else {
          $('#scroll_footer_inner').fadeOut();
        }
      });
      $('#scroll_footer_inner').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
      });
    });

    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5c2ddf4b82491369baa04fb9/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div>
      <footer>
        <div className="container-fluid pad_cont_foot">
          <div className="makerow row">
            <div className="makerow col-lg-12">
              <div className=" col-lg-3">
                <div><h5 className="footer_head_tag">Follow Us</h5></div>
                <div className="social">
                  <a href="https://www.facebook.com/iCoreSoftOfficial/" target="_blank" data-toggle="tooltip" title="Facebook"><i className="fab fa-facebook"></i></a>
                  <a href="https://twitter.com/iCoreSoftOfficl" target="_blank" data-toggle="tooltip" title="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.instagram.com/icoresoftofficial/" target="_blank" data-toggle="tooltip" title="instagram"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/company/icore-software-systems-private-ltd/" target="_blank" data-toggle="tooltip" title="linkedin"><i className="fab fa-linkedin"></i></a>
                  <a href="https://wa.me/+917358056001" target="_blank" data-toggle="tooltip" title="Whatsapp"><i className="fab fa-whatsapp"></i></a>
                  <a href="https://www.behance.net/icoresoftwar" target="_blank" data-toggle="tooltip" title="Behance"><i className="fab fa-behance"></i></a>
                </div>
              </div>
              <div className="col-lg-3">
                <h5 className="footer_head_tag">Accreditations</h5>
                <ul>
                  <li className="footer_li"><img alt="not found" src={Analytics_img} className={'adword_img_wids'} /></li>
                  <li className="footer_li"><img alt="not found" src={Bing_img}className={'adword_img_wids'}/></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5 className="footer_head_tag">INDIA</h5>
                <ul>
                  <li className="footer_li"><i className="fa fa-location-arrow icons_color_cont"></i>iCore Software Systems Private Limited</li>
                  <li className="footer_li">No:65, 100 Feet Road</li>
                  <li className="footer_li">Ashok Nagar</li>
                  <li className="footer_li">Chennai-600083</li>
                  <li className="footer_li"><i className="fa fa-phone icons_color_cont"></i><a className="txt_contact_underline" href="tel:+91 73580 56001"> +91 73580 56001</a></li>
                  <li className="footer_li"><i className="fa fa-phone icons_color_cont"></i><a className="txt_contact_underline" href="tel:+91 44 42059777"> +91 (044) 42059777</a></li>
                  <li className="footer_li"><i className="fa fa-envelope icons_color_cont"></i><a className="txt_contact_underline" href="mailto:contact@icoresoftwaresystems.com">contact@icoresoftwaresystems.com</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5 className="footer_head_tag">USA</h5>
                <ul>
                  <li className={ 'footer_li'}><i className="fa fa-location-arrow icons_color_cont"></i>iCore Technologies, LLC</li>
                  <li className={ 'footer_li'}>12987 Allenwood Ave</li>
                  <li className={ 'footer_li'}>Frisco TX 75035</li>
                  <li className={ 'footer_li'}><i className="fa fa-phone icons_color_cont"></i><a className="txt_contact_underline" href="tel: +1469885-2249"> +1 (469) 885-2249 </a></li>
                  <li className={ 'footer_li'}><i className="fa fa-envelope icons_color_cont"></i><a className="txt_contact_underline" href="mailto:contact@icoretek.com"> &nbsp;contact@icoretek.com</a></li>
                  <br/>
                  <a className={ 'atag_footer_float_rght_inner'} id="scroll_footer_inner">
                    <button className="button_footer_get_in_touch"><i className="fa fa-angle-double-up " aria-hidden="true"></i></button>
                  </a>
                  <br/><br/>
                </ul>
              </div>
            </div>
          </div>
          <p className={ 'footer_copy_txt'}>&copy; 2020 iCore Software Systems Private Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
