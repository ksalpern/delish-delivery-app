import React from 'react'
import './ProductCard.scss'

const ProductCard = ({ id, name, price, imageUrl }) => {
  return (
    <div className='productCard'>
      <div className='productCard__img'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='productCard__text'>
        <h4>{name}</h4>
        <p>{price} ₴</p>
      </div>
      <button>
        <img src="assets/plus.svg" alt="" />
        ADD TO CART</button>
    </div>
  )
}

export default ProductCard
