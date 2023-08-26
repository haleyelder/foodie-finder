import React, { useState } from "react";

export default function Location({ locations }) {
  const [location, setLocation] = useState(locations);
  const [toggle, setToggle] = useState(false);

  // testing and update later, e taking over for "type", not as descriptive
  const sortAsc = (e) => {
    const sortedASC = [...locations].sort((a, b) =>
      a[e] > b[e] ? 1 : b[e] > a[e] ? -1 : 0
    );
    setLocation(sortedASC);
  };

  const sortDesc = (e) => {
    // let type = e.target.textContent.toLowerCase();
    const sortedDESC = [...locations].sort((a, b) =>
      a[e] < b[e] ? 1 : b[e] < a[e] ? -1 : 0
    );
    setLocation(sortedDESC);
  };

  //   // copy to clipboard
  const handleClickCopyText = (e) => {
    const copiedText = e.target.innerText;
    navigator.clipboard.writeText(copiedText);
    // convert to tooltip eventually, confirm
    // console.log(copiedText + ' copied!')
  };

  return (
    <>
      <div className="sorting-header">
        <div className="sorting-sort">
          <span> Name</span>
          <button onClick={() => sortAsc("name")}>↑ A</button>
          <button onClick={() => sortDesc("name")}>↓ D</button>
        </div>
        <div className="sorting-sort">
          <span>Neighborhood</span>
          <button onClick={() => sortAsc("neighborhood")}>↑ A</button>
          <button onClick={() => sortDesc("neighborhood")}>↓ D</button>
        </div>
        <div className="sorting-sort">
          <span>Type</span>
          <button onClick={() => sortAsc("type")}>↑ A</button>
          <button onClick={() => sortDesc("type")}>↓ D</button>
        </div>
        <div className="sorting-sort">
          <span> Visited</span>
          <button onClick={() => sortAsc("visited")}>↑ A</button>
          <button onClick={() => sortDesc("visited")}>↓ D</button>
        </div>
      </div>

      <div className="location-list">
        {location.map((location) => (
          <div key={location.id} className="locations">
            <div className="location-name" onClick={handleClickCopyText}>
              <strong>{location.name}</strong>{" "}
              <span className="neighborhood">
                <em>- {location.neighborhood} </em>
              </span>
            </div>

            <div className="location-type">
              <em>{location.type}</em>
            </div>
            <div className="location-coords">
              location: {location.lat} - {location.long}
            </div>
            <div className="location-visited">
              visited: {String(location.visited) === "true" ? "✓" : "false"}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
