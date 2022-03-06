import CardGroup from "react-bootstrap/CardGroup";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";

const WeatherContainer = () => {
  return (
    <div className="container-md p-2">
      <CurrentWeatherCard className="flex-row" />
      <CardGroup className="flex-row p-2">
        <ForecastCard className="p-2 m-2" />
        <ForecastCard p-2 className="p-2 m-1" />
        <ForecastCard p-2 className="p-2 m-1" />
        <ForecastCard p-2 className="p-2 m-1" />
        <ForecastCard p-2 className="p-2 m-1" />
      </CardGroup>
    </div>
  );
};

export default WeatherContainer;
