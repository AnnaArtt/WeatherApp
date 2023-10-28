import React, { useState } from "react";
import WeatherHourCard from "../wetherHourCard/WeatherHourCard";
import "./WetherHourCardList.scss";

const WetherHourCardList = ({ myDate, chosenDate, dayList }) => {
  return (
    <div
      className={
        chosenDate !== myDate ? "hour_card_none" : "hour_card_list_wrapper"
      }
    >
      {dayList.map((card) => (
        <WeatherHourCard
          key={card.time}
          time={card.time}
          temp={card.temp}
          description={card.description}
          icon={card.icon}
          humidity={card.humidity}
          wind={card.wind}
          card={card}
        />
      ))}
    </div>
  );
};

export default WetherHourCardList;
