import { useState } from "react";
// Boostrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// Utils
import toTitleCase from "../../Utils/ToTitleCase";

const LocationSearchForm = (props) => {
  const [enteredLocation, setEnteredLocation] = useState("");

  // update stored location from input
  const locationChangeHandler = (e) => {
    setEnteredLocation(e.target.value);
  };

  // validate, format, and pass location for query
  const submitHandler = (e) => {
    e.preventDefault();

    let formatted = toTitleCase(enteredLocation.trim());

    if (formatted !== "") {
      props.onLocationSubmit(formatted);
      setEnteredLocation("");
    } else {
      alert("Please Enter a Location");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Control
        className="my-3"
        type="text"
        value={enteredLocation}
        placeholder="Location"
        onChange={locationChangeHandler}
      />
      <Button className="col-8 my-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LocationSearchForm;
