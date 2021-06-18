/* eslint-disable no-console */

import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
      setErrorMessage();
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage(
          "Currently only UK towns/cities. Is your spelling correct?"
        );
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage(
          "Oops, server problems on our end, sorry! Try again later. :)"
        );
        console.error("Server error", error);
      }
    });
};

export default getForecast;
