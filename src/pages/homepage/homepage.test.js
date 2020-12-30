import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import HomePage from "./homepage.component";
import Weather from "../../components/weather/weather.component";

const wrap = shallow(<HomePage />);

describe("HomePage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePage />, div);
  });
});

it("contains Weather component", () => {
  expect(wrap.containsMatchingElement(<Weather />)).toBeTruthy();
});
