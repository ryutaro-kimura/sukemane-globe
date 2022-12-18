import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

// 佐賀市
const center = {
  lat: 35.65224138251394,
  lng: 139.70450901142888
}

const GoogleMapComponent: React.FC = () => {
  const [pin, setPin] = useState()
  const containerStyle = {
    height: '100vh',
    width: '100%'
  }

  const setLatLng = (props: any) => {
    const pos: any = {
      lat: props.latLng.lat(),
      lng: props.latLng.lng()
    }
    setPin(pos)
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={3} onClick={setLatLng}>
        {pin && <Marker position={pin} />}
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapComponent
