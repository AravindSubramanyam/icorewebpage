import React, { useEffect } from 'react';
import './about_us_inner_video.css';
// import Header_Video_new from '../img_new/videos/header_video4.mp4';
import AboutBgImgNew from '../img_new/about_us_inner/about_bg_img_new.png';

const AboutInnerHeadVideo = () => {
  useEffect(() => {
    // Add any side effects or cleanup needed when the component mounts here
  }, []);

  return (
    <div>
      <br /><br />
      <div className="bg_about_us">
        {/* You can include any content specific to the background here */}
      </div>
      <div className='bg_color'>
        {/* 
        <header class="header_about_inner valign bg-img overlay_hide_about " data-scroll-index="0" data-overlay-dark="5"  data-stellar-background-ratio="0.5">
          <img className="bg-vid video_bg_header" src={AboutBgImgNew} alt="not-found"/>
          <div class="container">
            <div class="row">
              <div class="full-width text-center caption ">
                // Add any captions or content here
              </div>
            </div>
          </div>
        </header>
        */}
      </div>
    </div>
  );
};

export default AboutInnerHeadVideo;
