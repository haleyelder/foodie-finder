import React, { useState } from "react";

export default function Location({ locations }) {
  const [location, setLocation] = useState(locations)
  
  function onHeaderClick(e) {
    let type = e.target.textContent.toLowerCase();
    
    const sorted = [...locations].sort((a, b) =>
    a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0
    );
    setLocation(sorted);
  }
  


  return (
    <>
      <table>
        <thead>
          <tr>
            <th onClick={onHeaderClick}>Name</th>
            <th onClick={onHeaderClick}>Neighborhood</th>
            <th onClick={onHeaderClick}>Type</th>
            <th onClick={onHeaderClick}>Visited</th>
          </tr>
        </thead>

        {location.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.name}</td>
              <td>{item.neighborhood}</td>
              <td>{item.type}</td>
              <td>{String(item.visited)}</td>
            </tr>
          </tbody>
        ))}
      </table>

      {/* search demo */}
      {/* <div className="search-container">
        <input
          type="search"
          value={search}
          onChange={filter}
          className="input"
          placeholder="search..."
        />
      </div> */}

      {/* <div className="user-list">
        {result && result.length > 0 ? (
          result.map((location) => (
            <li key={location.id} className="user">
              <span>{location.name}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div> */}
      {/* 
      <div className="location-list">
        {locations.map((location) => (
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
      </div> */}
    </>
  );
}
