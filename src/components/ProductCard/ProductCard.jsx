import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ProductCard.scss';
import { addProduct, selectCartItemById } from '../../redux/cart/slice';

const ProductCard = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch();
  const productCount = useSelector(selectCartItemById(id));

  const productQuantity = productCount ? productCount.count : 0;

  const handleAddProduct = () => {
    const item = {
      id,
      name,
      price,
      imageUrl,
    };
    dispatch(addProduct(item));
  };

  return (
    <div className="productCard">
      <div className="productCard__img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="productCard__desc">
        <h4>{name}</h4>
        <p className="productCard__ingredients">мука, вода, сіль....</p>
        <p>{price} ₴</p>
        <button onClick={handleAddProduct}>
          <img src="assets/plus.svg" alt="" />
          ADD TO CART {productQuantity > 0 && <span>{productQuantity}</span>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
