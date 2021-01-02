import React from "react";
import ReactDOM from "react-dom";

import Spinner from "./spinner.component";

describe("Spinner component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Spinner />, div);
  });
});
