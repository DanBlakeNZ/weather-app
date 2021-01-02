import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import DayForecastBlock from "./day-forecast-block.component";
import WeatherIcon from "../weather-icon/weather-icon.component";

const day = {
  max_temp: 21,
  min_temp: 13,
  weather_state_name: "Clear",
};

const wrap = shallow(<DayForecastBlock day={day} measurement="c" />);

describe("DayForecastBlock component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DayForecastBlock day={day} measurement="c" />, div);
  });

  it("contains WeatherIcon component", () => {
    expect(wrap.containsMatchingElement(<WeatherIcon />)).toBeTruthy();
  });
});
