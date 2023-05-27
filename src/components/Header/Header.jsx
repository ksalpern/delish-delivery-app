import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/slice'

import './Header.scss'

const Header = () => {
  const { items } = useSelector(selectCart)
  const { pathname } = useLocation()

  const totalQuantity = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <div className='header'>
      <Link to='/' className='header__logo'>
        <h2>Delish</h2>
      </Link>
      <div className='header__icons'>
        {pathname !== '/' && (
          <Link to='/cart' className='header__cart'>
            <img src='assets/cart.svg' alt='go to cart' />
            <span>{totalQuantity}</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
