import styles from "./About.module.css";

import MainLogo from "../MainLogo";

import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import TerrainIcon from "@mui/icons-material/Terrain";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

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
      </ul>
      <p className={styles["about-description"]}>
        Hi, I'm{" "}
        <span className={`decorative ${styles["about-webDev"]}`}>
          Anna Astle
        </span>
        , a web developer who specializes in <b>React and Node.js</b>. I love
        building dynamic and intuitive web applications that delight users.
      </p>
    </div>
  );
};

export default About;
