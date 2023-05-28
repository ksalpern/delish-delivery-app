import { createSlice } from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../utils/calcTotalPrice';

const initialState = {
  items: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeProduct(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearProducts(state, action) {
      state.items = []
      state.totalPrice = 0
    },
    minusProduct(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--
      }
      state.totalPrice = calcTotalPrice(state.items);
    }
  },
})

export const selectCartItemById = (id) => (state) =>
  state.cart.items.find(obj => obj.id === id)
export const selectCart = (state) => state.cart
export const selectCartItems = state => state.cart.items

export const { addProduct, removeProduct, clearProducts, minusProduct } = cartSlice.actions

export default cartSlice.reducer