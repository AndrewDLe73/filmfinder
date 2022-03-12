import React from 'react'
import './PlayCurrentItem.css'

const PlayCurrentItem = ({ data, handleGrab }) => {

    const handleDragStart = (ev) => {
        handleGrab(1, data);
        ev.dataTransfer.setData("drag-item");

    }

    const handleDragEnd = () => {
        handleGrab(2, data)
    }


    return (
        <div draggable
            onDragStart={(ev) => handleDragStart(ev)}
            onDragEnd={() => handleDragEnd()}

            className="currentItem">
            <img src={data.snippet.thumbnails.medium.url} alt='' />
            <div className="videocontent">
                <div>
                    {data.snippet.title}
                </div>
                <div>
                    <p className="description">{data.snippet.description}</p>
                </div>
                <br style={{ height: '2rem' }} />
            </div>

        </div>
    )
}
export default PlayCurrentItem