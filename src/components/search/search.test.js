import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Search from "./search.component";
import SearchButton from "../search-button/search-button.component";
import FormInput from "../form-input/form-input.component";

const wrap = shallow(<Search />);

describe("Search component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search />, div);
  });

  it("contains SearchButton component", () => {
    expect(wrap.containsMatchingElement(<SearchButton />)).toBeTruthy();
  });

  it("contains FormInput component", () => {
    expect(wrap.containsMatchingElement(<FormInput />)).toBeTruthy();
  });
});
