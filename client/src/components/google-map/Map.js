import React from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import logo from '../../assets/header/WA-logo-mapa.png'

const mapContainerStyle = {
  width: '100%',
  height: '400px',
}
const defaultLocation = { lat: -2.280486, lng: -79.882385 }
const position = {
  lat: -2.1783149709621927,
  lng: -79.9142267900858,
}

const options = {
  mapId: '9d2004f01416a50',
  disableDefaultUI: true,
  // zoomControl: true,
}

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  })

  if (loadError) return 'Error loading maps'
  if (!isLoaded) return 'Loading Maps'

  return (
    <div>
      {/* <h1>WA~</h1> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={defaultLocation}
        options={options}
      >
        <Marker
          position={position}
          icon={{
            url: logo,

            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
      </GoogleMap>
    </div>
  )
}
