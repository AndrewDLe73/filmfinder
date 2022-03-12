import React from 'react'
import PlaylistCurrent from '../../Component/Playlist/PlayListCurrent/PlayListCurrent'
import VideoDetail from '../../Component/VideoSearch/VideoDetail'
import "./Current.css"

const Current = (props) => {


    return (<div className="current_container">
        <div className="middle">
            {props.selectedVideo ? <VideoDetail selectedVideo={props.selectedVideo} /> : "You currently don't have anything"}
        </div>
        <div className="right">
            <div className="playList">
                <PlaylistCurrent currentList={props.currentList} />
            </div>
        </div>
    </div >

    )
}

export default Current