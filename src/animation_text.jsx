import React, { useEffect } from 'react';
import anime from 'animejs';
import './animation_text.css';

const Animation_Text = () => {
    useEffect(() => {
        anime.timeline({ loop: true })
            .add({
                targets: '.ml9_new .letter_animations',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: function (el, i) {
                    return 45 * (i + 1);
                }
            }).add({
                targets: '.ml9_new',
                opacity: 0,
                duration: 500,
                easing: "easeOutExpo",
                delay: 2000
            });
    }, []);

    return (
        <div>
            <h1 className="ml9_new">
                <span className="text-wrapper_new_animations">
                    <span className="letter_animations">Contact Us...</span>
                    {/* <span className="letter_animations">Coffee </span> */}
                </span>
            </h1>
        </div>
    );
};

export default Animation_Text;
