import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar } from "../../Components";

export const SecondaryNavbar = () => {
  return (
    <div className="secondary-nav-bar">
      <Link to="/">
        <span>Pranjal Srivastava</span>
      </Link>
      <Navbar />
      
    </div>
  );
};
