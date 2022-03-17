import React, { useState } from 'react'

import PlayListCurrent from '../../Component/Playlist/PlayListCurrent/PlayListCurrent'
import VideoDetail from '../../Component/VideoSearch/VideoDetail'
import Playlist from '../../Component/Playlist/PlayList';
import "./Current.css"

const Current = (props) => {

    const handleDelete = (index) => {
        console.log(index);
        const tempitem = props.currentList.splice(index, 1);
        console.log(tempitem);
        props.currentList([...props.currentList]);
        // props.handleCurrentList(tempitem);
    }
    const [grab, setGrab] = useState(false);
    const [showDrop, setShowDrop] = useState(false);

    const handleGrab = (x, data) => {
        if (x === 1) {
            console.log(x, data);
            setShowDrop(true)
        }
        if (x === 2) {
            console.log(x, data);
            setShowDrop(false)
        }
    }



    const onDragOver = (ev) => {
        ev.preventDefault();
    }
    const helperRenderFunctionDragHere = (showDrop ? <div className=" active playVideo" droppable="true"
        onDragOver={(ev) => onDragOver(ev)} onDrop={(ev) => handleDrop(ev, 1)}>
        <h1 > drop to play video</h1></div> : <div> </div>)

    const helperRenderFunctionDragHere2 = (showDrop ? <div className=" active deleteVideo" droppable="true" onDragOver={(ev) => onDragOver(ev)} onDrop={(ev) => handleDrop(ev, 2)}>
        <h1 > drop to remove from playlist</h1>
    </div> : <div> </div>)
    const helperRenderFunction3 = (showDrop ? < div className="DropArea" >{helperRenderFunctionDragHere}{helperRenderFunctionDragHere2}</div> : <div></div>)


    const handleDrop = (ev, num) => {
        if (num === 1) {

            const droppedItem = ev.dataTransfer.getData("drag-item");
            const selected = props.currentList[droppedItem];
            props.onVideoSubmit(selected);
            props.currentList.splice(droppedItem, 1);
            setShowDrop(false);
        }
        if (num === 2) {
            const droppedItem = ev.dataTransfer.getData("drag-item");
            console.log(droppedItem, "is the index")
            const NewList = [...props.currentList];
            console.log(NewList, " is the new list");
            console.log(props.currentList, "old List")
            NewList.splice(droppedItem, 1);
            console.log("updated list:", NewList)
            console.log("old List:", props.currentList,)
            props.handleCurrentList(NewList, 2)
            setShowDrop(false)
        }


    }


    return (<div className="current_container">
        {helperRenderFunction3}
        <div className="mainscreen" >
            {props.selectedVideo ? <VideoDetail autoPlay={props.autoPlay} selectedVideo={props.selectedVideo} /> : <div className='Currenttextbox'><p>You currently are not watching anything</p></div>}
        </div>
        {/* <div className="right">
            <div className="playList">
                <PlaylistCurrent currentList={props.currentList} />
            </div>
        </div> */}

        <div className={`playlistcontainerCurrent ${grab ? "grabbing" : ""}`}>
            <div className="PlaylistTitle">
                Your PlayList
            </div>
            <PlayListCurrent className='currentPlayList' handleGrab={handleGrab} handleDelete={handleDelete} currentList={props.currentList} handleCurrentList={props.handleCurrentList} />
        </div>
    </div >

    )
}

export default Current