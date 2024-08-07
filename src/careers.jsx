import React, { useEffect } from 'react';
import Header from './header.jsx';
import { CollapsibleComponent, CollapsibleHead, CollapsibleContent } from 'react-collapsible-component';
import Career_inner from './img_new/career_bg_inner.jpg';
import DocumentMeta from 'react-document-meta';
import { Helmet } from "react-helmet";
import Footer from './footer.jsx';
import $ from 'jquery';

const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        $(document).ready(function() {
            $('.nav_bar_adding_career').addClass('active_cus');
        });
    }, []);

    const currentPath = window.location.pathname;
    const canonicalUrl = `https://www.icoresoftwaresystems.com${currentPath}`;
    const meta = {
        title: 'Browse through our openings | careers',
        description: 'iCore Software Systems Pvt. Ltd is a fastly growing IT services and products company in Chennai, India. With the parent company based out of Texas, USA, iCore offers tremendous growth potential for all of its employees who aspire to have long lasting growth in IT sector around the globe.',
        canonical: 'https://www.icoresoftwaresystems.com/careers',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'Technology-driven, Problem-solving, Excellence, Customer-focus, Accountability'
            }
        }
    };

    return (
        <div>
            <DocumentMeta {...meta} />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Browse through our openings | careers</title>
                <meta name="description" content="iCore Software Systems Pvt. Ltd is a fastly growing IT services and products company in Chennai, India. With the parent company based out of Texas, USA, iCore offers tremendous growth potential for all of its employees who aspire to have long lasting growth in IT sector around the globe." />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <Header />
            <div className="container-fulid">
                <div className="row">
                    <div className="col-lg-12 career_header">
                        {/* <h3 className="head_blog">Careers</h3> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 pad_accoridian">
                        <p className="atag_center"> If you would like to join our family, please mail your resume to <a className="atag_accordian" href="mailto:hr@icoresoftwaresystems.com">hr@icoresoftwaresystems.com</a></p>
                        <img src={Career_inner} alt="not-found" />

                            
            <CollapsibleComponent>
            <CollapsibleHead isExpanded={true}>US IT Recruiter <i class="fa fa-chevron-circle-down flt_right_career" aria-hidden="true"></i></CollapsibleHead>
                <CollapsibleContent isExpanded={true}>
                {/* <p><b>Work days : Monday to Friday Working time: Night Shift (7.30 pm to 4.30 am)</b></p>                 */}
                <p><b>Positions : Sr. US IT Recruiter </b></p>
                
                <p><b>Required Skills : </b></p>
                <ul className="pad_ul_skills">
                    <li>Excellent verbal and personal presentation skills with the ability to persuasively present and represent business capabilities. </li>
                    <li>Ready to work in Night Shift </li>
                    <li>Possess strong written and oral communication skills. </li>
                </ul>
                <p><b>Daily Tasks : </b></p>
                <ul className="pad_ul_skills">
                    <li>Full life-cycle recruiting providing sourcing, pre-screening, interviewing, evaluating qualifications, negotiating benefits and salary, and presenting offers. </li>
                    <li>Working on Multiple Job Boards (Dice, Monster, CareerBuilder, LinkedIn, Prohires and others). Sourcing profiles according to the job specifications Screening - Technically profiles according to the job specifications Interview 
                        Scheduling & Follow-ups End to End Recruitment Life Cycle.</li>
                </ul>
                <p><b>Education :</b></p>
                <ul className="pad_ul_skills">
                    <li>Must hold a Bachelors or a Technical Degree in Computer Science or IT.</li>
                    <li>B.E/B.Tech or Bsc, Msc, MCA or other Technical Degree</li>
                </ul>
                <p><b>Benefits :</b></p>
                <ul className="pad_ul_skills">
                    <li>Excellent recurring Commissions and Incentives</li>
                    
                </ul>
                <p><b>Hiring Process : </b></p>
                <ul className="pad_ul_skills">
                    <li>Walk - In, Face-to-Face Interview, Telephonic Interview</li>
                </ul>
                <p><b>Job Type : </b></p>
                <ul className="pad_ul_skills">
                    <li>Full-time.</li>
                </ul>
                <ul className="">
                    <li>
                    <h3 className="atag_center"> If you would like to join our family, please mail your resume to <a className="atag_accordian" href="mailto:hr@icoresoftwaresystems.com">hr@icoresoftwaresystems.com</a></h3>
                    </li>
                </ul>
                </CollapsibleContent>
 
                <CollapsibleHead >Java Developer ( 1 to 4 years) <i class="fa fa-chevron-circle-down flt_right_career" aria-hidden="true"></i></CollapsibleHead>
                <CollapsibleContent >
                <p><b>Job Summary</b></p>                
                
                <p><b>Java Developer(1 to 4 years) responsibilities include :</b></p>
                <ul className="pad_ul_skills">
                    <li>Identifying and analyzing user requirements</li>
                    <li>Prioritizing, assigning and executing tasks throughout the Software Development Life Cycle </li>
                    <li>Developing Java applications </li>
                </ul>
                <p><b>Job Brief :</b></p>
                <ul className="pad_ul_skills">
                    <li>
                    We are looking for a Java Developer to manage the Software Development Life Cycle, from planning and prioritizing to testing and release.Java Developer responsibilities include gathering system and user requirements, building Java modules and testing features before release. If you have hands-on experience developing software with Agile methodologies and are ready to lead our Junior developers, we’d like to meet you.Ultimately, you will deploy and maintain functional, secure and high-quality 
                    applications.
                 </li></ul>
                <p><b>Responsibilities and Duties : </b></p>
                <p className={'ptag_pad_carrer'}>
                Identify and analyze user requirements</p>
                <ul className="pad_ul_skills liststyletype_li_career">
                    <li>Prioritize, assign and execute tasks throughout the Software Development Life Cycle</li>
                    <li>Develop Java applications</li>
                    <li>Write well-designed, efficient code</li>
                    <li>Review, test and debug team members’ code</li>
                    <li>Design database architecture</li>
                    <li>Schedule product releases with internal teams</li>
                    <li>Document development phases</li>
                    <li>Ensure our applications are secure and up-to-date</li>
                </ul>
                <p><b>Key Skills : </b></p>
                <ul className="pad_ul_skills">
                    <li><b>Java frameworks like Java Spring boot, Spring MVC, Hibernate, JPA, Angular and Ionic</b></li>
                    
                </ul>
                <p><b>Required Experience and Qualifications</b></p>
                <ul className="pad_ul_skills">
                    <li>Work experience as a Java Developer or similar role</li>
                    <li>Experience designing, building and testing Java EE applications</li>
                    <li><b>In-depth knowledge of popular Java frameworks like Java Spring boot, Spring MVC, Hibernate, JPA, Angular and Ionic</b></li>
                    <li>Experience with Object-Oriented Design (OOD)</li>
                    <li>Good delegation and time management skills</li>
                    <li>Problem-solving abilities</li>
                    <li>Bsc in Computer Science, Engineering or relevant field</li>
                </ul>
                <p><b>Experience: : </b></p>
                <ul className="pad_ul_skills">
                    <li>Software development: 1 year (Preferred)</li>
                    <li>Total work: 1 year (Preferred)</li>
                    <li>JSP: 1 year (Preferred)</li>
                    <li>Java: 1 year (Required)</li>
                </ul>
                <p><b>Job Type : </b></p>
                <ul className="pad_ul_skills">
                    <li>Full-time.</li>
                </ul>
                </CollapsibleContent>
                <CollapsibleHead >Project Manager cum Business Analyst (1 to 3) <i class="fa fa-chevron-circle-down flt_right_career" aria-hidden="true"></i></CollapsibleHead>
                <CollapsibleContent >
                <p><b>Job Summary</b></p>                
                
                <p><b>Project Manager Cum Business Analyst( 1 to 3 years) :</b></p>
                <p><b>Skills :</b></p>
                <ul className="pad_ul_skills">
                    <li>
                    Project Management, Project support ,Business Analyst, Business Consultant, Senior business 
                    analyst, Financial analyst, Research analyst, BA, Scrum Master
                 </li>
                 </ul>
                 <p><b>Industry : </b></p>
                 <ul className="pad_ul_skills">
                     <li>IT/Computers – Software</li>
                 </ul>
                 <p><b>Education : </b></p>
                 <ul className="pad_ul_skills">
                     <li>Must hold a Bachelors or a Technical Degree in computer or IT. B.E/B.Tech or Bsc, Msc, MCA or other Technical Degree. 
                         PMP Certified Candidates are preferred</li>
                 </ul>
                 <p><b>Job Brief : </b></p>
                 <ul className="pad_ul_skills">
                     <li>The Business Analyst will have experience with the Agile implementation methodology as well as knowledge of implementation approaches for all the projects</li>
                    <li>Developing technical solutions by discussing on the requirements with the technical and QA team to advance the quality of the project</li>
                 </ul>
                <p><b>Responsibilities and Duties : </b></p>
                <p className={'ptag_pad_carrer'}>
                Roles and Responsibilities</p>
                <ul className="pad_ul_skills liststyletype_li_career">
                    <li>Understanding of the business processes of the customer, Interacting with colleagues, Going throught the service calls/ resolutions, Interacting with Users within a reasonably quick time frame</li>
                    <li>Scope documentation for new enhancements / requirements</li>
                    <li>Co ordination with technical team & testing team, Functional testing</li>
                    <li>Post implementation support</li>
                    <li>Good idea of lending business processes,including accounting</li>
                    <li>Excellent Project Management skills</li>
                
                </ul>
                <p><b>Key Skills : </b></p>
                <ul className="pad_ul_skills">
                    <li><b>Project Management, Project support ,Business Analyst, Business Consultant, Senior business analyst, Financial analyst, Research analyst, BA, Scrum Master</b></li>
                    
                </ul>
                <p><b>Experience: : </b></p>
                <ul className="pad_ul_skills">
                    <li>Business Analysis: 1 year (Preferred)</li>
                    <li>Work: 1 year (Preferred)</li>
                    <li>Total work: 1 year (Preferred)</li>
                    <li>Project Management: 1 year (Preferred)</li>
                </ul>
                <p><b>Job Type : </b></p>
                <ul className="pad_ul_skills">
                    <li>Full-time.</li>
                </ul>
                </CollapsibleContent>
                <CollapsibleHead >Artificial Intelligence (AI) Internship <i class="fa fa-chevron-circle-down flt_right_career" aria-hidden="true"></i></CollapsibleHead>
                <CollapsibleContent >
                <p><b>Job Summary</b></p>                
                
                <p><b>Artificial Intelligence (AI) Internship :</b></p>
                <p><b>Skills :</b></p>
                <ul className="pad_ul_skills">
                    <li>
                    Artificial Intelligence
                 </li>
                 </ul>
                 <p><b>Industry : </b></p>
                 <ul className="pad_ul_skills">
                     <li>IT/Computers – Software</li>
                 </ul>
                 <p><b>Education : </b></p>
                 <ul className="pad_ul_skills">
                     <li>Must hold a Bachelors or a Technical Degree in computer or IT. B.E/B.Tech or Bsc, Msc, MCA or other Technical Degree. 
                        </li>
                 </ul>
                 <p><b>Job Brief : </b></p>
                 <ul className="pad_ul_skills">
                     <li>Selected intern's day-to-day responsibilities include: 1. Working on the given project 2. Working on Artificial Intelligence on drones 3. Integration of coding with the flight controller of the drone</li>
                 </ul>
                <p><b>Roles and Responsibilities : </b></p>
                
                <ul className="pad_ul_skills liststyletype_li_career">
                    <li>Are available for full time (in-office) internship</li>
                    <li>Have relevant skills and interests</li>
                </ul>
            
                <p><b>Experience: : </b></p>
                <ul className="pad_ul_skills">
                    <li>Freshers (or)</li>
                    <li>Relevant: 1 year (Preferred)</li>
                    <li>Total work: 1 year (Preferred)</li>
                </ul>
                <p><b>Job Type : </b></p>
                <ul className="pad_ul_skills">
                    <li>Full-time.</li>
                </ul>
                </CollapsibleContent>
                <CollapsibleHead >Python Developer - Freshers <i class="fa fa-chevron-circle-down flt_right_career" aria-hidden="true"></i></CollapsibleHead>
                <CollapsibleContent >
                <p><b>Job Summary</b></p>                
                
                <p><b>Artificial Intelligence (AI) Internship :</b></p>
                <p><b>Skills :</b></p>
                <ul className="pad_ul_skills">
                    <li>
                    Object Oriented Programming, Core Java, RDBMS, Linux (basics) , C , C++ , Image Processing , Sumlink , ASP.NET , C Sharp , VB.NET , Python , NS2 , NS3
                 </li>
                 </ul>
                 <p><b>Industry : </b></p>
                 <ul className="pad_ul_skills">
                     <li>IT/Computers – Software</li>
                 </ul>
                 <p><b>Education : </b></p>
                 <ul className="pad_ul_skills">
                     <li>Must hold a Bachelors or a Technical Degree in computer or IT. B.E/B.Tech or Bsc, Msc, MCA or other Technical Degree. 
                         </li>
                 </ul>
                 <p><b>Job Brief : </b></p>
        
                <p><b>Roles and Responsibilities : </b></p>
     
                <ul className="pad_ul_skills liststyletype_li_career">
                    <li>Bachelor's Degree in Computer Science or equivalent</li>
                    <li>Proficiency in developing objected-oriented software, with deep experience in Java / Dotnet / Matlab / Python</li>
                    <li>Knowledge of data structures & algorithms</li>
                    <li>Critical thinking and problem-solving skills</li>
                    <li>Good understanding of OOPS concept and Design pattern</li>
                    <li>Basic understanding of Thread programming</li>
                    <li>Knowledge on frameworks like Spring is a bonus</li>
                </ul>
            
                <p><b>Experience: : </b></p>
                <ul className="pad_ul_skills">
                    <li>Freshers (or)</li>
                    <li>Relevant : 1 year (Preferred)</li>
                    <li>Total work : 1 year (Preferred)</li>
                    <li>Project Management: 1 year (Preferred)</li>
                </ul>
                <p><b>Job Type : </b></p>
                <ul className="pad_ul_skills">
                    <li>Full-time.</li>
                </ul>
                </CollapsibleContent>
                {/* again */}
                <CollapsibleHead >Business Development Executive <i class="fa fa-chevron-circle-down flt_right_career" aria-hidden="true"></i></CollapsibleHead>
                <CollapsibleContent >
                <p><b>We are looking for young and energetic professionals for IT Sales Executive.</b></p>
                <p><b>Job Summary</b></p>                
                

                 <p><b>Industry : </b></p>
                 <ul className="pad_ul_skills">
                     <li>IT/Computers – Software</li>
                 </ul>
                <p><b>Roles and Responsibilities : </b></p>
                <p className={'ptag_pad_carrer'}>
                </p>
                <ul className="pad_ul_skills liststyletype_li_career">
                    <li>Prospect identification through cold calling / email marketing, Business Development and Lead Generation via Phone, Email and Web</li>
                    <li>Establish network of relationships with key decision makers in small / medium & large-sized companies and ability to leverage these relationships for generating new business / clients consistently</li>
                    <li>Responsible for Lead Generation & convert Leads for our Software Products and services</li>
                    <li>Ability to explain technical concept.</li>
                    <li>Must meet or exceed targets in prospecting and generating qualified leads.</li>
                    <li>Product Promotion through direct meetings, mailers and other modes</li>
                    <li>Conversion of leads to orders.</li>
                    <li>Handle all the client communication.</li>
                    <li>Negotiating on price and services. </li>
                    <li>Signing off the deal.</li>
                </ul>
                <p><b>Job Type : </b></p>
                <ul className="pad_ul_skills">
                    <li>Full-time.</li>
                </ul>
                </CollapsibleContent>
                <CollapsibleHead>Front End Developer <i class="fa fa-chevron-circle-down flt_right_career" aria-hidden="true"></i></CollapsibleHead>
                <CollapsibleContent>
                <p><b>Job Summary</b></p>                
                

                 <p><b>Industry : </b></p>
                 <ul className="pad_ul_skills">
                     <li>IT/Computers – Software</li>
                 </ul>
                <p><b>Job Description : </b></p>
                <ul className="pad_ul_skills liststyletype_li_career">
                    <li>To implement a complete user interface in the form of a mobile and desktop web app.</li>
                    <li>Delivering a complete front-end application.</li>
                    <li>Coordinating the workflow between the Graphic designer, the HTML coder, and yourself</li>
                    <li>Proficiency with Angular latest, JavaScript, HTML5, CSS3, Bootstrap, Ionic</li>
                    <li>Deep knowledge of AngularJS practices and commonly used modules based on extensive work experience</li>
                    <li>Thorough understanding of the responsibilities of the platform, database, API, caching layer, proxies, and other web services used in the system</li>
                    <li>Creating custom, general use modules and components which extend the elements and modules of core AngularJS</li>
                    <li>Creating configuration, build, and test scripts for Continuous Integration environments</li>
                    <li>Cooperating with the back-end developer in the process of building the RESTful API</li>
                    <li>Coordinating the workflow between the Graphic designer, the HTML coder, and yourself. </li>
                </ul>
                <p><b>Job Type : </b></p>
                <ul className="pad_ul_skills">
                    <li>Full-time.</li>
                </ul>
                </CollapsibleContent>
            </CollapsibleComponent>


                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Career;
