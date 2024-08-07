import React, { useEffect } from 'react';
// import './css/allblogs.css';
import './css/allblogs.css';
import Header from './header.jsx';
// import Contact_us_Inner_new1 from './contact_us_page/contact_us_map.js';
import Footer from './footer.jsx';
import $ from 'jquery';
import DocumentMeta from 'react-document-meta';
import { Helmet } from "react-helmet";
// import Helmet from 'react-helmet';
import blog12 from './img_new/blog12.jpg';
import blog13centerdown from './img_new/Permalink.jpg';
import blog13center from './img_new/mobile device.jpg';
// import Blog_header from './img_new/blog_header.jpg'

const Blogs13 = () => {
    useEffect(() => {
        // componentDidMount logic goes here
    }, []);

    /*const meta = {
        title: 'Mobile Application Development Using Ionic Framework | blog-two',
        description: 'Mobile applications are applications that combine native apps and web apps. Using Ionic framework our mobile application developers enhance user experience.',
        canonical: 'https://www.icoresoftwaresystems.com/blog-two',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'Technology-driven, Problem-solving, Excellence, Customer-focus, Accountability'
            }
        }
    }*/

    return (
        /*<DocumentMeta {...meta}/>*/
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>How to make your WordPress URL SEO Friendly?</title>
                <meta name="description" content="Any website resorts to SEO or search engine optimization to beget or increase traffic. While there are many facets to accomplishing SEO, one of the main factors impacting it, is the structure of the URL." />
                <link rel="canonical" href="https://www.icoresoftwaresystems.com/blog/how-to-make-your-WordPress-URL-SEO-Friendly" />
            </Helmet>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="blog_txt_title head word_breakblog">How to make your WordPress URL SEO Friendly?</h1>&nbsp;
                        <p className=" force-overflow blogs_p" id="style-3">Any website resorts to SEO or search engine optimization to beget or increase traffic. While there are many facets to accomplishing SEO, one of the main factors impacting it, is the structure of the URL. The success of a website is determined by its organic visibility and rank, which predominantly depends on an SEO friendly WordPress Custom URL. It is also one of the most popular ways to maximize your website’s online presence, making indexing extremely easy.
                        </p>
                        <p className=" force-overflow blogs_p" id="style-3">Your URL doesn’t change with time, thus making it a permanent impression of your website. WordPress, however, does provide default URL structures that are not optimized for the web. That is why you must get a WordPress URL or permalink that is SEO friendly.</p>
                        <h2 className="blogs13_h2">91.5% of the traffic share for a keyword or phrase goes to sites listed first in Google’s search results, and 32.5% of that traffic alone goes to the first result. – Search Engine Journal</h2><br />
                        <h3 className=" force-overflow blogs_p" id="style-3"><b>What is an SEO Friendly URL?</b>
                        </h3>
                        <p className="blogs_p">Working just like regular URLs SEO friendly URLs are embedded with keywords that describe the contents of the page. Search engines comprehend these easily and instantly rank these. Chances are you precede higher in the SERPs, with URLs that are well-comprehended by search engines.</p><br />
                        <p className="blogs_p">Example of SEO-friendly URL: <a href="/web-application-development-company/#cms-dev" className="updating_link">https://www.icoresoftwaresystems.com/blog/E-Commerce-Augmented-Reality-App-in-Texas</a></p><br />
                        <p className="blogs_p">Example of non-SEO friendly: https://webdamn.com/?p=77</p><br />
                        <h3 className=" force-overflow blogs_p" id="style-3"><b>How to make your WordPress URL SEO friendly?</b></h3>
                        <p className=" force-overflow blogs_p" id="style-3">WordPress is commonly considered as one of the most SEO friendly platforms. Its features can help you optimize your content for search engines. Moreover, there are some built-in features and tools that you can use to improve your ranking choices.</p>
                        <h3 className=" force-overflow blogs_p" id="style-3"><b>Managed Hosting Service</b></h3>
                        <p className=" force-overflow blogs_p" id="style-3">You’ll want to select a hosting service that helps protect and speed up your site, even before the installation of WordPress. A breached or slow site leads to traffic loss due to poor user experiences, even if security and speed may not impact ranking. It is the user’s impression that influences the SEO of the website.</p>
                        <h2 className="blogs13_h2">Take the right steps to optimize your code, content and formatting for the search engines, to index them.</h2>
                        <p className=" force-overflow blogs_p" id="style-3">Managed hosting is an excellent option if you wish to optimize your site. Essentially, it means some responsibilities of running the content are shared by the hosting company. Malware scans, daily backups, consistent caching of the site, closing security loopholes, and updating your WordPress themes and plugins, are regularly performed by them. Reach out to us to run reliable, fast, and accurate websites. On the whole, managed hosting simplifies the optimization process to provide better speeds, load times, and security.</p>
                        <h3 className=" force-overflow blogs_p" id="style-3"><b>SEO-optimized WordPress Theme</b></h3>
                        <p className=" force-overflow blogs_p" id="style-3">Did you know Google first displays mobile-friendly results? This means a responsive theme is imperative to optimize the site for mobile devices and desktops equally.</p><br /><br />
                        <img className="chatimg" alt="iCore-Auto-update themes and plugins" src={blog13center} /><br /><br />
                        <p className=" force-overflow blogs_p" id="style-3">When you are making your selection, you may want to consider the theme’s design and code as well. A feature-rich theme or a poorly coded one could slow down the website. This will only impact visitor experience and subsequently search ranking. Choose a theme that is fully responsive and coded with CSS3 and HTML5.</p>
        <h3 className=" force-overflow blogs_p" id="style-3"><b>Best Permalink Structure for WordPress</b></h3>
        <p className=" force-overflow blogs_p" id="style-3">Traditionally, you would have to create SEO friendly URLs since WordPress would only provide non-SEO friendly URLs. In the contemporary versions, post name is used to create fully SEO friendly URLs. Your website URLs, today, are automatically rendered SEO friendly when you install WordPress. Thus, you can get into the permalink settings to modify your URL structures according to your requirement.</p><br/><br/>
        <img className="chatimg" alt="iCore-Auto-update themes and plugins" src={blog13centerdown}/>
        {/* <h2 className="blogs13_h2_permalink">Settings > Permalink > Post Name</h2> */}
        <p className=" force-overflow blogs_p" id="style-3">While WordPress uses a plain permalink by default, the URLs get randomly assigned to a series of question marks and numbers to differentiate them. This, unfortunately, does not help search engine crawlers and readers tend to lose track or value of your content. Use a single command as above to change your permalink structure and inject keywords targeted into your post.</p>
        <p className=" force-overflow blogs_p" id="style-3">Reach out to iCore to create your WordPress SEO friendly URL to rank you on top of the search engines.</p>

       
         </div>
         </div>
        </div><br/>

            <Footer/> 
            </div>
   );
};

export default Blogs13;