import { useState } from "react";
import LocationList from "./LocationList";
import LocationSearchForm from "./LocationSearchForm";
import "./LocationSidebar.css";

const LocationSidebar = (props) => {
  const [savedLocations, setSavedLocations] = useState(
    JSON.parse(localStorage.getItem("saved-locations")) || []
  );

  const updateSavedLocations = (loc) => {
    // check for duplicate and add location if unique; if exists already, move to top of list
    if (savedLocations.includes(loc)) {
      const index = savedLocations.indexOf(loc);
      savedLocations.unshift(savedLocations.splice(index, 1));
    } else {
      savedLocations.unshift(loc);
    }
    // save to localStorage
    localStorage.setItem("saved-locations", JSON.stringify(savedLocations));
  };

  const onLocationSubmitHandler = (enteredLocation) => {
    props.updateLocation(enteredLocation);
    updateSavedLocations(enteredLocation);
  };

  return (
    <>
      <aside className="col-sm-12 col-lg-2 p-3 bg-light">
        <LocationSearchForm onLocationSubmit={onLocationSubmitHandler} />
        {/* TODO: Replace with mapped list of saved locations */}
        <LocationList savedLocs={savedLocations} />
      </aside>
    </>
  );
};

export default LocationSidebar;
