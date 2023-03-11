import styles from "./Techonolgies.module.css";
import {
  HTML5,
  CSS,
  Sass,
  Javascript,
  React,
  Nodejs,
  Express,
  MongoDb,
  GitHub,
  MySQL,
  PHP,
  CSharp,
  Java,
  Python,
} from "./TechIcons";

const Technologies = () => {
  return (
    <>
      <p style={{ textAlign: "left", margin: "0 100px 0 100px" }}>
        Knows (most proficient to least)...
      </p>
      <ul className={styles.iconList}>
        <li></li>
        <HTML5 />
        <CSS />
        <Javascript />
        <React />
        <GitHub />
        <Sass />
        <Nodejs />
        <Express />
        <MongoDb />
        <MySQL />
        <PHP />
        <CSharp />
        <Java />
        <Python />
      </ul>
    </>
  );
};

export default Technologies;
