import "./About.css";
import { Experience, SecondaryNavbar, Technologies } from "../../Components";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <SecondaryNavbar />
      <section className="section about">
        <h4 className="section-title">About Me</h4>
        <div className="about-me">
          <div className="img-container fade-in">
            <img src="./././hero.jpg" alt="Pranjal Srivastava" loading="lazy" />
          </div>
          <div className="basic-information fade-out">
            <p>
              As a full-stack developer with 2+ years of experience, I develop
              web applications using ReactJS, Java, Spring Boot, Hibernate, and
              MySQL. I'm passionate about creating immersive user interfaces and
              architecting end-to-end solutions that deliver seamless user
              experiences. I have a passion for learning and implementing new
              technologies. I am a quick learner and a team player who is always
              ready to take on new challenges. I am always looking to improve my
              skills and learn new technologies. I am currently looking for
              opportunities to work on exciting projects and grow as a
              developer.
            </p>
          </div>
        </div>
        <Technologies />
        <Experience />
      </section>
    </>
  );
};
