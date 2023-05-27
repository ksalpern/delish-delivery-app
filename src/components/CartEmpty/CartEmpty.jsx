import React from 'react'
import { Link } from 'react-router-dom'

import './CartEmpty.scss'

const CartEmpty = () => {
  return (
    <div className='cartEmpty'>
      <h2>
        The cart is empty <span>😕</span>
      </h2>
      <p>Most likely, you have not selected products yet.</p>
      <img src='/assets/empty-cart.png' alt='Empty cart' />
      <Link to='/'>
        <button>Go to home page</button>
      </Link>
    </div>
  )
}

export default CartEmpty
