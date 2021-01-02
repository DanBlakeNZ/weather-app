import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import SearchButton from "./search-button.component";
import Spinner from "../spinner/spinner.component";

const mockFunction = jest.fn();

const wrap = shallow(<SearchButton onClick={mockFunction} />);

describe("SearchButton component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchButton />, div);
  });

  it("should call mock function when button is clicked", () => {
    wrap.simulate("click");
    expect(mockFunction).toHaveBeenCalled();
  });

  it("contains Spinner component when loading", () => {
    expect(wrap.containsMatchingElement(<Spinner />)).toBeFalsy();
    wrap.setProps({ searching: true });
    expect(wrap.containsMatchingElement(<Spinner />)).toBeTruthy();
  });
});
