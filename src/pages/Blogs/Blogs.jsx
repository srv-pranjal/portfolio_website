import { blogs } from "../../constants/BlogData";
import { motion } from "framer-motion";
import "./Blogs.css";
import { BlogCard, SecondaryNavbar } from "../../Components";

export const Blogs = () => {
  return (
    <>
      <SecondaryNavbar />
      <section className="section blogs">
        <motion.h4
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="section-title"
        >
          Blogs
        </motion.h4>
        <div className="blogs-container">
          <div className="blogs-column left-block">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
