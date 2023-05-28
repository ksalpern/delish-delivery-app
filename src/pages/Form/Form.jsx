import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setName,
  setEmail,
  setPhone,
  setAddress,
  addOrder,
  resetForm
} from '../../redux/form/slice'
import { selectCartItems } from '../../redux/cart/slice'
import axios from 'axios'

import './Form.scss'

const OrderForm  = () => {
  const dispatch = useDispatch()
  const { name, email, phone, address } = useSelector(state => state.form.user)
  const cartItems = useSelector(selectCartItems)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Create an object with the form data
    const formData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      order: cartItems
      // order: cartItems.map((item) => ({ ...item, id: Date.now().toString(), createdAt: new Date().toISOString() })),
    }

    try {
      // Make a POST request to the user endpoint with the form data
      const response = await axios.post(
        'https://6471f2e36a9370d5a41adc0b.mockapi.io/users',
        formData
      )

      // Add the order to the user's orders array
      dispatch(addOrder(response.data))

      // Handle the response from the API
      console.log(response.data)

      // Reset the form
      dispatch(resetForm())
    } catch (error) {
      // Handle any errors that occurred during the POST request
      console.error(error)
    }
  }

  return (
    <div className='orderForm'>
      <h1>Add your info to make an order</h1>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => dispatch(setName(e.target.value))} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} required />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" value={phone} onChange={(e) => dispatch(setPhone(e.target.value))} required />
      </label>
      <br />
      <label>
        Address:
        <textarea value={address} onChange={(e) => dispatch(setAddress(e.target.value))} required />
      </label>
      <br />
      <button type="submit">Place Order</button>
    </form>
    </div>
  )
}

export default OrderForm 