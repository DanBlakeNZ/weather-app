import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Selector from "./selector.component";

const mockFunction = jest.fn();

const wrap = shallow(<Selector onClick={mockFunction}>&deg;C</Selector>);

describe("Selector component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Selector />, div);
  });

  it("should call mock function when button is clicked", () => {
    wrap.simulate("click");
    expect(mockFunction).toHaveBeenCalled();
  });

  it("should contain a single child component", () => {
    expect(wrap.children()).toHaveLength(1);
  });
});
