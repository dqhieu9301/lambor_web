import React from "react";
import './footer.scss';
import '../../img/themify-icons-font/themify-icons/themify-icons.css';
import '../../img/fontawesome-free-6.1.0-web/css/all.min.css';
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="nav-menu">
                    <div className="nav-menu-item">
                        <ul>
                            <li><a href="">COMPANY</a></li>
                            <li><a href="">CAREERS</a></li>
                            <li><a href="">CONTACT US</a></li>
                            <li><a href="">MEDIA CENTER</a></li>
                            <li><a href="">PRIVACY & LEGAL</a></li>
                            <li><a href="">COOKIE SETTING</a></li>
                            <li><a href="">SITEMAP</a></li>
                        </ul>
                    </div>
                    <div className="nav-menu-item icon">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-tiktok"></i>
                        <i class="fa-brands fa-weibo"></i>
                        <i class="fa-brands fa-weixin"></i>
                    </div>
                </div>
                <p>The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.</p>
                <h4>Copyright © 2022 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.<br />

                    All rights reserved. VAT no. IT 00591801204</h4>
                <div className="nav-menu-item-icon-reponsi">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-weibo"></i>
                    <i class="fa-brands fa-weixin"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer;