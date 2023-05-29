import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux'
import { selectLocations } from '../../redux/cart/slice'

import LocationMarker from '../LocationMarker/LocationMarker'
import LocationInfoBox from '../LocationInfoBox/LocationInfoBox'
import './MapComponent.scss'

const MapComponent = ({ center, zoom }) => {
const [address, setAddress] = useState('')

  const locations = useSelector(selectLocations)

  return (
    <div className='mapComponent'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {locations?.map(location => (
          <LocationMarker
            key={location.lat}
            lat={location.lat}
            lng={location.lng}
            onClick={()=>setAddress(location.address)}
          />
        ))}
      </GoogleMapReact>
      {address && <LocationInfoBox address={address}/>}
    </div>
  )
}

MapComponent.defaultProps = {
  center: {
    lat: 50.4501,
    lng: 30.5234
  },
  zoom: 5
}

export default MapComponent
