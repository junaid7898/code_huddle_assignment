import React from 'react'
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => {
    return <div className='map__marker'>
        <div className='map__marker--inner'></div>
        <div className='map__marker--address'>
            <p>{text}</p>
        </div>
    </div>
}
const Map = ({defaultProps, markersList}) => {
  return (
    <GoogleMapReact
        bootstrapURLKeys={{key: ""}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
    >
        {
            markersList.map((item, index) => {
                return <Marker key={index} lat = {item.lat} lng = {item.lng} text = {item.text}/>
            })
        }
        
    </GoogleMapReact>
  )
}

export default Map