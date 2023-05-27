import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Home.scss'
import ShopCard from '../../components/ShopCard/ShopCard'

const Home = () => {
  const [shops, setShops] = useState([])

  useEffect(() => {
    axios
      .get('https://6471f2e36a9370d5a41adc0b.mockapi.io/shops')
      .then(res => setShops(res.data))
  }, [])

  return (
    <div className='home'>
      {shops.map(shop => (
        <ShopCard key={shop.id} {...shop} />
      ))}
    </div>
  )
}

export default Home
