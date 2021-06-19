import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastDetails.css";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;

  return (
    <div className="forecast-details" data-testid="forecast-details">
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
