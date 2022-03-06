import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const CurrentWeatherCard = (props) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>City Date</Card.Title>
        <Image
          fluid
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt={"description of icon"}
        />
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Temp:</Card.Subtitle>
        <Card.Subtitle>Low: </Card.Subtitle>
        <Card.Subtitle>High: </Card.Subtitle>
        <Card.Subtitle>Wind: </Card.Subtitle>
        <Card.Subtitle>Humidity: </Card.Subtitle>
        <Card.Subtitle>UV: </Card.Subtitle>
        <Card.Text>Details?</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CurrentWeatherCard;
