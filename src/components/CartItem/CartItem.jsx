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
      <div className='cartItem__img'>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className='cartItem__quantity'>
        <button
          onClick={handleMinus}
          disabled={count === 1}
          className={`${count === 1 ?'disabled' : ''}`}
        >
          -
        </button>
        <span>{count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <div className='cartItem__price'>
        <span>{price}₴</span>
      </div>
      <button onClick={handleRemove} className='cartItem__cross'>
        x
      </button>
    </div>
  )
}

export default CartItem
