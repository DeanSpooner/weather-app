import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastDetails.css";
import moment from "moment";
import clouds from "../images/cloud.png";
import sun from "../images/sun.png";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind, description } = forecast;

  let background;

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
