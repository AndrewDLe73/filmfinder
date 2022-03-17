import React from 'react'
import PlayCurrentItem from './PlayCurrentItem';
import "./PlayListCurrent.css"

const PlaylistCurrent = ({ currentList, handleGrab, itemDrop, handleCurrentList, handleDelete }) => {



    // function handleDrop(ev) {
    //     const droppedItem = ev.dataTransfer.getData("drag-item");
    //     console.log(droppedItem)
    //     handleDelete(droppedItem)
    // }

    const renderFunction = currentList.map((item, index) => {
        return <PlayCurrentItem className="playItemCurrent"
            key={item.id.videoId} data={item}
            handleGrab={handleGrab} index={index} />
    })


    return (
        <div className="currentCard">
            {renderFunction}
        </div>
    )
}

export default PlaylistCurrent;