import React from 'react';

export const Header = () => {
    return <section className="top">
            <div className="start">
                <h3>Logo</h3>
                <input id="sarch" type="search" name="search" placeholder='Поиск' />
            </div>
            <div className="center">
                <a href="">Коллекции</a>
                <a href="">Мебель</a>
                <a href="">Освещение</a>
                <a href="">Аксессуары</a>
                <a href="">Доставка</a>
            </div>
            <div className="end">
                <p>Москва</p>
                <i className="fa-solid fa-user fa-beart"></i>
                <i className="fa-regular fa-heart fa-filp"></i>
                <i class="fa-solid fa-cart-shopping fa-shake"></i>
            </div>
    </section>
}