import React from 'react';
import hero_img from '../assets/hero-img.svg';

export const HeroCards = () => {
    return <section className='bottom'>
        <div className='bottom-img'>
            <img className='hero-bg-img' src={hero_img} alt="" />
        </div>
        <div className="bottom-title">
            <h1>Новая коллекция </h1>
            <p>
                Наши новые поставки мебели в <br/> скандинавском стиле приятно вас удивят
            </p>
            <button className='hero-btn'>Смотреть</button>
        </div>
    </section>
}
