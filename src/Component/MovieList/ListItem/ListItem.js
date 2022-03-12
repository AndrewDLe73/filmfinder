import { PlayArrow, Add, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

import "./ListItem.css"
import axios from 'axios'

const ListItem = ({ data }) => {
    console.log('listItem:', data)
    if (!data) return null;


    return (
        <div className="listItem" >
            <div>
                <img src={data && data.image && data.image.medium} alt="adsf" />
            </div>
            <div className="itemInfoTop">
                <span> {data.averageRunTime ? `${data.averageRunTime} minutes` : ""}</span>
                <span className="limit"></span>
                <span>{data.premiered}</span>
            </div>
            <div className="desc">
                <h3>{data.name}</h3>
                <span>
                    <div dangerouslySetInnerHTML={{ __html: data.summary }} />

                </span>
            </div>
            {/* <div className="icons">
                < PlayArrow />
                < Add />
                <ThumbDownOutlined />
                <ThumbUpOutlined />
            </div> */}
            <div className="adventure"> {data.genres[0]}
            </div>
        </div>
    )
}

export default ListItem