import React from 'react'
import product_1 from "../assets/product-1.svg";
import product_2 from "../assets/product-2.svg";
import product_3 from "../assets/product-3.svg";
import product_4 from "../assets/product-4.svg";
import product_5 from "../assets/product-5.svg";
import product_6 from "../assets/product-6.svg";

export const ProductSection = () => {
  return <section>
    <h2 id='products'>Хиты продаж</h2>
    <div className='product-container'>
      <div className="product-div">
        <div className="product-img"> <img className='img-product' src={product_1} alt="Product img 1" /> </div>
        <p className='product-div-title'>Кресло Барселона</p>
        <p className='product-div-text'>$6738</p>
        <div className="product-btn">
          <button className="btn">B корзину</button>
          <i className="fa-regular fa-heart fa-flip"></i>
        </div>
      </div>
      <div className="product-div">
        <div className="product-img"> <img className='img-product' src={product_2} alt="Product img 1" /> </div>
        <p className='product-div-title'>Кресло Барселона</p>
        <p className='product-div-text'>$6738</p>
        <div className="product-btn">
          <button className="btn">B корзину</button>
          <i className="fa-regular fa-heart fa-flip"></i>
        </div>
      </div>
      <div className="product-div">
        <div className="product-img"> <img className='img-product' src={product_3} alt="Product img 1" /> </div>
        <p className='product-div-title'>Кресло Барселона</p>
        <p className='product-div-text'>$6738</p>
        <div className="product-btn">
          <button className="btn">B корзину</button>
          <i className="fa-regular fa-heart fa-flip"></i>
        </div>
      </div>
      <div className="product-div">
        <div className="product-img"> <img className='img-product' src={product_4} alt="Product img 1" /> </div>
        <p className='product-div-title'>Кресло Барселона</p>
        <p className='product-div-text'>$6738</p>
        <div className="product-btn">
          <button className="btn">B корзину</button>
          <i className="fa-regular fa-heart fa-flip"></i>
        </div>
      </div>
      <div className="product-div">
        <div className="product-img"> <img className='img-product' src={product_5} alt="Product img 1" /> </div>
        <p className='product-div-title'>Кресло Барселона</p>
        <p className='product-div-text'>$6738</p>
        <div className="product-btn">
          <button className="btn">B корзину</button>
          <i className="fa-regular fa-heart fa-flip"></i>
        </div>
      </div>
      <div className="product-div">
        <div className="product-img"> <img className='img-product' src={product_6} alt="Product img 1" /> </div>
        <p className='product-div-title'>Кресло Барселона</p>
        <p className='product-div-text'>$6738</p>
        <div className="product-btn">
          <button className="btn">B корзину</button>
          <i className="fa-regular fa-heart fa-flip"></i>
        </div>
      </div>
    </div>
  </section>
}