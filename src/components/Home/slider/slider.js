import React, { useEffect, useState } from 'react';
import './slider.scss';
import '../../../img/fontawesome-free-6.1.0-web/css/all.min.css';
import '../../../img/themify-icons-font/themify-icons/themify-icons.css'
const Slider = () => {
    const [state, setState] = useState(false)
    window.addEventListener('load', function () {
        const ArrHuracán = document.querySelectorAll('.huracán div')
        const ArrTecnica = document.querySelectorAll('.tecnica div')
        let i = 0
        let j = 0
        const interval = setInterval(function () {
            if (j >= ArrTecnica.length) clearInterval(interval)
            else {
                if (i < ArrHuracán.length) {
                    ArrHuracán[i].style = 'opacity: 1'
                    i++
                }
                else {
                    if (j < ArrTecnica.length) {
                        ArrTecnica[j].style = 'opacity: 1'
                        j++
                    }
                }
            }
        }, 150)
        const contentdate = document.querySelector('.content-date')
        const width = window.innerWidth
        if (width > 740) {
            contentdate.style = 'left: 160px'
        }
        else {
            contentdate.style = 'left: 13px'
        }
        window.addEventListener('resize', () => {
            const width = window.innerWidth
            if (width > 740) {
                contentdate.style = 'left: 160px'
            }
            else {
                contentdate.style = 'left: 13px'
            }
        })
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
                <div className='huracán'>
                    <div>H</div>
                    <div>U</div>
                    <div>R</div>
                    <div>A</div>
                    <div>C</div>
                    <div>Á</div>
                    <div>N</div>
                </div>
                <div className='tecnica'>
                    <div>T</div>
                    <div>E</div>
                    <div>C</div>
                    <div>N</div>
                    <div>I</div>
                    <div>C</div>
                    <div>A</div>
                </div>
            </h1>
            <h2 className='content-date'>TAKE ALL YOUR<br />
                SOULS TO DRIVE</h2>
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