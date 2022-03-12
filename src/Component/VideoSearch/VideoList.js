import React, { useEffect } from 'react'
import VideoItem from './VideoItem';
import './VideoList.css'


const VideoList = ({ resultsList, onVideoSubmit, handleGrab }) => {

    const renderList = resultsList.map((item, indexes) => {
        return <VideoItem key={item.id.videoId} data={item} onVideoSubmit={onVideoSubmit} handleGrab={handleGrab} index={indexes} />
    }
    )

    return (
        <div draggable="false" className="videoListContainer">
            {renderList}
        </div>
    )
}

export default VideoList