import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import NotFoundImage from './img_new/not_found.png';

const NotFound = () => {
    return (
        <div>
            <Header />
            <img src={NotFoundImage} alt="not found" />
            <center>
                <Link to="/" className="not_found_backto">Back to Home Page</Link>
            </center>
            <Footer />
        </div>
    );
};

export default NotFound;
