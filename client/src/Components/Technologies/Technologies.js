import styles from "./Techonolgies.module.css";
import {
  CSharp,
  CSS,
  Express,
  GitHub,
  HTML5,
  Java,
  Javascript,
  MongoDb,
  MySQL,
  Nodejs,
  PHP,
  Python,
  React,
  Sass,
} from "./TechIcons";

const Technologies = () => {
  return (
    <ul className={styles.iconList}>
      <CSharp />
      <CSS />
      <Express />
      <GitHub />
      <HTML5 />
      <Java />
      <Javascript />
      <MongoDb />
      <MySQL />
      <Nodejs />
      <PHP />
      <Python />
      <React />
      <Sass />
    </ul>
  );
};

export default Technologies;
