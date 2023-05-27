import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Shop.scss'
import ProductCard from '../../components/ProductCard/ProductCard'

const Shop = () => {
  const [shop, setShop] = useState([])

  const { shopId } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchShop () {
      try {
        const { data } = await axios.get(
          'https://6471f2e36a9370d5a41adc0b.mockapi.io/shops/' + shopId
        )
        setShop(data)
      } catch (error) {
        alert('Помилка при отриманні магазину')
        navigate('/')
      }
    }
    fetchShop()
  }, [])

  const { name, description, imageUrl, products } = shop

  if (!shop) {
    return <>Завантаження...</>
  }

  return (
    <div className='shop'>
      <div className='shop__top'>
        <div className='shop__img'>
          <img src={imageUrl} alt='' />
        </div>
        <div className='shop__text'>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      {products?.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default Shop
