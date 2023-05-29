import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLocations, setShopId } from '../../redux/cart/slice'
import axios from 'axios'

import ProductCard from '../../components/ProductCard/ProductCard'
import './Shop.scss'

const Shop = () => {
  const [shop, setShop] = useState([])

  const { shopId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  React.useEffect(() => {
    async function fetchShop () {
      try {
        const { data } = await axios.get(
          'https://6471f2e36a9370d5a41adc0b.mockapi.io/shops/' + shopId
        )
        setShop(data)
        // Dispatch the setShopId action to update the Redux store
        dispatch(setShopId(shopId))
        dispatch(setLocations(data?.locations))
        // Save locations and shop ID in local storage
        const jsonLocations = JSON.stringify(data?.locations)
        localStorage.setItem('locations', jsonLocations)
        localStorage.setItem('shopId', shopId)
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
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='shop__goods'>
        {products?.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default Shop
