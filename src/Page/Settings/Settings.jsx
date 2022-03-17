import React, { useState } from 'react'
import BuildIcon from '@mui/icons-material/Build';
import PauseIcon from '@mui/icons-material/Pause';
import "./Settings.css"
import { PlayArrow, PlayArrowSharp } from '@mui/icons-material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const Settings = (props) => {

    const [showSettings, setShowSettings] = useState(false);



    return (<div style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div className="settingsPageContainer">
            <div className="settingsBox">
                <button className={showSettings ? "settingsButton on" : "settingsButton"} onClick={() => setShowSettings(!showSettings)}>
                    {showSettings ? <CancelPresentationIcon style={{ fontSize: "3em", color: "white" }} /> : <BuildIcon style={{ fontSize: "3em", color: "white" }} />}
                </button>
                <div className={showSettings ? "showSettings on" : "showSettings"}>
                    <button className={props.autoPlay ? "autoPlayButton on" : "autoPlayButton off"} onClick={() => props.handleAutoPlay()} >
                        {props.autoPlay ? <span><PlayArrowSharp /> ON</span> : <span><PauseIcon /> OFF</span>}
                    </button>
                </div>


            </div>

        </div>
    </div >
    )
}

export default Settings