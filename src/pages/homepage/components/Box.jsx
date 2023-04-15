import React, { useState } from 'react'
import Map from '../../../components/map/Map'
import Video from '../../../components/video/Video'

const Box = () => {
    //* initial markers 
    const markerList = [
        {
            lat:33.7077325,
            lng:73.047217,
            text: 'centaurus'
        },
        {
            lat:33.7079305,
            lng:73.0448099,
            text: 'mayfair lounge'
        },
        {
            lat:33.7079674,
            lng:73.0433612,
            text: 'Islamabad Model College'
        },

    ]
    //* map PROPS
    const mapProps = {
        center: {
            lat:33.7077325,
            lng:73.047217
            },
            zoom: 16
    }

  return (
    <div className='box'>
        <div className='box__map'>
            <Map defaultProps={mapProps} markersList={markerList}/>
        </div>
        <Video/>
    </div>
  )
}

export default Box