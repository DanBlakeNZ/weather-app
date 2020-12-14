import React from "react";
import WeatherIcon from "../weather-icon/weather-icon.component";
import setTemperature from "../../services/temperature-converter";

const CurrentConditions = (props) => {
  const { locationName, date, description, icon, temperature, measurement } = props;
  return (
    <div className="current-conditions center-content">
      <h1>{locationName}</h1>
      <span className="date">{date}</span>
      <span className="description">{description}</span>
      <div>
        <WeatherIcon icon={icon} description={description} />
        <span className="temperature">{setTemperature(temperature, measurement)}</span>
      </div>
    </div>
  );
};

export default CurrentConditions;
