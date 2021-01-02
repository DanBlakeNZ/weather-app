import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import CurrentConditions from "./current-conditions.component";
import WeatherIcon from "../weather-icon/weather-icon.component";

const wrap = shallow(<CurrentConditions />);

describe("CurrentConditions component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CurrentConditions />, div);
  });

  it("contains WeatherIcon component", () => {
    expect(wrap.containsMatchingElement(<WeatherIcon />)).toBeTruthy();
  });
});
