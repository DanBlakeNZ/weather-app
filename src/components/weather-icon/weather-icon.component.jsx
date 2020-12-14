import React from "react";

const WeatherIcon = (props) => {
  const { icon, description } = props;

  return (
    <img
      className="weather-icon"
      src={`https://www.metaweather.com/static/img/weather/${icon}.svg`}
      alt={description}
    />
  );
};

export default WeatherIcon;
