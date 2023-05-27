import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='header__logo'>
        <p>Delish</p>
      </Link>
      <div className='header__icons'>
        <div className='header__user'>user</div>
        <Link to='/cart' className='header__cart'>
          <img src='assets/cart.svg' alt='go to cart' />
          <span>0</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
