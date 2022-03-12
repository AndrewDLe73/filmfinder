import React from 'react'
import PlayCurrentItem from './PlayCurrentItem';

const PlaylistCurrent = ({ currentList, handleGrab, itemDrop, handleCurrentList, handleDelete }) => {

    if (!currentList) {
        return <div>hello</div>
    }


    function handleDrop(ev) {
        const droppedItem = ev.dataTransfer.getData("drag-item");
        console.log(droppedItem)
        handleDelete(droppedItem)
    }

    const renderFunction = currentList.map((item) => {

        return < PlayCurrentItem
            key={item.id.videoId} data={item} handleGrab={handleGrab}
        />

    })


    return (
        <div>YourPlayList
            {renderFunction}
        </div>
    )
}

export default PlaylistCurrent;