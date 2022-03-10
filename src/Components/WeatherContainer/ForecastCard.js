import { useState } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const ForecastCard = (props) => {
  // const weatherData = props.weatherData;
  const [currentWeather, setCurrentWeather] = useState({
    loc: "",
    temp: "",
    wind: "",
    humidity: "",
    uvi: "",
    icon_info: "", //todo add placeholder?
  });
  //   const currentWeather = {
  //     loc: props.location,
  //     temp: Math.round(props.weatherData.current.temp),
  //     wind: props.weatherData.current.wind_speed,
  //     humidity: props.weatherData.current.humidity,
  //     uvi: props.weatherData.current.uvi,
  //     icon_info: props.weatherData.current.weather,
  //   };
  return (
    <Card border="primary" className="flex-col">
      <Card.Header>
        <Card.Title>Date</Card.Title>
        <Image
          fluid
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt={"description of icon"}
        />
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Low:</Card.Subtitle>
        <Card.Subtitle>High:</Card.Subtitle>
        <Card.Subtitle>Wind: </Card.Subtitle>
        <Card.Subtitle></Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ForecastCard;
