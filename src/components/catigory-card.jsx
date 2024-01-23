import React from 'react';

import img_1 from "../assets/category-1.svg";
import img_2 from "../assets/category-2.svg";
import img_3 from "../assets/category-3.svg";
import img_4 from "../assets/category-4.svg";
import img_5 from "../assets/category-5.svg";
import img_6 from "../assets/category-6.svg";

export const CatigorySection = () => {
        return <section className="category-container">
            <div className='img-div'>
                <div className="div-img"> <img className='img' src={img_1} alt="Catigory img" /> </div>
                <h2 className='div-title'>Столы</h2>
            </div>
            <div className='img-div'>
                <div className="div-img"> <img className='img' src={img_2} alt="Catigory img" /> </div>
                <h2 className='div-title'>Диваны</h2>
            </div>
            <div className='img-div'>
                <div className="div-img"> <img className='img' src={img_3} alt="Catigory img" /> </div>
                <h2 className='div-title'>Кровати</h2>
            </div>
            <div className='img-div'>
                <div className="div-img"> <img className='img' src={img_4} alt="Catigory img" /> </div>
                <h2 className='div-title'>Освещение</h2>
            </div>
            <div className='img-div'>
                <div className="div-img"> <img className='img' src={img_5} alt="Catigory img" /> </div>
                <h2 className='div-title'>Текстиль</h2>
            </div>
            <div className='img-div'>
                <div className="div-img"> <img className='img' src={img_6} alt="Catigory img" /> </div>
                <h2 className='div-title'>Декорации</h2>
            </div>
        </section>
}