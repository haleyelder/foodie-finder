// import { useState } from "react";
import Header from "./components/Header";


function App({locations}) {
  
  // const [locations, setLocations] = useState(props.locations)
  console.log(locations)
  return (
    <>
    <div className="main">
    <Header/>
        <div className="location">
          {locations.map((location) => (
              <div key={location.id}>
                Name: {location.name} 
                <br></br>
                Neighborhood: {location.neighborhood}
                <br></br>
                Type: {location.type}
              </div>
            ))}
        </div>      
      </div>
    </>
  );
}

export default App