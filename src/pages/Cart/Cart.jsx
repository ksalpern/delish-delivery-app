import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProducts, selectCart } from '../../redux/cart/slice'

import CartEmpty from '../../components/CartEmpty/CartEmpty'
import CartItem from '../../components/CartItem/CartItem'
import './Cart.scss'
import { Link } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(selectCart)

  const handleClear = () => {
    if (window.confirm('Are you sure to clear the cart?')) {
      dispatch(clearProducts())
    }
  }

  if (!totalPrice) {
    return <CartEmpty />
  }

  return (
    <div className='cart'>
      {items.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <button>
        <Link to='/'> Go to home page</Link>
      </button>
      <button onClick={handleClear}>Clear the cart</button>
      <h4>Total price: {totalPrice} ₴</h4>
    </div>
  )
}

export default Cart
