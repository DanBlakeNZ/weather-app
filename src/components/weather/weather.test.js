import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Weather from "./weather.component";
import Spinner from "../spinner/spinner.component";
import CurrentConditions from "../current-conditions/current-conditions.component";
import Forecast from "../forecast/forecast.component";
import Search from "../../components/search/search.component";
import Selector from "../../components/selector/selector.component";

const wrap = shallow(<Weather />);

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Weather />, div);
  });

  it("contains Spinner component", () => {
    expect(wrap.containsMatchingElement(<Spinner />)).toBeTruthy();
  });

  it("contains Search component", () => {
    expect(wrap.containsMatchingElement(<Search />)).toBeTruthy();
  });
});
