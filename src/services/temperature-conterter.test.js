import setTemperature from "./temperature-converter";

describe("Temperature Converter", () => {
  it("setTemperature converts celsius to fahrenheit correctly", () => {
    expect(setTemperature(25, "f")).toEqual(77 + "\xB0F");
  });

  it("setTemperature returns celsius correctly", () => {
    expect(setTemperature(25, "c")).toEqual(25 + "\xB0C");
  });
});
