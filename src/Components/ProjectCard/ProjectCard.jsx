import { motion } from "framer-motion";

export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.75 }}
      className="project"
    >
      <h2 className="project-title">{project.title}</h2>
      <p className="project-desc">{project.description}</p>
      <div className="view-project">
        <h4 onClick={() => window.open(project.link)}>View Project</h4>
        <h4 onClick={() => window.open(project.sourceCode)}>View Code</h4>
      </div>
    </motion.div>
  );
};