import React from "react";
import "./WeatherTabButton.scss";

const WeatherTabButton = ({ date, chosenDate, changeChosenDate }) => {
  const choseDate = () => {
    changeChosenDate(date);
  };
  return (
    <div
      onClick={choseDate}
      className={date == chosenDate ? "date_wrapper_chosen" : "date_wrapper"}
    >
      <h2 className="date">{date}</h2>
    </div>
  );
};

export default WeatherTabButton;
