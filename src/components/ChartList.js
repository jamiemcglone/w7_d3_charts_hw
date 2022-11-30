import React from "react";
import ChartSong from "./ChartSong";
import "./ChartList.css";

const ChartList = ({charts}) => {
    const ChartSongs = charts.map((song, index) => {
        return <ChartSong song={song} songKey={index} key={index}/>
    });

    return(
        <div id="songList">
            <ul>
                {ChartSongs}
            </ul>
        </div>
    )
}

export default ChartList;