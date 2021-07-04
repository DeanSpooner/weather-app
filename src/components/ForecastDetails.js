import React, { useEffect } from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastDetails.css";
import moment from "moment";
import clouds from "../images/cloud.png";
import sun from "../images/sun.png";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind, description } = forecast;

  let background;

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    if (description.includes(`Rain`)) {
      document.body.style.backgroundImage = `linear-gradient(
      330deg,
      #315b73 0%,
      #247aab 25%,
      #547bf0 50%,
      #5c6b96 75%,
      #8a9cd1 100%)`;
    } else if (description.includes(`Cloud`) || description.includes(`Snow`)) {
      document.body.style.backgroundImage = `linear-gradient(
      330deg,
      #2e2e2e 0%,
      #949381 25%,
      #707070 50%,
      #9c9b95 75%,
      #525252 100%)`;
    } else if (description.includes(`Storm`) || description.includes(`Haz`)) {
      document.body.style.backgroundImage = `linear-gradient(
      330deg,
      #4c4f54 0%,
      #4e5157 25%,
      #424345 50%,
      #2e2e2e 75%,
      #4a4943 100%)`;
    } else {
      document.body.style.backgroundImage = `linear-gradient(
        330deg,
        #b2e1fa 0%,
        #ded11b 25%,
        #58b6e9 50%,
        #0e8dd2 75%,
        #2073d8 100%)`;
    }
  }, [description]);

  if (
    description.includes("Cloud") ||
    description.includes("Rain") ||
    description.includes("Storm") ||
    description.includes("Snow") ||
    description.includes("Haz")
  ) {
    background = clouds;
  } else {
    background = sun;
  }
  return (
    <div
      className="forecast-details"
      data-testid="forecast-details"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="forecast-details__date">
        {moment(date).format("dddd Do MMMM yyyy")}
      </div>
      <div className="forecast-details__temperature">
        {`Max temp: ${temperature.max}`}&deg;C
      </div>
      <div className="forecast-details__temperature">
        {`Min temp: ${temperature.min}`}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__wind">
        <WeatherIcon name="owm" iconId="957" />: {wind.speed}mph{" "}
        {wind.direction.toUpperCase()}
      </div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    description: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
