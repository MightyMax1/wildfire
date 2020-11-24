import { useState, useEffect } from 'react'
import Map from './components/Map'
import Header from './components/Header'
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {

  const [eventData, setEventData] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const data = await res.json()
      setEventData(data.events)
    }
    fetchEvents()
  }, [])

  return (
    <div className="App">
      <Header />
      <Map data={eventData} />
    </div>
  );
}

export default App;
