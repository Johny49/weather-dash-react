import CardGroup from "react-bootstrap/CardGroup";
// Components
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";

const WeatherContainer = (props) => {
  let forecasts = props.weatherData.daily;

  return (
    <div className="col-sm-12 col-md-10">
      <h2>Current Conditions:</h2>
      <CurrentWeatherCard
        weatherData={props.weatherData}
        location={props.location}
      />
      <h2>Forecast:</h2>
      <CardGroup className="row flex-row justify-content-center p-2">
        {forecasts.map((forecast) => (
          <ForecastCard key={forecast.dt} forecast={forecast} />
        ))}
      </CardGroup>
    </div>
  );
};

export default WeatherContainer;
