import React, { useState } from "react";

export default function LocationList({ locations }) {
  const [location, setLocation] = useState(locations);
  const [toggle, setToggle] = useState(true);
  const [sortDirection, setSortDirection] = useState("Sort");
  const [searchText, setSearchText] = useState("");

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
    setSortDirection("Sort");
  };

  function LocationList(props) {
    const filteredData = location.filter((el) => {
      if (props.input === "") {
        return el;
      } else {
        return (
          el.name.toLowerCase().includes(props.input) ||
          el.type.toLowerCase().includes(props.input)
        );
      }
    });
    return (
      <ul>
        {filteredData.map((location) => (
          <div key={location.id} className="locations">
            <div className="location-name">
              <span className="location-visited">
                {String(location.visited) === "true" ? "✓" : ""}
              </span>
              <strong>{location.name}</strong>{" "}
              <span className="location-neighborhood">
                <em> - {location.neighborhood} </em>
              </span>
            </div>
            <div className="location-directions">
              <a
                href={"https://www.google.com/maps?daddr=" + location.name}
                target="_blank"
                rel="noreferrer"
              >
                directions{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <div className="location-type">
              <em>{location.type}</em>
            </div>
          </div>
        ))}
      </ul>
    );
  }

  let inputHandler = (e) => {
    let lowerCaseSearch = e.target.value.toLowerCase();

    setSearchText(lowerCaseSearch);
  };

  return (
    <>
      <div className="sorting-header">
        <button className="sorting-button" onClick={() => toggleClick("name")}>
          Name
        </button>
        <button
          className="sorting-button"
          onClick={() => toggleClick("neighborhood")}
        >
          Neighborhood
        </button>
        <button className="sorting-button" onClick={() => toggleClick("type")}>
          Type
        </button>
        <button
          className="sorting-button"
          onClick={() => toggleClick("visited")}
        >
          Visited
        </button>
        <div className="separator"></div>
        <button className="sorting-reset" onClick={resetClick}>
          Reset
        </button>
        <div className="sorting-direction">{sortDirection}</div>
      </div>

      <div className="searchbar">
        <input type="text" placeholder="search..." onChange={inputHandler} />
      </div>

      <div className="location-list">
        <LocationList input={searchText} />
      </div>
    </>
  );
}
