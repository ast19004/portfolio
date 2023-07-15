import styles from "./Contact.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Contact = () => {
  const currentDate = new Date();
  return (
    <footer>
      <ul className={styles.contact}>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/annaastle-webdeveloper"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" sx={{ color: "#222" }} />
          </a>
        </li>

        <li>
          {" "}
          <a
            href="https://github.com/ast19004"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon fontSize="large" sx={{ color: "#222" }} />
          </a>
        </li>
        <li>
          <a
            className={styles["contact-email"]}
            href="mailto:annaastle5@gmail.com"
          >
            <EmailIcon fontSize="large" sx={{ color: "#222" }} />
          </a>
        </li>
      </ul>
      <a
        className={styles.viewCode}
        href="https://github.com/ast19004/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        <b>Portfolio Code</b>
        <Typography
          component="span"
          fontSize="0.82rem"
          color="#777"
          sx={{ display: "grid" }}
        >
          Anna Astle {currentDate.getFullYear()}
        </Typography>
      </a>
    </footer>
  );
};

export default Contact;
