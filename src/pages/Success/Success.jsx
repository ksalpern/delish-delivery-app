import React from 'react'
import { Link } from 'react-router-dom'

import './Success.scss'

const Success = () => {
  return (
    <div className='success'>
      <h1>Form Submitted Successfully!</h1>
      <p>
        Thank you for placing your order. We have received your information and
        will process your order shortly.
      </p>
      <p>The product will be sent to you from the nearest store.</p>
      <p>We appreciate your order and look forward to serving you again!</p>
      <Link to='/'>
        <button>Continue shopping</button>
      </Link>
    </div>
  )
}

export default Success
