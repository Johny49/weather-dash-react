import LocationSearchForm from "./LocationSearchForm";
import "./LocationSidebar.css";

const LocationSidebar = (props) => {
  const onLocationSubmitHandler = (enteredLocation) => {
    props.updateLocation(enteredLocation);
  };

  return (
    <>
      <aside className="col-sm-12 col-lg-2 p-3 bg-light">
        <LocationSearchForm onLocationSubmit={onLocationSubmitHandler} />
        {/* TODO: Replace with mapped list of saved locations */}
        <ul className="my-5">
          <li className="my-2">Test Location</li>
          <li className="my-2">Test Location</li>
          <li className="my-2">Test Location</li>
          <li className="my-2">Test Location</li>
        </ul>
      </aside>
    </>
  );
};

export default LocationSidebar;
