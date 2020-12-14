import axios from "axios";

const baseURL = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/",
});

export const locationSearch = async (params) => {
  return baseURL
    .get("search/", { params })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const getForecast = async (woeid) => {
  return baseURL
    .get(`/api/location/${woeid}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
