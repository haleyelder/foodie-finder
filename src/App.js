import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { useState } from "react";
import Header from "./components/Header";

function App({ locations }) {
  // const [locations, setLocations] = useState(props.locations)
  // console.log(locations);

  const position = [45.5152, -122.6784];
  const zoomLevel = 15;
  console.log(locations)
  return (
    <>
      <div className="main">
        <Header />

        <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((location) => (
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

          {/* render complete list */}
        {/* <div className="location">
          {locations.map((location) => (
            <div key={location.id}>
              Name: {location.name}
              <br></br>
              location:
              {location.lat} - {location.long}
              <br></br>
              Type: {location.type}
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default App;
