import emailjs from "emailjs-com";
import { showToast } from "./ShowToast";

export const sendMail = async (
  { name, email, subject, message },
  setShowLoader
) => {
  const templateParams = {
    from_name: name,
    email: email,
    subject: subject,
    message: message,
  };
  try {
    setShowLoader(true);
    await emailjs.send(
      process.env.REACT_APP_MAIL_SERVICE_ID,
      process.env.REACT_APP_MAIL_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_MAIL_USER_ID
    );
    showToast("success", "Message sent successfully");
  } catch (error) {
    showToast("error", "Falied to send message ");
  } finally {
    setShowLoader(false);
  }
};
