import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    phone: '',
    address: '',
    orders: [],
  },
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.user.name = action.payload;
    },
    setEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setPhone: (state, action) => {
      state.user.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.user.address = action.payload;
    },
    addOrder: (state, action) => {
      state.user.orders.push(action.payload);
    },
    // addOrder: (state, action) => {
    //   const newOrder = {
    //     id: Date.now().toString(),
    //     createdAt: new Date().toISOString(),
    //     ...action.payload,
    //   };

    //   state.user.orders.push(newOrder);
    // },
    resetForm: (state) => {
      state.user.name = '';
      state.user.email = '';
      state.user.phone = '';
      state.user.address = '';
      state.user.orders = [];
    },
  },
});

export const { setName, setEmail, setPhone, setAddress, addOrder, resetForm } = formSlice.actions;

export default formSlice.reducer;
