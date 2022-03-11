import ListGroup from "react-bootstrap/ListGroup";

const LocationList = (props) => {
  const mapList = props.savedLocs.reverse();

  return (
    <ListGroup className="my-5">
      {mapList.map((loc) => (
        <ListGroup.Item key={loc} className="btn bg-secondary text-light my-1">
          {loc}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default LocationList;
