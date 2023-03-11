import styles from "./About.module.css";

import MainLogo from "../MainLogo";

import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import TerrainIcon from "@mui/icons-material/Terrain";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <div className={styles.about}>
      <span className={styles["about-webDev"]}>
        <MainLogo /> Web Developer
      </span>
      <p>Who...</p>
      <ul>
        <li>
          <TerrainIcon />
          &nbsp;Enjoys Hiking
        </li>
        <li>
          Loves Biking at the pump track&nbsp;
          <DirectionsBikeIcon />
        </li>
        <li>
          <MusicNoteIcon />
          &nbsp;Sings Loudly and Proudy alone in a room
        </li>
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
          <a
            href="https://github.com/ast19004"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon
              fontSize="large"
              sx={{ color: "red", opacity: ".75" }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
