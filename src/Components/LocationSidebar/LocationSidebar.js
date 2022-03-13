import { useEffect, useState } from "react";
// Components
import LocationList from "./LocationList";
import LocationSearchForm from "./LocationSearchForm";

const LocationSidebar = (props) => {
  const [savedLocations, setSavedLocations] = useState(
    JSON.parse(localStorage.getItem("saved-locations")) || []
  );

  // save locations to localStorage on update
  useEffect(() => {
    localStorage.setItem("saved-locations", JSON.stringify(savedLocations));
  }, [savedLocations]);

  const updateSavedLocations = (loc) => {
    // check for duplicate and add location if unique; if exists already, move to top of list
    if (savedLocations.includes(loc)) {
      const index = savedLocations.indexOf(loc);
      savedLocations.splice(index, 1);
      savedLocations.unshift(loc);
    } else {
      // limit saved locations to 10
      if (savedLocations.length >= 10) {
        savedLocations.pop();
      }
      setSavedLocations((prevSavedLocations) => {
        return [loc, ...savedLocations];
      });
    }
  };

  // submit query using saved location
  const onLocationSubmitHandler = (enteredLocation) => {
    props.updateLocation(enteredLocation);
    updateSavedLocations(enteredLocation);
  };

  return (
    <>
      <aside className="col-sm-12 col-lg-2 p-3 bg-light">
        <LocationSearchForm onLocationSubmit={onLocationSubmitHandler} />
        <hr />
        <LocationList
          savedLocs={savedLocations}
          onLocationSubmit={onLocationSubmitHandler}
        />
      </aside>
    </>
  );
};

export default LocationSidebar;
