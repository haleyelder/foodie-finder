import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Header from "./components/Header";
import Location from "./components/Location";
import locationData from "./locations";

import L from "leaflet";

const GetIcon = (locationType) => {
  return L.icon({
    iconUrl: require(`./images/${locationType}-icon-2.png`),
    iconSize: [25,40]
  });
};

function App() {
  // const position = [45.5152, -122.6784];
  const position = [45.528144, -122.664013]
  const zoomLevel = 12;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div>
        <Header />
        <div className="main">
          <Location locations={locationData} className="location" />
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
        </div>
        <footer>Haley Elder | &copy; {currentYear} </footer>
      </div>
    </>
  );
}

export default App;
