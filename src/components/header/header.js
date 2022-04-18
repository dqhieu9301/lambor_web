import React, { useEffect, useState } from 'react';
import './header.scss';
import logo from '../../img/logo.png';
import '../../img/themify-icons-font/themify-icons/themify-icons.css';
import '../../img/fontawesome-free-6.1.0-web/css/all.min.css';
const Header = () => {
    const [stateMenu, setstateMenu] = useState(false)
    const [stateSearch, setstateSearch] = useState(false)
    return (
        <>
            <div className='header'>
                <div className='header-container'>
                    <a href='/'><img src={logo}></img></a>
                    <div className='nav'>
                        <div className='nav-bar-1'>
                            <ul>
                                <li className='li-models'><a href=''>MODELS</a>
                                    <div className='nav-models'>
                                        <p>AVENTADOR</p>
                                        <p>HURACÁN</p>
                                        <p>URUS</p>
                                        <p>PRE-OWNED</p>
                                        <p>LIMITED SERIES</p>
                                        <p>CONCEPT</p>
                                    </div></li>
                                <li className='li-custom_solutions'><a href=''>CUSTOM SOLUTONS</a>
                                    <div className='nav-custom_solutions'>
                                        <p>CUSTOMIZATION</p>
                                        <p>ACCESSORIES</p>
                                        <p>FINANCIAL SERVICES</p>
                                        <p>WARRANTY EXTENSION</p>
                                    </div></li>
                                <li className='li-ownership'><a href=''>OWNERSHIP</a>
                                    <div className='nav-ownership'>
                                        <p>CONNECTIVITY</p>
                                        <p>CUSTOMER APP</p>
                                        <p>MOBILITY PROGRAM</p>
                                        <p>CALSSICS</p>
                                        <p>SERVICE</p>
                                        <p>RECALL CAMPAIGN</p>
                                    </div></li>
                                <li className='li-motorsport'><a href=''>MOTORSPORT</a>
                                    <div className='nav-motorsport'>
                                        <p>SUPER TROFEO</p>
                                        <p>GT3</p>
                                        <p>MOTORSPORT MODELS</p>
                                        <p>DRIVERS</p>
                                        <p>MOTORSPROT NEWS</p>
                                        <p>EXPERIENCE</p>
                                        <p>ESPORTS</p>
                                    </div></li>
                            </ul>
                        </div>
                        <div className='nav-bar-2'>
                            <div className='nav-bar-item1'>
                                <ul>
                                    <li><a href=''>DEALERSHIPS</a></li>
                                    <li><a href=''>MUSEUM</a></li>
                                    <li><a href=''>STORE</a></li>
                                </ul>
                            </div>
                            <div className='nav-bar-item2'>
                                <ul>
                                    <li><a href='/login'><i class="fa-solid fa-user"></i></a></li>
                                    <li onClick={() => setstateSearch(true)}><i className='ti-search'></i>
                                        <div className='search' style={{ height: stateSearch ? '100vh' : '0px' }}>
                                            <div className='search-container'>
                                                <span onClick={() => {
                                                    setstateSearch(false)
                                                    console.log(stateSearch)
                                                }}>CLOSE SEARCH <i className='ti-close'></i></span>
                                                <h3>LAMBORGHINI</h3>
                                                <h1>SEARCH IN THE<br />
                                                    WEBSITE</h1>
                                                <input type='text' placeholder='Search on Lamborghini.com'></input><button>Search</button>
                                            </div>
                                        </div></li>
                                    <li onClick={() => {
                                        setstateMenu(!stateMenu)
                                    }}>
                                        {stateMenu ? <i className='ti-close'></i> : <i className='ti-menu'>
                                        </i>}
                                        <div className='taskbar-menu' style={{ height: stateMenu ? '200px' : '0px' }}>
                                            <div className='taskbar-menu-container'>
                                                <div className='taskbar-menu-item'>
                                                    <ul>
                                                        <li>DESIGN</li><br />
                                                        <li>INNOVATION & EXCELLENCE</li><br />
                                                    </ul>
                                                </div>
                                                <div className='taskbar-menu-item'>
                                                    <ul>
                                                        <li>DRIVING PROGRAMS</li><br />
                                                        <li>LOUNGE</li><br />
                                                        <li>CLUB</li>
                                                    </ul>
                                                </div>
                                                <div className='taskbar-menu-item'>
                                                    <ul>
                                                        <li>HISTORY</li><br />
                                                        <li>NEWS</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='separation'></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='overlay-header' style={{ display: stateMenu ? 'inherit' : 'none' }}></div>
                    <div className='overlay-header-search' style={{ display: stateSearch ? 'inherit' : 'none' }}></div>
                </div>
            </div>
            <div className='header-bottom'>
                <span>Fuel consumption and emission values of all vehicles promoted on this page*; Fuel consumption combined: 19,5-12,7 l/100km (WLTP); CO2-emissions combined: 448-325 g/km (WLTP)</span>
            </div>
        </>
    )

}

export default Header;