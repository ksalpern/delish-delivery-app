import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProducts, selectCart } from '../../redux/cart/slice'

import './Cart.scss'
import CartEmpty from '../../components/CartEmpty/CartEmpty'
import CartItem from '../../components/CartItem/CartItem'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(selectCart)

  const handleClear = () => {
    if (window.confirm('Очистити корзину?')) {
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
    </div>
  )
}

export default Cart