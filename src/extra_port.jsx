import React, { useEffect } from 'react';
import $ from 'jquery';
import './portfolio.css';
import Catlina_logo from './img_new/our_work/cat_logo.png';
import Iride_Driver_logo from './img_new/our_work/driver.png';
import Issue_tracker_logo from './img_new/our_work/itrack_logo1.png';
import Iride_Passenger_logo from './img_new/our_work/passenger.png';
import trintas_logo from './img_new/our_work/trintas.jpg';
import Iride_Driver_login_logo from './img_new/our_work/i_driver_login.jpg';
import AR_logo from './img_new/our_work/ar_logo.png';
import Extra_Img_Our_Work from './img_new/our_work/extra_img_our_work1.png';
import Newfoil_logo from './img_new/ourclients/newfoil.jpg';
import Readygrass from './img_new/ourclients/readygrass.png';
import ORM from './img_new/ourclients/ORM-logo.png';
import Central_fans from './img_new/ourclients/central_fansl.png';

const Extra_Video = () => {
    useEffect(() => {
        $(function () {
            var selectedClass = "";
            $(".fil-cat").click(function () {
                selectedClass = $(this).attr("data-rel");
                $("#portfolio").fadeTo(100, 0.1);
                $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anmate');
                setTimeout(function () {
                    $("." + selectedClass).fadeIn().addClass('scale-anmate');
                    $("." + selectedClass + " div").fadeIn().addClass('abut_new');
                    //.addClass('abut_new');
                    $("#portfolio").fadeTo(300, 1);
                }, 300);
            });
            var header = document.getElementById("port_butn");
            var btns = header.getElementsByClassName("portfolio_nav_btn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {
                    var current = document.getElementsByClassName("active_port_btuns");
                    current[0].className = current[0].className.replace(" active_port_btuns", "");
                    this.className += " active_port_btuns";
                });
            }
        });
    }, []);

    return (
        <div>
            <div className="container">
                <div className={'marg_all_heading'}>
                    <h1 className="about_ser_new_tags">Business solutions</h1>
                    <span className="about_bor_bot_serv"></span>
                </div>
                <div class=" mb2 mt2 aboveborder" id="port_butn">
                    <span class="portfolio_nav_btn fil-cat active_port_btuns" href="" data-rel="all">All</span>
                    <span class="portfolio_nav_btn fil-cat" data-rel="web">Web&nbsp;Applications</span>
                    <span class="portfolio_nav_btn fil-cat" data-rel="mobile">Mobile&nbsp;Apps</span>
                    <span class="portfolio_nav_btn fil-cat" data-rel="bcards">Augmented&nbsp;Reality</span>
                </div>

                <div style={{ clear: "both" }}></div>

                <div id="portfolio" className="moz_css_port" style={{ columnCount: '4' }}>
                    <div class="portfolio_new_img scale-anm mobile all">
                        <img src={Catlina_logo} class="attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={Catlina_logo} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    <div class="portfolio_new_img scale-anm web all">
                        <img src={trintas_logo} class="attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={trintas_logo} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    <div class="portfolio_new_img scale-anm mobile all">
                        <img src={Iride_Passenger_logo} class="attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={Iride_Passenger_logo} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    <div class="portfolio_new_img scale-anm web all">
                        <img src={Iride_Driver_login_logo} class="iride_admin_sizes attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={Iride_Driver_login_logo} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    <div class="portfolio_new_img scale-anm web all">
                        <img src={Newfoil_logo} class="iride_admin_sizes attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={Newfoil_logo} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    <div class="portfolio_new_img scale-anm bcards all">
                        <img src={AR_logo} class="AR_width_size attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={AR_logo} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    <div class="portfolio_new_img scale-anm web all">
                        <img src={ORM} class="iride_admin_sizes attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={ORM} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    <div class="portfolio_new_img scale-anm web all">
                        <img src={Readygrass} class="iride_admin_sizes attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={Readygrass} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    <div class="portfolio_new_img scale-anm web all">
                        <img src={Central_fans} class="central_fans_size attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={Central_fans} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    {/* extra */}
                    <div class="portfolio_new_img scale-anm web all">
                        <img src={Extra_Img_Our_Work} class="attachment-large portfolio_image_hegt size-large" alt="iRide Driver" srcSet={Extra_Img_Our_Work} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    {/* extra */}
                    <div class="portfolio_new_img scale-anm mobile all">
                        <img src={Iride_Driver_logo} class="attachment-large portfolio_image_hegt size-large" alt="iRide Driver" srcSet={Iride_Driver_logo} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                    <div class="portfolio_new_img scale-anm flyers all">
                        <img src={Issue_tracker_logo} class="attachment-large portfolio_image_hegt size-large" alt="not found" srcSet={Issue_tracker_logo} />
                        <div className="overlay_portfolio_img"></div>
                    </div>
                </div>
            </div>
            <div style={{ clear: "both" }}></div>
        </div>
    );
};

export default Extra_Video;
