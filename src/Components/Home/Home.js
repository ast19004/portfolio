import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import AnnaAstleImg from "../../assets/images/annaastle_halfImg.jpg";
import styles from "./Home.module.css";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        minHeight: "100vh",
        backgroundColor: "#f1f1f1",
      }}
    >
      <div className={styles.homeContainer}>
        <div className={styles.colLeft}>
          <img src={AnnaAstleImg} alt="Web Developer Anna Astle" />
        </div>
        <div className={styles.colRight}>
          <About />
          <Technologies />
        </div>
      </div>
    </Box>
  );
};

export default Home;
