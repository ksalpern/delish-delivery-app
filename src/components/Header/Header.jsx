import React, { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearProducts,
  selectCart,
  selectCartItems,
  selectShopId
} from '../../redux/cart/slice'

import './Header.scss'

const Header = () => {
  const { items } = useSelector(selectCart)
  const currentShop = useSelector(selectShopId)
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isMounted = useRef(false)

  //total cart items quantity
  const totalQuantity = items.reduce((sum, item) => sum + item.count, 0)

  //function to clear cart and go to home page
  const handleClearCart = () => {
    dispatch(clearProducts())
    navigate('/')
  }

  const handleContinueShopping = () => {
    // Do nothing and let the user continue shopping
  }

  const confirmClearCart = () => {
    if (cartItems.length > 0) {
      const shouldClearCart = window.confirm(
        'You have items in your cart. Do you want to clear the cart and go to the homepage?'
      )

      if (shouldClearCart) {
        handleClearCart()
      } else {
        handleContinueShopping()
      }
    }
  }

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('cart', json)
    }
    isMounted.current = true
  }, [items])

  return (
    <div className='header'>
      <div className='header__link'>
        {cartItems.length > 0 ? (
          <button onClick={confirmClearCart}>
            <h2>Delish</h2>
          </button>
        ) : (
          <Link to='/'>
            {' '}
            <h2>Delish</h2>
          </Link>
        )}
      </div>
      <div className='header__logo'>
        <img src='/assets/logo.png' alt='' />
      </div>
      <div className='header__icons'>
        <Link to='orders' className='header__search'>
          <img src='/assets/list.svg' title='History' alt='' />
        </Link>

        {pathname !== '/' && (
          <Link to={`/${currentShop}/cart`} className='header__cart'>
            <img src='/assets/cart.svg' alt='go to cart' />
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
