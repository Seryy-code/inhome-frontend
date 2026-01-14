"use client"

import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function LocationType3({ data }) {
  if (!data || !data.map || !data.map.center) {
    return null;
  }

  const { title, map } = data
  const { center, zoom, marker } = map
  
  const markerPosition = marker?.lat && marker?.lng 
    ? [marker.lat, marker.lng] 
    : [center.lat, center.lng];

  return (
    <div className="w-screen h-screen flex flex-col px-10 py-8">
      
      <h1 className="text-3xl tracking-widest mb-6 text-center uppercase">
        {title}
      </h1>

      <div className="w-full h-full overflow-hidden">
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={zoom}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <Marker position={markerPosition} />
        </MapContainer>
      </div>

    </div>
  )
}

export default LocationType3
