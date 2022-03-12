import Search from '@mui/icons-material/Search'
import React, { useState, useEffect } from 'react'
import "./VideoSearch.css"
import axios from 'axios';

const KEY = "AIzaSyA766Mc9qzDNYqYzX5pCLEFfo-0GuaIOYk"
// const KEY = "AIzaSyBTRIywxo6f0O1VH3o5PN99g9uWBFRgJUA"

const ytURL = 'https://www.googleapis.com/youtube/v3/search'


const VideoSearch = (props) => {


    useEffect(() => {
        const timerID = setTimeout(() => {
            props.setDebouncedSearch(props.searchTerm);
        }, 1000);

        return () => {
            clearTimeout(timerID);
        }
    }, [props.searchTerm])

    useEffect(() => {
        const searchVideo = async () => {
            const videoData = await axios.get(ytURL, { params: { q: `${props.debouncedSearch} movie trailer`, part: 'snippet', maxResults: 6, key: KEY } });
            console.log(videoData.data.items);
            props.setResultsList(videoData.data.items);


        }
        if (props.debouncedSearch) {
            props.setSearching(true);
            if (props.debouncedSearch === "") {
                props.setSearching(false);
            }
            searchVideo();
        }
    }
        , [props.debouncedSearch])





    const getFocus = (event) => {
        event.preventDefault()
        document.getElementById("textbox").focus()
    }
    return (
        <div className="search_container">
            <form className={`searchform ${props.searching ? 'searching' : ''}`}
            >
                <input className="text_bar"
                    id="textbox" value={props.searchTerm} style={{ width: `20ch` }}
                    type="text" onChange={(x) => props.setSearchTerm(x.target.value)} placeholder={props.searchTerm} />
                <button className="search-btn" onClick={(event) => getFocus(event)}>
                    <span>
                    </span>
                    <Search className="button_icon" />
                </button>

            </form>



        </div >
    )
}

export default VideoSearch