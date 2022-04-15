import React from 'react';
import Slider from './slider/slider';
import Modelss from './models_img/models';
import News from './news_information/news_information';
const Home = () => {
    return (
        <div className='Model'>
            <Slider />
            <Modelss />
            <News />
        </div>
    )
}

export default Home;