import MainNav from "./MainNav";

import styles from "./Header.module.css";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <header className={styles.header}>
      <MainNav />
      <div className={styles.intro}>
        <h1>Anna Astle</h1>
        <span>WEB DEVELOPER</span>
      </div>
      <div className={styles.bottomNav}>
        <ArrowDownwardIcon className={styles.scrollIcon} />
        <div className={styles.links}>
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
