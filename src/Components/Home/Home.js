import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import logo from '../../assets/images/logo.png';
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
      <Box className={styles.shapes_container}>
        <Box className={styles.shapes_container__left} >
          <About className={styles.homebox_about} />
          {/* <Box className={ styles["shapes_container__left--image"]} /> */}
        </Box>
        <Box className={styles.shapes_container__right}/>
          {/* <img src={logo} alt="logo" className={styles.logo } /> */}
      </Box>
      <Technologies className={styles.homebox_tech} />
    </Box>
  );
};

export default Home;
