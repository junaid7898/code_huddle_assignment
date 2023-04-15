import React, { useState } from 'react'

const VideoInput = ({onSelect}) => {

    return <div className='video--input video__container--item'>
        <label htmlFor='video-input'>
            Select Video
        </label>
        <input
        type="file"
        id='video-input'
        accept="video/*"
        onChange={onSelect}
        style={{ display: 'none'}}
      />
    </div>
} 
const VideoComponent = ({name, url}) => {
    return <div className='video__container--item'>
        {
             (/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/gm.test(url)) ?
                <iframe
                    src = {url}
                    className='video__container--video'
                />
             :
             <>
                <video
                    controls
                    src={url}
                    className='video__container--video'
                />
                <p className='video__container--name'>{name}</p>
             </>
        }

    </div>
}
const Video = () => {
    const [selectedVideos, setSelectedVideo] = useState([
        {url: 'https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1'},
        {url: 'https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1'},
        {url: 'https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1'},
    ])

    //* video select handler
    const handleVideoSelect = (e) => {
        const file = e.target.files[0];
        const fileNmae = file.name;
        const newURL = URL.createObjectURL(file);
        setSelectedVideo(prevVal => [...prevVal, {
            name: fileNmae,
            url: newURL,
        }])
        e.target.value = null;
    }
  return (
    <div className='video__container--grid'>
        {
            selectedVideos && selectedVideos.length > 0 &&
            selectedVideos.map((video, index) => {
                return <VideoComponent name={video.name} url={video.url}/>
            })
        }
        <VideoInput onSelect = {(e) => handleVideoSelect(e)} />
    </div>
  )
}

export default Video