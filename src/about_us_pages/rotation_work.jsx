import React, { useEffect } from 'react';
import './rotation_work.css';
import Slider_IE from './slider_ie.jsx';
import $ from 'jquery';
import jQuery from 'jquery';

const RotationWork = () => {
    useEffect(() => {
        jQuery(document).ready(function() {
            jQuery("#cn-wrapper a").click(function() {
                var colorvalue = jQuery(this).find("span").text();
                $("#mid-circle p").text(colorvalue);
                $("#cn-button").text(colorvalue);
            });
            jQuery("#piechart a").click(function() {
                var colorvalue1 = jQuery(this).find("div").text();
                $("#mid-circle p").text(colorvalue1);
                $("#cn-button").text(colorvalue1);
            });
        });

        $(document).ready(function() {
            $(".slide-effect a").click(function() {
                var abs = $(this).attr("class");
                $("#cube").removeClass($("#cube").attr("class"));
                $("#cube").addClass(abs);
                $("#cube1").removeClass($("#cube1").attr("class"));
                $("#cube1").addClass(abs);
                $("#cube2").removeClass($("#cube2").attr("class"));
                $("#cube2").addClass(abs);
                $("#cube3").removeClass($("#cube3").attr("class"));
                $("#cube3").addClass(abs);
                $("#cube4").removeClass($("#cube4").attr("class"));
                $("#cube4").addClass(abs);
            });
            $("#piechart a").click(function() {
                var abs = $(this).attr("class");
                $("#cube").removeClass($("#cube").attr("class"));
                $("#cube").addClass(abs);
                $("#cube1").removeClass($("#cube1").attr("class"));
                $("#cube1").addClass(abs);
                $("#cube2").removeClass($("#cube2").attr("class"));
                $("#cube2").addClass(abs);
                $("#cube3").removeClass($("#cube3").attr("class"));
                $("#cube3").addClass(abs);
                $("#cube4").removeClass($("#cube4").attr("class"));
                $("#cube4").addClass(abs);
            });
            $(".slide-effect .skills-pink").click(function() {
                $(".l-skills-pink").addClass("dot65");
                $(".l-skills-pink").addClass("dot65img");
                $(".l-skills-green").removeClass("dot65");
                $(".l-skills-blue").removeClass("dot65");
                $(".l-skills-black").removeClass("dot65");
            });
            // Add similar click handlers for other colors
        });
    }, []);

    const rotate = (id) => {
        // Define your rotate function here
    };

    const hasClass = (ele, cls) => {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    };

    const addClass = (ele, cls) => {
        if (!hasClass(ele, cls))
            ele.className += " " + cls;
    };

    const removeClass = (ele, cls) => {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    };

    return (
        <div>
            <Slider_IE />
            {/* header display_none_about_rotate*/}
            <section id="" className="display_none_about_rotate " style={{ marginTop: '1%', paddingTop: '0px' }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-12 text-center">
                            <h3 className="head_bor_inner4">WHAT WE DO</h3>
                            <p><br /></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg_inner_rotate_img111 display_none_about_rotate">
                <section id="what_we_do">
                    <div id="what_we_do_img">
                        <div class="container fast no-padding mrg_bot_footer_inner" data-animation="fadeIn">
                            <div class="what_we_do-cntr">
                                <div class="what_we_do-cntr-inner">
                                    <div id="site-wrapper">
                                        <div id="content">
                                        <section id="l-skills">
									<h2 class="remove_text">Circle</h2>
									<nav class="slide-effect" id="cn-wrapper">
										<a href="javascript:%20rotate('rotate1');" data-hover="WEB" id="overflow" class="skills-pink btn-skills show-front active">
											<span>WEB</span>
										</a>
										<a href="javascript:%20rotate('rotate2');" data-hover="MOBILE" id="overflow1" class="skills-green btn-skills show-back">
											<span>MOBILE</span>
										</a>
										<a href="javascript:%20rotate('rotate3');" data-hover="DESIGN" id="overflow2" class="skills-blue btn-skills l-rMargin-20 show-right">
											<span>DESIGN</span>
										</a>
										<a href="javascript:%20rotate('rotate4');" data-hover="TECHNOLOGY" id="overflow3" class="skills-black btn-skills l-rMargin-20 show-left">
											<span>TECHNOLOGY</span>
										</a>    	
										<a href="javascript:%20rotate('close');" class="l-close">
											<span class="close icon-close" id="pie-close"></span>
										</a>
									</nav>
									<div id="container" class="res-circle">
								  		<div class="rotate1" id="piechart" data-animation="fadeInRightBig">
											<a href="javascript:%20rotate('rotate1');" class="show-front active">
												<div class="dott l-skills-pink l-skills-dott">MOBILE</div>
											</a>
											<a href="javascript:%20rotate('rotate2');" class="show-back" >
												<div class="dott l-skills-green l-skills-dott">WEB</div>
											</a>
											<a href="javascript:%20rotate('rotate3');" class="show-right" >
												<div class="dott l-skills-blue l-skills-dott">DESIGN</div>
											</a>
											<a href="javascript:%20rotate('rotate4');" class="show-left" >
												<div class="dott l-skills-black l-skills-dott">TECHNOLOGY</div>
											</a>
											<div id="piece1" class="piece1-arrow hold active">
												<div class="pie"></div>
											</div>
											<div id="piece2" class="hold">	
												<div class="pie"></div>
											</div>
											<div id="piece3" class="hold">		
												<div class="pie"></div>
											</div>
											<div id="piece4" class="hold">      
												<div class="pie"></div>
											</div>
											<div class="mid-circle pin-content" id="mid-circle">
												<p id="2" class="set_text">MOBILE</p>
											</div>
										</div>
										<div class="show visble_class" id="l-inhalt">
											<div id="skill-bar1" class="bar set_height">
												<div class="main">
													<section class="container1">
														<h2 class="remove_text">Circle</h2>
														<div id="cube" class="show-front">
														<figure class="front">Custom Websites</figure>
															<figure class="back">Android</figure>
															<figure class="right">Website Templates</figure>
															<figure class="left">PHP, MySQL, Oracle, Java</figure>
														</div>
														<div id="cube1" class="show-front">
														<figure class="front">Custom Web Apps</figure>
															<figure class="back">iOS</figure>
															<figure class="right">Logo & Banners</figure>
															<figure class="left">HTML5, CSS3, jQuery, JavaScript</figure>
														</div>
														<div id="cube2" class="show-front">
															<figure class="front">CMS & Blog Developement</figure>
															<figure class="back">Windows</figure>
															<figure class="right">Mobile Apps</figure>
															<figure class="left">Joomla, Magento, WordPress, Drupal</figure>
														</div>
														<div id="cube3" class="show-front">
														<figure class="front">E-Commerce Websites</figure>
															<figure class="back">Hybrid (Phonegap)</figure>
															<figure class="right">Mobile Games</figure>
															<figure class="left">iOS & Android SDK</figure>
														</div>
														<div id="cube4" class="show-front">
														<figure class="front">Facebook & Twitter Apps</figure>
															<figure class="back">Mobile Optimised Websites</figure>
															<figure class="right">Advertisement & Media</figure>
															{/* <figure class="left">Cocos2D, Unity 3D, Box 2D Game Engine</figure> */}
															<figure class="left">React JS, Ionic, React Native</figure>
														</div>
													</section>
												</div>
											</div>	
										</div>
									</div>
								</section>








                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RotationWork;
