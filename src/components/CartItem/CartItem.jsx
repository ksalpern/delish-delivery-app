import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, minusProduct, removeProduct } from '../../redux/cart/slice';

import './CartItem.scss';

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
    if (window.confirm('Do you really want to delete the product?')) {
      dispatch(removeProduct(id));
    }
  };

  return (
    <div className="cartItem">
      <div className="cartItem__img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="cartItem__info">
        <h3>{name}</h3>
        <div className="ingredients">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nisi impedit? Quos
          expedita explicabo mollitia velit dicta harum doloremque reprehenderit officiis a iure
          natus consectetur veritatis dolore distinctio, voluptas itaque totam eaque at deserunt
          magnam? Blanditiis ut unde nulla! Atque animi quaerat nisi consequuntur iusto vero
          blanditiis consectetur voluptates reiciendis?
        </div>
        <div className="cartItem__quantity">
          <button
            onClick={handleMinus}
            disabled={count === 1}
            className={`${count === 1 ? 'disabled' : ''}`}>
            -
          </button>
          <span>{count}</span>
          <button onClick={handlePlus}>+</button>
        <div className="cartItem__price">
          <h4>{price}₴</h4>
        </div>
        </div>
      </div>
      <button onClick={handleRemove} className="cartItem__delete">
        <img src="assets/delete.svg" alt="" />
      </button>
    </div>
  );
};

export default CartItem;
