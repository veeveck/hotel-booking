import { useState } from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'

function Map({searchResults}) {
   const [selectedLocation,setSelectedLocation]=useState({});
    //Transform search results object into the latitude:xx.xx , longitude:xx object
    const coordinates =searchResults.map((result)=>({
        longitude:result.long,
        latitude:result.lat,
    }))

    const center = getCenter(coordinates);

    const [viewPort,setViewPort]=useState({
        width:'100%',
        height:'100%',
        latitude:(center.latitude),
        longitude:(center.longitude),
        zoom:11,
    })
    return (
        <ReactMapGL 
        mapStyle='mapbox://styles/veeveck/ckvb8xipvb7mk14p16q37ux52'
        mapboxApiAccessToken={process.env.mapBox_key}
        {...viewPort}
        onViewportChange={(nextViewPort)=>setViewPort(nextViewPort)}
        > 
        {searchResults.map(result=>{
              return <div key={result.long}>
                   <Marker 
                   longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
                  <p
                  role='img' onClick={()=>setSelectedLocation(result)}className='cursor-pointer text-2xl animate-bounce'
                  aria-label='push-pin'>📌</p>
                   </Marker>
                   {selectedLocation.long===result.long ?(
                       <Popup 
                       closeOnClick={true} 
                       onClose={()=>setSelectedLocation({})}
                       latitude={result.lat}
                       longitude={result.long}>{result.title}</Popup>):(false)}
               </div>
        })}
            
        </ReactMapGL>
    )
}

export default Map
