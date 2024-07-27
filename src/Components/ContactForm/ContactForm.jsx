import { useState } from "react";
import { motion } from "framer-motion";
import { useLoader } from "../../contexts/loader-context";
import { sendMail } from "../../utils/MailUtility";

export const ContactForm = () => {
  const { setShowLoader } = useLoader();
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [userDetails, setUserDetails] = useState(initialState);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    sendMail(userDetails, setShowLoader);
    setUserDetails(initialState);
  };
  return (
    <motion.form
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.75 }}
      className="contact-right"
      onSubmit={formSubmitHandler}
    >
      <label htmlFor="">Your Name</label>
      <input
        type="text"
        className="form-text"
        name="name"
        value={userDetails.name}
        onChange={(e) =>
          setUserDetails({ ...userDetails, name: e.target.value })
        }
        placeholder="Enter your name"
        required
      />
      <label htmlFor="">Your Email</label>
      <input
        type="email"
        className="form-text"
        name="email"
        value={userDetails.email}
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
        placeholder="Enter your email"
        required
      />
      <label htmlFor="">Subject</label>
      <input
        type="text"
        className="form-text"
        name="subject"
        value={userDetails.subject}
        onChange={(e) =>
          setUserDetails({ ...userDetails, subject: e.target.value })
        }
        placeholder="Subject"
        required
      />
      <label htmlFor="">Write your message here</label>
      <textarea
        className="form-text"
        name="message"
        value={userDetails.message}
        onChange={(e) =>
          setUserDetails({ ...userDetails, message: e.target.value })
        }
        rows="8"
        placeholder="Enter your message"
        required
      />
      <input className="submit" type="submit" value="Submit" />
    </motion.form>
  );
};
