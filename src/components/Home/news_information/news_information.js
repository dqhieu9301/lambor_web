import React from 'react'
import './news_information.scss'

const News = () => {
    return (
        <div className='news'>
            <div className='new_lamborghini'>
                <h3>NEWS</h3>
                <h1>LAMBORGHINI WORLD</h1>
                <div className='image-lambo'></div>
            </div>
            <div className='information'>
                <div className='title'>
                    <h4>14 APRIL 2022</h4>
                    <h2>LAMBORGHINI SETS A NEW SALES RECORD IN Q1 2022</h2>
                    <p>A new record for Lamborghini, which closes the first quarter of 2022 with 2,539 cars delivered worldwide, 5% more than in the same period of 2021 and 31% more than 2020, numbers that make the first quarter of 2022 the best in the history of the brand.</p>
                    <button>READ MORE</button>
                </div>
                <div className='information-container'>
                    <div className='information-main'>
                        <div className='information-img one'></div>
                        <div className='information-item'>
                            <h4>14 APRIL 2022</h4>
                            <h2>LAMBORGHINI SETS A NEW SALES RECORD IN Q1 2022</h2>
                            <button>READ MORE</button>
                        </div>
                    </div>
                    <div className='information-main'>
                        <div className='information-img two'></div>
                        <div className='information-item'>
                            <h4>14 APRIL 2022</h4>
                            <h2>LAMBORGHINI HURACÁN TECNICA: THE BEST OF ALL WORLDS</h2>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='button'>
                <div className='button-container'><button>SEE ALL</button></div>
            </div>
        </div>
    )
}

export default News;