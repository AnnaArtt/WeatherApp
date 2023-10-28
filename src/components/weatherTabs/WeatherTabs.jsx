import React, { useState } from "react";
import "./WeatherTabs.scss";
import WetherHourCardList from "../wetherHourCardList/WetherHourCardList";
import WeatherTabButton from "../weatherTabButton/WeatherTabButton";

const WeatherTabs = ({ dateForecast, cardForecast }) => {
  const [chosenDate, setChosenDate] = useState(dateForecast[0]);

  const changeChosenDate = (value) => {
    setChosenDate(value);
  };

  return (
    <section
      style={{
        position: "relative",
        marginTop: "30px",
        width: "80vw",
      }}
    >
      <div className="date_wrapper_block">
        {dateForecast.map((date, index) => (
          <WeatherTabButton
            key={index}
            date={date}
            chosenDate={chosenDate}
            changeChosenDate={changeChosenDate}
          />
        ))}
      </div>

      {cardForecast.map((cards, index) => (
        <WetherHourCardList
          key={index}
          dayList={cards}
          chosenDate={chosenDate}
          myDate={dateForecast[index]}
        />
      ))}
    </section>
  );
};

export default WeatherTabs;
