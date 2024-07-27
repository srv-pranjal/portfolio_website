import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import "./HomePage.css";
import { Navbar, SocialLinks } from "../../Components";

export const HomePage = () => {
  return (
    <motion.header
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.75 }}
      className="home"
    >
      <h1 className="home-title">Pranjal Srivastava</h1>
      <h3 className="home-content">
        I'm a{" "}
        <span className="home-profession">
          <ReactTyped
            strings={["Full Stack Developer", "Technology Enthusiast"]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={1800}
            loop={true}
          />
        </span>
      </h3>
      <Navbar />
      <SocialLinks />
    </motion.header>
  );
};
