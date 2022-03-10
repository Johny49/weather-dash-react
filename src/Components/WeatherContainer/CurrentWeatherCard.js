import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import configDate from "../../Utils/DateConvert";

const CurrentWeatherCard = (props) => {
  let current = props.weatherData.current;
  let displayDate = configDate(current.dt);
  let weatherIcon = ""; //TODO: add placeholder img
  let iconAlt = "";

  if (current.weather[0].icon !== "") {
    weatherIcon = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
    iconAlt = current.weather[0].description;
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>{props.location}</Card.Title>
        <Card.Title>{displayDate}</Card.Title>
        <Image fluid src={weatherIcon} alt={iconAlt} />
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Temp: {Math.round(current.temp)}</Card.Subtitle>
        <Card.Subtitle>Feels Like: {current.feelsLike}</Card.Subtitle>
        <Card.Subtitle>Wind: {current.wind_speed}</Card.Subtitle>
        <Card.Subtitle>Humidity: {current.humidity}</Card.Subtitle>
        <Card.Subtitle>UV: {current.uvi}</Card.Subtitle>
        <Card.Text>{current.weather[0].description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CurrentWeatherCard;
