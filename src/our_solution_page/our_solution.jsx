import React from 'react';
import './our_solution.css';
import OurSolutionText from './our_solution_text.js';
import OurSolutionHeader from './our_solution_header.js';

import slide_img1 from '../img_new/our_solution/our_solution_big1.jpg';
import slide_img2 from '../img_new/our_solution/slider2.jpg';
import slide_img3 from '../img_new/our_solution/slider5.jpg';

const OurSolution = () => {
    return (
        <div>
            <OurSolutionHeader />

            <h2 className="big_data_head_slider">BIG DATA</h2>
            <div id="myCarousel_our_work" className="carousel slide" style={{ padding: '0px', marginTop: "0px" }} data-ride="carousel" data-interval="2000">
                <div className="carousel-inner big_slider_hght extra_style_slider_our_work" style={{ width: '100%', height: '500px' }}>
                    <div className="item active">
                        <div className="quotes-text">
                            <img className="big_slider_img" src={slide_img1} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="quotes-text">
                            <img className="big_slider_img" src={slide_img2} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="quotes-text">
                            <img className="big_slider_img" src={slide_img3} />
                        </div>
                    </div>
                </div>
            </div>
            <OurSolutionText />
        </div>
    );
};

export default OurSolution;
