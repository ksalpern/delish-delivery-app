import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Home.scss';
import ShopCard from '../../components/ShopCard/ShopCard';

const Home = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios
      .get('https://6471f2e36a9370d5a41adc0b.mockapi.io/shops')
      .then((res) => setShops(res.data));
  }, []);

  return (
    <div className="home">
      <p>
      Enjoy our wide palette of flavors and fill yourself with the tastiest food. Our menu includes a variety of cuisines, from traditional national dishes to exotic international dishes that will satisfy the taste of even the most demanding gourmets.
      </p>
      <div className="home__shops">
        {shops.map((shop) => (
          <ShopCard key={shop.id} {...shop} />
        ))}
      </div>
    </div>
  );
};

export default Home;
