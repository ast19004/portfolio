import MainLogo from "../MainLogo";
import styles from "./Contact.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <ul className={styles.contact}>
      <li className="decorative font-medium">Anna Astle</li>
      <li className={styles["links"]}>
        <a
          href="https://www.linkedin.com/in/annaastle-webdeveloper"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon
            fontSize="large"
            sx={{ color: "red", opacity: "0.75" }}
          />
        </a>
        <a href="https://github.com/ast19004" rel="noreferrer" target="_blank">
          <GitHubIcon fontSize="large" sx={{ color: "red", opacity: ".75" }} />
        </a>
      </li>
      <li>annaastle5@gmail.com</li>
      <li>(323) 629 6604</li>
      <li>
        <MainLogo className={`App-logo ${styles["contact-logo"]}`} />
      </li>
    </ul>
  );
};

export default Contact;
