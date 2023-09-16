import React, { useState } from "react";

// TODO: move functions to a util file?
// clean up location usage data, App structure and Locations component duplicating

export default function Location({ locations }) {
  const [location, setLocation] = useState(locations);
  const [toggle, setToggle] = useState(true);
  const [sortDirection, setSortDirection] = useState("sort");
  // - reset sort button (default state)

  const toggleClick = (sort) => {
    setToggle(!toggle);

    if (toggle === true) {
      const sortedASC = [...locations].sort((a, b) =>
        a[sort] > b[sort] ? 1 : b[sort] > a[sort] ? -1 : 0
      );
      setLocation(sortedASC);
      setSortDirection("↑ A");
    } else {
      const sortedDESC = [...locations].sort((a, b) =>
        a[sort] < b[sort] ? 1 : b[sort] < a[sort] ? -1 : 0
      );
      setLocation(sortedDESC);
      setSortDirection("↓ D");
    }
  };

  // copy to clipboard
  const handleClickCopyText = (e) => {
    const copiedText = e.target.innerText;
    navigator.clipboard.writeText(copiedText);
    // convert to tooltip eventually, confirm
    console.log(copiedText + " copied!");
  };

  return (
    <>
      <div>
        <button>Reset</button>
      </div>
      <div className="sorting-header">
        <div className="sorting-sort">
          <span> Name</span>
          <button onClick={() => toggleClick("name")}>{sortDirection}</button>
        </div>
        <div className="sorting-sort">
          <span>Neighborhood</span>
          <button onClick={() => toggleClick("neighborhood")}>{sortDirection}</button>
        </div>
        <div className="sorting-sort">
          <span>Type</span>
          <button onClick={() => toggleClick("type")}>{sortDirection}</button>
        </div>
        <div className="sorting-sort">
          <span> Visited</span>
          <button onClick={() => toggleClick("visited")}>{sortDirection}</button>
        </div>
      </div>

      <div className="location-list">
        {location.map((location) => (
          <div key={location.id} className="locations">
            <div className="location-name" onClick={handleClickCopyText}>
              <span className="location-visited">
                {String(location.visited) === "true" ? "✓" : ""}
              </span>
              <strong>{location.name}</strong>{" "}
              <span className="neighborhood">
                <em>- {location.neighborhood} </em>
              </span>
            </div>
            {/* TODO: UPDATE TO BUSINESS NAME HOPEFULY */}
            <div className="location-directions">
              <a
                href={
                  "https://www.google.com/maps?saddr=My+Location&daddr=" +
                  location.lat +
                  "," +
                  location.long
                }
                target="_blank"
              >
                directions
              </a>{" "}
              - new tab icon
            </div>
            <div className="location-type">
              <em>{location.type}</em>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
