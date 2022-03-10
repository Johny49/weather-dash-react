import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LocationSearchForm = (props) => {
  const [enteredLocation, setEnteredLocation] = useState("");

  const locationChangeHandler = (e) => {
    if (e.target.value.trim() !== "") {
      setEnteredLocation(e.target.value.trim());
    } else {
      //TODO: handle names with spaces and return feedback whenv val === ""
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredLocation !== "") {
      props.onLocationSubmit(enteredLocation);
    } else {
      alert("Please Enter a Location"); //TODO: rework to display without alert
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Control
        className="my-3"
        type="text"
        // value={enteredLocation}
        placeholder="Location"
        onChange={locationChangeHandler}
      />
      <Button className="my-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LocationSearchForm;
