import React, { useState } from "react";


export default function Location({ locations }) {
  const [location, setLocation] = useState(locations);
  const [toggle, setToggle] = useState(true);
  const [sortDirection, setSortDirection] = useState("Sort");

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

  const resetClick = () => {
    setLocation(locations);
    setSortDirection("Sort")
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
      <div className="sorting-header">
        <button className="sorting-button" onClick={() => toggleClick("name")}>
          Name
        </button>
        <button className="sorting-button" onClick={() => toggleClick("neighborhood")}>
          Neighborhood
        </button>
        <button className="sorting-button" onClick={() => toggleClick("type")}>
          Type
        </button>
        <button className="sorting-button" onClick={() => toggleClick("visited")}>
          Visited
        </button>
        <button className="sorting-button" onClick={resetClick}>Reset</button>
        <div>{sortDirection}</div>
      </div>
  
      <div className="location-list">
        {location.map((location) => (
          <div key={location.id} className="locations">
            <div className="location-name" onClick={handleClickCopyText}>
              <span className="location-visited">
                {String(location.visited) === "true" ? "✓" : ""}
              </span>
              <strong>
                <span className="hover-text"></span>
                {location.name}
              </strong>{" "}
              <span className="neighborhood">
                <em>- {location.neighborhood} </em>
              </span>
            </div>
            {/* TODO: UPDATE TO BUSINESS NAME HOPEFULLY */}
            <div className="location-directions">
              <a
                href={
                  "https://www.google.com/maps?saddr=My+Location&daddr=" +
                  location.lat +
                  "," +
                  location.long
                }
                target="_blank"
                rel="noreferrer"
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
