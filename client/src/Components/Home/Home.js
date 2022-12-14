import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import MainLogo from "../MainLogo";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["App-welcome"]}>
      <div className={styles["intro"]}>
        <section>
          <h1 className="decorative font-large">Anna Astle</h1>
          <span>WEB DEVELOPER</span>
        </section>
        <MainLogo className="App-logo" />
      </div>
      <ul className={styles["bottomNav"]}>
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
        </li>
      </ul>
    </div>
  );
};

export default Home;
