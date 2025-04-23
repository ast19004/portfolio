import { Box } from "@mui/material";
import styles from "./About.module.css";

import AnnaImg from '../../assets/images/annaastle.png';

const About = (props) => {
  return (
    <div className={`${styles.about} ${props.className}`}>
      {/* <section>
        <Box component="h1" className={`decorative font-large ${styles["about_text"]}`}>
          <Box className={ styles.about_title} component="span" sx={{fontSize: '1.3rem', display: 'block', marginBottom: '-1rem'}}>Hi, I'm</Box>
          Anna Astle
        </Box>
        <p className={styles.about_description}>
          I specialize in the{" "}
          <b style={{ color: "rgb(237, 109, 44)" }}>Javascript ecosystem</b> and love to build
          dynamic and intuitive web applications that delight users.
        </p>
      </section> */}
      <img src={AnnaImg} alt="Anna Astle" style={{
        position: 'absolute',
        right: '0',
        bottom: '2%',
        maxWidth: '100%',
        maxHeight: '100%',
        height: 'auto',
        opacity: '0.6',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
      }} />

    </div>
  );
};

export default About;
