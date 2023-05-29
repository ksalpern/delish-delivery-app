import React from 'react'

import './LocationMarker.scss'

const LocationMarker = ({lat,lng,onClick}) => {
  return (
    <div className='locationMarker' onClick={onClick}>
      <img src='/assets/location.svg' alt="shop" className='locationMarker__icon' />
    </div>
  )
}

export default LocationMarker
