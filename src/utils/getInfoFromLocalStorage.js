import { calcTotalPrice } from './calcTotalPrice';

export const getInfoFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  const locationsData = localStorage.getItem('locations');
  const locations = locationsData ? JSON.parse(locationsData) : [];

  const shopId = localStorage.getItem('shopId');

  return {
    items: items,
    totalPrice,
    currentShop: shopId || null,
    locations: locations,
  };
};