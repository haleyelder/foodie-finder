import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Header from "./components/Header";
import Location from "./components/Location";
import locationData from "./locations";

import L from "leaflet";

const coffeeImg = require("./images/coffee-icon.png");
const restaurantImg = require("./images/restaurant-icon.png");
const dessertImg = require("./images/dessert-icon.png");

const GetIcon = (locationType) => {
  return L.icon({
    iconUrl: require(`./images/${locationType}-icon.png`),
    iconSize: [30, 30],
  });
};

function App() {
  const position = [45.5152, -122.6784];
  const zoomLevel = 12;

  return (
    <>
      <div>
        <Header />
        <div className="main">
          <MapContainer
            center={position}
            zoom={zoomLevel}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locationData.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.long]}
                icon={GetIcon(location.type)}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>

          <Location locations={locationData} className="location" />
        </div>
      </div>
    </>
  );
}

export default App;
