import React, { useEffect } from 'react';
import './contact.css';
import $ from 'jquery';
import Animation_Text from './animation_text.jsx';

const Contactus = () => {
    useEffect(() => {
        $("#login-button").click(function(event){
            event.preventDefault();
            $('form').fadeOut(300);
            $('.wrapper_contact').addClass('form-success');
        });

        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function() {
                that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
    }, []);

    return (
        <div>
            <div className="wrapper_contact">
                <div className="container-fulid">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-8"></div>
                    </div>
                    <div className="row mt_top_2per">
                        <div className="col-lg-4">
                            <div className="tet_head">
                                <Animation_Text/>
                            </div>
                        </div>
                        <div className="col-lg-8 lft_cont">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="tet_head_sec">
                                        <h6 className="text_p_cont flt_rgt flag_col_cont"> India</h6>
                                        <p className="text_p_cont flt_rgt mb_bot">
                                            <i className="fa fa-location-arrow icons_color_cont"></i>
                                            iCore Software Systems Private Limited ,<br/>No:80 Ground Floor, 3rd Street,<br/> 
                                            Samayapuram Nagar, Porur,<br/>Chennai - 600116.
                                        </p>
                                        <p className="text_p_cont flt_rgt mb_bot">
                                            <i className="fa fa-phone icons_color_cont"></i>
                                            <a className="txt_contact_underline" href="tel:+91 73580 56001"> +91 73580 56001</a>
                                        </p>
                                        <p className="text_p_cont flt_rgt">
                                            <i className="fa fa-envelope icons_color_cont"></i>
                                            <a className="txt_contact_underline" href="mailto:contact@icoresoftwaresystems.com">
                                                &nbsp;contact(at)icoresoftwaresystems(dot)com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt_minus">
                                    <h6 className="text_p_cont flt_rgt flag_col_cont"> USA</h6>
                                    <p className="text_p_cont flt_rgt mb_bot mt_bot_contact_new">
                                        <i className="fa fa-location-arrow icons_color_cont"></i>
                                        iCore Technologies, LLC,<br/>12987 Allenwood Ave,<br/>Frisco, TX 75035.
                                    </p>
                                    <p className="text_p_cont flt_rgt mb_bot">
                                        <i className="fa fa-phone icons_color_cont"></i>
                                        <a className="txt_contact_underline" href="tel: 727453-9732">  (727) 453-9732 </a>
                                    </p>
                                    <p className="text_p_cont flt_rgt ">
                                        <i className="fa fa-envelope icons_color_cont"></i>
                                        <a className="txt_contact_underline" href="mailto:contact@icoretek.com">
                                            &nbsp;contact(at)icoretek(dot)com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Contactus;
