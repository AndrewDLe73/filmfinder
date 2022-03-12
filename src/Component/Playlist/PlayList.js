import React from 'react'
import "./PlayList.css"
import PlayItem from './PlayItem'

const Playlist = ({ currentList, handleGrab, itemDrop, handleCurrentList, handleDelete }) => {

    function dragOver(ev) {
        ev.preventDefault();
    }



    function handleDrop(ev) {
        const droppedItem = ev.dataTransfer.getData("drag-item");
        console.log(droppedItem)
        handleDelete(droppedItem)


    }


    const renderCurrentList = currentList.map((item) => {
        return <PlayItem key={item.id.videoId} data={item} handleGrab={handleGrab} />
    }
    )


    return (
        <div droppable="true" className="playListContainer" onDragOver={(ev) => dragOver(ev)} onDrop={(ev) => handleDrop(ev, "playlist")} >
            {renderCurrentList}
        </div>
    )
}

export default Playlist