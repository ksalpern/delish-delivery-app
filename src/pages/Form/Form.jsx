import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  setName,
  setEmail,
  setPhone,
  setAddress,
  addOrder,
  resetForm
} from '../../redux/form/slice'
import { clearProducts, selectCartItems } from '../../redux/cart/slice'
import axios from 'axios'

import MapComponent from '../../components/MapComponent/MapComponent'
import './Form.scss'

const OrderForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { name, email, phone, address } = useSelector(state => state.form.user)
  const cartItems = useSelector(selectCartItems)

  const handleSubmit = async e => {
    e.preventDefault()

    // Create an object with the form data
    const formData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      order: cartItems
    }

    try {
      // Make a POST request to the user endpoint with the form data
      const response = await axios.post(
        'https://6471f2e36a9370d5a41adc0b.mockapi.io/users',
        formData
      )
      // Add the order to the user's orders array
      dispatch(addOrder(response.data))
      // Reset the form
      dispatch(resetForm())
      // clear cart products
      dispatch(clearProducts())
      navigate('/success')
    } catch (error) {
      // Handle any errors that occurred during the POST request
      console.error(error)
      navigate('/error')
    }
  }

  return (
    <div className='orderForm'>
      <h1>Add your info to make an order</h1>
      <div className='orderForm__info'>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Name:</p>
            <input
              type='text'
              value={name}
              onChange={e => dispatch(setName(e.target.value))}
              required
            />
          </label>
          <br />
          <label>
            <p>Email:</p>
            <input
              type='email'
              value={email}
              onChange={e => dispatch(setEmail(e.target.value))}
              required
            />
          </label>
          <br />
          <label>
            <p>Phone Number:</p>
            <input
              type='tel'
              value={phone}
              onChange={e => dispatch(setPhone(e.target.value))}
              required
            />
          </label>
          <br />
          <label>
            <p>Address:</p>
            <textarea
              value={address}
              onChange={e => dispatch(setAddress(e.target.value))}
              required
            />
          </label>
          <br />
          <button type='submit'>Place Order</button>
        </form>

        <MapComponent />
      </div>
    </div>
  )
}

export default OrderForm
