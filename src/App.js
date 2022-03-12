import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'



import Explore from './Page/Explore/Explore';
import Home from './Page/Home/Home';
import MainLayout from './Component/Utility/Layout/MainLayout';
import Settings from './Page/Settings/Settings';
import Planner from './Page/Planner/Planner';
import Current from './Page/Current/Current';


const testitem = {
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
}

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentList, setCurrentList] = useState([testitem]);

  const onVideoSubmit = (data) => {
    console.log(data);
    setSelectedVideo(data);
    setCurrentList([...currentList, data]);
    console.log(currentList);
    console.log(selectedVideo);
  }

  const handleCurrentList = (tempitem) => {
    const currentUpdate = currentList.concat(tempitem);
    setCurrentList(currentUpdate);
  }




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='settings' element={<Settings />} />
          <Route path='planner' element={
            <Planner currentList={currentList}
              onVideoSubmit={onVideoSubmit} selectedVideo={selectedVideo}
              setSelectedVideo={setSelectedVideo} handleCurrentList={handleCurrentList} />}
          />
          <Route path='explore' index element={<Explore />} />
          <Route path='current' index element={<Current selectedVideo={selectedVideo} currentList={currentList} />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;

