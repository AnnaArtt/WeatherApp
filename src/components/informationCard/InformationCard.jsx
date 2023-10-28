import React from "react";
import "./InformationCard.scss";
import sun from "../../img/sun.png";

const InformationCard = ({ temperature, city, icon }) => {
  return (
    <div className="information_card_wrapper">
      <div className="box_main_information">
        <div className="text_wrapper">
          <h2 className="temperature">{temperature}°</h2>
          <h3 className="day">Today</h3>
        </div>
        <img src={icon} alt="" />
      </div>
      <div className="box_extra_information">
        <h4 className="city_name">City: {city}</h4>
        <h4 className="time">Time: </h4>
      </div>
    </div>
  );
};

export default InformationCard;
