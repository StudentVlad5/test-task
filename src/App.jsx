import React, { useState } from "react";
import { updateFilters } from "./assets/animation.js";

function App() {
  const [filterAll, setFilterAll] = useState(true);
  const [filterGreen, setFilterGreen] = useState(true);
  const [filterOrange, setFilterOrange] = useState(true);
  const [filterPurpule, setFilterPurpule] = useState(true);
  const handleChange = (e) => {
    // e.preventDefault();
    console.log(e.target);

    switch (e.target.value) {
      case "all":
        if (filterAll) {
          setFilterAll(false);
          setFilterGreen(false);
          setFilterOrange(false);
          setFilterPurpule(false);
        } else {
          setFilterAll(true);
          setFilterGreen(true);
          setFilterOrange(true);
          setFilterPurpule(true);
        }
        updateFilters();
        break;
      case "green":
        setFilterGreen(!filterGreen);
        break;
      case "orange":
        setFilterOrange(!filterOrange);
        break;
      case "purple":
        setFilterPurpule(!filterPurpule);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="buttons-container">
        <div>Show: </div>
        <div>
          <label htmlFor="all">
            <input
              type="checkbox"
              id="all"
              value="all"
              onChange={handleChange}
              checked={filterAll}
            />{" "}
            All
          </label>
          <label htmlFor="green">
            <input
              type="checkbox"
              id="green"
              value="green"
              className="filter"
              checked={filterGreen}
              onChange={handleChange}
            />{" "}
            Green
          </label>
          <label htmlFor="orange">
            <input
              type="checkbox"
              id="orange"
              value="orange"
              className="filter"
              onChange={handleChange}
              checked={filterOrange}
            />{" "}
            Orange
          </label>
          <label htmlFor="purple">
            <input
              type="checkbox"
              id="purple"
              value="purple"
              className="filter"
              onChange={handleChange}
              checked={filterPurpule}
            />{" "}
            Purple
          </label>
        </div>
      </div>

      <div className="container">
        <div className="item green"></div>
        <div className="item orange"></div>
        <div className="item orange"></div>
        <div className="item green"></div>
        <div className="item green"></div>
        <div className="item purple"></div>
        <div className="item green"></div>
        <div className="item purple"></div>
        <div className="item purple"></div>
        <div className="item orange"></div>
      </div>

      <a href="https://greensock.com/">
        <img
          src="https://assets.codepen.io/16327/hero-logo.svg"
          className="logo"
          alt=""
        />
      </a>
    </>
  );
}

export default App;
