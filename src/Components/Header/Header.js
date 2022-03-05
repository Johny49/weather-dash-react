import UnitsButton from "./UnitsButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="fixed-top d-flex align-items-center justify-content-around">
      <h2 className="display-2">Weather Dashboard</h2>
      <UnitsButton />
    </header>
  );
};

export default Header;
