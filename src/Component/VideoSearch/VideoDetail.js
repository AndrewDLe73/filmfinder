import React from 'react'

const VideoDetail = (props) => {
  if (!props.selectedVideo) {
    return <div>Loading</div>
  }


  if (props.selectedVideo) {
    const addAuto = (props.autoPlay ? "autoplay=1" : "autoplay=0")
    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}?&${addAuto}`;
    return (
      <div className="videodetail" style={{ height: '100%', width: '100%' }}>
        <iframe style={{ height: '100%', width: '100%' }} title="currentVideo" src={videoSrc} allow="autoplay" />
      </div>
    )
  }


}

export default VideoDetail
