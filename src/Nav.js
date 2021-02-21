import React, { useState, useEffect } from 'react'; 
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false); 

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                 handleShow(true); //will show after 100 picels down yaxis, scroll
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll'); 
        };
    }, []);

    return (
        <div className = {`nav ${show && 'nav_black'}`}>
            <img
            className='nav_logo'
            src = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt = 'Netflix logo'
            />

            <img
            src = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
            className = 'nav_avatar'
            alt = 'avatar'
            />
        </div>
    );
};

export default Nav;
