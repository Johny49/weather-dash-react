import ListGroup from "react-bootstrap/ListGroup";

const LocationList = (props) => {
  return (
    <ListGroup className="my-5">
      {props.savedLocs.map((loc) => (
        <ListGroup.Item key={loc}>{loc}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default LocationList;
