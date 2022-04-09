import React, { useEffect, useState } from 'react';
import './slider.scss';
import '../../../img/fontawesome-free-6.1.0-web/css/all.min.css';
import '../../../img/themify-icons-font/themify-icons/themify-icons.css'
const Slider = () => {
    const [state, setState] = useState(false)
    window.addEventListener('load', function () {
        const ArrSave = document.querySelectorAll('.save div')
        const ArrThe = document.querySelectorAll('.the div')
        const ArrDate = document.querySelectorAll('.date div')
        let i = 0
        let j = 0
        let k = 0
        const interval = setInterval(function () {
            if (k >= ArrDate.length) clearInterval(interval)
            else {
                if (i < ArrSave.length) {
                    ArrSave[i].style = 'opacity: 1'
                    i++
                }
                else {
                    if (j < ArrThe.length) {
                        ArrThe[j].style = 'opacity: 1'
                        j++
                    }
                    else {
                        ArrDate[k].style = 'opacity: 1'
                        k++
                    }
                }
            }
        }, 150)
        const contentdate = document.querySelector('.content-date')
        contentdate.style = 'left: 160px'
    })

    const handleOnclick = () => {
        setState(!state)
    }
    useEffect(function () {
        const angle_down = document.querySelector('.ti-angle-down')
        if (state) {
            angle_down.style = 'transform: rotate(180deg)';
        }

        else {
            angle_down.style = 'transform: rotate(0deg)';
        }
    }, [state])
    return (
        <div className='slider'>
            <h1 className='page-title'>
                <div className='save'>
                    <div>S</div>
                    <div>A</div>
                    <div>V</div>
                    <div>E</div>
                </div>
                <div className='the'>
                    <div>T</div>
                    <div>H</div>
                    <div>E</div>
                </div>
                <div className='date'>
                    <div>D</div>
                    <div>A</div>
                    <div>T</div>
                    <div>E</div>
                </div>
            </h1>
            <h2 className='content-date'>12 APRIL 2022<br />
                12 PM CEST</h2>
            <span onClick={handleOnclick}>SAVE THE DATE <i className='ti-angle-down'></i></span>
            <div className='menu_span' style={{ display: state ? 'inherit' : 'none' }}>
                <ul>
                    <li><a href=''>GOOGLE</a></li>
                    <li><a href=''>APPLE</a></li>
                    <li><a href=''>OUTLOOK</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Slider;