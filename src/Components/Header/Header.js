import UnitsButton from "./UnitsButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-sm-around justify-content-around py-3 mb-4 border-bottom bg-light text-primary">
      <h2 className="display-2">Weather Dashboard</h2>
      <UnitsButton />
    </header>
  );
};

export default Header;
