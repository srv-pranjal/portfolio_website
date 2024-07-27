import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../../constants/TechData";
import { Tooltip } from "../../Components";
import { iconVariants } from "../../utils/IconVariants";
import "./Technologies.css";

export const Technologies = () => {
  return (
    <div className="tech">
      <h4 className="section-title">Technologies</h4>
      <div className="tech-container">
        {technologies.map(({ id, text, Icon, clName }, index) => (
          <Tooltip key={id} text={text}>
            <motion.div
              variants={iconVariants(index % 2 === 0 ? 3 : -3)}
              initial="initial"
              animate="animate"
              className="tech-box"
            >
              <Icon className={clName} />
            </motion.div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
