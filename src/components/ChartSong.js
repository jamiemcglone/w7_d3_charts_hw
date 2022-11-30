import React from "react";
import "./ChartSong.css";

const ChartSong = ({song, songKey}) => {
    return( 
    <>
        <li id="song">
            <h3>{(songKey) + 1}</h3>
            {song['im:name'].label} - {song['im:artist'].label}
        </li>
    </>
    )
}

export default ChartSong;