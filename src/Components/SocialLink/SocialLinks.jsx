import { socialLinksData } from "../../constants/SocialLinksData";
import "./SocialLinks.css";

export const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinksData.map((item) => (
        <a
          key={item.clname}
          className={item.clname}
          onClick={() => window.open(item.link)}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
};