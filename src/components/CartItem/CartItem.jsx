import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, minusProduct, removeProduct } from '../../redux/cart/slice'

import './CartItem.scss'

const CartItem = ({ id, count, imageUrl, price, name }) => {
  const dispatch = useDispatch()

  const handlePlus = () => {
    dispatch(
      addProduct({
        id
      })
    )
  }

  const handleMinus = () => {
    dispatch(minusProduct(id))
  }

  const handleRemove = () => {
    if (window.confirm('Do you really want to delete the product?')) {
      dispatch(removeProduct(id))
    }
  }

  return (
    <div className='cartItem'>
      <div className='cartItem__top'>
        <div className='cartItem__img'>
          <img src={imageUrl} alt={name} />
        </div>
        <h3>{name}</h3>
        <div className='cartItem__quantity'>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className='cartItem__price'>
          <span>10₴</span>
        </div>
      </div>
      <div className='cartItem__bottom'>
        <button>Go to home page</button>
        <h4>Total price: </h4>
      </div>
    </div>
  )
}

export default CartItem
