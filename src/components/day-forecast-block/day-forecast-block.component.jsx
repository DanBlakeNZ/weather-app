import React from "react";
import moment from "moment";
import WeatherIcon from "../weather-icon/weather-icon.component";
import setTemperature from "../../services/temperature-converter";

const DayForecastBlock = ({ day, i, measurement }) => {
  const formatDate = (date) => {
    return moment(date).format("dddd");
  };

  return (
    <div className="forecast-day">
      <p>{i === 0 ? "Today" : formatDate(day.applicable_date)}</p>
      <WeatherIcon icon={day.weather_state_abbr} description={day.weather_state_name} />
      <div>
        <span className="max">{setTemperature(day.max_temp, measurement)}</span>
        <span className="min">{setTemperature(day.min_temp, measurement)}</span>
      </div>
    </div>
  );
};

export default DayForecastBlock;
