import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Forecast from "./forecast.component";
import DayForecastBlock from "../day-forecast-block/day-forecast-block.component";

const forecastData = [
  {
    max_temp: 21,
    min_temp: 13,
    weather_state_name: "Clear",
  },
];

const wrap = shallow(<Forecast forecast={forecastData} measurement="c" />);
describe("Forecast component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Forecast forecast={forecastData} measurement="c" />, div);
  });

  it("contains DayForecastBlock component", () => {
    expect(wrap.containsMatchingElement(<DayForecastBlock />)).toBeTruthy();
  });
});
