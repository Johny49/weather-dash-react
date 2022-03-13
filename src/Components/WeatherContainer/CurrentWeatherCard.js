// Components
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
// Utils
import toTitleCase from "../../Utils/ToTitleCase";
import roundNumber from "../../Utils/RoundNumber";
import setUVIColor from "../../Utils/UvIndexColor";
import degreesToDirection from "../../Utils/WindDirectionConverter";
import { configTime } from "../../Utils/DateConvert";
// Image
import placeholder from "../../Assets/placeholder.png";

const CurrentWeatherCard = (props) => {
  let current = props.weatherData.current;
  let timezoneOffset = props.weatherData.timezone_offset;
  let weatherIcon = placeholder;
  let iconAlt = "placeholder for current weather icon";

  // replace placeholder img after weather data returned
  if (current.weather[0].icon !== "") {
    weatherIcon = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
    iconAlt = current.weather[0].description;
  }

  return (
    <Card className="col-12 text-light bg-primary mx-1">
      <Card.Header className="row justify-content-center">
        <h2 className="col-5">{props.location}</h2>
        <div>
          <Image width="116" height="116" src={weatherIcon} alt={iconAlt} />
        </div>
      </Card.Header>
      <Card.Body>
        <h3>{toTitleCase(current.weather[0].description)}</h3>
        <div className="row justify-content-md-around mx-3">
          <div className="col-sm-12 col-md-5 m-1">
            <h3 className="row">Temp: {roundNumber(current.temp)}</h3>
            <h3 className="row">
              Feels Like: {roundNumber(current.feels_like)}
            </h3>
            <h3 className="row">
              Wind: {degreesToDirection(current.wind_deg)}{" "}
              {roundNumber(current.wind_speed)}
            </h3>
            <h3 className={`row p-2 rounded-1 ${setUVIColor(current.uvi)}`}>
              UV: {current.uvi}
            </h3>
          </div>
          <div className="col-sm-12 col-md-5 m-1">
            <h3 className="row">
              Sunrise: {configTime(current.sunrise, timezoneOffset)}
            </h3>
            <h3 className="row">
              Sunset: {configTime(current.sunset, timezoneOffset)}
            </h3>
            <h3 className="row">Humidity: {current.humidity}</h3>
            <h3 className="row">Dew Point: {roundNumber(current.dew_point)}</h3>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CurrentWeatherCard;
