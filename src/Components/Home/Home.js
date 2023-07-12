import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import MainLogo from "../MainLogo";

import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import AnnaAstleImg from "../../assets/images/annaastle_halfImg.jpg";
import styles from "./Home.module.css";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#f1f1f1" }}>
      <div className={styles.homeContainer}>
        <div className={styles.colLeft}>
          <img src={AnnaAstleImg} alt="Web Developer Anna Astle" />
        </div>
        <div className={styles.colRight}>
          <About />
          <Technologies />
        </div>
        {/* <div className={styles["intro"]}>
        <section>
          <h1 className="decorative font-large">Anna Astle</h1>
          <span>WEB DEVELOPER</span>
        </section>
        <MainLogo className="App-logo" />
      </div> */}
        {/* <ul className={styles["bottomNav"]}>
        <li onClick={() => (window.location.href = "#projects")}>
          <ArrowDownwardIcon className={styles["scrollIcon"]} />
        </li>
        <li className={styles["links"]}>
          <a
            href="https://www.linkedin.com/in/annaastle-webdeveloper"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon color="action" />
          </a>
          <a
            href="https://github.com/ast19004"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon color="action" />
          </a>
        </li> */}
        {/* </ul> */}
      </div>
    </Box>
  );
};

export default Home;
