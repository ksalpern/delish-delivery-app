import React from 'react'

import './LocationInfoBox.scss'

const LocationInfoBox = ({ address }) => {
  return (
    <div className='locationInfoBox'>
      <h4>
        The address is: <br />
        {address}
      </h4>
    </div>
  )
}

export default LocationInfoBox
