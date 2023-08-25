import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Header from "./components/Header";
import Location from "./components/Location";
import data from './locations'

function App({locations}) {
  const position = [45.5152, -122.6784];
  const zoomLevel = 12;
  return (
    <>
      <div>
        <Header />
        <div className="main">
        <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map((location) => (
          <Marker 
            key={location.id}
            position={[location.lat, location.long]}
            >
            <Popup>
              {location.name}
            </Popup>
            </Marker>
          ))} 
        </MapContainer>

        <Location locations={data} className="location"/>

      </div>
      </div>
    </>
  );
}

export default App;
