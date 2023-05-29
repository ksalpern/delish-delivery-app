import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux'
import { selectLocations } from '../../redux/cart/slice'

import LocationMarker from '../LocationMarker/LocationMarker'
import './MapComponent.scss'

const MapComponent = ({ center, zoom }) => {
const locations = useSelector(selectLocations)
console.log(locations)
  return (
    <div className='mapComponent'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {locations?.map(location=>(

        <LocationMarker key={location.lat} lat={location.lat} lng={location.lng}/>
        ))}
      </GoogleMapReact>
    </div>
  )
}

MapComponent.defaultProps = {
  center: {
    lat: 50.4501,
    lng: 30.5234
  },
  zoom: 6
}

export default MapComponent
