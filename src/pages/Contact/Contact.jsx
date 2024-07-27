import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import "./Contact.css";
import { ContactForm, SecondaryNavbar, SocialLinks } from "../../Components";

export const Contact = () => {
  return (
    <>
      <SecondaryNavbar />
      <section className="contact section">
        <motion.h4
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="section-title"
        >
          Get In Touch
        </motion.h4>
        <div className="contact-container">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.75 }}
            className="contact-left "
          >
            <h1>Let's Talk</h1>
            <div className="contact-details">
              <div className="contact-detail">
                <BsEnvelope />
                <p>pranjal.srv1@gmail.com</p>
              </div>
              <div className="contact-detail">
                <BsGeoAlt />
                <p>Hyderabad, Telangana</p>
              </div>
              <div className="contact-detail">
                <BsTelephone />
                <p>+91 9454501112</p>
              </div>
              <div className="contact-detail">
                <IoShareSocialOutline />
                <SocialLinks />
              </div>
            </div>
          </motion.div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};
