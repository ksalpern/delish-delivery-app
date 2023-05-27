import React from 'react'
import { Link } from 'react-router-dom'

import './CartEmpty.scss'

const CartEmpty = () => {
  return (
    <div className='cartEmpty'>
      <h2>
        Корзина порожня <span>😕</span>
      </h2>
      <p>
        Скоріш за все, ви ще не обрали продукти.
        <br />
        Для цього перейдіть на головну сторінку.
      </p>
      <img src='/assets/empty-cart.png' alt='Empty cart' />
      <Link to='/' className=''>
        <span>Повернутися назад</span>
      </Link>
    </div>
  )
}

export default CartEmpty
