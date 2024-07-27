import { motion } from "framer-motion";
export const BlogCard = ({ blog }) => {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.75 }}
      className="blog"
    >
      <h2 className="blog-title">{blog.title}</h2>
      <p className="blog-desc">{blog.description}</p>
      <div className="view-blog">
        <h4 onClick={() => window.open(blog.link)}>Read Now</h4>
      </div>
    </motion.div>
  );
};