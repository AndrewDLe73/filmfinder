import React, { useState } from 'react'
import './PlayCurrentItem.css'
import { ArrowDropUp } from '@mui/icons-material';
import { ArrowDropDown } from '@mui/icons-material';

const PlayCurrentItem = ({ data, handleGrab, index }) => {

    const [moreInfo, setMoreInfo] = useState(true);

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
            onDragEnd={(ev) => handleDragEnd(ev)} className={moreInfo ? "currentcard" : "currentcard raised"}>
            <div className="currentItemTop" >
                <div className=" currentItemTitle">
                    {data.snippet.title}
                </div>
            </div>
            <img src={data.snippet.thumbnails.medium.url} alt='' />
            {moreInfo ? <ArrowDropUp className="currentArrow" style={{ fontSize: '3rem' }} onClick={() => setMoreInfo(!moreInfo)} /> : <ArrowDropDown className="currentArrow" onClick={() => setMoreInfo(!moreInfo)} style={{ fontSize: '3rem' }} />}
            <div className="currvideocontent">
                <div>
                    <p className="description">{data.snippet.description}</p>
                </div>
                <br style={{ height: '2rem' }} />
            </div>

        </div>
    )
}
export default PlayCurrentItem