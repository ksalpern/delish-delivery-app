import React from 'react'
import { Link } from 'react-router-dom'

import './ShopCard.scss'

const ShopCard = ({ id, name, description, products, imageUrl }) => {
  return (
    <div className='shopCard'>
      <div className='shopCard__img'>
        <img src={imageUrl} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/${id}`}>BUY PRODUCTS</Link>
    </div>
  )
}

export default ShopCard
