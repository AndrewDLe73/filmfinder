import { ArrowDropUp } from '@mui/icons-material';
import { ArrowDropDown } from '@mui/icons-material';

import React, { useState } from 'react'
import "./PlayItem.css"

const PlayItem = ({ data, onVideoSubmit, handleGrab }) => {



    const handleDragStart = () => {
        handleGrab(1, data);

    }

    const handleDragEnd = () => {
        handleGrab(2, data)
    }


    return (
        <div draggable
            onDragStart={() => handleDragStart()}
            onDragEnd={() => handleDragEnd()}

            className="playItem">
            <div className="testContainer">
                <h4 className="titleTop">
                    {data.snippet.title}
                </h4>
                <div className="videocontentcurrent">

                    <img src={data.snippet.thumbnails.medium.url} alt='' />



                    <div>
                        <p className="description">{data.snippet.description}</p>
                    </div>
                    <br style={{ height: '2rem' }} />

                </div>
            </div >

        </div >
    )
}


export default PlayItem
