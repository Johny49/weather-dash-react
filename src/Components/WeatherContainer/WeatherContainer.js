import CardGroup from "react-bootstrap/CardGroup";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";

const WeatherContainer = (props) => {
  return (
    <div className="col-sm-12 col-md-10">
      <h2>Current Conditions:</h2>
      <CurrentWeatherCard
        className="flex-row"
        weatherData={props.weatherData}
        location={props.location}
      />
      <h2>Forecast:</h2>
      <CardGroup className="flex-row p-2">
        <ForecastCard className="p-2 m-2" />
        <ForecastCard p-2 className="p-2 m-1" weather={props.weatherData} />
        <ForecastCard p-2 className="p-2 m-1" weather={props.weatherData} />
        <ForecastCard p-2 className="p-2 m-1" weather={props.weatherData} />
        <ForecastCard p-2 className="p-2 m-1" weather={props.weatherData} />
      </CardGroup>
    </div>
  );
};

export default WeatherContainer;
