import React, { useEffect, useState } from 'react';
import './models.scss';
import URUS from '../../../img/277332242_3092987490959627_1605369733827404094_n.png'
import HURACÁN from '../../../img/275257164_665154341214568_4886975037630627981_n.png'
import AVENTADOR from '../../../img/277927110_2569506373182539_4518683498330456087_n.png'
const Modelss = () => {
    const [state, setState] = useState(1)
    const [stateModelCar, setstateModelCar] = useState(0)
    const styleBt = {
        true: {
            borderBottom: "3px solid #000",
            opacity: "1"
        },

        false: {
            borderBottom: "3px solid #000",
        }
    }

    const ModelCar = [
        {
            name: "AVENTADOR",
            title: "REAL EMOTIONS SHAPE THE FUTURE"
        }, {
            name: "HURACÁN",
            title: "TAKE ALL YOUR SOULS TO DRIVE"
        },
        {
            name: "URUS",
            title: "UNLOCK ANY ROAD"
        }
    ]

    const modelsForward = () => {
        const models = document.querySelectorAll('.model-slider')
        const modelActive = models[2]
        const copy = models[2].cloneNode(true)
        const modelContainer = document.querySelector('.model-slider-container')
        const overlays = document.querySelectorAll('.slider-image .overlay')
        overlays[2].style = 'opacity: 0.7'
        overlays[1].style = 'opacity: 0'
        modelContainer.insertBefore(modelActive, modelContainer.children[0])
        modelContainer.appendChild(copy)
        modelActive.classList.remove('active')
        modelActive.classList.add('style')
        setTimeout(() => {
            models[1].classList.remove('style');
            models[1].classList.add('active');
            copy.style.width = '0'
            setTimeout(() => {
                copy.remove();
            }, 500);
        }, 1)
        console.log(stateModelCar)
        if (stateModelCar === models.length - 1) {
            setstateModelCar(0)
        }
        else setstateModelCar(stateModelCar + 1)
    }


    const modelsBack = () => {
        const overlays = document.querySelectorAll('.slider-image .overlay')
        overlays[2].style = 'opacity: 0.7'
        overlays[0].style = 'opacity: 0'
        const models = document.querySelectorAll('.model-slider')
        const modelActive = models[0]
        const modelActiving = models[2]
        const copy = models[0].cloneNode(true)
        const modelContainer = document.querySelector('.model-slider-container')
        copy.style.transtionDuration = '0'
        copy.style.width = '0'
        modelContainer.appendChild(copy)

        setTimeout(() => {
            copy.removeAttribute('style');

            setTimeout(() => {
                copy.classList.remove('style');
                copy.classList.add('active');
                modelActiving.classList.remove('active');
                modelActiving.classList.add('style');

                setTimeout(() => {
                    modelActive.remove();
                }, 503);
            }, 1);
        }, 1)

        if (stateModelCar === 0) {
            setstateModelCar(models.length - 1)
        }
        else setstateModelCar(stateModelCar - 1)
    }
    const NameCar = ModelCar[stateModelCar].name.split('')
    const TitleCar = ModelCar[stateModelCar].title
    useEffect(function () {
        const models_carname = document.querySelector('.models-carname')
        const titleCar = document.querySelector('.models-content span')
        models_carname.style = 'transform : translateX(-150%)'
        titleCar.style = 'transform : translateX(-150%)'
        let x = 0
        const Animation = setInterval(() => {
            if (x > 1) clearInterval(Animation)
            else {
                if (x === 0) {
                    models_carname.style = 'transform : translateX(0)'
                    x++
                }
                else {
                    titleCar.style = 'transform : translateX(0)'
                    x++
                }
            }
        }, 300)
    }, [stateModelCar]);

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
        else if (state === 2) return "HURANCÁN"
        else return "URUS"
    }
    return (
        <>
            <div className='models'>
                <div className='model-slider-container'>
                    <div className='model-slider skew1 style'>
                        <div className='slider-image'>
                            <div className='overlay'></div>
                            <div className='slider-image-fix'>
                                <img src={URUS}></img>
                            </div>
                        </div>
                    </div>
                    <div className='model-slider skew2 style'>
                        <div className='slider-image'>
                            <div className='overlay'></div>
                            <div className='slider-image-fix'>
                                <img src={HURACÁN}></img>
                            </div>
                        </div>
                    </div>
                    <div className='model-slider skew3 active'>
                        <div className='slider-image'>
                            <div className='overlay'></div>
                            <div className='slider-image-fix'>
                                <img src={AVENTADOR}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='models-content'>
                    <h2>MODELS</h2>
                    <button className='bton_left' onClick={modelsBack}><i className='ti-angle-left'></i></button>
                    <button className='bton_right' onClick={modelsForward}><i className='ti-angle-right'></i></button>
                    <div className='models-carname'>
                        {NameCar.map((element) => {
                            return (
                                <div>{element}</div>
                            )
                        })}
                    </div>
                    <span>{TitleCar}</span>

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