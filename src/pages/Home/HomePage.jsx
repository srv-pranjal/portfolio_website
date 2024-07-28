import { ReactTyped } from "react-typed";
import "./HomePage.css";
import { Navbar, SocialLinks } from "../../Components";

export const HomePage = () => {
  return (
    <header className="home fade-top">
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
    </header>
  );
};
