import React, { useEffect } from 'react';
import './mobility.css';
import plane from '../img_new/our_solution/plane.png';
import history from '../img_new/our_solution/history.png';
import speed_meter from '../img_new/our_solution/speed-meter.png';
import earth from '../img_new/our_solution/earth.png';
import Header from '../header.js';
import Footer from '../footer.js';

const Devops = () => {
    useEffect(() => {
        // Your componentDidMount logic here
        // AOS.init();
    }, []);

    return (
       
        <div>
        <Header/>
    <div className="container-fulid mrg_bot_5per">
<div className="devops_bg_top">
<div class="row">
    <div class="col-md-12">

        <h3 className="mrg_head_iot_tag"  data-aos="flip-right">DevOps </h3>
    </div>
</div>
</div>

{/* heading */}
<div class="row">
<div class="col-md-12">
<p className="txt_iot1"  data-aos="fade-down-right">Bridging people, processes & tools </p>
    <p className="txt_iot1"  data-aos="fade-down-right">DevOps encourages change in IT culture following agile practices to enable continuous delivery to the end users. This also leverages the early and quick releases to the market. This requires a trusted relationship and effective communication between Development team and Operations team. It aims at establishing a culture and environment where building, testing, 
    and releasing software can happen rapidly, frequently, and more reliably.</p>
  
</div>
</div>
    <div className="row ">
        <div className="col-lg-12">
            <h3 className="head_txt_iot1" data-aos="fade-up-right">How DevOps helps?</h3>
        </div>
    </div>
    {/* grid method */}
    <div class="row ">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div className="col-lg-1"></div>
<div className="col-lg-5">
<div className="inner_box_shadow_bottom_devops mar_2per height_1stbox mar_2per">
                    <h6 className="inner_box_bottom_h6tag" data-aos="fade-up-right">Faster Release Cycles    </h6>
                        <p className="inner_box_shadow_ptag_bottom_devops " data-aos="fade-up-right">Speeding up the build and deploy cycle will allow you and your team to get new features into production quicker, meaning 
                        you can get your product into the hands of your consumers faster.</p>
                    </div>
</div>

<div className="col-lg-5">
<div className="inner_box_shadow_bottom_devops mar_2per">
 <h6 className="inner_box_bottom_h6tag" data-aos="fade-up-right">Reduced Risk    </h6>
<p className="inner_box_shadow_ptag_bottom_devops " data-aos="fade-up-right">The ultimate goal of a continuous delivery process is to make each release a less-dramatic and painless experience for both the QA teams and customers. By releasing new updates or features continuously, you reduce the risk of
 bugs ending up in production and can resolve any found deficiencies faster</p>
 </div>
</div>

</div>
<div class="col-md-1"></div>
</div>
{/* grid 2nd */}
<div class="row mrg_top_3per">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div class="col-md-1"></div>
<div className="col-lg-5">
<div className="inner_box_shadow_bottom_devops mar_2per height_3stbox" >
 <h6 className="inner_box_bottom_h6tag" data-aos="fade-up-right">Lower Costs    </h6>
<p className="inner_box_shadow_ptag_bottom_devops" data-aos="fade-up-right">Adopting a continuous development model will lower your costs
 by eliminating many of the fixed costs associated with building and testing changes to the application. For example, automated environment provisioning will reduce the costs associated with maintaining your own test infrastructure. Parallel testing will cut down on the number of machines you need to run your tests on. By continuously committing your code, you’ll spend less time (and therefore money) on fixing bugs.
</p>
 </div>
</div>

<div className="col-lg-5">
<div className="inner_box_shadow_bottom_devops mar_2per">
 <h6 className="inner_box_bottom_h6tag" data-aos="fade-up-right">Higher Quality Products   </h6>
<p className="inner_box_shadow_ptag_bottom_devops" data-aos="fade-up-right">A major fear of implementing the CI/CD pipeline is foregoing quality for speed, but this isn’t the case. Continuous integration enables stronger collaboration between developers, meaning bugs are found and fixed faster earlier in the development process. Running automated regression and parallel tests will improve test coverage, ensuring your application is bug-free and works across a wider range of environments. Continuously delivering smaller updates to your software will make most changes (and bugs) undetectable
 to the end user, resulting in happier customers</p>
 </div>
</div>

</div>
<div class="col-md-1"></div>
</div>

    {/* grid 3rd */}
    <div class="row mrg_top_3per">
    <div class="col-md-1"></div>
<div class="col-md-10">
<div class="col-md-1"></div>
<div className="col-lg-10">
<div className="inner_box_shadow_bottom_devops mar_2per">
 <h6 className="inner_box_bottom_h6tag" data-aos="fade-up-right">Better Business Advantage</h6>
<p className="inner_box_shadow_ptag_bottom_devops " data-aos="fade-up-right">Moving to a continuous development model gives your team the flexibility to make alterations to your software on-the-go to meet new market trends and user needs. You’ll be able to meet rapidly changing 
demands and will turn your release process into a competitive advantage.</p>
 </div>
</div>
<div class="col-md-1"></div>


</div>
<div class="col-md-1"></div>
</div>

<div class="row">
    <div class="col-md-12">

        <h3 className="head_txt_devops1" data-aos="fade-up-right">Adapting DevOps Culture with us </h3>
    </div>
</div>

<div className="row ">

        <div className="col-lg-12">
            <p className="txt_devops1" data-aos="fade-up-right">iCore Software Systems helps you in establishing the reliable DevOps cycle. We can set up some processes, standards tools for your 
            project and cultivate the culture of DevOps within team.</p>
        </div>
        
    </div>

    {/* for bottom grid sections */}
    <div className="row ">
    <div className="col-lg-1"></div>
        <div className="col-lg-10">
        <h3 className="head_txt_devops2" data-aos="fade-up-right">Eliminate the fear of change </h3>
            <p className="txt_devops2" data-aos="fade-up-right">Fear of change is one of major hurdle in the DevOps lifecycle. The best way is to start small by moving forward with a calculated and sustainable risk. The major dysfunction is a fear of conflict among team members. All great relationships require productive conflict in order to grow. To make error is 
            human. To propagate error to all server in automatic way is #devops.</p>
        </div>
        <div className="col-lg-1"></div>
    </div>
    {/* 2nd bottom */}
    <div className="row ">
    <div className="col-lg-1"></div>
        <div className="col-lg-10">
        <h3 className="head_txt_devops2" data-aos="fade-up-right">	Tools </h3>
            <p className="txt_devops2" data-aos="fade-up-right">No single tool can solve all the purpose of 
            DevOps. Rather its a chain of tools solving specific purpose.</p>
            <ol className="ol_devops" data-aos="fade-up-right">
                <li className="li_devops" data-aos="fade-up-right">Code — code development and review, source code management tools, code merging</li>
                <li className="li_devops" data-aos="fade-up-right">Build — continuous integration tools, build status</li>
                <li className="li_devops" data-aos="fade-up-right">Test — continuous testing tools that provide feedback on business risks</li>
                <li className="li_devops" data-aos="fade-up-right">Package — artifact repository, application pre-deployment staging</li>
                <li className="li_devops" data-aos="fade-up-right">Release — change management, release approvals, release automation</li>
                <li className="li_devops" data-aos="fade-up-right">Configure — infrastructure configuration and management, Infrastructure as Code tools</li>
                <li className="li_devops" data-aos="fade-up-right">Monitor — applications performance monitoring, end–user experience</li>
            </ol>
        </div>
        <div className="col-lg-1"></div>
    </div>
    {/* 3rd bottom grid */}
    <div className="row ">
    <div className="col-lg-1"></div>
        <div className="col-lg-10">
        <h3 className="head_txt_devops2" data-aos="fade-up-right">Establish the Talent / Team</h3>
            <p className="txt_devops2" data-aos="fade-up-right">Having tools needs correct talent to operate them and get desired ROI. DevOps is more of a mindset and requires cultutal change to adopt it. At iCore Software Systems we bridge the talent with the correct 
            tools and strategize the Continuous Integration and Deployments</p>
        </div>
        <div className="col-lg-1"></div>
    </div>

        {/* 4th bottom grid */}
        <div className="row ">
    <div className="col-lg-1"></div>
        <div className="col-lg-10">
        <h3 className="head_txt_devops2" data-aos="fade-up-right">Generalizing the goal</h3>
            <p className="txt_devops2" data-aos="fade-up-right">Development and operations have fundamentally different goals, so some people are wary about how they can collaborate in DevOps. 
            Generalizing the goal should be the priority.</p>
        </div>
        <div className="col-lg-1"></div>
    </div>

    <div className="row ">

        <div className="col-lg-12">
            <p className="txt_devops1" data-aos="fade-up-right">iCore Software Systems can guide you through the key challenges of transformation and make your cloud strategy take shape. We have the working experience to help you reshape your infrastructure and swiftly gain the economies and security the Cloud promises that encompass
             robust features of Microsoft Azure and Amazon Web Services</p>
        </div>
        
    </div>

</div>
<Footer/>
     </div>

);
};

export default Devops;