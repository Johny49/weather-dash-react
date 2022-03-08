import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const UnitsButton = () => {
  //  retrieve preferred units from localStorage if exists
  const [unitType, setUnitType] = useState(
    localStorage.getItem("saved-units") || "imperial"
  );

  const setUnitsHandler = () => {
    if (unitType === "imperial") {
      setUnitType("metric");
      // save unit to localStorage
      localStorage.setItem("saved-units", "metric");
    } else {
      setUnitType("imperial");
      // save unit to localStorage
      localStorage.setItem("saved-units", "imperial");
    }
    console.log(unitType);
  };

  return (
    <Button variant="primary" onClick={setUnitsHandler}>
      {unitType === "imperial" ? "°F" : "°C"}
    </Button>
  );
};

export default UnitsButton;
