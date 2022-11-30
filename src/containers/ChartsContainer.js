import React, { useEffect, useState } from 'react';
import ChartList from "../components/ChartList";
const ChartContainer = () => {

  const [charts, setCharts] = useState([]);

  useEffect(() => {
    getChart();
  }, []);

  const getChart = function() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(res => res.json())
    .then(charts => setCharts(charts.feed.entry))
  }

  return(
      <ChartList charts={charts}/>
  )
}


export default ChartContainer;