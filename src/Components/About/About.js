import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <span style={{ color: "#C6C5C5", fontSize: "1.1rem" }}>
        WEB DEVELOPER
      </span>
      <section>
        <h1 className={`decorative font-large ${styles["about-webDev"]}`}>
          Hi, I'm <br />
          Anna Astle
        </h1>
        <span>
          A web developer who specializes in{" "}
          <b style={{ color: "#0c77ff" }}>React and Node.js</b>. I love building
          dynamic and intuitive web applications that delight users.
        </span>
      </section>
    </div>
  );
};

export default About;
