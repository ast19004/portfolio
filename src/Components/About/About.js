import { Box } from "@mui/material";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <div className={`${styles.about} ${props.className}`}>
      <span style={{ color: "#284967", opacity: '0.5',fontSize: "1.1rem" }}>
        WEB DEVELOPER
      </span>
      <section>
        <Box component="h1" className={`decorative font-large ${styles["about_text"]}`}>
          <Box className={ styles.about_title} component="span" sx={{fontSize: '1.3rem', display: 'block', marginBottom: '-1rem'}}>Hi, I'm</Box>
          Anna Astle
        </Box>
        <p className={styles.about_description}>
          I specialize in{" "}
          <b style={{ color: "#366b7c" }}>React and Node.js</b> and love to build
          dynamic and intuitive web applications that delight users.
        </p>
      </section>
    </div>
  );
};

export default About;
