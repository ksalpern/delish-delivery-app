import React from 'react'
import { useDispatch } from 'react-redux';
import { addProduct, minusProduct, removeProduct } from '../../redux/cart/slice';

import './CartItem.scss'

const CartItem = ({ id, count, imageUrl, price, name }) => {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(
      addProduct({
        id,
      }),
    );
  };

  const handleMinus = () => {
    dispatch(minusProduct(id));
  };

  const handleRemove = () => {
    if (window.confirm('Ти дійсно хочеш видалити товар?')) {
      dispatch(removeProduct(id));
    }
  };

  return (
    <div className='cartItem'>
      <div className="cartItem__img">
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  )
}

export default CartItem
