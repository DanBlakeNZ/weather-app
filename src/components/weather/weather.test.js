import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Weather from "./weather.component";
import Spinner from "../spinner/spinner.component";
import Search from "../search/search.component";
import CurrentConditions from "../current-conditions/current-conditions.component";
import Forecast from "../forecast/forecast.component";
import Selector from "../selector/selector.component";

const testForecast = {
  consolidated_weather: [
    {
      applicable_date: "2021-01-02",
      max_temp: 25.375,
      min_temp: 19.7,
      weather_state_abbr: "hr",
      weather_state_name: "Heavy Rain",
    },
  ],
  time: "2021-01-02T11:22:35.001917+11:00",
  title: "Melbourne",
  woeid: 1103816,
};

const wrap = shallow(<Weather />);

describe("Weather component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Weather />, div);
  });

  describe("forecast data is loading", () => {
    beforeEach(() => {
      wrap.setState({ loading: true });
    });
    it("contains Spinner component when loading", () => {
      expect(wrap.containsMatchingElement(<Spinner />)).toBeTruthy();
    });

    it("contains Search component", () => {
      expect(wrap.containsMatchingElement(<Search />)).toBeTruthy();
    });

    it("does not contain CurrentConditions component", () => {
      expect(wrap.containsMatchingElement(<CurrentConditions />)).toBeFalsy();
    });

    it("does not contain Forecast component", () => {
      expect(wrap.containsMatchingElement(<Forecast />)).toBeFalsy();
    });

    it("does not contain Selector component", () => {
      expect(wrap.containsMatchingElement(<Selector />)).toBeFalsy();
    });
  });

  describe("location forecast has loaded", () => {
    beforeEach(() => {
      wrap.setState({
        locationForecast: testForecast,
        loading: false,
      });
    });

    it("contains CurrentConditions component", () => {
      expect(wrap.containsMatchingElement(<CurrentConditions />)).toBeTruthy();
    });

    it("contains Forecast component", () => {
      expect(wrap.containsMatchingElement(<Forecast />)).toBeTruthy();
    });
  });
});
