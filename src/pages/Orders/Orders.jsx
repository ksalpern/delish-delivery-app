import React, { useRef, useState } from 'react'

import './Orders.scss'
import axios from 'axios'

const Orders = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const inputRef = useRef()

  // clears&focuses on input on cross click
  const onClickClear = () => {
    setSearchText('')
    inputRef.current.focus()
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://6471f2e36a9370d5a41adc0b.mockapi.io/users?search=${searchText}`
      )
      setSearchResults(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='orders'>
      <h1>Put your email / address / phone number to see your orders</h1>
      <input
        type='text'
        ref={inputRef}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder='Search by email, address, or phone number'
      />
      {searchText && <span onClick={onClickClear}>x</span>}
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            {/* Display order details here */}
            <ul>
              {user.order.map(order => (
                <li key={order.id}>
                  {order.name} - ₴{order.price}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
