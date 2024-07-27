import { useNav } from "../../contexts/nav-context";
import { navPosition } from "../../constants/Menus";

export const MenuIcon = () => {
  const { showNav, setShowNav } = useNav();
  return (
    <div className="bars" style={{ left: navPosition }}>
      <i
        className={`fa ${showNav ? "fa-times" : "fa-bars"}`}
        onClick={() => setShowNav((showNav) => !showNav)}
      ></i>
    </div>
  );
};
