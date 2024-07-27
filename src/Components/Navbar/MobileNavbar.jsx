import { useNav } from "../../contexts/nav-context";
import { motion } from "framer-motion";
import { Navbar } from "../../Components";
import "./Navbar.css";

export const MobileNavbar = () => {
  const { showNav } = useNav();
  return (
    <motion.section
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.35 }}
      className={`section mobile-nav ${showNav ? "" : "none"}`}
    >
      <Navbar />
    </motion.section>
  );
};
