import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import FormInput from "./form-input.component";

const mockFunction = jest.fn();

const wrap = shallow(<FormInput handleChange={mockFunction} />);

describe("FormInput component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormInput />, div);
  });

  it("calls on change function when input is changed", () => {
    wrap.find("input").simulate("change", {
      target: { value: "hello" },
    });
    expect(mockFunction).toHaveBeenCalled();
  });
});
