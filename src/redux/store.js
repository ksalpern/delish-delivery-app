import { configureStore } from '@reduxjs/toolkit'
import cart from './cart/slice'
import form from './form/slice'


export const store = configureStore({
  reducer: {
    cart,
    form,
  },
})