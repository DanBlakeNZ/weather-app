import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
const singleSearch = "melb";
const multipleSearch = "new";
const woeid = 1103816;

const singleResult = [
  {
    title: "Melbourne",
    location_type: "City",
    woeid: 1103816,
    latt_long: "-37.817532,144.967148",
  },
];

const multipleResults = [
  {
    title: "New York",
    location_type: "City",
    woeid: 2459115,
    latt_long: "40.71455,-74.007118",
  },
  {
    title: "New Delhi",
    location_type: "City",
    woeid: 28743736,
    latt_long: "28.643999,77.091003",
  },
  {
    title: "New Orleans",
    location_type: "City",
    woeid: 2458833,
    latt_long: "29.953690,-90.077713",
  },
  {
    title: "Newcastle",
    location_type: "City",
    woeid: 30079,
    latt_long: "54.977940,-1.611620",
  },
  {
    title: "Newark",
    location_type: "City",
    woeid: 2459269,
    latt_long: "40.731972,-74.174179",
  },
];

mock
  .onGet("/search", { params: { query: singleSearch } })
  .reply(200, { data: singleResult });

mock
  .onGet("/search", { params: { query: multipleSearch } })
  .reply(200, { data: multipleResults });

mock.onGet(`/api/location/${woeid}`).reply(200, { data: singleResult });

describe("Search by location name", () => {
  it("returns a single location", async () => {
    expect(
      await axios
        .get("/search", { params: { query: singleSearch } })
        .then((response) => response.data)
    ).toEqual({ data: singleResult });
  });

  it("returns a multiple locations", async () => {
    expect(
      await axios
        .get("/search", { params: { query: multipleSearch } })
        .then((response) => response.data)
    ).toEqual({ data: multipleResults });
  });
});

describe("Get forecast", () => {
  it("returns a location forecast", async () => {
    expect(
      await axios.get(`/api/location/${woeid}`).then((response) => response.data)
    ).toEqual({ data: singleResult });
  });
});
