import React from 'react'
import { Link } from 'react-router-dom'

import './Error.scss'

const Error = () => {
  return (
    <div className='error'>
      <h1>Oops! Something went wrong.</h1>
      <p>
        We apologize for the inconvenience, but it seems that an error occurred
        while processing your order.
      </p>
      <p>
        Please try again later or contact our customer support for assistance.
      </p>
      <p>Thank you for your understanding.</p>
      <Link to='/'>
        <button>Continue shopping</button>
      </Link>
    </div>
  )
}

export default Error
