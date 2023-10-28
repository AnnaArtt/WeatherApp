import React from "react";
import logo from "../../img/logo.png";
import "./WeatherHeader.scss";
import SwitchTheme from "../switch/SwitchTheme";

const WeatherHeader = ({ changeCityToFind }) => {
  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      changeCityToFind(event.target.value);
    }
  };

  return (
    <header>
      <div className="logo">
        <img alt="" src={logo} style={{ height: "30px", width: "30px" }} />
        <h2 className="title">Weather</h2>
      </div>
      <div className="container">
        <SwitchTheme />
        <input
          type="text"
          placeholder="City"
          onKeyUp={handleInputKeyPress}
          className="input_city"
          style={{ marginLeft: "15px" }}
        />
      </div>
    </header>
  );
};

export default WeatherHeader;
