import React, { useState } from "react";

export default function Location({ locations }) {
  const [location, setLocation] = useState(locations);
  const [toggle, setToggle] = useState(false);

  // testing and update later, e taking over for "type", not as descriptive
  const sortAsc = (e) => {
    // console.log(e)
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

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => sortAsc("name")}>ASC</button>
              <button onClick={() => sortDesc("name")}>DESC</button>
              Name
            </th>
            <th>
              <button onClick={() => sortAsc("neighborhood")}>ASC</button>
              <button onClick={() => sortDesc("neighborhood")}>DESC</button>
              Neighborhood
            </th>
            <th>
              <button onClick={() => sortAsc("type")}>ASC</button>
              <button onClick={() => sortDesc("type")}>DESC</button>
              Type
            </th>
            <th>
              <button onClick={() => sortAsc("visited")}>ASC</button>
              <button onClick={() => sortDesc("visited")}>DESC</button>
              Visited
            </th>
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
