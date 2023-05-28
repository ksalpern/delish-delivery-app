import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProducts, selectCart, selectShopId } from '../../redux/cart/slice'

import CartEmpty from '../../components/CartEmpty/CartEmpty'
import CartItem from '../../components/CartItem/CartItem'
import './Cart.scss'
import { Link } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const currentShop = useSelector(selectShopId)
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
      <h1>Cart</h1>
      <div className='cart__items'>
        {items.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className='cart__buttons'>
        <button>
          <img src='/assets/back.svg' alt='' />
          <Link to={`/${currentShop}`}>Go back to shop</Link>
        </button>
        <button onClick={handleClear}>
          <img src='/assets/delete.svg' alt='' />
          Clear the cart
        </button>
        <button>
          <img src='/assets/order.svg' alt='' />
          <Link to={`/${currentShop}/cart/form`}>Chekout</Link>
        </button>
      </div>
      <h4>Total price: {totalPrice.toFixed(2)} ₴</h4>
    </div>
  )
}

export default Cart
