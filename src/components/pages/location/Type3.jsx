"use client"

import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function LocationType3({ data }) {
  const { title, map } = data
  const { center, zoom, marker } = map

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

          <Marker position={[marker.lat, marker.lng]} />
        </MapContainer>
      </div>

    </div>
  )
}

export default LocationType3
