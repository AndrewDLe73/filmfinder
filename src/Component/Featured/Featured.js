import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import "./Featured.css";
import ImageLink from './YoungLove.png'

const Featured = ({ type }) => {










    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure"> Adventure</option>
                        <option value="sci-Fi"> sci-Fi</option>
                        <option value="comedy"> comedy</option>
                        <option value="thriller"> thriller</option>
                        <option value="romance"> romance</option>
                        <option value="action"> action</option>
                        <option value="drama"> drama</option>
                        <option value="animation"> animation</option>
                    </select>
                </div>
            )}
            <img src="https://images.unsplash.com/photo-1646365724102-a62dd5aca153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80" alt='' />
            <div className="info">
                <img src={ImageLink} alt='' />
                <span className="desc">um is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wrandom text * 5andom text * 5andom text * 5andom text * 5andom text * 5andom text * 5andom text * 5andom text * 5andom text * 5andom text * 5andom text * 5andom text * 5andom text * 5andom text * 5</span>
                <div></div>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoIcon />
                        <span>Info</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Featured