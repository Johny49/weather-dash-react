import Card from "react-bootstrap/Card";

const ForecastCard = (props) => {
  return (
    <Card border="primary" className="flex-col">
      <Card.Header>
        <Card.Title>Date</Card.Title>
        <Card.Img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt={"description of icon"}
        ></Card.Img>
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
