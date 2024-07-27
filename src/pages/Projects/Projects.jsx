import { projectData } from "../../constants/ProjectData";
import { motion } from "framer-motion";
import "./Projects.css";
import { ProjectCard, SecondaryNavbar } from "../../Components";

export const Projects = () => {
  return (
    <>
      <SecondaryNavbar />
      <section className="projects section">
        <motion.h4
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="section-title"
        >
          Projects
        </motion.h4>
        <div className="projects-container">
          <div className="projects-column">
            {projectData.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
