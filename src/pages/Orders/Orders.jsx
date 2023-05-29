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

  const formatDateTime = dateTimeString => {
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
    const dateTime = new Date(dateTimeString)
    return (
      dateTime.toLocaleDateString('en-US', options) +
      ' ' +
      dateTime.toLocaleTimeString('en-US')
    )
  }

  return (
    <div className='orders'>
      <h1>
        Put your email / address / phone number and press 'Search' to see your
        orders
      </h1>
      <div className='orders__search'>
        <input
          type='text'
          ref={inputRef}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder='Search by email, address, or phone number'
        />
        {searchText && (
          <span className='orders__search-cross' onClick={onClickClear}>
            x
          </span>
        )}
      </div>
      <button onClick={handleSearch}>Search</button>

      {searchResults.map(user => (
        <div key={user.id} className='orders__users'>
          <h2>{user.name}</h2>
          <img src={user.avatar} alt='User Avatar' />
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Order was created: {formatDateTime(user.createdAt)}</p>
          <ul>
            {user.order.map(order => (
              <li key={order.id}>
                <h4>
                  {order.name} - {order.price} ₴ - quantity {order.count}
                </h4>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Orders
