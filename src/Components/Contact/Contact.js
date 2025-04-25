import styles from "./Contact.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Box} from "@mui/material";

const Contact = (props) => {
  return (
    <Box component="footer" sx={props.sx} className={ props.className}>
      <ul className={styles.contact}>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/annaastle-webdeveloper"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon className={ styles.icon} fontSize="large"/>
          </a>
        </li>

        <li>
          {" "}
          <a
            href="https://github.com/ast19004"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon fontSize="large" className={ styles.icon} />
          </a>
        </li>
        <li>
          <a
            className={styles["contact-email"]}
            href="mailto:annaastle5@gmail.com"
          >
            <EmailIcon className={ styles.icon} fontSize="large" />
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default Contact;
