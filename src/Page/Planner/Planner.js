import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import VideoSearch from '../../Component/VideoSearch/VideoSearch'
import VideoList from '../../Component/VideoSearch/VideoList'
import './Planner.css';
import VideoDetail from '../../Component/VideoSearch/VideoDetail';
import Playlist from '../../Component/Playlist/PlayList';
import { hover } from '@testing-library/user-event/dist/hover';

const object = [
    {
        "kind": "youtube#searchResult",
        "etag": "zYxjlEaRaXHM4Vgbe4zQOeXRoRo",
        "id": {
            "kind": "youtube#video",
            "videoId": "5Nwbb74D5fg"
        },
        "snippet": {
            "publishedAt": "2014-05-19T18:07:52Z",
            "channelId": "UCLyYEq4ODlw3OD9qhGqwimw",
            "title": "Test Official Trailer 1 (2014) - Gay Drama HD",
            "description": "Subscribe to TRAILERS: http://bit.ly/sxaw6h Subscribe to COMING SOON: http://bit.ly/H2vZUn Subscribe to INDIE & FILM ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/5Nwbb74D5fg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/5Nwbb74D5fg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/5Nwbb74D5fg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Movieclips Indie",
            "liveBroadcastContent": "none",
            "publishTime": "2014-05-19T18:07:52Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Qa5WMH8-PB_AUruZXeGRKNMNnPM",
        "id": {
            "kind": "youtube#video",
            "videoId": "dNwxvuR41gw"
        },
        "snippet": {
            "publishedAt": "2017-12-11T23:15:21Z",
            "channelId": "UCPTt5wK4tpraRDp86LJ4arg",
            "title": "Avengers: Infinity War: Official Trailer | Dolby Cinema | Dolby",
            "description": "Are you ready for the ultimate showdown? Watch the full trailer for Avengers: Infinity War and be sure to catch it at a Dolby Cinema ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/dNwxvuR41gw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/dNwxvuR41gw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/dNwxvuR41gw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Dolby",
            "liveBroadcastContent": "none",
            "publishTime": "2017-12-11T23:15:21Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "ND0vUbmu1b8_8e5OgqI-_599Ihc",
        "id": {
            "kind": "youtube#video",
            "videoId": "bkdt2Sygew0"
        },
        "snippet": {
            "publishedAt": "2010-05-18T12:17:35Z",
            "channelId": "UC08--Q3n6ybkxmkJ3AhFo4A",
            "title": "Exam Trailer - Exam Movie Trailer",
            "description": "http://www.blockbuster.co.uk/ Eight candidates face the interview from hell. Led into a windowless concrete bunker they are given ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/bkdt2Sygew0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/bkdt2Sygew0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/bkdt2Sygew0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BlockbusterUK",
            "liveBroadcastContent": "none",
            "publishTime": "2010-05-18T12:17:35Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "oEcxyumS3F5VcHvbC9AONucjZY0",
        "id": {
            "kind": "youtube#video",
            "videoId": "Ll21vYwxs4A"
        },
        "snippet": {
            "publishedAt": "2021-02-12T17:45:00Z",
            "channelId": "UCwYzZs_hwA6NdaQp6Hjhe5w",
            "title": "TEST PATTERN Trailer (2021) Drama Movie",
            "description": "TEST PATTERN Trailer (2021) Drama Movie © 2021 - Kino Lorber.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Ll21vYwxs4A/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Ll21vYwxs4A/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Ll21vYwxs4A/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Movie Coverage",
            "liveBroadcastContent": "none",
            "publishTime": "2021-02-12T17:45:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Rb_VDie7r4hrCHNcHAhwelpCKks",
        "id": {
            "kind": "youtube#video",
            "videoId": "hbivC9ztGOE"
        },
        "snippet": {
            "publishedAt": "2018-06-02T12:00:03Z",
            "channelId": "UCLlHQpMI6NCzSBRRT1_D7eA",
            "title": "🎥 EXAM (2009) | Full Movie Trailer in HD | 1080p",
            "description": "Eight candidates for a highly desirable corporate job are locked together in an exam room and given a final test with just one ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/hbivC9ztGOE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/hbivC9ztGOE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/hbivC9ztGOE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "MOVIE PREDICTOR",
            "liveBroadcastContent": "none",
            "publishTime": "2018-06-02T12:00:03Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "ti7EMoEuCoHEsFbgxaDnY4OSBpc",
        "id": {
            "kind": "youtube#video",
            "videoId": "j8JHvSy3hEE"
        },
        "snippet": {
            "publishedAt": "2020-02-13T10:00:05Z",
            "channelId": "UCpJN7kiUkDrH11p0GQhLyFw",
            "title": "THE ALPHA TEST Official Trailer (2020) Sci-Fi Horror Movie",
            "description": "First Trailer for THE ALPHA TEST.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/j8JHvSy3hEE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/j8JHvSy3hEE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/j8JHvSy3hEE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Movie Trailers Source",
            "liveBroadcastContent": "none",
            "publishTime": "2020-02-13T10:00:05Z"
        }
    }
]

const Planner = (props) => {




    const [searchTerm, setSearchTerm] = useState('');
    const [resultsList, setResultsList] = useState([]);
    const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
    const [searching, setSearching] = useState(false);




    const [grab, setGrab] = useState(false);
    const handleGrab = (x, data) => {
        if (x === 1) {
            setGrab(true);
            console.log("started", data)
        }
        if (x === 2) {
            setGrab(false);
            console.log("ended", data)
        }
    }
    const allowDrop = (ev) => {
        ev.preventDefault();
    }
    const handleDrop = (ev) => {
        if (grab === true) {
            console.log("dropped an item")
        }
        if (grab === false) {
            console.log("dropped nothing")
        }
    }

    // const onVideoSubmit = () => {
    //     alert("testing")
    // console.log(data);
    // setSelectedVideo(data);
    // setCurrentList([...currentList, data]);
    // console.log(currentList);
    // console.log(selectedVideo);
    // }

    const onDebugPress = () => {
        setResultsList(object);
        console.log(resultsList)
    }

    const handleDelete = (index) => {
        console.log(index);
        const tempitem = resultsList.splice(index, 1);
        console.log(tempitem);
        setResultsList([...resultsList]);
        props.handleCurrentList(tempitem, 1);
    }

    const renderHelper = (
        resultsList.length === 0 ? (<div className="resultsList">Try Searching A Movie</div>) : <VideoList className="resultsList" onVideoSubmit={props.onVideoSubmit} resultsList={resultsList}
            currentList={props.currentList} setCurrentList={props.setCurrentList}
            setResultsList={props.setResultsList} handleGrab={handleGrab} />)
    // const currentVideo =(props.selectedVideo ? <VideoDetail selectedVideo={props.selectedVideo} /> : "You currently don't have anything")



    return (
        <div className="planning container">
            <h1 className="title">Search</h1>
            <VideoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                setDebouncedSearch={setDebouncedSearch} debouncedSearch={debouncedSearch}
                resultsList={resultsList} setResultsList={setResultsList}
                searching={searching} setSearching={setSearching}
            />
            {renderHelper}
            <div className={`playlistcontainer ${grab ? "grabbing" : ""}`}>
                <Playlist
                    handleDelete={handleDelete} currentList={props.currentList} handleGrab={handleGrab} handleCurrentList={props.handleCurrentList} />
            </div>
            <div style={{ position: 'absolute', top: '60rem', right: '10rem' }}>
                {/* {currentVideo} */}
                <button onClick={() => onDebugPress()}>debug button</button>
            </div>
        </div>
    )
}

export default Planner