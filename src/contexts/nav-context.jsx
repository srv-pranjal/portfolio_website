import { createContext, useContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </NavContext.Provider>
  );
};

const useNav = () => useContext(NavContext);

export { NavProvider, useNav };
