import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import styles from "./Home.module.css";
import { Box } from "@mui/material";
import ScrollDownIcon from "@mui/icons-material/South";

const Home = () => {
  const [inViewStyle, setInViewStyle] = useState("");
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setInViewStyle("moveDownFadeOut");
    }
    return () => setInViewStyle("");
  }, [inView]);

  return (
    <Box ref={ref} className={styles.home}>
      <Box
        className={inViewStyle}
        component="span"
        sx={{ opacity: 0, position: "absolute", top: "85%", left: "1%" }}
      >
        <ScrollDownIcon fontSize="large" sx={{ color: "#0c77ff" }} />
      </Box>
      <div className={styles.homebox}>
        <div className={styles["homebox_col--left"]}>
          {/* <img src={AnnaAstleImg} alt="Web Developer Anna Astle" /> */}
        </div>
        {/* <div className={styles.colRight}> */}
        <About className={styles.homebox_about} />
        <Technologies className={styles.homebox_tech} />
        {/* </div> */}
      </div>
    </Box>
  );
};

export default Home;
