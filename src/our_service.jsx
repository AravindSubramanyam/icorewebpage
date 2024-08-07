import React, { useEffect } from 'react';
import './our_service.css';

const OurService = () => {
    useEffect(() => {
        // Uncomment and modify if needed
        // const ctmove = () => {
        //     i--;
        //     document.getElementById("our_services").style.backgroundPosition = i + "px";
        // };
        // const intervalId = window.setInterval(ctmove, 30);

        // return () => {
        //     clearInterval(intervalId);
        // };
    }, []);

    return (
        <div>
            <main>
                <section id="our_services" className="main-title">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-12 text-center">
                                <h1>Our Services</h1>
                                <p><br /></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default OurService;
