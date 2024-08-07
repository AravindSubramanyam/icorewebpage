import React, { useEffect } from 'react';
import './slide_new.css';
import Laptop_frame_video from './img_new/videos/laptop_video3.mp4';

const Slide = () => {
    useEffect(() => {
        // componentDidMount logic can be placed here if needed
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6">
                        <div className="laptop-wrapper_new_IE">
                            <video width="400" playsInline autoPlay muted loop>
                                <source src={Laptop_frame_video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="desktop-wrapper_new_IE">
                            <video width="400" playsInline autoPlay muted loop>
                                <source src={Laptop_frame_video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="tablet-wrapper_new_IE">
                            <video width="400" playsInline autoPlay muted loop>
                                <source src={Laptop_frame_video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="mobile-wrapper_new_IE">
                            {/* <video width="400" playsInline autoPlay muted loop>
                                <source src="http://apps.icoretek.com:8080/icoresoftwaresystems/static/media/mobile_video2.87af3695.mp4" type="video/mp4" />
                            </video> */}
                            <img id="phone" alt="not found" className="img_phone" src="" width="300" height="543" frameBorder="0" allowFullScreen />
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile videos */}
            <div className="row">
                {/* <div className="col-sm-7">
                    <div id="MSvideoContainer">
                        <div id="MSvideoContent">
                            <img id="phone" className="img_phone" src="http://www.makrshakr.com/wp-content/uploads/2018/07/app_splash.png" width="300" height="543" frameBorder="0" allowFullScreen />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Slide;
