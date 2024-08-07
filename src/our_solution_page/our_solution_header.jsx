import React, { useEffect } from 'react';
import '../nav.css';
import $ from 'jquery';
import { Swiper } from 'jquery';
import anime from 'animejs';
import Logo1_mobile from '../img_new/header_logo/about_bg.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Our_solution_Header = () => {
    useEffect(() => {
        (function(window) {
            $.exists = function(selector) {
                return $(selector).length > 0;
            };

            window.onpageshow = function(event) {
                if (event.persisted) {
                    PageTransition();
                }
            };

            // All Functions
            PageTransition();
            Menu();
            ms_home_slider();
            Sort();
            UniteGallery();
            ValidForm();
        })(window);

        function PageTransition() {
            var preload = anime({
                targets: '.ms-preloader',
                opacity: [1, 0],
                duration: 100,
                easing: 'easeInOutCubic',
                complete: function(preload) {
                    $('.ms-preloader').css('visibility', 'hidden');
                },
            });
            $('.ms-main-container').addClass('loaded');
            var cont = anime({
                targets: '.loaded',
                opacity: [0, 1],
                easing: 'easeInOutCubic',
                duration: 10,
                complete: function(preload) {
                    $('.ug-thumb-image').css({
                        opacity: '1',
                    });
                    $('.ms-section__block img').css({
                        opacity: '1',
                    });
                    $('.ug-thumb-wrapper, .post-item').css({
                        'pointer-events': 'auto',
                    });
                },
            });
            $(document).on('click', '[data-type="page-transition"]', function(e) {
                var url = $(this).attr('href');
                if (url != '#' && url != '') {
                    e.preventDefault();
                    $('.ms-preloader').css('visibility', 'visible');
                    var url = $(this).attr('href');
                    var preload = anime({
                        targets: '.ms-preloader',
                        opacity: [0, 1],
                        duration: 300,
                        easing: 'easeInOutQuad',
                        complete: function(preload) {
                            window.location.href = url;
                        },
                    });
                }
            });
        }

        function Menu() {
            if ($.exists('.hamburger')) {
                $('.hamburger').on('click', function(e) {
                    var burger = $(this);
                    $(burger).toggleClass('is-active');
                    $('.ms-nav').toggleClass('is-visible');
                    $('.ms-header').not('.navbar-white').each(function() {
                        $('.logo-light').toggleClass('active');
                    });
                });
                $('.height-full-viewport').on({
                    mousewheel: function(e) {
                        if (e.target.id === 'el') return;
                        e.preventDefault();
                        e.stopPropagation();
                    },
                });
            }
        }
    }, []);

    return (
        <div>
            {/* FOR extra */}
            <div className="ms-main-container">
                {/* <!-- Preloader --> */}
                <div className="ms-preloader"></div>
                {/* <!-- Header --> */}
                <header className="ms-header navbar-white" style={{ position: 'relative' }}>
                    <nav className="ms-nav" style={{ padding: '1em 3em' }}>
                        <div className="ms-logo">
                            <Link to="/">
                                <div className="logo-dark only_mobile">
                                    <img src={Logo1_mobile} alt="logo image" />
                                </div>
                                <div className="logo-light current only_mobile">
                                    <img src={Logo1_mobile} alt="logo image" />
                                </div>
                            </Link>
                        </div>
                        <button className="hamburger" type="button" data-toggle="navigation">
                            <span className="hamburger-box">
                                <span className="hamburger-label">menu</span>
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                        <div className="height-full-viewport">
                            <ul className="ms-navbar">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                    <span className="nav-item__label">Delivering excellence through technology</span>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about-us" target="_top">
                                        <span className="ms-btn">About</span>
                                        <span className="nav-item__label">Our past, present and future</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/our-service" target="_top">
                                        <span className="ms-btn">Our Services</span>
                                        <span className="nav-item__label">Our limitless capabilities</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/our-work" target="_top">
                                        <span className="ms-btn">Our Works</span>
                                        <span className="nav-item__label">Our best creations</span>
                                    </Link>
                                </li>
                                <li className="nav-item head_menu">
                                    <Link to="/our-solutions" target="_top">
                                        <span className="ms-btn">Our Solutions &#9662;</span>
                                        <span className="nav-item__label">Learn more about our niche services</span>
                                    </Link>
                                    <ul className="header_hover_our_solu sub-menu">
                                        <li className="nav_mar_oursolution">
                                            <Link to="/devops" target="_top">
                                                <span className="ms-btn ms-btn2 header_hover_our_solu">DevOps</span>
                                            </Link>
                                        </li>
                                        <li className="nav_mar_oursolution">
                                            <Link to="/cloud-computing" target="_top">
                                                <span className="ms-btn ms-btn2 header_hover_our_solu">Cloud Computing</span>
                                            </Link>
                                        </li>
                                        <li className="nav_mar_oursolution">
                                            <Link to="/big-data" target="_top">
                                                <span className="ms-btn ms-btn2 header_hover_our_solu">Big Data</span>
                                            </Link>
                                        </li>
                                        <li className="nav_mar_oursolution">
                                            <Link to="/IoT" target="_top">
                                                <span className="ms-btn ms-btn2 header_hover_our_solu">IoT</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact-us" target="_top">
                                        <span className="ms-btn">Contact</span>
                                        <span className="nav-item__label">Explore endless possibilities with us</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Our_solution_Header;

