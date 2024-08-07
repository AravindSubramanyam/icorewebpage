import React, { useEffect } from 'react';
import './mobility.css';
import plane from '../img_new/our_solution/plane.png';
import history from '../img_new/our_solution/history.png';
import speed_meter from '../img_new/our_solution/speed-meter.png';
import Header from '../header.jsx';
import padlock from '../img_new/our_solution/padlock.png';
import intersection from '../img_new/our_solution/intersection.png';
import device_icon from '../img_new/our_solution/device_icon.png';
import earth from '../img_new/our_solution/earth.png';
import Cloud1 from '../img_new/our_solution/cloud/cloud1.jpg';
import Cloud2 from '../img_new/our_solution/cloud/cloud2.jpg';
import Cloud3 from '../img_new/our_solution/cloud/cloud3.jpeg';
import cloud4 from '../img_new/our_solution/cloud/cloud4.jpg';
import investment from '../img_new/our_solution/investment.png';
import service_cloud from '../img_new/our_solution/service_cloud.png';
import Footer from '../footer.jsx';

const Our_Solution_Cloud = () => {
    useEffect(() => {
        // Initialization code here if needed
    }, []);

    return (
        <div>
        <Header/>
    <div className="container-fulid">
    <div class="row ">
    <div class="col-md-12">
    <div className="cloud_bg_top">
<div class="row">
    <div class="col-md-12">
        <h3 className="mrg_head_iot_tag" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Cloud Computing 
        <p className="txt_cloud1" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Everything in the Cloud</p>
        <p className="txt_cloud1" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Networks, Servers, Storage, Applications, Services</p>
        <p className="txt_cloud1" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Internet-based computing that provides shared computer processing resources and data to computers and other devices on demand.</p>
        </h3>  </div>
</div>
</div>
        </div></div>
        
    {/* heading */}
    <div class="row">
<div class="col-md-12">
    <p className="txt_iot1" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Connecting People, Things & Data 
        IoT embeds some intelligence in Internet connected objects to communicate, exchange 
        information, take decisions, invoke actions and provide amazing services .</p>
  
</div>
</div>
    <div className="row ">
        <div className="col-lg-12">
            <h3 className="head_txt_iot1" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Best choice for growing Businesses</h3>
        </div>
    </div>
    {/* grid method */}
    <div class="row ">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Fast Implementation<img src={plane} className="bottom_img_size" /></h4>
    <p className="grid_txt_p_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Instant access to Applications, Services, Storage, Network and other resources</p>
</div>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Flexibility <img src={device_icon} className="bottom_img_size" /></h4>
    <p className="grid_txt_p_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Scale and Configure your services, servers, capacity, network from console.</p>
</div>

</div>
<div class="col-md-1"></div>
</div>
<div class="row mrg_top_3per ">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div class="col-md-1"></div>
<div className="col-lg-5">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Maintenance <img src={intersection} className="bottom_img_size" /></h4>
    <p className="grid_txt_p_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Least Maintenance, Console to monitor and manage all cloud resources</p>
</div>
<div class="col-md-1"></div>
<div className="col-lg-5">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Capital Expenditure <img src={investment} className="bottom_img_size" /></h4>
    <p className="grid_txt_p_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Cloud Applications are mostly free of costs like licenses, integration and consultants (Pay per usage)</p>
</div>

</div>
<div class="col-md-1"></div>
</div>
{/* 3rd row */}
<div class="row mrg_top_3per mrg_bot_5per">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div class="col-md-1"></div>
<div className="col-lg-5">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Security <img src={padlock} className="bottom_img_size" /></h4>
    <p className="grid_txt_p_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Cloud leverages policies, secure technologies and controls to protect data.</p>
</div>
<div class="col-md-1"></div>
<div className="col-lg-5">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Everything as a Service <img src={service_cloud} className="bottom_img_size" /></h4>
    <p className="grid_txt_p_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Mobile, Backend, IoT, Cognitive Services, Data, Containers, Products</p>
</div>

</div>
<div class="col-md-1"></div>
</div>
{/* extra grid */}
<div class="row mrg_top_3per ">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div class="col-md-1"></div>
<div className="col-lg-11">
    <p className="grid_txt_p_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine" >iCore Software Systems can guide you through the key challenges of transformation and make your cloud strategy take shape. We have the Cloud expertise and solutions to help you reshape your infrastructure and swiftly gain the economies and security the Cloud promises that encompass 
    robust features of Microsoft Azure and Amazon Web Services</p>
</div>
</div>
<div class="col-md-1"></div>
</div>
      {/* grid method */}
      <div className="web_view_only_cloud">
      <div class="row mrg_top_3per">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Cloud Consulting Services</h4>
   <ul className="grid_txt_p_iot">
       <li className="cloud_li_txt" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">
       It is considered as a challenging task by the businesses to move to cloud – especially when the clients have the responsibility of data security and availability for organization’s sustainability.
       </li>
       <li className="cloud_li_txt" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">
       Hence ,we offer a full range of packaged cloud services that support organizations of all sizes to cut down traditional infrastructure costs, mitigate software installation activities and reap maximum time to focus on core business.
       </li>
   </ul>
</div>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <img src={Cloud1} className="img_bor_radi_cloud" />
</div>

</div>
<div class="col-md-1"></div>
</div>
{/* grid method */}
<div class="row mrg_top_3per">
    <div class="col-md-1"></div>
<div class="col-md-10">
 <div className="col-lg-1"></div>
<div className="col-lg-5">
    <img src={Cloud2} className="img_bor_radi_cloud" />
</div>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Cloud Application Developments</h4>
   <ol className="grid_txt_p_iot">
       <li className="cloud_li_txt" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">
       Developing and deploying applications on the cloud requires careful assessment and planning for security, scalability, capacity and integration with other on-premise or cloud applications.                </li>
       <li className="cloud_li_txt" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">
       We can help in selecting the right type of cloud (public, private or hybrid); choose the right platform (Azure or Amazon); develop new or migrate existing applications; and post-deployment help you manage your application and infrastructure.               </li>
   </ol>
</div>


</div>
<div class="col-md-1"></div>
</div>
<div class="row mrg_top_3per">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Managed Services</h4>
   <ol className="grid_txt_p_iot">
       <li className="cloud_li_txt" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">
       iCore Software Systems' dedicated Cloud Support team develops a close working relationship with organizations to achieve insight about their cloud environment and technical concerns to deliver right assistance.</li>
       <li className="cloud_li_txt" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine"> 
       As an IT service provider our technicians come with years of experience and we are available 24 hours a day, 365 days a year. Our teams constantly monitor your servers and systems and update them as required without any cost ensuring you get the best of our services your business demands. </li>
   </ol>
</div>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <img src={Cloud3} className="img_bor_radi_cloud" />
</div>

</div>
<div class="col-md-1"></div>
</div>
<div class="row mrg_bot_5per mrg_top_3per">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <img src={cloud4} className="img_bor_radi_cloud" />
</div>
<div className="col-lg-1"></div>
<div className="col-lg-5 mrg_top_8per">
    <h4 className="grid_txt_head_iot" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Cloud Migration and Deployment</h4>
   <ol className="grid_txt_p_iot">
      <li className="cloud_li_txt" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Our cloud migration and deployment services can help organizations seamlessly migrate their vast historical or sensitive data to the cloud.</li>
   </ol>
</div>
</div>
<div class="col-md-1"></div>
</div></div>

    {/* for mobile view code */}
    <div className="mobile_view_only_cloud">
    <div class="row mrg_top_3per ">
    <div class="col-md-1"></div>
<div class="col-md-10">
<h4 className="grid_txt_head_iot txt_align_mobi" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">Cloud Consulting Services</h4>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <img src={Cloud1} className="img_bor_radi_cloud" />
</div>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    
   <ol className="grid_txt_p_iot">
       <li className="cloud_li_txt" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">
       It is considered as a challenging task by the businesses to move to cloud – especially when the clients have the responsibility of data security and availability for organization’s sustainability.
       </li>
       <li className="cloud_li_txt" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine">
       Hence ,we offer a full range of packaged cloud services that support organizations of all sizes to cut down traditional infrastructure costs, mitigate software installation activities and reap maximum time to focus on core business.
       </li>
   </ol>
</div>
</div>
<div class="col-md-1"></div>
</div>
{/* grid method */}
<div className="">
<div class="row mrg_top_3per">
    <div class="col-md-1"></div>
<div class="col-md-10">
<h4 className="grid_txt_head_iot txt_align_mobi" data-aos="fade-up-right">Cloud Application Developments</h4>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <img src={Cloud2} className="img_bor_radi_cloud" />
</div>
<div className="col-lg-1"></div>
<div className="col-lg-5">
  
   <ol className="grid_txt_p_iot">
       <li className="cloud_li_txt" data-aos="fade-up-right">
       Developing and deploying applications on the cloud requires careful assessment and planning for security, scalability, capacity and integration with other on-premise or cloud applications.                </li>
       <li className="cloud_li_txt" data-aos="fade-up-right">
       We can help in selecting the right type of cloud (public, private or hybrid); choose the right platform (Azure or Amazon); develop new or migrate existing applications; and post-deployment help you manage your application and infrastructure.               </li>
   </ol>
</div>


</div>
<div class="col-md-1"></div>
</div>
<div class="row mrg_top_3per">
    <div class="col-md-1"></div>
<div class="col-md-10">
<h4 className="grid_txt_head_iot txt_align_mobi" data-aos="fade-up-right">Managed Services</h4>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <img src={Cloud3} className="img_bor_radi_cloud" />
</div>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    
   <ol className="grid_txt_p_iot">
       <li className="cloud_li_txt" data-aos="fade-up-right">
       iCore Software Systems' dedicated Cloud Support team develops a close working relationship with organizations to achieve insight about their cloud environment and technical concerns to deliver right assistance.</li>
       <li className="cloud_li_txt" data-aos="fade-up-right">
       As an IT service provider our technicians come with years of experience and we are available 24 hours a day, 365 days a year. Our teams constantly monitor your servers and systems and update them as required without any cost ensuring you get the best of our services your business demands. </li>
   </ol>
</div>
</div>
<div class="col-md-1"></div>
</div>
<div class="row mrg_bot_5per mrg_top_3per">
    <div class="col-md-1"></div>
<div class="col-md-10">
<h4 className="grid_txt_head_iot txt_align_mobi" data-aos="fade-up-right">Cloud Migration and Deployment</h4>
<div className="col-lg-1"></div>
<div className="col-lg-5">
    <img src={cloud4} className="img_bor_radi_cloud" />
</div>
<div className="col-lg-1"></div>
<div className="col-lg-5">
   
   <ol className="grid_txt_p_iot">
      <li className="cloud_li_txt" data-aos="fade-up-right">Our cloud migration and deployment services can help organizations seamlessly migrate their vast historical or sensitive data to the cloud.</li>
   </ol>
</div>

</div>
<div class="col-md-1"></div>
</div>
</div></div>

            </div>
            <Footer/>
     </div>
    );
};

export default Our_Solution_Cloud;
