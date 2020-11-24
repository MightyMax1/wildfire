import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import LocationMarker from './LocationMarker'
import InfoBox from './InfoBox'

const Map = ({ data }) => {
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 3
    })
    const [locationInfo, setLocationInfo] = useState(null)

    const eventsMarker = data.map(eventData => {
        if (eventData.categories[0].id === 8) {
            return (<Marker
                latitude={eventData.geometries[0].coordinates[1]}
                longitude={eventData.geometries[0].coordinates[0]}



            >
                <LocationMarker
                    onClick={() => setLocationInfo({
                        id: eventData.id,
                        title: eventData.title
                    })} />

            </Marker>
            )
        } else {
            return null
        }
    })


    return (
        <div>
            <ReactMapGL
                {...viewport}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
                {eventsMarker}
            </ReactMapGL>
            {locationInfo && <InfoBox data={locationInfo} />}
        </div>
    )
}

export default Map
