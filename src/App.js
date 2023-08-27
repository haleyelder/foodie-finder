import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Header from "./components/Header";
import Location from "./components/Location";
import data from './locations'
// import iconCoffee from './components/Icons'

import L from 'leaflet';

const iconCoffee = new L.Icon({
    iconUrl: require('./images/coffee-icon.png'),
    iconRetinaUrl: require('./images/coffee-icon.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [25,25]
});

// export default { iconCoffee };

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
            icon = {iconCoffee}
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
