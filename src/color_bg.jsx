import React, { useEffect } from "react";
import $ from "jquery";
import "./color_bg.css";
import Home from "./home.jsx";
import Header from "./header.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Swiper from "./swiper_slider.jsx";
import Footer from "./footer.jsx";
import Testimonial from "./testimonial.jsx";
import Our_work_home from "./our_work";
import Contactus from "./contact.jsx";
import Client_Slider from "./client_slider.jsx";
import Ourclient from "./our_client.jsx";
import Port from "./extra_port.jsx";
import About_Phone from "./about_phone.jsx";
import "./portfolio_mobile.css";
import Extra_Videos from "./extra_video.jsx";
import Color_mobile_responsive from "./color_bg_mobile_responsive.jsx";
import About_new_two_img from "./about_new_two_img.jsx";

const Color = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();

    $(window)
      .scroll(function () {
        var $window = $(window),
          $body = $("body"),
          $bg_color_change = $(".bg_color_change");
        var scroll = $window.scrollTop() + $window.height() / 2;
        $bg_color_change.each(function () {
          var $this = $(this);
          if (
            $this.position().top <= scroll &&
            $this.position().top + $this.height() > scroll
          ) {
            $body.removeClass(function (index, css) {
              return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
            });
            $body.addClass("color-" + $(this).data("color"));
          }
        });
      })
      .scroll();
  }, []);

  return (
    <div>
      <div className="bg_color_change" data-color="">
        <Header />
      </div>
      <div className="bg_color_change" data-color="">
        <Home />
      </div>
      <div className="bg_color_change" data-color="">
        <About_new_two_img />
      </div>
      <br />
      <br />
      <div className="bg_color_change" data-color="">
        <About_Phone />
      </div>
      <div className="bg_color_change" data-color="">
        <Extra_Videos />
      </div>

      <div className="container-fluid disable_mobile_media">
        <div className="bg_color_change" data-color="gray">
          <div className="row">
            <div className="col-lg-12 mgr_new_all_videos_new_webdesign change_order_mt_webdesign">
              <div className="col-lg-5">
                <h1 className="port_laptop_txt_color" data-aos="fade-down-left">
                  Web Design & Development
                </h1>
                <p className="port_ptag_color_laptop" data-aos="fade-down-left">
                  iCore Software Systems houses some of the best creative minds
                  who can wield visually stunning web designs and themes along
                  with precise planning of web page layout, content production
                  and graphic design using all latest technologies. Our
                  experience as a web design company with multiple clients and
                  their continued relationship with us showcases our
                  capabilities in this area
                </p>
                {/* <p className="port_ptag_color_laptop" data-aos="fade-down-left"> Responsive Design Template   </p>
                <p className="port_ptag_color_laptop" data-aos="fade-down-left"> Macromedia Dreamweaver Template Design </p>
                <p className="port_ptag_color_laptop" data-aos="fade-down-left"> CMS Template Design   </p> */}
                {/* button start */}
                <Link
                  to="/our-service/#webdesign"
                  target="_top"
                  style={{ display: "block" }}
                >
                  <div className="button_port_color_more">
                    More&nbsp;&nbsp;
                    <span className="shift span_color_more_fns">›</span>
                    <div className="mask"></div>
                  </div>
                </Link>
                {/* button end */}
              </div>
              <div className="col-lg-7">
                <div className="laptop_with_mobile-wrapper_new_IE">
                  <video
                    width="400"
                    playsinline="playsinline"
                    autoplay="autoplay"
                    muted="muted"
                    loop="loop"
                  >
                    <source src="" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end row */}

        <div className="bg_color_change" data-color="blue">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="col-lg-7">
                <div className="laptop-wrapper_new_IE">
                  <video
                    width="400"
                    playsinline="playsinline"
                    autoplay="autoplay"
                    muted="muted"
                    loop="loop"
                  >
                    <source src="{Laptop_frame_video}" type="video/mp4" />
                  </video>
                </div>
              </div>
              {/* <div className="col-lg-1"></div> */}
              <div className="col-lg-5 pad_top_color_laptop">
                <h3 className="port_laptop_txt_color" data-aos="fade-down-left">
                  Web&nbsp;Application Development
                </h3>
                <p className="port_ptag_color_laptop" data-aos="fade-down-left">
                  Creation and development of intelligent web applications for
                  clients with value added functionalities to boost the
                  efficiency of clients’ businesses. We are one of the finest
                  web application development firms with more than 3 years of
                  experience in custom web application development catering to
                  clients in several industries and countries
                </p>
                {/* <p className="port_ptag_color_laptop" data-aos="fade-down-left"> Responsive Design Template   </p>
                <p className="port_ptag_color_laptop" data-aos="fade-down-left"> Macromedia Dreamweaver Template Design </p>
                <p className="port_ptag_color_laptop" data-aos="fade-down-left"> CMS Template Design   </p> */}
                {/* button start */}
                <Link
                  to="/our-service/#webapps"
                  target="_top"
                  style={{ display: "block" }}
                >
                  <div className="button_port_color_more">
                    More&nbsp;&nbsp;
                    <span className="shift span_color_more_fns">›</span>
                    <div className="mask"></div>
                  </div>
                </Link>
                {/* button end */}
              </div>
            </div>
          </div>
        </div>
        {/* extra web design row */}
        {/* third section row */}
        <div className="bg_color_change " data-color="orange">
          <div className="row">
            <div className="col-lg-12  ">
              <div className="col-lg-5 ">
                <h3 className="port_laptop_txt_color" data-aos="fade-up-right">
                  E-commerce Solutions{" "}
                </h3>
                <p className="port_ptag_color_laptop" data-aos="fade-up-right">
                  Taking your local businesses online through our cutting edge
                  eCommerce solutions and products to tap the untapped online
                  market for your products. iCore Software Systems is one of the
                  best eCommerce development companies to provide custom
                  eCommerce web development solutions which helps to multiply
                  your revenues
                </p>
                {/* <p className="port_ptag_color_laptop" data-aos="fade-up-right"> Excellent user interface  </p>
                <p className="port_ptag_color_laptop" data-aos="fade-up-right"> Robust integration of payment gateways </p>
                <p className="port_ptag_color_laptop" data-aos="fade-up-right"> Stock management Order tracking   </p> */}

                {/* button start */}
                <Link
                  to="/our-service/#Ecommerce"
                  target="_top"
                  style={{ display: "block" }}
                >
                  <div className="button_port_color_more">
                    More&nbsp;&nbsp;
                    <span className="shift span_color_more_fns">›</span>
                    <div className="mask"></div>
                  </div>
                </Link>
                {/* button end */}
              </div>
              {/* second row */}
              <div className="col-sm-7">
                <div className="desktop-wrapper_new_IE">
                  <video
                    width="400"
                    playsinline="playsinline"
                    autoplay="autoplay"
                    muted="muted"
                    loop="loop"
                  >
                    <source src="{Tablet_frame_video}" type="video/mp4" />
                  </video>
                </div>
              </div>
              {/* <div className="col-lg-1"></div> */}

              {/* laptop/mobile start */}
            </div>
          </div>
        </div>
        {/* start next row */}
        <div className="bg_color_change" data-color="green">
          <div className="row">
            <div className="col-lg-12  ">
              <div className="col-lg-7 mr_first_mobile_top">
                <div className="mobile-wrapper_new_IE">
                  <img
                    id="phone"
                    className="img_phone"
                    src="{mobile_frame_video}"
                    width="300"
                    height="543"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    alt="not found"
                  />
                </div>
              </div>
              <div className="col-lg-5 pad_top_color first_mobile_txt_left">
                <h3
                  className="port_mobile_txt_color"
                  data-aos="fade-down-right"
                >
                  Mobile Apps development
                </h3>
                <p className="port_ptag_color" data-aos="fade-down-right">
                  Building universally compatible mobile applications in all
                  platforms for our clients as per the requirements with value
                  addition. We are a mobile apps development firm with immense
                  expertise in mobile application development services enabling
                  our clients to reach their customers through their mobiles
                </p>
                {/* <p className="port_ptag_color"  data-aos="fade-down-right"> software as a service (SaaS)</p>
                <p className="port_ptag_color"  data-aos="fade-down-right"> Microsoft Azure Data Lake</p>
                <p className="port_ptag_color"  data-aos="fade-down-right"> Co-Located Teams</p> */}
                {/* button  */}
                <Link
                  to="/our-service/#Mobile"
                  target="_top"
                  style={{ display: "block" }}
                >
                  <div className="button_port_color_more">
                    More&nbsp;&nbsp;
                    <span className="shift span_color_more_fns">›</span>
                    <div className="mask"></div>
                  </div>
                </Link>
                {/* button end */}
              </div>
            </div>
          </div>
        </div>

        {/* augment */}
        <div className="bg_color_change" data-color="blue">
          <div className="row">
            <div className="col-lg-12 ">
              {/* <div className="col-lg-1"></div> */}
              <div className="col-lg-5 pad_top_color_laptop">
                <h3
                  className="port_laptop_txt_color"
                  data-aos="fade-down-right"
                >
                  Augmented&nbsp;Reality&nbsp;/&nbsp;Virtual&nbsp;Reality
                </h3>
                <p
                  className="port_ptag_color_laptop"
                  data-aos="fade-down-right"
                >
                  Switch to the era where technology is experienced rather than
                  just being used. The incorporation of AR / VR enables the
                  consumers to experience a blending technology and the live
                  real world experiences
                </p>
                <p
                  className="port_ptag_color_laptop"
                  data-aos="fade-down-right"
                >
                  iCore Software Systems has embraced the AR/VR technology and
                  envisioned the incorporation of them into past technologies
                  and redefine them. We have provided AR / VR solutions to our
                  clients and we have plans in the pipeline to expand our AR /
                  VR capabilities to multiple industry verticals
                </p>
                {/* <p className="port_ptag_color_laptop" data-aos="fade-down-right"> Responsive Design Template   </p>
                <p className="port_ptag_color_laptop" data-aos="fade-down-right"> Macromedia Dreamweaver Template Design </p>
                <p className="port_ptag_color_laptop" data-aos="fade-down-right"> CMS Template Design   </p> */}
                {/* button start */}
                <Link
                  to="/our-service/#AR"
                  target="_top"
                  style={{ display: "block" }}
                >
                  <div className="button_port_color_more">
                    More&nbsp;&nbsp;
                    <span className="shift span_color_more_fns">›</span>
                    <div className="mask"></div>
                  </div>
                </Link>
                {/* button end */}
              </div>
              <div className="col-lg-7">
                <div className="laptop-wrapper_new_IE">
                  <video
                    width="400"
                    playsinline="playsinline"
                    autoplay="autoplay"
                    muted="muted"
                    loop="loop"
                  >
                    <source
                      src="{Tablet_frame_video_Trintas}"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}

        {/* digital */}
        <div className="bg_color_change" data-color="yellow">
          <div className="row">
            <div className="col-lg-12 ">
              {/* <div className="col-lg-1"></div> */}

              <div className="col-lg-6">
                <div className="wrapper_seo_page">
                  <svg
                    className="svg_seo_page"
                    xmlns=""
                    x="0px"
                    y="0px"
                    viewBox="0 0 288 288"
                  >
                    <linearGradient
                      id="PSgrad_0"
                      x1="70.711%"
                      x2="0%"
                      y1="70.711%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stop-color="rgb(44, 62, 80)"
                        stop-opacity="1"
                      />
                      <stop
                        offset="100%"
                        stop-color="rgb(76, 161, 175)"
                        stop-opacity="1"
                      />
                    </linearGradient>
                    <path fill="url(#PSgrad_0)">
                      <animate
                        repeatCount="indefinite"
                        attributeName="d"
                        dur="5s"
                        values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;

	M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
	c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
	c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
	C48.9,198.6,57.8,191,51,171.3z;

	M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	"
                      />
                    </path>
                  </svg>
                </div>
                <img src="{Seo_1}" alt="not found" className="seo_img" />
              </div>
              <div className="col-lg-6 pad_top_color_laptop">
                <h3
                  className="port_laptop_txt_color"
                  data-aos="fade-down-right"
                >
                  Digital Marketing{" "}
                </h3>
                <p
                  className="port_ptag_color_laptop"
                  data-aos="fade-down-right"
                >
                  iCore provides a wide array of digital marketing services and
                  solutions that helps to expand the reach of your businesses to
                  unreachable audience and geographies. Our understanding of the
                  digital marketing dynamics help us build digital marketing
                  solutions and provide various digital marketing services. With
                  our experience, we design the most optimal and customized
                  digital marketing strategies for businesses to achieve
                  enhanced online business visibility
                </p>

                {/* button start */}
                <Link
                  to="/our-service/#SEO"
                  target="_top"
                  style={{ display: "block" }}
                >
                  <div className="button_port_color_more">
                    More&nbsp;&nbsp;
                    <span className="shift span_color_more_fns">›</span>
                    <div className="mask"></div>
                  </div>
                </Link>
                {/* button end */}
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        {/* second row */}

        <div className="bg_color_change " data-color="red">
          <div className="row">
            <div className="col-lg-12  ">
              {/* table/mobile start */}

              {/* <div className="col-lg-1"></div> */}
              <div className="col-lg-5 pad_top_color_laptop">
                <h3 className="port_laptop_txt_color" data-aos="fade-up-left">
                  US Staffing
                </h3>
                <p className="port_ptag_color_laptop" data-aos="fade-up-left">
                  We are also operating as an IT staffing company in USA and we
                  specialize in finding the right talent for the US IT
                  recruitment market. Acquisition of the perfect talent from our
                  resource pool makes us a star IT staffing firm in the US
                </p>
                {/* <p className="port_ptag_color_laptop" data-aos="fade-up-left"> Manpower Planning  </p>
                <p className="port_ptag_color_laptop" data-aos="fade-up-left"> Job Analysis/Placement </p>
                <p className="port_ptag_color_laptop" data-aos="fade-up-left"> Training and Development   </p> */}

                {/* button start */}
                <Link
                  to="/our-service/#us-staffing"
                  target="_top"
                  style={{ display: "block" }}
                >
                  <div className="button_port_color_more">
                    More&nbsp;&nbsp;
                    <span className="shift span_color_more_fns">›</span>
                    <div className="mask"></div>
                  </div>
                </Link>
                {/* button end */}
              </div>
              <div className="col-sm-7">
                <div className="tablet-wrapper_new_IE">
                  <video
                    width="400"
                    playsinline="playsinline"
                    autoplay="autoplay"
                    muted="muted"
                    loop="loop"
                  >
                    <source src="{Desktop_frame_video}" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <Color_mobile_responsive /> 
      </div>
      <div className="bg_color_change" data-color="indigo">
        <Port />
      </div>
      <div className="bg_color_change" data-color="">
        <Swiper />
      </div>
      <div className="bg_color_change" data-color="">
        <Testimonial />
      </div>
      <div className="bg_color_change" data-color="">
        <Ourclient />
      </div>
      <div className="bg_color_change" data-color="">
        <Contactus />
      </div>
      <Footer />
    </div>
  );
};

export default Color;
