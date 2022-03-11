// Components
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
// Utils
import roundNumber from "../../Utils/RoundNumber";
import { configDate } from "../../Utils/DateConvert";
// Image
import placeholder from "../../Assets/placeholder.png";

const ForecastCard = (props) => {
  let forecast = props.forecast;
  let displayDate = configDate(forecast.dt);
  let weatherIcon = placeholder;
  let iconAlt = "";

  if (forecast.weather[0].icon !== "") {
    weatherIcon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
    iconAlt = forecast.weather[0].description;
  }

  return (
    <Card
      border="primary"
      className="col-sm-6 col-md-4 col-lg-2 text-light bg-primary m-1 card border-primary"
    >
      <Card.Header>
        <Card.Title>{displayDate}</Card.Title>
        <Image fluid src={weatherIcon} alt={iconAlt} />
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Low: {roundNumber(forecast.temp.min)}</Card.Subtitle>
        <Card.Subtitle>High: {roundNumber(forecast.temp.max)}</Card.Subtitle>
        <Card.Subtitle>Wind: {forecast.wind_speed}</Card.Subtitle>
        <Card.Subtitle></Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ForecastCard;
