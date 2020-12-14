import React from "react";
import DayForecastBlock from "../day-forecast-block/day-forecast-block.component";

const Forecast = ({ forecast, measurement }) => {
  return (
    <div className="forecast center-content">
      {forecast.map((day, i) => (
        <DayForecastBlock day={day} i={i} key={i} measurement={measurement} />
      ))}
    </div>
  );
};

export default Forecast;
