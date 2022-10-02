import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <section 
        style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}
        className=''>
            <footer className="footer p-10 flex justify-around text-dark-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div>
                <p className='text-center py-2'>Copyright © 2022 - All right reserved</p>
            </div>
        </section>
    );
};

export default Footer;