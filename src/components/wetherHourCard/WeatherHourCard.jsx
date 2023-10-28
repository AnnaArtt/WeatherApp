import React, { useMemo } from "react";
import "./WeatherHourCard.scss";

const WeatherHourCard = ({ time, temp, description, humidity, wind, icon }) => {
  const newStyleTime = useMemo(() => {
    console.log("work");
    return time.slice(0, -3);
  }, [time]);
  const newStyleDescription = useMemo(() => {
    return description.charAt(0).toUpperCase() + description.slice(1);
  }, [description]);

  // const newStyleTime = newStyleTime1();
  // const newStyleDescription =
  //   description.charAt(0).toUpperCase() + description.slice(1);

  // function newStyleTime1() {
  //   console.log("work");
  //   return time.slice(0, -3);
  // }

  return (
    <ul className="card_wrapper">
      <li>{newStyleTime}</li>
      <li>{temp}°C</li>
      <li>
        <img src={icon} alt="" />
      </li>
      <li>{newStyleDescription}</li>
      <li>{humidity}%</li>
      <li>{wind}m/s</li>
    </ul>
  );
};

export default WeatherHourCard;
