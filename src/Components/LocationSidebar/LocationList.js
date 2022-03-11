import { useEffect, useState } from "react";
// Bootstrap Components
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
// Components
import ListGroup from "react-bootstrap/ListGroup";

const LocationList = (props) => {
  const { width } = useViewport();
  const breakpoint = 768;

  // reverse list of saved locations to display newest first
  const mapList = props.savedLocs.reverse();

  const handleSelectLocation = (e) => {
    props.onLocationSubmit(e);
  };

  // Mobile
  if (width < breakpoint) {
    return (
      <>
        <DropdownButton
          id="saved-location-dropdown"
          className="col-12 mb-2"
          variant="secondary"
          title="Show Saved Locations"
          onSelect={handleSelectLocation}
        >
          {mapList.map((loc) => (
            <Dropdown.Item
              key={loc}
              eventKey={loc}
              value={loc}
              tag="button"
              type="button"
            >
              {loc}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </>
    );
  } else {
    // Desktop
    return (
      <ListGroup className="my-5">
        {mapList.map((loc) => (
          <ListGroup.Item
            key={loc}
            className="btn bg-secondary text-light my-1"
          >
            {loc}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
};

// get width of window to control how list is displayed
const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};

export default LocationList;
