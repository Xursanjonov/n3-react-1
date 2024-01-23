import React from 'react'

export const Section3 = () => {
    return <section className='Подпишитесь'>
        <p className='section3-title'>Подпишитесь на нашу новостную <br/> рассылку и получите скидку 10% на <br/> первую покупку!</p>
        <input className='email' type="email" name="email" placeholder='Введите ваш e-mail' />
        <button className='section3-btn'>Подписаться</button>
    </section>
}
