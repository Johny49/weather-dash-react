import { useState } from "react";
// Boostrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// Utils
import toTitleCase from "../../Utils/ToTitleCase";

const LocationSearchForm = (props) => {
  const [enteredLocation, setEnteredLocation] = useState("");

  // validate and set location
  const locationChangeHandler = (e) => {
    if (e.target.value.trim() !== "") {
      let formatted = toTitleCase(e.target.value.trim());
      setEnteredLocation(formatted);
    }
  };

  // pass location for query
  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredLocation !== "") {
      props.onLocationSubmit(enteredLocation);
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
