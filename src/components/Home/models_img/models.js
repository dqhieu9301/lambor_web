import React, { useEffect, useState } from 'react';
import './models.scss';
import URUS from '../../../img/277332242_3092987490959627_1605369733827404094_n.png'
import HURACÁN from '../../../img/275257164_665154341214568_4886975037630627981_n.png'
import AVENTADOR from '../../../img/277927110_2569506373182539_4518683498330456087_n.png'
const Modelss = () => {
    const [state, setState] = useState(1)
    const styleBt = {
        true: {
            borderBottom: "3px solid #000",
            opacity: "1"
        },

        false: {
            borderBottom: "3px solid #000",
        }
    }
    useEffect(function () {
        const configurator_main = document.querySelector(".configurator-main")
        const configurator_items = document.querySelectorAll(".configurator-item")
        const Lengitem = configurator_items[0].offsetWidth
        const position = -Lengitem * (state - 1)
        configurator_main.style = `transform: translateX(${position}px)`

        const titleDivs = document.querySelectorAll('.title div')
        let a = 0
        titleDivs.forEach(Element => {
            Element.style = 'opacity: 0'
        })
        const configurator = setInterval(function () {
            if (a >= titleDivs.length) {
                clearInterval(configurator)
            }
            else {
                titleDivs[a].style = 'opacity: 1'
                a++
            }
        }, 100)
        const titleCreat_you = document.querySelector('.configurator-content h2')
        const carname = document.querySelector('.configurator-content h1')
        titleCreat_you.style = "transform: translateX(-150%)"
        carname.style = "transform: translateX(-150%)"
        let b = 0
        const Animation = setInterval(function () {
            if (b > 1) clearInterval(Animation)
            else {
                if (b === 0) {
                    titleCreat_you.style = "transform: translateX(0)"
                    b++
                }
                else {
                    carname.style = "transform: translateX(0)"
                    b++
                }
            }
        }, 500)
    }, [state])

    const CarName = () => {
        if (state === 1) return "AVENTADOR"
        else if (state == 2) return "HURANCÁN"
        else return "URUS"
    }
    return (
        <>
            <div className='models'>
                <div className='model-slider-container'>
                    <div className='model-slider skew1'>
                        <div className='slider-image'>
                            <div className='overlay'></div>
                            <div className='slider-image-fix'>
                                <img src={URUS}></img>
                            </div>
                        </div>
                    </div>
                    <div className='model-slider skew2'>
                        <div className='slider-image'>
                            <div className='overlay'></div>
                            <div className='slider-image-fix'>
                                <img src={HURACÁN}></img>
                            </div>
                        </div>
                    </div>
                    <div className='model-slider skew3'>
                        <div className='slider-image'>
                            <div className='slider-image-fix'>
                                <img src={AVENTADOR}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='models-content'>
                    <h2>MODELS</h2>
                    <button className='bton_left'><i className='ti-angle-left'></i></button>
                    <button className='bton_right'><i className='ti-angle-right'></i></button>
                    <div className='models-carname'>
                        <div>A</div>
                        <div>V</div>
                        <div>E</div>
                        <div>N</div>
                        <div>T</div>
                        <div>A</div>
                        <div>D</div>
                        <div>O</div>
                        <div>R</div>
                    </div>
                    <span>REAL EMOTIONS SHAPE THE FUTURE</span>

                    <div className='bton-explore'>
                        <button className='bton-plus'>
                            <i className='ti-plus'></i>
                            <p>Explore the <br />
                                models</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='configurator'>
                <div className='configurator-container'>
                    <div className='configurator-main'>
                        <div className='configurator-item item1'>
                        </div>
                        <div className='configurator-item item2'>
                        </div>
                        <div className='configurator-item item3'>
                        </div>
                    </div>
                    <div className='configurator-content'>
                        <div className='title'>
                            <div>C</div>
                            <div>O</div>
                            <div>N</div>
                            <div>F</div>
                            <div>I</div>
                            <div>G</div>
                            <div>U</div>
                            <div>R</div>
                            <div>A</div>
                            <div>T</div>
                            <div>O</div>
                            <div>R</div>
                        </div>
                        <h2>CREATE YOU</h2>
                        <h1>{CarName()}</h1>
                        <button className='bton_left'><i className='ti-angle-right'></i></button>
                        <div className='nav_bton'>
                            <button style={state === 1 ? styleBt.true : styleBt.false} onClick={() => { setState(1) }}><p>Aventador</p></button>
                            <button style={state === 2 ? styleBt.true : styleBt.false} onClick={() => { setState(2) }}><p>Huracán</p></button>
                            <button style={state === 3 ? styleBt.true : styleBt.false} onClick={() => { setState(3) }}><p>Urus</p></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dealer-locator">
                <div className='dealer-locator-container'>
                    <h2>DEALER LOCATOR</h2>
                    <h1>FIND YOUR<br />
                        COUNTRY DEALER</h1>
                    <div className='dealer-locator-bton'>
                        <button className='bton_right'><i className='ti-angle-right'></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modelss;