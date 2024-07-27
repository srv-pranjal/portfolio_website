import { NavLink } from "react-router-dom";
import { menus } from "../../constants/Menus";
import { useNav } from "../../contexts/nav-context";
import "./Navbar.css";

export const Navbar = () => {
  const { setShowNav } = useNav();

  return (
    <nav className="navbar">
      {menus.map(({ link, name }) => (
        <NavLink
          key={name}
          to={link}
          className="link-primary"
          onClick={() => setShowNav(false)}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};
