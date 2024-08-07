import React, { useEffect } from 'react';
import './testimonial.css';
import './home.css';
import $ from 'jquery';
import 'slick-carousel';
// import Testimonial_User from './img_new/testimonial_user.png';
import Tetsti_forte_logo from './img_new/tetsti_forte_logo.png';
import Tetsti_scream_logo from './img_new/tetsti_scream_logo.png';

const Testimonial = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".testimonial-carousel").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: $(".testimonial-carousel-controls .prev"),
        nextArrow: $(".testimonial-carousel-controls .next")
      });
    });
  }, []);

  return (
    <div>
      <section className="quote-area bg-overlay overlay-color mrg_top_testi_header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className={'marg_all_heading'}>
                <h2 className="about_ser_new_tags text_insideof_css">Testimonials</h2>
                <span className="about_bor_bot_serv"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="b-example hgt_testi">
          <section className="testimonials py-5 text-white px-1 px-md-5 margin-top-xl">
            <div className="container">
              <div className="row justify-content-center"> {/* Centering the slider */}
                <div className="col-md-offset-2 col-md-8">
                  <div className="carousel-controls testimonial-carousel-controls">
                    <div className="">
                      <div className="testimonial-carousel ">
                        <div className="h5 font-weight-normal one-slide mx-auto testimonial_border">
                          <div className="testi_landing_user_pic" data-aos="zoom-in-up">
                            <img alt="not found" src={Tetsti_forte_logo} className="tetsti_slider_img" />
                          </div>
                          <h3 className="testimonial_user_name_landing">Tim Adams </h3>
                          <span className="testimonial_user_work_landing">Design Project Manager - Forte Trinity</span>
                          <div className="testimonial w-100 px-3 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
                            <div className="text-center blockquote w-100 txt_clr_align_landing_testi">
                              <p>"We needed a fix to a .NET ecommerce project. The guys at iCore were very helpful and attentive. They fixed the issue rapidly and were very cost effective. I would highly recommend iCore to anyone looking for an affective developer. We will be working with them again on future projects."</p>
                            </div>
                          </div>
                        </div>
                        <div className="h5 font-weight-normal one-slide mx-auto testimonial_border" data-aos="zoom-in-up">
                          <div className="testi_landing_user_pic">
                            <img alt="not found" src={Tetsti_scream_logo} className="tetsti_slider_img" />
                          </div>
                          <h3 className="testimonial_user_name_landing">Michael Purvis</h3>
                          <span className="testimonial_user_work_landing">Director - Scream Marketing</span>
                          <div className="testimonial w-100 px-3 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
                            <div className="text-center blockquote w-100 txt_clr_align_landing_testi">
                              <p>"iCore software systems have recently started working on an SEO and website project for my client, I am very pleased with the results so far and they are a pleasure to work with and always easy to contact with any queries which is always one of the main things i find important when using a company. I would recommend using icore for SEO and Web Design."</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
