import React from "react";
import ReactDOM from "react-dom";

import WeatherIcon from "./weather-icon.component";

describe("WeatherIcon component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WeatherIcon icon="lc" description="light cloud" />, div);
  });
});
