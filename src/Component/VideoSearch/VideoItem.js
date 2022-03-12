import React from 'react'
import './VideoItem.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';


const VideoItem = ({ index, data, onVideoSubmit, handleGrab }) => {

    const handleDragStart = (ev) => {
        handleGrab(1, data);
        ev.dataTransfer.setData("drag-item", index);

    }

    const handleDragEnd = () => {
        handleGrab(2, data)
    }



    return (
        <div draggable
            onDragStart={(ev) => handleDragStart(ev)}
            onDragEnd={() => handleDragEnd()}

            className="videoItem">
            <img src={data.snippet.thumbnails.medium.url} alt='' />
            <div className="videocontent">
                <div>
                    {data.snippet.title}
                </div>
                <div>
                    <p className="description">{data.snippet.description}</p>
                </div>
                <br style={{ height: '2rem' }} />
                <Link to='/current'>
                    <button className="play" onClick={() => onVideoSubmit(data)}>
                        <PlayArrowIcon /><span>Play</span>
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default VideoItem