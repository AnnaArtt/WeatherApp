import React from "react";
import "./WeatherCard.scss";

import cloud from "../../img/cloud.png";
import temp_img from "../../img/temp.png";
import wind_img from "../../img/wind.png";
import pressure_img from "../../img/pressure.png";
import precipitation_img from "../../img/precipitation.png";

const WeatherCard = ({ temperature, pressure, humidity, wind }) => {
  return (
    <div className="weather_card_wrapper">
      <img src={cloud} alt="" className="cloud_background" />
      <ul className="lost_of_conditions">
        <li className="condition">
          <div className="img_wrapper">
            <img src={temp_img} alt="" />
          </div>
          <h4>Temperature {temperature}°C</h4>
        </li>
        <li className="condition">
          <div className="img_wrapper">
            <img src={pressure_img} alt="" />
          </div>
          <h4>Pressure {pressure} mm</h4>
        </li>
        <li className="condition">
          <div className="img_wrapper">
            <img src={wind_img} alt="" />
          </div>
          <h4>Wind {wind} m/s</h4>
        </li>
        <li className="condition">
          <div className="img_wrapper">
            <img src={precipitation_img} alt="" />
          </div>
          <h4>Humidity {humidity}%</h4>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCard;
