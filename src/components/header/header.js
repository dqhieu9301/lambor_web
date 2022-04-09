import React from 'react';
import './header.scss';
import logo from '../../img/logo.png';
import '../../img/themify-icons-font/themify-icons/themify-icons.css';
import '../../img/fontawesome-free-6.1.0-web/css/all.min.css';
const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header-container'>
                    <img src={logo}></img>
                    <div className='nav'>
                        <div className='nav-bar-1'>
                            <ul>
                                <li><a href=''>MODELS</a></li>
                                <li><a href=''>CUSTOM SOLUTONS</a></li>
                                <li><a href=''>OWNERSHIP</a></li>
                                <li><a href=''>MOTORSPORT</a></li>
                            </ul>
                        </div>
                        <div className='nav-bar-2'>
                            <ul>
                                <li><a href=''>DEALERSHIPS</a></li>
                                <li><a href=''>MUSEUM</a></li>
                                <li><a href=''>STORE</a></li>
                                <li><a href=''><i class="fa-solid fa-message"></i></a></li>
                                <li><a href=''><i className='ti-search'></i></a></li>
                                <li><a href=''><i className='ti-menu'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='header-bottom'>
                    <span>Fuel consumption and emission values of all vehicles promoted on this page*; Fuel consumption combined: 19,5-12,7 l/100km (WLTP); CO2-emissions combined: 448-325 g/km (WLTP)</span>
                </div>
            </div>
        </>
    )
}

export default Header;